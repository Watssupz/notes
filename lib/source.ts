import { loader } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons";
import { defineDocs } from "fumadocs-mdx/macro";
import { metaSchema, pageSchema } from "fumadocs-core/source/schema";

const docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: pageSchema,
    postprocess: { includeProcessedMarkdown: true },
  },
  meta: { schema: metaSchema },
});

const javaLearn = defineDocs({
  dir: "content/java-learn",
  docs: {
    schema: pageSchema,
    postprocess: { includeProcessedMarkdown: true },
  },
  meta: { schema: metaSchema },
});

const jwtLearn = defineDocs({
  dir: "content/jwt-learn",
  docs: {
    schema: pageSchema,
    postprocess: { includeProcessedMarkdown: true },
  },
  meta: { schema: metaSchema },
});

const _90daysofdevops = defineDocs({
  dir: "content/90daysofdevops",
  docs: {
    schema: pageSchema,
    postprocess: { includeProcessedMarkdown: true },
  },
  meta: { schema: metaSchema },
});
const sqlLearn = defineDocs({
  dir: "content/sql-learn",
  docs: {
    schema: pageSchema,
    postprocess: { includeProcessedMarkdown: true },
  },
  meta: { schema: metaSchema },
});
const redisLearn = defineDocs({
  dir: "content/redis-learn",
  docs: {
    schema: pageSchema,
    postprocess: { includeProcessedMarkdown: true },
  },
  meta: { schema: metaSchema },
});
const interviewQues = defineDocs({
  dir: "content/interview-question",
  docs: {
    schema: pageSchema,
    postprocess: { includeProcessedMarkdown: true },
  },
  meta: { schema: metaSchema },
});
const dockerLearn = defineDocs({
  dir: "content/docker-learn",
  docs: {
    schema: pageSchema,
    postprocess: { includeProcessedMarkdown: true },
  },
  meta: { schema: metaSchema },
});

// Shared loader configuration
function createSource(
  source: ReturnType<typeof docs.toFumadocsSource>,
  baseUrl: string,
) {
  return loader({
    baseUrl,
    source,
    plugins: [lucideIconsPlugin()],
  });
}

// Export sources
export const sources = {
  docs: createSource(docs.toFumadocsSource(), "/docs"),
  "java-learn": createSource(javaLearn.toFumadocsSource(), "/java-learn"),
  "jwt-learn": createSource(jwtLearn.toFumadocsSource(), "/jwt-learn"),
  "90daysofdevops": createSource(
    _90daysofdevops.toFumadocsSource(),
    "/90daysofdevops",
  ),
  "sql-learn": createSource(sqlLearn.toFumadocsSource(), "/sql-learn"),
  "redis-learn": createSource(redisLearn.toFumadocsSource(), "/redis-learn"),
  "interview-question": createSource(
    interviewQues.toFumadocsSource(),
    "/interview-question",
  ),
  "docker-learn": createSource(dockerLearn.toFumadocsSource(), "/docker-learn"),
};

export function getSource(id: string) {
  return (sources as Record<string, (typeof sources)["docs"]>)[id];
}

// Tạm giữ để các file cũ còn import `source` không bị lỗi
export const source = sources.docs;
