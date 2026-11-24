"use client";

import Image from "next/image";
import { useState } from "react";
import type { Locale } from "@/lib/routes";
import { trackEvent } from "@/lib/analytics";

const examples = ["minimal", "journal", "collage"] as const;

const styleNotes = {
  en: [
    "Generous paper margin, one photograph, and a quiet line beneath.",
    "Room for a fuller paragraph beside the same coastal frame.",
    "Layered Polaroid frame, cut-out lemon sticker, and angled highlights.",
  ],
  zh: [
    "大面积纸面留白，一张照片，配上一句克制的注脚。",
    "在同一张海边照片下展开段落，写下更完整的午后心境。",
    "宝丽来边框、柠檬抠图贴纸与倾斜高亮文字自由叠放。",
  ],
} as const;

export function StyleShowcase({
  locale,
  labels,
}: {
  locale: Locale;
  labels: readonly string[];
}) {
  const zh = locale === "zh";
  const [selected, setSelected] = useState(0);

  const prevIndex = (selected + 2) % 3;
  const nextIndex = (selected + 1) % 3;

  function choose(index: number) {
    setSelected(index);
    trackEvent("example_change", {
      locale,
      page: "",
      example: examples[index],
    });
  }

  return (
    <div className="style-showcase">
      <div
        className="style-buttons"
        role="group"
        aria-label={zh ? "查看排版示例" : "View layout examples"}
        style={{ "--active-index": selected } as React.CSSProperties}
      >
        <span className="style-pill-indicator" aria-hidden="true" />
        {examples.map((name, index) => (
          <button
            key={name}
            type="button"
            aria-pressed={selected === index}
            onClick={() => choose(index)}
          >
            {labels[index]}
          </button>
        ))}
      </div>

      <div className="style-deck">
        <button
          type="button"
          className="style-peek style-peek--left"
          onClick={() => choose(prevIndex)}
          tabIndex={-1}
          aria-hidden="true"
        >
          <Image
            src={`/assets/pinypiny/showcase/same-${examples[prevIndex]}.webp`}
            width={780}
            height={1688}
            sizes="(max-width:700px) 48vw, 240px"
            alt=""
          />
        </button>

        <button
          type="button"
          className="style-peek style-peek--right"
          onClick={() => choose(nextIndex)}
          tabIndex={-1}
          aria-hidden="true"
        >
          <Image
            src={`/assets/pinypiny/showcase/same-${examples[nextIndex]}.webp`}
            width={780}
            height={1688}
            sizes="(max-width:700px) 48vw, 240px"
            alt=""
          />
        </button>

        <div className="style-preview" key={examples[selected]}>
          <Image
            data-style-image
            src={`/assets/pinypiny/showcase/same-${examples[selected]}.webp`}
            width={780}
            height={1688}
            sizes="(max-width:700px) 76vw, 340px"
            alt={
              zh
                ? `同一张照片的${labels[selected]}排版，真实 App 示例`
                : `The same photo in a ${labels[selected].toLowerCase()} layout, made in the real app`
            }
          />
        </div>
      </div>

      <div className="style-caption-card">
        <p className="style-status" aria-live="polite">
          <span className="style-index">0{selected + 1} / 03</span>
          <strong>
            {zh ? "当前示例：" : "Showing: "}
            {labels[selected]}
          </strong>
        </p>
        <p className="style-blurb">{styleNotes[locale][selected]}</p>
      </div>
    </div>
  );
}
