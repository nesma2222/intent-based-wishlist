"use client";

import { useParams } from "next/navigation";
import { sampleProducts } from "@/lib/sampleData";
import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";
import { Heart, ShoppingCart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Timer from "@/components/atoms/Timer";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { addProduct, addToCart, myWishlist, cart } = useWishlist();

  const product = sampleProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <p className="text-slate-400 text-sm mb-4">Product not found.</p>
        <Link href="/products" className="text-teal-600 text-sm hover:underline">
          ← Back to Products
        </Link>
      </div>
    );
  }

  const inWishlist = myWishlist.some((p) => p.id === product.id);
  const inCart = cart.some((p) => p.id === product.id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Back */}
      <Link
        href="/products"
        className="flex items-center gap-1 text-sm text-teal-600 hover:underline mb-6"
      >
        <ArrowLeft size={14} />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <Card className="overflow-hidden p-0 border border-slate-100">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 md:h-96 object-cover"
            />
            {product.discount && (
              <Badge className="absolute top-3 left-3 bg-teal-500 text-white">
                {product.discount}% OFF
              </Badge>
            )}
            <button
              onClick={() => addProduct(product)}
              className="absolute top-3 right-3 p-2 rounded-full bg-white shadow border border-slate-100"
            >
              <Heart
                size={18}
                className={inWishlist ? "text-teal-500 fill-teal-500" : "text-slate-400"}
              />
            </button>
          </div>
        </Card>

        {/* Details */}
        <Card className="border border-slate-100">
          <CardContent className="p-6 flex flex-col justify-center h-full">
            <p className="text-xs text-slate-400 uppercase tracking-widest mb-1 capitalize">
              {product.category}
            </p>
            <h1 className="text-2xl font-bold text-slate-800 mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-3">
              <p className="text-2xl text-teal-600 font-bold">₹{product.price}</p>
              {product.discount && (
                <Badge className="bg-teal-50 text-teal-700 border border-teal-200">
                  Save {product.discount}%
                </Badge>
              )}
            </div>

            {/* Timer */}
            {product.offerExpiry && (
              <div className="mb-4">
                <Timer expiry={product.offerExpiry} />
              </div>
            )}

            <div className="h-px bg-slate-100 my-4" />

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <Button
                className="w-full bg-teal-500 hover:bg-teal-600 text-white"
              >
                Buy Now
              </Button>

              <Button
                variant="outline"
                onClick={() => addToCart(product)}
                className={`w-full ${
                  inCart ? "bg-teal-50 text-teal-600 border-teal-200" : ""
                }`}
              >
                <ShoppingCart size={16} />
                {inCart ? "Added to Cart" : "Add to Cart"}
              </Button>

              <Button
                variant="outline"
                onClick={() => addProduct(product)}
                className={`w-full ${
                  inWishlist ? "bg-teal-50 text-teal-600 border-teal-200" : ""
                }`}
              >
                <Heart
                  size={16}
                  className={inWishlist ? "fill-teal-500" : ""}
                />
                {inWishlist ? "Wishlisted" : "Add to Wishlist"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}