"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product, Wishlist, PatternRule } from "@/types";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface WishlistContextType {
  myWishlist: Product[];
  wishlists: Wishlist[];
  cart: Product[];
  addProduct: (product: Product) => void;
  addToCart: (product: Product) => void;
}

const WishlistContext = createContext<WishlistContextType | null>(null);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [myWishlist, setMyWishlist] = useLocalStorage<Product[]>("myWishlist", []);
  const [wishlists, setWishlists] = useLocalStorage<Wishlist[]>("wishlists", []);
  const [cart, setCart] = useLocalStorage<Product[]>("cart", []);

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

  return (
    <WishlistContext.Provider
      value={{ myWishlist, wishlists, cart, addProduct, addToCart }}
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