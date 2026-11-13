import type { Metadata } from "next";
import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter } from "next/font/google";
import { appName } from "@/lib/shared";
import CustomSearchDialog from "@/components/search-dialog";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: appName,
    template: `%s | ${appName}`,
  },
  description: "Tài liệu & Ghi chú kỹ thuật",
};
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={inter.className} suppressHydrationWarning>
      {process.env.NODE_ENV === "production" && gtmId && (
        <GoogleTagManager gtmId={gtmId} />
      )}
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            SearchDialog: CustomSearchDialog,
            options: { type: "static" },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
