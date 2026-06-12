import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const activeExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".json", ".xml"]);
const ignoredDirs = new Set([".git", ".next", ".netlify", "node_modules", "public"]);

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return ignoredDirs.has(entry.name) ? [] : walk(fullPath);
    }

    return activeExtensions.has(path.extname(entry.name)) ? [fullPath] : [];
  });
}

const activeFiles = walk(root);
const activeText = activeFiles
  .map((file) => `${path.relative(root, file)}\n${readFileSync(file, "utf8")}`)
  .join("\n");

const failures = [];
const productsFile = readFileSync(path.join(root, "lib", "products.ts"), "utf8");
const umarFilePath = path.join(root, "lib", "umar-products.ts");

if (!existsSync(umarFilePath)) {
  failures.push("lib/umar-products.ts is missing.");
}

const retiredSources = ["pdf", "legacy", "hamza"].map((name) => `${name}-products`);
const retiredImagePaths = ["pdf", "hamza", "cleaned"].map((name) => `/images/products/${name}`);
const retiredCatalogTokens = [
  ["Hamza", "Store"].join(" "),
  ["original product", "ranges"].join(" "),
  ["legacy", ""].join("-"),
  ["hamza", ""].join("-"),
];

for (const source of retiredSources) {
  if (productsFile.includes(source)) {
    failures.push(`lib/products.ts still imports or references ${source}.`);
  }
}

for (const token of retiredImagePaths) {
  if (activeText.includes(token)) {
    failures.push(`Active source files still reference old image path ${token}.`);
  }
}

for (const token of retiredCatalogTokens) {
  if (activeText.includes(token)) {
    failures.push(`Active source files still reference old catalog token "${token}".`);
  }
}

if (existsSync(umarFilePath)) {
  const umarText = readFileSync(umarFilePath, "utf8");
  const productCount = (umarText.match(/id:\s*"umar-/g) || []).length;
  const imageCount = (umarText.match(/image:\s*"\/images\/products\/umar\//g) || []).length;

  if (productCount === 0) {
    failures.push("No Umar products found in lib/umar-products.ts.");
  }

  if (productCount !== imageCount) {
    failures.push(`Umar products/images mismatch: ${productCount} products, ${imageCount} image paths.`);
  }

  if (umarText.includes("placeholder")) {
    failures.push("Generated Umar data contains a placeholder token.");
  }
}

const umarImageDir = path.join(root, "public", "images", "products", "umar");
if (!existsSync(umarImageDir)) {
  failures.push("public/images/products/umar is missing.");
}

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log("Umar catalog validation passed.");
