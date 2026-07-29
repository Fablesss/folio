// Turns the raw company marks in /images/logos into uniform square tiles in
// /public/logos. Each source has its own quirks — a full-bleed background, a lot
// of empty margin, a wordmark baked in — so the recipe is per logo.
// Run: node scripts/prepare-logos.mjs

import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(root, "images", "logos");
const OUT = path.join(root, "public", "logos");

const SIZE = 128;
/** Share of the tile left empty around a trimmed mark, so all three read the same size. */
const PADDING = 0.12;

const LOGOS = [
  // Already a full-bleed tile: no padding, the CSS rounds its corners.
  { from: "zerocoder.png", to: "zerocoder.png", padding: 0 },
  // A small mark on a large transparent canvas: trim it back to the mark.
  { from: "salmon.png", to: "salmon.png", trim: true },
  // Favicon with the wordmark under the emblem: keep the emblem only.
  { from: "nestle.jpg", to: "nestle.png", cropTop: 0.66, trim: true },
];

await mkdir(OUT, { recursive: true });

for (const { from, to, trim, cropTop, padding = PADDING } of LOGOS) {
  let img = sharp(path.join(SRC, from));

  if (cropTop) {
    const { width, height } = await img.metadata();
    img = sharp(
      await img
        .extract({ left: 0, top: 0, width, height: Math.round(height * cropTop) })
        .toBuffer(),
    );
  }

  if (trim) img = sharp(await img.trim({ threshold: 12 }).toBuffer());

  const margin = Math.round(SIZE * padding);
  const inner = SIZE - margin * 2;
  const info = await img
    .resize({ width: inner, height: inner, fit: "contain", background: "#ffffff00" })
    .extend({
      top: margin,
      bottom: margin,
      left: margin,
      right: margin,
      background: "#ffffff00",
    })
    .png({ compressionLevel: 9 })
    .toFile(path.join(OUT, to));

  console.log(`${to.padEnd(16)} ${info.width}x${info.height}  ${(info.size / 1024).toFixed(1)} KB`);
}
