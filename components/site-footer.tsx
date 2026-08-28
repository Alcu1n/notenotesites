import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export function SiteFooter({ legal = false }: { legal?: boolean }) {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <div className="footer-brand__top">
          <span className="footer-brand__mark" aria-hidden="true">
            <Image src="/assets/driftleaf/app-icon.png" alt="" width={1024} height={1024} />
          </span>
          <span className="footer-brand__name">
            {siteConfig.name}
            {legal && <> / <span lang="zh-Hans">{siteConfig.chineseName}</span></>}
          </span>
        </div>
        <span className="footer-brand__tagline">Keep the good parts.</span>
      </div>

      <div className="footer-links">
        <div>
          <span className="footer-label">LEGAL</span>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
        <div>
          <span className="footer-label">CONTACT</span>
          <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
          <span>Built by {siteConfig.developer}</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.studio}</span>
        <span>Made for the moments between the lines.</span>
      </div>
    </footer>
  );
}
