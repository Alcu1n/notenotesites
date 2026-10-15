import { siteConfig } from "./site-config";
import type { Locale } from "./routes";

// Campaigns stay broad enough for Apple's reporting threshold. Position is a website event.
export function downloadLink(locale: Locale, page: string) {
  const url = new URL(siteConfig.appStoreUrl);
  const provider = siteConfig.providerToken || url.searchParams.get("pt");
  if (provider) {
    url.searchParams.set("pt", provider);
    const scenario = page.startsWith("guides") ? "guides" : page || "home";
    url.searchParams.set(
      "ct",
      `website_${locale}_${scenario.replaceAll("/", "_")}`,
    );
    url.searchParams.set("mt", "8");
  }
  return url.toString();
}
