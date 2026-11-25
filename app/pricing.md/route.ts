import { appFacts, siteConfig } from "@/lib/site-config";
import { copyFor } from "@/lib/ui-copy";

export const dynamic = "force-static";

export function GET() {
  const en = copyFor("en");
  const tiers = en.proRows
    .map(([label, detail]) => `- **${label}:** ${detail}`)
    .join("\n");

  const markdown = `# ${siteConfig.name} (${siteConfig.chineseName}) Pricing & Capabilities

Last verified: ${appFacts.editorialUpdated} (App Store baseline v${appFacts.verifiedStoreVersion})
Official website: ${siteConfig.siteUrl}
Apple App Store: ${siteConfig.appStoreUrl} (App ID 6804919805)

## Plans & Purchase Model

- **Free Download ($0):** Available on the Apple App Store for iPhone and iPad (${appFacts.operatingSystem}). No separate PinyPiny account required.
- **Optional Pro (Apple In-App Purchase):** Offered as an auto-renewing subscription OR a one-time Lifetime purchase. Exact regional prices (USD, CNY, and other local App Store currencies) and terms are displayed directly in the app and Apple App Store.

## Included vs Optional Pro

${tiers}

## Technical & Privacy Facts

- **Platforms:** iPhone and iPad only (${appFacts.operatingSystem}). No Android, macOS, Windows, or web editor.
- **App languages (${appFacts.supportedLanguages.length}):** ${appFacts.supportedLanguages.join(", ")}.
- **Storage & offline mode:** Local-first on device. Core text editing, photo layout, on-device Sticker Studio photo cutouts, search, and card-stack browsing work offline. Uncached fonts, weather context, App Store transactions, and optional Pro private Apple iCloud sync require a network connection.
- **Export:** Saves finished pages as images to Apple Photos (Full export or Note content only). Image export is for sharing, not an editable backup or PDF document.

## Explicit Product Boundaries (What PinyPiny Does NOT Do)

- **No generative AI diary writing or auto-captioning:** Users write their own words. On-device subject recognition is used solely inside Sticker Studio for photo cutouts.
- **Not a drawing or Apple Pencil illustration app:** Pages are arranged with typography, photos, and photo stickers without drawing tools.
- **No downloadable third-party templates or PDF planner imports:** Website examples illustrate layout ideas only.
- **No automatic travel route tracking or collaborative web editing.**

## Support

- Email: ${siteConfig.supportEmail}
- Help page: ${siteConfig.siteUrl}/support
- Privacy policy: ${siteConfig.siteUrl}/privacy
`;

  return new Response(markdown, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
