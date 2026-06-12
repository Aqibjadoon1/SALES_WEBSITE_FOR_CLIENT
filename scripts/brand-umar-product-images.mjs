import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const catalogPath = path.join(root, "lib", "umar-products.ts");
const imageRoot = path.join(root, "public");
const siteTitle = "New Murtaza Asif Traders";

function decodeString(value) {
  return value
    .replace(/\\"/g, '"')
    .replace(/\\n/g, "\n")
    .replace(/\\\\/g, "\\");
}

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrapWords(text, maxChars) {
  const words = text.split(/\s+/).filter(Boolean);
  const lines = [];
  let line = "";

  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }

  if (line) {
    lines.push(line);
  }

  return lines.slice(0, 2);
}

function catalogProducts() {
  const text = readFileSync(catalogPath, "utf8");
  const products = [];
  const regex = /\{\s*id:\s*"umar-[\s\S]*?name:\s*"((?:\\"|[^"])*)"[\s\S]*?image:\s*"([^"]+)"/g;
  let match;

  while ((match = regex.exec(text))) {
    if (!match[2].startsWith("/images/products/umar/")) {
      continue;
    }

    products.push({
      name: decodeString(match[1]),
      imagePath: path.join(imageRoot, match[2].replace(/^\//, "")),
    });
  }

  return products;
}

function labelSvg({ width, height, productName }) {
  const bandHeight = Math.max(56, Math.min(92, Math.round(height * 0.13)));
  const fontSize = Math.max(15, Math.min(27, Math.round(width / 32)));
  const subtitleSize = Math.max(10, Math.round(fontSize * 0.48));
  const maxChars = Math.max(24, Math.floor(width / (fontSize * 0.55)));
  const lines = wrapWords(productName, maxChars);
  const lineHeight = Math.round(fontSize * 1.14);
  const titleBlockHeight = lines.length * lineHeight;
  const startY = height - bandHeight + Math.max(22, Math.round((bandHeight - titleBlockHeight) / 2) + fontSize - 5);

  const titleLines = lines
    .map((line, index) => {
      const suffix = index === lines.length - 1 && lines.join(" ").length < productName.length ? "..." : "";
      return `<text x="50%" y="${startY + index * lineHeight}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="700" fill="#0f2530">${escapeXml(line + suffix)}</text>`;
    })
    .join("");

  return Buffer.from(`
    <svg width="${width}" height="${height}">
      <defs>
        <linearGradient id="labelBg" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.96"/>
          <stop offset="55%" stop-color="#f3f7fa" stop-opacity="0.96"/>
          <stop offset="100%" stop-color="#d9e4eb" stop-opacity="0.96"/>
        </linearGradient>
      </defs>
      <rect x="0" y="${height - bandHeight}" width="${width}" height="${bandHeight}" fill="url(#labelBg)"/>
      <rect x="0" y="${height - bandHeight}" width="${width}" height="1" fill="#7ca7bb" opacity="0.55"/>
      ${titleLines}
      <text x="50%" y="${height - 10}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${subtitleSize}" font-weight="700" letter-spacing="1.4" fill="#4d7282">${escapeXml(siteTitle.toUpperCase())}</text>
    </svg>
  `);
}

let processed = 0;

for (const product of catalogProducts()) {
  const input = readFileSync(product.imagePath);
  const metadata = await sharp(input, { animated: false }).metadata();
  const width = metadata.width;
  const height = metadata.height;

  if (!width || !height) {
    continue;
  }

  const overlay = labelSvg({ width, height, productName: product.name });
  const output = await sharp(input)
    .composite([{ input: overlay, left: 0, top: 0 }])
    .toBuffer();

  writeFileSync(product.imagePath, output);
  processed += 1;

  if (processed % 100 === 0) {
    console.log(`Processed ${processed} images`);
  }
}

console.log(`Branded ${processed} product images.`);
