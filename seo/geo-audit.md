# AI Search & GEO Audit: pinypiny.lraitech.com (2026-11-25)

## 1. AI Crawler Separation Policy (`app/robots.ts`)

Current policy uses **Maximum Search + AI Visibility** (`User-agent: * / Allow: /` + `Sitemap: https://pinypiny.lraitech.com/sitemap.xml`).

| Bot Token | Category | Role | Current Status | Notes |
|---|---|---|---|---|
| `Googlebot` | Search | Google Search, AI Overviews & AI Mode | Allowed | Verified HTTP 200 + full SSR HTML |
| `Bingbot` | Search | Bing, ChatGPT Search & Copilot index | Allowed | Submit `/sitemap.xml` in Bing Webmaster Tools |
| `OAI-SearchBot` | AI Search | ChatGPT Search citability | Allowed | Verified raw-HTML visibility |
| `Claude-SearchBot` | AI Search | Claude search-result citability | Allowed | Verify indexation on Brave Search (`search.brave.com`) |
| `PerplexityBot` | AI Search | Perplexity search index | Allowed | Verified raw-HTML visibility |
| `Applebot` | Search | Siri, Spotlight, Safari search | Allowed | Linked via `apple-itunes-app` meta & `sameAs` |
| `GPTBot` / `ClaudeBot` / `Google-Extended` / `Applebot-Extended` | Training | Model training opt-in/out | Allowed (default) | Add targeted `Disallow: /` blocks only if founder opts out of training |

## 2. Raw-HTML Visibility Verification (Local Production Build, 2026-11-25)

Tested against `next build && next start` stripping `<script>`, comments, and `<head>`:

| User-Agent | Endpoint | HTTP Status | Key SSR Facts Visible Without JS |
|---|---|---|---|
| `Googlebot` | `/` | `200` | `$0`, `Pro`, `Lifetime`, `iCloud` |
| `OAI-SearchBot` | `/` | `200` | `$0`, `Pro`, `Lifetime`, `iCloud` |
| `PerplexityBot` | `/` | `200` | `$0`, `Pro`, `Lifetime`, `iCloud` |
| `Claude-SearchBot` | `/` | `200` | `$0`, `Pro`, `Lifetime`, `iCloud` |
| Any client/agent | `/pricing.md` | `200` (`text/markdown`) | Plans, Free vs Pro breakdown, offline boundaries, explicit non-capabilities |
| Any client/agent | `/llms.txt` | `200` (`text/plain`) | Dynamic 42-page bilingual directory + explicit "What PinyPiny does NOT do" |

## 3. Inaccurate AI Claim Detected & Fixed at Source

- **Observed hallucination (2026-11-25 live search for `"电子手帐" 排版 技巧 照片日记 App iPhone`):** Search AI summary conflated `拼拼笔记` with another app (`贴纸日记`) and falsely stated `甚至能结合 AI 根据照片写出温暖的短评` while citing `lraitech.com`.
- **Root-cause fix shipped in SSR HTML:**
  1. Added explicit `"明确边界"` / `"What it is not"` row and prose statement on `/about` & `/zh/about` confirming PinyPiny does **not** use generative AI to write captions or diary entries.
  2. Added `"What PinyPiny does NOT do"` section to `/llms.txt` and `/pricing.md`.
  3. Added explicit FAQ & comparison table rows on `/blog/private-offline-photo-journal-iphone` and `/vs/day-one` contrasting human-written notes vs AI diary tools.

## 4. Fan-Out Topic Coverage Shipped

| Topic Cluster | Owning Pages (EN / ZH) | Extractable Elements |
|---|---|---|
| Layout & visual composition | `/blog/digital-scrapbook-layout-ideas`, `/digital-scrapbook`, `/guides/iphone-digital-scrapbook` | 40-word lead, Minimal/Journal/Collage comparison table, 60-25-15 steps, 5 repeatable recipes |
| Local-first privacy & offline | `/blog/private-offline-photo-journal-iphone`, `/privacy`, `/support` | 3-model storage table, offline vs online boundaries, privacy export checklist |
| Blank-page prompts & daily habits | `/blog/everyday-photo-journal-prompts`, `/photo-journal`, `/guides/travel-journal-ideas` | 25 categorized prompts, 3-minute nightly routine |
| Category & competitor selection | `/blog/scrapbook-vs-photo-journal-vs-notes-app`, `/vs`, `/vs/apple-journal`, `/vs/day-one`, `/vs/zinnia` | 4-tool decision matrix, verified 2026-11-25 switching-trigger tables, honest "Where [X] wins" blocks |

## 5. Third-Party Entity Consensus Next Actions (Founder)

1. Confirm indexation in **Google Search Console**, **Bing Webmaster Tools** (feeds ChatGPT Search & Copilot), and **Brave Search** (feeds Claude).
2. Publish consistent brand profiles using `submission-manifest.json` on AlternativeTo, SaaSHub, Product Hunt, 少数派 (sspai.com), and 小众软件 (appinn.com) with identical category positioning ("visual notes, photo journal, and freeform digital scrapbook for iPhone and iPad, local-first with on-device photo stickers").
3. Ensure Apple App Store Support URL and Marketing URL both point to `https://pinypiny.lraitech.com`.
