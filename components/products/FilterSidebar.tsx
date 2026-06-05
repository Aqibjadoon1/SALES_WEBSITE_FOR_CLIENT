"use client";

import { SlidersHorizontal, X } from "lucide-react";
import { brands, categoryDefinitions, featureFilters } from "@/lib/products";

type FilterSidebarProps = {
  selectedCategories: string[];
  selectedSubcategories: string[];
  availableSubcategories: string[];
  selectedBrands: string[];
  selectedFeatures: string[];
  onCategoryChange: (slug: string) => void;
  onSubcategoryChange: (subcategory: string) => void;
  onBrandChange: (brand: string) => void;
  onFeatureChange: (feature: string) => void;
  onClear: () => void;
  onClose?: () => void;
};

export function FilterSidebar({
  selectedCategories,
  selectedSubcategories,
  availableSubcategories,
  selectedBrands,
  selectedFeatures,
  onCategoryChange,
  onSubcategoryChange,
  onBrandChange,
  onFeatureChange,
  onClear,
  onClose,
}: FilterSidebarProps) {
  return (
    <aside className="glass-card h-fit p-5">
      <div className="flex items-center justify-between gap-3">
        <h2 className="inline-flex items-center gap-2 text-xl font-black text-white">
          <SlidersHorizontal className="h-5 w-5 text-primary" />
          Filters
        </h2>
        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-md border border-white/10 text-white lg:hidden"
            aria-label="Close filters"
          >
            <X className="h-4 w-4" />
          </button>
        ) : null}
      </div>

      <div className="mt-6 space-y-7">
        <div>
          <h3 className="font-black text-white">Category</h3>
          <div className="mt-3 space-y-2">
            {categoryDefinitions.map((category) => (
              <label key={category.slug} className="flex cursor-pointer items-center gap-3 text-sm text-textSecondary">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.slug)}
                  onChange={() => onCategoryChange(category.slug)}
                  className="h-4 w-4 rounded border-white/20 bg-black accent-primary"
                />
                {category.name}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-black text-white">Subcategory</h3>
          <div className="mt-3 space-y-2">
            {availableSubcategories.map((subcategory) => (
              <label key={subcategory} className="flex cursor-pointer items-center gap-3 text-sm text-textSecondary">
                <input
                  type="checkbox"
                  checked={selectedSubcategories.includes(subcategory)}
                  onChange={() => onSubcategoryChange(subcategory)}
                  className="h-4 w-4 rounded border-white/20 bg-black accent-primary"
                />
                {subcategory}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-black text-white">Brand</h3>
          <div className="mt-3 grid grid-cols-2 gap-2 lg:grid-cols-1">
            {brands.map((brand) => (
              <label key={brand} className="flex cursor-pointer items-center gap-3 text-sm text-textSecondary">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => onBrandChange(brand)}
                  className="h-4 w-4 rounded border-white/20 bg-black accent-primary"
                />
                {brand}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-black text-white">Features</h3>
          <div className="mt-3 space-y-2">
            {featureFilters.map((feature) => (
              <label key={feature} className="flex cursor-pointer items-center gap-3 text-sm text-textSecondary">
                <input
                  type="checkbox"
                  checked={selectedFeatures.includes(feature)}
                  onChange={() => onFeatureChange(feature)}
                  className="h-4 w-4 rounded border-white/20 bg-black accent-primary"
                />
                {feature}
              </label>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={onClear}
          className="w-full rounded-md border border-white/10 px-4 py-3 font-black text-white transition hover:border-primary hover:text-primary"
        >
          Clear Filters
        </button>
      </div>
    </aside>
  );
}
