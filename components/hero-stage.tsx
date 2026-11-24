"use client";

import Image from "next/image";
import { useRef, useState, type PointerEvent } from "react";
import { media } from "@/lib/media";
import type { Locale } from "@/lib/routes";

export function HeroStage({
  locale,
  heroAlt,
  caption,
}: {
  locale: Locale;
  heroAlt: string;
  caption: string;
}) {
  const zh = locale === "zh";
  const stageRef = useRef<HTMLDivElement>(null);
  const [activeLayer, setActiveLayer] = useState<"work" | "stack">("work");

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const el = stageRef.current;
    if (!el || event.pointerType === "touch") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const nx = (x - 0.5) * 2;
    const ny = (y - 0.5) * 2;
    el.style.setProperty("--mx", nx.toFixed(3));
    el.style.setProperty("--my", ny.toFixed(3));
    el.style.setProperty("--spot-x", `${(x * 100).toFixed(1)}%`);
    el.style.setProperty("--spot-y", `${(y * 100).toFixed(1)}%`);
  }

  function handlePointerLeave() {
    const el = stageRef.current;
    if (!el) return;
    el.style.setProperty("--mx", "0");
    el.style.setProperty("--my", "0");
    el.style.setProperty("--spot-x", "62%");
    el.style.setProperty("--spot-y", "26%");
  }

  return (
    <figure className="hero-visual">
      <div
        ref={stageRef}
        className={`hero-stage is-focus-${activeLayer}`}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <div className="hero-backdrop" aria-hidden="true">
          <span className="stage-corner stage-corner--tl" />
          <span className="stage-corner stage-corner--tr" />
          <span className="stage-corner stage-corner--bl" />
          <span className="stage-corner stage-corner--br" />
          <span className="stage-meta">
            {zh ? "真实作品 · 01" : "REAL PAGE · 01"}
          </span>
          <span className="stage-label">
            {zh ? "纸张、照片，还有一点你。" : "PAPER, PHOTOS & A LITTLE YOU."}
          </span>
        </div>

        <div
          className="hero-work"
          onMouseEnter={() => setActiveLayer("work")}
          onClick={() => setActiveLayer("work")}
        >
          <Image
            {...media.hero}
            alt={heroAlt}
            sizes="(max-width:700px) 56vw, 292px"
            fetchPriority="high"
            loading="eager"
          />
        </div>

        <div
          className="hero-stack"
          onMouseEnter={() => setActiveLayer("stack")}
          onClick={() => setActiveLayer("stack")}
        >
          <Image
            {...media.stack}
            alt={
              zh
                ? "用纸张卡片堆翻阅笔记"
                : "Browse notes in a paper card stack"
            }
            sizes="(max-width:700px) 26vw, 170px"
          />
        </div>
      </div>
      <figcaption>
        <span className="caption-dot" aria-hidden="true" />
        {caption}
      </figcaption>
    </figure>
  );
}
