import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const indexHtml = path.join(distDir, "index.html");
const notFoundHtml = path.join(distDir, "404.html");

await mkdir(distDir, { recursive: true });
await copyFile(indexHtml, notFoundHtml);
