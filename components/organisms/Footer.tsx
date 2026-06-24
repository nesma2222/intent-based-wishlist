import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center">
              <Heart size={14} className="text-teal-600 fill-teal-600" />
            </div>
            <span className="text-lg font-bold">Wishly</span>
          </div>
          <p className="text-xs text-teal-200 leading-relaxed">
            Smart wishlists that organize themselves. Save products, get notified on deals.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Shop</h4>
          <ul className="flex flex-col gap-2 text-xs text-teal-200">
            <li><Link href="/products" className="hover:text-white">All Products</Link></li>
            <li><Link href="/products?cat=gaming" className="hover:text-white">Gaming</Link></li>
            <li><Link href="/products?cat=study" className="hover:text-white">Study</Link></li>
            <li><Link href="/products?cat=travel" className="hover:text-white">Travel</Link></li>
            <li><Link href="/products?cat=beauty" className="hover:text-white">Beauty</Link></li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Account</h4>
          <ul className="flex flex-col gap-2 text-xs text-teal-200">
            <li><Link href="/login" className="hover:text-white">Sign In</Link></li>
            <li><Link href="/wishlist" className="hover:text-white">My Wishlist</Link></li>
            <li><Link href="/cart" className="hover:text-white">My Cart</Link></li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Info</h4>
          <ul className="flex flex-col gap-2 text-xs text-teal-200">
            <li><span className="hover:text-white cursor-pointer">About Us</span></li>
            <li><span className="hover:text-white cursor-pointer">Privacy Policy</span></li>
            <li><span className="hover:text-white cursor-pointer">Contact Us</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-teal-800 py-4 text-center text-xs text-teal-300">
        © 2026 Wishly. All rights reserved.
      </div>
    </footer>
  );
}