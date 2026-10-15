import Script from "next/script";
import { siteConfig } from "@/lib/site-config";

export function AnalyticsProvider() {
  if (
    !siteConfig.analyticsWebsiteId ||
    process.env.VERCEL_ENV === "preview" ||
    process.env.NODE_ENV !== "production"
  )
    return null;
  return (
    <Script
      src={siteConfig.analyticsScriptUrl}
      strategy="afterInteractive"
      data-website-id={siteConfig.analyticsWebsiteId}
      data-domains={new URL(siteConfig.siteUrl).hostname}
      data-exclude-search="true"
      data-exclude-hash="true"
      data-do-not-track="true"
    />
  );
}
