
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

// Define user roles
export type UserRole = 'superAdmin' | 'hrAdmin' | 'employee' | 'intern';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department?: string;
  position?: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

// Mock user data for demonstration
const mockUsers: Record<string, User> = {
  'superadmin@example.com': {
    id: '1',
    name: 'Super Admin',
    email: 'superadmin@example.com',
    role: 'superAdmin',
    avatar: '/avatar-admin.jpg'
  },
  'hradmin@example.com': {
    id: '2',
    name: 'HR Manager',
    email: 'hradmin@example.com',
    role: 'hrAdmin',
    department: 'Human Resources',
    position: 'HR Manager',
    avatar: '/avatar-hr.jpg'
  },
  'employee@example.com': {
    id: '3',
    name: 'John Employee',
    email: 'employee@example.com',
    role: 'employee',
    department: 'Engineering',
    position: 'Software Engineer',
    avatar: '/avatar-employee.jpg'
  },
  'intern@example.com': {
    id: '4',
    name: 'Sarah Intern',
    email: 'intern@example.com',
    role: 'intern',
    department: 'Marketing',
    position: 'Marketing Intern',
    avatar: '/avatar-intern.jpg'
  }
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check if there's a saved user session in localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('hrms_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string, role: UserRole) => {
    setLoading(true);
    
    // For demo purposes, we're using mock authentication
    // In a real app, this would be an API call to a backend
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const mockUser = mockUsers[email.toLowerCase()];
        
        if (mockUser && mockUser.role === role) {
          setUser(mockUser);
          localStorage.setItem('hrms_user', JSON.stringify(mockUser));
          
          // Redirect based on role
          switch(role) {
            case 'superAdmin':
              navigate('/admin/dashboard');
              break;
            case 'hrAdmin':
              navigate('/hr/dashboard');
              break;
            case 'employee':
              navigate('/employee/dashboard');
              break;
            case 'intern':
              navigate('/intern/dashboard');
              break;
          }
          resolve();
        } else {
          reject(new Error('Invalid credentials or role'));
        }
        setLoading(false);
      }, 1000); // Simulate network delay
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('hrms_user');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};
