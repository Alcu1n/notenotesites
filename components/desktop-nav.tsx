"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";

export function DesktopNav({
  label,
  items,
}: {
  label: string;
  items: { href: string; text: string; active: boolean }[];
}) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav
      className="desktop-nav"
      aria-label={label}
      onMouseLeave={() => setHovered(null)}
    >
      {items.map((item) => {
        const isHighlighted = hovered === item.href || (!hovered && item.active);
        return (
          <Link
            href={item.href}
            key={item.href}
            className={item.active ? "is-active" : undefined}
            aria-current={item.active ? "page" : undefined}
            onMouseEnter={() => setHovered(item.href)}
            onFocus={() => setHovered(item.href)}
            onBlur={() => setHovered(null)}
          >
            {isHighlighted && (
              <motion.span
                layoutId="desktop-nav-pill"
                className="nav-hover-pill"
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 32,
                }}
                aria-hidden="true"
              />
            )}
            <span className="nav-link-text">{item.text}</span>
          </Link>
        );
      })}
    </nav>
  );
}
