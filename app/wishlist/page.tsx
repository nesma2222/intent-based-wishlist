"use client";

import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";
import { Heart, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function WishlistPage() {
  const { myWishlist, wishlists, addProduct, addToCart } = useWishlist();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <Heart size={20} className="text-teal-500 fill-teal-500" />
        <h1 className="text-xl font-bold text-slate-800">My Wishlist</h1>
      </div>

      {/* Empty State */}
      {myWishlist.length === 0 && wishlists.length === 0 && (
        <div className="text-center py-16">
          <Heart size={48} className="text-slate-200 mx-auto mb-4" />
          <p className="text-slate-400 text-sm mb-4">Your wishlist is empty.</p>
          <Button asChild className="bg-teal-500 hover:bg-teal-600 text-white">
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      )}

      {/* My Wishlist — uncategorized */}
      {myWishlist.length > 0 && (
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-base font-semibold text-slate-700">
              Uncategorized
            </h2>
            <Badge variant="secondary" className="text-xs">
              {myWishlist.length}
            </Badge>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {myWishlist.map((p) => (
              <Card key={p.id} className="border border-slate-100 shadow-sm overflow-hidden p-0">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-28 object-cover"
                />
                <CardContent className="p-3">
                  <h3 className="text-sm font-medium text-slate-800 line-clamp-1 mb-1">
                    {p.name}
                  </h3>
                  <p className="text-teal-600 font-bold text-sm mb-2">₹{p.price}</p>
                  <div className="flex gap-1">
                    <Button
                      size="sm"
                      className="flex-1 text-xs h-7 bg-teal-500 hover:bg-teal-600 text-white"
                      onClick={() => addToCart(p)}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 w-7 p-0 text-red-400 hover:text-red-500 hover:bg-red-50"
                      onClick={() => addProduct(p)}
                    >
                      <Trash2 size={12} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Smart Wishlists */}
      {wishlists.map((w) => (
        <section key={w.id} className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-base font-semibold text-teal-700">{w.name}</h2>
            <Badge className="bg-teal-50 text-teal-600 text-xs">
              {w.products.length}
            </Badge>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {w.products.map((p) => (
              <Card key={p.id} className="border border-slate-100 shadow-sm overflow-hidden p-0">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-28 object-cover"
                />
                <CardContent className="p-3">
                  <h3 className="text-sm font-medium text-slate-800 line-clamp-1 mb-1">
                    {p.name}
                  </h3>
                  <p className="text-teal-600 font-bold text-sm mb-2">₹{p.price}</p>
                  <Button
                    size="sm"
                    className="w-full text-xs h-7 bg-teal-500 hover:bg-teal-600 text-white"
                    onClick={() => addToCart(p)}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}