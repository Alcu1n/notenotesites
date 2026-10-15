"use client";

import type { Locale } from "./routes";

export type AnalyticsEvent =
  | "download_click"
  | "demo_play"
  | "example_change"
  | "qr_open";
type EventContext = {
  locale: Locale;
  page: string;
  position?: string;
  example?: string;
};

export function trackEvent(name: AnalyticsEvent, context: EventContext) {
  try {
    if (navigator.doNotTrack === "1") return;
    const tracker = (
      window as Window & {
        umami?: { track: (name: string, data: EventContext) => void };
      }
    ).umami;
    tracker?.track(name, context);
  } catch {
    // Measurement must never interrupt navigation, video playback or examples.
  }
}
