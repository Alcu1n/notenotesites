"use client";
import Link from "next/link";
import type { Locale } from "@/lib/routes";
import { localizedPath } from "@/lib/routes";
import { DownloadButton } from "./download-button";
export function MobileNavigation({
  locale,
  page,
  items,
}: {
  locale: Locale;
  page: string;
  items: { href: string; text: string }[];
}) {
  const zh = locale === "zh";
  return (
    <details
      className="mobile-nav"
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("a"))
          event.currentTarget.open = false;
      }}
    >
      <summary aria-label={zh ? "展开导航" : "Open navigation"}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          <path d="M4 8h16M4 16h16" />
        </svg>
      </summary>
      <nav aria-label={zh ? "移动导航" : "Mobile navigation"}>
        {items.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.text}
          </Link>
        ))}
        <Link href={localizedPath(locale, "support")}>
          {zh ? "帮助与支持" : "Help & support"}
        </Link>
        <DownloadButton locale={locale} page={page} position="menu" />
      </nav>
    </details>
  );
}
