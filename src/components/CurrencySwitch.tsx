
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useCurrency } from '@/context/CurrencyContext';

export const CurrencySwitch = () => {
  const { currency, setCurrency } = useCurrency();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-20">
          {currency === 'USD' ? '$' : '₹'} {currency}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setCurrency('USD')}>
          $ USD
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setCurrency('INR')}>
          ₹ INR
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
