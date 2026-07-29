// Turns the raw phone/press photos in /images into web-ready files in /public/photos.
// Applies EXIF rotation, downscales to the largest size the layout ever shows (2x),
// and re-encodes as progressive JPEG. Re-runnable: overwrites the outputs.
// Run: node scripts/prepare-photos.mjs

import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(root, "images");
const OUT = path.join(root, "public", "photos");

/** [source file, output name, longest side in px, optional w/h ratio to crop to] */
const PHOTOS = [
  ["photo_2025-08-18_20-31-47.jpg", "portrait-hero.jpg", 1200, 2 / 3],
  ["224661AKV03309.jpg", "portrait-about.jpg", 900],
  ["photo_2026-01-13_21-55-06.jpg", "media-rtvi-studio.jpg", 1000],
  ["photo_2026-01-13_21-55-01.jpg", "media-rtvi-onair.jpg", 1000],
  ["photo_2026-03-25_11-53-07.jpg", "media-rossiya24.jpg", 1000],
  ["photo_2026-02-20_20-07-16.jpg", "media-edtech-kp.jpg", 1000],
  ["photo_2026-04-17_13-32-47.jpg", "media-on-set.jpg", 1000],
  ["photo_2025-02-10_14-19-04.jpg", "hobby-video.jpg", 1000],
  ["photo_2024-09-30_22-30-14.jpg", "hobby-sup.jpg", 1000],
  ["photo_2025-08-18_20-45-30.jpg", "hobby-tabletennis.jpg", 1000],
];

await mkdir(OUT, { recursive: true });

for (const [source, name, longestSide, ratio] of PHOTOS) {
  const to = path.join(OUT, name);
  // Without a ratio the photo keeps its own; with one it is cropped from the top,
  // which is where the subject of a portrait sits.
  const resize = ratio
    ? { width: Math.round(longestSide * ratio), height: longestSide, fit: "cover", position: "top" }
    : { width: longestSide, height: longestSide, fit: "inside", withoutEnlargement: true };

  const info = await sharp(path.join(SRC, source))
    .rotate()
    .resize(resize)
    .jpeg({ quality: 78, progressive: true, mozjpeg: true })
    .toFile(to);

  console.log(
    `${name.padEnd(26)} ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`,
  );
}
