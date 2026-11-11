import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { appName, gitConfig } from "@/lib/shared";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const githubUrl = gitConfig.repo
    ? `https://github.com/${gitConfig.user}/${gitConfig.repo}`
    : `https://github.com/${gitConfig.user}`;

  const links = [
    { label: "Trang chủ", href: "/", external: false },
    { label: "Tài liệu", href: "/docs", external: false },
    { label: "GitHub", href: githubUrl, external: true },
  ];

  return (
    <footer className="relative mt-auto w-full overflow-hidden border-t border-fd-border">
      {/* Nền chấm mờ dần xuống dưới */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-fd-border) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Vệt sáng phía trên */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-32 w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fd-primary/10 blur-3xl"
      />

      <div className="relative mx-auto w-[90%] max-w-[90%] pt-12 md:pt-16">
        {/* Hàng trên */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p className="text-lg font-semibold tracking-tight text-fd-foreground md:text-xl">
              Ghi chú để hiểu sâu,
              <br />
              <span className="text-fd-muted-foreground">
                viết ra để nhớ lâu.
              </span>
            </p>
          </div>

          <nav aria-label="Liên kết footer" className="flex flex-wrap gap-2">
            {links.map((item) => {
              const className =
                "group inline-flex items-center gap-1.5 rounded-full border border-fd-border bg-fd-background/60 px-4 py-1.5 text-sm text-fd-muted-foreground backdrop-blur transition-all duration-200 hover:border-fd-primary/40 hover:text-fd-foreground hover:shadow-sm";

              return item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {item.label}
                  <ArrowUpRight className="h-3 w-3 opacity-50 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </a>
              ) : (
                <Link key={item.label} href={item.href} className={className}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Hàng giữa: copyright */}
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-fd-border/60 pt-5 text-xs text-fd-muted-foreground sm:flex-row">
          <p className="flex items-center gap-1.5">
            <span>© {currentYear} {appName}</span>
            <span className="opacity-50">•</span>
            <span>Tài liệu & Ghi chú kỹ thuật.</span>
          </p>
          <p>
            Xây dựng bằng{" "}
            <a
              href="https://fumadocs.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium transition-colors hover:text-fd-primary"
            >
              Fumadocs
            </a>
          </p>
        </div>

        {/* Wordmark khổng lồ, bị cắt ở đáy */}
        <div
          aria-hidden
          className="pointer-events-none -mb-[0.18em] mt-4 select-none whitespace-nowrap text-center text-[clamp(3.5rem,16vw,13rem)] font-black leading-[0.85] tracking-tighter text-transparent bg-gradient-to-b from-fd-foreground/20 via-fd-foreground/5 to-transparent bg-clip-text"
        >
          {appName}
        </div>
      </div>
    </footer>
  );
}
