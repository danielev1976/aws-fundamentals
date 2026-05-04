import fs from "fs";
import path from "path";

export async function getDoc(
  locale: string,
  slug: string[]
) {
  try {
    const filePath = path.join(
      process.cwd(),
      "content",
      locale,
      ...slug,
      "index.mdx"
    );

    return fs.readFileSync(filePath, "utf-8");
  } catch {
    return null;
  }
}