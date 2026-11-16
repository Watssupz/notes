import { mkdir, writeFile, readFile, readdir, rm } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { createHighlighter } from 'shiki';
import { readArticles, validateReferences } from './docs-content.mjs';

const output = new URL('../../public/source-examples/', import.meta.url);
const articles = validateReferences(await readArticles());
const highlighter = await createHighlighter({
  themes: ['github-light', 'github-dark'],
  langs: [...new Set(articles.flatMap((a) => a.files.map((f) => f.language)))].filter((l) => l !== 'text'),
});
const assets = new Map();
const manifest = [];
try {
  for (const article of articles) {
    const files = article.files.map(({ position, ...file }) => ({
      ...file,
      html: highlighter.codeToHtml(file.code, {
        lang: file.language,
        themes: { light: 'github-light', dark: 'github-dark' },
        transformers: [{ line(node, line) { node.properties['data-line'] = line; } }],
      }),
    }));
    const json = JSON.stringify({
      project: article.project, snapshot: 'article', defaultFile: files[0].path, files,
    });
    const hash = createHash('sha256').update(json).digest('hex').slice(0, 12);
    const asset = `${article.project}.${hash}.json`;
    assets.set(asset, json);
    manifest.push({
      id: article.project, title: article.title, defaultSnapshot: 'article',
      snapshots: [{ id: 'article', title: 'Snippets trong bài', asset }],
    });
  }

  await mkdir(output, { recursive: true });

  // Read existing manifest (e.g. from Java source examples) and merge
  let existingManifest = [];
  try {
    const raw = await readFile(new URL('manifest.json', output), 'utf8');
    existingManifest = JSON.parse(raw);
  } catch {}

  const mergedManifest = [
    ...existingManifest.filter((item) => !manifest.some((m) => m.id === item.id)),
    ...manifest,
  ];

  for (const [name, json] of assets) await writeFile(new URL(name, output), json);
  await writeFile(new URL('manifest.json', output), JSON.stringify(mergedManifest, null, 2) + '\n');

  // Clean up only previous SQL-specific assets, preserve Java assets
  const sqlProjects = new Set(articles.map((a) => a.project));
  for (const name of await readdir(output)) {
    if (name !== 'manifest.json' && [...sqlProjects].some((p) => name.startsWith(p + '.')) && !assets.has(name)) {
      await rm(new URL(name, output));
    }
  }

  console.log(`[sql:source-examples] ${articles.length} projects; ${articles.reduce((n, a) => n + a.files.length, 0)} snippets; references validated → public/source-examples`);
} finally {
  highlighter.dispose();
}
