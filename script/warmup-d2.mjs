import { readdir, readFile } from "node:fs/promises";
import { resolve, join } from "node:path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import { remarkD2 } from "@vanhiep99w/docs-kit/d2";
import { visit } from "unist-util-visit";

const d2Options = {
  cacheDir: resolve(".cache/docs-kit/d2"),
  concurrency: 1,
  jobTimeoutMs: 120_000,
  defaultCaption: "Sơ đồ",
};

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const res = join(dir, entry.name);
      return entry.isDirectory() ? getFiles(res) : res;
    }),
  );
  return files.flat().filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
}

const parser = unified().use(remarkParse).use(remarkFrontmatter);

console.log(
  "⏳ Đang quét và warm-up toàn bộ D2 diagrams vào .cache/docs-kit/d2...",
);

const contentDir = resolve("content");
const files = await getFiles(contentDir);

let totalFilesWithD2 = 0;
let totalDiagrams = 0;
let failedDiagrams = 0;

for (const file of files) {
  const content = await readFile(file, "utf8");
  if (!content.includes("```d2")) continue;

  const tree = parser.parse(content);
  let count = 0;
  visit(tree, "code", (node) => {
    if (node.lang === "d2") count++;
  });
  if (count === 0) continue;

  totalFilesWithD2++;
  totalDiagrams += count;

  let retries = 2;
  let success = false;
  let lastError;

  while (retries > 0 && !success) {
    try {
      const runner = unified().use(remarkD2, d2Options);
      await runner.run(structuredClone(tree), { path: file, value: content });
      success = true;
      const relPath = file.slice(contentDir.length).replaceAll("\\", "/");
      console.log(`✓ Đã warm-up: ${relPath} (${count} diagrams)`);
    } catch (err) {
      lastError = err;
      retries--;
      if (retries > 0) {
        await new Promise((r) => setTimeout(r, 200));
      }
    }
  }

  if (!success) {
    failedDiagrams++;
    console.error(`✗ Lỗi tại ${file}:`, lastError?.message);
  }
}

if (failedDiagrams > 0) {
  console.error(`\n⚠️ Hoàn tất với ${failedDiagrams} file có lỗi render!`);
  process.exit(1);
} else {
  console.log(
    `\n🎉 Hoàn tất! Đã warm-up thành công ${totalDiagrams} sơ đồ D2 trên ${totalFilesWithD2} bài viết.`,
  );
}
