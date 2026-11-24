"use client";

import { useEffect, useId, useRef, useSyncExternalStore } from "react";
import { flushSync } from "react-dom";
import { motion } from "motion/react";

type Theme = "light" | "dark";

const storageKey = "pinypiny-theme";
const legacyStorageKey = "driftleaf-theme";

const themeListeners = new Set<() => void>();

function getTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const appliedTheme = document.documentElement.dataset.theme;
  if (appliedTheme === "dark" || appliedTheme === "light") {
    return appliedTheme;
  }

  let savedTheme: Theme | null = null;
  try {
    savedTheme = (window.localStorage.getItem(storageKey) ??
      window.localStorage.getItem("pinnia-theme") ??
      window.localStorage.getItem(legacyStorageKey)) as Theme | null;
  } catch {
    /* Storage can be unavailable in private contexts. */
  }
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function subscribeToTheme(listener: () => void) {
  themeListeners.add(listener);
  return () => {
    themeListeners.delete(listener);
  };
}

function getServerTheme(): Theme {
  return "light";
}

type ViewTransitionDoc = Document & {
  startViewTransition?: (cb: () => void) => { ready: Promise<void> };
};

export function ThemeToggle({ locale = "en" }: { locale?: "en" | "zh" }) {
  const maskId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getTheme,
    getServerTheme,
  );

  useEffect(() => {
    document.documentElement.dataset.theme = getTheme();
  }, []);

  const isDark = theme === "dark";

  function applyTheme(nextTheme: Theme) {
    document.documentElement.dataset.theme = nextTheme;
    try {
      window.localStorage.setItem(storageKey, nextTheme);
    } catch {
      /* The current page still changes theme. */
    }
    themeListeners.forEach((listener) => listener());
  }

  function toggleTheme() {
    const nextTheme: Theme = isDark ? "light" : "dark";
    const doc = document as ViewTransitionDoc;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!doc.startViewTransition || reducedMotion) {
      applyTheme(nextTheme);
      return;
    }

    const rect = buttonRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth - 64;
    const y = rect ? rect.top + rect.height / 2 : 40;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    // Persist immediately so rapid navigation/reload always reads the new choice
    try {
      window.localStorage.setItem(storageKey, nextTheme);
    } catch {
      /* ignore */
    }

    document.documentElement.dataset.themeTransition = nextTheme;
    const transition = doc.startViewTransition(() => {
      flushSync(() => {
        applyTheme(nextTheme);
      });
    });

    transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 560,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      })
      .catch(() => {})
      .finally(() => {
        window.setTimeout(() => {
          delete document.documentElement.dataset.themeTransition;
        }, 620);
      });
  }

  const nextTheme = isDark ? "light" : "dark";
  const label =
    locale === "zh"
      ? `切换为${nextTheme === "dark" ? "深" : "浅"}色模式`
      : `Switch to ${nextTheme} mode`;

  return (
    <button
      ref={buttonRef}
      className={`theme-toggle${isDark ? " is-dark" : " is-light"}`}
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
    >
      <span className="theme-track" aria-hidden="true">
        <span className="theme-sky-glow" />
        <span className="theme-stars">
          <span className="theme-star theme-star--1" />
          <span className="theme-star theme-star--2" />
          <span className="theme-star theme-star--3" />
        </span>
        <span className="theme-recess-moon" aria-hidden="true">
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M11.6 9.8A5.1 5.1 0 0 1 6.2 4.4a5.2 5.2 0 0 1 .4-2 5.4 5.4 0 1 0 7 7 5.2 5.2 0 0 1-2 .4Z" />
          </svg>
        </span>

        <motion.span
          className="theme-thumb"
          layout
          transition={{
            type: "spring",
            stiffness: 520,
            damping: 34,
            mass: 0.75,
          }}
        >
          <svg
            className="theme-eclipse-svg"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <mask id={maskId}>
                <rect x="0" y="0" width="24" height="24" fill="white" />
                <motion.circle
                  cx={isDark ? 16.2 : 25}
                  cy={isDark ? 8.2 : 4}
                  r={isDark ? 6.4 : 5}
                  fill="black"
                  initial={false}
                  animate={{
                    cx: isDark ? 16.2 : 25,
                    cy: isDark ? 8.2 : 4,
                    r: isDark ? 6.4 : 5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 340,
                    damping: 26,
                  }}
                />
              </mask>
            </defs>

            {/* Solar Corona Rays */}
            <motion.g
              stroke="currentColor"
              strokeWidth="1.65"
              strokeLinecap="round"
              initial={false}
              animate={{
                rotate: isDark ? -55 : 0,
                scale: isDark ? 0.35 : 1,
                opacity: isDark ? 0 : 1,
              }}
              transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "12px 12px" }}
            >
              <line x1="12" y1="2.3" x2="12" y2="4.3" />
              <line x1="12" y1="19.7" x2="12" y2="21.7" />
              <line x1="2.3" y1="12" x2="4.3" y2="12" />
              <line x1="19.7" y1="12" x2="21.7" y2="12" />
              <line x1="5.1" y1="5.1" x2="6.6" y2="6.6" />
              <line x1="17.4" y1="17.4" x2="18.9" y2="18.9" />
              <line x1="18.9" y1="5.1" x2="17.4" y2="6.6" />
              <line x1="6.6" y1="17.4" x2="5.1" y2="18.9" />
            </motion.g>

            {/* Celestial Core (Sun <-> Eclipsed Crescent Moon) */}
            <motion.circle
              cx="12"
              cy="12"
              fill="currentColor"
              mask={`url(#${maskId})`}
              initial={false}
              animate={{
                r: isDark ? 7.2 : 4.8,
                rotate: isDark ? -18 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 360,
                damping: 26,
              }}
              style={{ transformOrigin: "12px 12px" }}
            />

            {/* Delicate Crescent Sparkle */}
            <motion.path
              d="M18.2 4.8l.45 1.35 1.35.45-1.35.45-.45 1.35-.45-1.35-1.35-.45 1.35-.45.45-1.35Z"
              fill="currentColor"
              initial={false}
              animate={{
                scale: isDark ? 1 : 0,
                opacity: isDark ? 0.9 : 0,
                rotate: isDark ? 0 : -45,
              }}
              transition={{
                duration: 0.34,
                delay: isDark ? 0.1 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformOrigin: "18.2px 6.6px" }}
            />
          </svg>
        </motion.span>
      </span>
    </button>
  );
}
