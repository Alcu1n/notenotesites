import type { Locale } from "./routes";
import type { ScenarioSlug, GuideSlug } from "./editorial-content";

export const blogSlugs = [
  "digital-scrapbook-layout-ideas",
  "private-offline-photo-journal-iphone",
  "everyday-photo-journal-prompts",
  "scrapbook-vs-photo-journal-vs-notes-app",
] as const;

export type BlogSlug = (typeof blogSlugs)[number];

export type BlogImageKey =
  | "daily"
  | "travel"
  | "inspiration"
  | "sticker"
  | "stack"
  | "paper"
  | "export";

export type BlogTable = {
  caption: string;
  headers: string[];
  rows: string[][];
};

export type BlogSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  steps?: string[];
  table?: BlogTable;
  image?: BlogImageKey;
  caption?: string;
};

export type BlogCallout = {
  eyebrow: string;
  title: string;
  body: string;
  linkLabel: string;
  targetSlug: string;
};

export type BlogPost = {
  slug: BlogSlug;
  title: string;
  description: string;
  category: string;
  heading: string;
  intro: string;
  minutes: number;
  publishedAt: string;
  updatedAt: string;
  coverImage: BlogImageKey;
  coverAlt: string;
  primaryScenario: ScenarioSlug;
  relatedGuides: GuideSlug[];
  relatedBlogSlugs: BlogSlug[];
  calloutAfterSectionIndex: number;
  callout: BlogCallout;
  sections: BlogSection[];
  faq: { question: string; answer: string }[];
};

