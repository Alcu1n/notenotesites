"use client";

import { useEffect } from "react";

export function ScrollChoreography() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

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

    // Progressive scroll reveal choreography (strictly opt-in via JS; never hides content without JS or with reduced motion)
    let revealObserver: IntersectionObserver | null = null;
    if (!reducedMotion && "IntersectionObserver" in window) {
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
          { rootMargin: "0px 0px -6% 0px", threshold: 0.05 },
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
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      tocObserver?.disconnect();
      revealObserver?.disconnect();
    };
  }, []);

  return <div className="scroll-progress-bar" aria-hidden="true" />;
}
