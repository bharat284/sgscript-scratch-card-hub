
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { useCountry } from '@/components/CountrySelect';
import Navbar from '@/components/Navbar';
import { ArrowLeft, Users, Trophy, Calendar } from 'lucide-react';

const Referrals = () => {
  const { user } = useAuth();
  const { country } = useCountry();
  const navigate = useNavigate();

  // Mock referral data - this would come from your backend
  const referralData = {
    totalReferrals: user?.referralCount || 0,
    activeReferrals: 8,
    pendingReferrals: 2,
    clubProgress: {
      silver: { required: 25, current: user?.referralCount || 0, timeLeft: '3 months' },
      gold: { required: 50, current: user?.referralCount || 0, timeLeft: '7 months' },
      platinum: { required: 100, current: user?.referralCount || 0, timeLeft: '11 months' }
    },
    recentReferrals: [
      { name: 'John Doe', email: 'j***@email.com', status: 'Active', joinDate: '2024-01-15' },
      { name: 'Jane Smith', email: 'j***@email.com', status: 'Active', joinDate: '2024-01-10' },
      { name: 'Mike Johnson', email: 'm***@email.com', status: 'Pending', joinDate: '2024-01-08' },
    ]
  };

  const getClubReward = (tier: string) => {
    const rewards = {
      silver: country === 'in' ? '₹10,000' : '$1,000',
      gold: country === 'in' ? '₹50,000' : '$5,000',
      platinum: country === 'in' ? '₹1,00,000' : '$10,000'
    };
    return rewards[tier as keyof typeof rewards];
  };

  const getProgressPercentage = (current: number, required: number) => {
    return Math.min((current / required) * 100, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark-purple page-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="mb-6 flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate('/dashboard')} className="flex items-center gap-2">
            <ArrowLeft size={20} />
            Back to Dashboard
          </Button>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Referral Dashboard</h1>
          <p className="text-muted-foreground">Track your referrals and club progress</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-section">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{referralData.totalReferrals}</div>
              <p className="text-xs text-muted-foreground">
                {referralData.activeReferrals} active, {referralData.pendingReferrals} pending
              </p>
            </CardContent>
          </Card>

          <Card className="glass-section">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Club Tier</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Silver</div>
              <p className="text-xs text-muted-foreground">
                {25 - referralData.totalReferrals} more referrals needed
              </p>
            </CardContent>
          </Card>

          <Card className="glass-section">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Time Remaining</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3m</div>
              <p className="text-xs text-muted-foreground">
                Until Silver deadline
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Club Progress */}
        <Card className="mb-8 glass-section">
          <CardHeader>
            <CardTitle>Club Progress</CardTitle>
            <CardDescription>
              Track your progress towards each club tier and their rewards
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {Object.entries(referralData.clubProgress).map(([tier, data]) => (
              <div key={tier} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${
                      tier === 'silver' ? 'bg-gray-400' : 
                      tier === 'gold' ? 'bg-yellow-400' : 
                      'bg-purple-400'
                    }`}></span>
                    <span className="font-medium capitalize">{tier} Club</span>
                    <span className="text-sm text-muted-foreground">
                      ({data.current}/{data.required} referrals)
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{getClubReward(tier)}</div>
                    <div className="text-xs text-muted-foreground">{data.timeLeft} left</div>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all ${
                      tier === 'silver' ? 'bg-gray-400' : 
                      tier === 'gold' ? 'bg-yellow-400' : 
                      'bg-purple-400'
                    }`}
                    style={{ width: `${getProgressPercentage(data.current, data.required)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Referrals */}
        <Card className="glass-section">
          <CardHeader>
            <CardTitle>Recent Referrals</CardTitle>
            <CardDescription>
              Your latest referral activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {referralData.recentReferrals.map((referral, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-white/10">
                  <div>
                    <p className="font-medium">{referral.name}</p>
                    <p className="text-sm text-muted-foreground">{referral.email}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                      referral.status === 'Active' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {referral.status}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">{referral.joinDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Referrals;
