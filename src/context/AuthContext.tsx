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

  // Mock login function
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // This would be replaced with an actual API call
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
      
      if (email === 'test@example.com' && password === 'password') {
        const userData: User = {
          id: '1',
          email,
          emailVerified: false,
          phoneVerified: false,
          referredBy: 'Organic', // Default to organic
          referralCount: 2, // Mock some referrals
          subscriptionExpiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
        };
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
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
