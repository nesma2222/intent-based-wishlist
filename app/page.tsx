import { sampleProducts } from "@/lib/sampleData";
import ProductCard from "@/components/molecules/ProductCard";
import Link from "next/link";

const categoryLinks = [
  { name: "Gaming", emoji: "🎮", href: "/products", color: "bg-teal-50" },
  { name: "Study", emoji: "📚", href: "/products", color: "bg-blue-50" },
  { name: "Travel", emoji: "✈️", href: "/products", color: "bg-amber-50" },
  { name: "Beauty", emoji: "💄", href: "/products", color: "bg-pink-50" },
  { name: "Offers", emoji: "🏷️", href: "/products", color: "bg-green-50" },
];

export default function Home() {
  const offerProducts = sampleProducts.filter((p) => p.discount);
  const featuredProducts = sampleProducts.slice(0, 8);

  return (
    <main className="flex-1 w-full">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-400 text-white px-4 py-12 md:py-20 text-center">
        <p className="text-xs md:text-sm font-medium tracking-widest uppercase mb-2 opacity-80">
          Smart Wishlist Platform
        </p>
        <h1 className="text-2xl md:text-4xl font-bold mb-3">
          Save Now, Buy When Ready ✨
        </h1>
        <p className="text-sm md:text-base opacity-90 mb-6 max-w-md mx-auto">
          Wishly intelligently organizes your saved products into smart wishlists.
        </p>
        <Link
          href="/products"
          className="inline-block bg-white text-teal-600 font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-teal-50 transition-colors"
        >
          Shop Now →
        </Link>
      </div>

      {/* Offer Banner */}
      <div className="bg-teal-900 text-white text-center py-2.5 text-xs font-medium tracking-wide">
        🎉 Limited Time Offers — Up to 50% OFF on selected products!
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Category Pills */}
        <h2 className="text-base font-semibold text-slate-800 mb-4">Shop by Category</h2>
        <div className="grid grid-cols-5 gap-3 mb-10">
          {categoryLinks.map((c) => (
            <Link
              key={c.name}
              href={c.href}
              className={`${c.color} rounded-2xl p-3 md:p-4 flex flex-col items-center gap-1 hover:scale-105 transition-transform`}
            >
              <span className="text-2xl">{c.emoji}</span>
              <span className="text-xs font-medium text-slate-700">{c.name}</span>
            </Link>
          ))}
        </div>

        {/* Flash Deals */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-slate-800">⚡ Flash Deals</h2>
          <Link href="/products" className="text-xs text-teal-600 hover:underline">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
          {offerProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Featured */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-slate-800">🔥 Featured Products</h2>
          <Link href="/products" className="text-xs text-teal-600 hover:underline">
            View All
          </Link>
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