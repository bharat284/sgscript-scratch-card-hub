
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const countryCodes = [
  { code: 'in', dialCode: '+91', flag: '🇮🇳' },
  { code: 'ae', dialCode: '+971', flag: '🇦🇪' },
  { code: 'us', dialCode: '+1', flag: '🇺🇸' },
  { code: 'uk', dialCode: '+44', flag: '🇬🇧' },
  { code: 'ca', dialCode: '+1', flag: '🇨🇦' },
  { code: 'au', dialCode: '+61', flag: '🇦🇺' },
];

interface PhoneInputProps {
  value: string;
  onChange: (phoneNumber: string, countryCode: string) => void;
  error?: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ value, onChange, error }) => {
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [phoneNumber, setPhoneNumber] = useState(value);

  const handleCountryChange = (code: string) => {
    const country = countryCodes.find(c => c.code === code) || countryCodes[0];
    setSelectedCountry(country);
    onChange(phoneNumber, country.dialCode);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = e.target.value.replace(/\D/g, ''); // Remove non-digits
    setPhoneNumber(newNumber);
    onChange(newNumber, selectedCountry.dialCode);
  };

  return (
    <div className="flex">
      <div className="mr-2">
        <Select value={selectedCountry.code} onValueChange={handleCountryChange}>
          <SelectTrigger className="w-[100px]">
            <span className="mr-2">{selectedCountry.flag}</span>
            <SelectValue placeholder={selectedCountry.dialCode} />
          </SelectTrigger>
          <SelectContent>
            {countryCodes.map((country) => (
              <SelectItem key={country.code} value={country.code}>
                <div className="flex items-center">
                  <span className="mr-2">{country.flag}</span>
                  <span>{country.dialCode}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex-1">
        <Input 
          value={phoneNumber} 
          onChange={handlePhoneNumberChange} 
          placeholder="Phone number" 
          className={error ? "border-red-500" : ""}
        />
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
      </div>
    </div>
  );
};

export default PhoneInput;
