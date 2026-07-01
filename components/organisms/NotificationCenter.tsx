"use client";

import { useNotifications } from "@/context/NotificationContext";
import { Bell, BellOff } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function NotificationCenter() {
  const { notifications, unreadCount, markAllRead, clearAll } = useNotifications();

  return (
    <Popover onOpenChange={(open) => { if (open) markAllRead(); }}>
      <PopoverTrigger asChild>
        <button className="relative p-2 rounded-full hover:bg-teal-50 text-slate-600 transition-colors">
          <Bell size={18} />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 bg-teal-500 text-white text-xs rounded-full flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-80 p-0 shadow-xl border border-slate-100" align="end">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Bell size={15} className="text-teal-600" />
            <h3 className="text-sm font-semibold text-slate-800">Notifications</h3>
            {unreadCount > 0 && (
              <Badge className="bg-teal-500 text-white text-xs px-1.5">
                {unreadCount}
              </Badge>
            )}
          </div>
          <button
            onClick={clearAll}
            className="text-xs text-teal-600 hover:underline"
          >
            Clear All
          </button>
        </div>

        {/* Content */}
        <div className="max-h-64 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 gap-2">
              <BellOff size={24} className="text-slate-300" />
              <p className="text-xs text-slate-400">No notifications yet.</p>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-slate-50">
              {notifications.map((n) => (
                <div
                  key={n.id}
                  className="px-4 py-3 hover:bg-teal-50 transition-colors"
                >
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {n.message}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}