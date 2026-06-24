"use client";

import { Product } from "@/types";
import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Timer from "@/components/atoms/Timer";


export default function ProductCard({ product }: { product: Product }) {
  const { addProduct, addToCart, myWishlist, cart } = useWishlist();
  const inWishlist = myWishlist.some((p) => p.id === product.id);
  const inCart = cart.some((p) => p.id === product.id);

  // const config = CATEGORY_CONFIG[product.category];
  // const Icon = config.icon;

  return (
    <Card className="overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow p-0">
      {/* Icon Area */}
      <div className="relative">
<Link href={`/product/${product.id}`}>
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-36 object-cover"
  />
</Link>

        {/* Heart */}
        <button
          onClick={() => addProduct(product)}
          className="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-white shadow-sm border border-slate-100"
        >
          <Heart
            size={15}
            className={inWishlist ? "text-teal-500 fill-teal-500" : "text-slate-300"}
          />
        </button>

        {/* Discount Badge */}
        {product.discount && (
          <Badge className="absolute top-2 left-2 bg-teal-500 text-white text-xs">
            {product.discount}% OFF
          </Badge>
        )}
      </div>

      <CardContent className="p-3">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-sm font-medium text-slate-800 mb-1 line-clamp-1 hover:text-teal-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        <p className="text-teal-600 font-bold text-sm mb-1">₹{product.price}</p>

        {/* Timer */}
        {product.offerExpiry && (
          <div className="mb-2">
            <Timer expiry={product.offerExpiry} />
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-2 mt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => addToCart(product)}
            className={`flex-1 text-xs h-8 ${
              inCart ? "bg-teal-50 text-teal-600 border-teal-200" : "text-slate-600"
            }`}
          >
            <ShoppingCart size={12} />
            {inCart ? "Added" : "Cart"}
          </Button>

          <Button
            size="sm"
            className="flex-1 text-xs h-8 bg-teal-500 hover:bg-teal-600 text-white"
          >
            Buy Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}