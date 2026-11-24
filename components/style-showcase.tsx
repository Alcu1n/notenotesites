"use client";

import Image from "next/image";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimationControls,
  type PanInfo,
} from "motion/react";
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
  const cardControls = useAnimationControls();

  const prevIndex = (selected + 2) % 3;
  const nextIndex = (selected + 1) % 3;

  function choose(index: number) {
    if (index === selected) return;
    const diff = (index - selected + 3) % 3;
    const dir = diff === 1 ? 1 : -1;
    setSelected(index);
    cardControls.set({
      x: dir * 34,
      rotate: dir * 4,
      scale: 0.955,
      opacity: 0.72,
    });
    void cardControls.start({
      x: 0,
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 360,
        damping: 26,
      },
    });
    trackEvent("example_change", {
      locale,
      page: "",
      example: examples[index],
    });
  }

  function handleDragEnd(
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) {
    if (info.offset.x < -55 || info.velocity.x < -280) {
      choose(nextIndex);
    } else if (info.offset.x > 55 || info.velocity.x > 280) {
      choose(prevIndex);
    }
  }

  return (
    <div className="style-showcase">
      <div
        className="style-buttons"
        role="group"
        aria-label={zh ? "查看排版示例" : "View layout examples"}
      >
        {examples.map((name, index) => {
          const isSelected = selected === index;
          return (
            <button
              key={name}
              type="button"
              aria-pressed={isSelected}
              onClick={() => choose(index)}
            >
              {isSelected && (
                <motion.span
                  layoutId="style-tab-pill"
                  className="style-pill-indicator"
                  transition={{
                    type: "spring",
                    stiffness: 460,
                    damping: 32,
                  }}
                  aria-hidden="true"
                />
              )}
              <span className="style-btn-text">{labels[index]}</span>
            </button>
          );
        })}
      </div>

      <div className="style-deck">
        <motion.button
          type="button"
          className="style-peek style-peek--left"
          onClick={() => choose(prevIndex)}
          tabIndex={-1}
          aria-hidden="true"
          whileHover={{ x: -10, rotate: -9, scale: 0.95, opacity: 0.94 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
        >
          <Image
            src={`/assets/pinypiny/showcase/same-${examples[prevIndex]}.webp`}
            width={780}
            height={1688}
            sizes="(max-width:700px) 48vw, 240px"
            alt=""
          />
        </motion.button>

        <motion.button
          type="button"
          className="style-peek style-peek--right"
          onClick={() => choose(nextIndex)}
          tabIndex={-1}
          aria-hidden="true"
          whileHover={{ x: 10, rotate: 9, scale: 0.95, opacity: 0.94 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
        >
          <Image
            src={`/assets/pinypiny/showcase/same-${examples[nextIndex]}.webp`}
            width={780}
            height={1688}
            sizes="(max-width:700px) 48vw, 240px"
            alt=""
          />
        </motion.button>

        <motion.div
          className="style-preview"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.28}
          onDragEnd={handleDragEnd}
          whileDrag={{ cursor: "grabbing", scale: 1.02 }}
          animate={cardControls}
        >
          <Image
            data-style-image
            src={`/assets/pinypiny/showcase/same-${examples[selected]}.webp`}
            width={780}
            height={1688}
            sizes="(max-width:700px) 76vw, 340px"
            draggable={false}
            alt={
              zh
                ? `同一张照片的${labels[selected]}排版，真实 App 示例`
                : `The same photo in a ${labels[selected].toLowerCase()} layout, made in the real app`
            }
          />
        </motion.div>
      </div>

      <div className="style-caption-card">
        <p className="style-status" aria-live="polite">
          <span className="style-index">0{selected + 1} / 03</span>
          <strong>
            {zh ? "当前示例：" : "Showing: "}
            {labels[selected]}
          </strong>
          <span className="style-drag-hint" aria-hidden="true">
            {zh ? "可左右滑动" : "Drag card"}
          </span>
        </p>
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={selected}
            className="style-blurb"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {styleNotes[locale][selected]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
