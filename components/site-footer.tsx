import Image from "next/image";
import Link from "next/link";
import { localizedPath, type Locale } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";
export function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const zh = locale === "zh";
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link className="wordmark" href={localizedPath(locale)}>
            <Image
              src="/assets/pinypiny/app-icon.png"
              alt=""
              width={48}
              height={48}
            />
            <span>PinyPiny</span>
          </Link>
          <p>
            {zh ? "把日子，拼成喜欢的样子。" : "Life, in your own arrangement."}
          </p>
          <small>
            {zh
              ? "iPhone 与 iPad · iOS / iPadOS 18 及以上"
              : "iPhone & iPad · iOS / iPadOS 18 or later"}
          </small>
        </div>
        <div className="footer-group">
          <span>{zh ? "开始创作" : "Make something"}</span>
          <Link href={localizedPath(locale, "digital-scrapbook")}>
            {zh ? "拼贴手帐" : "Digital scrapbook"}
          </Link>
          <Link href={localizedPath(locale, "photo-journal")}>
            {zh ? "照片日记" : "Photo journal"}
          </Link>
          <Link href={localizedPath(locale, "travel-journal")}>
            {zh ? "旅行手帐" : "Travel journal"}
          </Link>
          <Link href={localizedPath(locale, "guides")}>
            {zh ? "教程与灵感" : "Guides & ideas"}
          </Link>
        </div>
        <div className="footer-group">
          <span>{zh ? "关于与帮助" : "A little more"}</span>
          <Link href={localizedPath(locale, "about")}>
            {zh ? "关于 PinyPiny" : "About PinyPiny"}
          </Link>
          <Link href={localizedPath(locale, "support")}>
            {zh ? "帮助与支持" : "Help & support"}
          </Link>
          <Link href={localizedPath(locale, "privacy")}>
            {zh ? "隐私政策" : "Privacy policy"}
          </Link>
          <Link href={localizedPath(locale, "terms")}>
            {zh ? "使用条款" : "Terms of service"}
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {siteConfig.studio}
        </span>
        <a href={`mailto:${siteConfig.supportEmail}`}>
          {siteConfig.supportEmail}
        </a>
        <a href="#main-content">{zh ? "回到顶部 ↑" : "Back to top ↑"}</a>
      </div>
    </footer>
  );
}
