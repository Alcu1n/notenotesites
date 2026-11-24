"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "motion/react";
import type { Locale } from "@/lib/routes";
import { trackEvent } from "@/lib/analytics";

const CHAPTER_MARKS = [0, 7, 14] as const;

function formatClock(sec: number) {
  const clamped = Math.max(0, Math.floor(sec));
  const m = String(Math.floor(clamped / 60)).padStart(2, "0");
  const s = String(clamped % 60).padStart(2, "0");
  return `${m}:${s}`;
}

export function AppDemo({
  locale,
  kicker,
  title,
  emphasis,
  text,
  steps,
  downloadSlot,
}: {
  locale: Locale;
  kicker: string;
  title: string;
  emphasis: string;
  text: string;
  steps: readonly string[];
  downloadSlot: ReactNode;
}) {
  const zh = locale === "zh";
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentSec, setCurrentSec] = useState(0);

  function handleTimeUpdate() {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const t = video.currentTime;
    setCurrentSec(t);
    setProgress(Math.min(100, (t / video.duration) * 100));
    if (t >= CHAPTER_MARKS[2]) setActiveStep(2);
    else if (t >= CHAPTER_MARKS[1]) setActiveStep(1);
    else setActiveStep(0);
  }

  function jumpToStep(index: number) {
    setActiveStep(index);
    const video = videoRef.current;
    if (!video) return;
    const targetTime = CHAPTER_MARKS[index] ?? 0;
    const seekAndPlay = () => {
      try {
        video.currentTime = targetTime;
      } catch {
        // Ignore seek failure before media metadata loads.
      }
      video.play().catch(() => {});
    };
    if (video.readyState >= 1) {
      seekAndPlay();
    } else {
      video.addEventListener("loadedmetadata", seekAndPlay, { once: true });
      video.load();
    }
  }

  return (
    <div className="demo-theater-grid">
      <div className="demo-copy">
        <p className="eyebrow">
          <span className="section-num">02</span>
          {kicker}
        </p>
        <h2>
          {title}
          <br />
          <em>{emphasis}</em>
        </h2>
        <p className="demo-lead">{text}</p>
        <ol
          className="demo-steps"
          aria-label={zh ? "录屏步骤" : "Recording moments"}
        >
          {steps.map((step, index) => {
            const isCurrent = activeStep === index;
            return (
              <li
                key={step}
                className={isCurrent ? "is-current" : undefined}
              >
                <button
                  type="button"
                  className="demo-step-btn"
                  onClick={() => jumpToStep(index)}
                  aria-current={isCurrent ? "step" : undefined}
                >
                  {isCurrent && (
                    <motion.span
                      layoutId="demo-chapter-bg"
                      className="demo-step-active-bg"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                      aria-hidden="true"
                    />
                  )}
                  <span className="step-num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="step-text">{step}</span>
                </button>
              </li>
            );
          })}
        </ol>
        <div className="demo-cta">{downloadSlot}</div>
      </div>

      <figure className={`demo-player${playing ? " is-playing" : ""}`}>
        <div className="demo-bezel">
          <div className="demo-bezel-bar" aria-hidden="true">
            <span className="demo-dot" />
            <span>
              {playing
                ? zh
                  ? "正在播放 · 1× 原速"
                  : "PLAYING · 1× SPEED"
                : zh
                  ? "真实录屏 · 1× 原速"
                  : "REAL CAPTURE · 1× SPEED"}
            </span>
            <span className="demo-time">
              {playing ? `${formatClock(currentSec)} / 00:21` : "00:21"}
            </span>
          </div>
          <div className="demo-video-wrap">
            <video
              ref={videoRef}
              controls
              playsInline
              preload="none"
              poster="/assets/pinypiny/showcase/demo-poster.webp"
              aria-label={
                zh
                  ? "拼拼笔记真实 App 操作演示"
                  : "PinyPiny real app demonstration"
              }
              onPlay={() => {
                setPlaying(true);
                trackEvent("demo_play", { locale, page: "", position: "demo" });
              }}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
              onTimeUpdate={handleTimeUpdate}
            >
              <source
                src="/assets/pinypiny/showcase/demo.mp4"
                type="video/mp4"
              />
              <track
                kind="captions"
                src={`/assets/pinypiny/showcase/demo-${locale}.vtt`}
                srcLang={zh ? "zh-CN" : "en"}
                label={zh ? "简体中文" : "English"}
                default
              />
              {zh
                ? "浏览器不支持视频。下方提供演示说明。"
                : "Your browser does not support video. Read the demonstration description below."}
            </video>
          </div>
          <div className="demo-progress-track" aria-hidden="true">
            <span style={{ width: `${progress}%` }} />
          </div>
        </div>
        <figcaption>
          {zh
            ? "真实 App 录屏：在预置示例页中选图、排版，再返回卡片堆。"
            : "Real app recording: adding and arranging a photo on a prepared example page, then returning to the stack."}
        </figcaption>
      </figure>
    </div>
  );
}
