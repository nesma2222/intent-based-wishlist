"use client";

import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";
import { ShoppingCart, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CartPage() {
  const { cart, addToCart } = useWishlist();

  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <ShoppingCart size={20} className="text-teal-500" />
        <h1 className="text-xl font-bold text-slate-800">My Cart</h1>
        {cart.length > 0 && (
          <Badge className="bg-teal-50 text-teal-600 text-xs">
            {cart.length} items
          </Badge>
        )}
      </div>

      {/* Empty State */}
      {cart.length === 0 && (
        <div className="text-center py-16">
          <ShoppingCart size={48} className="text-slate-200 mx-auto mb-4" />
          <p className="text-slate-400 text-sm mb-4">Your cart is empty.</p>
          <Button asChild className="bg-teal-500 hover:bg-teal-600 text-white">
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      )}

      {cart.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="md:col-span-2 flex flex-col gap-3">
            {cart.map((p) => (
              <Card key={p.id} className="border border-slate-100 shadow-sm">
                <CardContent className="p-3 flex items-center gap-4">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-slate-800 mb-1">
                      {p.name}
                    </h3>
                    <p className="text-teal-600 font-bold text-sm">
                      ₹{p.price}
                    </p>
                    {p.discount && (
                      <Badge className="bg-teal-50 text-teal-600 text-xs mt-1">
                        {p.discount}% OFF
                      </Badge>
                    )}
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 w-8 p-0 text-red-400 hover:text-red-500 hover:bg-red-50 flex-shrink-0"
                    onClick={() => addToCart(p)}
                  >
                    <Trash2 size={14} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <Card className="border border-slate-100 shadow-sm sticky top-20">
              <CardContent className="p-5">
                <h2 className="text-base font-semibold text-slate-800 mb-4">
                  Order Summary
                </h2>

                <div className="flex flex-col gap-2 text-sm mb-4">
                  <div className="flex justify-between text-slate-600">
                    <span>Items ({cart.length})</span>
                    <span>₹{total}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Delivery</span>
                    <span className="text-teal-600">Free</span>
                  </div>
                  <div className="h-px bg-slate-100 my-1" />
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>

                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                  Proceed to Checkout
                </Button>

                <Link href="/products">
                  <Button variant="outline" className="w-full mt-2 text-sm">
                    Continue Shopping
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}