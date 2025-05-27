
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
import CountdownTimer from '@/components/CountdownTimer';
import ReferralLink from '@/components/ReferralLink';
import { Timer, ExternalLink } from 'lucide-react';

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

  // Mock referral scratch card data
  const referralScratchCard = {
    available: user?.referralCount >= 5,
    nextAvailableAt: new Date(new Date().getFullYear() + 1, 0, 1), // Next January 1st
    potentialReward: country === 'in' ? '₹10,000 - ₹1,00,000' : '$1,000 - $10,000',
  };

  // Calculate subscription expiry date (today + 30 days if not available)
  const subscriptionExpiryDate = user?.subscriptionExpiryDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark-purple page-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Welcome, {user?.name || 'User'}</h1>
          {user?.referredBy && (
            <p className="text-muted-foreground mt-1">
              Referred by: <span className="text-primary">{user.referredBy}</span>
            </p>
          )}
        </div>

        {/* Subscription Timer */}
        <div className="mb-6">
          <CountdownTimer expiryDate={subscriptionExpiryDate} />
        </div>

        {/* Referral Link */}
        <div className="mb-6">
          <ReferralLink />
        </div>

        {/* TradingView Widget */}
        <Card className="mb-6 glass-section">
          <CardHeader>
            <CardTitle>SGSCRIPT.LIFE Training Analysis</CardTitle>
            <CardDescription>
              Real-time market data and Training analysis tools
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
            <Card className="mb-6 glass-section">
              <CardHeader>
                <CardTitle>SGSCRIPT</CardTitle>
                <CardDescription>
                  Premium Training View Indicator
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-full md:w-1/3">
                    <div className="aspect-square bg-card-gradient rounded-lg flex items-center justify-center">
                      <img 
                        src="/lovable-uploads/56d7c40a-054d-4c59-9aa0-7e191c68ff33.png" 
                        alt="SGSCRIPT Price" 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">Advanced Training Indicator</h3>
                    <p className="text-muted-foreground mb-4">
                      Get access to our premium Training indicators and analytics tools designed to help you improve your Training skills and make data-driven decisions.
                    </p>
                    <div className="flex items-center mb-6">
                      <div className="text-2xl font-bold mr-2">
                        {country === 'in' ? '₹10.00' : '$10.00'}
                      </div>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                        Monthly subscription
                      </span>
                    </div>
                    <Button 
                      className="w-full md:w-auto glass-button" 
                      onClick={handleBuyProduct}
                      disabled={hasPurchased}
                    >
                      {hasPurchased ? 'Already Purchased' : 'Buy Now'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Monthly Scratch Card */}
            <Card className="mb-6 overflow-hidden glass-section">
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
                    
                    {/* Referral Scratch Card Note */}
                    <div className="p-3 bg-primary/10 rounded-md">
                      <p className="text-sm flex items-center">
                        <Timer size={16} className="mr-2 text-primary" />
                        <span>
                          <strong>Bonus:</strong> Get an additional scratch card for every 5 friends you refer!
                          {user?.referralCount && user.referralCount > 0 ? (
                            <span className="ml-1">Current referrals: {user.referralCount}/5</span>
                          ) : null}
                        </span>
                      </p>
                    </div>
                    
                    <div className="mt-3 p-3 bg-primary/10 rounded-md">
                      <p className="text-sm">
                        Your next scratch card will be active on <strong>{formatDate(scratchCard.activeDate)}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Referral Scratch Card */}
            <Card className="mb-6 overflow-hidden glass-section">
              <div className="bg-gradient-to-r from-yellow-400/20 to-purple-400/20 h-2"></div>
              <CardHeader>
                <CardTitle>Referral Scratch Card</CardTitle>
                <CardDescription>
                  Annual rewards for Club members based on referral achievements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-full md:w-1/3">
                    <div 
                      className={`aspect-square rounded-lg border-2 border-dashed flex flex-col items-center justify-center p-4
                        ${referralScratchCard.available ? 'border-yellow-400/60 bg-gradient-to-br from-yellow-400/10 to-purple-400/10' : 'border-muted-foreground/30'}`}
                    >
                      <div className="text-lg font-bold mb-2">Club Scratch Card</div>
                      <div className="text-sm text-muted-foreground mb-3 text-center">
                        {referralScratchCard.available ? 
                          `Available ${formatDate(referralScratchCard.nextAvailableAt)}` : 
                          'Reach 25 referrals to unlock'
                        }
                      </div>
                      {referralScratchCard.available && (
                        <div className="text-lg font-bold text-center bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">
                          {referralScratchCard.potentialReward}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">Club Rewards</h3>
                    <p className="text-muted-foreground mb-4">
                      Join our exclusive referral club and earn massive annual rewards through special scratch cards.
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between p-2 rounded border border-gray-400/20">
                        <span className="text-sm">Silver Club (25 referrals)</span>
                        <span className="font-semibold text-gray-300">
                          {country === 'in' ? '₹10,000' : '$1,000'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded border border-yellow-400/20">
                        <span className="text-sm">Gold Club (50 referrals)</span>
                        <span className="font-semibold text-yellow-400">
                          {country === 'in' ? '₹50,000' : '$5,000'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded border border-purple-400/20">
                        <span className="text-sm">Platinum Club (100 referrals)</span>
                        <span className="font-semibold text-purple-400">
                          {country === 'in' ? '₹1,00,000' : '$10,000'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-xs text-muted-foreground">
                      * Club rewards are delivered annually as scratch cards on January 1st
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4">
            <Card className="mb-6 glass-premium">
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
                    <span className="text-muted-foreground">Training View ID</span>
                    <span>
                      {user?.tradingviewId ? (
                        user.tradingviewId
                      ) : (
                        <span className="text-muted-foreground">Not set</span>
                      )}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => navigate('/referrals')}
                      className="text-muted-foreground hover:text-primary cursor-pointer flex items-center gap-1"
                    >
                      Referral Count
                      <ExternalLink size={14} />
                    </button>
                    <span>
                      {user?.referralCount || 0}
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline" onClick={() => navigate('/profile')} className="glass-button">
                  Edit Profile
                </Button>
              </CardFooter>
            </Card>

            <Card className="glass-premium">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Having issues with your account or product? Our support team is here to help.
                </p>
                <Button variant="outline" className="w-full glass-button">
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
