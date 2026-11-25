"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import { motion, useScroll, useSpring } from "motion/react";
import type { Locale } from "@/lib/routes";

export function ScrollChoreography({ locale = "en" }: { locale?: Locale }) {
  const zh = locale === "zh";
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    restDelta: 0.0005,
  });
  const [showBackTop, setShowBackTop] = useState(false);
  const [ringProgress, setRingProgress] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Inertial Lenis smooth scrolling on desktop / standard motion
    let lenis: Lenis | null = null;
    let lenisRaf = 0;

    if (!reducedMotion && window.matchMedia("(pointer: fine)").matches) {
      lenis = new Lenis({
        lerp: 0.095,
        smoothWheel: true,
        wheelMultiplier: 0.95,
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        lenisRaf = window.requestAnimationFrame(raf);
      };
      lenisRaf = window.requestAnimationFrame(raf);

      // Enhance same-page hash anchors cleanly with Lenis
      const onAnchorClick = (event: MouseEvent) => {
        const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>(
          'a[href^="#"]',
        );
        if (!anchor) return;
        const hash = anchor.getAttribute("href");
        if (!hash || hash === "#") return;
        const target = document.getElementById(hash.slice(1));
        if (!target || !lenis) return;
        event.preventDefault();
        lenis.scrollTo(target, { offset: -88, duration: 1.05 });
        window.history.pushState(null, "", hash);
      };
      document.addEventListener("click", onAnchorClick);

      const cleanupLenisClick = () =>
        document.removeEventListener("click", onAnchorClick);

      (lenis as Lenis & { __cleanupClick?: () => void }).__cleanupClick =
        cleanupLenisClick;
    }

    let rafId = 0;
    const syncScroll = () => {
      rafId = 0;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const progress = Math.min(1, Math.max(0, scrollTop / maxScroll));
      root.style.setProperty("--scroll-progress", progress.toFixed(4));
      root.dataset.scrolled = scrollTop > 24 ? "true" : "false";
      setShowBackTop(scrollTop > 520);
      setRingProgress(progress);
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(syncScroll);
      }
    };

    syncScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Scroll-spy for sticky article TOC links
    const tocLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(
        '.article-index a[href^="#"]',
      ),
    );
    let tocObserver: IntersectionObserver | null = null;

    if (tocLinks.length > 0 && "IntersectionObserver" in window) {
      const linkMap = new Map<string, HTMLAnchorElement>();
      const targets: Element[] = [];
      for (const link of tocLinks) {
        const id = link.getAttribute("href")?.slice(1);
        if (!id) continue;
        const target = document.getElementById(id);
        if (target) {
          linkMap.set(id, link);
          targets.push(target);
        }
      }

      if (targets.length > 0) {
        const setActive = (activeId: string) => {
          for (const [id, link] of linkMap) {
            if (id === activeId) {
              link.classList.add("is-active");
              link.setAttribute("aria-current", "location");
            } else {
              link.classList.remove("is-active");
              link.removeAttribute("aria-current");
            }
          }
        };

        setActive(targets[0].id);

        tocObserver = new IntersectionObserver(
          (entries) => {
            const visible = entries
              .filter((entry) => entry.isIntersecting)
              .sort(
                (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
              );
            if (visible[0]) {
              setActive(visible[0].target.id);
            }
          },
          { rootMargin: "-14% 0px -62% 0px", threshold: 0 },
        );

        for (const target of targets) {
          tocObserver.observe(target);
        }
      }
    }

    // Progressive scroll reveal choreography (100% visible without JS, under reduced motion, or for search/AI crawlers)
    const isAutomatedCrawler =
      navigator.webdriver ||
      /(bot|crawler|spider|googlebot|bingbot|duckduckbot|baiduspider|yandex|slurp|gptbot|oai-searchbot|chatgpt|perplexity|claudebot|lighthouse|pagespeed|headless)/i.test(
        navigator.userAgent,
      );
    let revealObserver: IntersectionObserver | null = null;
    if (!reducedMotion && !isAutomatedCrawler && "IntersectionObserver" in window) {
      const nodes = Array.from(
        document.querySelectorAll<HTMLElement>("[data-reveal]"),
      );
      if (nodes.length > 0) {
        const viewportH = window.innerHeight || 900;
        for (const el of nodes) {
          const rect = el.getBoundingClientRect();
          if (rect.top < viewportH * 0.96) {
            el.dataset.reveal = "visible";
          } else {
            el.dataset.reveal = "pending";
          }
        }
        root.dataset.motion = "ready";

        revealObserver = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                const target = entry.target as HTMLElement;
                target.dataset.reveal = "visible";
                revealObserver?.unobserve(target);
              }
            }
          },
          { rootMargin: "0px 0px -6% 0px", threshold: 0.04 },
        );

        for (const el of nodes) {
          if (el.dataset.reveal === "pending") {
            revealObserver.observe(el);
          }
        }
      }
    }

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      if (lenisRaf) window.cancelAnimationFrame(lenisRaf);
      if (lenis) {
        (lenis as Lenis & { __cleanupClick?: () => void }).__cleanupClick?.();
        lenis.destroy();
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      tocObserver?.disconnect();
      revealObserver?.disconnect();
    };
  }, []);

  const circumference = 2 * Math.PI * 19;

  return (
    <>
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX }}
        aria-hidden="true"
      />
      <button
        type="button"
        className={`orbital-top-btn${showBackTop ? " is-visible" : ""}`}
        aria-label={zh ? "回到顶部" : "Back to top"}
        title={zh ? "回到顶部" : "Back to top"}
        tabIndex={showBackTop ? 0 : -1}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg className="orbital-ring" viewBox="0 0 44 44" aria-hidden="true">
          <circle
            className="orbital-track"
            cx="22"
            cy="22"
            r="19"
            fill="none"
            strokeWidth="1.5"
          />
          <circle
            className="orbital-progress"
            cx="22"
            cy="22"
            r="19"
            fill="none"
            strokeWidth="1.75"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - ringProgress)}
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="orbital-arrow"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 19V5" />
          <path d="m6 11 6-6 6 6" />
        </svg>
      </button>
    </>
  );
}
