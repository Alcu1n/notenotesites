import type { Metadata } from "next";
import {
  getGuide,
  getScenario,
  scenarioSlugs,
  type ScenarioSlug,
  type GuideSlug,
} from "./editorial-content";
import { getLegal, type LegalSlug } from "./legal-content";
import { localizedPath, type Locale, type PageSlug } from "./routes";
import { siteConfig } from "./site-config";
const titles = {
  en: {
    "": [
      "Visual Notes & Collage Journal for iPhone & iPad",
      "Create visual notes, photo journals and digital scrapbooks with PinyPiny. Freely arrange words, photos and stickers. Free to download for iPhone and iPad.",
    ],
    guides: [
      "Digital Scrapbooking Guides & Photo Journal Ideas",
      "Learn to make a digital scrapbook on iPhone, create photo stickers, and keep a travel journal. Real PinyPiny steps, screenshots and ideas for your first page.",
    ],
    about: [
      "About PinyPiny — A Personal Visual Notebook",
      "Meet PinyPiny, the visual notebook and collage journal from LRAI STUDIO. Learn how paper, photos and a card stack shape the app.",
    ],
    support: [
      "PinyPiny Help — Export, Pro & iCloud Sync",
      "Help with PinyPiny on iPhone and iPad: getting started, image export, Pro purchases, restoring access, offline notes and iCloud sync.",
    ],
  },
  zh: {
    "": [
      "拼拼笔记 — 自由排版的照片手帐与卡片笔记",
      "用拼拼笔记 PinyPiny 自由组合文字、照片和贴纸，制作照片日记、电子手帐与旅行拼贴。支持 iPhone 和 iPad，免费下载，可选 Pro 高级功能。",
    ],
    guides: [
      "拼贴手帐教程与照片日记灵感",
      "从第一张纸开始：学习用 iPhone 制作电子手帐、从照片中制作贴纸，并用照片、文字和排版记录旅行。包含拼拼笔记真实操作与作品示例。",
    ],
    about: [
      "关于拼拼笔记 PinyPiny — 留住生活碎片",
      "认识 LRAI STUDIO 的拼拼笔记：用文字、照片、贴纸和纸张自由表达，再通过卡片翻阅自己的生活。",
    ],
    support: [
      "拼拼笔记帮助 — 导出图片、Pro 与 iCloud 同步",
      "查看拼拼笔记 iPhone 与 iPad 使用帮助：第一篇笔记、导出图片、Pro 功能、恢复购买、离线保存和 iCloud 同步。",
    ],
  },
} as const;
export function pageDescription(
  locale: Locale,
  page: PageSlug,
): { title: string; description: string } {
  if (page === "privacy" || page === "terms")
    return getLegal(locale, page as LegalSlug);
  if (page.startsWith("guides/"))
    return getGuide(locale, page.slice(7) as GuideSlug);
  if (scenarioSlugs.some((slug) => slug === page))
    return getScenario(locale, page as ScenarioSlug);
  const [title, description] = titles[locale][page as keyof typeof titles.en];
  return { title, description };
}
export function pageMetadata(locale: Locale, page: PageSlug): Metadata {
  const content = pageDescription(locale, page);
  const title =
    content.title.includes("PinyPiny") || content.title.includes("拼拼笔记")
      ? content.title
      : `${content.title} | ${locale === "zh" ? "拼拼笔记 PinyPiny" : "PinyPiny"}`;
  const absolute = (lang: Locale) =>
    `${siteConfig.siteUrl}${localizedPath(lang, page) === "/" ? "" : localizedPath(lang, page)}`;
  const images = [
    {
      url: `${siteConfig.siteUrl}/assets/pinypiny/og-${locale}.jpg`,
      width: 1200,
      height: 630,
      alt:
        locale === "zh"
          ? "拼拼笔记真实照片手帐与卡片堆"
          : "A real PinyPiny photo journal and paper card stack",
    },
  ];
  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: { absolute: title },
    description: content.description,
    applicationName: "PinyPiny",
    authors: [{ name: "@lemon", url: `${siteConfig.siteUrl}/about` }],
    creator: "LRAI STUDIO",
    alternates: {
      canonical: absolute(locale),
      languages: {
        en: absolute("en"),
        "zh-CN": absolute("zh"),
        "x-default": absolute("en"),
      },
    },
    openGraph: {
      type: page.startsWith("guides/") ? "article" : "website",
      title,
      description: content.description,
      url: absolute(locale),
      siteName: "PinyPiny",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      alternateLocale: locale === "zh" ? ["en_US"] : ["zh_CN"],
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: content.description,
      images,
    },
    appleWebApp: { title: "PinyPiny" },
    other: { "apple-itunes-app": "app-id=6804919805" },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
      other: process.env.BING_SITE_VERIFICATION
        ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
        : undefined,
    },
  };
}
