import type { Metadata } from "next";
import type { Product } from "@/lib/products";
import { business, categoryDefinitions } from "@/lib/products";

const defaultDescription =
  "Buy home & commercial appliances in Peshawar. New Murtaza Asif Traders provides sales & services for AC, refrigerators, dishwashers, water dispensers, kitchen appliances and small appliances. Call 0333 3900862.";

const defaultKeywords = [
  "home appliances Peshawar",
  "New Murtaza Asif Traders products Pakistan",
  "air conditioner Pakistan",
  "refrigerator Pakistan",
  "washing machine Pakistan",
  "LED TV Pakistan",
  "water dispenser Pakistan",
  "small appliances Peshawar",
  "institutional appliance supply Pakistan",
  "Army mess appliances supplier",
  "New Murtaza Asif Traders",
];

export const defaultShareImage = "/images/products/umar/haier-bed-room-refrigerator-hr-136bss-black-36984-1.webp";

export function pageMetadata({
  title,
  description = defaultDescription,
  path = "",
  keywords = [],
  image = defaultShareImage,
}: {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const url = `${business.siteUrl}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${business.siteUrl}${image}`;

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      locale: "en_PK",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 900,
          alt: `${business.name} premium appliance portfolio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: business.name,
  url: business.siteUrl,
  telephone: business.phone,
  email: business.email,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: business.phone,
    contactType: "sales and institutional supply",
    areaServed: "PK",
    availableLanguage: ["English", "Urdu"],
  },
  sameAs: [
    business.facebook,
    business.instagram,
    business.tiktok,
  ],
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  image: `${business.siteUrl}${defaultShareImage}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Q17, Phase 2, Muslim City",
    addressLocality: "Peshawar",
    addressRegion: "Khyber Pakhtunkhwa",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.coordinates.latitude,
    longitude: business.coordinates.longitude,
  },
  telephone: business.phone,
  url: business.siteUrl,
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${business.siteUrl}${item.path}`,
    })),
  };
}

export function productJsonLd(product: Product) {
  const imageUrl = product.image.startsWith("http") ? product.image : `${business.siteUrl}${product.image}`;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: imageUrl,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    category: product.category,
    offers: product.price
      ? {
          "@type": "Offer",
          priceCurrency: product.currency ?? "PKR",
          price: product.price,
          availability: product.stockStatus === "In stock" ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
          url: `${business.siteUrl}/products/${product.id}`,
        }
      : undefined,
  };
}

export const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is New Murtaza Asif Traders located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "New Murtaza Asif Traders is located at Q17, Phase 2, Muslim City, Peshawar.",
      },
    },
    {
      "@type": "Question",
      name: "Do you supply appliances for institutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The company supports institutional appliance supply, installation and commissioning, including Army and TIKA project work.",
      },
    },
    {
      "@type": "Question",
      name: "How can I request a quote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the inquiry cart, contact form, WhatsApp link or call 0333 3900862 for quotations.",
      },
    },
  ],
};

export function categoryKeywords(slug: string) {
  const category = categoryDefinitions.find((item) => item.slug === slug);
  return category?.keywords ?? [];
}
