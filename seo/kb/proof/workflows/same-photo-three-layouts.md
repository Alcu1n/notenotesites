---
id: proof-wf-same-photo-layouts
category: workflows
date: 2026-10-15
topics: [digital-scrapbook, photo-journal, layouts, composition]
verified: true
source: docs/media-provenance.md, docs/media-fixtures/{minimal,journal,collage}.json
---

# Same-Photo Native Rendering Across Minimal, Journal, and Collage Layouts

## Methodology
The exact same licensed coastal photograph (`CreativeCoast.imageset/photo.jpg`, Pexels 18118570, SHA-256 `f5cde058...`) was rendered inside PinyPiny in three distinct native `SpatialNoteDocument` layouts (`same-minimal.webp`, `same-journal.webp`, `same-collage.webp`, captured at 1170x2532 and scaled to 780x1688 WebP).

## Observed Mechanics
- **Minimal layout:** One dominant image with generous empty paper and a single short caption line. Fastest path (under 2 minutes) when the photo carries the memory.
- **Journal layout:** Balanced photo-to-text ratio leaving a clear reading column for 1-3 short paragraphs about off-camera details (conversation, weather, mood).
- **Collage layout:** Primary photo framed (e.g., Pro Polaroid style), tilted slightly, paired with a cutout sticker (`CreativeLemon-cutout`) and scattered short phrases.

## Failure & Edge-Case Note
Rotating every element at a different angle or introducing more than one accent color makes mobile-width pages (390pt) hard to scan. Anchoring one dominant image first and keeping body text horizontal preserves legibility.

## Reusable Snippet
Minimal, Journal, and Collage are not locked templates in PinyPiny; they are three spatial balances you can build from the same photograph on any blank page.
