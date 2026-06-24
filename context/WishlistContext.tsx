"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Product, Wishlist, PatternRule } from "@/types";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { usePatternDetection, Suggestion } from "@/hooks/usePatternDetection";

interface WishlistContextType {
  myWishlist: Product[];
  wishlists: Wishlist[];
  cart: Product[];
  suggestion: Suggestion | null;
  addProduct: (product: Product) => void;
  addToCart: (product: Product) => void;
  acceptSuggestion: (rule: PatternRule, products: Product[], existingWishlist?: Wishlist) => void;
  dismissSuggestion: () => void;
}

const WishlistContext = createContext<WishlistContextType | null>(null);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [myWishlist, setMyWishlist] = useLocalStorage<Product[]>("myWishlist", []);
  const [wishlists, setWishlists] = useLocalStorage<Wishlist[]>("wishlists", []);
  const [cart, setCart] = useLocalStorage<Product[]>("cart", []);
  const [dismissed, setDismissed] = useState<string | null>(null);

  // Toggle wishlist — add if not exists, remove if exists
  const addProduct = (product: Product) => {
    setMyWishlist((prev) => {
      if (prev.some((p) => p.id === product.id)) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  // Toggle cart — add if not exists, remove if exists
  const addToCart = (product: Product) => {
    setCart((prev) => {
      if (prev.some((p) => p.id === product.id)) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  // Run pattern detection on every wishlist change
  const rawSuggestion = usePatternDetection(myWishlist, wishlists);

  // Hide suggestion if user already dismissed this exact wishlistName
  const suggestion =
    rawSuggestion && rawSuggestion.rule.wishlistName !== dismissed
      ? rawSuggestion
      : null;

  // User clicked "Create Wishlist" or "Add to existing"
  const acceptSuggestion = (
    rule: PatternRule,
    products: Product[],
    existingWishlist?: Wishlist
  ) => {
    if (existingWishlist) {
      // merge into existing wishlist
      setWishlists((prev) =>
        prev.map((w) =>
          w.id === existingWishlist.id
            ? {
                ...w,
                products: [
                  ...w.products,
                  ...products.filter((p) => !w.products.some((wp) => wp.id === p.id)),
                ],
              }
            : w
        )
      );
    } else {
      // create new wishlist
      const newWishlist: Wishlist = {
        id: crypto.randomUUID(),
        name: rule.wishlistName,
        products,
        createdAt: Date.now(),
      };
      setWishlists((prev) => [...prev, newWishlist]);
    }

    // remove moved products from My Wishlist
    setMyWishlist((prev) => prev.filter((p) => !products.some((mp) => mp.id === p.id)));
    setDismissed(null);
  };

  // User clicked "Maybe Later"
  const dismissSuggestion = () => {
    if (rawSuggestion) setDismissed(rawSuggestion.rule.wishlistName);
  };

  return (
    <WishlistContext.Provider
      value={{
        myWishlist,
        wishlists,
        cart,
        suggestion,
        addProduct,
        addToCart,
        acceptSuggestion,
        dismissSuggestion,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used inside WishlistProvider");
  return ctx;
}