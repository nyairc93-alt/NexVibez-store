'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 3);
      targetDate.setHours(23, 59, 59, 999);

      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white text-gray-900 rounded-lg p-3 sm:p-4 min-w-[60px] sm:min-w-[80px] shadow-lg">
        <span className="text-2xl sm:text-4xl font-bold">{value.toString().padStart(2, '0')}</span>
      </div>
      <span className="text-xs sm:text-sm text-gray-300 mt-2 uppercase tracking-wider">{label}</span>
    </div>
  );

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4">
      <TimeBlock value={timeLeft.days} label="Days" />
      <span className="text-2xl sm:text-4xl text-white font-bold">:</span>
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <span className="text-2xl sm:text-4xl text-white font-bold">:</span>
      <TimeBlock value={timeLeft.minutes} label="Minutes" />
      <span className="text-2xl sm:text-4xl text-white font-bold">:</span>
      <TimeBlock value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}
