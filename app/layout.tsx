import type { Metadata } from "next";

import "./globals.css";

import { siteConfig } from "@/lib/site-config";

const metadataBase = siteConfig.siteUrl ? new URL(siteConfig.siteUrl) : undefined;
const siteTitle = `${siteConfig.name} — A beautiful place for the things worth keeping.`;

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: siteTitle,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.developer }],
  creator: siteConfig.studio,
  keywords: ["visual journal", "notes app", "digital journal", "creative notes"],
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteTitle,
    description: siteConfig.description,
    images: ["/assets/pinnia/hero-card-stack.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteConfig.description,
    images: ["/assets/pinnia/hero-card-stack.jpg"],
  },
  icons: {
    icon: "/assets/pinnia/app-icon.png",
    apple: "/assets/pinnia/app-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {/* THESIS: Pinnia turns the plain notes list into a tactile paper stack. */}
        {/* OWN-WORLD: warm paper, ink-black outlines, offset shadows, vivid paper accents, editorial type. */}
        {/* STORY: see a moment become a page, understand the local-first promise, and explore Pinnia. */}
        {/* FIRST VIEWPORT: copy and CTA on the left, the real card-stack image as the oversized proof on the right. */}
        {/* FORM: reference-pinned paper ledger language, adapted to a visual journal. */}
        {/* FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md */}
        {children}
      </body>
    </html>
  );
}
