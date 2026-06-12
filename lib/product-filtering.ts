import type { Category, Product } from "@/lib/products";

export type ProductSort = "popular" | "newest" | "price-low" | "price-high";

export type ProductFilters = {
  query: string;
  sort: ProductSort;
  selectedCategories: string[];
  selectedSubcategories: string[];
  selectedBrands: string[];
  selectedFeatures: string[];
  minPrice?: number | null;
  maxPrice?: number | null;
};

export function toggleFilterValue(values: string[], value: string) {
  return values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
}

export function getCategoriesWithProducts(products: Product[], categories: Category[]) {
  const availableSlugs = new Set(products.map((product) => product.categorySlug));
  return categories.filter((category) => availableSlugs.has(category.slug));
}

export function getFilterOptions(products: Product[], selectedCategories: string[] = []) {
  const categoryScopedProducts = selectedCategories.length
    ? products.filter((product) => selectedCategories.includes(product.categorySlug))
    : products;

  return {
    subcategories: Array.from(new Set(categoryScopedProducts.map((product) => product.subcategory))).sort(),
    brands: Array.from(new Set(categoryScopedProducts.map((product) => product.brand))).sort(),
    features: Array.from(new Set(categoryScopedProducts.flatMap((product) => product.features))).sort(),
    priceRange: categoryScopedProducts.reduce(
      (range, product) => {
        if (!product.price) {
          return range;
        }

        return {
          min: Math.min(range.min, product.price),
          max: Math.max(range.max, product.price),
        };
      },
      { min: Number.POSITIVE_INFINITY, max: 0 },
    ),
  };
}

export function filterProducts(products: Product[], filters: ProductFilters) {
  const normalizedQuery = filters.query.trim().toLowerCase();

  return products
    .filter((product) => {
      const matchesQuery =
        !normalizedQuery ||
        [product.name, product.description, product.brand, product.category, product.subcategory, ...product.features]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);
      const matchesCategory =
        !filters.selectedCategories.length || filters.selectedCategories.includes(product.categorySlug);
      const matchesSubcategory =
        !filters.selectedSubcategories.length || filters.selectedSubcategories.includes(product.subcategory);
      const matchesBrand = !filters.selectedBrands.length || filters.selectedBrands.includes(product.brand);
      const matchesFeature =
        !filters.selectedFeatures.length ||
        filters.selectedFeatures.every((feature) => product.features.includes(feature));
      const matchesMinPrice = !filters.minPrice || Boolean(product.price && product.price >= filters.minPrice);
      const matchesMaxPrice = !filters.maxPrice || Boolean(product.price && product.price <= filters.maxPrice);

      return (
        matchesQuery &&
        matchesCategory &&
        matchesSubcategory &&
        matchesBrand &&
        matchesFeature &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    })
    .sort((a, b) => {
      if (filters.sort === "newest") {
        return b.id.localeCompare(a.id);
      }

      if (filters.sort === "price-low") {
        return (a.price ?? Number.POSITIVE_INFINITY) - (b.price ?? Number.POSITIVE_INFINITY);
      }

      if (filters.sort === "price-high") {
        return (b.price ?? 0) - (a.price ?? 0);
      }

      return Number(Boolean(b.popular)) - Number(Boolean(a.popular));
    });
}
