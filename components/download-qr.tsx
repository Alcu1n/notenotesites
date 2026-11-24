"use client";

import { useState } from "react";
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
  const zh = locale === "zh";
  const [copied, setCopied] = useState(false);
  const href = downloadLink(locale, page);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable in restricted contexts.
    }
  }

  return (
    <details
      className="download-qr"
      onToggle={(event) => {
        if (event.currentTarget.open)
          trackEvent("qr_open", { locale, page, position: "qr" });
      }}
    >
      <summary>{zh ? "用手机扫码下载" : "Send to your iPhone"}</summary>
      <div className="qr-panel">
        <div className="qr-frame">
          <span className="qr-corner qr-corner--tl" aria-hidden="true" />
          <span className="qr-corner qr-corner--tr" aria-hidden="true" />
          <span className="qr-corner qr-corner--bl" aria-hidden="true" />
          <span className="qr-corner qr-corner--br" aria-hidden="true" />
          <span className="qr-scanline" aria-hidden="true" />
          {/* Data URL is generated from this exact App Store destination on the server. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            width="196"
            height="196"
            alt={zh ? "App Store 下载二维码" : "App Store download QR code"}
          />
        </div>
        <p>
          {zh
            ? "使用 iPhone 或 iPad 相机扫描"
            : "Scan with your iPhone or iPad camera"}
        </p>
        <div className="qr-actions">
          <a
            href={href}
            data-download="qr"
            onClick={() =>
              trackEvent("download_click", { locale, page, position: "qr" })
            }
          >
            {zh ? "打开 App Store" : "Open App Store"}
          </a>
          <button
            type="button"
            className={`qr-copy-btn${copied ? " is-copied" : ""}`}
            onClick={copyLink}
          >
            {copied ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="9" y="9" width="11" height="11" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
            <span>{copied ? (zh ? "已复制" : "Copied") : zh ? "复制链接" : "Copy"}</span>
          </button>
        </div>
      </div>
    </details>
  );
}
