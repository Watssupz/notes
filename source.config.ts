import { defineDocs, defineConfig } from "fumadocs-mdx/config";
import type { Root } from "mdast";
import { visit } from "unist-util-visit";

// ============================================================================
// CÁC PLUGIN TỪ @vanhiep99w/docs-kit
// -> Sử dụng chủ yếu cho: `content/java-learn`
// ============================================================================

// 1. remarkD2:
//    - Dùng cho: `content/java-learn`
//    - Tác dụng: Biên dịch hơn 500 biểu đồ kiến trúc D2 (` ```d2 `) sang SVG
//      (kiến trúc JVM, Collections, Concurrency, Spring internals...).
import { remarkD2 } from "@vanhiep99w/docs-kit/d2";

// 2. remarkCodeWalkthrough:
//    - Dùng cho: `content/java-learn`
//    - Tác dụng: Hiển thị khối giải thích mã nguồn từng bước (Code Walkthrough).
import { remarkCodeWalkthrough } from "@vanhiep99w/docs-kit/code-walkthrough";

// 3. remarkTerminalSession:
//    - Dùng cho: `content/java-learn`
//    - Tác dụng: Mô phỏng giao diện Terminal dòng lệnh (chạy javap, maven, gradle...).
import { remarkTerminalSession } from "@vanhiep99w/docs-kit/terminal-session";

// 4. remarkCodeDiff:
//    - Dùng cho: `content/java-learn` (ví dụ: optional.md, records-sealed.md)
//    - Tác dụng: Hiển thị khối so sánh khác biệt mã nguồn (Code Diff trước/sau).
import { remarkCodeDiff } from "@vanhiep99w/docs-kit/code-diff";

// 5. remarkProtocolExchange:
//    - Dùng cho: `content/java-learn`
//    - Tác dụng: Mô phỏng chuỗi tương tác trao đổi giao thức request/response giữa Client - Server.
import { remarkProtocolExchange } from "@vanhiep99w/docs-kit/protocol-exchange";

// 6. remarkSpanWaterfall:
//    - Dùng cho: `content/java-learn` (ví dụ: completablefuture.md)
//    - Tác dụng: Hiển thị biểu đồ thác thời gian (Span Waterfall) đo luồng xử lý bất đồng bộ.
import { remarkSpanWaterfall } from "@vanhiep99w/docs-kit/span-waterfall";

// ============================================================================
// CÁC HÀM XỬ LÝ CALLOUT / ADMONITION (GitHub Syntax)
// -> Sử dụng chung cho: `content/docs`, `content/java-learn`, `content/jwt-learn`
// ============================================================================

const admonitionTypeMap: Record<string, string> = {
  note: "info",
  tip: "info",
  important: "warn",
  warning: "warn",
  caution: "error",
};

/**
 * remarkGithubCallouts
 * - Dùng cho: TẤT CẢ folder (`content/docs`, `content/java-learn`, `content/jwt-learn`)
 * - Tác dụng: Tự động chuyển đổi cú pháp blockquote của GitHub:
 *     > [!NOTE] hoặc > [!TIP] / > [!WARNING] / > [!IMPORTANT] / > [!CAUTION]
 *   thành component `<Callout type="..." />` của Fumadocs để hiển thị hộp thông báo đẹp mắt.
 */
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

// ============================================================================
// HÀM XỬ LÝ MERMAID DIAGRAM
// -> Sử dụng cho: `content/jwt-learn`
// ============================================================================

/**
 * remarkMermaid
 * - Dùng cho: `content/jwt-learn`
 * - Tác dụng: Quét các khối mã Mermaid (` ```mermaid `) trong hơn 40 bài viết về JWT
 *   (sơ đồ flow đăng nhập, bắt tay OAuth2/OIDC, luồng xác thực token, chu kỳ refresh token...)
 *   và chuyển đổi thành component `<MermaidDiagram chart="..." />` để render tương tác trên web.
 */
function remarkMermaid() {
  return (tree: import("mdast").Root) => {
    visit(tree, "code", (node, index, parent) => {
      if (node.lang !== "mermaid" || index === undefined || !parent) return;
      (parent.children as unknown[])[index] = {
        type: "mdxJsxFlowElement",
        name: "MermaidDiagram",
        attributes: [
          { type: "mdxJsxAttribute", name: "chart", value: node.value },
        ],
        children: [],
      };
    });
  };
}

const alertConfig: Record<
  string,
  { title: string; type: "info" | "warn" | "error" }
> = {
  NOTE: { title: "NOTE", type: "info" },
  TIP: { title: "TIP", type: "info" },
  IMPORTANT: { title: "IMPORTANT", type: "warn" },
  WARNING: { title: "WARNING", type: "warn" },
  CAUTION: { title: "CAUTION", type: "error" },
};

/**
 * remarkCallouts (biến thể có kèm title)
 * - Dùng cho: Dự phòng bổ trợ cho các bài viết có Callout kèm tiêu đề.
 */
function remarkCallouts() {
  return (tree: import("mdast").Root) => {
    visit(tree, "blockquote", (blockquote, index, parent) => {
      if (index === undefined || !parent) return;
      const firstChild = (blockquote as any).children?.[0];
      const match = firstChild?.children?.[0]?.value?.match(
        /^\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]/,
      );
      if (!match) return;
      const config = alertConfig[match[1]];
      firstChild.children[0].value = firstChild.children[0].value
        .slice(match[0].length)
        .trim();
      (parent.children as any[])[index] = {
        type: "mdxJsxFlowElement",
        name: "Callout",
        attributes: [
          { type: "mdxJsxAttribute", name: "title", value: config.title },
          { type: "mdxJsxAttribute", name: "type", value: config.type },
        ],
        children: (blockquote as any).children,
      };
    });
  };
}

// ============================================================================
// CẤU HÌNH FUMADOCS MDX CHUNG
// ============================================================================

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [
      // Callouts kiểu GitHub (> [!NOTE]) -> Dùng chung cho cả 3 thư mục docs, java-learn, jwt-learn
      remarkGithubCallouts,

      // Bộ công cụ docs-kit -> Phục vụ cho `content/java-learn`
      [remarkD2, { concurrency: 4 }], // Sơ đồ kiến trúc D2 (chạy song song 4 worker)
      remarkCodeWalkthrough,          // Giải thích code từng bước
      remarkTerminalSession,          // Giả lập terminal console
      remarkCodeDiff,                 // So sánh code diff
      remarkProtocolExchange,         // Minh họa giao thức HTTP/TCP
      remarkSpanWaterfall,            // Thác đo độ trễ luồng concurrency

      // Callout dự phòng
      remarkCallouts,

      // Sơ đồ Mermaid -> Phục vụ cho `content/jwt-learn`
      remarkMermaid,
    ],
    rehypeCodeOptions: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      fallbackLanguage: "text",
    },
  },
});
