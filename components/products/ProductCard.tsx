"use client";

import { motion } from "framer-motion";
import { Eye, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";
import type { Product } from "@/lib/products";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
  compact?: boolean;
};

export function ProductCard({ product, priority = false, compact = false }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <motion.article
      className={cn(
        "glass-card neon-border group overflow-hidden p-4 transition-shadow duration-300 hover:shadow-[0_30px_90px_rgba(215,25,97,0.26)]",
        compact && "p-3",
      )}
      whileHover={{ y: -8, scale: 1.018 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <Link href={`/products/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className={cn("relative overflow-hidden rounded-md bg-surfaceHigh", compact ? "h-44" : "h-56")}>
          <Image
            src={product.image}
            alt={`${product.name} available at New Murtaza Asif Traders in Peshawar`}
            fill
            priority={priority}
            sizes="(max-width: 768px) 92vw, (max-width: 1200px) 45vw, 360px"
            className="object-contain p-3 transition duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/65 via-transparent to-transparent" />
          <span className="absolute left-3 top-3 rounded-md bg-primary px-3 py-1 text-xs font-black uppercase text-white shadow-glow">
            {product.badge}
          </span>
        </div>
      </Link>

      <div className="pt-4">
        <p className="text-xs font-bold uppercase text-primary">
          {product.category} / {product.subcategory}
        </p>
        <Link href={`/products/${product.id}`} className="mt-1 block">
          <h3 className="line-clamp-2 min-h-14 break-words text-lg font-black text-white transition group-hover:text-primary sm:text-xl">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-2 min-h-12 text-sm leading-6 text-textSecondary">{product.description}</p>
        <div className="mt-4 grid grid-cols-[0.85fr_1.15fr] gap-3">
          <Link
            href={`/products/${product.id}`}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/10 px-3 text-sm font-black text-white transition hover:border-primary hover:text-primary"
          >
            <Eye className="h-4 w-4" />
            View
          </Link>
          <button
            type="button"
            onClick={() => addItem(product)}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-3 text-sm font-black text-white shadow-glow transition hover:bg-primaryDark"
          >
            <ShoppingBag className="h-4 w-4" />
            Order Now
          </button>
        </div>
      </div>
    </motion.article>
  );
}
