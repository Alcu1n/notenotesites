import Image from "next/image";
import Link from "next/link";
import { localizedPath, type Locale } from "@/lib/routes";
import { ThemeToggle } from "./theme-toggle";
import { DownloadButton } from "./download-button";
import { MobileNavigation } from "./mobile-navigation";
import { DesktopNav } from "./desktop-nav";

export function SiteHeader({
  locale = "en",
  page = "",
}: {
  locale?: Locale;
  page?: string;
}) {
  const zh = locale === "zh";
  const items = [
    {
      href: `${localizedPath(locale)}#inside`,
      text: zh ? "作品" : "Made with PinyPiny",
      active: false,
    },
    {
      href: localizedPath(locale, "digital-scrapbook"),
      text: zh ? "使用场景" : "What you can make",
      active:
        page === "digital-scrapbook" ||
        page === "photo-journal" ||
        page === "travel-journal",
    },
    {
      href: localizedPath(locale, "guides"),
      text: zh ? "教程" : "Guides",
      active: page === "guides" || page.startsWith("guides/"),
    },
    {
      href: localizedPath(locale, "blog"),
      text: zh ? "博客" : "Blog",
      active:
        page === "blog" ||
        page.startsWith("blog/") ||
        page === "vs" ||
        page.startsWith("vs/"),
    },
  ];
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link
          className="wordmark"
          href={localizedPath(locale)}
          aria-label={zh ? "拼拼笔记首页" : "PinyPiny home"}
        >
          <Image
            src="/assets/pinypiny/app-icon.png"
            alt=""
            width={40}
            height={40}
          />
          <span className="wordmark-text">
            <span>PinyPiny</span>
            {zh && <small className="wordmark-sub">拼拼笔记</small>}
          </span>
        </Link>
        <DesktopNav
          label={zh ? "主导航" : "Main navigation"}
          items={items}
        />
        <div className="header-tools">
          <Link
            className="language-switch"
            href={localizedPath(zh ? "en" : "zh", page)}
            lang={zh ? "en" : "zh-CN"}
            hrefLang={zh ? "en" : "zh-CN"}
          >
            {zh ? "English" : "简体中文"}
          </Link>
          <ThemeToggle locale={locale} />
          <DownloadButton
            locale={locale}
            page={page}
            position="header"
            className="header-download"
          />
          <MobileNavigation locale={locale} page={page} items={items} />
        </div>
      </div>
    </header>
  );
}
