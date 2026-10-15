import type { ReactNode } from "react";
import type { Locale } from "@/lib/routes";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { StickyDownload } from "./sticky-download";
export function SiteFrame({
  locale,
  page = "",
  children,
}: {
  locale: Locale;
  page?: string;
  children: ReactNode;
}) {
  return (
    <div className="site-shell">
      <SiteHeader locale={locale} page={page} />
      <main id="main-content">{children}</main>
      <SiteFooter locale={locale} />
      <StickyDownload locale={locale} page={page} />
    </div>
  );
}
