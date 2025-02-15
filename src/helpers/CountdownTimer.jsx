"use client"
import { useEffect, useState } from "react";



const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex space-x-4 text-xl font-bold gap-3">
      <div className="bg-white p-3">{timeLeft.days}d</div>
      <div className="bg-white p-3">{timeLeft.hours}h</div>
      <div className="bg-white p-3">{timeLeft.minutes}m</div>
      <div className="bg-white p-3">{timeLeft.seconds}s</div>
    </div>
  );
};

export default CountdownTimer;
