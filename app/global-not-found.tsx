import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Page Not Found | ${siteConfig.name}`,
  description:
    "The page you requested does not exist on PinyPiny. Return to the English or Simplified Chinese homepage, guides, or blog.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <main className="site-shell">
          <section className="article-hero page-section">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              404 · NOT FOUND
            </p>
            <h1>This page is not in the stack.</h1>
            <p className="lead">
              The URL you opened does not match a published page on PinyPiny.
              Choose a destination below in English or Simplified Chinese.
            </p>
            <div className="related-links" style={{ marginTop: 28 }}>
              <Link className="text-link" href="/">
                PinyPiny Home (English) →
              </Link>
              <Link className="text-link" href="/zh">
                拼拼笔记首页（简体中文） →
              </Link>
              <Link className="text-link" href="/blog">
                Read the Blog →
              </Link>
              <Link className="text-link" href="/guides">
                Browse Guides →
              </Link>
              <Link className="text-link" href="/vs">
                Compare Journal Apps →
              </Link>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
