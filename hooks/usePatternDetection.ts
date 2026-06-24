import { useEffect, useState } from "react";
import { Product, PatternRule, Wishlist } from "@/types";
import { PATTERN_RULES } from "@/lib/patternRules";

export interface Suggestion {
  rule: PatternRule;
  matchedProducts: Product[];
  existingWishlist?: Wishlist;
}

export function usePatternDetection(myWishlist: Product[], wishlists: Wishlist[]) {
  const [suggestion, setSuggestion] = useState<Suggestion | null>(null);

  useEffect(() => {
    for (const rule of PATTERN_RULES) {
      const matched =
        rule.category === "discount"
          ? myWishlist.filter((p) => !!p.discount && p.discount > 0)
          : myWishlist.filter((p) => p.category === rule.category);

      if (matched.length >= rule.threshold) {
        const existingWishlist = wishlists.find((w) => w.name === rule.wishlistName);
        setSuggestion({ rule, matchedProducts: matched, existingWishlist });
        return;
      }
    }
    setSuggestion(null);
  }, [myWishlist, wishlists]);

  return suggestion;
}