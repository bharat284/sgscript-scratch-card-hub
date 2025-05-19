
import React, { createContext, useContext, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Language = 'en' | 'hi' | 'ur' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

// Simple translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    home: 'Home',
    about: 'About',
    products: 'Products',
    contact: 'Contact',
    login: 'Login',
    signup: 'Sign Up',
  },
  hi: {
    home: 'होम',
    about: 'हमारे बारे में',
    products: 'उत्पाद',
    contact: 'संपर्क',
    login: 'लॉग इन',
    signup: 'साइन अप',
  },
  ur: {
    home: 'ہوم',
    about: 'ہمارے بارے میں',
    products: 'مصنوعات',
    contact: 'رابطہ',
    login: 'لاگ ان',
    signup: 'سائن اپ',
  },
  ar: {
    home: 'الرئيسية',
    about: 'عن الشركة',
    products: 'المنتجات',
    contact: 'اتصل بنا',
    login: 'تسجيل الدخول',
    signup: 'التسجيل',
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const LanguageSwitch: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Select
      value={language}
      onValueChange={(value) => setLanguage(value as Language)}
    >
      <SelectTrigger className="w-[80px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">ENG</SelectItem>
        <SelectItem value="hi">HINDI</SelectItem>
        <SelectItem value="ur">URDU</SelectItem>
        <SelectItem value="ar">ARABIC</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitch;
