"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Heart, Menu } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { cart, myWishlist } = useWishlist();

  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 shrink-0">
          <div className="w-7 h-7 rounded-lg bg-teal-500 flex items-center justify-center">
            <Heart size={14} className="text-white fill-white" />
          </div>
          <span className="text-lg font-bold text-teal-600">Wishly</span>
        </Link>

        {/* Search — desktop */}
        <div className="hidden md:flex flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border border-slate-200 rounded-full px-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-teal-600 transition-colors">Home</Link>
          <Link href="/products" className="hover:text-teal-600 transition-colors">Products</Link>

          <Link href="/wishlist" className="relative hover:text-teal-600">
            <Heart size={18} />
            {myWishlist.length > 0 && (
              <span className="absolute -top-1.5 -right-2 w-4 h-4 bg-teal-500 text-white text-xs rounded-full flex items-center justify-center">
                {myWishlist.length}
              </span>
            )}
          </Link>

          <Link href="/cart" className="relative hover:text-teal-600">
            <ShoppingCart size={18} />
            {cart.length > 0 && (
              <span className="absolute -top-1.5 -right-2 w-4 h-4 bg-teal-500 text-white text-xs rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>

          <Button asChild size="sm" className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-4">
            <Link href="/login">Sign In</Link>
          </Button>
        </nav>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <Link href="/wishlist" className="relative text-slate-600">
            <Heart size={20} />
            {myWishlist.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-teal-500 text-white text-xs rounded-full flex items-center justify-center">
                {myWishlist.length}
              </span>
            )}
          </Link>
          <Link href="/cart" className="relative text-slate-600">
            <ShoppingCart size={20} />
            {cart.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-teal-500 text-white text-xs rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="text-slate-600">
                <Menu size={22} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 p-6">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-7 h-7 rounded-lg bg-teal-500 flex items-center justify-center">
                  <Heart size={14} className="text-white fill-white" />
                </div>
                <span className="text-lg font-bold text-teal-600">Wishly</span>
              </div>
              <nav className="flex flex-col gap-5 text-sm font-medium text-slate-600">
                <Link href="/" onClick={() => setOpen(false)} className="hover:text-teal-600">Home</Link>
                <Link href="/products" onClick={() => setOpen(false)} className="hover:text-teal-600">Products</Link>
                <Link href="/wishlist" onClick={() => setOpen(false)} className="hover:text-teal-600">Wishlist</Link>
                <Link href="/cart" onClick={() => setOpen(false)} className="hover:text-teal-600">Cart</Link>
                <Link href="/login" onClick={() => setOpen(false)} className="hover:text-teal-600">Sign In</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-3">
       <input
  type="text"
  placeholder="Search products..."
  suppressHydrationWarning
  className="w-full border border-slate-200 rounded-full px-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
/>
      </div>
    </header>
  );
}