import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

import { ThemeToggle } from "./theme-toggle";

export function SiteHeader({ legal = false }: { legal?: boolean }) {
  return (
    <header className={`site-header${legal ? " site-header--legal" : ""}`}>
      <Link
        className="wordmark"
        href="/"
        aria-label={
          legal
            ? `${siteConfig.name} (known in Chinese as ${siteConfig.chineseName}) home`
            : `${siteConfig.name} home`
        }
      >
        <span className="wordmark-mark" aria-hidden="true">
          <Image src="/assets/driftleaf/app-icon.png" alt="" width={1024} height={1024} loading="eager" />
        </span>
        <span className="wordmark-label">
          {siteConfig.name}
          {legal && <> / <span lang="zh-Hans">{siteConfig.chineseName}</span></>}
        </span>
      </Link>

      <nav className="site-nav" aria-label="Primary navigation">
        {!legal && (
          <>
            <a href="#inside">Inside</a>
            <a href="#details">Details</a>
          </>
        )}
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </nav>

      <ThemeToggle />
    </header>
  );
}
