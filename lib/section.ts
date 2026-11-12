import { BookOpen, Coffee, type LucideIcon } from "lucide-react";

// 3 cột + tab lọc của trang chủ
export const groups = [
  { id: "01", key: "infra", label: "Hạ tầng", title: "INFRASTRUCTURE" },
  { id: "02", key: "backend", label: "Backend", title: "BACKEND SYSTEMS" },
  { id: "03", key: "web", label: "Web", title: "WEB & PRACTICE" },
] as const;

export type GroupKey = (typeof groups)[number]["key"];

export type Section = {
  id: string; // trùng key trong `sources` (lib/source.ts), cũng là URL: /${id}
  title: string;
  meta: string;
  group: GroupKey;
  icon: LucideIcon;
};

export const sections: Section[] = [
  {
    id: "docs",
    title: "Tài Liệu Chung",
    meta: "Setup • Hướng dẫn cơ bản",
    group: "infra",
    icon: BookOpen,
  },
  {
    id: "java-learn",
    title: "Java",
    meta: "Live • Core",
    group: "backend",
    icon: Coffee,
  },
];
