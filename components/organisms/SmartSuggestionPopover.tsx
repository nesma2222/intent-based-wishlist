"use client";

import { useWishlist } from "@/context/WishlistContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, X } from "lucide-react";

export default function SmartSuggestionPopover() {
  const { suggestion, acceptSuggestion, dismissSuggestion } = useWishlist();

  if (!suggestion) return null;

  const { rule, matchedProducts, existingWishlist } = suggestion;

  const message = existingWishlist
    ? `Add these products to your existing ${existingWishlist.name} Wishlist?`
    : rule.message;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 animate-slide-up">
      <Card className="border border-teal-100 shadow-2xl">
        <CardContent className="p-4">

          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center">
                <Sparkles size={15} className="text-teal-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-teal-700">Smart Suggestion</p>
                <Badge variant="secondary" className="text-xs bg-teal-50 text-teal-600 mt-0.5">
                  {rule.wishlistName}
                </Badge>
              </div>
            </div>
            <button
              onClick={dismissSuggestion}
              className="text-slate-300 hover:text-slate-500 transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Message */}
          <p className="text-sm text-slate-600 mb-3 leading-relaxed">{message}</p>

          {/* Product Thumbnails */}
          <div className="flex gap-2 mb-4">
            {matchedProducts.slice(0, 3).map((p) => (
              <img
                key={p.id}
                src={p.image}
                alt={p.name}
                className="w-14 h-14 rounded-xl border border-teal-100 object-cover"
              />
            ))}
            {matchedProducts.length > 3 && (
              <div className="w-14 h-14 rounded-xl border border-teal-100 bg-teal-50 flex items-center justify-center">
                <span className="text-xs font-medium text-teal-600">
                  +{matchedProducts.length - 3}
                </span>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <Button
              size="sm"
              className="flex-1 bg-teal-500 hover:bg-teal-600 text-white text-xs"
              onClick={() => acceptSuggestion(rule, matchedProducts, existingWishlist)}
            >
              {existingWishlist ? `Add to ${existingWishlist.name}` : "Create Wishlist"}
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="flex-1 text-xs border-teal-200 text-teal-600 hover:bg-teal-50"
              onClick={dismissSuggestion}
            >
              {existingWishlist ? "Keep in My Wishlist" : "Maybe Later"}
            </Button>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}