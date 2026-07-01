"use client";

import { sampleProducts } from "@/lib/sampleData";
import ProductCard from "@/components/molecules/ProductCard";
import Link from "next/link";
import HeroBanner from "@/components/organisms/HeroBanner";
import { Gamepad2, BookOpen, Plane, Sparkles, Tag } from "lucide-react";

const categoryLinks = [
  { name: "Gaming", icon: Gamepad2, href: "/products", color: "bg-purple-50", iconColor: "text-purple-500" },
  { name: "Study", icon: BookOpen, href: "/products", color: "bg-blue-50", iconColor: "text-blue-500" },
  { name: "Travel", icon: Plane, href: "/products", color: "bg-amber-50", iconColor: "text-amber-500" },
  { name: "Beauty", icon: Sparkles, href: "/products", color: "bg-pink-50", iconColor: "text-pink-500" },
  { name: "Offers", icon: Tag, href: "/products", color: "bg-green-50", iconColor: "text-green-500" },
];

export default function Home() {
  const offerProducts = sampleProducts.filter((p) => p.discount);
  const featuredProducts = sampleProducts.filter((p) => p.category !== "discount");

  return (
    <main className="flex-1 w-full">
      <HeroBanner />

      <div className="bg-teal-900 text-white text-center py-2.5 text-xs font-medium tracking-wide">
         Limited Time Offers — Up to 50% OFF on selected products!
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-slate-800">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-5 gap-3 mb-10">
  {categoryLinks.map((c) => {
    const Icon = c.icon;
    return (
      <Link
        key={c.name}
        href={c.href}
        className={`${c.color} rounded-xl p-3 flex flex-col items-center gap-1.5 hover:scale-105 transition-transform`}
      >
        <Icon size={20} className={c.iconColor} />
        <span className="text-xs font-medium text-slate-700">{c.name}</span>
      </Link>
    );
  })}
</div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-slate-800"> Flash Deals</h2>
          <Link href="/products" className="text-xs text-teal-600 hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-10">
          {offerProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>


{/* Promo Banners */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
  {/* Banner 1 — Gaming */}
  <div className="relative rounded-2xl overflow-hidden h-44">
    <img
      src="https://images.unsplash.com/photo-1593640408182-31c228e3fe8b?w=800&h=400&fit=crop"
      alt="Gaming Banner"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/55 flex flex-col justify-center px-5">
      <span className="text-xs text-purple-300 font-semibold uppercase tracking-widest mb-1">New Arrivals</span>
      <h3 className="text-white font-bold text-lg mb-1">Level Up Your Gaming</h3>
      <p className="text-white/70 text-xs mb-3">Top gear for serious gamers</p>
      <Link
        href="/products"
        className="text-xs font-semibold text-white border border-white px-4 py-1.5 rounded-full w-fit hover:bg-white hover:text-slate-800 transition-colors"
      >
        Shop Now →
      </Link>
    </div>
  </div>

  {/* Banner 2 — Beauty */}
  <div className="relative rounded-2xl overflow-hidden h-44">
    <img
      src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=400&fit=crop"
      alt="Beauty Banner"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/55 flex flex-col justify-center px-5">
      <span className="text-xs text-pink-300 font-semibold uppercase tracking-widest mb-1">Beauty Essentials</span>
      <h3 className="text-white font-bold text-lg mb-1">Glow Up with Wishly</h3>
      <p className="text-white/70 text-xs mb-3">Skincare, makeup and more</p>
      <Link
        href="/products"
        className="text-xs font-semibold text-white border border-white px-4 py-1.5 rounded-full w-fit hover:bg-white hover:text-slate-800 transition-colors"
      >
        Shop Now →
      </Link>
    </div>
  </div>

  {/* Banner 3 — Travel */}
  <div className="relative rounded-2xl overflow-hidden h-44">
    <img
      src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=400&fit=crop"
      alt="Travel Banner"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/55 flex flex-col justify-center px-5">
      <span className="text-xs text-amber-300 font-semibold uppercase tracking-widest mb-1">Travel Season</span>
      <h3 className="text-white font-bold text-lg mb-1">Pack Light, Travel Right</h3>
      <p className="text-white/70 text-xs mb-3">Luggage, bags and accessories</p>
      <Link
        href="/products"
        className="text-xs font-semibold text-white border border-white px-4 py-1.5 rounded-full w-fit hover:bg-white hover:text-slate-800 transition-colors"
      >
        Shop Now →
      </Link>
    </div>
  </div>
</div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-slate-800"> Featured Products</h2>
          <Link href="/products" className="text-xs text-teal-600 hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-10 bg-teal-500 rounded-2xl p-6 md:p-10 text-white text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Start Saving Smarter</h2>
          <p className="text-sm opacity-90 mb-4">
            Add products to your wishlist and let Wishly organize them automatically.
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-teal-600 font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-teal-50 transition-colors"
          >
            Browse Products →
          </Link>
        </div>
      </div>
    </main>
  );
}