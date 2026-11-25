import type { MetadataRoute } from "next";
import {
  routeSlugs,
  localizedPath,
  type Locale,
  type PageSlug,
} from "@/lib/routes";
import { siteConfig, pageLastModified } from "@/lib/site-config";
import { media } from "@/lib/media";
import { getBlogPost, type BlogSlug } from "@/lib/blog-content";

function pageImages(locale: Locale, page: PageSlug): string[] | undefined {
  const full = (src: string) => `${siteConfig.siteUrl}${src}`;
  if (page === "") {
    return [
      full(`/assets/pinypiny/og-${locale}.jpg`),
      full(media.hero.src),
      full(media.daily.src),
      full(media.travel.src),
      full(media.inspiration.src),
    ];
  }
  if (page === "digital-scrapbook")
    return [full(media.inspiration.src), full(media.sticker.src)];
  if (page === "photo-journal")
    return [full(media.daily.src), full(media.stack.src)];
  if (page === "travel-journal")
    return [full(media.travel.src), full(media.export.src)];
  if (page === "guides/iphone-digital-scrapbook")
    return [full(media.daily.src), full(media.export.src)];
  if (page === "guides/photo-stickers") return [full(media.sticker.src)];
  if (page === "guides/travel-journal-ideas") return [full(media.travel.src)];
  if (page.startsWith("blog/")) {
    const post = getBlogPost(locale, page.slice(5) as BlogSlug);
    const urls = new Set<string>([full(media[post.coverImage].src)]);
    for (const s of post.sections) {
      if (s.image) urls.add(full(media[s.image].src));
    }
    return [...urls];
  }
  if (page === "vs" || page.startsWith("vs/")) {
    return [full(media.hero.src), full(media.stack.src)];
  }
  return undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const absolute = (locale: Locale, page: string) =>
    `${siteConfig.siteUrl}${localizedPath(locale, page) === "/" ? "" : localizedPath(locale, page)}`;

  return (["en", "zh"] as const).flatMap((locale) =>
    routeSlugs.map((page) => ({
      url: absolute(locale, page),
      lastModified: pageLastModified(page),
      alternates: {
        languages: {
          en: absolute("en", page),
          "zh-CN": absolute("zh", page),
          "x-default": absolute("en", page),
        },
      },
      images: pageImages(locale, page),
      ...(page === ""
        ? {
            videos: [
              {
                title:
                  locale === "zh"
                    ? "拼拼笔记 PinyPiny 真实 App 操作演示"
                    : "PinyPiny Visual Notes & Collage Journal App Demo",
                thumbnail_loc: `${siteConfig.siteUrl}/assets/pinypiny/showcase/demo-poster.webp`,
                description:
                  locale === "zh"
                    ? "在真实 App 中选入照片、应用照片边框、调整排版并回到卡片堆的 21 秒原速演示。"
                    : "A 21-second real-speed recording of choosing a photo, applying a photo frame, arranging a page and returning to the card stack in PinyPiny.",
                content_loc: `${siteConfig.siteUrl}/assets/pinypiny/showcase/demo.mp4`,
                duration: 21,
              },
            ],
          }
        : {}),
    })),
  );
}
