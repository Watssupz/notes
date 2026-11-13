"use client";

import DefaultSearchDialog, {
  type DefaultSearchDialogProps,
} from "fumadocs-ui/components/dialog/search-default";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { sections } from "@/lib/section";

export default function CustomSearchDialog(props: DefaultSearchDialogProps) {
  const pathname = usePathname();

  const currentSection = useMemo(() => {
    return sections.find(
      (s) => pathname === `/${s.id}` || pathname.startsWith(`/${s.id}/`),
    );
  }, [pathname]);

  return (
    <DefaultSearchDialog
      {...props}
      defaultTag={currentSection?.id}
    />
  );
}
