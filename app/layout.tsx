import type { Metadata } from "next";

import "./globals.css";

import { siteConfig } from "@/lib/site-config";

const metadataBase = siteConfig.siteUrl ? new URL(siteConfig.siteUrl) : undefined;
const siteTitle = siteConfig.name;

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
    images: ["/assets/pinypiny/hero-card-stack.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteConfig.description,
    images: ["/assets/pinypiny/hero-card-stack.jpg"],
  },
  icons: {
    icon: "/assets/pinypiny/app-icon.png",
    apple: "/assets/pinypiny/app-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
