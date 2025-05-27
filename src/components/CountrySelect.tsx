
import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Country = 'in' | 'ae' | 'us' | 'uk' | 'ca' | 'au';

interface CountryContextType {
  country: Country;
  setCountry: (country: Country) => void;
  isLoading: boolean;
}

const countries = {
  in: 'India',
  ae: 'UAE',
  us: 'USA',
  uk: 'UK',
  ca: 'Canada',
  au: 'Australia'
};

const CountryContext = createContext<CountryContextType>({
  country: 'us',
  setCountry: () => {},
  isLoading: false,
});

export const useCountry = () => useContext(CountryContext);

const detectCountryFromIP = async (): Promise<Country> => {
  try {
    // Using a free IP geolocation service
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    console.log('Detected country code:', data.country_code);
    
    // Map country codes to our supported countries
    const countryMap: { [key: string]: Country } = {
      'IN': 'in',
      'AE': 'ae', 
      'US': 'us',
      'GB': 'uk',
      'UK': 'uk',
      'CA': 'ca',
      'AU': 'au'
    };
    
    const detectedCountry = countryMap[data.country_code?.toUpperCase()] || 'us';
    console.log('Mapped to country:', detectedCountry);
    
    return detectedCountry;
  } catch (error) {
    console.error('Failed to detect country:', error);
    // Default to US if detection fails
    return 'us';
  }
};

export const CountryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [country, setCountry] = useState<Country>('us');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeCountry = async () => {
      try {
        const detectedCountry = await detectCountryFromIP();
        setCountry(detectedCountry);
      } catch (error) {
        console.error('Error initializing country:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeCountry();
  }, []);

  return (
    <CountryContext.Provider value={{ country, setCountry, isLoading }}>
      {children}
    </CountryContext.Provider>
  );
};

export const CountrySelect: React.FC<{ className?: string }> = ({ className }) => {
  const { country, setCountry, isLoading } = useCountry();

  if (isLoading) {
    return (
      <div className="w-[90px] h-10 bg-muted animate-pulse rounded"></div>
    );
  }

  return (
    <Select
      value={country}
      onValueChange={(value) => setCountry(value as Country)}
    >
      <SelectTrigger className="w-[90px]">
        <SelectValue placeholder="Country" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="in">India</SelectItem>
        <SelectItem value="ae">UAE</SelectItem>
        <SelectItem value="us">USA</SelectItem>
        <SelectItem value="uk">UK</SelectItem>
        <SelectItem value="ca">Canada</SelectItem>
        <SelectItem value="au">Australia</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default CountrySelect;
