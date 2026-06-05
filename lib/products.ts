import { hamzaProducts } from "@/lib/hamza-products";
import { legacyProducts } from "@/lib/legacy-products";
import { pdfProducts } from "@/lib/pdf-products";

export type ProductBadge =
  | "Premium Range"
  | "Smart Living"
  | "Institutional"
  | "Kitchen"
  | "Commercial"
  | "Energy Saver";

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

export const categoryDefinitions: Category[] = [
  {
    slug: "air-conditioner",
    name: "Air Conditioners",
    shortName: "AC",
    description: "Split inverter AC, T3 cooling and floor-standing models for homes, offices and institutions.",
    icon: "AirVent",
    keywords: ["air conditioner Peshawar", "split AC Pakistan", "inverter AC"],
  },
  {
    slug: "led-tv",
    name: "LED TVs",
    shortName: "LED TV",
    description: "Smart LED, 4K Google TV and large-screen displays for home and commercial spaces.",
    icon: "Tv",
    keywords: ["LED TV Peshawar", "smart TV Pakistan", "4K TV"],
  },
  {
    slug: "air-cooler",
    name: "Air Coolers",
    shortName: "Coolers",
    description: "Room air coolers and portable cooling models for practical summer comfort.",
    icon: "Wind",
    keywords: ["air cooler Peshawar", "portable air cooler Pakistan"],
  },
  {
    slug: "refrigerator",
    name: "Refrigerators",
    shortName: "Fridge",
    description: "No Frost, French door, side-by-side and compact refrigerator models.",
    icon: "Refrigerator",
    keywords: ["refrigerator Peshawar", "fridge dealer Pakistan"],
  },
  {
    slug: "washing-machine",
    name: "Washing Machines",
    shortName: "Washers",
    description: "Front load, top load, semi-automatic and portable washing support.",
    icon: "WashingMachine",
    keywords: ["washing machine Peshawar", "washer Pakistan"],
  },
  {
    slug: "freezer",
    name: "Freezers",
    shortName: "Freezer",
    description: "Chest, vertical and deep freezer solutions for homes, shops and institutions.",
    icon: "Snowflake",
    keywords: ["deep freezer Peshawar", "chest freezer Pakistan"],
  },
  {
    slug: "water-dispenser",
    name: "Water Dispensers",
    shortName: "Dispenser",
    description: "Hot, cold, glass-door, bottle pump and mini-bar dispenser models.",
    icon: "Droplets",
    keywords: ["water dispenser Peshawar", "hot cold dispenser Pakistan"],
  },
  {
    slug: "water-geyser",
    name: "Water Geysers",
    shortName: "Geysers",
    description: "Gas, electric and communal hot-water support for domestic and institutional use.",
    icon: "Flame",
    keywords: ["water geyser Peshawar", "gas heater Pakistan"],
  },
  {
    slug: "dishwasher",
    name: "Dishwashers",
    shortName: "Dishwasher",
    description: "Inverter and non-inverter dishwashers for home and commercial kitchens.",
    icon: "Utensils",
    keywords: ["Dawlance dishwasher Peshawar", "commercial dishwasher Pakistan"],
  },
  {
    slug: "kitchen-appliances",
    name: "Kitchen Appliances",
    shortName: "Kitchen",
    description: "Everyday kitchen machines, countertop helpers and compact preparation tools.",
    icon: "ChefHat",
    keywords: ["kitchen appliances Peshawar", "home appliances Pakistan"],
  },
  {
    slug: "food-preparation",
    name: "Food Preparation",
    shortName: "Food Prep",
    description: "Blenders, hand blenders, juicers, food processors and meat mincers.",
    icon: "ChefHat",
    keywords: ["Dawlance blender Peshawar", "food processor Pakistan"],
  },
  {
    slug: "cooking-appliances",
    name: "Cooking Appliances",
    shortName: "Cooking",
    description: "Air fryer, mini oven and multicooker models for daily cooking.",
    icon: "CookingPot",
    keywords: ["Dawlance air fryer Peshawar", "mini oven Pakistan"],
  },
  {
    slug: "microwave-oven",
    name: "Microwaves & Ovens",
    shortName: "Microwave",
    description: "Solo, grill, digital and commercial microwave options for quick cooking.",
    icon: "Microwave",
    keywords: ["microwave oven Peshawar", "grill microwave Pakistan"],
  },
  {
    slug: "oven",
    name: "Ovens & Hobs",
    shortName: "Ovens",
    description: "Built-in ovens, warming ovens and hob packages for complete kitchens.",
    icon: "CookingPot",
    keywords: ["built in oven Peshawar", "kitchen hob Pakistan"],
  },
  {
    slug: "air-fryer",
    name: "Air Fryers",
    shortName: "Air Fryer",
    description: "Compact and family air fryers for efficient everyday cooking.",
    icon: "CookingPot",
    keywords: ["air fryer Peshawar", "digital air fryer Pakistan"],
  },
  {
    slug: "breakfast-beverages",
    name: "Breakfast & Beverages",
    shortName: "Breakfast",
    description: "Kettles, toasters, sandwich makers and citrus press options.",
    icon: "Coffee",
    keywords: ["Dawlance kettle Peshawar", "toaster Pakistan"],
  },
  {
    slug: "small-appliances",
    name: "Small Appliances",
    shortName: "Small",
    description: "Compact home appliances, grinders, kettles, steamers and useful countertop tools.",
    icon: "Package",
    keywords: ["small appliances Peshawar", "compact appliances Pakistan"],
  },
  {
    slug: "garment-care",
    name: "Garment Care",
    shortName: "Garment",
    description: "Steam irons, dry irons and garment steamers for home care.",
    icon: "Package",
    keywords: ["Dawlance iron Peshawar", "garment steamer Pakistan"],
  },
  {
    slug: "room-heater",
    name: "Room Heaters",
    shortName: "Heaters",
    description: "Portable, gas and electric room heaters for seasonal comfort.",
    icon: "Flame",
    keywords: ["room heater Peshawar", "electric heater Pakistan"],
  },
  {
    slug: "portable-fan",
    name: "Portable Fans",
    shortName: "Fans",
    description: "Handheld, neck, desk and mist fans for compact cooling support.",
    icon: "Fan",
    keywords: ["portable fan Pakistan", "desk fan Peshawar"],
  },
  {
    slug: "humidifier",
    name: "Humidifiers",
    shortName: "Humidifier",
    description: "Compact humidifiers and misting devices for room comfort.",
    icon: "Droplets",
    keywords: ["humidifier Pakistan", "room humidifier Peshawar"],
  },
  {
    slug: "vacuum-cleaner",
    name: "Vacuum Cleaners",
    shortName: "Vacuum",
    description: "Wet-and-dry and compact vacuum cleaner models from the floor-care range.",
    icon: "Sparkles",
    keywords: ["Dawlance vacuum cleaner Peshawar", "floor care Pakistan"],
  },
  {
    slug: "beauty-hygiene",
    name: "Beauty & Hygiene",
    shortName: "Care",
    description: "Trimmers, hair dryers, straighteners, curlers, steamers and grooming devices.",
    icon: "Scissors",
    keywords: ["grooming kit Peshawar", "hair dryer Pakistan", "personal care appliances"],
  },
];

const productSources: Product[] = [...pdfProducts, ...legacyProducts, ...hamzaProducts];

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
