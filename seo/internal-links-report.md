# Reverse Internal Linking Report (2026-11-25)

Measured directly from rendered `<main>` HTML across all 42 prerendered routes (sitewide `<header>` and `<footer>` chrome links excluded).

## Money & Hub Page Contextual Inbound Counts

| Target Page (EN / ZH pair) | Before (pre-optimization) | After (2026-11-25) | Click Depth from `/` | Status |
|---|---:|---:|---:|---|
| `/digital-scrapbook` & `/zh/digital-scrapbook` | 4 (slogan anchors only) | **14** | 1 | PASS (`>= 3`) |
| `/photo-journal` & `/zh/photo-journal` | 4 (slogan anchors only) | **15** | 1 | PASS (`>= 3`) |
| `/travel-journal` & `/zh/travel-journal` | 4 (slogan anchors only) | **12** | 1 | PASS (`>= 3`) |
| `/vs` & `/zh/vs` | did not exist | **8** | 1 | PASS (`>= 3`) |
| `/vs/apple-journal` & `/zh/vs/apple-journal` | did not exist | **5** | 2 | PASS (`>= 3`) |
| `/vs/day-one` & `/zh/vs/day-one` | did not exist | **5** | 2 | PASS (`>= 3`) |
| `/vs/zinnia` & `/zh/vs/zinnia` | did not exist | **5** | 2 | PASS (`>= 3`) |
| `/blog` & `/zh/blog` | did not exist | **7** | 1 | PASS (`>= 3`) |
| `/guides` & `/zh/guides` | 1 | **4** | 1 | PASS (`>= 3`) |

## Key Structural Improvements Shipped
1. **Upper-40% Contextual Links:** Every blog post and every step-by-step guide now links contextually to its matching money/scenario page within the opening 1-2 sections (`< 40%` of body text), plus an inline mid-article `<ProductCallout>` (`section.article-callout`) with a real `<Link>` and direct App Store download control.
2. **Hub-and-Spoke Discovery:**
   - Primary header nav updated to 4 clean items (`Made with PinyPiny` / `What you can make` / `Guides` / `Blog`).
   - Footer expanded to 3 balanced columns including a dedicated `Compare` (`产品对比`) column wiring `/vs`, `/vs/apple-journal`, `/vs/day-one`, `/vs/zinnia`.
   - Homepage `guides-section` now includes a compact editorial strip linking directly to `/blog`, all 4 blog posts, and `/vs`.
3. **Zero Orphan Money Pages:** Every commercial scenario page and comparison page has `5` to `15` contextual body links and sits `<= 2` clicks from `/` and `/zh`.
