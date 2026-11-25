---
id: proof-wf-sticker-cutouts
category: workflows
date: 2026-10-15
topics: [photo-stickers, digital-scrapbook, iphone-workflow]
verified: true
source: docs/media-provenance.md, lib/editorial-content.ts, PRODUCT.md
---

# On-Device Sticker Studio: Library vs Camera Subject Cutouts

## Methodology
Verified against PinyPiny v1.0.3 behavior and native Simulator fixture recording (`docs/media-provenance.md`, `sticker.webp`, `CreativeLemon-cutout` Vision cutout derivative).

## Observed Mechanics
- **Photos library route:** Opens system photo picker, runs on-device subject detection, lets the user tap one or multiple detected subjects, then generates a transparent cutout preview before adding it to the note.
- **Camera route:** Captures a new photo and automatically generates a preview from the primary detected subject before confirmation.
- **On-device processing:** Subject extraction runs locally on the iPhone or iPad rather than uploading photos to a third-party server.

## Failure & Edge-Case Note
Transparent glass, fine hair, heavy cast shadows, motion blur, or busy backgrounds cause incomplete edge masks. Switching to a higher-contrast angle or selecting manually via the Photos route fixes most failed camera cutouts.

## Reusable Snippet
Sticker Studio separates subjects directly on your iPhone or iPad, giving you manual multi-subject selection from existing Photos and automatic main-subject preview from the Camera.
