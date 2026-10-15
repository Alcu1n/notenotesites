export const siteConfig = {
  name: "PinyPiny",
  chineseName: "拼拼笔记",
  studio: "LRAI STUDIO",
  developer: "@lemon",
  supportEmail: "alcuin.ch@gmail.com",
  description:
    "Visual notes and a collage journal for iPhone and iPad. Arrange words, photos and stickers into pages worth keeping.",
  appStoreUrl:
    process.env.NEXT_PUBLIC_APP_STORE_URL?.trim() ||
    "https://apps.apple.com/app/id6804919805",
  siteUrl: (
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://pinypiny.lraitech.com"
  ).replace(/\/$/, ""),
  providerToken: process.env.NEXT_PUBLIC_APP_STORE_PROVIDER_TOKEN?.trim() || "",
  analyticsWebsiteId: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID?.trim() || "",
  analyticsScriptUrl:
    process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL?.trim() ||
    "https://cloud.umami.is/script.js",
} as const;

export const appFacts = {
  operatingSystem: "iOS 18.0 / iPadOS 18.0 or later",
  category: "LifestyleApplication",
  supportedLanguages: ["English", "简体中文", "繁體中文", "日本語", "한국어"],
  verifiedStoreVersion: "1.0.3",
  contentUpdated: "2026-10-15",
} as const;

export const legalLastUpdated = "2026-10-15";
