"use client";

import { useRef, type PointerEvent } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { downloadLink } from "@/lib/download";
import { trackEvent } from "@/lib/analytics";
import type { Locale } from "@/lib/routes";
import { AppleIcon, ArrowIcon } from "./icons";

export function DownloadButton({
  locale = "en",
  page = "",
  position = "hero",
  className = "",
}: {
  locale?: Locale;
  page?: string;
  position?: string;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 320, damping: 24, mass: 0.45 });
  const y = useSpring(rawY, { stiffness: 320, damping: 24, mass: 0.45 });

  function handlePointerMove(event: PointerEvent<HTMLAnchorElement>) {
    if (event.pointerType === "touch") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const nx = (event.clientX - rect.left) / rect.width - 0.5;
    const ny = (event.clientY - rect.top) / rect.height - 0.5;
    rawX.set(nx * 8);
    rawY.set(ny * 6);
  }

  function handlePointerLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.a
      ref={ref}
      className={`download-button ${className}`.trim()}
      href={downloadLink(locale, page)}
      data-download={position}
      style={{ x, y }}
      whileTap={{ scale: 0.975 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={() => trackEvent("download_click", { locale, page, position })}
    >
      <span className="btn-sheen" aria-hidden="true" />
      <AppleIcon />
      <span className="download-label">
        {locale === "zh" ? "免费下载" : "Download free"}
        <small>App Store</small>
      </span>
      <span className="arrow-track" aria-hidden="true">
        <ArrowIcon className="arrow-primary" />
        <ArrowIcon className="arrow-echo" />
      </span>
    </motion.a>
  );
}
