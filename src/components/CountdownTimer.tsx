
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  expiryDate: Date;
}

const CountdownTimer = ({ expiryDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = expiryDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [expiryDate]);

  return (
    <div className="glass-premium p-3 rounded-md text-center">
      <p className="text-sm text-muted-foreground mb-1">Subscription expires in:</p>
      <div className="flex justify-center space-x-3 text-sm md:text-base">
        <div className="flex flex-col items-center">
          <span className="font-bold text-xl">{timeLeft.days}</span>
          <span className="text-xs text-muted-foreground">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold text-xl">{timeLeft.hours}</span>
          <span className="text-xs text-muted-foreground">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold text-xl">{timeLeft.minutes}</span>
          <span className="text-xs text-muted-foreground">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold text-xl">{timeLeft.seconds}</span>
          <span className="text-xs text-muted-foreground">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
