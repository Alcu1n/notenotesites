"use client";
import type { Locale } from "@/lib/routes";
import { trackEvent } from "@/lib/analytics";
export function AppDemo({ locale }: { locale: Locale }) {
  return (
    <figure className="demo-player">
      <video
        controls
        playsInline
        preload="none"
        poster="/assets/pinypiny/showcase/demo-poster.webp"
        aria-label={
          locale === "zh"
            ? "拼拼笔记真实 App 操作演示"
            : "PinyPiny real app demonstration"
        }
        onPlay={() =>
          trackEvent("demo_play", { locale, page: "", position: "demo" })
        }
      >
        <source src="/assets/pinypiny/showcase/demo.mp4" type="video/mp4" />
        <track
          kind="captions"
          src={`/assets/pinypiny/showcase/demo-${locale}.vtt`}
          srcLang={locale === "zh" ? "zh-CN" : "en"}
          label={locale === "zh" ? "简体中文" : "English"}
          default
        />
        {locale === "zh"
          ? "浏览器不支持视频。下方提供演示说明。"
          : "Your browser does not support video. Read the demonstration description below."}
      </video>
      <figcaption>
        {locale === "zh"
          ? "真实 App 录屏：在预置示例页中选图、排版，再返回卡片堆。"
          : "Real app recording: adding and arranging a photo on a prepared example page, then returning to the stack."}
      </figcaption>
    </figure>
  );
}
