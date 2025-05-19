import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import CountdownTimer from '@/components/CountdownTimer';
import ReferralLink from '@/components/ReferralLink';

const Profile = () => {
  const { user, updateUserProfile, requestEmailVerification, requestPhoneVerification, verifyEmail, verifyPhone } = useAuth();
  const { toast } = useToast();

  const [name, setName] = useState(user?.name || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [tradingviewId, setTradingviewId] = useState(user?.tradingviewId || '');
  const [upiId, setUpiId] = useState(user?.upiId || '');
  const [cryptoAccountId, setCryptoAccountId] = useState(user?.cryptoAccountId || '');
  const [isLoading, setIsLoading] = useState(false);
  
  const [emailOtp, setEmailOtp] = useState('');
  const [phoneOtp, setPhoneOtp] = useState('');
  const [sendingEmailOtp, setSendingEmailOtp] = useState(false);
  const [sendingPhoneOtp, setSendingPhoneOtp] = useState(false);
  const [verifyingEmail, setVerifyingEmail] = useState(false);
  const [verifyingPhone, setVerifyingPhone] = useState(false);

  // Calculate subscription expiry date
  const subscriptionExpiryDate = user?.subscriptionExpiryDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await updateUserProfile({
        name,
        phone,
        tradingviewId,
        upiId,
        cryptoAccountId,
      });
      
      toast({
        title: 'Profile updated',
        description: 'Your profile has been updated successfully',
      });
    } catch (error) {
      toast({
        title: 'Update failed',
        description: error instanceof Error ? error.message : 'Failed to update profile',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendEmailOtp = async () => {
    setSendingEmailOtp(true);
    try {
      await requestEmailVerification();
      toast({
        title: 'Verification email sent',
        description: 'Please check your email for the OTP code',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to send verification email',
        variant: 'destructive',
      });
    } finally {
      setSendingEmailOtp(false);
    }
  };

  const handleVerifyEmail = async () => {
    setVerifyingEmail(true);
    try {
      await verifyEmail(emailOtp);
      toast({
        title: 'Email verified',
        description: 'Your email has been verified successfully',
      });
      setEmailOtp('');
    } catch (error) {
      toast({
        title: 'Verification failed',
        description: error instanceof Error ? error.message : 'Invalid OTP code',
        variant: 'destructive',
      });
    } finally {
      setVerifyingEmail(false);
    }
  };

  const handleSendPhoneOtp = async () => {
    setSendingPhoneOtp(true);
    try {
      await requestPhoneVerification();
      toast({
        title: 'SMS sent',
        description: 'Please check your phone for the OTP code',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to send verification SMS',
        variant: 'destructive',
      });
    } finally {
      setSendingPhoneOtp(false);
    }
  };

  const handleVerifyPhone = async () => {
    setVerifyingPhone(true);
    try {
      await verifyPhone(phoneOtp);
      toast({
        title: 'Phone verified',
        description: 'Your phone has been verified successfully',
      });
      setPhoneOtp('');
    } catch (error) {
      toast({
        title: 'Verification failed',
        description: error instanceof Error ? error.message : 'Invalid OTP code',
        variant: 'destructive',
      });
    } finally {
      setVerifyingPhone(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark-purple page-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Your Profile</h1>
              {user?.referredBy && (
                <p className="text-muted-foreground mt-1">
                  Referred by: <span className="text-primary">{user.referredBy}</span>
                </p>
              )}
            </div>
            
            {/* Subscription Timer */}
            <div className="w-full md:w-auto mt-4 md:mt-0">
              <CountdownTimer expiryDate={subscriptionExpiryDate} />
            </div>
          </div>
          
          {/* Referral Link */}
          <div className="mb-6">
            <ReferralLink />
          </div>

          <Tabs defaultValue="profile">
            <TabsList className="mb-8">
              <TabsTrigger value="profile">Personal Info</TabsTrigger>
              <TabsTrigger value="verification">Verification</TabsTrigger>
              <TabsTrigger value="payment">Payment Details</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <div className="glass-section p-6">
                <form onSubmit={handleUpdateProfile}>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        value={user?.email || ''}
                        disabled
                        className="bg-muted"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Email cannot be changed
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tradingviewId">TrainingView Username</Label>
                      <Input
                        id="tradingviewId"
                        value={tradingviewId}
                        onChange={(e) => setTradingviewId(e.target.value)}
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button type="submit" disabled={isLoading} className="glass-button">
                        {isLoading ? 'Saving...' : 'Save Changes'}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </TabsContent>

            <TabsContent value="verification">
              <div className="glass-section p-6 space-y-8">
                {/* Email Verification */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">Email Verification</h3>
                    {user?.emailVerified ? (
                      <span className="bg-green-500/20 text-green-500 px-2 py-1 text-xs rounded-md">
                        Verified
                      </span>
                    ) : (
                      <span className="bg-yellow-500/20 text-yellow-500 px-2 py-1 text-xs rounded-md">
                        Not Verified
                      </span>
                    )}
                  </div>

                  {!user?.emailVerified && (
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Please verify your email address to access all features.
                      </p>
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <Input
                            placeholder="Enter OTP code"
                            value={emailOtp}
                            onChange={(e) => setEmailOtp(e.target.value)}
                          />
                        </div>
                        <Button
                          variant="outline"
                          onClick={handleSendEmailOtp}
                          disabled={sendingEmailOtp}
                        >
                          {sendingEmailOtp ? 'Sending...' : 'Send OTP'}
                        </Button>
                        <Button onClick={handleVerifyEmail} disabled={!emailOtp || verifyingEmail}>
                          {verifyingEmail ? 'Verifying...' : 'Verify'}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Phone Verification */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">Phone Verification</h3>
                    {user?.phoneVerified ? (
                      <span className="bg-green-500/20 text-green-500 px-2 py-1 text-xs rounded-md">
                        Verified
                      </span>
                    ) : (
                      <span className="bg-yellow-500/20 text-yellow-500 px-2 py-1 text-xs rounded-md">
                        Not Verified
                      </span>
                    )}
                  </div>

                  {!user?.phoneVerified && (
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Verify your phone number to enable security features and receive notifications.
                      </p>
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <Input
                            placeholder="Enter OTP code"
                            value={phoneOtp}
                            onChange={(e) => setPhoneOtp(e.target.value)}
                          />
                        </div>
                        <Button
                          variant="outline"
                          onClick={handleSendPhoneOtp}
                          disabled={sendingPhoneOtp}
                        >
                          {sendingPhoneOtp ? 'Sending...' : 'Send OTP'}
                        </Button>
                        <Button onClick={handleVerifyPhone} disabled={!phoneOtp || verifyingPhone}>
                          {verifyingPhone ? 'Verifying...' : 'Verify'}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="payment">
              <div className="glass-section p-6 space-y-6">
                <h3 className="text-lg font-medium mb-4">Payment Details</h3>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="upiId">UPI ID (for Indian users)</Label>
                    <Input
                      id="upiId"
                      placeholder="your-upi@bank"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cryptoAccountId">USDT Wallet Address (for international users)</Label>
                    <Input
                      id="cryptoAccountId"
                      placeholder="Your USDT wallet address (TRC20 network)"
                      value={cryptoAccountId}
                      onChange={(e) => setCryptoAccountId(e.target.value)}
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button type="button" onClick={handleUpdateProfile} disabled={isLoading} className="glass-button">
                      {isLoading ? 'Saving...' : 'Save Details'}
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
