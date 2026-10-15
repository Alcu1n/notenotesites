"use client";
import Image from "next/image";
import { useState } from "react";
import type { Locale } from "@/lib/routes";
import { trackEvent } from "@/lib/analytics";
const examples = ["minimal", "journal", "collage"] as const;
export function StyleShowcase({
  locale,
  labels,
}: {
  locale: Locale;
  labels: readonly string[];
}) {
  const [selected, setSelected] = useState(0);
  return (
    <div className="style-showcase">
      <div
        className="style-buttons"
        role="group"
        aria-label={locale === "zh" ? "查看排版示例" : "View layout examples"}
      >
        {examples.map((name, index) => (
          <button
            key={name}
            type="button"
            aria-pressed={selected === index}
            onClick={() => {
              setSelected(index);
              trackEvent("example_change", { locale, page: "", example: name });
            }}
          >
            {labels[index]}
          </button>
        ))}
      </div>
      <div className="style-preview">
        <Image
          data-style-image
          src={`/assets/pinypiny/showcase/same-${examples[selected]}.webp`}
          width={780}
          height={1688}
          sizes="(max-width:700px) 76vw, 340px"
          alt={
            locale === "zh"
              ? `同一张照片的${labels[selected]}排版，真实 App 示例`
              : `The same photo in a ${labels[selected].toLowerCase()} layout, made in the real app`
          }
        />
      </div>
      <p className="style-status" aria-live="polite">
        {locale === "zh" ? "当前示例：" : "Showing: "}
        {labels[selected]}
      </p>
    </div>
  );
}
