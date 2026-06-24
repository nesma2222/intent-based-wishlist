import { useState, useEffect } from "react";

export function useCountdown(expiry: number) {
  const [remaining, setRemaining] = useState(expiry - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(expiry - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [expiry]);

  const total = Math.max(remaining, 0);
  return {
    hours: Math.floor(total / 3600000),
    minutes: Math.floor((total % 3600000) / 60000),
    seconds: Math.floor((total % 60000) / 1000),
    expired: total <= 0,
  };
}