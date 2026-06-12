import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailClient } from "@/components/products/ProductDetailClient";
import { JsonLd } from "@/components/seo/JsonLd";
import { getProduct } from "@/lib/products";
import { breadcrumbJsonLd, pageMetadata, productJsonLd } from "@/lib/seo";

type ProductPageProps = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProduct(params.id);
  if (!product) {
    return {};
  }

  return pageMetadata({
    title: product.name,
    path: `/products/${product.id}`,
    description: `${product.description} Request pricing from New Murtaza Asif Traders in Peshawar.`,
    keywords: [product.name, product.brand, product.category],
    image: product.image,
  });
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProduct(params.id);
  if (!product) {
    notFound();
  }

  return (
    <main>
      <JsonLd
        data={[
          productJsonLd(product),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: product.category, path: `/category/${product.categorySlug}` },
            { name: product.name, path: `/products/${product.id}` },
          ]),
        ]}
      />
      <ProductDetailClient product={product} />
    </main>
  );
}
