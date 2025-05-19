
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/context/AuthContext';

const ReferralLink = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isCopied, setIsCopied] = useState(false);

  // Generate a referral link based on user ID
  const referralLink = `${window.location.origin}/signup?ref=${user?.id || ''}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setIsCopied(true);
      toast({
        title: "Copied!",
        description: "Referral link copied to clipboard",
      });
      
      // Reset the copied state after 2 seconds
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy manually",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="glass-premium p-4 rounded-lg">
      <h3 className="text-lg font-medium mb-2">Refer Your Friends</h3>
      <p className="text-sm text-muted-foreground mb-3">
        Share this link and get an extra scratch card for every 5 successful referrals!
      </p>
      <div className="flex gap-2">
        <Input 
          value={referralLink} 
          readOnly 
          className="bg-black/20 border-white/10 text-sm"
        />
        <Button 
          size="icon" 
          variant="outline" 
          onClick={handleCopyLink}
          className="glass-button min-w-10"
        >
          <Copy size={18} />
        </Button>
      </div>
    </div>
  );
};

export default ReferralLink;
