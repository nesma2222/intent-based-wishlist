"use client";

import { useWishlist } from "@/context/WishlistContext";
import { X, Sparkles, FolderHeart, Plus } from "lucide-react";

export default function SmartSuggestionPopover() {
  const { suggestion, acceptSuggestion, dismissSuggestion } = useWishlist();

  if (!suggestion) return null;

  const { rule, matchedProducts, existingWishlist } = suggestion;

  const message = existingWishlist
    ? `Add these to your existing "${existingWishlist.name}" wishlist?`
    : rule.message;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 animate-slide-up">
      <div className="bg-white rounded-2xl shadow-2xl border border-teal-100 overflow-hidden">

        {/* Top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-teal-400 to-teal-600" />

        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center">
              <Sparkles size={15} className="text-teal-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-teal-700 leading-none">Smart Suggestion</p>
              <p className="text-xs text-slate-400 mt-0.5">Pattern detected</p>
            </div>
          </div>
          <button
            onClick={dismissSuggestion}
            className="text-slate-300 hover:text-slate-500 transition-colors p-1 hover:bg-slate-50 rounded-full"
          >
            <X size={15} />
          </button>
        </div>

        {/* Category Badge */}
        <div className="px-4 pb-2">
          <span className="inline-flex items-center gap-1 bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full border border-teal-100">
            <FolderHeart size={11} />
            {rule.wishlistName}
          </span>
        </div>

        {/* Message */}
        <div className="px-4 pb-3">
          <p className="text-sm text-slate-700 leading-relaxed">{message}</p>
        </div>

        {/* Product Thumbnails */}
        <div className="px-4 pb-4">
          <div className="flex gap-2">
            {matchedProducts.slice(0, 3).map((p) => (
              <div key={p.id} className="relative group">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-16 h-16 rounded-xl object-cover border-2 border-teal-100 group-hover:border-teal-400 transition-colors"
                />
                {/* Product name on hover */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  {p.name}
                </div>
              </div>
            ))}
            {matchedProducts.length > 3 && (
              <div className="w-16 h-16 rounded-xl border-2 border-dashed border-teal-200 bg-teal-50 flex flex-col items-center justify-center">
                <Plus size={14} className="text-teal-500" />
                <span className="text-xs font-medium text-teal-600">
                  {matchedProducts.length - 3} more
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-100 mx-4" />

        {/* Actions */}
        <div className="flex gap-2 p-4">
          <button
            onClick={() => acceptSuggestion(rule, matchedProducts, existingWishlist)}
            className="flex-1 bg-teal-500 hover:bg-teal-600 text-white text-xs font-semibold py-2.5 rounded-xl transition-all duration-200 hover:shadow-md active:scale-95 flex items-center justify-center gap-1.5"
          >
            <FolderHeart size={13} />
            {existingWishlist ? `Add to ${existingWishlist.name}` : "Create Wishlist"}
          </button>
          <button
            onClick={dismissSuggestion}
            className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-medium py-2.5 rounded-xl transition-all duration-200 active:scale-95"
          >
            {existingWishlist ? "Keep in My Wishlist" : "Maybe Later"}
          </button>
        </div>

      </div>
    </div>
  );
}