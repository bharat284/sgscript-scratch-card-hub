import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/context/AuthContext';
import PhoneInput from '@/components/PhoneInput';
import { useToast } from '@/hooks/use-toast';

// Define FormErrors type
interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
}

// Update the schema to include referredBy
const signupSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
  referredBy: z.string().optional(),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

type SignupFormData = z.infer<typeof signupSchema>;

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [error, setError] = useState('');
  
  const { signup } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const refId = queryParams.get('ref') || '';

  const [referrerName, setReferrerName] = useState<string | null>(null);
  const [referredBy, setReferredBy] = useState(refId);

  // Parse query parameters to get referral info
  useEffect(() => {
    if (refId) {
      // This would typically be an API call to get the referrer's name
      // For demo purposes, we'll just simulate this
      const fetchReferrerName = async () => {
        setIsLoading(true);
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 500));
          
          // Mock response
          setReferrerName('John Doe'); // This would come from your backend
          setReferredBy(refId);
        } catch (error) {
          console.error('Failed to fetch referrer:', error);
        } finally {
          setIsLoading(false);
        }
      };
      
      fetchReferrerName();
    }
  }, [refId]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }

    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!phone) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (phone.length < 10) {
      newErrors.phone = 'Phone number is too short';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);

    try {
      // Add the referredBy field if it exists
      const fullName = `${firstName} ${lastName}`;
      const fullPhone = `${countryCode}${phone}`;
      await signup(email, password, fullName, fullPhone, referrerName || 'Organic');
      toast({
        title: 'Account created',
        description: 'Your account has been created successfully!',
      });
      navigate('/verify-account');
    } catch (error) {
      toast({
        title: 'Signup failed',
        description: error instanceof Error ? error.message : 'There was an error creating your account',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhoneChange = (phoneNumber: string, code: string) => {
    setPhone(phoneNumber);
    setCountryCode(code);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 page-background">
      <div className="max-w-md w-full glass-premium p-8 rounded-lg">
        <div className="text-center mb-6">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-bold text-gradient">SGSCRIPT</h1>
          </Link>
          <h2 className="text-xl font-medium mt-2">Create your account</h2>
          
          {/* Show referrer info if available */}
          {referrerName && (
            <div className="mt-2 p-2 bg-primary/10 rounded-md">
              <p className="text-sm">
                Referred by <span className="font-semibold text-primary">{referrerName}</span>
              </p>
            </div>
          )}
        </div>

        {error && (
          <div className="bg-destructive/20 text-destructive p-3 rounded-md mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={errors.firstName ? "border-red-500" : ""}
                />
                {errors.firstName && (
                  <p className="text-xs text-red-500">{errors.firstName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={errors.lastName ? "border-red-500" : ""}
                />
                {errors.lastName && (
                  <p className="text-xs text-red-500">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <PhoneInput 
                value={phone}
                onChange={handlePhoneChange}
                error={errors.phone}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={errors.password ? "border-red-500" : ""}
              />
              {errors.password && (
                <p className="text-xs text-red-500">{errors.password}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                placeholder="••••••••"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={errors.confirmPassword ? "border-red-500" : ""}
              />
              {errors.confirmPassword && (
                <p className="text-xs text-red-500">{errors.confirmPassword}</p>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full backdrop-blur-md bg-primary/80 hover:bg-primary/90 text-white" 
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm">
          <p className="text-muted-foreground">
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
