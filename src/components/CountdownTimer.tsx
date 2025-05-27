
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
    <div className={`glass-card p-4 rounded-lg text-center transition-all duration-300 hover:scale-[1.02] ${
      isCritical ? 'ring-2 ring-red-500 animate-pulse' : 
      isUrgent ? 'ring-2 ring-orange-500' : ''
    }`}>
      <div className="flex items-center gap-2 mb-2">
        <div className={`w-3 h-3 rounded-full ${
          isCritical ? 'bg-red-500' : 
          isUrgent ? 'bg-orange-500' : 'bg-gradient-to-r from-blue-400 to-cyan-500'
        }`}></div>
        <p className={`text-sm font-medium ${
          isCritical ? 'text-red-400' : 
          isUrgent ? 'text-orange-400' : 'text-muted-foreground'
        }`}>
          Subscription expires in:
        </p>
      </div>
      <div className="flex justify-center space-x-3 text-sm">
        <div className="flex flex-col items-center">
          <span className={`font-bold text-lg ${
            isCritical ? 'text-red-400' : 
            isUrgent ? 'text-orange-400' : 'text-primary'
          }`}>
            {timeLeft.days}
          </span>
          <span className="text-xs text-muted-foreground">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className={`font-bold text-lg ${
            isCritical ? 'text-red-400' : 
            isUrgent ? 'text-orange-400' : 'text-primary'
          }`}>
            {timeLeft.hours}
          </span>
          <span className="text-xs text-muted-foreground">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className={`font-bold text-lg ${
            isCritical ? 'text-red-400' : 
            isUrgent ? 'text-orange-400' : 'text-primary'
          }`}>
            {timeLeft.minutes}
          </span>
          <span className="text-xs text-muted-foreground">Min</span>
        </div>
        <div className="flex flex-col items-center">
          <span className={`font-bold text-lg ${
            isCritical ? 'text-red-400' : 
            isUrgent ? 'text-orange-400' : 'text-primary'
          }`}>
            {timeLeft.seconds}
          </span>
          <span className="text-xs text-muted-foreground">Sec</span>
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
