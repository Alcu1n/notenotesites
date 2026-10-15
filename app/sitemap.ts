import type { MetadataRoute } from "next";
import { routeSlugs, localizedPath, type Locale } from "@/lib/routes";
import { siteConfig, appFacts } from "@/lib/site-config";
export default function sitemap(): MetadataRoute.Sitemap {
  const absolute = (locale: Locale, page: string) =>
    `${siteConfig.siteUrl}${localizedPath(locale, page) === "/" ? "" : localizedPath(locale, page)}`;
  return (["en", "zh"] as const).flatMap((locale) =>
    routeSlugs.map((page) => ({
      url: absolute(locale, page),
      lastModified: appFacts.contentUpdated,
      alternates: {
        languages: {
          en: absolute("en", page),
          "zh-CN": absolute("zh", page),
          "x-default": absolute("en", page),
        },
      },
    })),
  );
}
