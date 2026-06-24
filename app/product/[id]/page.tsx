"use client";

import { useParams } from "next/navigation";
import { sampleProducts } from "@/lib/sampleData";
import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { addProduct, addToCart, myWishlist, cart } = useWishlist();

  const product = sampleProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <p className="text-slate-400 text-sm mb-4">Product not found.</p>
        <Link href="/" className="text-teal-600 text-sm hover:underline">
          ← Back to Home
        </Link>
      </div>
    );
  }

  const inWishlist = myWishlist.some((p) => p.id === product.id);
  const inCart = cart.some((p) => p.id === product.id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm text-teal-600 hover:underline mb-4 inline-block">
        ← Back
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-72 md:h-96 object-cover rounded-2xl"
          />
          {product.discount && (
            <Badge className="absolute top-3 left-3 bg-teal-500 text-white">
              {product.discount}% OFF
            </Badge>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-2">{product.name}</h1>
          <p className="text-2xl text-teal-600 font-semibold mb-4">₹{product.price}</p>
          <p className="text-sm text-slate-500 mb-6 capitalize">
            Category: {product.category}
          </p>

          <div className="flex flex-col gap-3">
            <Button
              onClick={() => addToCart(product)}
              variant="outline"
              className={inCart ? "bg-teal-50 text-teal-600 border-teal-200" : ""}
            >
              <ShoppingCart size={16} />
              {inCart ? "Added to Cart" : "Add to Cart"}
            </Button>

            <Button className="bg-teal-500 hover:bg-teal-600 text-white">
              Buy Now
            </Button>

            <Button
              onClick={() => addProduct(product)}
              variant="outline"
              className={inWishlist ? "bg-teal-50 text-teal-600 border-teal-200" : ""}
            >
              <Heart size={16} className={inWishlist ? "fill-teal-500" : ""} />
              {inWishlist ? "Wishlisted" : "Add to Wishlist"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}