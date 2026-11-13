import defaultMdxComponents from "fumadocs-ui/mdx";
import { MermaidDiagram } from "@/components/mermaid";
import type { MDXComponents } from "mdx/types";
import { D2Diagram } from "@vanhiep99w/docs-kit/components/d2";
import { D2InteractiveDiagram } from "@vanhiep99w/docs-kit/components/d2-interactive";
import { CodeDiff } from "@vanhiep99w/docs-kit/components/code-diff";
import { CodeWalkthrough } from "@vanhiep99w/docs-kit/components/code-walkthrough";
import { TerminalSession } from "@vanhiep99w/docs-kit/components/terminal-session";
import { ProtocolExchange } from "@vanhiep99w/docs-kit/components/protocol-exchange";
import { SpanWaterfall } from "@vanhiep99w/docs-kit/components/span-waterfall";
import { SourceRef } from "@vanhiep99w/docs-kit/components/source-explorer";
import { Callout } from "fumadocs-ui/components/callout";
import { Card, Cards } from "fumadocs-ui/components/card";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { TypeTable } from "fumadocs-ui/components/type-table";

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    D2Diagram,
    D2InteractiveDiagram,
    CodeDiff,
    CodeWalkthrough,
    TerminalSession,
    ProtocolExchange,
    SpanWaterfall,
    MermaidDiagram,
    SourceRef,
    Callout,
    Card,
    Cards,
    Step,
    Steps,
    Tab,
    Tabs,
    Accordion,
    Accordions,
    TypeTable,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
