import { umarCategoryDefinitions, umarProducts } from "@/lib/umar-products";

export type ProductBadge =
  | "Premium Range"
  | "Smart Living"
  | "Institutional"
  | "Kitchen"
  | "Commercial"
  | "Energy Saver"
  | "New Murtaza Asif Traders";

export type Category = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  keywords: string[];
};

export type Product = {
  id: string;
  name: string;
  categorySlug: string;
  category: string;
  subcategory: string;
  brand: string;
  badge: ProductBadge;
  description: string;
  image: string;
  price?: number | null;
  regularPrice?: number | null;
  salePrice?: number | null;
  currency?: string;
  sourceUrl?: string;
  stockStatus?: string;
  specs: Record<string, string>;
  features: string[];
  popular?: boolean;
  featured?: boolean;
};

export const business = {
  name: "New Murtaza Asif Traders",
  tagline: "Appliances Sales & Services",
  contactPerson: "Muhammad Mubeen Yousaf",
  phone: "0333 3900862",
  phoneHref: "tel:+923333900862",
  whatsapp: "https://wa.me/923339154341",
  whatsappDisplay: "+92 333 9154341",
  email: "sales@newmurtazaasiftraders.com",
  address: "Q17, Phase 2, Muslim City, Peshawar",
  city: "Peshawar",
  country: "Pakistan",
  siteUrl: "https://new-murtaza-asif-traders.netlify.app",
  facebook: "https://www.facebook.com/newmurtazaasiftraders",
  instagram: "https://www.instagram.com/newmurtazaasiftraders",
  tiktok: "https://www.tiktok.com/@newmurtazaasiftraders",
  coordinates: {
    latitude: 34.0151,
    longitude: 71.5249,
  },
};

export const categoryDefinitions: Category[] = umarCategoryDefinitions;

const productSources: Product[] = umarProducts;

export const products: Product[] = productSources.filter(
  (product, index, collection) => collection.findIndex((item) => item.id === product.id) === index,
);

export const featuredProducts = products.filter((product) => product.featured).slice(0, 4);

export const popularProducts = products.filter((product) => product.popular).slice(0, 8);

export const brands = Array.from(new Set(products.map((product) => product.brand))).sort();

export const subcategories = Array.from(new Set(products.map((product) => product.subcategory))).sort();

export const featureFilters = [
  "Inverter",
  "Energy Saver",
  "T3 Cooling",
  "Heat & Cool",
  "Floor Standing",
  "No Frost",
  "Smart Storage",
  "Water Saving",
  "Laundry",
  "Kitchen",
  "Cooking",
  "Food Preparation",
  "Breakfast",
  "Garment Care",
  "Floor Care",
  "Cleaning",
  "Steam",
  "Heating",
  "Cooling",
  "Portable",
  "Smart",
  "4K",
  "Personal Care",
  "Water Support",
  "Commercial",
  "Installation",
  "Maintenance",
  "Home Use",
  "Compact",
  "Order Support",
];

export function getCategory(slug: string) {
  return categoryDefinitions.find((category) => category.slug === slug);
}

export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(slug: string) {
  return products.filter((product) => product.categorySlug === slug);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((item) => item.categorySlug === product.categorySlug && item.id !== product.id)
    .sort((a, b) => Number(b.subcategory === product.subcategory) - Number(a.subcategory === product.subcategory))
    .slice(0, limit);
}

export function formatProductPrice(product: Product) {
  if (!product.price) {
    return "Call for price";
  }

  return `Rs. ${product.price.toLocaleString("en-US")}`;
}

export function hasSalePrice(product: Product) {
  return Boolean(product.salePrice && product.regularPrice && product.salePrice < product.regularPrice);
}
