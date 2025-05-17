
import React, { createContext, useContext, ReactNode } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

type CurrencyType = 'USD' | 'INR';

interface CurrencyContextType {
  currency: CurrencyType;
  setCurrency: (value: CurrencyType) => void;
  formatPrice: (amount: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useLocalStorage<CurrencyType>('currency', 'USD');

  const formatPrice = (amount: number): string => {
    const exchangeRate = 83; // 1 USD = 83 INR approximately
    
    if (currency === 'INR') {
      const inrAmount = amount * exchangeRate;
      return `₹${inrAmount.toFixed(2)}`;
    }
    
    return `$${amount.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
