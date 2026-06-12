import { createHash } from "node:crypto";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const API_BASE = "https://umarelectronics.pk/wp-json/wc/store/v1";
const SITE_BASE = "https://umarelectronics.pk";
const root = process.cwd();
const imageDir = path.join(root, "public", "images", "products", "umar");
const outputFile = path.join(root, "lib", "umar-products.ts");

const topCategoryMeta = {
  "air-conditioner": {
    plural: "Air Conditioners",
    shortName: "AC",
    description: "Split, inverter, T3 and floor-standing air conditioner models from New Murtaza Asif Traders.",
    icon: "AirVent",
    keywords: ["air conditioner Pakistan", "inverter AC", "split AC"],
  },
  "small-appliances": {
    plural: "Small Appliances",
    shortName: "Small",
    description: "Compact appliances, irons, kettles, blenders, fans and everyday home helpers.",
    icon: "Package",
    keywords: ["small appliances Pakistan", "home appliances"],
  },
  "led-tv": {
    plural: "LED TVs",
    shortName: "LED TV",
    description: "Smart LED, 4K and large-screen TV models.",
    icon: "Tv",
    keywords: ["LED TV Pakistan", "smart TV", "4K TV"],
  },
  refrigerator: {
    plural: "Refrigerators",
    shortName: "Fridge",
    description: "Direct cool, no-frost and inverter refrigerator models.",
    icon: "Refrigerator",
    keywords: ["refrigerator Pakistan", "fridge"],
  },
  "washing-machine": {
    plural: "Washing Machines",
    shortName: "Washers",
    description: "Top-load, front-load, twin-tub and automatic washing machines.",
    icon: "WashingMachine",
    keywords: ["washing machine Pakistan", "washer"],
  },
  "kitchen-appliances": {
    plural: "Kitchen Appliances",
    shortName: "Kitchen",
    description: "Kitchen hoods, hobs and countertop cooking appliances.",
    icon: "ChefHat",
    keywords: ["kitchen appliances Pakistan", "hob", "hood"],
  },
  "beauty-hygiene": {
    plural: "Beauty & Hygiene",
    shortName: "Care",
    description: "Grooming, hair care and personal-care appliances.",
    icon: "Scissors",
    keywords: ["beauty appliances Pakistan", "personal care"],
  },
  "water-geyser": {
    plural: "Water Geysers",
    shortName: "Geysers",
    description: "Electric and gas water geysers for domestic hot-water needs.",
    icon: "Flame",
    keywords: ["water geyser Pakistan", "electric geyser"],
  },
  "microwave-oven": {
    plural: "Microwave Ovens",
    shortName: "Microwave",
    description: "Solo, grill and digital microwave oven models.",
    icon: "Microwave",
    keywords: ["microwave oven Pakistan", "grill microwave"],
  },
  oven: {
    plural: "Ovens",
    shortName: "Ovens",
    description: "Electric ovens, built-in ovens and cooking ranges.",
    icon: "CookingPot",
    keywords: ["oven Pakistan", "electric oven"],
  },
  "water-dispenser": {
    plural: "Water Dispensers",
    shortName: "Dispenser",
    description: "Hot, cold and water-cooler dispenser models.",
    icon: "Droplets",
    keywords: ["water dispenser Pakistan", "water cooler"],
  },
  freezer: {
    plural: "Freezers",
    shortName: "Freezer",
    description: "Chest and deep freezer models for home and business storage.",
    icon: "Snowflake",
    keywords: ["deep freezer Pakistan", "chest freezer"],
  },
  "air-cooler": {
    plural: "Air Coolers",
    shortName: "Coolers",
    description: "Room air coolers and portable cooling models.",
    icon: "Wind",
    keywords: ["air cooler Pakistan", "room cooler"],
  },
  "room-heater": {
    plural: "Room Heaters",
    shortName: "Heaters",
    description: "Portable, gas and electric room heater models.",
    icon: "Flame",
    keywords: ["room heater Pakistan", "electric heater"],
  },
};

const knownBrands = [
  "Dawlance",
  "Haier",
  "Gree",
  "Kenwood",
  "PEL",
  "TCL",
  "Samsung",
  "LG",
  "Panasonic",
  "Canon",
  "Boss",
  "Super Asia",
  "Fischer",
  "Nasgas",
  "Rays",
  "Royal",
  "Orient",
  "Changhong Ruba",
  "Hisense",
  "Midea",
  "Westpoint",
  "Anex",
  "Philips",
  "Braun",
  "Remington",
  "Xiaomi",
  "Sharp",
  "Nobel",
  "Acson",
  "Ecostar",
  "iZone",
];

function decodeHtml(value = "") {
  return String(value)
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&rdquo;/g, '"')
    .replace(/&ldquo;/g, '"')
    .replace(/&ndash;/g, "-")
    .replace(/&mdash;/g, "-")
    .replace(/&times;/g, "x");
}

