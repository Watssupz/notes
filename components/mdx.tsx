import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { D2Diagram } from "@vanhiep99w/docs-kit/components/d2";
import { D2InteractiveDiagram } from "@vanhiep99w/docs-kit/components/d2-interactive";

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    D2Diagram,
    D2InteractiveDiagram,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
