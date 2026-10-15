"use client";
import { downloadLink } from "@/lib/download";
import { trackEvent } from "@/lib/analytics";
import type { Locale } from "@/lib/routes";
import { AppleIcon, ArrowIcon } from "./icons";
export function DownloadButton({
  locale = "en",
  page = "",
  position = "hero",
  className = "",
}: {
  locale?: Locale;
  page?: string;
  position?: string;
  className?: string;
}) {
  return (
    <a
      className={`download-button ${className}`}
      href={downloadLink(locale, page)}
      data-download={position}
      onClick={() => trackEvent("download_click", { locale, page, position })}
    >
      <AppleIcon />
      <span>
        {locale === "zh" ? "免费下载" : "Download free"}
        <small>App Store</small>
      </span>
      <ArrowIcon />
    </a>
  );
}
