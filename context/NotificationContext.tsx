"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product } from "@/types";

interface Notification {
  id: string;
  message: string;
  productId: string;
  read: boolean;
  createdAt: number;
}

interface NotificationContextType {
  notifications: Notification[];
  unreadCount: number;
  markAllRead: () => void;
  clearAll: () => void;
}

const NotificationContext = createContext<NotificationContextType | null>(null);

const MESSAGES = [
  "Still thinking? That discount isn't. ⚡",
  "Tick tock... Your deal is about to disappear. ⏰",
  "Hurry! This offer may vanish before your next coffee break. ☕",
  "Hey! Your deal is running away faster than your salary. 🏃",
];

export function NotificationProvider({
  children,
  wishlistProducts,
}: {
  children: ReactNode;
  wishlistProducts: Product[];
}) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("notifications");
    if (stored) setNotifications(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  useEffect(() => {
    const interval = setInterval(() => {
      wishlistProducts.forEach((product) => {
        if (!product.offerExpiry) return;

        const remaining = product.offerExpiry - Date.now();
        const oneHour = 60 * 60 * 1000;

        if (remaining > 0 && remaining < oneHour) {
          const alreadyNotified = notifications.some(
            (n) => n.productId === product.id
          );
          if (!alreadyNotified) {
            const message = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
            const newNotif: Notification = {
              id: crypto.randomUUID(),
              message: `${product.name}: ${message}`,
              productId: product.id,
              read: false,
              createdAt: Date.now(),
            };
            setNotifications((prev) => [newNotif, ...prev]);
          }
        }
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [wishlistProducts, notifications]);

  const unreadCount = notifications.filter((n) => !n.read).length;
  const markAllRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  const clearAll = () => setNotifications([]);

  return (
    <NotificationContext.Provider
      value={{ notifications, unreadCount, markAllRead, clearAll }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const ctx = useContext(NotificationContext);
  if (!ctx) throw new Error("useNotifications must be used inside NotificationProvider");
  return ctx;
}