function stripHtml(value = "") {
  return decodeHtml(value)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(value) {
  return decodeHtml(value)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120);
}

function numericPrice(value) {
  const number = Number(String(value || "").replace(/[^\d.]/g, ""));
  return Number.isFinite(number) && number > 0 ? number : null;
}

function featureFromText(product, categorySlug) {
  const text = `${product.name} ${stripHtml(product.short_description)} ${stripHtml(product.description)}`.toLowerCase();
  const features = new Set(["New Murtaza Asif Traders"]);

  if (text.includes("inverter")) features.add("Inverter");
  if (text.includes("t3")) features.add("T3 Cooling");
  if (text.includes("no frost") || text.includes("nofrost")) features.add("No Frost");
  if (text.includes("smart")) features.add("Smart");
  if (text.includes("4k") || text.includes("uhd")) features.add("4K");
  if (text.includes("energy") || text.includes("eco")) features.add("Energy Saver");
  if (text.includes("portable")) features.add("Portable");
  if (text.includes("digital")) features.add("Digital");
  if (text.includes("hot") && text.includes("cold")) features.add("Hot & Cold");
  if (categorySlug.includes("kitchen") || categorySlug.includes("oven")) features.add("Kitchen");
  if (categorySlug.includes("water")) features.add("Water Support");
  if (categorySlug.includes("heater")) features.add("Heating");
  if (categorySlug.includes("air")) features.add("Cooling");

  return Array.from(features);
}

function badgeForCategory(categorySlug) {
  if (["air-conditioner", "refrigerator", "led-tv"].includes(categorySlug)) return "Premium Range";
  if (["kitchen-appliances", "microwave-oven", "oven", "small-appliances"].includes(categorySlug)) return "Kitchen";
  if (["water-dispenser", "freezer", "water-geyser"].includes(categorySlug)) return "Commercial";
  if (["air-cooler", "room-heater"].includes(categorySlug)) return "Smart Living";
  return "New Murtaza Asif Traders";
}

function inferBrand(name, categories) {
  const decodedName = decodeHtml(name);
  const matched = knownBrands.find((brand) => decodedName.toLowerCase().startsWith(brand.toLowerCase()));
  if (matched) return matched;

  const categoryBrand = categories
    .map((category) => decodeHtml(category.name).replace(/\s+(AC|LED TV|Refrigerator|Washing Machine|Microwave Oven)$/i, ""))
    .find((name) => knownBrands.some((brand) => name.toLowerCase() === brand.toLowerCase()));

  if (categoryBrand) return categoryBrand;

  return decodedName.split(/\s+/)[0] || "New Murtaza Asif Traders";
}

async function getJson(pathname) {
  const response = await fetch(`${API_BASE}${pathname}`, {
    headers: { Accept: "application/json", "User-Agent": "New Murtaza Asif Traders catalog importer" },
  });

  if (!response.ok) {
    throw new Error(`GET ${pathname} failed with ${response.status}`);
  }

  return {
    data: await response.json(),
    totalPages: Number(response.headers.get("x-wp-totalpages") || 1),
  };
}

async function getAll(pathname) {
  const first = await getJson(`${pathname}${pathname.includes("?") ? "&" : "?"}per_page=100&page=1`);
  const results = [...first.data];

  for (let page = 2; page <= first.totalPages; page += 1) {
    const current = await getJson(`${pathname}${pathname.includes("?") ? "&" : "?"}per_page=100&page=${page}`);
    results.push(...current.data);
    console.log(`Fetched ${pathname} page ${page}/${first.totalPages}`);
  }

  return results;
}

function buildCategoryHelpers(categories) {
  const byId = new Map(categories.map((category) => [category.id, category]));

  function topCategoryFor(category) {
    let current = category;
    const seen = new Set();
    while (current?.parent && byId.has(current.parent) && !seen.has(current.parent)) {
      seen.add(current.parent);
      current = byId.get(current.parent);
    }
    return current;
  }

  return { byId, topCategoryFor };
}

