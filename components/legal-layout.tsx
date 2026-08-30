import type { ReactNode } from "react";

import { legalLastUpdated, siteConfig } from "@/lib/site-config";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type LegalLayoutProps = {
  title: string;
  summary: string;
  children: ReactNode;
};

export function LegalLayout({ title, summary, children }: LegalLayoutProps) {
  return (
    <div className="site-shell legal-page">
      <SiteHeader legal />
      <main id="main-content">
        <section className="legal-hero">
          <h1>{title}</h1>
          <p>{summary}</p>
          <div className="legal-hero__stamp">
            {siteConfig.studio} / {siteConfig.name}
          </div>
          <span className="legal-updated">Last updated {legalLastUpdated}</span>
        </section>

        <div className="legal-layout">
          <nav className="legal-index" aria-label="On this page">
            <span>ON THIS PAGE</span>
            <a href="#overview">Overview</a>
            <a href="#data">Data and choices</a>
            <a href="#third-parties">Third parties</a>
            <a href="#retention">Retention</a>
            <a href="#contact">Contact</a>
          </nav>
          <article className="legal-content" aria-label={title}>
            {children}
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
