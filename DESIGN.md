# PinyPiny website design

The site keeps the app's paper character while giving its real screenshots priority. The English brand is PinyPiny; the Chinese name is 拼拼笔记. Product facts live in PRODUCT.md.

## Visual system

- Warm paper (#faf7ef), dark ink (#292b24), muted text (#62645b), and restrained terracotta (#a3462e). Dark mode uses the corresponding tokens in app/globals.css.
- Self-hosted Space Grotesk for text and headings; Instrument Serif italic for selected heading emphasis. Display type is capped at 6rem, tracking at -0.04em.
- A 1160px content maximum, fine rules, and whitespace establish hierarchy. Avoid hard shadows, simulated note decorations, and colored feature cards.
- Actual app screenshots retain their full aspect ratios. The hero has a soft shadow; gallery images sit on quiet paper surfaces. Do not tint screenshots for dark mode.

## Page composition

Home: a concise introduction and real card-stack screenshot, three examples of note content, a text-led feature section, and an App Store close. Gallery offsets disappear on phones. Download buttons default to https://apps.apple.com/app/id6804919805; NEXT_PUBLIC_APP_STORE_URL can override the destination.

Privacy and terms: a plain reading surface, complete route-specific contents, 72ch maximum article width, and 1.8 body line height. Desktop contents are sticky; phone contents are inline. Existing fragment IDs remain compatible.

## Interaction and verification

Links and controls have visible keyboard focus. Navigation and contents links have 44px minimum height. The skip link, reduced-motion behavior, and persistent theme choice remain supported, including older stored theme keys.

Verified locally at 1440px and 390px in a production build, with additional overflow checks at 320px and 768px. Light/dark home screenshots and both legal pages were inspected. Brand text, page titles, loaded images, fragment destinations, theme persistence, and keyboard focus passed. No production deployment is implied.
