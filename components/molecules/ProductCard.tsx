"use client";

import { Product } from "@/types";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addProduct, addToCart, myWishlist, cart } = useWishlist();

  const inWishlist = myWishlist.some((p) => p.id === product.id);
  const inCart = cart.some((p) => p.id === product.id);

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      {/* Image + Heart */}
      <div className="relative">
        <Link href={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-36 object-cover"
          />
        </Link>
        <button
          onClick={() => addProduct(product)}
          className="absolute top-2 right-2 p-1.5 rounded-full bg-white shadow"
        >
          <Heart
            size={15}
            className={inWishlist ? "text-teal-500 fill-teal-500" : "text-slate-400"}
          />
        </button>
        {product.discount && (
          <span className="absolute top-2 left-2 bg-teal-500 text-white text-xs px-2 py-0.5 rounded-full">
            {product.discount}% OFF
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-sm font-medium text-slate-800 mb-1 line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-teal-600 font-semibold text-sm mb-3">₹{product.price}</p>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => addToCart(product)}
            className={`flex-1 flex items-center justify-center gap-1 border rounded-lg py-1.5 text-xs transition-colors ${
              inCart
                ? "bg-teal-50 border-teal-200 text-teal-600"
                : "border-slate-200 text-slate-600 hover:bg-teal-50"
            }`}
          >
            <ShoppingCart size={12} />
            {inCart ? "Added" : "Cart"}
          </button>
          <button className="flex-1 bg-teal-500 text-white rounded-lg py-1.5 text-xs font-medium hover:bg-teal-600 transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}