export type Locale = "en" | "zh";

export const routeSlugs = [
  "",
  "digital-scrapbook",
  "photo-journal",
  "travel-journal",
  "guides",
  "guides/iphone-digital-scrapbook",
  "guides/photo-stickers",
  "guides/travel-journal-ideas",
  "blog",
  "blog/digital-scrapbook-layout-ideas",
  "blog/private-offline-photo-journal-iphone",
  "blog/everyday-photo-journal-prompts",
  "blog/scrapbook-vs-photo-journal-vs-notes-app",
  "vs",
  "vs/apple-journal",
  "vs/day-one",
  "vs/zinnia",
  "about",
  "support",
  "privacy",
  "terms",
] as const;

export type PageSlug = (typeof routeSlugs)[number];

export function localizedPath(locale: Locale, slug: string = "") {
  return `${locale === "zh" ? "/zh" : ""}${slug ? `/${slug}` : ""}` || "/";
}

export function isPageSlug(slug: string): slug is PageSlug {
  return routeSlugs.some((value) => value === slug);
}

export const staticSlugs = routeSlugs
  .filter(Boolean)
  .map((slug) => ({ slug: slug.split("/") }));
