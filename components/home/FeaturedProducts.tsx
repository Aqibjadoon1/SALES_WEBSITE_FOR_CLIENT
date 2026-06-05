"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/products/ProductCard";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { featuredProducts } from "@/lib/products";

export function FeaturedProducts() {
  return (
    <section className="overflow-hidden py-14">
      <div className="section-shell">
        <SectionReveal>
          <p className="text-sm font-black uppercase text-primary">Featured Solutions</p>
          <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">Popular business and household appliance needs</h2>
          <div className="mt-4 h-1 w-24 rounded-full bg-primary shadow-glow" />
        </SectionReveal>
      </div>

      <div className="section-shell mt-8 overflow-hidden">
        <motion.div
          className="flex cursor-grab gap-5 overflow-x-auto pb-4 active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -360, right: 0 }}
        >
          {featuredProducts.map((product, index) => (
            <div key={product.id} className="w-[310px] shrink-0 md:w-[360px]">
              <ProductCard product={product} priority={index < 2} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
