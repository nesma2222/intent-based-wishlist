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
  const featuredProducts = sampleProducts.slice(0, 8);

  return (
    <main className="flex-1 w-full">
      {/* Hero Carousel */}
      <HeroBanner />

      {/* Offer Ticker */}
      <div className="bg-teal-900 text-white text-center py-2.5 text-xs font-medium tracking-wide">
        🎉 Limited Time Offers — Up to 50% OFF on selected products!
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Category Pills */}
        <h2 className="text-base font-semibold text-slate-800 mb-4">Shop by Category</h2>
        <div className="grid grid-cols-5 gap-3 mb-10">
          {categoryLinks.map((c) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.name}
                href={c.href}
                className={`${c.color} rounded-2xl p-3 md:p-4 flex flex-col items-center gap-2 hover:scale-105 transition-transform`}
              >
                <Icon size={24} className={c.iconColor} />
                <span className="text-xs font-medium text-slate-700">{c.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Flash Deals */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-slate-800">⚡ Flash Deals</h2>
          <Link href="/products" className="text-xs text-teal-600 hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
          {offerProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Featured */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-slate-800">🔥 Featured Products</h2>
          <Link href="/products" className="text-xs text-teal-600 hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </main>
  );
}