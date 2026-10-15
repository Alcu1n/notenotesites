"use client";
import { trackEvent } from "@/lib/analytics";
import { downloadLink } from "@/lib/download";
import type { Locale } from "@/lib/routes";
export function DownloadQr({
  locale,
  page,
  image,
}: {
  locale: Locale;
  page: string;
  image: string;
}) {
  return (
    <details
      className="download-qr"
      onToggle={(event) => {
        if (event.currentTarget.open)
          trackEvent("qr_open", { locale, page, position: "qr" });
      }}
    >
      <summary>
        {locale === "zh" ? "用手机扫码下载" : "Send to your iPhone"}
      </summary>
      <div className="qr-panel">
        {/* Data URL is generated from this exact App Store destination on the server. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          width="196"
          height="196"
          alt={
            locale === "zh"
              ? "App Store 下载二维码"
              : "App Store download QR code"
          }
        />
        <p>
          {locale === "zh"
            ? "使用 iPhone 或 iPad 相机扫描"
            : "Scan with your iPhone or iPad camera"}
        </p>
        <a
          href={downloadLink(locale, page)}
          data-download="qr"
          onClick={() =>
            trackEvent("download_click", { locale, page, position: "qr" })
          }
        >
          {locale === "zh" ? "打开 App Store" : "Open the App Store"}
        </a>
      </div>
    </details>
  );
}
