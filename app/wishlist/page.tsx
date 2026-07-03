"use client";

import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";
import { Heart, Trash2, ShoppingCart, FolderHeart, Sparkles } from "lucide-react";

export default function WishlistPage() {
  const { myWishlist, wishlists, addProduct, addToCart } = useWishlist();

  return (
    <div className="w-full px-4 py-8">

      {/* Page Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
          <Heart size={20} className="text-teal-500 fill-teal-500" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-slate-800">My Wishlist</h1>
          <p className="text-xs text-slate-400">
            {myWishlist.length + wishlists.reduce((acc, w) => acc + w.products.length, 0)} products saved
          </p>
        </div>
      </div>

      {/* Empty State */}
      {myWishlist.length === 0 && wishlists.length === 0 && (
        <div className="text-center py-20">
          <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mx-auto mb-4">
            <Heart size={28} className="text-teal-300" />
          </div>
          <h2 className="text-slate-700 font-semibold mb-2">Your wishlist is empty</h2>
          <p className="text-slate-400 text-sm mb-6">
            Start adding products — Wishly will organize them automatically.
          </p>
          <Link
            href="/products"
            className="inline-block bg-teal-500 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-teal-600 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      )}

      {/* Smart Wishlists — show first */}
      {wishlists.length > 0 && (
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-5">
            <Sparkles size={16} className="text-teal-500" />
            <h2 className="text-base font-bold text-slate-800">Smart Wishlists</h2>
            <span className="text-xs bg-teal-50 text-teal-600 px-2 py-0.5 rounded-full font-medium border border-teal-100">
              Auto-organized by Wishly
            </span>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {wishlists.map((w) => (
              <div key={w.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                {/* Wishlist Header */}
                <div className="bg-gradient-to-r from-teal-500 to-teal-400 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FolderHeart size={16} className="text-white" />
                    <span className="text-white font-semibold text-sm">{w.name}</span>
                  </div>
                  <span className="text-teal-100 text-xs bg-teal-600/40 px-2 py-0.5 rounded-full">
                    {w.products.length} items
                  </span>
                </div>

                {/* Product Grid inside wishlist */}
                <div className="p-3 grid grid-cols-2 gap-2">
                  {w.products.slice(0, 4).map((p) => (
                    <div key={p.id} className="relative group">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-20 object-cover rounded-xl"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-xl transition-colors" />
                    </div>
                  ))}
                  {w.products.length > 4 && (
                    <div className="w-full h-20 rounded-xl bg-teal-50 border border-dashed border-teal-200 flex items-center justify-center">
                      <span className="text-xs text-teal-500 font-medium">+{w.products.length - 4} more</span>
                    </div>
                  )}
                </div>

                {/* Product List */}
                <div className="px-3 pb-3 flex flex-col gap-2">
                  {w.products.map((p) => (
                    <div key={p.id} className="flex items-center gap-3 bg-slate-50 rounded-xl p-2">
                      <img src={p.image} alt={p.name} className="w-10 h-10 object-cover rounded-lg flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-slate-800 line-clamp-1">{p.name}</p>
                        <p className="text-xs text-teal-600 font-bold">₹{p.price.toLocaleString()}</p>
                      </div>
                      <button
                        onClick={() => addToCart(p)}
                        className="p-1.5 rounded-lg bg-teal-50 hover:bg-teal-100 text-teal-600 transition-colors flex-shrink-0"
                      >
                        <ShoppingCart size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Uncategorized — My Wishlist */}
      {myWishlist.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-5">
            <Heart size={16} className="text-slate-400" />
            <h2 className="text-base font-bold text-slate-800">General Wishlist</h2>
            <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-medium">
              {myWishlist.length} items
            </span>
            <span className="text-xs text-black-400 ml-1">— Add more to get smart suggestions</span>
          </div>

          {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"> */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {myWishlist.map((p) => (
              <div key={p.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                <div className="relative">
                  <img src={p.image} alt={p.name} className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <button
                    onClick={() => addProduct(p)}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-white shadow-sm hover:bg-red-50 transition-colors"
                  >
                    <Trash2 size={12} className="text-slate-400 hover:text-red-400" />
                  </button>
                </div>
                <div className="p-3">
                  <p className="text-xs font-semibold text-slate-800 line-clamp-1 mb-1">{p.name}</p>
                  <p className="text-teal-600 font-bold text-sm mb-2">₹{p.price.toLocaleString()}</p>
                  <button
                    onClick={() => addToCart(p)}
                    className="w-full flex items-center justify-center gap-1 bg-teal-500 hover:bg-teal-600 text-white text-xs font-medium py-1.5 rounded-lg transition-colors"
                  >
                    <ShoppingCart size={11} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Hint */}
          {myWishlist.length >= 2 && myWishlist.length < 3 && (
            <div className="mt-4 bg-teal-50 border border-teal-100 rounded-xl px-4 py-3 flex items-center gap-2">
              <Sparkles size={14} className="text-teal-500 flex-shrink-0" />
              <p className="text-xs text-teal-700">
                Add {3 - myWishlist.length} more product from the same category to get a smart wishlist suggestion!
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}