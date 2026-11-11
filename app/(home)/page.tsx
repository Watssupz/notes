"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  BookOpen,
  Search,
  ArrowUpRight,
  X,
  Filter,
  ScanFace,
} from "lucide-react";

interface GroupItem {
  title: string;
  meta: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ColumnGroup {
  id: string;
  tabKey: string;
  tabLabel: string;
  title: string;
  items: GroupItem[];
}

/**
 * Lộ trình kỹ thuật được phân nhóm theo 3 cột chuẩn như giao diện mẫu:
 * 01 / INFRASTRUCTURE
 * 02 / BACKEND SYSTEMS
 * 03 / WEB & PRACTICE
 */
const GROUPS: ColumnGroup[] = [
  {
    id: "01",
    tabKey: "infra",
    tabLabel: "Hạ tầng",
    title: "INFRASTRUCTURE",
    items: [
      {
        title: "Tài Liệu Chung",
        meta: "Setup • Hướng dẫn cơ bản",
        href: "/docs",
        icon: BookOpen,
      },
    ],
  },
  {
    id: "02",
    tabKey: "backend",
    tabLabel: "Backend",
    title: "BACKEND SYSTEMS",
    items: [
      {
        title: "",
        meta: "",
        href: "",
        icon: ScanFace,
      },
    ],
  },
  {
    id: "03",
    tabKey: "web",
    tabLabel: "Web",
    title: "WEB & PRACTICE",
    items: [
      {
        title: "",
        meta: "",
        href: "",
        icon: ScanFace,
      },
    ],
  },
];

const FILTER_TABS = [
  { key: "all", label: "Tất cả" },
  { key: "infra", label: "Hạ tầng" },
  { key: "backend", label: "Backend" },
  { key: "web", label: "Web" },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Lọc dữ liệu theo tab và từ khóa tìm kiếm
  const filteredGroups = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return GROUPS.map((group) => {
      // Nếu chọn tab khác 'all' và nhóm không khớp với tab
      if (activeTab !== "all" && group.tabKey !== activeTab) {
        return { ...group, items: [] };
      }

      // Lọc các item theo query
      const matchingItems = group.items.filter((item) => {
        if (!query) return true;
        return (
          item.title.toLowerCase().includes(query) ||
          item.meta.toLowerCase().includes(query) ||
          item.href.toLowerCase().includes(query)
        );
      });

      return {
        ...group,
        items: matchingItems,
      };
    }).filter((group) => group.items.length > 0);
  }, [activeTab, searchQuery]);

  const totalMatches = useMemo(() => {
    return filteredGroups.reduce((acc, g) => acc + g.items.length, 0);
  }, [filteredGroups]);

  // Tự động đếm tổng số lượng lộ trình từ tất cả các groups
  const totalRoutes = useMemo(() => {
    return GROUPS.reduce((acc, g) => acc + g.items.length, 0);
  }, []);

  const handleResetFilters = () => {
    setActiveTab("all");
    setSearchQuery("");
  };

  return (
    <div className="flex flex-col flex-1 w-[90%] max-w-[90%] py-8 md:py-12 mx-auto">
      {/* Header Section: Tiêu đề bên trái, Bộ lọc nút bấm bên phải */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 w-full">
        {/* Left Side: Tiêu đề & Giới thiệu */}
        <div className="flex flex-col">
          <span className="text-xs font-semibold tracking-wider text-blue-500 uppercase mb-2">
            THƯ VIỆN HỌC TẬP
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-fd-foreground mb-2">
            {totalRoutes} lộ trình. Một hệ thống.
          </h1>
          <p className="text-sm sm:text-base text-fd-muted-foreground">
            Chọn một chủ đề để bắt đầu hoặc tiếp tục nơi bạn đã dừng lại.
          </p>
        </div>

        {/* Right Side: Tìm kiếm nhanh & Nhóm nút Filter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
          {/* Ô tìm kiếm nhanh */}
          <div className="relative flex items-center">
            <Search className="absolute left-3 w-4 h-4 text-fd-muted-foreground pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm nhanh..."
              className="pl-9 pr-8 py-1.5 text-xs rounded-lg border border-fd-border bg-fd-card text-fd-foreground placeholder:text-fd-muted-foreground focus:outline-none focus:ring-1 focus:ring-fd-primary transition-all w-full sm:w-48 shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2 p-0.5 rounded text-fd-muted-foreground hover:text-fd-foreground"
                title="Xóa tìm kiếm"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Các nút Tab Bộ Lọc chuẩn theo giao diện mẫu */}
          <div className="flex items-center gap-1.5">
            {FILTER_TABS.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                    isActive
                      ? "bg-fd-foreground text-fd-background border-fd-foreground font-semibold shadow-xs"
                      : "bg-fd-card text-fd-muted-foreground border-fd-border hover:text-fd-foreground hover:bg-fd-muted/60"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Thông báo kết quả tìm kiếm nếu đang gõ query */}
      {searchQuery && (
        <div className="flex items-center justify-between text-xs text-fd-muted-foreground mb-4 px-1">
          <span>
            Tìm thấy{" "}
            <strong className="text-fd-foreground font-semibold">
              {totalMatches}
            </strong>{" "}
            mục phù hợp
          </span>
          <button
            onClick={handleResetFilters}
            className="underline hover:text-fd-foreground transition-colors"
          >
            Đặt lại bộ lọc
          </button>
        </div>
      )}

      {/* Grouped Table Grid (Khối Gom Nhóm Theo Cột) */}
      {filteredGroups.length > 0 ? (
        <div className="w-full border border-fd-border rounded-xl bg-fd-card overflow-hidden shadow-xs">
          <div
            className={`grid divide-y lg:divide-y-0 lg:divide-x divide-fd-border ${
              filteredGroups.length === 1
                ? "grid-cols-1"
                : filteredGroups.length === 2
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 lg:grid-cols-3"
            }`}
          >
            {filteredGroups.map((group) => (
              <div key={group.id} className="flex flex-col">
                {/* Header Cột: Số thứ tự + Tên nhóm */}
                <div className="flex items-center justify-between px-6 py-3.5 border-b border-fd-border bg-fd-muted/30">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-fd-foreground">
                      {group.id}
                    </span>
                    <span className="text-xs text-fd-muted-foreground/60 font-mono">
                      /
                    </span>
                    <span className="font-mono text-xs font-semibold tracking-wider text-fd-muted-foreground uppercase">
                      {group.title}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-fd-muted-foreground">
                    {group.items.length} mục
                  </span>
                </div>

                {/* Danh sách các mục trong nhóm */}
                <div className="divide-y divide-fd-border flex-1">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group flex items-center justify-between px-6 py-4 transition-colors hover:bg-fd-muted/50"
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          {/* Icon */}
                          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-fd-secondary/80 border border-fd-border/70 text-fd-muted-foreground group-hover:text-fd-primary group-hover:border-fd-primary/30 group-hover:bg-fd-primary/10 transition-colors shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>

                          {/* Title & Meta Info */}
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-fd-foreground group-hover:text-fd-primary transition-colors truncate">
                              {item.title}
                            </div>
                            <div className="text-xs font-mono text-fd-muted-foreground truncate mt-0.5">
                              {item.meta}
                            </div>
                          </div>
                        </div>

                        {/* Mũi tên điều hướng */}
                        <ArrowUpRight className="w-4 h-4 text-fd-muted-foreground/40 group-hover:text-fd-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center p-12 text-center border border-dashed border-fd-border rounded-xl bg-fd-card/50 w-full">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-fd-muted text-fd-muted-foreground mb-4">
            <Filter className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-fd-foreground mb-1">
            Không tìm thấy chủ đề nào
          </h3>
          <p className="text-xs text-fd-muted-foreground mb-4">
            Không có kết quả nào phù hợp với bộ lọc hiện tại.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 text-xs font-medium rounded-lg bg-fd-foreground text-fd-background hover:opacity-90 transition-opacity"
          >
            Xóa bộ lọc
          </button>
        </div>
      )}
    </div>
  );
}
