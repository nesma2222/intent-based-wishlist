// components/molecules/ProductCard.tsx
import { Product } from "@/types";
import Button from "@/components/atoms/Button";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 p-3 shadow-sm">
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg mb-2" />
      <h3 className="text-sm font-medium text-slate-800">{product.name}</h3>
      <p className="text-teal-600 font-semibold mt-1">₹{product.price}</p>
      <Button className="mt-2 w-full">Add to Wishlist</Button>
    </div>
  );
}