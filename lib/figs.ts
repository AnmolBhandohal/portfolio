import fs from "node:fs";
import path from "node:path";

export function getFigSrc(slug: string): string | null {
  const filePath = path.join(process.cwd(), "public", "figs", `${slug}.jpg`);
  return fs.existsSync(filePath) ? `/figs/${slug}.jpg` : null;
}