async function downloadImage(product, imageUrl, index) {
  const parsed = new URL(imageUrl);
  const ext = path.extname(parsed.pathname).split("?")[0] || ".webp";
  const fileName = `${slugify(product.name) || `product-${product.id}`}-${product.id}-${index}${ext.toLowerCase()}`;
  const outputPath = path.join(imageDir, fileName);

  if (existsSync(outputPath)) {
    return `/images/products/umar/${fileName}`;
  }

  const response = await fetch(imageUrl, {
    headers: { "User-Agent": "New Murtaza Asif Traders catalog importer" },
  });

  if (!response.ok) {
    throw new Error(`Image download failed for ${product.name}: ${response.status}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  writeFileSync(outputPath, buffer);
  return `/images/products/umar/${fileName}`;
}

function productToRecord(product, imagePath, categories, topCategory) {
  const categorySlug = topCategory.slug;
  const categoryMeta = topCategoryMeta[categorySlug];
  const categoryName = categoryMeta?.plural || decodeHtml(topCategory.name);
  const subcategory =
    categories
      .map((category) => decodeHtml(category.name))
      .find((name) => slugify(name) !== categorySlug && name !== decodeHtml(topCategory.name)) || categoryName;
  const price = numericPrice(product.prices?.price);
  const regularPrice = numericPrice(product.prices?.regular_price);
  const salePrice = numericPrice(product.prices?.sale_price);
  const description =
    stripHtml(product.short_description) ||
    stripHtml(product.description) ||
    `${decodeHtml(product.name)} from New Murtaza Asif Traders.`;
  const brand = inferBrand(product.name, categories);
  const id = `umar-${product.slug || slugify(product.name)}-${product.id}`;
  const sourceHash = createHash("sha1").update(`${product.id}:${product.permalink}`).digest("hex").slice(0, 10);

  return {
    id,
    name: decodeHtml(product.name),
    categorySlug,
    category: categoryName,
    subcategory,
    brand,
    badge: badgeForCategory(categorySlug),
    description,
    image: imagePath,
    price,
    regularPrice,
    salePrice,
    currency: product.prices?.currency_code || "PKR",
    sourceUrl: product.permalink || `${SITE_BASE}/product/${product.slug}/`,
    stockStatus: product.is_in_stock ? "In stock" : "Check availability",
    specs: {
      Brand: brand,
      Category: categoryName,
      Subcategory: subcategory,
      Price: price ? `Rs. ${price.toLocaleString("en-US")}` : "Call for price",
      "Regular Price": regularPrice ? `Rs. ${regularPrice.toLocaleString("en-US")}` : "Call for price",
      "Sale Price": salePrice ? `Rs. ${salePrice.toLocaleString("en-US")}` : "Call for price",
      Source: "New Murtaza Asif Traders",
      "Source Ref": sourceHash,
    },
    features: featureFromText(product, categorySlug),
    popular: Boolean(product.is_purchasable || product.on_sale),
    featured: Boolean(product.featured || product.on_sale),
  };
}

function formatProduct(product) {
  return JSON.stringify(product, null, 2).replace(/"([A-Za-z_$][\w$]*)":/g, "$1:");
}

function formatCategory(category) {
  return JSON.stringify(category, null, 2).replace(/"([A-Za-z_$][\w$]*)":/g, "$1:");
}

async function main() {
  mkdirSync(imageDir, { recursive: true });

  const categories = await getAll("/products/categories");
  const { byId, topCategoryFor } = buildCategoryHelpers(categories);
  const products = await getAll("/products");
  const categoryDefinitions = categories
    .filter((category) => category.parent === 0 && category.count > 0 && topCategoryMeta[category.slug])
    .sort((a, b) => b.count - a.count)
    .map((category) => ({
      slug: category.slug,
      name: topCategoryMeta[category.slug].plural,
      shortName: topCategoryMeta[category.slug].shortName,
      description: topCategoryMeta[category.slug].description,
      icon: topCategoryMeta[category.slug].icon,
      keywords: topCategoryMeta[category.slug].keywords,
    }));

  const records = [];
  const skipped = [];

  for (const [index, product] of products.entries()) {
    const productCategories = (product.categories || [])
      .map((category) => byId.get(category.id))
      .filter(Boolean);
    const topCategory = productCategories.map(topCategoryFor).find((category) => topCategoryMeta[category?.slug]);
    const imageUrl = product.images?.[0]?.src;

    if (!topCategory || !imageUrl) {
      skipped.push({ id: product.id, name: product.name, reason: !topCategory ? "unsupported category" : "missing image" });
      continue;
    }

    try {
      const imagePath = await downloadImage(product, imageUrl, 1);
      records.push(productToRecord(product, imagePath, productCategories, topCategory));
    } catch (error) {
      skipped.push({ id: product.id, name: product.name, reason: error.message });
    }

    if ((index + 1) % 50 === 0) {
      console.log(`Processed ${index + 1}/${products.length}`);
    }
  }

  const content = `import type { Category, Product } from "@/lib/products";

export const umarCategoryDefinitions: Category[] = [
${categoryDefinitions.map((category) => `  ${formatCategory(category)}`).join(",\n")}
];

export const umarProducts: Product[] = [
${records.map((product) => `  ${formatProduct(product)}`).join(",\n")}
];

export const umarImportSummary = {
  source: "${SITE_BASE}",
  importedProducts: ${records.length},
  skippedProducts: ${skipped.length},
  skipped: ${JSON.stringify(skipped, null, 2)}
};
`;

  writeFileSync(outputFile, content);
  console.log(`Imported ${records.length} Umar products.`);
  console.log(`Skipped ${skipped.length} products.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
