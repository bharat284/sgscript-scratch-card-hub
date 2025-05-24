
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

  // Determine if we should show warning colors (less than 3 days)
  const isUrgent = timeLeft.days < 3;
  const isCritical = timeLeft.days < 1;

  return (
    <div className={`glass-premium p-4 rounded-lg text-center transition-all duration-300 ${
      isCritical ? 'ring-2 ring-red-500 animate-pulse' : 
      isUrgent ? 'ring-2 ring-orange-500' : ''
    }`}>
      <p className={`text-sm mb-2 font-medium ${
        isCritical ? 'text-red-400' : 
        isUrgent ? 'text-orange-400' : 'text-muted-foreground'
      }`}>
        Subscription expires in:
      </p>
      <div className="flex justify-center space-x-4 text-sm md:text-base">
        <div className="flex flex-col items-center">
          <span className={`font-bold text-xl ${
            isCritical ? 'text-red-400' : 
            isUrgent ? 'text-orange-400' : 'text-primary'
          }`}>
            {timeLeft.days}
          </span>
          <span className="text-xs text-muted-foreground">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className={`font-bold text-xl ${
            isCritical ? 'text-red-400' : 
            isUrgent ? 'text-orange-400' : 'text-primary'
          }`}>
            {timeLeft.hours}
          </span>
          <span className="text-xs text-muted-foreground">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className={`font-bold text-xl ${
            isCritical ? 'text-red-400' : 
            isUrgent ? 'text-orange-400' : 'text-primary'
          }`}>
            {timeLeft.minutes}
          </span>
          <span className="text-xs text-muted-foreground">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className={`font-bold text-xl ${
            isCritical ? 'text-red-400' : 
            isUrgent ? 'text-orange-400' : 'text-primary'
          }`}>
            {timeLeft.seconds}
          </span>
          <span className="text-xs text-muted-foreground">Seconds</span>
        </div>
      </div>
      {isUrgent && (
        <p className={`text-xs mt-2 font-medium ${
          isCritical ? 'text-red-400' : 'text-orange-400'
        }`}>
          {isCritical ? '⚠️ Renewal required urgently!' : '⚠️ Renewal needed soon!'}
        </p>
      )}
    </div>
  );
};

export default CountdownTimer;
