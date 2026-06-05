"use client";

import { ProductCard } from "@/components/products/ProductCard";
import type { Product } from "@/lib/products";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  if (!products.length) {
    return (
      <div className="glass-card grid min-h-80 place-items-center p-8 text-center">
        <div>
          <h2 className="text-2xl font-black text-white">No products found</h2>
          <p className="mt-2 text-textSecondary">Adjust filters or search terms to view more appliance options.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} priority={index < 3} />
      ))}
    </div>
  );
}
