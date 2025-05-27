
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name?: string;
  phone?: string;
  tradingviewId?: string;
  upiId?: string;
  cryptoAccountId?: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  referredBy?: string;
  referralCount?: number;
  subscriptionExpiryDate?: Date;
  role?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string, phone: string, referredBy?: string) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, newPassword: string) => Promise<void>;
  updateUserProfile: (userData: Partial<User>) => Promise<void>;
  verifyEmail: (otp: string) => Promise<void>;
  verifyPhone: (otp: string) => Promise<void>;
  requestEmailVerification: () => Promise<void>;
  requestPhoneVerification: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Test user accounts for development
const testUsers = {
  'test@example.com': {
    password: 'password',
    userData: {
      id: '1',
      email: 'test@example.com',
      name: 'Test User',
      phone: '+1 234 567 8901',
      emailVerified: true,
      phoneVerified: true,
      referredBy: 'Organic',
      referralCount: 2,
      subscriptionExpiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      role: 'user',
    }
  },
  'admin@sgscript.com': {
    password: 'admin123',
    userData: {
      id: '7',
      email: 'admin@sgscript.com',
      name: 'Admin User',
      phone: '+1 800 555 0199',
      tradingviewId: 'admin_tv',
      emailVerified: true,
      phoneVerified: true,
      referredBy: null,
      referralCount: 0,
      subscriptionExpiryDate: null,
      role: 'admin',
    }
  },
  'grace@example.com': {
    password: 'vip123',
    userData: {
      id: '10',
      email: 'grace@example.com',
      name: 'Grace Lee',
      phone: '+82 2 1234 5678',
      tradingviewId: 'gracelee_tv',
      emailVerified: true,
      phoneVerified: true,
      referredBy: null,
      referralCount: 150,
      subscriptionExpiryDate: new Date('2024-09-30'),
      role: 'vip',
    }
  },
  'jane@example.com': {
    password: 'jane123',
    userData: {
      id: '2',
      email: 'jane@example.com',
      name: 'Jane Smith',
      phone: '+1 234 567 8902',
      tradingviewId: 'janesmith_tv',
      emailVerified: false,
      phoneVerified: true,
      referredBy: 'John Doe',
      referralCount: 8,
      subscriptionExpiryDate: null,
      role: 'user',
    }
  },
  'frank@example.com': {
    password: 'frank123',
    userData: {
      id: '9',
      email: 'frank@example.com',
      name: 'Frank Wilson',
      phone: '+61 2 9876 5432',
      tradingviewId: null,
      emailVerified: true,
      phoneVerified: false,
      referredBy: 'Diana Prince',
      referralCount: 0,
      subscriptionExpiryDate: null,
      role: 'user',
    }
  },
  'diana@example.com': {
    password: 'diana123',
    userData: {
      id: '6',
      email: 'diana@example.com',
      name: 'Diana Prince',
      phone: '+1 555 123 4567',
      tradingviewId: 'dianaprince_tv',
      emailVerified: false,
      phoneVerified: false,
      referredBy: 'Bob Johnson',
      referralCount: 3,
      subscriptionExpiryDate: new Date('2024-01-15'),
      role: 'user',
    }
  },
};

// For demo purposes, we'll simulate auth with localStorage
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Mock login function with test accounts
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // This would be replaced with an actual API call
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
      
      // Check if it's a test account
      const testUser = testUsers[email as keyof typeof testUsers];
      if (testUser && testUser.password === password) {
        localStorage.setItem('user', JSON.stringify(testUser.userData));
        setUser(testUser.userData);
      } else {
        throw new Error('Invalid email or password');
      }
    } finally {
      setLoading(false);
    }
  };

  // Mock signup function
  const signup = async (email: string, password: string, name: string, phone: string, referredBy?: string) => {
    setLoading(true);
    try {
      // This would be replaced with an actual API call
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
      
      const userData: User = {
        id: Date.now().toString(),
        email,
        name,
        phone,
        emailVerified: false,
        phoneVerified: false,
        referredBy: referredBy || 'Organic',
        referralCount: 0,
        subscriptionExpiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
        role: 'user',
      };
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const forgotPassword = async (email: string) => {
    // This would be replaced with an actual API call
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
    console.log(`Password reset email sent to ${email}`);
  };

  const resetPassword = async (token: string, newPassword: string) => {
    // This would be replaced with an actual API call
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
    console.log(`Password reset with token ${token}`);
  };

  const updateUserProfile = async (userData: Partial<User>) => {
    setLoading(true);
    try {
      // This would be replaced with an actual API call
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
      
      if (user) {
        const updatedUser = { ...user, ...userData };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setUser(updatedUser);
      }
    } finally {
      setLoading(false);
    }
  };

  const verifyEmail = async (otp: string) => {
    // This would be replaced with an actual API call
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
    
    if (user) {
      const updatedUser = { ...user, emailVerified: true };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
    }
  };

  const verifyPhone = async (otp: string) => {
    // This would be replaced with an actual API call
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
    
    if (user) {
      const updatedUser = { ...user, phoneVerified: true };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
    }
  };

  const requestEmailVerification = async () => {
    // This would be replaced with an actual API call
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
    console.log('Email verification code sent');
  };

  const requestPhoneVerification = async () => {
    // This would be replaced with an actual API call
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
    console.log('Phone verification code sent');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        signup,
        logout,
        forgotPassword,
        resetPassword,
        updateUserProfile,
        verifyEmail,
        verifyPhone,
        requestEmailVerification,
        requestPhoneVerification,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
