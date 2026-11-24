"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type PointerEvent, type ReactNode } from "react";
import { motion } from "motion/react";
import { localizedPath, type Locale } from "@/lib/routes";
import { ArrowIcon, FeatureIcon } from "./icons";

const featureIcons = ["text", "photo", "sticker"] as const;

function trackSpotlight(event: PointerEvent<HTMLElement>) {
  if (event.pointerType === "touch") return;
  const rect = event.currentTarget.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  event.currentTarget.style.setProperty("--gx", `${x.toFixed(1)}%`);
  event.currentTarget.style.setProperty("--gy", `${y.toFixed(1)}%`);
}

export function FeatureBento({
  features,
}: {
  features: readonly (readonly [string, string])[];
}) {
  return (
    <div className="feature-rows">
      {features.map(([title, description], index) => (
        <motion.article
          key={title}
          className="feature-card spotlight-surface"
          onPointerMove={trackSpotlight}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 360, damping: 28 }}
        >
          <div className="feature-card-top">
            <span className="feature-num">0{index + 1}</span>
            <span className="feature-icon-wrap" aria-hidden="true">
              <FeatureIcon kind={featureIcons[index]} />
            </span>
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </motion.article>
      ))}
    </div>
  );
}

export function PromptDrawer({
  locale,
  prompts,
}: {
  locale: Locale;
  prompts: readonly string[];
}) {
  const zh = locale === "zh";
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <ul
      className="prompt-list"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {prompts.map((prompt, index) => {
        const targetSlug =
          index === 3
            ? "travel-journal"
            : index === 4 || index === 5
              ? "digital-scrapbook"
              : "photo-journal";
        const tag =
          targetSlug === "travel-journal"
            ? zh
              ? "旅行手帐"
              : "Travel"
            : targetSlug === "digital-scrapbook"
              ? zh
                ? "拼贴手帐"
                : "Scrapbook"
              : zh
                ? "照片日记"
                : "Journal";
        const isHovered = hoveredIndex === index;

        return (
          <li key={prompt}>
            <Link
              href={localizedPath(locale, targetSlug)}
              onMouseEnter={() => setHoveredIndex(index)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
              className={isHovered ? "is-hovered" : undefined}
            >
              {isHovered && (
                <motion.span
                  layoutId="prompt-rail-bg"
                  className="prompt-hover-bg"
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 34,
                  }}
                  aria-hidden="true"
                />
              )}
              <span className="prompt-num">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="prompt-label">{prompt}</span>
              <span className="prompt-tag" aria-hidden="true">
                {tag}
              </span>
              <span className="prompt-arrow-track" aria-hidden="true">
                <ArrowIcon className="arrow-primary" />
                <ArrowIcon className="arrow-echo" />
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export type GuideFolioItem = {
  slug: string;
  heading: string;
  intro: string;
  minutes: number;
};

export function GuideFolios({
  locale,
  guides,
}: {
  locale: Locale;
  guides: GuideFolioItem[];
}) {
  const zh = locale === "zh";
  const motifs = ["Aa", "↗", "…"] as const;

  return (
    <div className="guide-list">
      {guides.map((guide, index) => (
        <motion.article
          key={guide.slug}
          className="guide-folio spotlight-surface"
          onPointerMove={trackSpotlight}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 360, damping: 28 }}
        >
          <div className="guide-folio-top">
            <span className="guide-type">
              {zh ? "实用教程" : "A practical guide"} · {guide.minutes}{" "}
              {zh ? "分钟" : "min"}
            </span>
            <span className="guide-index" aria-hidden="true">
              0{index + 1}
            </span>
          </div>
          <h3>
            <Link href={localizedPath(locale, `guides/${guide.slug}`)}>
              {guide.heading}
            </Link>
          </h3>
          <p>{guide.intro}</p>
          <Link
            className="text-link"
            href={localizedPath(locale, `guides/${guide.slug}`)}
          >
            {zh ? "打开教程" : "Read the guide"}
            <ArrowIcon />
          </Link>
          <span className="guide-motif" aria-hidden="true">
            {motifs[index]}
          </span>
        </motion.article>
      ))}
    </div>
  );
}

export function FinalCtaStage({
  eyebrow,
  title,
  text,
  note,
  downloadSlot,
}: {
  eyebrow: string;
  title: string;
  text: string;
  note: string;
  downloadSlot: ReactNode;
}) {
  return (
    <div className="final-cta spotlight-dark" onPointerMove={trackSpotlight}>
      <span className="stage-corner stage-corner--tl" aria-hidden="true" />
      <span className="stage-corner stage-corner--tr" aria-hidden="true" />
      <span className="stage-corner stage-corner--bl" aria-hidden="true" />
      <span className="stage-corner stage-corner--br" aria-hidden="true" />
      <motion.div
        className="final-icon-halo"
        whileHover={{ rotate: -5, scale: 1.06 }}
        transition={{ type: "spring", stiffness: 360, damping: 22 }}
      >
        <Image
          src="/assets/pinypiny/app-icon.png"
          alt=""
          width={76}
          height={76}
        />
      </motion.div>
      <p className="eyebrow final-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
      {downloadSlot}
      <small>{note}</small>
    </div>
  );
}
