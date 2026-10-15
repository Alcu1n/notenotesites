"use client";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/routes";
import { DownloadButton } from "./download-button";
export function StickyDownload({
  locale,
  page,
}: {
  locale: Locale;
  page: string;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const hero = document.querySelector("[data-primary-download]");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0),
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);
  return (
    <aside
      className={`sticky-download${visible ? " is-visible" : ""}`}
      aria-label={locale === "zh" ? "下载拼拼笔记" : "Download PinyPiny"}
      inert={!visible}
    >
      <span>
        PinyPiny
        <small>
          {locale === "zh"
            ? "你的下一页，从这里开始"
            : "Your next page starts here"}
        </small>
      </span>
      <DownloadButton locale={locale} page={page} position="sticky" />
    </aside>
  );
}
