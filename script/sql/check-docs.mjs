import { readArticles, validateReferences, docsDir } from './docs-content.mjs';
import { visit } from 'unist-util-visit';

const articles = await readArticles();
let d2Count = 0;
let mermaidCount = 0;
let totalSnippets = 0;
const langCounts = new Map();

for (const article of articles) {
  // Check D2 caption backticks
  if (article.content) {
    for (const match of article.content.matchAll(/^```d2([^\n]*)/gm)) {
      if (match[1].includes('`')) {
        throw new Error(`${article.filename}: backticks are not allowed in D2 fence captions`);
      }
    }
  }

  totalSnippets += article.files.length;
  for (const file of article.files) {
    langCounts.set(file.language, (langCounts.get(file.language) ?? 0) + 1);
  }

  visit(article.tree, 'code', (node) => {
    if (node.lang === 'd2') d2Count++;
    if (node.lang === 'mermaid') mermaidCount++;
  });
}

const referencedProjects = validateReferences(articles);
const totalRefs = articles.reduce((n, a) => n + a.references.length, 0);

console.log(
  `[sql:docs] ${articles.length} pages; ${d2Count} D2 diagrams; ${mermaidCount} Mermaid diagrams; ` +
  `${totalSnippets} code snippets (${langCounts.get('sql') ?? 0} SQL); ` +
  `${referencedProjects.length} projects, ${totalRefs} references validated`
);

