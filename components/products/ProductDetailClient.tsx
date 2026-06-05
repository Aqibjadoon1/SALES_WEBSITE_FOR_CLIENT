"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, ShieldCheck, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { ProductCard } from "@/components/products/ProductCard";
import type { Product } from "@/lib/products";
import { business, getRelatedProducts } from "@/lib/products";
import { cn } from "@/lib/utils";

type ProductDetailClientProps = {
  product: Product;
};

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { addItem } = useCart();
  const [activeImage, setActiveImage] = useState(product.image);
  const [tab, setTab] = useState<"specs" | "features">("specs");
  const related = useMemo(() => getRelatedProducts(product), [product]);
  const gallery = useMemo(
    () => Array.from(new Set([product.image, ...related.map((item) => item.image)])).slice(0, 3),
    [product.image, related],
  );

  return (
    <div className="section-shell pb-20 pt-32">
      <nav className="mb-8 text-sm text-textSecondary" aria-label="Breadcrumb">
        <Link href="/" className="transition hover:text-primary">
          Home
        </Link>{" "}
        /{" "}
        <Link href={`/category/${product.categorySlug}`} className="transition hover:text-primary">
          {product.category}
        </Link>{" "}
        / <span className="break-words text-white">{product.name}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          className="glass-card p-4"
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="group relative h-[360px] overflow-hidden rounded-md bg-surfaceHigh md:h-[560px]">
            <Image
              src={activeImage}
              alt={`${product.name} product gallery image in ${product.category}`}
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 560px"
              className="object-contain p-4 transition duration-700 group-hover:scale-110"
            />
            <div className="absolute left-4 top-4 rounded-md bg-primary px-3 py-1 text-xs font-black uppercase text-white shadow-glow">
              {product.badge}
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {gallery.map((image, index) => (
              <button
                type="button"
                key={`${image}-${index}`}
                onClick={() => setActiveImage(image)}
                className={cn(
                  "relative h-24 overflow-hidden rounded-md border bg-surfaceHigh transition",
                  activeImage === image ? "border-primary shadow-glow" : "border-white/10 hover:border-primary/50",
                )}
                aria-label={`View ${product.name} image ${index + 1}`}
              >
                <Image src={image} alt={`${product.name} thumbnail ${index + 1}`} fill sizes="160px" className="object-contain p-2" />
              </button>
            ))}
          </div>
        </motion.div>

        <motion.article
          className="glass-card h-fit p-6"
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-md border border-primary/35 bg-primary/10 px-3 py-2 text-sm font-black text-primary">
            <ShieldCheck className="h-4 w-4" />
            {product.category} / {product.subcategory}
          </span>
          <h1 className="mt-5 break-words text-3xl font-black text-white md:text-5xl">{product.name}</h1>
          <p className="mt-4 text-lg leading-8 text-textSecondary">{product.description}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => addItem(product)}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-5 font-black text-white shadow-glow transition hover:bg-primaryDark"
            >
              <ShoppingBag className="h-4 w-4" />
              Order Now
            </button>
            <a
              href={business.phoneHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/10 px-5 font-black text-white transition hover:border-primary hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              Call {business.phone}
            </a>
            <a
              href={business.whatsapp}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-green-400/40 px-5 font-black text-white transition hover:bg-green-500/10 sm:col-span-2"
            >
              <MessageCircle className="h-4 w-4 text-green-400" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-8 rounded-md border border-white/10">
            <div className="grid grid-cols-2 border-b border-white/10">
              {[
                ["specs", "Full Specifications"],
                ["features", "Features"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setTab(value as "specs" | "features")}
                  className={cn(
                    "px-4 py-3 text-sm font-black transition",
                    tab === value ? "bg-primary text-white" : "text-textSecondary hover:text-white",
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="p-4">
              {tab === "specs" ? (
                <dl className="grid gap-3">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="grid gap-1 text-sm sm:grid-cols-[130px_1fr] sm:gap-3">
                      <dt className="font-black text-white">{key}</dt>
                      <dd className="break-words text-textSecondary">{value}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <ul className="grid gap-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-textSecondary">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </motion.article>
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-black text-white">Related Products</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} compact />
          ))}
        </div>
      </section>
    </div>
  );
}
