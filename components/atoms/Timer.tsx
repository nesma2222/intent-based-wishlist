"use client";

import { useCountdown } from "@/hooks/useCountdown";

export default function Timer({ expiry }: { expiry: number }) {
  const { hours, minutes, seconds, expired } = useCountdown(expiry);

  if (expired) {
    return (
      <span
        suppressHydrationWarning
        className="text-xs font-medium text-red-500 bg-red-50 px-2 py-0.5 rounded-full"
      >
        Offer Expired
      </span>
    );
  }

  return (
    <span
      suppressHydrationWarning
      className="text-xs font-mono text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full"
    >
      Ends in {hours}h {minutes}m {seconds}s
    </span>
  );
}