"use client";

import DefaultSearchDialog, {
  type DefaultSearchDialogProps,
} from "fumadocs-ui/components/dialog/search-default";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { sections } from "@/lib/section";

const SEARCH_TAGS = sections.map((s) => ({
  name: s.title,
  value: s.id,
}));

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
      tags={SEARCH_TAGS}
      defaultTag={currentSection?.id}
      allowClear
    />
  );
}

