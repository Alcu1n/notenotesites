import type { Metadata } from "next";
import {
  getGuide,
  getScenario,
  scenarioSlugs,
  type ScenarioSlug,
  type GuideSlug,
} from "./editorial-content";
import { getBlogPost, type BlogSlug } from "./blog-content";
import { getComparison, type VsSlug } from "./vs-content";
import { getLegal, type LegalSlug } from "./legal-content";
import { localizedPath, type Locale, type PageSlug } from "./routes";
import { appFacts, pageLastModified, siteConfig } from "./site-config";

const titles = {
  en: {
    "": [
      "Visual Notes & Collage Journal App | PinyPiny",
      "Create visual notes, photo journals and digital scrapbooks with PinyPiny. Freely arrange words, photos and stickers. Free to download for iPhone and iPad.",
    ],
    guides: [
      "Digital Scrapbook & Photo Journal Guides | PinyPiny",
      "Learn to make a digital scrapbook on iPhone, create photo stickers, and keep a travel journal. Real PinyPiny steps, screenshots and ideas for your first page.",
    ],
    blog: [
      "Digital Scrapbooking & Photo Journal Blog | PinyPiny",
      "Practical essays on iPhone digital scrapbook layouts, private offline photo journaling, daily writing prompts, and choosing the right memory app.",
    ],
    vs: [
      "Compare iPhone Journal & Scrapbook Apps | PinyPiny",
      "Honest, fact-checked comparisons of PinyPiny against Apple Journal, Day One, and Zinnia covering layouts, photo stickers, privacy, and pricing.",
    ],
    about: [
      "About PinyPiny: Visual Notebook & Collage Journal",
      "Meet PinyPiny, the visual notebook and collage journal from LRAI STUDIO. Learn how paper, photos and a card stack shape the app.",
    ],
    support: [
      "PinyPiny Help: Export, Pro & iCloud Sync",
      "Help with PinyPiny on iPhone and iPad: getting started, image export, Pro purchases, restoring access, offline notes and iCloud sync.",
    ],
  },
  zh: {
    "": [
      "拼拼笔记 PinyPiny: iPhone 电子手帐与照片拼贴笔记",
      "用拼拼笔记 PinyPiny 自由组合文字、照片和贴纸，制作照片日记、电子手帐与旅行拼贴。支持 iPhone 和 iPad，免费下载，可选 Pro 高级功能。",
    ],
    guides: [
      "电子手帐教程与照片日记排版指南｜拼拼笔记",
      "从第一张纸开始：学习用 iPhone 制作电子手帐、从照片中制作贴纸，并用照片、文字和排版记录旅行。包含拼拼笔记真实操作与作品示例。",
    ],
    blog: [
      "电子手帐排版与照片日记博客｜拼拼笔记",
      "分享实用的 iPhone 电子手帐排版技巧、离线私密照片日记方案、25 个日常记录灵感，以及手帐与笔记工具的客观选择指南。",
    ],
    vs: [
      "iPhone 手帐与照片日记 App 对比｜拼拼笔记",
      "基于公开信息核对的客观产品对比：看看拼拼笔记与苹果手记、Day One 和 Zinnia 在排版自由度、贴纸、隐私和付费模式上的差异。",
    ],
    about: [
      "关于拼拼笔记 PinyPiny: 留住生活碎片",
      "认识 LRAI STUDIO 的拼拼笔记：用文字、照片、贴纸和纸张自由表达，再通过卡片翻阅自己的生活。",
    ],
    support: [
      "拼拼笔记帮助: 导出图片、Pro 与 iCloud 同步",
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
  if (page.startsWith("blog/"))
    return getBlogPost(locale, page.slice(5) as BlogSlug);
  if (page.startsWith("vs/"))
    return getComparison(locale, page.slice(3) as VsSlug);
  if (scenarioSlugs.some((slug) => slug === page))
    return getScenario(locale, page as ScenarioSlug);
  const [title, description] = titles[locale][page as keyof typeof titles.en];
  return { title, description };
}

export function cleanPageTitle(title: string): string {
  return title
    .replace(/\s*[|｜]\s*(?:拼拼笔记\s*PinyPiny|PinyPiny|拼拼笔记)\s*$/i, "")
    .trim();
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

  const isArticle =
    page.startsWith("guides/") ||
    page.startsWith("blog/") ||
    page.startsWith("vs/");
  const modified = pageLastModified(page);
  const published = page.startsWith("guides/")
    ? appFacts.contentUpdated
    : modified;

  const openGraph: Metadata["openGraph"] = isArticle
    ? {
        type: "article",
        title,
        description: content.description,
        url: absolute(locale),
        siteName: locale === "zh" ? "拼拼笔记 PinyPiny" : "PinyPiny",
        locale: locale === "zh" ? "zh_CN" : "en_US",
        alternateLocale: locale === "zh" ? ["en_US"] : ["zh_CN"],
        publishedTime: published,
        modifiedTime: modified,
        authors: [siteConfig.developer],
        images,
      }
    : {
        type: "website",
        title,
        description: content.description,
        url: absolute(locale),
        siteName: locale === "zh" ? "拼拼笔记 PinyPiny" : "PinyPiny",
        locale: locale === "zh" ? "zh_CN" : "en_US",
        alternateLocale: locale === "zh" ? ["en_US"] : ["zh_CN"],
        images,
      };

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: { absolute: title },
    description: content.description,
    applicationName: "PinyPiny",
    authors: [
      {
        name: "@lemon",
        url: `${siteConfig.siteUrl}${localizedPath(locale, "about")}`,
      },
    ],
    creator: "LRAI STUDIO",
    alternates: {
      canonical: absolute(locale),
      languages: {
        en: absolute("en"),
        "zh-CN": absolute("zh"),
        "x-default": absolute("en"),
      },
    },
    openGraph,
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
