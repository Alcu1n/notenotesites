import type { Metadata } from "next";

import "./globals.css";

import { siteConfig } from "@/lib/site-config";

const metadataBase = siteConfig.siteUrl ? new URL(siteConfig.siteUrl) : undefined;

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Driftleaf — A beautiful place for the things worth keeping.",
    template: "%s — Driftleaf",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.developer }],
  creator: siteConfig.studio,
  keywords: ["visual journal", "notes app", "digital journal", "creative notes"],
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "Driftleaf — A beautiful place for the things worth keeping.",
    description: siteConfig.description,
    images: ["/assets/tucked/hero-card-stack.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Driftleaf — A beautiful place for the things worth keeping.",
    description: siteConfig.description,
    images: ["/assets/tucked/hero-card-stack.jpg"],
  },
  icons: {
    icon: "/assets/tucked/hero-card-stack.jpg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* THESIS: Driftleaf turns the plain notes list into a tactile paper stack. */}
        {/* OWN-WORLD: warm paper, ink-black outlines, offset shadows, vivid paper accents, editorial type. */}
        {/* STORY: see a moment become a page, understand the local-first promise, and explore Driftleaf. */}
        {/* FIRST VIEWPORT: copy and CTA on the left, the real card-stack image as the oversized proof on the right. */}
        {/* FORM: reference-pinned paper ledger language, adapted to a visual journal. */}
        {/* FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md */}
        {children}
      </body>
    </html>
  );
}
