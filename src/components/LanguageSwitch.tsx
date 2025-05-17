
import React, { createContext, useContext, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Language = 'en' | 'ur';

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
  ur: {
    home: 'ہوم',
    about: 'ہمارے بارے میں',
    products: 'مصنوعات',
    contact: 'رابطہ',
    login: 'لاگ ان',
    signup: 'سائن اپ',
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
      <SelectTrigger className="w-[70px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">EN</SelectItem>
        <SelectItem value="ur">UR</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitch;
