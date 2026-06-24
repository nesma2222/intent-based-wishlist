"use client";

import { useCountdown } from "@/hooks/useCountdown";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

export default function Timer({ expiry }: { expiry: number }) {
  const { hours, minutes, seconds, expired } = useCountdown(expiry);

  if (expired) {
    return (
      <Badge variant="secondary" className="text-xs text-red-500 bg-red-50">
        Offer Expired
      </Badge>
    );
  }

  return (
    <Badge variant="secondary" className="text-xs bg-teal-50 text-teal-700 flex items-center gap-1 w-fit">
      <Clock size={11} />
      {hours}h {minutes}m {seconds}s left
    </Badge>
  );
}