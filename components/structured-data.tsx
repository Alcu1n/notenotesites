import { appFacts, pageLastModified, siteConfig } from "@/lib/site-config";
import { localizedPath, type Locale, type PageSlug } from "@/lib/routes";
import { cleanPageTitle, pageDescription } from "@/lib/metadata";
import { copyFor } from "@/lib/ui-copy";
import {
  getGuide,
  guideSlugs,
  type GuideSlug,
} from "@/lib/editorial-content";
import { blogSlugs, getBlogPost, type BlogSlug } from "@/lib/blog-content";
import { getComparison, vsSlugs, type VsSlug } from "@/lib/vs-content";
import { media } from "@/lib/media";

function stripMarkdownLinks(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

function estimateWordCount(chunks: string[], zh: boolean): number {
  const joined = stripMarkdownLinks(chunks.join(" "));
  if (zh) {
    return joined.replace(/\s+/g, "").length;
  }
  return joined.trim().split(/\s+/).filter(Boolean).length;
}

export function StructuredData({
  locale,
  page,
}: {
  locale: Locale;
  page: PageSlug;
}) {
  const zh = locale === "zh";
  const homeUrl = `${siteConfig.siteUrl}${zh ? "/zh" : ""}`;
  const url = `${siteConfig.siteUrl}${localizedPath(locale, page) === "/" ? "" : localizedPath(locale, page)}`;
  const content = pageDescription(locale, page);
  const cleanTitle = cleanPageTitle(content.title);
  const modified = pageLastModified(page);

  const organization = {
    "@type": "Organization",
    "@id": `${siteConfig.siteUrl}/#studio`,
    name: siteConfig.studio,
    url: `${siteConfig.siteUrl}${localizedPath(locale, "about")}`,
    email: siteConfig.supportEmail,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.siteUrl}/assets/pinypiny/app-icon.png`,
      width: 1024,
      height: 1024,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.supportEmail,
      url: `${siteConfig.siteUrl}${localizedPath(locale, "support")}`,
      availableLanguage: ["English", "Chinese"],
    },
    sameAs: [siteConfig.appStoreUrl],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}/#website`,
    name: zh ? `${siteConfig.chineseName} ${siteConfig.name}` : siteConfig.name,
    alternateName: zh ? siteConfig.name : siteConfig.chineseName,
    url: homeUrl,
    inLanguage: zh ? "zh-CN" : "en",
    publisher: { "@id": organization["@id"] },
  };

  const app = {
    "@type": "SoftwareApplication",
    "@id": `${siteConfig.siteUrl}/#app`,
    name: siteConfig.name,
    alternateName: siteConfig.chineseName,
    applicationCategory: appFacts.category,
    operatingSystem: appFacts.operatingSystem,
    softwareVersion: appFacts.verifiedStoreVersion,
    inLanguage: [...appFacts.supportedLanguages],
    url: homeUrl,
    downloadUrl: siteConfig.appStoreUrl,
    installUrl: siteConfig.appStoreUrl,
    sameAs: [siteConfig.appStoreUrl],
    image: `${siteConfig.siteUrl}/assets/pinypiny/app-icon.png`,
    screenshot: [
      `${siteConfig.siteUrl}${media.hero.src}`,
      `${siteConfig.siteUrl}${media.daily.src}`,
      `${siteConfig.siteUrl}${media.travel.src}`,
      `${siteConfig.siteUrl}${media.inspiration.src}`,
    ],
    featureList: zh
      ? [
          "自由排版文字、照片与贴纸",
          "设备端照片主体抠图贴纸工作室",
          "纸张卡片堆浏览与搜索",
          "本地优先保存，基础编辑支持离线",
          "导出页面为图片到系统相册",
          "可选 Pro：高级纸张与字体、正文内嵌照片、特殊照片边框、动画与私人 iCloud 同步",
        ]
      : [
          "Freeform canvas for words, photos, and stickers",
          "On-device Sticker Studio photo subject cutouts",
          "Paper card-stack browsing and search",
          "Local-first storage with offline core editing",
          "Image export to Photos",
          "Optional Pro: additional papers and fonts, inline photos, special photo frames, animation, and private Apple iCloud sync",
        ],
    description: pageDescription(locale, "").description,
    publisher: { "@id": organization["@id"] },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: zh ? "CNY" : "USD",
      availability: "https://schema.org/InStock",
      url: siteConfig.appStoreUrl,
      description: zh
        ? "免费下载并使用基础功能，提供可选 Pro App 内购买（支持订阅或一次性终身买断选项）。"
        : "Free to download with core editing, with optional Pro in-app purchases (subscription or one-time Lifetime option).",
    },
  };

  const homeCopy = copyFor(locale);
  const video =
    page === ""
      ? {
          "@type": "VideoObject",
          name: zh
            ? "拼拼笔记 PinyPiny 真实 App 操作演示"
            : "PinyPiny Visual Notes & Collage Journal App Demo",
          description: homeCopy.demoText,
          thumbnailUrl: `${siteConfig.siteUrl}/assets/pinypiny/showcase/demo-poster.webp`,
          contentUrl: `${siteConfig.siteUrl}/assets/pinypiny/showcase/demo.mp4`,
          uploadDate: appFacts.contentUpdated,
          duration: "PT21S",
          inLanguage: zh ? "zh-CN" : "en",
          publisher: { "@id": organization["@id"] },
          hasPart: [
            {
              "@type": "Clip",
              name: homeCopy.demoSteps[0],
              startOffset: 0,
              endOffset: 7,
              url: `${homeUrl}#demo`,
            },
            {
              "@type": "Clip",
              name: homeCopy.demoSteps[1],
              startOffset: 7,
              endOffset: 14,
              url: `${homeUrl}#demo`,
            },
            {
              "@type": "Clip",
              name: homeCopy.demoSteps[2],
              startOffset: 14,
              endOffset: 21,
              url: `${homeUrl}#demo`,
            },
          ],
        }
      : null;

  const isGuide = page.startsWith("guides/");
  const isBlog = page.startsWith("blog/");
  const isVs = page.startsWith("vs/");

  const parentCrumb = isGuide
    ? {
        name: zh ? "教程" : "Guides",
        item: `${siteConfig.siteUrl}${localizedPath(locale, "guides")}`,
      }
    : isBlog
      ? {
          name: zh ? "博客" : "Blog",
          item: `${siteConfig.siteUrl}${localizedPath(locale, "blog")}`,
        }
      : isVs
        ? {
            name: zh ? "产品对比" : "Compare",
            item: `${siteConfig.siteUrl}${localizedPath(locale, "vs")}`,
          }
        : null;

  const breadcrumbs = page
    ? {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: zh ? "首页" : "Home",
            item: homeUrl,
          },
          ...(parentCrumb
            ? [
                {
                  "@type": "ListItem",
                  position: 2,
                  name: parentCrumb.name,
                  item: parentCrumb.item,
                },
              ]
            : []),
          {
            "@type": "ListItem",
            position: parentCrumb ? 3 : 2,
            name: cleanTitle,
            item: url,
          },
        ],
      }
    : null;

  const guide = isGuide ? getGuide(locale, page.slice(7) as GuideSlug) : null;
  const blogPost = isBlog
    ? getBlogPost(locale, page.slice(5) as BlogSlug)
    : null;
  const comparison = isVs ? getComparison(locale, page.slice(3) as VsSlug) : null;

  const author = {
    "@type": "Person",
    name: siteConfig.developer,
    url: `${siteConfig.siteUrl}${localizedPath(locale, "about")}`,
  };

  const article = guide
    ? {
        "@type": "Article",
        headline: cleanTitle,
        description: content.description,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        inLanguage: zh ? "zh-CN" : "en",
        datePublished: appFacts.contentUpdated,
        dateModified: modified,
        wordCount: estimateWordCount(
          [
            guide.intro,
            ...guide.sections.flatMap((s) => [
              s.title,
              ...s.paragraphs,
              ...(s.steps ?? []),
            ]),
          ],
          zh,
        ),
        image: `${siteConfig.siteUrl}/assets/pinypiny/og-${locale}.jpg`,
        author,
        publisher: { "@id": organization["@id"] },
      }
    : blogPost
      ? {
          "@type": "BlogPosting",
          headline: cleanTitle,
          description: content.description,
          articleSection: blogPost.category,
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          inLanguage: zh ? "zh-CN" : "en",
          datePublished: blogPost.publishedAt,
          dateModified: blogPost.updatedAt,
          wordCount: estimateWordCount(
            [
              blogPost.intro,
              ...blogPost.sections.flatMap((s) => [
                s.title,
                ...s.paragraphs,
                ...(s.bullets ?? []),
                ...(s.steps ?? []),
              ]),
            ],
            zh,
          ),
          image: `${siteConfig.siteUrl}${media[blogPost.coverImage].src}`,
          author,
          publisher: { "@id": organization["@id"] },
        }
      : comparison
        ? {
            "@type": "Article",
            headline: cleanTitle,
            description: content.description,
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            inLanguage: zh ? "zh-CN" : "en",
            datePublished: comparison.checkedDate,
            dateModified: comparison.updatedAt,
            wordCount: estimateWordCount(
              [
                comparison.verdict,
                ...comparison.pricingParagraphs,
                ...comparison.competitorWins,
                ...comparison.pinypinyWins,
                ...comparison.migrationSteps,
              ],
              zh,
            ),
            image: `${siteConfig.siteUrl}/assets/pinypiny/og-${locale}.jpg`,
            author,
            publisher: { "@id": organization["@id"] },
          }
        : null;

  const collectionHub =
    page === "blog" || page === "guides" || page === "vs"
      ? {
          "@type": "CollectionPage",
          "@id": url,
          url,
          name: cleanTitle,
          description: content.description,
          inLanguage: zh ? "zh-CN" : "en",
          isPartOf: { "@id": website["@id"] },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: (page === "blog"
              ? blogSlugs.map((slug) => ({
                  name: getBlogPost(locale, slug).heading,
                  url: `${siteConfig.siteUrl}${localizedPath(locale, `blog/${slug}`)}`,
                }))
              : page === "guides"
                ? guideSlugs.map((slug) => ({
                    name: getGuide(locale, slug).heading,
                    url: `${siteConfig.siteUrl}${localizedPath(locale, `guides/${slug}`)}`,
                  }))
                : vsSlugs.map((slug) => ({
                    name: getComparison(locale, slug).heading,
                    url: `${siteConfig.siteUrl}${localizedPath(locale, `vs/${slug}`)}`,
                  }))
            ).map((entry, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: entry.name,
              url: entry.url,
            })),
          },
        }
      : null;

  const json = {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      website,
      app,
      video,
      breadcrumbs,
      article,
      collectionHub,
    ].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(json).replace(/</g, "\\u003c"),
      }}
    />
  );
}
