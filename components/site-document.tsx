import type { ReactNode } from "react";
import type { Locale } from "@/lib/routes";
import { AnalyticsProvider } from "./analytics-provider";
import "@/app/globals.css";

const themeScript = `try{var t=localStorage.getItem('pinypiny-theme')||localStorage.getItem('pinnia-theme')||localStorage.getItem('driftleaf-theme');document.documentElement.dataset.theme=t==='light'||t==='dark'?t:matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'}catch{}`;

export function SiteDocument({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <html lang={locale === "zh" ? "zh-CN" : "en"} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <a className="skip-link" href="#main-content">
          {locale === "zh" ? "跳至正文" : "Skip to content"}
        </a>
        {children}
        <AnalyticsProvider />
      </body>
    </html>
  );
}
