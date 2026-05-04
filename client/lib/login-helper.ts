// Helper function for login pages to support both real and mock authentication

import { mockLogin } from './mock-auth';

export async function handleLoginWithFallback(
  username: string,
  password: string,
  expectedRole: string,
  loginFunction: (username: string, password: string) => Promise<any>
): Promise<{ success: boolean; error?: string }> {
  try {
    // Try normal login first
    await loginFunction(username, password);
    return { success: true };
  } catch (err: any) {
    // If normal login fails, try mock authentication
    console.log('Normal login failed, trying mock authentication...');
    
    const mockUser = mockLogin(username, password);
    
    if (mockUser && mockUser.role === expectedRole) {
      // Store mock user
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(mockUser));
        localStorage.setItem('token', 'mock-token-' + mockUser.id);
      }
      return { success: true };
    } else if (mockUser) {
      return { 
        success: false, 
        error: `Wrong role! This is ${expectedRole} login. Use ${expectedRole.toLowerCase()} credentials.` 
      };
    } else {
      return { 
        success: false, 
        error: `Invalid credentials. Try: edusphere${expectedRole.toLowerCase()}@gmail.com` 
      };
    }
  }
}

export const TEST_CREDENTIALS = {
  STUDENT: {
    email: 'eduspherestudent@gmail.com',
    password: 'student123'
  },
  TEACHER: {
    email: 'edusphereteacher@gmail.com',
    password: 'teacher123'
  },
  PARENT: {
    email: 'edusphereparent@gmail.com',
    password: 'parent123'
  },
  ADMIN: {
    email: 'edusphereadmin@gmail.com',
    password: 'admin123'
  },
  ACCOUNTANT: {
    email: 'edusphereaccountant@gmail.com',
    password: 'accountant123'
  },
  TRANSPORT_MANAGER: {
    email: 'eduspheretransportmanager@gmail.com',
    password: 'transportmanager123'
  }
};
