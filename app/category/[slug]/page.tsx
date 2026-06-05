import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { JsonLd } from "@/components/seo/JsonLd";
import { categoryDefinitions, getCategory, getProductsByCategory } from "@/lib/products";
import { breadcrumbJsonLd, categoryKeywords, pageMetadata } from "@/lib/seo";

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return categoryDefinitions.map((category) => ({ slug: category.slug }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = getCategory(params.slug);
  if (!category) {
    return {};
  }

  return pageMetadata({
    title: `${category.name} in Peshawar`,
    path: `/category/${category.slug}`,
    description: `${category.description} Browse ${category.name.toLowerCase()} from New Murtaza Asif Traders with installation, maintenance and quote support.`,
    keywords: categoryKeywords(category.slug),
  });
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategory(params.slug);
  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(category.slug);

  return (
    <main className="section-shell pb-20 pt-32">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: category.name, path: `/category/${category.slug}` },
        ])}
      />
      <header className="mb-8 max-w-3xl">
        <p className="text-sm font-black uppercase text-primary">Category</p>
        <h1 className="mt-2 text-4xl font-black text-white md:text-5xl">{category.name}</h1>
        <p className="mt-4 text-lg leading-8 text-textSecondary">{category.description}</p>
      </header>
      <ProductCatalog initialProducts={categoryProducts} initialCategory={category.slug} />
    </main>
  );
}
