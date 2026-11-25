import type { Locale } from "./routes";
import type { ScenarioSlug } from "./editorial-content";
import type { BlogSlug } from "./blog-content";

export const vsSlugs = ["apple-journal", "day-one", "zinnia"] as const;

export type VsSlug = (typeof vsSlugs)[number];

export type ComparisonRow = {
  trigger: string;
  competitor: string;
  pinypiny: string;
  source: string;
};

export type ComparisonContent = {
  slug: VsSlug;
  competitorName: string;
  checkedDate: string;
  updatedAt: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  verdict: string;
  summaryRows: ComparisonRow[];
  pricingHeading: string;
  pricingParagraphs: string[];
  pricingNote: string;
  migrationHeading: string;
  migrationIntro: string;
  migrationSteps: string[];
  competitorWinsHeading: string;
  competitorWins: string[];
  pinypinyWinsHeading: string;
  pinypinyWins: string[];
  relatedScenario: ScenarioSlug;
  relatedBlogSlug: BlogSlug;
  faq: { question: string; answer: string }[];
};

const comparisons: Record<Locale, Record<VsSlug, ComparisonContent>> = {
  en: {
    "apple-journal": {
      slug: "apple-journal",
      competitorName: "Apple Journal",
      checkedDate: "2026-11-25",
      updatedAt: "2026-11-25",
      title: "PinyPiny vs Apple Journal: Visual Canvas vs Built-in Feed",
      description:
        "Honest comparison of PinyPiny vs Apple Journal on iPhone and iPad. Compare freeform scrapbook layout, photo stickers, Mac support, and pricing.",
      eyebrow: "Honest comparison",
      heading:
        "PinyPiny vs Apple Journal: freeform collage pages vs Apple's built-in diary.",
      verdict:
        "Apple Journal wins if you want a 100% free Apple-ecosystem diary with automatic activity suggestions, audio clips, State of Mind tracking, and Mac support. PinyPiny wins if you want a freeform visual scrapbook canvas on iPhone and iPad with movable text, on-device photo cutout stickers, paper styling, and a tactile card stack.",
      summaryRows: [
        {
          trigger: "Page layout freedom",
          competitor: "Linear chronological stream with inline media blocks",
          pinypiny:
            "Freeform canvas: move, resize, rotate, and layer photos, text, and stickers",
          source: "apple.com & PinyPiny v1.0.3 (checked 2026-11-25)",
        },
        {
          trigger: "Photo cutout stickers",
          competitor: "No built-in photo-to-sticker cutout studio",
          pinypiny:
            "On-device Sticker Studio with library subject selection and camera preview",
          source: "PinyPiny v1.0.3",
        },
        {
          trigger: "Automatic prompts & sensors",
          competitor:
            "Journaling Suggestions from workouts, music, places, and recent outings",
          pinypiny:
            "Manual curation from your chosen photos and words (no automatic route tracking)",
          source: "apple.com (checked 2026-11-25)",
        },
        {
          trigger: "Platforms & input",
          competitor: "iPhone, iPad (with Apple Pencil handwriting), and Mac",
          pinypiny:
            "iPhone and iPad (iOS/iPadOS 18+); built for touch layout without drawing skills",
          source: "apple.com & PinyPiny v1.0.3 (checked 2026-11-25)",
        },
        {
          trigger: "Browsing & sharing",
          competitor: "Vertical list, calendar, and Map view",
          pinypiny:
            "Paper card stack browsing plus finished postcard-style image export to Photos",
          source: "apple.com & PinyPiny v1.0.3 (checked 2026-11-25)",
        },
        {
          trigger: "Pricing & iCloud sync",
          competitor: "100% free with end-to-end encrypted iCloud sync included",
          pinypiny:
            "Free download ($0) with local storage; optional Pro (subscription or Lifetime) adds extra papers, fonts, frames, inline photos, animation, and private iCloud sync",
          source: "apple.com & App Store ID 6804919805 (checked 2026-11-25)",
        },
      ],
      pricingHeading: "Pricing reality: completely free vs optional visual Pro",
      pricingParagraphs: [
        "Apple Journal costs $0 across iPhone, iPad, and Mac, including iCloud sync. If zero spend across every Apple screen is your top priority, Apple Journal is tough to beat.",
        "PinyPiny is free to download ($0) for core visual notes, separately placed photos, on-device photo stickers, local offline editing, and image export. You only pay for optional Pro (offered as a subscription or one-time Lifetime purchase in the App Store, with exact local prices shown in the app) if you want extra papers and fonts, inline photos, special photo frames, animation, and private Apple iCloud sync.",
      ],
      pricingNote:
        "Apple Journal features and pricing verified against apple.com on 2026-11-25; PinyPiny features verified against App Store v1.0.3.",
      migrationHeading: "How to start using PinyPiny alongside Apple Journal",
      migrationIntro:
        "PinyPiny does not automatically import Apple Journal databases. Most people keep past entries in Apple Journal and start fresh with curated visual pages in PinyPiny.",
      migrationSteps: [
        "Leave your existing Apple Journal archive intact; you do not need to delete it to start.",
        "Install PinyPiny on iPhone or iPad and pick one photo from this week that deserves more than a list row.",
        "Use Sticker Studio on one object from the scene, add two honest sentences, and save the card to your stack.",
        "Keep Apple Journal for quick voice memos or mood logs if you like, and use PinyPiny for trips, weekends, and shareable visual pages.",
      ],
      competitorWinsHeading: "Where Apple Journal is the better choice",
      competitorWins: [
        "You want 100% free encrypted iCloud sync across iPhone, iPad, and Mac with zero in-app purchases.",
        "You rely on automatic Journaling Suggestions that pull workouts, music, and places so you never decide what to write about.",
        "You record audio clips, embed videos, track State of Mind, or handwrite with Apple Pencil on iPad.",
        "You prefer typing long reflections on a Mac hardware keyboard.",
      ],
      pinypinyWinsHeading: "Where PinyPiny is the better choice",
      pinypinyWins: [
        "You want to arrange photos, rotated text, and custom stickers freely on paper instead of scrolling a uniform system list.",
        "You want to cut out real objects from your own photos (coffee cups, pets, flowers, souvenirs) directly on device.",
        "You want to revisit memories by flipping through a tactile card stack rather than an administrative feed.",
        "You want to export finished journal pages as clean postcard-style images to share with friends or keep in Photos.",
      ],
      relatedScenario: "photo-journal",
      relatedBlogSlug: "scrapbook-vs-photo-journal-vs-notes-app",
      faq: [
        {
          question: "Can I use both Apple Journal and PinyPiny?",
          answer:
            "Yes. Many people use Apple Journal for quick daily reflection or mood tracking and PinyPiny for visual travel pages, photo collages, and keepsakes they want to export as images.",
        },
        {
          question: "Does PinyPiny have a Mac app like Apple Journal?",
          answer:
            "No. PinyPiny supports iPhone (iOS 18+) and iPad (iPadOS 18+) only.",
        },
        {
          question: "Does PinyPiny sync through Apple iCloud?",
          answer:
            "Yes, private Apple iCloud sync between iPhone and iPad is included in optional PinyPiny Pro.",
        },
      ],
    },
    "day-one": {
      slug: "day-one",
      competitorName: "Day One",
      checkedDate: "2026-11-25",
      updatedAt: "2026-11-25",
      title: "PinyPiny vs Day One: Visual Scrapbook vs Text Diary",
      description:
        "Compare PinyPiny vs Day One (Basic, Silver $49.99/yr, Gold $74.99/yr). See honest trade-offs on photo limits, collage layout, privacy, and Lifetime Pro.",
      eyebrow: "Honest comparison",
      heading:
        "PinyPiny vs Day One: freeform photo collage vs a cross-platform text diary.",
      verdict:
        "Day One wins if you want a cross-platform (iOS, Mac, Android, Web) long-form diary with Markdown, audio transcription, IFTTT integrations, and printed book orders. PinyPiny wins if you journal on iPhone or iPad, want multi-photo freeform collage pages with on-device cutout stickers, and prefer no vendor account plus an optional one-time Lifetime Pro purchase.",
      summaryRows: [
        {
          trigger: "Photos on the free tier",
          competitor: "Day One Basic caps entries at 1 photo per entry",
          pinypiny:
            "Free download lets you place photos, text, and photo cutout stickers freely on each page",
          source: "dayoneapp.com & PinyPiny v1.0.3 (checked 2026-11-25)",
        },
        {
          trigger: "Paid pricing model",
          competitor:
            "Annual subscription only: Silver $49.99/yr or Gold $74.99/yr (no Lifetime option)",
          pinypiny:
            "Optional Pro available as subscription OR one-time Lifetime purchase via App Store",
          source: "dayoneapp.com & App Store ID 6804919805 (checked 2026-11-25)",
        },
        {
          trigger: "Layout style",
          competitor: "Chronological Markdown text stream with stacked media",
          pinypiny:
            "Freeform paper canvas with movable text, angled photos, and personal cutout stickers",
          source: "dayoneapp.com & PinyPiny v1.0.3 (checked 2026-11-25)",
        },
        {
          trigger: "Account & privacy model",
          competitor:
            "End-to-end encrypted; cross-device sync uses Day One cloud account",
          pinypiny:
            "No separate PinyPiny account; local-first on device with optional private Apple iCloud sync (Pro)",
          source: "dayoneapp.com & PinyPiny Privacy Policy (checked 2026-11-25)",
        },
        {
          trigger: "AI & writing approach",
          competitor:
            "Gold tier ($74.99/yr) focuses on AI Daily Chat, summaries, and AI image generation",
          pinypiny:
            "Human-written personal pages with zero generative AI writing or auto-captioning",
          source: "dayoneapp.com & PinyPiny v1.0.3 (checked 2026-11-25)",
        },
        {
          trigger: "Platforms & book printing",
          competitor: "iPhone, iPad, Mac, Android, Web + printed physical books",
          pinypiny:
            "iPhone and iPad (iOS/iPadOS 18+); exports finished pages as images to Photos",
          source: "dayoneapp.com & PinyPiny v1.0.3 (checked 2026-11-25)",
        },
      ],
      pricingHeading: "Pricing math: recurring annual plans vs optional Lifetime Pro",
      pricingParagraphs: [
        "On dayoneapp.com (checked 2026-11-25), Day One Basic is free with unlimited text entries, but limits each entry to 1 photo and excludes cross-device sync. Unlocking multi-photo entries (up to 30 media items) and sync requires Day One Silver at $49.99/year (about $150 over three years), or Day One Gold at $74.99/year ($225 over three years) if you want AI reflection tools. Day One does not offer a one-time lifetime purchase.",
        "PinyPiny is free to download ($0) with local-first storage, freeform text, separately placed photos, and on-device Sticker Studio cutouts. Optional PinyPiny Pro unlocks additional papers and fonts, inline photos, special photo frames, animation, and private Apple iCloud sync, with both a subscription option and a one-time Lifetime option displayed at local App Store prices inside the app.",
      ],
      pricingNote:
        "Day One Basic, Silver ($49.99/yr), and Gold ($74.99/yr) details verified on dayoneapp.com on 2026-11-25. Check the App Store for current regional PinyPiny Pro pricing.",
      migrationHeading: "How to switch from Day One to PinyPiny",
      migrationIntro:
        "Day One exports JSON, PDF, and plain text archives, while PinyPiny uses spatial visual note cards and does not run a bulk Day One archive importer. The cleanest transition takes under ten minutes:",
      migrationSteps: [
        "Export a backup ZIP or PDF of your older Day One text archive from Day One settings so you always own an offline copy.",
        "Download PinyPiny on your iPhone or iPad and start your new chapter from today forward rather than manually re-laying out years of old text.",
        "For favorite past trips, grab 1 to 2 photos from Apple Photos and copy a short quote from your Day One export onto a visual card.",
        "Enable optional Pro iCloud sync only if you want your iPhone and iPad stacks mirrored automatically.",
      ],
      competitorWinsHeading: "Where Day One is the better choice",
      competitorWins: [
        "You need full cross-platform access across Mac, Android, Windows Web, and iOS.",
        "You write long multi-thousand-word Markdown entries, record voice memos with transcription, or embed video.",
        "You want automated imports from Strava, IFTTT, Zapier, or email-to-journal workflows.",
        "You plan to order printed hardcover books directly from your journal archive.",
      ],
      pinypinyWinsHeading: "Where PinyPiny is the better choice",
      pinypinyWins: [
        "You want visual scrapbook and collage layouts rather than a plain text feed capped at 1 photo on the free tier.",
        "You want to turn everyday objects from your photos into personal cutout stickers on device.",
        "You want an optional one-time Lifetime Pro purchase instead of an indefinite $49.99-$74.99/year subscription.",
        "You prefer zero vendor accounts and keeping personal notes strictly on device or in your private Apple iCloud.",
      ],
      relatedScenario: "digital-scrapbook",
      relatedBlogSlug: "private-offline-photo-journal-iphone",
      faq: [
        {
          question: "Can PinyPiny import my Day One JSON backup?",
          answer:
            "No. PinyPiny does not have a Day One archive importer. Keep your Day One export as a readable archive and use PinyPiny for new visual pages.",
        },
        {
          question: "Does PinyPiny have a one-time purchase instead of a subscription?",
          answer:
            "Yes. Optional PinyPiny Pro offers both a subscription and a one-time Lifetime option through the Apple App Store.",
        },
        {
          question: "Can PinyPiny print physical hardcover books like Day One?",
          answer:
            "No built-in book printing service is offered. PinyPiny exports finished pages as images to Apple Photos, which you can share or print through any photo service you choose.",
        },
      ],
    },
    zinnia: {
      slug: "zinnia",
      competitorName: "Zinnia",
      checkedDate: "2026-11-25",
      updatedAt: "2026-11-25",
      title: "PinyPiny vs Zinnia: Photo Collage vs Pencil Planner",
      description:
        "Compare PinyPiny vs Zinnia on iPhone and iPad. See honest differences in Apple Pencil drawing, photo stickers, page limits, and subscription pricing.",
      eyebrow: "Honest comparison",
      heading:
        "PinyPiny vs Zinnia: fast photo collage pages vs an Apple Pencil planner studio.",
      verdict:
        "Zinnia wins if you own an iPad with Apple Pencil and want realistic brushes, bullet-journal habit trackers, calendar sync, and a huge pre-made studio library. PinyPiny wins if you journal primarily on iPhone without drawing skills, want to turn your own photos into on-device cutout stickers, and want an uncluttered free canvas with an optional Lifetime Pro option.",
      summaryRows: [
        {
          trigger: "Primary creation style",
          competitor:
            "Apple Pencil handwriting, calligraphy brushes, and structured bullet-journal planners",
          pinypiny:
            "Finger-friendly photo, typography, and cutout-sticker layout with zero drawing required",
          source: "pixiteapps.com & PinyPiny v1.0.3 (checked 2026-11-25)",
        },
        {
          trigger: "Where stickers come from",
          competitor:
            "Large curated Zinnia Studio library of artist stickers, washi tape, and monthly packs",
          pinypiny:
            "On-device Sticker Studio cuts out real subjects directly from your own photos or camera",
          source: "pixiteapps.com & PinyPiny v1.0.3 (checked 2026-11-25)",
        },
        {
          trigger: "iPhone ergonomics",
          competitor:
            "Runs on iPhone and iPad, designed around big-screen iPad + Apple Pencil workflows",
          pinypiny:
            "Built from the start for fast one-hand photo and caption pages on iPhone and iPad",
          source: "App Store & PinyPiny v1.0.3 (checked 2026-11-25)",
        },
        {
          trigger: "Free tier boundaries",
          competitor:
            "Limited free preview restricting total journals and pages before paywall",
          pinypiny:
            "Free download ($0) includes core note creation, photos, stickers, and image export",
          source: "App Store listing & PinyPiny v1.0.3 (checked 2026-11-25)",
        },
        {
          trigger: "Paid pricing model",
          competitor:
            "Subscription (~$9.99/mo or ~$34.99-$39.99/yr after trial; regional variance)",
          pinypiny:
            "Optional Pro available as subscription or one-time Lifetime purchase in App Store",
          source: "App Store listing & PinyPiny v1.0.3 (checked 2026-11-25)",
        },
        {
          trigger: "Productivity & planners",
          competitor:
            "Habit trackers, Google Calendar sync, Kanban/timeblocking templates, page hyperlinks",
          pinypiny:
            "Focused strictly on personal memories, visual notes, and photo journals (no calendar sync)",
          source: "pixiteapps.com & PinyPiny v1.0.3 (checked 2026-11-25)",
        },
      ],
      pricingHeading: "Pricing & value: template studio subscription vs optional Lifetime Pro",
      pricingParagraphs: [
        "Zinnia charges roughly $9.99/month or $34.99-$39.99/year (checked 2026-11-25; varies by region) to fund its continuously expanding Studio library of artist-drawn planner templates, washi tapes, and calligraphy packs. Its free version restricts how many journals and pages you can create.",
        "PinyPiny takes a lighter approach: your own photos and cutouts supply the personality, so the free download lets you create core visual notes, place photos, cut out stickers on device, and export finished images. Optional Pro adds extra papers and fonts, inline photos, special photo frames, animation, and private iCloud sync, with a one-time Lifetime option alongside subscription billing.",
      ],
      pricingNote:
        "Zinnia features and approximate USD subscription pricing verified against pixiteapps.com and App Store listings on 2026-11-25.",
      migrationHeading: "How to move your photo scrapbooking routine from Zinnia",
      migrationIntro:
        "Because Zinnia notebooks use layered brush/template files and PinyPiny does not import external templates, keep your existing Zinnia planners archived as exported images or PDFs and start your photo pages fresh:",
      migrationSteps: [
        "Export any finished Zinnia spreads you want to keep into Apple Photos.",
        "Open PinyPiny on iPhone and build your first page using the Minimal or Collage layout (1 anchor photo + 1 short caption + 1 personal sticker).",
        "Use Sticker Studio to cut out real objects from your trip or coffee table instead of browsing template packs.",
        "Revisit finished pages in the card stack, and export individual pages as images whenever you want to share.",
      ],
      competitorWinsHeading: "Where Zinnia is the better choice",
      competitorWins: [
        "You love handwriting, sketching, and watercolor/brush lettering with an Apple Pencil on iPad.",
        "You want structured productivity planners, habit trackers, mood grids, and Google Calendar sync.",
        "You enjoy browsing thousands of pre-made seasonal sticker packs, washi tapes, and linked PDF-style templates.",
        "You need internal hyperlinks between planner index pages and monthly spreads.",
      ],
      pinypinyWinsHeading: "Where PinyPiny is the better choice",
      pinypinyWins: [
        "You do not draw or own an Apple Pencil and want polished visual pages on iPhone in under five minutes.",
        "You prefer turning real objects from your own photos into transparent cutout stickers directly on device.",
        "You want a clean free tier for core visual notes plus an optional one-time Lifetime Pro purchase instead of recurring template subscriptions.",
        "You want a calm personal memory stack rather than a productivity tracker.",
      ],
      relatedScenario: "digital-scrapbook",
      relatedBlogSlug: "digital-scrapbook-layout-ideas",
      faq: [
        {
          question: "Does PinyPiny support Apple Pencil drawing like Zinnia?",
          answer:
            "No. PinyPiny focuses on arranging typography, photos, and on-device photo cutout stickers rather than freehand brush drawing or calligraphy.",
        },
        {
          question: "Can I import Zinnia templates or PDF planners into PinyPiny?",
          answer:
            "No. PinyPiny does not import third-party templates or PDF planners. Each page starts from your own words, photos, and stickers.",
        },
        {
          question: "Which app is faster to use on iPhone during a trip?",
          answer:
            "PinyPiny is designed around quick touch layout on iPhone with offline core editing, making it straightforward to drop in a travel photo and caption on the go.",
        },
      ],
    },
  },
  zh: {
    "apple-journal": {
      slug: "apple-journal",
      competitorName: "苹果「手记」",
      checkedDate: "2026-11-25",
      updatedAt: "2026-11-25",
      title: "拼拼笔记 vs 苹果手记：自由拼贴手帐与系统日记对比",
      description:
        "客观对比拼拼笔记与苹果原生「手记」(Apple Journal)：从排版自由度、照片贴纸、Mac 支持、自动建议与价格边界看清各自适合谁。",
      eyebrow: "客观对比",
      heading: "拼拼笔记 vs 苹果「手记」：自由拼贴纸面与系统原生流。",
      verdict:
        "如果你想要完全免费、覆盖 iPhone/iPad/Mac、自动根据运动和地点生成写作建议并支持录音与心情追踪的系统日记，苹果「手记」更合适。如果你想在 iPhone 和 iPad 上自由移动旋转照片与文字、把生活小物抠成专属贴纸，并用卡片堆翻阅回忆，拼拼笔记更对口。",
      summaryRows: [
        {
          trigger: "版面排版自由度",
          competitor: "按时间线排列的固定图文流",
          pinypiny: "自由纸面画布：照片、文字、贴纸均可自由移动、缩放、旋转与叠放",
          source: "apple.com 与拼拼笔记 v1.0.3（2026-11-25 核对）",
        },
        {
          trigger: "照片抠图贴纸",
          competitor: "无内置照片主体抠图贴纸工作室",
          pinypiny: "设备端贴纸工作室，支持相册手选主体与相机自动预览",
          source: "拼拼笔记 v1.0.3",
        },
        {
          trigger: "自动记录建议",
          competitor: "可自动整合照片、体能训练、听过的音乐与常去地点生成提示",
          pinypiny: "由你主动挑选照片与文字记录，不后台追踪行程路线",
          source: "apple.com（2026-11-25 核对）",
        },
        {
          trigger: "设备与输入方式",
          competitor: "支持 iPhone、iPad（含 Apple Pencil 手写）及 Mac 键盘写作",
          pinypiny: "支持 iPhone 与 iPad（iOS/iPadOS 18+），专为触控自由排版设计，无需手绘",
          source: "apple.com 与拼拼笔记 v1.0.3（2026-11-25 核对）",
        },
        {
          trigger: "翻阅与分享方式",
          competitor: "列表流、日历与地图视图",
          pinypiny: "纸张卡片堆翻阅，并可将成品页导出为明信片感图片存入相册",
          source: "apple.com 与拼拼笔记 v1.0.3（2026-11-25 核对）",
        },
        {
          trigger: "价格与 iCloud 同步",
          competitor: "完全免费，内置端到端加密 iCloud 同步",
          pinypiny: "免费下载并在本地使用；可选 Pro（订阅或终身买断）解锁更多纸张、字体、边框、内嵌照片、动画与私人 iCloud 同步",
          source: "apple.com 与 App Store ID 6804919805（2026-11-25 核对）",
        },
      ],
      pricingHeading: "价格与权益：系统零成本 vs 可选视觉 Pro",
      pricingParagraphs: [
        "苹果「手记」在 iPhone、iPad 和 Mac 上完全免费，且自带加密 iCloud 同步。如果“零付费覆盖全苹果设备”是你的第一优先级，系统自带的「手记」非常省心。",
        "拼拼笔记可免费下载，直接提供文字、独立照片摆放、设备端照片贴纸、离线本地保存与图片导出。只有当你需要更多纸张与字体、正文内嵌照片、特殊照片边框、动画及私人 iCloud 同步时，才需要考虑可选的 Pro（App Store 内提供订阅与一次性终身买断选项，具体价格以当地商店为准）。",
      ],
      pricingNote:
        "苹果「手记」功能与价格于 2026-11-25 核对自 apple.com；拼拼笔记功能以 App Store 1.0.3 上架版本为准。",
      migrationHeading: "如何把拼拼笔记和苹果「手记」搭配起来用",
      migrationIntro:
        "拼拼笔记不直接导入苹果「手记」数据库。最自然的做法是保留原有记录，把值得做成视觉页面的时刻交给拼拼笔记：",
      migrationSteps: [
        "保留系统「手记」里的历史日记，无需删除或搬家。",
        "在 iPhone 或 iPad 上打开拼拼笔记，挑一张本周最有记忆点的照片开始第一页。",
        "把画面里的小物通过贴纸工作室抠成一枚贴纸，配两句画面外的真实感受，收进卡片堆。",
        "平时仍可以用苹果「手记」录语音或打卡心情，把旅行、周末与想导出分享的回忆留给拼拼笔记。",
      ],
      competitorWinsHeading: "这些情况下，苹果「手记」更适合你",
      competitorWins: [
        "希望零付费同时在 iPhone、iPad 和 Mac 上使用加密 iCloud 同步。",
        "依赖系统自动整合运动、音乐与地点来提醒写日记，不想自己挑素材。",
        "需要插入视频、语音录音、心理状态追踪，或在 iPad 上用 Apple Pencil 手写涂鸦。",
        "习惯在 Mac 上用实体键盘写长篇每日反思。",
      ],
      pinypinyWinsHeading: "这些情况下，拼拼笔记更适合你",
      pinypinyWins: [
        "厌倦千篇一律的系统列表流，想在纸面上自由摆放、倾斜和叠放照片、文字与贴纸。",
        "喜欢把咖啡杯、宠物、花朵、旅行小物直接从自己照片里抠成专属贴纸。",
        "喜欢用纸张卡片堆的触感翻阅旧日子，而不是翻看工作感很强的记录列表。",
        "想把排好的整页手帐导出成干净的图片，发给朋友或留进相册。",
      ],
      relatedScenario: "photo-journal",
      relatedBlogSlug: "scrapbook-vs-photo-journal-vs-notes-app",
      faq: [
        {
          question: "可以同时用苹果「手记」和拼拼笔记吗？",
          answer:
            "完全可以。不少人用苹果「手记」记录零碎语音与每日心情，用拼拼笔记做旅行手帐、周末照片拼贴和值得导出分享的视觉页。",
        },
        {
          question: "拼拼笔记像苹果「手记」一样有 Mac 版吗？",
          answer: "目前没有。拼拼笔记仅支持 iOS 18 及以上的 iPhone 和 iPadOS 18 及以上的 iPad。",
        },
        {
          question: "拼拼笔记支持 Apple iCloud 同步吗？",
          answer: "支持。通过你自己的 Apple 私人 iCloud 在 iPhone 和 iPad 间同步属于可选 Pro 功能。",
        },
      ],
    },
    "day-one": {
      slug: "day-one",
      competitorName: "Day One",
      checkedDate: "2026-11-25",
      updatedAt: "2026-11-25",
      title: "拼拼笔记 vs Day One：照片拼贴手帐与长文日记对比",
      description:
        "实测对比拼拼笔记与 Day One（免费版 1 图限制、Silver $49.99/年、Gold $74.99/年）：看清免费权限、视觉排版、隐私架构与终身买断差异。",
      eyebrow: "客观对比",
      heading: "拼拼笔记 vs Day One：自由照片拼贴手帐与跨平台长文日记。",
      verdict:
        "如果你需要覆盖 iOS、Mac、Android 和网页端的长篇 Markdown 日记、语音转文字、自动化导入以及实体书印制，Day One 更强大。如果你只在 iPhone 和 iPad 记录，想要打破免费版单图限制的自由拼贴排版、设备端照片贴纸、免注册本地保存以及可选的终身买断 Pro，拼拼笔记更轻巧顺手。",
      summaryRows: [
        {
          trigger: "免费版照片限制",
          competitor: "Day One Basic 免费版每篇日记仅限添加 1 张照片",
          pinypiny: "免费下载即可在纸面上自由摆放文字、照片与照片抠图贴纸",
          source: "dayoneapp.com 与拼拼笔记 v1.0.3（2026-11-25 核对）",
        },
        {
          trigger: "付费模式",
          competitor: "仅按年订阅：Silver $49.99/年 或 Gold $74.99/年（无终身买断）",
          pinypiny: "可选 Pro 同时支持订阅与一次性终身买断（通过 Apple App Store）",
          source: "dayoneapp.com 与 App Store ID 6804919805（2026-11-25 核对）",
        },
        {
          trigger: "页面排版风格",
          competitor: "按时间线排列的 Markdown 文字流与顺序配图",
          pinypiny: "自由纸面拼贴画布，支持旋转排版、自定义贴纸与卡片堆浏览",
          source: "dayoneapp.com 与拼拼笔记 v1.0.3（2026-11-25 核对）",
        },
        {
          trigger: "账号与隐私架构",
          competitor: "支持端到端加密；跨设备同步需使用 Day One 账号",
          pinypiny: "无需注册独立账号，本地优先保存，Pro 通过私人 Apple iCloud 同步",
          source: "dayoneapp.com 与拼拼笔记隐私政策（2026-11-25 核对）",
        },
        {
          trigger: "AI 功能取向",
          competitor: "Gold 档位（$74.99/年）主打 AI 对话反思、摘要与 AI 生图",
          pinypiny: "专注真人手写记录，不使用生成式 AI 读取或代写日记",
          source: "dayoneapp.com 与拼拼笔记 v1.0.3（2026-11-25 核对）",
        },
        {
          trigger: "平台与实体书",
          competitor: "支持 iPhone、iPad、Mac、Android、Web，支持印制精装实体书",
          pinypiny: "专注 iPhone 与 iPad（iOS/iPadOS 18+），支持将单页导出为图片存入相册",
          source: "dayoneapp.com 与拼拼笔记 v1.0.3（2026-11-25 核对）",
        },
      ],
      pricingHeading: "价格结构对比：持续年费订阅 vs 可选一次性终身买断",
      pricingParagraphs: [
        "根据 dayoneapp.com（2026-11-25 核对），Day One 免费版（Basic）支持无限文字，但每篇限 1 张照片且不支持跨设备同步。要解锁多图与同步需要订阅 Silver（$49.99/年，三年约 $150），想要 AI 反思工具则需 Gold（$74.99/年，三年约 $225），且不提供月付或一次性买断。",
        "拼拼笔记免费下载即可使用核心自由排版、照片摆放与设备端抠图贴纸。可选 Pro 解锁额外纸张、字体、正文内嵌照片、特殊照片边框、动画与私人 iCloud 同步，并在 App Store 内提供订阅和一次性终身买断两种选择（当地人民币或其他币种价格以 App 内显示为准）。",
      ],
      pricingNote:
        "Day One Basic、Silver（$49.99/年）与 Gold（$74.99/年）信息于 2026-11-25 核对自 dayoneapp.com；拼拼笔记 Pro 当地价格请以 App Store 实时展示为准。",
      migrationHeading: "如何从 Day One 平滑切换到拼拼笔记",
      migrationIntro:
        "Day One 导出的是文本/JSON/PDF 归档，而拼拼笔记是空间自由排版卡片，不提供批量导入旧日记的功能。推荐用最省心的方式衔接：",
      migrationSteps: [
        "先在 Day One 设置中导出一份 ZIP 或 PDF 备份妥善存档，确保历史长文随时可查。",
        "在 iPhone 或 iPad 上安装拼拼笔记，从今天的新记忆开始记录，不必强迫自己把几年前的旧账全部重新排版。",
        "遇到特别想做成视觉卡片的旧旅行，从系统相册挑出 1-2 张照片，复制 Day One 里的两句原话即可。",
        "如果同时用 iPhone 和 iPad，再按需开启可选 Pro 的私人 iCloud 同步。",
      ],
      competitorWinsHeading: "这些情况下，Day One 更适合你",
      competitorWins: [
        "需要在 Mac、Android 手机、Windows 网页端和 iOS 之间跨生态写日记。",
        "经常写上千字 Markdown 长文、录制语音转写或插入视频附件。",
        "依赖 Strava、IFTTT、Zapier 或发邮件自动归档日记的工作流。",
        "希望直接在 App 内下单把年度日记印成精装实体书。",
      ],
      pinypinyWinsHeading: "这些情况下，拼拼笔记更适合你",
      pinypinyWins: [
        "更想要视觉拼贴手帐与自由照片排版，而不是受限于单图上限的文字时间线。",
        "喜欢把自己的照片小物一键在本地抠成贴纸放进页面。",
        "不希望为了多图与同步长期承担每年 $49.99-$74.99 的续费，更看重可选的一次性终身买断。",
        "看重免注册账号，希望个人照片和文字留在本地和私人 Apple iCloud。",
      ],
      relatedScenario: "digital-scrapbook",
      relatedBlogSlug: "private-offline-photo-journal-iphone",
      faq: [
        {
          question: "拼拼笔记能直接导入 Day One 的 JSON 备份吗？",
          answer:
            "不支持。建议把 Day One 的历史导出文件作为只读归档保存，从新的一页开始在拼拼笔记里做视觉记录。",
        },
        {
          question: "拼拼笔记支持一次性买断吗？",
          answer: "支持。拼拼笔记的可选 Pro 通过 Apple App Store 提供订阅和一次性终身买断选项。",
        },
        {
          question: "拼拼笔记支持像 Day One 那样直接印实体书吗？",
          answer:
            "App 内不提供实体书印刷服务。你可以把完成的页面导出为高清图片到相册，再用任意冲印或画册服务自行印制。",
        },
      ],
    },
    zinnia: {
      slug: "zinnia",
      competitorName: "Zinnia",
      checkedDate: "2026-11-25",
      updatedAt: "2026-11-25",
      title: "拼拼笔记 vs Zinnia：手机照片拼贴与手绘手帐对比",
      description:
        "对比拼拼笔记与 Zinnia 手帐 App：从 Apple Pencil 手绘、iPhone 单手体验、照片贴纸来源、免费页数限制与订阅模式帮你做选择。",
      eyebrow: "客观对比",
      heading: "拼拼笔记 vs Zinnia：轻快的手机照片拼贴与 Apple Pencil 手绘工坊。",
      verdict:
        "如果你常用 iPad 配 Apple Pencil 写手写体、画插画、做习惯打卡和日程规划，并喜欢海量现成素材库，Zinnia 更贴合。如果你主要在 iPhone 上用手指快速排照片与短句、不会画画、想把自己的照片做成贴纸，且希望免费版不被页数限制、Pro 支持终身买断，拼拼笔记更轻松。",
      summaryRows: [
        {
          trigger: "核心创作方式",
          competitor: "主打 Apple Pencil 手写、仿真画笔与子弹笔记计划模板",
          pinypiny: "主打照片、文字排版与照片抠图贴纸，完全不需要绘画功底",
          source: "pixiteapps.com 与拼拼笔记 v1.0.3（2026-11-25 核对）",
        },
        {
          trigger: "贴纸与装饰来源",
          competitor: "庞大的 Zinnia Studio 官方素材库（月更贴纸、胶带、计划表）",
          pinypiny: "设备端贴纸工作室，直接从你的实拍照片或相机里提取主体做成专属贴纸",
          source: "pixiteapps.com 与拼拼笔记 v1.0.3（2026-11-25 核对）",
        },
        {
          trigger: "iPhone 使用体验",
          competitor: "支持 iPhone 与 iPad，核心交互围绕 iPad 大屏和触控笔设计",
          pinypiny: "从一开始就为 iPhone 与 iPad 触控排版优化，单手几分钟即可排完一页",
          source: "App Store 与拼拼笔记 v1.0.3（2026-11-25 核对）",
        },
        {
          trigger: "免费版边界",
          competitor: "免费版限制可创建的本子与页数，主要用于试用体验",
          pinypiny: "免费下载即可使用核心文字排版、照片摆放、照片贴纸与图片导出",
          source: "App Store 页面与拼拼笔记 v1.0.3（2026-11-25 核对）",
        },
        {
          trigger: "付费方式",
          competitor: "订阅制（试用后约 $9.99/月 或 $34.99-$39.99/年，各区略有差异）",
          pinypiny: "可选 Pro 支持订阅或一次性终身买断（通过 Apple App Store）",
          source: "App Store 页面与拼拼笔记 v1.0.3（2026-11-25 核对）",
        },
        {
          trigger: "效率与日程功能",
          competitor: "支持日历同步、习惯打卡、情绪表格、看板模板与页面超链接",
          pinypiny: "专注生活回忆、照片日记与旅行手帐，不做日程同步与打卡效率系统",
          source: "pixiteapps.com 与拼拼笔记 v1.0.3（2026-11-25 核对）",
        },
      ],
      pricingHeading: "付费思路：海量素材库订阅 vs 自带照片素材 + 可选终身 Pro",
      pricingParagraphs: [
        "Zinnia 采用持续订阅制（2026-11-25 核对美区约 $9.99/月或 $34.99-$39.99/年），核心价值在于源源不断更新的插画师模板、胶带和手帐计划本素材库；免费版则对本子和页数有明显限制。",
        "拼拼笔记走的是“让你的照片成为主角”的轻量路线：免费下载即可持续创作基础图文与照片贴纸页，可选 Pro 解锁额外纸张、字体、正文内嵌照片、特殊照片边框、动画与私人 iCloud 同步，并提供一次性终身买断选项。",
      ],
      pricingNote:
        "Zinnia 功能与参考订阅价格于 2026-11-25 核对自 pixiteapps.com 及 App Store 公开信息。",
      migrationHeading: "如何把日常照片记录从 Zinnia 迁移到拼拼笔记",
      migrationIntro:
        "Zinnia 的画笔图层和计划模板无法直接导入拼拼笔记。建议把过去的计划本导出成图片或 PDF 存档，在拼拼笔记里轻松开启照片手帐：",
      migrationSteps: [
        "把 Zinnia 里最喜欢的旧页面导出图片保存到系统相册留作纪念。",
        "打开拼拼笔记，先用“一张主图 + 一句短文 + 一枚照片贴纸”的极简或拼贴结构完成第一页。",
        "试着用贴纸工作室直接抠出当天拍到的咖啡杯、花束或伴手礼，替代去素材库翻找通用贴纸。",
        "用卡片堆翻阅日常记录，需要发朋友圈或小红书时把成品页导出成图片即可。",
      ],
      competitorWinsHeading: "这些情况下，Zinnia 更适合你",
      competitorWins: [
        "你喜欢在 iPad 上用 Apple Pencil 手写花体字、涂鸦或使用仿真水彩画笔。",
        "你需要月计划、习惯打卡表、情绪追踪和 Google 日历同步等效率手帐体系。",
        "你很享受每月挑选海量现成主题模板、和纸胶带与手绘贴纸包。",
        "你希望在多页计划本之间添加目录超链接跳转。",
      ],
      pinypinyWinsHeading: "这些情况下，拼拼笔记更适合你",
      pinypinyWins: [
        "你没有 Apple Pencil 或不想手绘，只想在 iPhone 上用几分钟排出干净好看的照片手帐。",
        "比起通用插画贴纸，你更喜欢把亲身经历里的真实物件抠成专属照片贴纸。",
        "希望免费版就能安心记录日常，并且进阶功能提供一次性终身买断选项，减少订阅焦虑。",
        "只想安静收藏生活回忆，不需要复杂的日程管理与效率打卡。",
      ],
      relatedScenario: "digital-scrapbook",
      relatedBlogSlug: "digital-scrapbook-layout-ideas",
      faq: [
        {
          question: "拼拼笔记像 Zinnia 一样支持 Apple Pencil 手绘画画吗？",
          answer:
            "不支持。拼拼笔记专注照片、文字自由排版与设备端照片抠图贴纸，不提供手绘笔刷或手写涂鸦工具。",
        },
        {
          question: "能把 Zinnia 的模板或 PDF 手帐导入拼拼笔记吗？",
          answer:
            "不能。拼拼笔记不支持导入第三方模板或 PDF 计划本，每一页都从你的照片、文字和贴纸直接开始。",
        },
        {
          question: "旅行路上只带 iPhone，哪款更容易随手记录？",
          answer:
            "拼拼笔记针对 iPhone 触控排版和离线本地编辑设计，坐车或吃早餐时花两分钟就能先放一张图和几句话，回住处再细调。",
        },
      ],
    },
  },
};

export function getComparison(
  locale: Locale,
  slug: VsSlug,
): ComparisonContent {
  return comparisons[locale][slug];
}

export function getAllComparisons(locale: Locale): ComparisonContent[] {
  return vsSlugs.map((slug) => comparisons[locale][slug]);
}
