// Mock Authentication for Testing Dashboard Panels
// This allows testing without database setup

export interface MockUser {
  id: string;
  email: string;
  password: string;
  role: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export const MOCK_USERS: MockUser[] = [
  {
    id: '1',
    email: 'eduspherestudent@gmail.com',
    password: 'student123',
    role: 'STUDENT',
    firstName: 'Test',
    lastName: 'Student',
    phone: '1234567890'
  },
  {
    id: '2',
    email: 'edusphereteacher@gmail.com',
    password: 'teacher123',
    role: 'TEACHER',
    firstName: 'Test',
    lastName: 'Teacher',
    phone: '1234567891'
  },
  {
    id: '3',
    email: 'edusphereparent@gmail.com',
    password: 'parent123',
    role: 'PARENT',
    firstName: 'Test',
    lastName: 'Parent',
    phone: '1234567892'
  },
  {
    id: '4',
    email: 'edusphereadmin@gmail.com',
    password: 'admin123',
    role: 'ADMIN',
    firstName: 'Test',
    lastName: 'Admin',
    phone: '1234567893'
  },
  {
    id: '5',
    email: 'edusphereaccountant@gmail.com',
    password: 'accountant123',
    role: 'ACCOUNTANT',
    firstName: 'Test',
    lastName: 'Accountant',
    phone: '1234567894'
  },
  {
    id: '6',
    email: 'eduspheretransportmanager@gmail.com',
    password: 'transportmanager123',
    role: 'TRANSPORT_MANAGER',
    firstName: 'Test',
    lastName: 'Transport Manager',
    phone: '1234567895'
  },
  // ── Demo School Credentials ──────────────────────────────────────
  {
    id: '7',
    email: 'admin@demoschool.com',
    password: 'School123!',
    role: 'ADMIN',
    firstName: 'Demo',
    lastName: 'Admin',
    phone: '9999999999'
  },
  {
    id: '8',
    email: 'student@demoschool.com',
    password: 'School123!',
    role: 'STUDENT',
    firstName: 'Demo',
    lastName: 'Student',
    phone: '9999999998'
  },
  {
    id: '9',
    email: 'teacher@demoschool.com',
    password: 'School123!',
    role: 'TEACHER',
    firstName: 'Demo',
    lastName: 'Teacher',
    phone: '9999999997'
  },
  {
    id: '10',
    email: 'parent@demoschool.com',
    password: 'School123!',
    role: 'PARENT',
    firstName: 'Demo',
    lastName: 'Parent',
    phone: '9999999996'
  },
  {
    id: '11',
    email: 'accountant@demoschool.com',
    password: 'School123!',
    role: 'ACCOUNTANT',
    firstName: 'Demo',
    lastName: 'Accountant',
    phone: '9999999995'
  },
  {
    id: '12',
    email: 'transport@demoschool.com',
    password: 'School123!',
    role: 'TRANSPORT_MANAGER',
    firstName: 'Demo',
    lastName: 'Transport',
    phone: '9999999994'
  },
];

export function mockLogin(email: string, password: string): MockUser | null {
  const user = MOCK_USERS.find(u => u.email === email && u.password === password);
  if (user) {
    // Store in localStorage for persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('mockUser', JSON.stringify(user));
      localStorage.setItem('mockToken', 'mock-jwt-token-' + user.id);
    }
    return user;
  }
  return null;
}

export function mockLogout(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('mockUser');
    localStorage.removeItem('mockToken');
  }
}

export function getMockUser(): MockUser | null {
  if (typeof window !== 'undefined') {
    const userStr = localStorage.getItem('mockUser');
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch {
        return null;
      }
    }
  }
  return null;
}

export function isMockAuthenticated(): boolean {
  if (typeof window !== 'undefined') {
    return !!localStorage.getItem('mockToken');
  }
  return false;
}
