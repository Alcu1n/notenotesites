"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const storageKey = "pinnia-theme";
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

  const savedTheme = (window.localStorage.getItem(storageKey) ??
    window.localStorage.getItem(legacyStorageKey)) as Theme | null;
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
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

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeToTheme, getTheme, getServerTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = getTheme();
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(storageKey, nextTheme);
    themeListeners.forEach((listener) => listener());
  }

  const nextTheme = theme === "dark" ? "light" : "dark";
  const label = `Switch to ${nextTheme} mode`;

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={label} title={label}>
      {theme === "dark" ? (
        <svg
          className="theme-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2.5v2M12 19.5v2M4.4 4.4l1.4 1.4M18.2 18.2l1.4 1.4M2.5 12h2M19.5 12h2M4.4 19.6l1.4-1.4M18.2 5.8l1.4-1.4" />
        </svg>
      ) : (
        <svg
          className="theme-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20.2 15.1A8.2 8.2 0 0 1 8.9 3.8 8.2 8.2 0 1 0 20.2 15.1Z" />
        </svg>
      )}
    </button>
  );
}
