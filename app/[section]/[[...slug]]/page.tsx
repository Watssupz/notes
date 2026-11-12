import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
} from "fumadocs-ui/layouts/docs/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { getSource, sources } from "@/lib/source";
import { getMDXComponents } from "@/components/mdx";

type Props = {
  params: Promise<{ section: string; slug?: string[] }>;
};

export default async function Page({ params }: Props) {
  const { section, slug } = await params;
  const source = getSource(section);
  const page = source?.getPage(slug);
  if (!source || !page) notFound();

  const MDX = page.data.body;
  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.entries(sources).flatMap(([section, s]) =>
    s.getPages().map((page) => ({
      section,
      slug: page.slugs,
    })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section, slug } = await params;
  const page = getSource(section)?.getPage(slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
