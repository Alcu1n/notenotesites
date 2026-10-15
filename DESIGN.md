# PinyPiny website design

## Direction

A warm-paper portfolio with a dark card-stack stage. The visitor sees a finished real page, learns how it was made, then downloads. Keep product content visible; no web-editor imitation, decorative mock notes or fabricated social proof.

## Visual system

- Paper `#faf7ef`, ink `#292b24`, muted `#62645b`, accent `#934138`, stage `#1c211c`. Dark mode uses the same semantic variables in app/globals.css.
- Self-hosted Space Grotesk and Instrument Serif. Chinese titles use native Songti fallback; body uses native CJK sans. Clear scale, fine rules and deliberate spacing.
- Content maximum 1160px, outer shell 1440px. On mobile, the hero places the actual page result before its download action so both fit a 390×844 screen. The compact stage shows a crop of the real page; galleries preserve complete screenshots.
- The current main app icon is used for branding and generated favicon / touch icons. No alternate icon is substituted for dark mode.

## Composition and interaction

Home: actual collage + card-stack hero; three concrete use cases; native recording; three native layouts from one photo; factual features and Pro boundaries; seven prompts; three guides; FAQ; download close.

Scenario pages pair a finished page with practical explanations and an associated guide. Guides offer author/date, contents, actual steps, screenshots and related scenes. About/support give verifiable product information. Both policies preserve old fragment identifiers and use a comfortable reading measure.

Native disclosures provide mobile navigation, QR and FAQ. The style selector uses pressed buttons and an announced selection. Video has user controls, captions and no eager video download. On mobile the download bar appears after the primary download leaves the viewport; reserved footer space prevents covering content. Theme choice, language equivalents, keyboard focus and reduced motion remain available.

## Verification

See docs/verification.md for the exact build, browser, screen-size and service boundaries of the completed acceptance run. A build is not rendered acceptance; website click tests are not live App Store install attribution.
