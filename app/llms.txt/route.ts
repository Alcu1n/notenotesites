import { appFacts, siteConfig } from "@/lib/site-config";
import { pageDescription } from "@/lib/metadata";
import {
  routeSlugs,
  localizedPath,
  type Locale,
  type PageSlug,
} from "@/lib/routes";
import { copyFor } from "@/lib/ui-copy";

export const dynamic = "force-static";

export function GET() {
  const en = copyFor("en");
  const canonicalUrl = (locale: Locale, page: string) => {
    const path = localizedPath(locale, page);
    return `${siteConfig.siteUrl}${path === "/" ? "" : path}`;
  };

  const freeAndPro = en.proRows
    .map(([label, detail]) => `- ${label}: ${detail}`)
    .join("\n");

  const formatSection = (filter: (slug: PageSlug) => boolean) =>
    (["en", "zh"] as const)
      .flatMap((locale) =>
        routeSlugs.filter(filter).map((page) => {
          const meta = pageDescription(locale, page);
          return `- [${meta.title}](${canonicalUrl(locale, page)}): ${meta.description}`;
        }),
      )
      .join("\n");

  const corePages = formatSection(
    (p) =>
      p === "" ||
      p === "digital-scrapbook" ||
      p === "photo-journal" ||
      p === "travel-journal",
  );
  const guidePages = formatSection(
    (p) => p === "guides" || p.startsWith("guides/"),
  );
  const blogPages = formatSection(
    (p) => p === "blog" || p.startsWith("blog/"),
  );
  const vsPages = formatSection((p) => p === "vs" || p.startsWith("vs/"));
  const infoPages = formatSection(
    (p) =>
      p === "about" || p === "support" || p === "privacy" || p === "terms",
  );

  const text = `# ${siteConfig.name} / ${siteConfig.chineseName}

> A visual notes, photo journal, and freeform digital scrapbook app for iPhone and iPad (${appFacts.operatingSystem}), made by ${siteConfig.studio} (${siteConfig.developer}).

## Product facts
- Platforms: ${appFacts.operatingSystem} (iPhone and iPad only; no Android, Mac, or web editor)
- App languages (${appFacts.supportedLanguages.length}): ${appFacts.supportedLanguages.join(", ")}
- Verified App Store version: ${appFacts.verifiedStoreVersion} (editorial updated ${appFacts.editorialUpdated})
- Storage & offline: Local-first on device without a separate account; core editing and on-device Sticker Studio cutouts work offline
- Export: Saves finished pages as images to Apple Photos (not PDF, not collaborative web docs, not an editable backup)

## What PinyPiny does NOT do
- No generative AI writing or automatic AI photo captions (users write their own notes)
- No Apple Pencil drawing, calligraphy brushes, or PDF planner template imports
- No automatic GPS route tracking or mandatory third-party cloud login

## Pricing & Free vs Pro
- Full machine-readable sheet: ${siteConfig.siteUrl}/pricing.md
- Download price: Free ($0) on the Apple App Store
- Optional Pro: Available via Apple In-App Purchase (subscription or one-time Lifetime option; regional prices and terms are shown in the app and App Store)
${freeAndPro}

## Core product & scenario pages (${routeSlugs.length * 2} total bilingual pages)
${corePages}

## Step-by-step guides
${guidePages}

## Blog articles
${blogPages}

## Honest comparisons
${vsPages}

## Company, support & legal
${infoPages}

## Download and contact
- [App Store (ID 6804919805)](${siteConfig.appStoreUrl})
- Support: ${siteConfig.supportEmail}

This index is generated dynamically from the same route and copy constants as the published pages.
`;

  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
