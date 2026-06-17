"use client";

import { useWishlist } from "@/context/WishlistContext";
import Button from "@/components/atoms/Button";

export default function SmartSuggestionPopover() {
  const { suggestion, acceptSuggestion, dismissSuggestion } = useWishlist();

  if (!suggestion) return null;

  const { rule, matchedProducts } = suggestion;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80">
      <div className="bg-white rounded-2xl shadow-xl border border-teal-100 p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
            ✨
          </div>
          <span className="text-sm font-semibold text-teal-700">Smart Suggestion</span>
        </div>

        <p className="text-sm text-slate-700 mb-3">{rule.message}</p>

        <div className="flex gap-2 mb-4">
          {matchedProducts.slice(0, 3).map((p) => (
            <img
              key={p.id}
              src={p.image}
              alt={p.name}
              className="w-12 h-12 rounded-lg border border-teal-100 object-cover"
            />
          ))}
        </div>

        <div className="flex gap-2">
          <Button
            variant="primary"
            className="flex-1"
            onClick={() => acceptSuggestion(rule, matchedProducts)}
          >
            Create Wishlist
          </Button>
          <Button variant="ghost" className="flex-1" onClick={dismissSuggestion}>
            Maybe Later
          </Button>
        </div>
      </div>
    </div>
  );
}