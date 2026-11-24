"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, type PointerEvent } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { media } from "@/lib/media";
import { localizedPath, type Locale } from "@/lib/routes";
import { ArrowIcon } from "./icons";

export type WorkGalleryItem = {
  readonly slug: string;
  readonly image: "daily" | "travel" | "inspiration";
  readonly name: string;
  readonly text: string;
  readonly link: string;
};

function WorkPlate({
  item,
  index,
  locale,
}: {
  item: WorkGalleryItem;
  index: number;
  locale: Locale;
}) {
  const zh = locale === "zh";
  const cardRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Subtle staggered vertical parallax depth across the 3 plates
  const offsets: [number, number] =
    index === 0 ? [18, -18] : index === 1 ? [6, -6] : [30, -24];
  const parallaxY = useTransform(scrollYProgress, [0, 1], offsets);

  function handlePointerMove(event: PointerEvent<HTMLAnchorElement>) {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    event.currentTarget.style.setProperty("--gx", `${x.toFixed(1)}%`);
    event.currentTarget.style.setProperty("--gy", `${y.toFixed(1)}%`);
  }

  return (
    <motion.article
      ref={cardRef}
      className="work-example"
      style={{ y: parallaxY }}
    >
      <Link
        className="work-image spotlight-surface"
        href={localizedPath(locale, item.slug)}
        onPointerMove={handlePointerMove}
      >
        <span className="plate-header" aria-hidden="true">
          <span className="plate-tag">
            {zh ? `页码 0${index + 1}` : `PLATE 0${index + 1}`}
          </span>
          <span className="plate-pill">
            {zh ? "查看详情" : "Inspect"}
            <ArrowIcon />
          </span>
        </span>
        <span className="work-image-frame">
          <Image
            {...media[item.image]}
            alt={`${item.name} — ${item.text}`}
            sizes="(max-width:700px) 86vw, (max-width:1000px) 30vw, 350px"
          />
        </span>
      </Link>
      <div className="work-meta">
        <span className="work-index" aria-hidden="true">
          0{index + 1}
        </span>
        <h3>{item.name}</h3>
        <p>{item.text}</p>
        <Link className="text-link" href={localizedPath(locale, item.slug)}>
          {item.link}
          <ArrowIcon />
        </Link>
      </div>
    </motion.article>
  );
}

export function WorkGallery({
  items,
  locale,
}: {
  items: readonly WorkGalleryItem[];
  locale: Locale;
}) {
  return (
    <div className="work-gallery">
      {items.map((item, index) => (
        <WorkPlate
          key={item.slug}
          item={item}
          index={index}
          locale={locale}
        />
      ))}
    </div>
  );
}
