"use client";

import { useEffect } from "react";

type Theme = "light" | "dark";

const storageKey = "tucked-theme";

export function ThemeToggle() {
  useEffect(() => {
    const savedTheme = window.localStorage.getItem(storageKey) as Theme | null;
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const nextTheme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : preferredTheme;

    document.documentElement.dataset.theme = nextTheme;
  }, []);

  function toggleTheme() {
    const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const nextTheme: Theme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(storageKey, nextTheme);
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle color theme">
      <span className="theme-glyph theme-glyph--toggle" aria-hidden="true" />
    </button>
  );
}
