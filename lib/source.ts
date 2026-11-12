import { loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { defineDocs } from 'fumadocs-mdx/macro';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';

const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: pageSchema,
    postprocess: { includeProcessedMarkdown: true },
  },
  meta: { schema: metaSchema },
});

const javaLearn = defineDocs({
  dir: 'content/java-learn',
  docs: {
    schema: pageSchema,
    postprocess: { includeProcessedMarkdown: true },
  },
  meta: { schema: metaSchema },
});

export const sources = {
  docs: loader({
    baseUrl: '/docs',
    source: docs.toFumadocsSource(),
    plugins: [lucideIconsPlugin()],
  }),
  'java-learn': loader({
    baseUrl: '/java-learn',
    source: javaLearn.toFumadocsSource(),
    plugins: [lucideIconsPlugin()],
  }),
};

export function getSource(id: string) {
  return (sources as Record<string, (typeof sources)['docs']>)[id];
}

// Tạm giữ để các file cũ còn import `source` không bị lỗi
export const source = sources.docs;