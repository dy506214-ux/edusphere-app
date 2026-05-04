'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI, User } from '@/lib/api/auth';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<User>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const validateSession = async () => {
      // Check for mock user first (for testing without backend)
      const mockUserStr = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
      if (mockUserStr) {
        try {
          const mockUser = JSON.parse(mockUserStr);
          setUser(mockUser);
          setIsLoading(false);
          return;
        } catch {
          // Invalid mock user, continue to normal auth
        }
      }

      const storedUser = authAPI.getCurrentUser();
      if (!storedUser) {
        setIsLoading(false);
        return;
      }

      try {
        // Validate token with server
        const profileRes = await authAPI.getProfile();
        if (profileRes?.user) {
          setUser(profileRes.user);
        } else {
          setUser(storedUser);
        }
      } catch {
        // Backend not available - keep stored user (mock or cached)
        setUser(storedUser);
      } finally {
        setIsLoading(false);
      }
    };
    validateSession();
  }, []);

  const login = async (email: string, password: string) => {
    const response = await authAPI.login({ email, password });
    setUser(response.user);
    return response.user;
  };

  const register = async (userData: any) => {
    const response = await authAPI.register(userData);
    setUser(response.user);
  };

  const logout = async () => {
    // Clear mock user from localStorage
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
    try {
      await authAPI.logout();
    } catch {
      // ignore if backend not available
    }
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
