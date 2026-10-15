# PinyPiny website

A static, bilingual Next.js 16 App Router marketing site for PinyPiny / 拼拼笔记. English URLs are unchanged; Simplified Chinese uses `/zh`. All 24 content pages are prerendered.

## Run

```sh
npm ci
npm run dev
```

## Verify

```sh
npm run lint
npm run typecheck
npm run build
npx playwright install chromium webkit
npm run test:e2e
```

E2E starts the production build on port 3100. Reports and traces: `output/playwright/report/` and `output/playwright/results/`. See `docs/verification.md` for the recorded acceptance run and simulated boundaries.

## Content and assets

- `lib/ui-copy.ts`: bilingual homepage copy and product FAQ.
- `lib/editorial-content.ts`: three distinct use cases and three practical guides per language.
- `lib/legal-content.ts`: full English and Simplified Chinese policies, with existing fragment identifiers preserved.
- `lib/routes.ts`, `lib/metadata.ts`: the shared route inventory and page metadata.
- `docs/keyword-map.md`: qualitative keyword evidence and page ownership; no fabricated volume estimates.
- `docs/media-provenance.md`: real app screenshot / recording sources, simulator fixtures and replay evidence.

Two root layouts set the correct HTML language without language detection or redirects. Switching languages performs a full navigation to the equivalent page. Theme preference is preserved, including old storage keys. Essential copy and downloads work without JavaScript.

## Production configuration

Copy the documented variables from `.env.example` into your existing hosting project. Do not commit `.env.local` or credentials.

| Variable | Behavior |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin; defaults to `https://pinypiny.lraitech.com`. |
| `NEXT_PUBLIC_APP_STORE_URL` | Apple app destination, default app ID 6804919805. |
| `NEXT_PUBLIC_APP_STORE_PROVIDER_TOKEN` | Real `pt` from an App Store Connect campaign link. Empty means ordinary download links; no attribution is claimed. |
| `NEXT_PUBLIC_UMAMI_WEBSITE_ID` | Umami website UUID. Empty means no analytics script. |
| `NEXT_PUBLIC_UMAMI_SCRIPT_URL` | Existing Umami script URL, default Cloud endpoint. |
| `GOOGLE_SITE_VERIFICATION` / `BING_SITE_VERIFICATION` | Optional ownership verification tokens. |

Public variables are fixed at build time, so rebuild after changing them. Umami is excluded in local development and Vercel preview deployments and restricted to the canonical domain. Only predefined event fields are sent; do not enable user identity or session replay. Download links and QR codes share the exact destination and continue to work when analytics is unavailable.

## Release checklist

1. Review the preview in both languages and themes. No production deployment is implied by a local build.
2. Register the existing domain in the user's Umami Hobby account and configure its real website ID; do not enable a paid trial.
3. Obtain the real provider token from App Store Connect; confirm `pt` and `ct` on the built links and scan a QR on a real device.
4. Add optional search verification tokens, publish, then submit `/sitemap.xml` to Google Search Console and Bing Webmaster Tools.
5. Confirm real events appear in Umami and review Apple campaign downloads after sufficient traffic. Apple requires at least five first-time users for a campaign to appear; missing data is not proof of zero downloads.

No App source, App Store metadata, account credentials, domain migration or paid service is changed by this project.
