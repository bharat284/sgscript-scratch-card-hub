
import React, { createContext, useContext, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Country = 'in' | 'us' | 'uk' | 'ca' | 'au';

interface CountryContextType {
  country: Country;
  setCountry: (country: Country) => void;
}

const countries = {
  in: 'India',
  us: 'USA',
  uk: 'UK',
  ca: 'Canada',
  au: 'Australia'
};

const CountryContext = createContext<CountryContextType>({
  country: 'in',
  setCountry: () => {},
});

export const useCountry = () => useContext(CountryContext);

export const CountryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [country, setCountry] = useState<Country>('in');

  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      {children}
    </CountryContext.Provider>
  );
};

export const CountrySelect: React.FC = () => {
  const { country, setCountry } = useCountry();

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
        <SelectItem value="us">USA</SelectItem>
        <SelectItem value="uk">UK</SelectItem>
        <SelectItem value="ca">Canada</SelectItem>
        <SelectItem value="au">Australia</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default CountrySelect;
