import { readdirSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const imageDir = path.join(process.cwd(), "public", "images", "products", "umar");
const files = readdirSync(imageDir)
  .filter((file) => /\.(avif|jpe?g|png|webp)$/i.test(file))
  .sort();

const sample = files.filter((_, index) => index % Math.max(1, Math.floor(files.length / 30)) === 0).slice(0, 30);
const tileWidth = 240;
const tileHeight = 230;
const columns = 5;
const rows = Math.ceil(sample.length / columns);

const composites = [];

for (const [index, file] of sample.entries()) {
  const imagePath = path.join(imageDir, file);
  const image = await sharp(imagePath)
    .resize({ width: tileWidth, height: 170, fit: "contain", background: "#ffffff" })
    .jpeg()
    .toBuffer();
  const label = Buffer.from(
    `<svg width="${tileWidth}" height="60">
      <rect width="100%" height="100%" fill="#f3f5f7"/>
      <text x="8" y="18" font-family="Arial" font-size="11" fill="#111">${file.slice(0, 42)}</text>
      <text x="8" y="36" font-family="Arial" font-size="10" fill="#555">${index + 1}</text>
    </svg>`,
  );
  const x = (index % columns) * tileWidth;
  const y = Math.floor(index / columns) * tileHeight;

  composites.push({ input: image, left: x, top: y });
  composites.push({ input: label, left: x, top: y + 170 });
}

const outputPath = path.join(process.cwd(), "public", "images", "products", "umar-contact-sheet.jpg");

await sharp({
  create: {
    width: tileWidth * columns,
    height: tileHeight * rows,
    channels: 3,
    background: "#ffffff",
  },
})
  .composite(composites)
  .jpeg({ quality: 90 })
  .toFile(outputPath);

console.log(outputPath);
