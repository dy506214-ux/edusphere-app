import axios from 'axios';
import { API_BASE_URL } from './apiConfig';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Crucial for HttpOnly cookies
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to normalize paths
apiClient.interceptors.request.use(
  (config) => {
    // Normalize URL to prevent double /api prefix
    if (config.url && config.url.startsWith('/api/')) {
      config.url = config.url.replace(/^\/api/, '');
    }

    // Note: No longer sending Authorization header from localStorage
    // Browser automatically sends 'auth_token' cookie if withCredentials is true
    
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle errors and retries
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;
    const status = error.response?.status;
    
    // Global 401 Unauthorized Handling (Session Expired)
    if (status === 401 && typeof window !== 'undefined') {
      const isLoginRequest = config?.url?.includes('/auth/login') || config?.url?.includes('/login');
      if (window.location.pathname !== '/login' && !isLoginRequest) {
        // Clear local cache
        localStorage.removeItem('user');
        window.location.href = '/login?reason=session_expired';
      }
      return Promise.reject(error);
    }

    // RETRY LOGIC: Only retry on 5xx server errors (not network failures)
    if (status && status >= 500 && (!config.__retryCount || config.__retryCount < 1)) {
      config.__retryCount = (config.__retryCount || 0) + 1;
      await new Promise(resolve => setTimeout(resolve, 500));
      return apiClient(config);
    }

    // Global 5xx / Network Error Handling for UX
    if (!status || status >= 500) {
      console.error('[API_FATAL_ERROR]:', {
        endpoint: config?.url,
        message: error.message,
        status: status || 'NETWORK_FAILURE'
      });
      // Silently fail - let individual pages handle the error with mock auth fallback
    }

    return Promise.reject(error);
  }
);

export default apiClient;
