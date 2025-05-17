
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';

const TradingViewSetup = () => {
  const [step, setStep] = useState(1);
  const [tradingviewId, setTradingviewId] = useState('');
  const [upiId, setUpiId] = useState('');
  const [cryptoId, setCryptoId] = useState('');
  const [paymentType, setPaymentType] = useState('upi');
  const [isLoading, setIsLoading] = useState(false);
  
  const { updateUserProfile } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleNext = () => {
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const profileData: any = { tradingviewId };
      
      if (paymentType === 'upi') {
        profileData.upiId = upiId;
      } else {
        profileData.cryptoAccountId = cryptoId;
      }

      await updateUserProfile(profileData);
      
      toast({
        title: 'Profile updated',
        description: 'Your trading details have been saved',
      });
      
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to update profile',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark-purple">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Complete Your Setup</h1>
          <p className="text-muted-foreground mb-8">
            Let's configure your Trading View account and payment details
          </p>

          <div className="bg-card rounded-lg border border-border p-6 mb-8">
            <div className="flex justify-between mb-8">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 
                  ${step >= 1 ? 'bg-primary' : 'bg-muted'}`}>
                  1
                </div>
                <div>
                  <h3 className="font-medium">Create Trading View Account</h3>
                  <p className="text-sm text-muted-foreground">
                    {step > 1 ? 'Completed' : 'Current step'}
                  </p>
                </div>
              </div>
              {step > 1 && (
                <Button variant="ghost" onClick={() => setStep(1)}>
                  Edit
                </Button>
              )}
            </div>

            {step === 1 && (
              <div>
                <div className="space-y-6">
                  <div className="p-4 bg-primary/10 rounded-md">
                    <h4 className="font-medium mb-2">Instructions:</h4>
                    <ol className="list-decimal list-inside space-y-2 text-sm">
                      <li>Visit <a href="https://www.tradingview.com/sign-up/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">TradingView.com</a> and create a new account</li>
                      <li>Complete the registration process</li>
                      <li>Verify your email address</li>
                      <li>Go to your TradingView profile settings</li>
                      <li>Copy your TradingView username</li>
                    </ol>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tradingviewId">TradingView Username</Label>
                    <Input
                      id="tradingviewId"
                      placeholder="Your TradingView username"
                      value={tradingviewId}
                      onChange={(e) => setTradingviewId(e.target.value)}
                    />
                  </div>

                  <Button onClick={handleNext} disabled={!tradingviewId}>
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">Payment Details</h3>
                    <p className="text-sm text-muted-foreground">Current step</p>
                  </div>
                </div>

                <Tabs defaultValue="upi" onValueChange={setPaymentType}>
                  <TabsList className="mb-6">
                    <TabsTrigger value="upi">UPI (India)</TabsTrigger>
                    <TabsTrigger value="crypto">Crypto (International)</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="upi" className="space-y-6">
                    <div className="p-4 bg-primary/10 rounded-md">
                      <p className="text-sm">
                        For Indian users, please provide your UPI ID to receive scratch card rewards.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="upiId">UPI ID</Label>
                      <Input
                        id="upiId"
                        placeholder="your-upi@bank"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="crypto" className="space-y-6">
                    <div className="p-4 bg-primary/10 rounded-md">
                      <p className="text-sm">
                        For international users, please provide your crypto wallet address to receive USDT rewards.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cryptoId">USDT Wallet Address</Label>
                      <Input
                        id="cryptoId"
                        placeholder="Your USDT wallet address"
                        value={cryptoId}
                        onChange={(e) => setCryptoId(e.target.value)}
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Make sure to provide a wallet that supports TRC20 network
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="flex justify-between mt-6">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button type="submit" onClick={handleSubmit} disabled={isLoading || (paymentType === 'upi' && !upiId) || (paymentType === 'crypto' && !cryptoId)}>
                    {isLoading ? 'Saving...' : 'Save & Complete'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingViewSetup;
