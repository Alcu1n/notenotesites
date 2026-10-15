import { appFacts, siteConfig } from "@/lib/site-config";
import { localizedPath, type Locale, type PageSlug } from "@/lib/routes";
import { pageDescription } from "@/lib/metadata";
export function StructuredData({
  locale,
  page,
}: {
  locale: Locale;
  page: PageSlug;
}) {
  const url = `${siteConfig.siteUrl}${localizedPath(locale, page) === "/" ? "" : localizedPath(locale, page)}`;
  const content = pageDescription(locale, page);
  const organization = {
    "@type": "Organization",
    "@id": `${siteConfig.siteUrl}/#studio`,
    name: "LRAI STUDIO",
    url: `${siteConfig.siteUrl}/about`,
    email: siteConfig.supportEmail,
    logo: `${siteConfig.siteUrl}/assets/pinypiny/app-icon.png`,
  };
  const app = {
    "@type": "SoftwareApplication",
    "@id": `${siteConfig.siteUrl}/#app`,
    name: "PinyPiny",
    alternateName: "拼拼笔记",
    applicationCategory: appFacts.category,
    operatingSystem: appFacts.operatingSystem,
    url: siteConfig.siteUrl,
    downloadUrl: siteConfig.appStoreUrl,
    image: `${siteConfig.siteUrl}/assets/pinypiny/app-icon.png`,
    description: pageDescription(locale, "").description,
    publisher: { "@id": organization["@id"] },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description:
        locale === "zh"
          ? "免费下载，提供可选 App 内购买。"
          : "Free to download, with optional in-app purchases.",
    },
  };
  const breadcrumbs = page
    ? {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: locale === "zh" ? "首页" : "Home",
            item: `${siteConfig.siteUrl}${locale === "zh" ? "/zh" : ""}`,
          },
          ...(page.startsWith("guides/")
            ? [
                {
                  "@type": "ListItem",
                  position: 2,
                  name: locale === "zh" ? "教程" : "Guides",
                  item: `${siteConfig.siteUrl}${localizedPath(locale, "guides")}`,
                },
              ]
            : []),
          {
            "@type": "ListItem",
            position: page.startsWith("guides/") ? 3 : 2,
            name: content.title,
            item: url,
          },
        ],
      }
    : null;
  const article = page.startsWith("guides/")
    ? {
        "@type": "Article",
        headline: content.title,
        description: content.description,
        mainEntityOfPage: url,
        inLanguage: locale === "zh" ? "zh-CN" : "en",
        datePublished: appFacts.contentUpdated,
        dateModified: appFacts.contentUpdated,
        image: `${siteConfig.siteUrl}/assets/pinypiny/og-${locale}.jpg`,
        author: {
          "@type": "Person",
          name: "@lemon",
          url: `${siteConfig.siteUrl}${localizedPath(locale, "about")}`,
        },
        publisher: { "@id": organization["@id"] },
      }
    : null;
  const json = {
    "@context": "https://schema.org",
    "@graph": [organization, app, breadcrumbs, article].filter(Boolean),
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
