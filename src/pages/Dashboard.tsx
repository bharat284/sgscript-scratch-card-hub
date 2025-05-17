
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { useCurrency } from '@/context/CurrencyContext';
import { useCountry } from '@/components/CountrySelect';
import Navbar from '@/components/Navbar';
import { useToast } from '@/hooks/use-toast';
import TradingViewWidget from '@/components/TradingViewWidget';

const Dashboard = () => {
  const { user } = useAuth();
  const { formatPrice } = useCurrency();
  const { country } = useCountry();
  const navigate = useNavigate();
  const { toast } = useToast();

  // This would be replaced with actual logic to check if user has purchased SGSCRIPT
  const hasPurchased = false;

  const handleBuyProduct = () => {
    // This would be replaced with actual payment gateway integration
    toast({
      title: "Payment Processing",
      description: "Redirecting to payment gateway..."
    });
    
    // Simulate successful payment after a delay
    setTimeout(() => {
      navigate('/tradingview-setup');
    }, 2000);
  };

  // Mock scratch card data
  const scratchCard = {
    available: true,
    activeDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1),
    amount: country === 'in' ? '₹2' : '$0.02',
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark-purple">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold mb-8">Welcome, {user?.name || 'User'}</h1>

        {/* TradingView Widget */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>SGSCRIPT.LIFE Market Analysis</CardTitle>
            <CardDescription>
              Real-time market data and analysis tools
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-[500px] w-full">
              <TradingViewWidget 
                theme="dark" 
                symbol="BINANCE:BTCUSDT" 
                autosize={true}
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="md:col-span-8">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>SGSCRIPT</CardTitle>
                <CardDescription>
                  Premium Trading View Indicator
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-full md:w-1/3">
                    <div className="aspect-square bg-card-gradient rounded-lg flex items-center justify-center">
                      <div className="text-2xl font-bold text-gradient">SGSCRIPT</div>
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">Advanced Trading Indicator</h3>
                    <p className="text-muted-foreground mb-4">
                      SGSCRIPT provides professional-grade trading signals and analysis tools to help you make better trading decisions.
                    </p>
                    <div className="flex items-center mb-6">
                      <div className="text-2xl font-bold mr-2">{formatPrice(10)}</div>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                        Monthly subscription
                      </span>
                    </div>
                    <Button 
                      className="w-full md:w-auto" 
                      onClick={handleBuyProduct}
                      disabled={hasPurchased}
                    >
                      {hasPurchased ? 'Already Purchased' : 'Buy Now'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Scratch Card */}
            <Card className="mb-6 overflow-hidden">
              <div className="bg-card-gradient h-2"></div>
              <CardHeader>
                <CardTitle>Monthly Rewards</CardTitle>
                <CardDescription>
                  Get a scratch card at the end of every subscription month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-full md:w-1/3">
                    <div 
                      className={`aspect-square rounded-lg border-2 border-dashed flex flex-col items-center justify-center p-4
                        ${scratchCard.available ? 'border-primary/60 bg-primary/10' : 'border-muted-foreground/30'}`}
                    >
                      <div className="text-lg font-bold mb-2">Scratch Card</div>
                      <div className="text-sm text-muted-foreground mb-3">
                        Active on {formatDate(scratchCard.activeDate)}
                      </div>
                      {scratchCard.available && (
                        <div className="text-2xl font-bold text-primary">
                          Win up to {country === 'in' ? '₹1000' : '$10'}!
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">Monthly Scratch Cards</h3>
                    <p className="text-muted-foreground mb-2">
                      Every active subscriber receives a scratch card that becomes available at the end of the month.
                    </p>
                    <ul className="list-disc list-inside mb-4 space-y-1 text-sm text-muted-foreground">
                      <li>
                        Regular prizes: {country === 'in' ? '₹1, ₹2, or ₹3' : '$0.01, $0.02, or $0.03'}
                      </li>
                      <li>
                        Special prizes: Two lucky users win {country === 'in' ? '₹500 and ₹1000' : '$5 and $10'}!
                      </li>
                      <li>Prizes are credited to your wallet or bank account</li>
                    </ul>
                    <div className="p-3 bg-primary/10 rounded-md">
                      <p className="text-sm">
                        Your next scratch card will be active on <strong>{formatDate(scratchCard.activeDate)}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Account Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Email Verified</span>
                    <span>
                      {user?.emailVerified ? (
                        <span className="text-green-500">Verified</span>
                      ) : (
                        <Button variant="link" size="sm" className="p-0 h-auto">
                          Verify Now
                        </Button>
                      )}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Phone Verified</span>
                    <span>
                      {user?.phoneVerified ? (
                        <span className="text-green-500">Verified</span>
                      ) : (
                        <Button variant="link" size="sm" className="p-0 h-auto">
                          Verify Now
                        </Button>
                      )}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Trading View ID</span>
                    <span>
                      {user?.tradingviewId ? (
                        user.tradingviewId
                      ) : (
                        <span className="text-muted-foreground">Not set</span>
                      )}
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline" onClick={() => navigate('/profile')}>
                  Edit Profile
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Having issues with your account or product? Our support team is here to help.
                </p>
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
