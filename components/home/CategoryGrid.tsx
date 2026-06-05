"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { categoryDefinitions } from "@/lib/products";

export function CategoryGrid() {
  return (
    <section id="categories" className="section-shell py-14">
      <SectionReveal>
        <p className="text-sm font-black uppercase text-primary">Shop by Categories</p>
        <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl text-3xl font-black text-white md:text-4xl">Complete appliance categories in one premium profile</h2>
          <p className="max-w-md text-textSecondary">
            Browse home, commercial and institutional product lines curated for Peshawar and nationwide delivery.
          </p>
        </div>
      </SectionReveal>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
        {categoryDefinitions.map((category, index) => (
          <motion.div
            key={category.slug}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <Link href={`/category/${category.slug}`} className="glass-card neon-border block h-full p-5">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-md border border-primary/35 bg-primary/10 text-primary">
                <CategoryIcon name={category.icon} className="h-6 w-6" />
              </div>
              <h3 className="min-h-12 text-lg font-black text-white">{category.name}</h3>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-textSecondary">{category.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
