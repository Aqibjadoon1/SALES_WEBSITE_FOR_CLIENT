"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { FilterSidebar } from "@/components/products/FilterSidebar";
import { ProductGrid } from "@/components/products/ProductGrid";
import type { Product } from "@/lib/products";

type ProductCatalogProps = {
  initialProducts: Product[];
  initialCategory?: string;
};

const pageSize = 12;

function toggleValue(values: string[], value: string) {
  return values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
}

export function ProductCatalog({ initialProducts, initialCategory }: ProductCatalogProps) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("popular");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialCategory ? [initialCategory] : []);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    setPage(1);
  }, [query, sort, selectedCategories, selectedSubcategories, selectedBrands, selectedFeatures]);

  const availableSubcategories = useMemo(
    () => Array.from(new Set(initialProducts.map((product) => product.subcategory))).sort(),
    [initialProducts],
  );

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return initialProducts
      .filter((product) => {
        const matchesQuery =
          !normalizedQuery ||
          [product.name, product.description, product.brand, product.category, product.subcategory, ...product.features]
            .join(" ")
            .toLowerCase()
            .includes(normalizedQuery);
        const matchesCategory =
          !selectedCategories.length || selectedCategories.includes(product.categorySlug);
        const matchesSubcategory =
          !selectedSubcategories.length || selectedSubcategories.includes(product.subcategory);
        const matchesBrand = !selectedBrands.length || selectedBrands.includes(product.brand);
        const matchesFeature =
          !selectedFeatures.length || selectedFeatures.every((feature) => product.features.includes(feature));

        return matchesQuery && matchesCategory && matchesSubcategory && matchesBrand && matchesFeature;
      })
      .sort((a, b) => {
        if (sort === "newest") return b.id.localeCompare(a.id);
        return Number(Boolean(b.popular)) - Number(Boolean(a.popular));
      });
  }, [initialProducts, query, selectedBrands, selectedCategories, selectedFeatures, selectedSubcategories, sort]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const visibleProducts = filteredProducts.slice((page - 1) * pageSize, page * pageSize);

  const filterProps = {
    selectedCategories,
    selectedSubcategories,
    availableSubcategories,
    selectedBrands,
    selectedFeatures,
    onCategoryChange: (slug: string) => setSelectedCategories((values) => toggleValue(values, slug)),
    onSubcategoryChange: (subcategory: string) =>
      setSelectedSubcategories((values) => toggleValue(values, subcategory)),
    onBrandChange: (brand: string) => setSelectedBrands((values) => toggleValue(values, brand)),
    onFeatureChange: (feature: string) => setSelectedFeatures((values) => toggleValue(values, feature)),
    onClear: () => {
      setSelectedCategories(initialCategory ? [initialCategory] : []);
      setSelectedSubcategories([]);
      setSelectedBrands([]);
      setSelectedFeatures([]);
      setQuery("");
      setSort("popular");
    },
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[290px_1fr]">
      <div className="hidden lg:block">
        <FilterSidebar {...filterProps} />
      </div>

      <div>
        <div className="glass-card mb-6 grid gap-4 p-4 md:grid-cols-[1fr_220px_auto] md:items-center">
          <label className="relative block">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-textSecondary" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search AC, refrigerators, dishwashers, kettles, model codes"
              className="min-h-12 w-full rounded-md border border-white/10 bg-black/30 pl-12 pr-4 font-semibold text-white placeholder:text-textSecondary transition focus:border-primary"
            />
          </label>

          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="min-h-12 rounded-md border border-white/10 bg-black/30 px-4 font-bold text-white transition focus:border-primary"
            aria-label="Sort products"
          >
            <option value="popular">Popular</option>
            <option value="newest">Newest</option>
          </select>

          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/10 px-4 font-black text-white lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
        </div>

        <div className="mb-5 flex items-center justify-between gap-3 text-sm text-textSecondary">
          <p>
            Showing <span className="font-black text-white">{visibleProducts.length}</span> of{" "}
            <span className="font-black text-white">{filteredProducts.length}</span> products
          </p>
          <p className="hidden md:block">Quote-based catalog with installation and maintenance support.</p>
        </div>

        <ProductGrid products={visibleProducts} />

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            disabled={page === 1}
            onClick={() => setPage((current) => Math.max(1, current - 1))}
            className="rounded-md border border-white/10 px-4 py-3 font-black text-white transition hover:border-primary disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>
          <span className="rounded-md border border-white/10 px-4 py-3 font-black text-white">
            {page} / {totalPages}
          </span>
          <button
            type="button"
            disabled={page === totalPages}
            onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
            className="rounded-md border border-white/10 px-4 py-3 font-black text-white transition hover:border-primary disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>

      <AnimatePresence>
        {filtersOpen ? (
          <motion.div
            className="fixed inset-0 z-[75] bg-black/70 p-4 backdrop-blur lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFiltersOpen(false)}
          >
            <motion.div
              className="absolute inset-x-0 bottom-0 max-h-[86vh] overflow-y-auto rounded-t-lg border-t border-white/10 bg-background p-4"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 240, damping: 28 }}
              onClick={(event) => event.stopPropagation()}
            >
              <FilterSidebar {...filterProps} onClose={() => setFiltersOpen(false)} />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
