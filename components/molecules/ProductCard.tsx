"use client";

import { Product } from "@/types";
import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import Timer from "@/components/atoms/Timer";

export default function ProductCard({ product }: { product: Product }) {
  const { addProduct, addToCart, myWishlist, cart } = useWishlist();
  const inWishlist = myWishlist.some((p) => p.id === product.id);
  const inCart = cart.some((p) => p.id === product.id);

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <Link href={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Heart */}
        <button
          onClick={() => addProduct(product)}
          className={`absolute top-3 right-3 z-10 p-2 rounded-full shadow-md border transition-all duration-200 ${
            inWishlist
              ? "bg-teal-500 border-teal-500 scale-110"
              : "bg-white border-slate-100 hover:scale-110"
          }`}
        >
          <Heart
            size={14}
            className={inWishlist ? "text-white fill-white" : "text-slate-400"}
          />
        </button>

        {/* Discount Badge */}
        {product.discount && (
          <span className="absolute top-3 left-3 bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            {product.discount}% OFF
          </span>
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>

      {/* Info — whole section links to PDP */}
      <Link href={`/product/${product.id}`} className="block p-4 pb-2">
        <h3 className="text-sm font-semibold text-slate-800 mb-1 line-clamp-1 hover:text-teal-600 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mb-2">
          <p className="text-teal-600 font-bold text-base">₹{product.price.toLocaleString()}</p>
          {product.discount && (
            <span className="text-xs text-slate-400 line-through">
              ₹{Math.round(product.price / (1 - product.discount / 100)).toLocaleString()}
            </span>
          )}
        </div>
      </Link>

      <div className="px-4 pb-4">
        {/* Timer */}
        {product.offerExpiry && product.offerExpiry > Date.now() && (
          <div className="mb-3">
            <Timer expiry={product.offerExpiry} />
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => addToCart(product)}
            className={`flex-1 flex items-center justify-center gap-1 border rounded-xl py-2 text-xs font-medium transition-all duration-200 ${
              inCart
                ? "bg-teal-50 border-teal-300 text-teal-600 font-semibold"
                : "border-slate-200 text-slate-600 hover:border-teal-300 hover:text-teal-600"
            }`}
          >
            <ShoppingCart size={12} />
            {inCart ? "Added ✓" : "Cart"}
          </button>
          <button className="flex-1 bg-teal-500 text-white rounded-xl py-2 text-xs font-semibold hover:bg-teal-600 hover:shadow-md transition-all duration-200">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}