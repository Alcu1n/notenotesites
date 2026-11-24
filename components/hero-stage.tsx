"use client";

import Image from "next/image";
import { useRef, useState, type PointerEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
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

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotX = useMotionValue(64);
  const spotY = useMotionValue(24);

  const springX = useSpring(mx, { stiffness: 180, damping: 24, mass: 0.6 });
  const springY = useSpring(my, { stiffness: 180, damping: 24, mass: 0.6 });
  const springSpotX = useSpring(spotX, { stiffness: 150, damping: 26 });
  const springSpotY = useSpring(spotY, { stiffness: 150, damping: 26 });

  const workX = useTransform(springX, [-1, 1], [12, -12]);
  const workY = useTransform(springY, [-1, 1], [9, -9]);
  const workRotateY = useTransform(springX, [-1, 1], [-5, 5]);
  const workRotateX = useTransform(springY, [-1, 1], [4, -4]);

  const stackX = useTransform(springX, [-1, 1], [-14, 14]);
  const stackY = useTransform(springY, [-1, 1], [-10, 10]);

  const backdropGlow = useMotionTemplate`radial-gradient(circle at ${springSpotX}% ${springSpotY}%, rgba(235, 157, 136, 0.22), transparent 54%)`;
  const sheenBg = useMotionTemplate`linear-gradient(125deg, transparent 22%, rgba(255, 253, 247, 0.22) ${springSpotX}%, transparent 78%)`;

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start start", "end start"],
  });
  const scrollWorkY = useTransform(scrollYProgress, [0, 1], [0, -28]);
  const scrollStackY = useTransform(scrollYProgress, [0, 1], [0, 26]);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const el = stageRef.current;
    if (!el || event.pointerType === "touch") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    mx.set((x - 0.5) * 2);
    my.set((y - 0.5) * 2);
    spotX.set(x * 100);
    spotY.set(y * 100);
  }

  function handlePointerLeave() {
    mx.set(0);
    my.set(0);
    spotX.set(64);
    spotY.set(24);
  }

  const stackFocused = activeLayer === "stack";

  return (
    <figure className="hero-visual">
      <div
        ref={stageRef}
        className={`hero-stage is-focus-${activeLayer}`}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <div className="hero-backdrop" aria-hidden="true">
          <motion.span
            className="hero-backdrop-glow"
            style={{ backgroundImage: backdropGlow }}
          />
          <span className="stage-corner stage-corner--tl" />
          <span className="stage-corner stage-corner--tr" />
          <span className="stage-corner stage-corner--bl" />
          <span className="stage-corner stage-corner--br" />
          <span className="stage-meta">
            {stackFocused
              ? zh
                ? "卡片堆视图 · 02"
                : "CARD STACK · 02"
              : zh
                ? "真实作品 · 01"
                : "REAL PAGE · 01"}
          </span>
          <span className="stage-label">
            {zh ? "纸张、照片，还有一点你。" : "PAPER, PHOTOS & A LITTLE YOU."}
          </span>
        </div>

        <motion.div
          className="hero-work-parallax"
          style={{ y: scrollWorkY }}
        >
          <motion.div
            className="hero-work"
            style={{
              x: workX,
              y: workY,
              rotateX: workRotateX,
              rotateY: workRotateY,
            }}
            initial={false}
            animate={{
              rotate: stackFocused ? -7 : -4.5,
              scale: stackFocused ? 0.945 : 1,
              filter: stackFocused ? "brightness(0.95)" : "brightness(1)",
            }}
            whileHover={{
              rotate: -2.8,
              scale: 1.02,
              y: -6,
            }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            onClick={() => setActiveLayer("work")}
          >
            <motion.span
              className="card-specular-sheen"
              style={{ backgroundImage: sheenBg }}
              aria-hidden="true"
            />
            <Image
              {...media.hero}
              alt={heroAlt}
              sizes="(max-width:700px) 56vw, 292px"
              fetchPriority="high"
              loading="eager"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-stack-parallax"
          style={{ y: scrollStackY }}
        >
          <motion.div
            className="hero-stack"
            style={{ x: stackX, y: stackY }}
            initial={false}
            animate={{
              rotate: stackFocused ? 2 : 6.5,
              scale: stackFocused ? 1.12 : 1,
              y: stackFocused ? -26 : 0,
              x: stackFocused ? -14 : 0,
            }}
            whileHover={{
              rotate: 3.5,
              scale: stackFocused ? 1.14 : 1.05,
              y: stackFocused ? -30 : -10,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={() =>
              setActiveLayer((prev) => (prev === "work" ? "stack" : "work"))
            }
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
          </motion.div>
        </motion.div>
      </div>

      <figcaption className="hero-stage-footer">
        <span className="hero-caption-text">
          <span className="caption-dot" aria-hidden="true" />
          {caption}
        </span>
        <div
          className="stage-switcher"
          role="group"
          aria-label={zh ? "切换舞台焦点" : "Switch stage focus"}
        >
          <button
            type="button"
            className={activeLayer === "work" ? "is-active" : undefined}
            aria-pressed={activeLayer === "work"}
            onClick={() => setActiveLayer("work")}
          >
            {activeLayer === "work" && (
              <motion.span
                layoutId="hero-stage-pill"
                className="stage-switcher-pill"
                transition={{ type: "spring", stiffness: 460, damping: 32 }}
              />
            )}
            <span>{zh ? "拼贴页" : "Page"}</span>
          </button>
          <button
            type="button"
            className={activeLayer === "stack" ? "is-active" : undefined}
            aria-pressed={activeLayer === "stack"}
            onClick={() => setActiveLayer("stack")}
          >
            {activeLayer === "stack" && (
              <motion.span
                layoutId="hero-stage-pill"
                className="stage-switcher-pill"
                transition={{ type: "spring", stiffness: 460, damping: 32 }}
              />
            )}
            <span>{zh ? "卡片堆" : "Stack"}</span>
          </button>
        </div>
      </figcaption>
    </figure>
  );
}
