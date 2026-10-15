import Image from "next/image";
import Link from "next/link";
import { localizedPath, type Locale } from "@/lib/routes";
import { ThemeToggle } from "./theme-toggle";
import { DownloadButton } from "./download-button";
import { MobileNavigation } from "./mobile-navigation";
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
    },
    {
      href: localizedPath(locale, "digital-scrapbook"),
      text: zh ? "使用场景" : "What you can make",
    },
    { href: localizedPath(locale, "guides"), text: zh ? "教程" : "Guides" },
  ];
  return (
    <header className="site-header">
      <Link
        className="wordmark"
        href={localizedPath(locale)}
        aria-label={zh ? "拼拼笔记首页" : "PinyPiny home"}
      >
        <Image
          src="/assets/pinypiny/app-icon.png"
          alt=""
          width={44}
          height={44}
        />
        <span>PinyPiny</span>
      </Link>
      <nav
        className="desktop-nav"
        aria-label={zh ? "主导航" : "Main navigation"}
      >
        {items.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.text}
          </Link>
        ))}
      </nav>
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
    </header>
  );
}
