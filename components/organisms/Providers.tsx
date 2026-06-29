"use client";

import { ReactNode } from "react";
import { WishlistProvider, useWishlist } from "@/context/WishlistContext";
import { NotificationProvider } from "@/context/NotificationContext";
import SmartSuggestionPopover from "@/components/organisms/SmartSuggestionPopover";

function NotificationBridge({ children }: { children: ReactNode }) {
  const { myWishlist } = useWishlist();
  return (
    <NotificationProvider wishlistProducts={myWishlist}>
      {children}
    </NotificationProvider>
  );
}

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <WishlistProvider>
      <NotificationBridge>
        {children}
        <SmartSuggestionPopover />
      </NotificationBridge>
    </WishlistProvider>
  );
}