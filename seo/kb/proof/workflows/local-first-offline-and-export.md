---
id: proof-wf-local-first-export
category: workflows
date: 2026-10-15
topics: [privacy, offline, icloud-sync, image-export]
verified: true
source: PRODUCT.md, docs/media-provenance.md, lib/ui-copy.ts
---

# Local-First Storage, Offline Boundaries, and Export Scope

## Methodology
Verified against `PRODUCT.md`, `lib/legal-content.ts`, and native export sheet capture (`export.webp`: Full export vs Note content only).

## Observed Mechanics
- **Local-first default:** Notes and photos stay on-device with zero mandatory third-party account registration. Core editing works in airplane mode or low-signal travel environments.
- **Network-dependent boundaries:** Uncached fonts, weather lookup, App Store Pro transactions, and optional Pro private Apple iCloud sync require connectivity.
- **Two image export scopes:** Native export offers Full export or Note content only as a raster image saved to Apple Photos.

## Failure & Edge-Case Note
Exporting an image to Photos creates a flat shareable picture, not an editable backup. Deleting the app or local device data while troubleshooting iCloud sync risks losing un-synced notes; always keep local data intact and remember iCloud sync is not an independent archival backup. Also inspect photographed tickets or receipts for names and booking codes before sharing exported images.

## Reusable Snippet
Core editing runs locally on your iPhone or iPad without an account or internet connection, while image export creates a flat copy for Photos rather than an editable backup.
