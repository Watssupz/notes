import {
  BookOpen,
  Coffee,
  InfinityIcon,
  KeyRound,
  type LucideIcon,
} from "lucide-react";

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
    id: "90daysofdevops",
    title: "90 Days of DevOps",
    meta: "90 ngày học DevOps - Michael Cade.",
    group: "infra",
    icon: InfinityIcon,
  },
  {
    id: "java-learn",
    title: "Java",
    meta: "Live • Core",
    group: "backend",
    icon: Coffee,
  },
  {
    id: "jwt-learn",
    title: "JWT & Auth",
    meta: "Live • Core",
    group: "backend",
    icon: KeyRound,
  },
];
