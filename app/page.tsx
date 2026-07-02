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
  <div className="rounded-2xl overflow-hidden h-44 bg-purple-50 flex">
    <div className="flex-1 flex flex-col justify-center px-5 py-4">
      <span className="text-xs text-purple-400 font-semibold uppercase tracking-widest mb-1">New Arrivals</span>
      <h3 className="text-slate-800 font-bold text-lg mb-1 leading-tight">Level Up Your Gaming</h3>
      <p className="text-slate-500 text-xs mb-3">Top gear for serious players</p>
      <Link
        href="/products"
        className="text-xs font-semibold bg-purple-500 text-white px-4 py-1.5 rounded-full w-fit hover:bg-purple-600 transition-colors"
      >
        Shop Now →
      </Link>
    </div>
    <div className="w-36 flex-shrink-0">
      <img
        src="/asset/gaming.png"
        alt="Gaming"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Banner 2 — Beauty */}
  <div className="rounded-2xl overflow-hidden h-44 bg-pink-50 flex">
    <div className="flex-1 flex flex-col justify-center px-5 py-4">
      <span className="text-xs text-pink-400 font-semibold uppercase tracking-widest mb-1">Beauty Essentials</span>
      <h3 className="text-slate-800 font-bold text-lg mb-1 leading-tight">Glow Up with Wishly</h3>
      <p className="text-slate-500 text-xs mb-3">Skincare, makeup and more</p>
      <Link
        href="/products"
        className="text-xs font-semibold bg-pink-500 text-white px-4 py-1.5 rounded-full w-fit hover:bg-pink-600 transition-colors"
      >
        Shop Now →
      </Link>
    </div>
    <div className="w-36 flex-shrink-0">
      <img
        src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=200&fit=crop"
        alt="Beauty"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Banner 3 — Travel */}
  <div className="rounded-2xl overflow-hidden h-44 bg-amber-50 flex">
    <div className="flex-1 flex flex-col justify-center px-5 py-4">
      <span className="text-xs text-amber-400 font-semibold uppercase tracking-widest mb-1">Travel Season</span>
      <h3 className="text-slate-800 font-bold text-lg mb-1 leading-tight">Pack Light Travel Right</h3>
      <p className="text-slate-500 text-xs mb-3">Luggage, bags and more</p>
      <Link
        href="/products"
        className="text-xs font-semibold bg-amber-500 text-white px-4 py-1.5 rounded-full w-fit hover:bg-amber-600 transition-colors"
      >
        Shop Now →
      </Link>
    </div>
    <div className="w-36 flex-shrink-0">
      <img
        src="https://plus.unsplash.com/premium_photo-1684407616508-b9e82c8bc8a0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Travel"
        className="w-full h-full object-cover"
      />
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