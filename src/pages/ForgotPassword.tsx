
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { forgotPassword } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await forgotPassword(email);
      setIsSubmitted(true);
      toast({
        title: 'Reset link sent',
        description: 'Check your email for a password reset link',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to send reset email',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark-purple">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-card rounded-lg shadow-lg border border-border">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Reset Password</h1>
            <p className="text-muted-foreground mt-2">
              Enter your email to receive a password reset link
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Sending...' : 'Send Reset Link'}
                </Button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <div className="mb-6 p-3 bg-brand-purple/10 rounded-md">
                <p>
                  A password reset link has been sent to <strong>{email}</strong>
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Check your email inbox and follow the instructions to reset your password.
                </p>
              </div>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setIsSubmitted(false)}
              >
                Try another email
              </Button>
            </div>
          )}

          <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground">
              Remember your password?{' '}
              <Link to="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
