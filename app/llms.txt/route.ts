import { siteConfig } from "@/lib/site-config";
import { pageDescription } from "@/lib/metadata";
import { routeSlugs, localizedPath } from "@/lib/routes";
export const dynamic = "force-static";
export function GET() {
  const text = `# PinyPiny / 拼拼笔记\n\n> A visual notes and collage journal app for iPhone and iPad (iOS/iPadOS 18+), made by LRAI STUDIO and @lemon.\n\nFree to download, with optional Pro in-app purchases. Arrange text, photos and cut-out stickers; revisit notes in a card stack; export pages as images. Pro includes additional papers/fonts, inline photos, special photo frames, animation and private Apple iCloud sync. Core editing works offline. This website is not an online editor.\n\n## Official pages\n${(["en", "zh"] as const).flatMap((locale) => routeSlugs.map((page) => `- [${pageDescription(locale, page).title}](${siteConfig.siteUrl}${localizedPath(locale, page)}): ${pageDescription(locale, page).description}`)).join("\n")}\n\n## Download and contact\n- [App Store](${siteConfig.appStoreUrl})\n- Support: ${siteConfig.supportEmail}\n\nThis is a convenience index. The linked pages contain the current product details and policies.\n`;
  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