const posts: Record<Locale, Record<BlogSlug, BlogPost>> = {
  en: {
    "digital-scrapbook-layout-ideas": {
      slug: "digital-scrapbook-layout-ideas",
      title: "Digital Scrapbook Layout Ideas for iPhone | PinyPiny",
      description:
        "Learn practical digital scrapbook layout ideas for iPhone photos. Compare Minimal, Journal, and Collage structures with clear spacing and color rules.",
      category: "Layout craft",
      heading: "Digital scrapbook layout ideas that work on an iPhone screen.",
      intro:
        "Good digital scrapbook layouts on iPhone start with one dominant photo, readable horizontal text, and at least 25 percent open paper. Instead of chasing complex templates, you can reuse three reliable page structures (Minimal, Journal, and Collage) for almost any camera-roll photo.",
      minutes: 7,
      publishedAt: "2026-11-25",
      updatedAt: "2026-11-25",
      coverImage: "inspiration",
      coverAlt:
        "PinyPiny digital scrapbook page balancing a main photograph, short caption, and cutout sticker on warm paper",
      primaryScenario: "digital-scrapbook",
      relatedGuides: ["iphone-digital-scrapbook", "photo-stickers"],
      relatedBlogSlugs: [
        "everyday-photo-journal-prompts",
        "scrapbook-vs-photo-journal-vs-notes-app",
      ],
      calloutAfterSectionIndex: 1,
      callout: {
        eyebrow: "TRY IT ON ONE PHOTO",
        title: "Build all three layouts on a freeform canvas",
        body: "PinyPiny lets you move, resize, and layer ordinary photos, text blocks, and on-device photo stickers on iPhone and iPad. Start free with core editing, with optional Pro for extra papers, fonts, and special photo frames.",
        linkLabel: "Explore the digital scrapbook app",
        targetSlug: "digital-scrapbook",
      },
      sections: [
        {
          id: "why-phone-layouts-break",
          title: "Why do desktop scrapbook templates fail on iPhone?",
          paragraphs: [
            "Desktop 12x12 scrapbook spreads break on iPhone because a 390-point phone screen cannot hold five equal photos, ornate borders, and three cursive fonts without becoming unreadable. When every element fights for attention, your eye leaves the page instead of reading the memory.",
            "Designing for a vertical mobile canvas reverses the rule. One anchor photograph establishes the scene, short text carries the context that the lens missed, and open background paper gives the viewer room to breathe. You can apply this approach in any [digital scrapbook app for iPhone](/digital-scrapbook) without downloading rigid template packs.",
          ],
        },
        {
          id: "three-core-structures",
          title: "Three layout structures for the same photograph",
          paragraphs: [
            "When we rendered the exact same coastal photo inside PinyPiny across three native layouts, the story changed completely based on spacing alone. Minimal, Journal, and Collage are not locked modes; they are three ratios between photo area, written text, and decorative detail.",
            "Use the matrix below to pick the right layout in ten seconds before moving anything on the canvas.",
          ],
          table: {
            caption: "Comparison of Minimal, Journal, and Collage page structures on iPhone",
            headers: [
              "Layout",
              "Best photo & mood",
              "Element budget",
              "Time to finish",
            ],
            rows: [
              [
                "Minimal",
                "One strong candid, sunset, or quiet scene that speaks for itself",
                "1 large photo + 1 short title or date line",
                "1-2 minutes",
              ],
              [
                "Journal",
                "Ordinary day or meal where the conversation matters more than the shot",
                "1 medium photo + 1-3 short paragraphs + generous margins",
                "3-5 minutes",
              ],
              [
                "Collage",
                "Trips, cafe tables, or weekend highlights with tangible objects",
                "1 anchor photo (optional Pro frame) + 1 cutout sticker + 2-3 short captions",
                "5-8 minutes",
              ],
            ],
          },
          image: "daily",
          caption:
            "Real PinyPiny layout example showing one focal photograph balanced with readable daily text and a cutout detail.",
        },
        {
          id: "focal-hierarchy-and-grid",
          title: "The 60-25-15 visual hierarchy rule",
          paragraphs: [
            "If a page feels messy, the culprit is almost always equal sizing. Two medium photos stacked next to each other compete visually, leaving the reader unsure where to look first.",
            "Give your primary photo roughly 50 to 60 percent of the active canvas, leave 25 percent as visible paper background, and reserve the remaining space for text and one personal detail. If you add a second image, shrink it to a clear supporting role or turn a single object from that photo into a transparent cutout using our [photo sticker guide](/guides/photo-stickers).",
          ],
          steps: [
            "Place the strongest photo first and scale it until it anchors the top or center-left.",
            "Keep body captions horizontal so they stay fast to scan on a phone screen.",
            "Tilt at most one element slightly (3 to 6 degrees) if you want a tactile paper look.",
            "Step back at normal reading size and delete one item if the margins feel tight.",
          ],
        },
        {
          id: "color-and-type-pairing",
          title: "How to pair fonts and accent colors without clutter",
          paragraphs: [
            "Using four bright colors makes a personal page look like a flyer. Pull one accent color directly from the photograph, such as terracotta from a brick wall or sage from a coffee cup, and repeat it once in the headline and once in a small date label.",
            "Keep typography equally disciplined. Pair one expressive title treatment with a plain, legible body style. On a [daily photo journal](/photo-journal) page, clear contrast between the dark ink and warm paper matters far more than decorative script fonts.",
          ],
          bullets: [
            "Title vs body size: make your heading at least 1.5x larger than the caption so the hierarchy reads at a glance.",
            "One accent color rule: let the photograph supply color; keep 90 percent of text neutral.",
            "Short line lengths: break reflections into 2-sentence paragraphs instead of dense wall-of-text blocks.",
          ],
        },
        {
          id: "five-repeatable-recipes",
          title: "Five repeatable page recipes to reuse all year",
          paragraphs: [
            "You do not need to invent a brand-new layout every evening. Repeating a small library of personal page recipes builds a cohesive card stack you will enjoy flipping through months later. For step-by-step clicks in the app, pair these recipes with our [iPhone digital scrapbook tutorial](/guides/iphone-digital-scrapbook).",
          ],
          bullets: [
            "The Quiet Frame: one tall vertical photo centered with wide paper borders and a single 8-word caption underneath.",
            "The Table Still Life: an overhead coffee or meal photo on the upper half, paired with an on-device cutout sticker of the cup or pastry beside the date.",
            "The Two-Angle Trip Card: one wide street view anchored at the top and a small ticket or shopfront close-up tucked near the bottom corner.",
            "The Split Note: photo on the left 55 percent, a short 4-line conversation memory stacked neatly on the right.",
            "The Weekend Postcard: one bold headline across the top, a tilted hero photo below, and three short bullet details summarizing the afternoon.",
          ],
          image: "travel",
          caption:
            "Real PinyPiny travel composition pairing one location photograph with supporting visual details and short labels (some frames use Pro).",
        },
        {
          id: "common-mistakes-to-avoid",
          title: "Four layout mistakes that hide the story",
          paragraphs: [
            "Even great photographs lose impact when layout choices get in the way of reading. Check your finished page against these four traps before you return to the card stack or export an image to Photos.",
          ],
          bullets: [
            "Overlapping text across busy photo areas: place captions on open paper or clean low-contrast margins instead of across faces or bright highlights.",
            "Rotating every object differently: limit tilt to one photo or one sticker so the page feels intentional rather than dropped.",
            "Forcing ten photos onto one card: split a busy weekend into two focused pages so each memory gets room.",
            "Treating an exported image as your only backup: image export saves a flat picture to Photos for sharing, while your editable note stays inside the app.",
          ],
        },
      ],
      faq: [
        {
          question: "How many photos should go on one iPhone scrapbook page?",
          answer:
            "One to two photos work best on an iPhone screen. Use one large anchor photo to set the scene and a smaller close-up or cutout sticker for context.",
        },
        {
          question: "Do I need pre-made templates to make a clean digital scrapbook?",
          answer:
            "No. Reusing three simple spatial balances (Minimal, Journal, and Collage) lets every photo dictate its own proportions without fighting fixed boxes.",
        },
        {
          question: "Can I make these layouts in PinyPiny without buying Pro?",
          answer:
            "Yes. Free download includes text arrangement, separately placed photos, and on-device Sticker Studio cutouts. Optional Pro adds extra papers, fonts, inline photos, special photo frames, animation, and iCloud sync.",
        },
      ],
    },
    "private-offline-photo-journal-iphone": {
      slug: "private-offline-photo-journal-iphone",
      title: "Private Offline Photo Journal on iPhone | PinyPiny",
      description:
        "Keep a private, offline photo journal on iPhone without creating a third-party account. Understand local storage, iCloud sync, and safe image sharing.",
      category: "Privacy & storage",
      heading: "How to keep a private, offline photo journal on iPhone without an account.",
      intro:
        "A private offline photo journal keeps your writing and pictures on your iPhone first, works with zero network signal, and requires no third-party login. PinyPiny stores notes locally on device, runs photo sticker cutouts on device, and keeps optional Pro sync inside your private Apple iCloud account.",
      minutes: 6,
      publishedAt: "2026-11-25",
      updatedAt: "2026-11-25",
      coverImage: "stack",
      coverAlt:
        "PinyPiny card stack showing locally stored private photo journal pages on iPhone",
      primaryScenario: "photo-journal",
      relatedGuides: ["travel-journal-ideas", "iphone-digital-scrapbook"],
      relatedBlogSlugs: [
        "scrapbook-vs-photo-journal-vs-notes-app",
        "everyday-photo-journal-prompts",
      ],
      calloutAfterSectionIndex: 1,
      callout: {
        eyebrow: "LOCAL-FIRST BY DESIGN",
        title: "No sign-up wall, no public feed, no AI reading your diary",
        body: "Open PinyPiny on iPhone or iPad and start your first photo journal page immediately. Core editing works offline, notes live on your device, and PinyPiny never uses generative AI to read or rewrite your personal memories.",
        linkLabel: "See the iPhone photo journal workflow",
        targetSlug: "photo-journal",
      },
      sections: [
        {
          id: "why-no-account-matters",
          title: "Why does local-first storage matter for personal photo journals?",
          paragraphs: [
            "Personal journals hold things you never intended to upload to a startup server: family photos, candid reflections, travel tickets, and unfinished thoughts. When a journal app forces account creation on first launch, your memories immediately become tied to a third-party cloud database and subscription renewal cycle.",
            "A local-first [photo journal app for iPhone](/photo-journal) flips that model. Your notes stay in your device storage from day one. You can write on a flight, on a subway, or on a remote trail without waiting for a login token or watching a sync spinner freeze your page.",
          ],
        },
        {
          id: "storage-models-compared",
          title: "Comparing iPhone journal storage models",
          paragraphs: [
            "Not every app that calls itself private uses the same architecture. Before committing months of photos to a notebook, compare how the three common iOS storage models behave when you go offline or switch devices.",
          ],
          table: {
            caption: "Comparison of local-only, private Apple iCloud, and third-party cloud journal storage",
            headers: [
              "Storage model",
              "Account needed",
              "Offline editing",
              "Who holds synced data",
            ],
            rows: [
              [
                "On-device local storage (PinyPiny free default)",
                "None",
                "Full core editing works offline",
                "Only your iPhone or iPad",
              ],
              [
                "Local + private Apple iCloud (PinyPiny Pro option)",
                "Your existing Apple Account only",
                "Full core editing offline; sync resumes online",
                "Your private Apple iCloud container",
              ],
              [
                "Third-party cloud journal",
                "Vendor email/password account",
                "Varies; login checks may block access",
                "Vendor servers (often tied to recurring fees)",
              ],
            ],
          },
        },
        {
          id: "offline-vs-online-boundaries",
          title: "What works offline vs what needs a connection in PinyPiny",
          paragraphs: [
            "Honest offline design means spelling out exact boundaries before you board a plane or start a road trip. In PinyPiny, all saved notes, core text editing, photo placement, card-stack browsing, search, and on-device Sticker Studio cutouts run locally on your iPhone or iPad.",
            "Four specific actions do require an active internet connection: downloading new fonts that have not been cached on your device yet, fetching optional weather context, completing App Store Pro purchases or restores, and syncing changes across devices through optional Pro iCloud sync. If you are preparing a [travel journal](/travel-journal) before a trip, open and cache any extra papers or fonts while you still have Wi-Fi.",
          ],
          image: "paper",
          caption:
            "Core writing and page layout work offline on device without a separate PinyPiny account.",
        },
        {
          id: "permissions-and-on-device-stickers",
          title: "Minimal iOS permissions and on-device cutouts",
          paragraphs: [
            "You should never have to grant every system sensor just to write a sentence. Basic writing in PinyPiny requires neither camera nor location access. You only grant Photos permission when selecting pictures or exporting an image, Camera access if you choose the camera flow inside Sticker Studio, and optional Location access if you want place or weather context.",
            "Because Sticker Studio extracts photo subjects directly on your iPhone or iPad, you do not have to upload personal pictures to an external background-removal API. Read our full [privacy policy](/privacy) for exact details on local notes, optional iCloud sync, and our anonymous website analytics boundaries.",
          ],
        },
        {
          id: "backup-and-safe-sharing-checklist",
          title: "How to protect privacy when backing up or sharing pages",
          paragraphs: [
            "Two practical habits prevent most privacy and data-loss mistakes on iPhone. First, remember that iCloud sync is for keeping your iPhone and iPad aligned; it is not an independent archival backup. Never troubleshoot a sync hiccup by deleting the app or wiping local data first. Check the [help and support guide](/support) if sync pauses.",
            "Second, whenever you export a finished journal card as an image to Photos for friends or social posts, run a ten-second privacy sweep first:",
          ],
          steps: [
            "Check photographed tickets, boarding passes, and cafe receipts for full names, phone numbers, or booking codes.",
            "Inspect background details in window reflections, desk monitors, or mail envelopes.",
            "Remember that image export saves a flat copy to Photos; your editable original remains private inside PinyPiny.",
            "Review your iPhone iCloud Backup or encrypted computer backup settings so your device itself has a recovery path.",
          ],
          image: "export",
          caption:
            "Native export scope in PinyPiny: export a finished image for sharing while keeping editable notes on device.",
        },
        {
          id: "comparing-privacy-across-apps",
          title: "When should you pick a local visual journal over a cloud diary?",
          paragraphs: [
            "If you need web browser access on a work PC, Android support, or automated IFTTT imports, a cross-platform cloud app like Day One fits better; see our full [PinyPiny vs Day One comparison](/vs/day-one) for an honest breakdown. If you journal strictly on iPhone and iPad and want visual collage pages without handing your photo library to a vendor account, local-first storage with optional Apple iCloud sync keeps your archive simpler and under your control.",
          ],
        },
      ],
      faq: [
        {
          question: "Does PinyPiny require creating an account or login?",
          answer:
            "No. PinyPiny works immediately with no separate account. Optional Pro sync uses your existing private Apple iCloud account.",
        },
        {
          question: "Does PinyPiny use AI to scan or summarize my private photos?",
          answer:
            "No. PinyPiny does not use generative AI to read your notes or write captions. On-device Vision subject detection runs locally only when you create a sticker in Sticker Studio.",
        },
        {
          question: "What happens to my notes if I stop paying for Pro?",
          answer:
            "Your local notes remain stored on your device. Pro governs optional features such as extra papers and fonts, inline photos, special photo frames, animation, and iCloud sync.",
        },
      ],
    },
    "everyday-photo-journal-prompts": {
      slug: "everyday-photo-journal-prompts",
      title: "25 Everyday Photo Journal Prompts for iPhone | PinyPiny",
      description:
        "Turn camera-roll snapshots into meaningful journal pages with 25 everyday photo journal prompts and a 3-minute nightly routine for iPhone.",
      category: "Journaling habits",
      heading: "25 everyday photo journal prompts for the pictures already on your iPhone.",
      intro:
        "The fastest way to beat blank-page friction in a photo journal is to stop describing what is visible in the picture and write one detail the camera missed. Pick one ordinary snapshot from today, answer a single prompt from the 25 ideas below, and finish a page in three minutes.",
      minutes: 6,
      publishedAt: "2026-11-25",
      updatedAt: "2026-11-25",
      coverImage: "daily",
      coverAlt:
        "An everyday PinyPiny photo journal page combining a casual snapshot with a short personal caption",
      primaryScenario: "photo-journal",
      relatedGuides: ["iphone-digital-scrapbook", "travel-journal-ideas"],
      relatedBlogSlugs: [
        "digital-scrapbook-layout-ideas",
        "private-offline-photo-journal-iphone",
      ],
      calloutAfterSectionIndex: 1,
      callout: {
        eyebrow: "TURN ONE PROMPT INTO A CARD",
        title: "Give one ordinary photo a page of its own",
        body: "You do not need a vacation or a 500-word essay to keep a photo diary. Drop one camera-roll photo onto a PinyPiny page, write two honest lines, and collect your days in a tactile card stack.",
        linkLabel: "Start an everyday photo journal",
        targetSlug: "photo-journal",
      },
      sections: [
        {
          id: "off-camera-rule",
          title: "What should you write next to a photo in a journal?",
          paragraphs: [
            "Write what the lens could not record: the conversation right before the shutter clicked, the weather outside the cafe window, or why you paused long enough to raise your phone. A caption like 'Coffee with Sam' repeats the image. A caption like 'The shop was wiping down tables, but we stayed ten more minutes to finish the story' brings the afternoon back five years later.",
            "That single shift separates a camera roll from a real [photo journal on iPhone](/photo-journal). You only need two sentences to anchor a memory.",
          ],
        },
        {
          id: "ordinary-weekday-prompts",
          title: "6 prompts for ordinary weekdays",
          paragraphs: [
            "Most people wait for birthdays or holidays and skip 90 percent of their real life. Use these prompts on quiet Tuesdays when nothing dramatic happened.",
          ],
          bullets: [
            "1. The desk or table at 10 a.m.: what were you avoiding, and what actually got done?",
            "2. A half-finished mug or lunch bowl: who were you texting while you ate this?",
            "3. Something you saw on your commute that you usually walk past without noticing.",
            "4. A screenshot of a song, weather alert, or text message that sums up today's mood.",
            "5. The exact light in your room at 5 p.m.: what season does it feel like right now?",
            "6. One small errand or chore that quietly made the evening easier.",
          ],
        },
        {
          id: "food-and-ritual-prompts",
          title: "5 prompts for meals, coffee, and small rituals",
          paragraphs: [
            "Food photos already fill half of most iPhone libraries. Pair one close-up or turn a cup into a cutout using our [photo sticker tutorial](/guides/photo-stickers) to document the ritual around the meal.",
          ],
          bullets: [
            "7. The first sip or bite: what did it taste like, and would you order it again?",
            "8. A recipe attempt (success or disaster): what went off script in the kitchen?",
            "9. Your favorite neighborhood spot right now and the table you always hope is free.",
            "10. A grocery haul or farmer's market bag: what meal are you looking forward to cooking?",
            "11. The quiet ritual you hope you never outgrow (morning toast, late-night tea, Sunday bakery walk).",
          ],
        },
        {
          id: "walks-and-seasons-prompts",
          title: "5 prompts for walks, weather, and changing seasons",
          paragraphs: [
            "Outdoor snapshots make clean Minimal or Collage pages. Pair a wide street shot with one tiny detail from the ground or sky.",
          ],
          bullets: [
            "12. One color that showed up everywhere on today's walk.",
            "13. The sound you heard when you took this picture (rain on umbrellas, cicadas, train bells).",
            "14. The first clear sign that the season is shifting where you live.",
            "15. A doorway, tree, or street corner you always glance at when you pass by.",
            "16. Where your head was before the walk vs how you felt unlocking the front door afterward.",
          ],
          image: "inspiration",
          caption:
            "Real PinyPiny page example combining an everyday outdoor photograph with short personal reflection and a cutout detail.",
        },
        {
          id: "travel-and-outing-prompts",
          title: "5 prompts for trips and weekend outings",
          paragraphs: [
            "Instead of writing a chronological itinerary, pick one specific moment per page. For a complete trip structure, read our [travel journal guide](/guides/travel-journal-ideas) and [travel scrapbook workflow](/travel-journal).",
          ],
          bullets: [
            "17. First impression within ten minutes of arriving: what surprised you immediately?",
            "18. A wrong turn or delayed train that accidentally led somewhere memorable.",
            "19. A phrase, street sign, or local habit you kept noticing all day.",
            "20. One small object you bought or kept in your pocket (photograph it before tossing the receipt).",
            "21. On the way home: which ordinary detail from this trip will you miss most next week?",
          ],
        },
        {
          id: "reflection-and-3-minute-routine",
          title: "4 reflection prompts plus a 3-minute nightly routine",
          paragraphs: [
            "End the week or month with one slower snapshot: a blurry selfie, a book cover, or a view from your window.",
          ],
          bullets: [
            "22. 'Just outside the frame...' finish this sentence about what was happening beside the camera.",
            "23. 'Right now I am learning...' pair a candid moment with one honest lesson from this month.",
            "24. 'A tiny win I do not want to forget...' record something small you would normally brush past.",
            "25. 'Note to myself a year from now...' what feels urgent today that might look gentle later?",
          ],
          steps: [
            "Minute 1: Open Recents in Photos and pick the first photo that makes you remember a feeling, not the prettiest one.",
            "Minute 2: Place it on a blank PinyPiny page, pick one prompt above, and write 2 to 4 plain sentences.",
            "Minute 3: Adjust spacing so the title leads, return to the card stack, and stop. Consistency beats perfection.",
          ],
        },
      ],
      faq: [
        {
          question: "Do I have to write a photo journal entry every single day?",
          answer:
            "No. Even two or three pages a week add up to more than 100 visual memories a year without turning journaling into a chore.",
        },
        {
          question: "What if I took zero good photos today?",
          answer:
            "Use a blurry snapshot, a screenshot of a song or text message, or skip today and journal a favorite older photo from last weekend.",
        },
        {
          question: "How long should a photo journal caption be?",
          answer:
            "One to three sentences (roughly 20 to 60 words) is ideal on an iPhone screen: long enough to capture the backstory and short enough to finish in minutes.",
        },
      ],
    },
    "scrapbook-vs-photo-journal-vs-notes-app": {
      slug: "scrapbook-vs-photo-journal-vs-notes-app",
      title: "Scrapbook vs Photo Journal vs Notes App | PinyPiny",
      description:
        "Not sure whether to use Apple Notes, a photo journal, or a digital scrapbook on iPhone? Compare all four options by goal, speed, and visual polish.",
      category: "Choosing a tool",
      heading: "Digital scrapbook vs photo journal vs Apple Notes: which fits your memories?",
      intro:
        "Use Apple Notes for fast checklists and utility text, Apple Photos for raw storage, a photo journal for chronological stories paired with pictures, and a digital scrapbook when arrangement, paper texture, and personal stickers are part of the memory. Knowing which job you want prevents abandoned notebooks.",
      minutes: 6,
      publishedAt: "2026-11-25",
      updatedAt: "2026-11-25",
      coverImage: "stack",
      coverAlt:
        "PinyPiny card stack illustrating visual pages designed for revisiting personal memories on iPhone",
      primaryScenario: "digital-scrapbook",
      relatedGuides: ["iphone-digital-scrapbook", "photo-stickers"],
      relatedBlogSlugs: [
        "digital-scrapbook-layout-ideas",
        "private-offline-photo-journal-iphone",
      ],
      calloutAfterSectionIndex: 1,
      callout: {
        eyebrow: "BOTH VISUAL & PRACTICAL",
        title: "One iPhone app for photo journals and freeform scrapbooks",
        body: "PinyPiny bridges the gap between a plain photo diary and a tactile collage page. Keep simple one-photo entries on weekdays and build layered sticker pages for trips, all saved locally in one card stack.",
        linkLabel: "Explore digital scrapbooking in PinyPiny",
        targetSlug: "digital-scrapbook",
      },
      sections: [
        {
          id: "four-tools-matrix",
          title: "How do Apple Notes, Photos, photo journals, and scrapbooks differ?",
          paragraphs: [
            "Every iPhone already ships with Apple Photos, Apple Notes, and Apple Journal. Adding a dedicated visual app only makes sense when the built-in tools flatten the way you want to remember a day.",
            "Compare the four formats side by side before moving your routine.",
          ],
          table: {
            caption: "Decision matrix for memory keeping on iPhone and iPad",
            headers: [
              "Format",
              "Primary strength",
              "Layout freedom",
              "Best fit",
            ],
            rows: [
              [
                "Apple Photos",
                "Instant capture, search, albums, iCloud library",
                "Fixed grid only; no real writing space",
                "Raw photo archive of every shot you take",
              ],
              [
                "Apple Notes",
                "Fast capture, checklists, folders, document scans",
                "Single vertical text column",
                "Tasks, recipes, meeting notes, quick drafts",
              ],
              [
                "Linear photo journal",
                "Chronological timeline, writing prompts, mood logs",
                "Structured feed (photo above or inline with text)",
                "Daily reflection and long-form diary writing",
              ],
              [
                "Digital scrapbook / visual notes (PinyPiny)",
                "Freeform canvas, cutout stickers, tactile card stack, image export",
                "Full spatial placement, rotation, layering, and typography",
                "Curated memories, trips, visual diaries, shareable postcard pages",
              ],
            ],
          },
        },
        {
          id: "when-apple-notes-is-enough",
          title: "When Apple Notes or Apple Journal is already enough",
          paragraphs: [
            "Be honest about what you actually open at night. If you mostly want bulleted meeting notes, grocery lists, and scanned PDFs mixed with an occasional reference photo, Apple Notes is faster and stays synced across Mac automatically.",
            "If you want automatic daily prompts generated from your workouts, music history, and locations with audio clips and Mac writing, Apple's built-in Journal app is hard to beat. We break down those exact trade-offs in [PinyPiny vs Apple Journal](/vs/apple-journal).",
          ],
        },
        {
          id: "when-photo-journal-wins",
          title: "When a dedicated photo journal beats a camera roll",
          paragraphs: [
            "An iPhone camera roll treats a parking-spot reminder and your favorite evening of the year identically. Six months later, the meaningful photo is buried beneath 800 screenshots.",
            "Pulling one meaningful image into a dedicated [photo journal](/photo-journal) forces curation. Even two sentences beside the image transform a passive file into a readable card you actually look forward to revisiting.",
          ],
          image: "daily",
          caption:
            "A single everyday photograph gains context and staying power once separated from camera-roll clutter.",
        },
        {
          id: "when-digital-scrapbook-wins",
          title: "When a freeform digital scrapbook makes the memory click",
          paragraphs: [
            "Some moments are visual by nature: a Kyoto street snack, a rainy coffee table, a desk setup, or a concert ticket alongside a favorite lyric. Dropping those into a rigid single-column note strips away the mood.",
            "A freeform [digital scrapbook](/digital-scrapbook) lets scale, paper color, whitespace, and a cutout sticker from the actual scene express how the day felt. Unlike drawing-first apps built for Apple Pencil artists (see [PinyPiny vs Zinnia](/vs/zinnia)), a photo-and-text canvas lets anyone build a composed page with one thumb on iPhone.",
          ],
        },
        {
          id: "simple-two-app-system",
          title: "A simple two-app memory system that sticks",
          paragraphs: [
            "You do not have to force one app to hold your entire life. Most people stick with journaling longest when they separate utility capture from personal keepsakes:",
          ],
          steps: [
            "Keep Apple Notes for work tasks, shopping lists, and temporary scratchpads.",
            "Keep Apple Photos as your complete raw archive of every picture and video.",
            "Promote only the 2 to 4 moments per week worth revisiting into PinyPiny, choosing Minimal layouts for busy days and Collage layouts for trips.",
            "Export standout pages as images when you want to text a postcard to family or save a finished visual copy to Photos.",
          ],
        },
      ],
      faq: [
        {
          question: "Can PinyPiny replace Apple Notes for work and checklists?",
          answer:
            "No. PinyPiny is designed for personal visual notes, photo journals, and collage pages rather than heavy folder hierarchies, shared work docs, or document scanning.",
        },
        {
          question: "How is PinyPiny different from Day One?",
          answer:
            "Day One excels at cross-platform long-form Markdown diaries with audio, integrations, and print books. PinyPiny focuses on freeform visual page layout, on-device photo cutout stickers, and a card stack on iPhone and iPad.",
        },
        {
          question: "Can I use one app for both simple photo diaries and fuller scrapbooks?",
          answer:
            "Yes. On busy days you can place one photo and a single caption line; on trips you can layer multiple pieces and photo stickers in the same card stack.",
        },
      ],
    },
  },
  zh: {
    "digital-scrapbook-layout-ideas": {
      slug: "digital-scrapbook-layout-ideas",
      title: "iPhone 电子手帐排版技巧：3 种高颜值版式｜拼拼笔记",
      description:
        "掌握适合 iPhone 屏幕的电子手帐排版技巧。对比极简、日记、拼贴 3 种图文结构，附 60-25-15 主次比例、配色原则与常见避坑指南。",
      category: "排版技巧",
      heading: "iPhone 电子手帐排版技巧：用 3 种结构告别杂乱页面。",
      intro:
        "在 iPhone 上做好电子手帐排版，核心不是堆满贴纸或套用复杂模板，而是确立一张视觉主图、保持正文水平易读，并至少留出 25% 的纸面空白。掌握极简、日记、拼贴这 3 种版式比例，几乎能排好相册里 90% 的日常照片。",
      minutes: 7,
      publishedAt: "2026-11-25",
      updatedAt: "2026-11-25",
      coverImage: "inspiration",
      coverAlt: "拼拼笔记中的电子手帐排版示例，展示了主图、留白、短文字与照片抠图贴纸的平衡比例",
      primaryScenario: "digital-scrapbook",
      relatedGuides: ["iphone-digital-scrapbook", "photo-stickers"],
      relatedBlogSlugs: [
        "everyday-photo-journal-prompts",
        "scrapbook-vs-photo-journal-vs-notes-app",
      ],
      calloutAfterSectionIndex: 1,
      callout: {
        eyebrow: "一张照片试三种排法",
        title: "在自由纸面上练习这 3 种手帐结构",
        body: "在拼拼笔记里，照片、文字和设备端抠图贴纸都是可自由移动缩放的独立元素。App 支持 iPhone 与 iPad 免费下载，可选 Pro 解锁更多纸张、字体与特殊照片边框。",
        linkLabel: "了解拼拼笔记电子手帐功能",
        targetSlug: "digital-scrapbook",
      },
      sections: [
        {
          id: "why-phone-layouts-break",
          title: "为什么照搬平板手帐模板，在 iPhone 上容易显得拥挤？",
          paragraphs: [
            "很多在 iPad 宽屏上好看的双页模板，放到 iPhone 的竖屏画布上就会失效：五张同样大小的照片挤在一起、三四种花体字互相抢戏，再加上繁复边框，看一眼就不知道先读哪里。",
            "手机端电子手帐要反过来思考。先让一张最有记忆点的照片当主角，再用简短文字补上画面外的故事，最后把干净的纸面空白当成版面的一部分。你可以在自由排版的[电子手帐 App](/zh/digital-scrapbook)里直接按照片比例调整，不需要被死板的方格框住。",
          ],
        },
        {
          id: "three-core-structures",
          title: "同一张照片，如何排成极简、日记、拼贴 3 种版式？",
          paragraphs: [
            "我们在拼拼笔记里用同一张海岸照片实际制作了极简、日记、拼贴三个版本，结果呈现出的情绪完全不同。这三种并不是需要切换的固定模式，而是照片、文字与装饰之间的三种面积比例。",
            "动手前花十秒对照下表，就能很快决定今天这一页该怎么摆。",
          ],
          table: {
            caption: "极简、日记、拼贴三种 iPhone 电子手帐版式对比",
            headers: ["版式类型", "适合的照片与心情", "元素数量建议", "完成耗时"],
            rows: [
              [
                "极简版式",
                "本身氛围很足的风景、光影、随手拍",
                "1 张大图 + 1 行短标题或日期",
                "1-2 分钟",
              ],
              [
                "日记版式",
                "画面普通但背后有对话、思考的日常",
                "1 张中图 + 1-3 短段文字 + 清晰页边距",
                "3-5 分钟",
              ],
              [
                "拼贴版式",
                "旅行、探店、周末纪念等物件丰富的场景",
                "1 张主图（可选 Pro 边框）+ 1 张抠图贴纸 + 2-3 处短注",
                "5-8 分钟",
              ],
            ],
          },
          image: "daily",
          caption: "真实 App 制作示例：主图明确，文字块留出呼吸感，再用一枚个人贴纸收尾。",
        },
        {
          id: "focal-hierarchy-and-grid",
          title: "用 60-25-15 法则建立清晰的主次关系",
          paragraphs: [
            "版面看起来“散”，八成是因为所有元素一样大。两张尺寸相近的照片并排或上下平分，会让视线来回跳动，反而削弱了原本好看的那一张。",
            "把画面的 50% 到 60% 留给主照片，保留约 25% 的空白纸面，其余空间分配给标题、正文和一枚小装饰。如果还想补充第二件小物，不妨直接按[照片贴纸制作教程](/zh/guides/photo-stickers)抠出主体做成透明贴纸，既增加层次，又不会抢掉主图风头。",
          ],
          steps: [
            "先把最重要的一张主图放到上半部分或偏左视觉重心，拉到足够清晰的尺寸。",
            "正文文字尽量保持水平排版，保证在手机上滑过卡片时一眼读得清。",
            "如果想带一点纸质拼贴感，全页最多只轻微倾斜 1 张照片或 1 枚贴纸（约 3 到 6 度）。",
            "按正常握持距离看一眼：如果四周显得紧绷，先删掉一个最不重要的装饰，而不是把字缩到看不清。",
          ],
        },
        {
          id: "color-and-type-pairing",
          title: "字体与配色怎么搭才不显杂乱？",
          paragraphs: [
            "一页手帐里出现四种高饱和彩色，很容易像促销传单。最稳妥的办法是“从照片里借一种点缀色”，比如红砖的陶土色、抹茶杯的浅绿，或落日的暖橘，只用在标题和日期两处，其余 90% 的正文保持深墨色或中性灰。",
            "字体搭配同样遵循少即是多：标题和正文拉开明显字号差，避免全文使用难以辨认的装饰花体。做日常[照片日记](/zh/photo-journal)时，墨色与纸底的清晰对比，比堆砌特效更能耐看。",
          ],
          bullets: [
            "字号拉开层次：标题至少比正文大 1.5 倍，让每张卡片在卡片堆里也能一眼认出主题。",
            "单一点缀色：把色彩舞台让给照片本身，文字只用一种呼应色串联。",
            "短段落呼吸：每段控制在 2-3 句话，避免在手机屏上排成密密麻麻一整块字。",
          ],
        },
        {
          id: "five-repeatable-recipes",
          title: "可以直接反复复用的 5 套手机手帐版式配方",
          paragraphs: [
            "做手帐最累的不是写字，而是每页都重新发明排版。固定复用三五套顺手的版式，不仅省时间，翻看整叠卡片时还会自然形成统一的个人风格。具体在 App 里的操作顺序，可以搭配[iPhone 电子手帐入门教程](/zh/guides/iphone-digital-scrapbook)一起看。",
          ],
          bullets: [
            "留白画框式：一张竖构图主图居中，四周留出宽纸边，正下方放一句 15 字以内的心情。",
            "桌面静物式：上半页放俯拍咖啡或餐食照片，旁边放一枚从同餐小物抠出的透明贴纸与店名。",
            "远景加细节式：上方放旅行街景大图定地点，右下角配一张缩小后的门牌或纪念品特写。",
            "左右对话式：左侧 55% 放主图，右侧整齐排 4 行短句，记录当时聊到的那件事。",
            "周末明信片式：顶部一行醒目标题，中间一张微倾主图，底部用三条短注记下三个小片段。",
          ],
          image: "travel",
          caption: "真实 App 旅行排版示例：远景主图定调，细节照片与简短文字环绕补充（部分边框需 Pro）。",
        },
        {
          id: "common-mistakes-to-avoid",
          title: "四个最容易毁掉手帐观感的常见误区",
          paragraphs: [
            "收尾前对照这四条快速检查一遍，往往十秒就能让一页普通拼贴变清爽。",
          ],
          bullets: [
            "把浅色字直接压在杂乱照片上：文字尽量落在空白纸面或干净暗部，不要遮住人脸和主体。",
            "每个元素都歪着放：全页到处倾斜会显得凌乱，留一个斜角做呼吸点就够了。",
            "硬把十张图塞进同一页：一次周末完全可以拆成两三张卡片，每张讲清一个小片刻。",
            "把导出图片当成唯一备份：导出到系统相册的是成品图片，方便分享；可继续修改的原笔记仍保存在 App 内。",
          ],
        },
      ],
      faq: [
        {
          question: "iPhone 电子手帐一页放几张照片最合适？",
          answer:
            "通常 1 到 2 张最耐看。1 张主图负责定下氛围，再配 1 张小特写或 1 枚照片抠图贴纸补充细节，在手机屏幕上最容易读清。",
        },
        {
          question: "不会画画、也没有模板能排出好看的手帐吗？",
          answer:
            "可以。极简、日记、拼贴三种排法只依赖照片、文字和贴纸的空间比例，不需要手绘功底，也不依赖固定模板导入。",
        },
        {
          question: "免费版拼拼笔记能做出这些排版吗？",
          answer:
            "可以。免费下载即包含文字自由排版、独立照片摆放和贴纸工作室抠图；额外纸张、字体、正文内嵌照片、特殊照片边框、动画与 iCloud 同步属于可选 Pro 功能。",
        },
      ],
    },
    "private-offline-photo-journal-iphone": {
      slug: "private-offline-photo-journal-iphone",
      title: "iPhone 离线私密照片日记指南：免注册与本地保存｜拼拼笔记",
      description:
        "不想把私人日记和照片传到第三方服务器？了解 iPhone 离线本地存储、私人 iCloud 同步边界、权限控制与导出分享隐私检查清单。",
      category: "隐私与离线",
      heading: "不用注册账号的 iPhone 照片日记：本地保存与离线记录指南。",
      intro:
        "真正的离线私密照片日记，核心是数据先留在你的 iPhone 本地、没网也能正常写、不需要注册第三方账号。拼拼笔记默认在设备本地保存图文笔记，照片抠图在设备端完成，可选的 Pro 同步也只通过你自己的 Apple 私人 iCloud 账户进行。",
      minutes: 6,
      publishedAt: "2026-11-25",
      updatedAt: "2026-11-25",
      coverImage: "stack",
      coverAlt: "拼拼笔记卡片堆界面，所有私人照片日记默认保存在用户 iPhone 设备本地",
      primaryScenario: "photo-journal",
      relatedGuides: ["travel-journal-ideas", "iphone-digital-scrapbook"],
      relatedBlogSlugs: [
        "scrapbook-vs-photo-journal-vs-notes-app",
        "everyday-photo-journal-prompts",
      ],
      calloutAfterSectionIndex: 1,
      callout: {
        eyebrow: "本地优先 · 免注册",
        title: "打开就能写，不需要账号，也没有 AI 读取你的日记",
        body: "拼拼笔记不要求创建独立账号，不设公开社区流，也不会用生成式 AI 读取或代写你的私人日记。基础图文编辑和贴纸抠图均在你的 iPhone 或 iPad 本地运行。",
        linkLabel: "查看拼拼笔记照片日记介绍",
        targetSlug: "photo-journal",
      },
      sections: [
        {
          id: "why-no-account-matters",
          title: "为什么私人照片日记更适合“本地优先”架构？",
          paragraphs: [
            "照片日记里存的往往是最私人的片刻：家人日常、随手拍的机票车票、还没整理好的真实情绪。如果一款日记 App 第一次打开就强制手机号或邮箱注册，你的记忆就会从第一天起绑定在厂商服务器与续费周期上。",
            "本地优先的[iPhone 照片日记 App](/zh/photo-journal)把控制权交回设备本身。无论是坐飞机开启飞行模式、在地铁隧道里通勤，还是在山区旅行没有信号，打开就能排版记录，不需要等待登录校验或云端加载。",
          ],
        },
        {
          id: "storage-models-compared",
          title: "三种常见 iOS 日记存储方式有什么区别？",
          paragraphs: [
            "很多 App 都会提到“注重隐私”，但底层存储架构差异很大。在把几个月的照片放进去之前，先看清下面三种模式在离线与数据归属上的区别。",
          ],
          table: {
            caption: "设备本地、Apple 私人 iCloud 与第三方云账号三种日记存储模式对比",
            headers: ["存储模式", "是否需要注册账号", "离线编辑能力", "同步数据存放位置"],
            rows: [
              [
                "仅设备本地（拼拼笔记免费默认）",
                "不需要",
                "基础图文与贴纸完整离线可用",
                "仅在你的 iPhone 或 iPad 本地",
              ],
              [
                "本地 + Apple 私人 iCloud（拼拼笔记 Pro 可选）",
                "仅使用现有 Apple 账户",
                "离线正常编辑，联网后同步",
                "你自己的 Apple 私人 iCloud 空间",
              ],
              [
                "第三方云端日记账号",
                "需注册厂商账号",
                "视产品而定，部分需联网校验登录",
                "厂商自有服务器（常与长期订阅绑定）",
              ],
            ],
          },
        },
        {
          id: "offline-vs-online-boundaries",
          title: "在拼拼笔记里，哪些功能可离线？哪些需要网络？",
          paragraphs: [
            "把离线边界提前说清楚，旅行或出差时才不会措手不及。在拼拼笔记中，已保存笔记的浏览与搜索、文字排版、照片摆放以及贴纸工作室的设备端主体抠图，都可以在无网络环境下使用。",
            "以下四类操作需要联网：下载尚未缓存到本机的额外字体、获取可选的天气上下文、在 App Store 完成 Pro 购买或恢复购买，以及开启可选的 Pro iCloud 多设备同步。如果你准备在旅途中记录[旅行手帐](/zh/travel-journal)，出发前在有 Wi-Fi 时先加载好想用的纸张与字体即可。",
          ],
          image: "paper",
          caption: "基础编辑与本地保存无需联网，也无需注册拼拼笔记独立账号。",
        },
        {
          id: "permissions-and-on-device-stickers",
          title: "按需授权系统权限，照片抠图无需上传云端",
          paragraphs: [
            "单纯写几句文字记录，不需要开启相机或定位权限。只有当你从相册选图或导出成品图片时，才需要相应的照片权限；只有使用贴纸工作室的相机入口时，才需要相机权限；定位权限仅用于你主动允许的地点与天气信息，不会后台持续追踪行程。",
            "贴纸工作室的主体提取在你的设备本地完成，不必把私人生活照传给外部抠图接口。关于本地数据、iCloud 同步及网站匿名访问统计的具体边界，可随时查阅[拼拼笔记隐私政策](/zh/privacy)。",
          ],
        },
        {
          id: "backup-and-safe-sharing-checklist",
          title: "日常备份与导出分享前的隐私检查清单",
          paragraphs: [
            "两个习惯能帮你避开绝大多数隐私泄露与数据丢失风险。第一，iCloud 同步用于在你的 iPhone 和 iPad 之间保持一致，它不等同于独立的长期离线备份；如果同步暂时未完成，千万不要靠“卸载重装 App”来排查，先参考[帮助与支持](/zh/support)排查网络和账户状态。",
            "第二，把做好的页面导出为图片分享给朋友或发社交平台前，花十秒过一遍下面四点：",
          ],
          steps: [
            "检查照片里的机票、高铁票、外卖单和咖啡小票，确认没有露出姓名、手机号或预订编码。",
            "扫一眼照片背景里的快递面单、电脑屏幕、门牌号或玻璃反光。",
            "明确区分“导出图片”与“原笔记”：导出到相册的是平铺图片，原可编辑笔记仍私密留在 App 内。",
            "定期确认系统级的 iPhone 整机备份（iCloud 整机备份或电脑加密备份）处于正常状态。",
          ],
          image: "export",
          caption: "拼拼笔记原生导出选项：导出成品图片用于分享，可编辑的原笔记继续留在设备内。",
        },
        {
          id: "comparing-privacy-across-apps",
          title: "什么时候该选本地视觉手帐，什么时候选跨平台云日记？",
          paragraphs: [
            "如果你必须在 Windows 网页端、Android 手机和 Mac 上同步长篇文字日记，或需要音频转写与自动导入，像 Day One 这样的跨平台工具更对口（详细对比见[拼拼笔记 vs Day One](/zh/vs/day-one)）。如果你主要在 iPhone 与 iPad 上记录生活，更在意免注册、本地优先与照片自由拼贴，本地存储加私人 iCloud 会轻松得多。",
          ],
        },
      ],
      faq: [
        {
          question: "使用拼拼笔记一定要注册账号或绑定手机号吗？",
          answer:
            "不需要。拼拼笔记没有独立的账户体系，打开即可在本地使用；可选的 Pro 同步直接使用你的 Apple 私人 iCloud 账户。",
        },
        {
          question: "拼拼笔记会用 AI 扫描我的照片或自动帮我写日记吗？",
          answer:
            "不会。拼拼笔记不使用生成式 AI 读取笔记或生成配文。仅在你主动制作贴纸时，在设备本地运行照片主体识别。",
        },
        {
          question: "如果以后不续订 Pro，原来写的笔记还在吗？",
          answer:
            "你保存在设备本地的笔记不会消失。Pro 对应的是更多纸张与字体、正文内嵌照片、特殊照片边框、动画及 iCloud 同步等进阶功能。",
        },
      ],
    },
    "everyday-photo-journal-prompts": {
      slug: "everyday-photo-journal-prompts",
      title: "照片日记写什么？25 个日常手帐记录灵感｜拼拼笔记",
      description:
        "相册几千张照片却不知照片日记写什么？这 25 个覆盖工作日、美食、散步与旅行的记录灵感，配合 3 分钟睡前流程帮你轻松坚持。",
      category: "记录灵感",
      heading: "照片日记写什么？25 个适合手机相册的日常手帐灵感。",
      intro:
        "写照片日记最容易卡壳的原因，是盯着照片反复描写画面里本来就有的东西。换个思路：只写“镜头没拍到的那一个细节”。从手机相册里挑一张今天的普通照片，套用下面 25 个灵感之一，三分钟就能完成一页值得回看的记录。",
      minutes: 6,
      publishedAt: "2026-11-25",
      updatedAt: "2026-11-25",
      coverImage: "daily",
      coverAlt: "拼拼笔记中的日常照片日记页面示例，用一张普通生活照配合几句真实感受",
      primaryScenario: "photo-journal",
      relatedGuides: ["iphone-digital-scrapbook", "travel-journal-ideas"],
      relatedBlogSlugs: [
        "digital-scrapbook-layout-ideas",
        "private-offline-photo-journal-iphone",
      ],
      calloutAfterSectionIndex: 1,
      callout: {
        eyebrow: "三分钟留住今天",
        title: "一张照片配两句话，就是完整一页",
        body: "不必等长假或大事件才动笔。挑一张今天随手拍的照片放进拼拼笔记，写下画面外的小细节，让平常的日子慢慢攒成一叠卡片。",
        linkLabel: "开始记录你的照片日记",
        targetSlug: "photo-journal",
      },
      sections: [
        {
          id: "off-camera-rule",
          title: "照片日记的核心写法：记录画面之外的那一句",
          paragraphs: [
            "照片已经替你记住了咖啡杯的颜色和天气，文字就不必再当解说员。把文字留给镜头拍不到的信息：按下快门前聊到的话题、店里放的那首歌、或者你当时为什么忽然想停下来拍这一张。",
            "“今天和朋友喝咖啡”过半年看毫无波动；“店里快打烊了，但我们为了讲完那件事又多坐了十分钟”，立刻能把你带回那个下午。这就是把相册变成[照片日记](/zh/photo-journal)的关键一步。",
          ],
        },
        {
          id: "ordinary-weekday-prompts",
          title: "适合普通工作日的 6 个记录灵感",
          paragraphs: [
            "大多数人觉得“今天没什么大事发生”就合上了 App，但过两年最让人怀念的往往正是这些普通的周二和周四。",
          ],
          bullets: [
            "1. 上午十点的桌面：今天最不想开始的那件事是什么，最后怎么推过去的？",
            "2. 吃到一半的早餐或午饭：吃饭时手机里正在回谁的消息，或听着什么播客？",
            "3. 通勤路上一个平时总走过、今天忽然多看了一眼的角落。",
            "4. 一张手机截图：今天单曲循环的歌、忽然降温的天气预报，或一句逗笑你的聊天。",
            "5. 傍晚五点照进房间的光：这一刻让你觉得更像哪个季节？",
            "6. 一件很小的琐事（换床单、买花、整理背包），却悄悄让晚上变轻松了。",
          ],
        },
        {
          id: "food-and-ritual-prompts",
          title: "适合美食、咖啡与小习惯的 5 个灵感",
          paragraphs: [
            "美食和饮品本来就占了相册一大半。除了放主图，还可以按[照片贴纸制作教程](/zh/guides/photo-stickers)把杯子或甜点抠成一枚小贴纸，记下那顿饭背后的小仪式。",
          ],
          bullets: [
            "7. 第一口的真实感受：比想象中更好吃还是踩雷了，下次还会点吗？",
            "8. 自己下厨的一次尝试（哪怕翻车了）：哪一步忽然脱离了菜谱？",
            "9. 最近常去的社区小店，以及你每次进门都暗暗希望空着的那个座位。",
            "10. 一袋刚买回来的水果或菜市场收获：打算拿它做哪道期待已久的菜？",
            "11. 一个你希望过几年依然保留的小习惯（早起烤吐司、睡前热茶、周末散步买面包）。",
          ],
        },
        {
          id: "walks-and-seasons-prompts",
          title: "适合散步、天气与换季的 5 个灵感",
          paragraphs: [
            "户外的树影、街道和天空最容易做出清爽的极简或拼贴页面，一张远景配一个细微观察就很有画面感。",
          ],
          bullets: [
            "12. 今天散步时反复撞见的一种颜色。",
            "13. 按下快门那一刻耳边的声音（雨打伞面、蝉鸣、便利店门铃或晚风）。",
            "14. 你所在的城市里，第一个让你意识到“真的换季了”的信号。",
            "15. 每次路过都会下意识看一眼的一扇窗、一棵树或一家老店招牌。",
            "16. 出门散步前脑子里的纠结，和回家推开门时心情的变化。",
          ],
          image: "inspiration",
          caption: "拼拼笔记日常页示例：用一张户外照片搭配简短句子和小物贴纸留住当下情绪。",
        },
        {
          id: "travel-and-outing-prompts",
          title: "适合旅行与周末外出的 5 个灵感",
          paragraphs: [
            "旅行手帐不必照搬行程表。一页只记一个带得回家的片段，完整思路可结合[旅行手帐写作教程](/zh/guides/travel-journal-ideas)与[旅行手帐场景页](/zh/travel-journal)。",
          ],
          bullets: [
            "17. 抵达后十分钟内的第一印象：最先让你觉得“和家里不一样”的细节是什么？",
            "18. 一次走错路、晚点或临时改道，却意外撞见的小惊喜。",
            "19. 旅途中反复听见的一句话、一个地名，或当地人有趣的生活习惯。",
            "20. 口袋里带回来的小物件（车票、印章、糖纸），先拍进页面再安心收起。",
            "21. 返程路上问自己：下周回到日常后，最想念这趟旅行里的哪一件小事？",
          ],
        },
        {
          id: "reflection-and-3-minute-routine",
          title: "4 个慢思考灵感与“3 分钟睡前记录法”",
          paragraphs: [
            "每周或每月末，可以挑一张没那么精致的自拍、正在读的书页或窗外夜色，给自己留四行慢一点的字。",
          ],
          bullets: [
            "22. “其实画面外面……”接下去写完拍照那一秒镜头旁边发生的事。",
            "23. “这个月我慢慢学会的一件事是……”配一张真实生活照，不写空泛大道理。",
            "24. “一个差点被我忽略的小进展……”留住一件你平时容易一笔带过的小成就。",
            "25. “写给一年后的自己……”记下今天觉得很大、但明年回头看也许会笑出来的事。",
          ],
          steps: [
            "第 1 分钟：打开相册“最近项目”，选第一张能唤起具体回忆的照片，不强求构图完美。",
            "第 2 分钟：把照片放到拼拼笔记空白纸面上，挑上面一个灵感，写 2 到 4 句大白话。",
            "第 3 分钟：调顺标题和正文间距，收进卡片堆就结束。能坚持下来比精致更重要。",
          ],
        },
      ],
      faq: [
        {
          question: "照片日记一定要每天打卡才有用吗？",
          answer:
            "完全不用。哪怕每周只做两三页，一年下来也能攒出上百张有图有故事的回忆卡片，没有打卡压力才更容易长久。",
        },
        {
          question: "今天一张像样的照片都没拍怎么办？",
          answer:
            "可以用糊掉的随手拍、一张歌单或聊天截图，或者干脆回头挑上周末还没写完的一张旧照补一页。",
        },
        {
          question: "每篇照片日记大概写多少字比较舒服？",
          answer:
            "在手机屏幕上，30 到 100 字（两三句短话）阅读体验最好：足够装下背景故事，又不会让你产生写作文的负担。",
        },
      ],
    },
    "scrapbook-vs-photo-journal-vs-notes-app": {
      slug: "scrapbook-vs-photo-journal-vs-notes-app",
      title: "电子手帐、照片日记和备忘录有什么区别？怎么选｜拼拼笔记",
      description:
        "iPhone 记录生活该用系统备忘录、相册、照片日记还是电子手帐？用一张决策对比表理清四种工具边界，找到能长期坚持的组合。",
      category: "工具选择",
      heading: "电子手帐、照片日记和苹果备忘录有什么区别？怎么选才不闲置。",
      intro:
        "清单和临时草稿交给苹果备忘录，全量原始照片留在系统相册，想按时间线写长文选照片日记，想用自由排版、纸张质感和个人贴纸留住氛围则选电子手帐。把不同记录任务分清楚，才不会装满一堆吃灰的 App。",
      minutes: 6,
      publishedAt: "2026-11-25",
      updatedAt: "2026-11-25",
      coverImage: "stack",
      coverAlt: "拼拼笔记卡片堆界面，展示自由排版图文卡片与普通文字列表的视觉区别",
      primaryScenario: "digital-scrapbook",
      relatedGuides: ["iphone-digital-scrapbook", "photo-stickers"],
      relatedBlogSlugs: [
        "digital-scrapbook-layout-ideas",
        "private-offline-photo-journal-iphone",
      ],
      calloutAfterSectionIndex: 1,
      callout: {
        eyebrow: "兼顾轻量与仪式感",
        title: "在一叠卡片里同时装下日常照片日记与拼贴手帐",
        body: "忙的时候一图一句做极简照片日记，旅行或周末再加抠图贴纸做自由拼贴。拼拼笔记把这两种节奏放进同一个本地优先的 iPhone / iPad App 里。",
        linkLabel: "看看拼拼笔记能做什么",
        targetSlug: "digital-scrapbook",
      },
      sections: [
        {
          id: "four-tools-matrix",
          title: "系统相册、备忘录、照片日记和电子手帐各擅长什么？",
          paragraphs: [
            "每台 iPhone 自带照片、备忘录和「手记」三款工具。只有当自带工具的版式压平了你想留住的画面感时，专门的视觉手帐 App 才真正有价值。",
            "先用这张表对照四种记录形态，看看你平时最缺的是哪一块。",
          ],
          table: {
            caption: "iPhone 常见四种生活记录工具的定位与排版自由度对比",
            headers: ["工具形态", "核心优势", "排版自由度", "最适合的场景"],
            rows: [
              [
                "系统相册",
                "随手即存、搜索、相簿分类、整机图库同步",
                "固定网格，几乎没有写作与排版空间",
                "原封不动保存所有原始照片与视频",
              ],
              [
                "苹果备忘录",
                "打开极快、待办清单、文件夹、扫描文稿",
                "单栏竖排文本流",
                "工作待办、菜谱、会议纪要、临时草稿",
              ],
              [
                "线性照片日记",
                "时间线回顾、写作提示、心情与语音记录",
                "固定卡片流（图在文上或文内顺排）",
                "偏重连续文字反思的传统日记",
              ],
              [
                "自由电子手帐（拼拼笔记）",
                "自由纸面排版、设备端照片贴纸、卡片堆翻阅、图片导出",
                "照片、文字、贴纸自由移动缩放与叠放",
                "生活碎片精选、旅行手帐、值得反复翻看的图文卡片",
              ],
            ],
          },
        },
        {
          id: "when-apple-notes-is-enough",
          title: "什么时候用系统备忘录或苹果「手记」就已经足够？",
          paragraphs: [
            "先诚实看自己的真实使用习惯。如果你主要记待办事项、工作资料、扫描合同，偶尔插一张参考图，苹果备忘录打开最快，而且能无缝接力到 Mac，没有必要折腾手帐排版。",
            "如果你想要系统自动汇总运动、听歌、常去地点来提醒你写日记，还需要录音、视频和 Mac 键盘打字，苹果自带的「手记」免费且顺手。两者的详细取舍可以看[拼拼笔记 vs 苹果手记对比](/zh/vs/apple-journal)。",
          ],
        },
        {
          id: "when-photo-journal-wins",
          title: "什么时候专门的“照片日记”比相册更有用？",
          paragraphs: [
            "在系统相册里，一张停车位提醒截图和今年最开心的一顿晚饭长得一模一样。过半年想翻旧照，早就被几百张外卖单和工作截图淹没了。",
            "把真正值得记住的那一张挑出来放进[照片日记](/zh/photo-journal)，本身就是一次筛选。哪怕只在照片旁补两句当时的对话，这张图就从一堆文件变成了以后愿意反复打开的一页记忆。",
          ],
          image: "daily",
          caption: "把一张日常照从杂乱相册里挑出来配两句话，记忆才真正有了落脚点。",
        },
        {
          id: "when-digital-scrapbook-wins",
          title: "什么时候“自由拼贴手帐”更能留住当时的氛围？",
          paragraphs: [
            "有些时刻天生是视觉化的：京都街角的一块点心、雨天咖啡馆桌面、一张电影票根配一句台词。把它们塞进死板的单栏文档里，那种松弛的手工质感一下子就没了。",
            "自由排版的[电子手帐](/zh/digital-scrapbook)让照片大小、纸张底色、留白和来自现场的照片抠图贴纸一起讲故事。和主打 Apple Pencil 手绘与复杂模板库的工具（详见[拼拼笔记 vs Zinnia 对比](/zh/vs/zinnia)）不同，以照片与文字为核心的自由画布在 iPhone 上单手也能快速排完。",
          ],
        },
        {
          id: "simple-two-app-system",
          title: "一套不容易放弃的轻量分工法",
          paragraphs: [
            "不必指望一个 App 承接所有信息。把“效率工具”和“回忆收藏”分开，反而最容易长期坚持：",
          ],
          steps: [
            "工作待办、临时链接和购物清单全部留在系统备忘录。",
            "系统相册继续负责兜底保存每一张原始抓拍和视频。",
            "每周只把最想留住的 2 到 4 个片刻放进拼拼笔记：忙的时候排极简页，旅行或周末排拼贴页。",
            "遇到特别满意的一页，导出图片发给朋友或存入相册精选，其余留在卡片堆里自己慢慢翻。",
          ],
        },
      ],
      faq: [
        {
          question: "拼拼笔记适合用来替代苹果备忘录记工作笔记吗？",
          answer:
            "不适合。拼拼笔记专注个人视觉笔记、照片日记与拼贴手帐，不做复杂多级文件夹、多人协作文档或办公文稿扫描。",
        },
        {
          question: "拼拼笔记和 Day One 最大的区别是什么？",
          answer:
            "Day One 擅长跨平台长文 Markdown 日记、音频记录、自动化导入和实体书印制；拼拼笔记专注 iPhone 和 iPad 上的自由视觉排版、设备端照片抠图贴纸与卡片堆翻阅。",
        },
        {
          question: "极简照片日记和丰富拼贴手帐能在同一个 App 里混着用吗？",
          answer:
            "可以。平时忙的时候只放一张照片和一句话，周末或旅行再加贴纸和短注，所有页面都会安静收在同一叠卡片里。",
        },
      ],
    },
  },
};

export function getBlogPost(locale: Locale, slug: BlogSlug): BlogPost {
  return posts[locale][slug];
}

export function getAllBlogPosts(locale: Locale): BlogPost[] {
  return blogSlugs.map((slug) => posts[locale][slug]);
}
