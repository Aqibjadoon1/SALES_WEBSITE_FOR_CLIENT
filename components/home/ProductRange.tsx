"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { categoryDefinitions } from "@/lib/products";

export function ProductRange() {
  return (
    <section className="section-shell py-14">
      <SectionReveal>
        <p className="text-sm font-black uppercase text-primary">Product Range</p>
        <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">Comprehensive home and commercial solutions</h2>
      </SectionReveal>

      <div className="mt-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categoryDefinitions.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.035 }}
            >
              <Link
                href={`/category/${category.slug}`}
                className="glass-card block h-full p-4 text-center transition hover:border-primary hover:shadow-glow"
              >
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-md border border-primary/35 bg-primary/10 text-primary">
                  <CategoryIcon name={category.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 min-h-10 text-sm font-black text-white">{category.shortName}</h3>
                <p className="mt-2 line-clamp-3 text-xs leading-5 text-textSecondary">{category.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
