import type { Metadata } from "next";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { JsonLd } from "@/components/seo/JsonLd";
import { products } from "@/lib/products";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Product Catalog",
  path: "/products",
  description:
    "Browse the complete New Murtaza Asif Traders appliance catalog with Dawlance, Hamza Store and original product ranges in Peshawar.",
});

export default function ProductsPage() {
  return (
    <main className="section-shell pb-20 pt-32">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ])}
      />
      <header className="mb-8 max-w-3xl">
        <p className="text-sm font-black uppercase text-primary">Full Product Catalog</p>
        <h1 className="mt-2 text-4xl font-black text-white md:text-5xl">Complete appliance product catalog</h1>
        <p className="mt-4 text-lg leading-8 text-textSecondary">
          Filter Dawlance, Hamza Store and original product ranges by category, subcategory, brand and feature.
        </p>
      </header>
      <ProductCatalog initialProducts={products} />
    </main>
  );
}
