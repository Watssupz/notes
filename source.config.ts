import { defineConfig } from "fumadocs-mdx/config";
import type { Root } from "mdast";
import { visit } from "unist-util-visit";
import { remarkD2 } from "@vanhiep99w/docs-kit/d2";
import { remarkCodeWalkthrough } from "@vanhiep99w/docs-kit/code-walkthrough";
import { remarkTerminalSession } from "@vanhiep99w/docs-kit/terminal-session";
import { remarkCodeDiff } from "@vanhiep99w/docs-kit/code-diff";
import { remarkProtocolExchange } from "@vanhiep99w/docs-kit/protocol-exchange";
import { remarkSpanWaterfall } from "@vanhiep99w/docs-kit/span-waterfall";

const admonitionTypeMap: Record<string, string> = {
  note: "info",
  tip: "info",
  important: "warn",
  warning: "warn",
  caution: "error",
};

function remarkGithubCallouts() {
  return (tree: Root) => {
    visit(tree, "blockquote", (node, index, parent) => {
      if (!parent || index === undefined) return;
      const firstChild = node.children[0];
      if (firstChild?.type !== "paragraph") return;
      const firstTextNode = firstChild.children[0];
      if (firstTextNode?.type !== "text") return;

      const match = firstTextNode.value.match(
        /^\[!(NOTE|TIP|WARNING|IMPORTANT|CAUTION)\]\n?/i,
      );
      if (!match) return;

      const type = match[1].toLowerCase();
      firstTextNode.value = firstTextNode.value.slice(match[0].length);

      let children = node.children;
      if (firstChild.children.length === 1 && firstTextNode.value === "") {
        children = node.children.slice(1);
      }

      (parent.children as unknown[])[index] = {
        type: "mdxJsxFlowElement",
        name: "Callout",
        attributes: [
          {
            type: "mdxJsxAttribute",
            name: "type",
            value: admonitionTypeMap[type] ?? "info",
          },
        ],
        children,
      };
    });
  };
}

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [
      remarkGithubCallouts,
      remarkD2,
      remarkCodeWalkthrough,
      remarkTerminalSession,
      remarkCodeDiff,
      remarkProtocolExchange,
      remarkSpanWaterfall,
    ],
  },
});
