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
        aria-label={`${siteConfig.name} home`}
      >
        <span className="wordmark-mark" aria-hidden="true">
          <Image src="/assets/pinnia/app-icon.png" alt="" width={1024} height={1024} />
        </span>
        <span className="wordmark-label">{siteConfig.name}</span>
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
