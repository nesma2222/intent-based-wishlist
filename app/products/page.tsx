"use client";

import { useState } from "react";
import { sampleProducts } from "@/lib/sampleData";
import ProductCard from "@/components/molecules/ProductCard";
import { Search } from "lucide-react";

const categories = ["all", "gaming", "study", "travel", "beauty", "discount"] as const;

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");

  const filtered = sampleProducts.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-slate-800 mb-1">All Products</h1>
        <p className="text-sm text-slate-400">{filtered.length} products found</p>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          suppressHydrationWarning
          className="w-full md:w-80 border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
      </div>

      {/* Category Filters */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium capitalize whitespace-nowrap flex-shrink-0 transition-colors ${
              category === c
                ? "bg-teal-500 text-white"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-teal-50"
            }`}
          >
            {c === "all" ? "All" : c}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-slate-400 text-sm">No products found.</p>
          <button
            onClick={() => { setSearch(""); setCategory("all"); }}
            className="text-teal-600 text-sm hover:underline mt-2"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}