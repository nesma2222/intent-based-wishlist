import { sampleProducts } from "@/lib/sampleData";
import ProductCard from "@/components/molecules/ProductCard";

export default function Home() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-xl font-bold text-slate-800 mb-4">Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {sampleProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}