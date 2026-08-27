export const siteConfig = {
  name: "Tucked",
  studio: "LRAI STUDIO",
  developer: "@lemon",
  supportEmail: "alcuin.ch@gmail.com",
  description:
    "A visual notebook for everyday thoughts, photos, and the small moments worth keeping.",
  appStoreUrl: process.env.NEXT_PUBLIC_APP_STORE_URL?.trim() || null,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.trim() || null,
} as const;

export const legalLastUpdated = "August 27, 2026";
