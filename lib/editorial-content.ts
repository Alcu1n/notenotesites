import type { Locale } from "./routes";
export type { Locale } from "./routes";

export const scenarioSlugs = [
  "digital-scrapbook",
  "photo-journal",
  "travel-journal",
] as const;

export const guideSlugs = [
  "iphone-digital-scrapbook",
  "photo-stickers",
  "travel-journal-ideas",
] as const;

export type ScenarioSlug = (typeof scenarioSlugs)[number];
export type GuideSlug = (typeof guideSlugs)[number];

export type EditorialSection = {
  id: string;
  title: string;
  paragraphs: string[];
  steps?: string[];
  image?:
    | "daily"
    | "travel"
    | "inspiration"
    | "sticker"
    | "stack"
    | "paper"
    | "export";
  caption?: string;
};

export type ScenarioContent = {
  slug: ScenarioSlug;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  image: "daily" | "travel" | "inspiration";
  imageAlt: string;
  sections: EditorialSection[];
  guide: GuideSlug;
  faq: { question: string; answer: string }[];
};

export type GuideContent = {
  slug: GuideSlug;
  title: string;
  description: string;
  heading: string;
  intro: string;
  minutes: number;
  scenario: ScenarioSlug;
  sections: EditorialSection[];
  faq: { question: string; answer: string }[];
};

const scenarios: Record<Locale, Record<ScenarioSlug, ScenarioContent>> = {
  en: {
    "digital-scrapbook": {
      slug: "digital-scrapbook",
      title: "Digital Scrapbook App for iPhone & iPad | PinyPiny",
      description:
        "Make a digital scrapbook with your own photos, words, and photo stickers. Explore a simple page-making approach in PinyPiny for iPhone and iPad.",
      eyebrow: "Digital scrapbooking",
      heading: "A little scrapbook. Entirely your own.",
      intro:
        "PinyPiny is a digital scrapbook and visual notes app for iPhone and iPad. Arrange photos, text, and stickers freely on the page, then revisit your finished notes as a stack of cards. Start with something small: a coffee, a ticket, a thought you want to keep.",
      image: "inspiration",
      imageAlt:
        "A PinyPiny scrapbook page combining a photograph, short text, and a photo sticker",
      guide: "iphone-digital-scrapbook",
      sections: [
        {
          id: "one-small-story",
          title: "Give one small moment a whole page",
          paragraphs: [
            "A scrapbook does not need a special occasion. The first page might be a photo from your walk, the name of the song you played on repeat, and one sentence about the afternoon. Choosing a single moment makes it easier to decide what belongs on the page.",
            "For an inspiration collage, collect details that share a mood rather than a date: the color of a wall, a phrase from your own notebook, or a picture of an object on your desk. Let one image lead, and use the other pieces to tell its story.",
          ],
          image: "inspiration",
          caption:
            "Made in PinyPiny as a creative example. Your page starts with your own photos and words.",
        },
        {
          id: "build-a-composition",
          title: "Arrange the page around a focal point",
          paragraphs: [
            "Begin with the largest piece: a photo or a short title. Add a smaller note beside it, then leave a little paper visible. Moving and rotating separate elements lets you try a loose collage or a calmer layout without having to fit everything into a single text column.",
            "Keep the main caption easy to read. An angled photo can suggest a physical scrapbook, but every item does not need a different rotation or color. Repeat one accent color to connect the page.",
          ],
          steps: [
            "Create a note and add a photo as a separate page element.",
            "Add a title or a few lines of text, then move the pieces into place.",
            "Adjust their sizes and spacing until one detail clearly leads the page.",
          ],
        },
        {
          id: "make-it-personal",
          title: "Make the decoration part of the memory",
          paragraphs: [
            "Instead of looking for a sticker that almost fits, make one from a photo of something that was there: a flower, a cup, a pet, or a souvenir. Open Sticker Studio, choose a photo, select the detected subject, and preview the cutout before placing it on the paper.",
            "You can also take a new picture from Sticker Studio. The camera flow prepares a sticker preview from the main detected subject. A clear subject against a simple background is a useful starting point; recognition depends on the photo.",
          ],
          image: "sticker",
          caption:
            "Photo stickers are made from your own images; subject detection can vary by photo.",
        },
        {
          id: "finish-and-return",
          title: "Finish a page you will want to open again",
          paragraphs: [
            "Read the page once at a comfortable size. Remove anything that hides the main photo or makes the caption hard to read. Return to the card stack when you are done, or export the finished note as an image to save in Photos.",
            "You can begin with text, separately placed photos, and stickers in the free download. Premium papers and fonts, photos embedded within text, animation, and iCloud sync are optional Pro features. The examples show creative possibilities rather than downloadable templates.",
          ],
          image: "stack",
          caption:
            "Completed notes become cards you can return to and keep editing.",
        },
      ],
      faq: [
        {
          question: "What is a digital scrapbook?",
          answer:
            "A digital scrapbook combines photos, words, and decorative details on a screen. In PinyPiny, you build each page with separately arranged elements and can export the result as an image.",
        },
        {
          question: "Can I start without buying Pro?",
          answer:
            "Yes. PinyPiny is free to download, and you can begin with text, separately placed photos, and stickers. Pro adds premium papers and fonts, inline photos, animation, and iCloud sync.",
        },
        {
          question: "Is this a drawing app?",
          answer:
            "PinyPiny focuses on arranging text, photos, and stickers. The layouts on this website do not require handwriting or drawing tools.",
        },
      ],
    },
    "photo-journal": {
      slug: "photo-journal",
      title: "Photo Journal App for iPhone & iPad | PinyPiny",
      description:
        "Turn an everyday photo and a few words into a personal journal page. Find photo diary ideas and free-form layouts in PinyPiny for iPhone and iPad.",
      eyebrow: "Everyday photo journaling",
      heading: "A photo keeps the scene. You keep the feeling.",
      intro:
        "A photo journal pairs a picture with the details only you remember. PinyPiny gives those photos and words a place of their own, with freely arranged pages and a card stack for revisiting ordinary days on iPhone and iPad.",
      image: "daily",
      imageAlt:
        "An everyday photo diary page in PinyPiny with a photograph, caption, and decorative detail",
      guide: "iphone-digital-scrapbook",
      sections: [
        {
          id: "choose-an-ordinary-photo",
          title: "Choose the photo with a story attached",
          paragraphs: [
            "It does not have to be your best photograph. A half-finished breakfast, the view from a bus, or a blurred picture of your dog can bring back more than a carefully posed shot. Choose the image that makes you remember something beyond what is visible.",
            "Keep the first entry manageable: one photo, one date, and one sentence. You can return to add more later. A page about a quiet Tuesday belongs in a photo diary just as much as a birthday or holiday.",
          ],
          image: "daily",
          caption:
            "A daily journal page made in the app as an example, not a ready-made template.",
        },
        {
          id: "three-ways-to-write",
          title: "The same photo can tell three different stories",
          paragraphs: [
            "Try a minimal page when the picture says enough: one large image and a short line beneath it. For a diary page, make room for a paragraph beside the photo. For a collage, add a cutout detail and a small title to turn the scene into something more playful.",
            "These are composition ideas, not modes you need to unlock. Place the photo and text as separate elements, then change the balance yourself. Photos embedded directly within running text are a separate Pro feature.",
          ],
          steps: [
            "Minimal: a single photo, a date, and a sentence.",
            "Diary: a photo with a short account of what happened around it.",
            "Collage: a photo, a personal sticker, and a few scattered words.",
          ],
        },
        {
          id: "write-what-the-camera-missed",
          title: "Write what the camera could not capture",
          paragraphs: [
            "Instead of describing the picture, add the missing detail. What were you talking about? What could you hear? Why did you stop there? “The café was closing, but we stayed to finish the story” gives a photo a different life from “Coffee with a friend.”",
            "If you do not know where to start, finish one prompt: “I want to remember…”, “Just outside the frame…”, or “This felt like…”. A specific line can be enough; you do not need to turn every entry into an essay.",
          ],
          image: "paper",
          caption: "Leave space for the words that make the photograph yours.",
        },
        {
          id: "keep-and-revisit",
          title: "Keep a collection, one ordinary day at a time",
          paragraphs: [
            "Finished notes appear as cards, making it possible to browse your visual diary as a series of pages rather than a camera roll. Open an old entry when you want to continue the story or adjust its layout.",
            "Notes are stored on your device. Basic editing does not need a network connection; downloading additional materials and using optional Pro iCloud sync do. Export a page as an image when you want a copy in Photos, and choose for yourself whether to share it.",
          ],
          image: "stack",
          caption: "Browse completed journal pages in the card stack.",
        },
      ],
      faq: [
        {
          question: "How is a photo journal different from a photo album?",
          answer:
            "A photo album holds pictures. A photo journal adds your account of the moment: a conversation, a feeling, or a detail outside the frame. PinyPiny lets you arrange that text alongside the image.",
        },
        {
          question: "Do I have to write every day?",
          answer:
            "No. Make a page whenever there is something you want to keep. A single image and a sentence can be a complete entry.",
        },
        {
          question: "Can I save a journal page to my photo library?",
          answer:
            "Yes. PinyPiny exports a note as an image. Allow the requested Photos permission when saving; the editable note remains in the app.",
        },
      ],
    },
    "travel-journal": {
      slug: "travel-journal",
      title: "Travel Journal & Scrapbook App for iPhone | PinyPiny",
      description:
        "Make a travel scrapbook from photos, small discoveries, and your own words. Plan a simple travel journal page in PinyPiny for iPhone and iPad.",
      eyebrow: "A travel scrapbook",
      heading: "Bring the trip home, one page at a time.",
      intro:
        "Use PinyPiny as a travel journal to collect the parts of a trip that a photo album misses: the first meal, a wrong turn, a phrase you kept hearing. Put photos, text, and personal stickers together on your iPhone or iPad, then keep each finished day as a card.",
      image: "travel",
      imageAlt:
        "A travel scrapbook page in PinyPiny with a place photograph and personal travel notes",
      guide: "travel-journal-ideas",
      sections: [
        {
          id: "collect-the-small-details",
          title: "Bring back more than the landmark",
          paragraphs: [
            "Take one wide photo to remember the place and one close-up to remember being there: breakfast, a door handle, the book in your bag. Add a line about the weather or the thing that surprised you. These small details give a travel scrapbook its own voice.",
            "A ticket or café receipt can become part of the page through a photograph. Check it for names, reservation numbers, and other private information before including it in an image you intend to share.",
          ],
          image: "travel",
          caption: "A travel page made in PinyPiny as a composition example.",
        },
        {
          id: "give-each-page-a-role",
          title: "Choose a story before choosing a layout",
          paragraphs: [
            "A day page works well with a place name, one main photo, and three short moments in the order you remember them. A food page can use a close-up, the dish name, and the taste you want to describe. A final-trip page might need only one image and the answer to “What will I miss?”",
            "Keep the place or date easy to find. Arrange secondary photos and stickers around the main image, leaving enough space for a readable caption. Use a similar title treatment across entries if you want the trip to feel like one collection.",
          ],
          steps: [
            "Choose one subject: a day, a meal, a neighborhood, or a discovery.",
            "Place the strongest photo first and add the place name in text.",
            "Add the short details that explain why this moment belongs in the trip.",
          ],
        },
        {
          id: "write-while-its-fresh",
          title: "Leave yourself a note before the details fade",
          paragraphs: [
            "You can write the rough version on the way back to your room: a photo, a title, and a few unpolished lines. Return later to arrange them. A personal journal does not need to be finished at the same time as the experience.",
            "Basic note editing works offline with content available on your device. Prepare any additional papers or fonts before traveling if you want them with you. Pro iCloud sync and material downloads require a connection, so wait for network access when using those features.",
          ],
          image: "paper",
          caption:
            "Start with a short record; give the layout more time when you have it.",
        },
        {
          id: "keep-a-page-share-a-page",
          title: "Keep the full story. Share the page you choose.",
          paragraphs: [
            "When a page is ready, export it as an image to Photos. That gives you a finished travel postcard to send through the sharing tools you already use, while the note in PinyPiny remains available to edit.",
            "Start with the free text, photo, and sticker tools. Optional Pro features add premium paper and font choices, inline photos, animation, and iCloud sync. You do not need a particular paper or a complicated collage to make the trip feel personal.",
          ],
          image: "export",
          caption:
            "Image export is useful for sharing a finished page; it is not an editable note backup.",
        },
      ],
      faq: [
        {
          question: "What should I put in a travel journal?",
          answer:
            "Start with a place, a photo, and one detail that might otherwise be forgotten. Meals, sounds, conversations, small purchases, and unexpected turns are useful subjects alongside the main sights.",
        },
        {
          question: "Can I journal without a network connection?",
          answer:
            "Yes, basic editing uses notes and content available on your device. Download additional materials beforehand. Pro iCloud sync and new material downloads need a network connection.",
        },
        {
          question: "Does PinyPiny record my route automatically?",
          answer:
            "No automatic trip tracking is promised here. These travel pages are made from the photos and words you choose to add yourself.",
        },
      ],
    },
  },
  zh: {
    "digital-scrapbook": {
      slug: "digital-scrapbook",
      title: "电子手帐与自由拼贴 App｜拼拼笔记",
      description:
        "用自己的照片、文字和照片贴纸，做一页自由排版的电子手帐。看看拼拼笔记里的拼贴思路，从一个小片刻开始记录。支持 iPhone 与 iPad。",
      eyebrow: "电子手帐 · 自由拼贴",
      heading: "把生活碎片，拼成一页自己的手帐。",
      intro:
        "拼拼笔记是一款适用于 iPhone 和 iPad 的电子手帐与视觉笔记 App。照片、文字、贴纸可以在纸面上自由摆放，完成的笔记则收成一张张卡片。第一篇不必盛大：一杯咖啡、一张车票、一句突然想留下的话，就够了。",
      image: "inspiration",
      imageAlt:
        "拼拼笔记中的拼贴手帐制作示例，纸面上组合了照片、短句和照片贴纸",
      guide: "iphone-digital-scrapbook",
      sections: [
        {
          id: "one-small-story",
          title: "先选一个片刻，再开始装饰",
          paragraphs: [
            "电子手帐不必等旅行、生日或纪念日才开始。散步时拍到的一棵树、循环播放的一首歌、午后冒出来的一个念头，都能成为一页的主题。先决定“这一页想记住什么”，再挑选素材，反而更容易下手。",
            "做灵感拼贴时，也可以不按日期收集。把桌上的一个物件、街角的一种颜色、自己写下的一句话放在一起，让它们围绕同一种心情。留一个主角，其余细节负责呼应它。",
          ],
          image: "inspiration",
          caption:
            "在 App 中完成的制作示例，用来展示排版思路；请用自己的照片与文字开始。",
        },
        {
          id: "build-a-composition",
          title: "先放大块，再留一点空白",
          paragraphs: [
            "从最重要的一张照片或一句标题开始，把短文字放在旁边，再慢慢调整大小、位置与角度。内容作为独立元素摆在纸面上，既可以排得整齐，也可以错落成一张小拼贴，不必让所有东西挤在同一列。",
            "装饰多不等于完成度高。先确认主照片看得清、文字读得顺，再考虑要不要加贴纸。让标题和某个小细节共用一种颜色，往往比给每个元素都换一个颜色更耐看。",
          ],
          steps: [
            "新建笔记，添加一张作为独立元素摆放的照片。",
            "写下标题或几行文字，将它们移到合适的位置。",
            "调整主次与间距，让最想记住的部分先被看见。",
          ],
        },
        {
          id: "make-it-personal",
          title: "把当时的小物，做成自己的贴纸",
          paragraphs: [
            "不必总去寻找“差不多合适”的装饰。那天拿在手里的杯子、买到的一朵花、路上遇见的小猫，都可以从照片里变成贴纸。打开贴纸工作室，从照片中选图，选择识别出的主体，预览后放到纸上。",
            "也可以直接从贴纸工作室打开相机拍摄。相机会根据识别到的主要主体生成贴纸预览。主体完整、背景简单的照片更适合作为起点；实际识别结果会随照片变化。",
          ],
          image: "sticker",
          caption: "照片贴纸来自你选择或拍摄的图片，主体识别效果因图片而异。",
        },
        {
          id: "finish-and-return",
          title: "做完一页，留给以后慢慢翻",
          paragraphs: [
            "收尾时，把页面当成一次普通阅读：照片有没有被盖住，字会不会太小，有没有不影响故事的装饰可以删掉。完成后回到卡片堆，以后还可以再次打开编辑；想留到相册里，就把笔记导出为图片。",
            "免费下载后，可以先用文字、独立摆放的照片与贴纸开始。高级纸张、字体、正文内嵌照片、动画和 iCloud 同步属于可选 Pro 权益。这里的页面是制作示例，展示的是思路，不是可直接导入的模板。",
          ],
          image: "stack",
          caption: "完成的笔记收进卡片堆，想起这个片刻时再打开。",
        },
      ],
      faq: [
        {
          question: "电子手帐可以记录什么？",
          answer:
            "可以把日常照片、几句心情和想留下的小细节放在同一页。拼拼笔记支持自由摆放文字、照片与贴纸，完成后可导出成图片。",
        },
        {
          question: "一定要购买 Pro 才能开始吗？",
          answer:
            "不用。App 可免费下载，文字、独立摆放的照片和贴纸可以用来开始制作。高级纸张、字体、正文内嵌照片、动画和 iCloud 同步是可选 Pro 功能。",
        },
        {
          question: "需要会手绘或设计吗？",
          answer:
            "不需要。这里的制作思路使用照片、文字和贴纸来排版，不依赖手写或绘画工具。一张照片配一句话，也可以是一页完整的手帐。",
        },
      ],
    },
    "photo-journal": {
      slug: "photo-journal",
      title: "照片日记 App：给照片添上自己的话｜拼拼笔记",
      description:
        "把一张日常照片和几句心情，排成值得回看的图文日记。了解照片日记的写法、极简与拼贴排版，在 iPhone、iPad 上开始拼拼笔记。",
      eyebrow: "照片日记 · 日常记录",
      heading: "照片记住画面，你补上那天的心情。",
      intro:
        "照片日记，是给照片加上只有你知道的细节。拼拼笔记让图与文在纸面上自由组合，把早餐、散步和没什么特别的一天，都留成可以在 iPhone、iPad 上翻阅的卡片笔记。",
      image: "daily",
      imageAlt: "拼拼笔记中的日常照片日记，照片旁有记录当日心情的短文字",
      guide: "iphone-digital-scrapbook",
      sections: [
        {
          id: "choose-an-ordinary-photo",
          title: "选让你想起故事的照片，不必选最好看的一张",
          paragraphs: [
            "吃到一半的早餐、公交车窗外的天、没对上焦的小狗，都可能比一张端正的合照更有记忆。先问问自己：看到它时，会不会想起画面之外的事情？如果会，它就值得被写进照片日记。",
            "第一篇只需要一张照片、一个日期和一句话。以后想起来，还可以再补。安静的周二不比生日更不值得记录，今天只有一句想写的话，也不用为了填满页面而凑一段。",
          ],
          image: "daily",
          caption: "日常图文日记制作示例，展示用自己的照片与文字记录的方式。",
        },
        {
          id: "three-ways-to-write",
          title: "同一张照片，可以写成三种样子",
          paragraphs: [
            "极简排法，让照片占据主要位置，旁边只留一句话。日记排法，多给文字一点空间，记下当时发生了什么。想做拼贴时，就添一个从照片做成的贴纸，再用小标题把画面串起来。",
            "这三种是排版思路，不是需要解锁的固定模式。把照片与文字分别放到纸面上，就能自己调整比例；将照片直接嵌入正文文字之间，则属于另一项 Pro 功能。",
          ],
          steps: [
            "极简：一张照片、日期和一句想留下的话。",
            "日记：照片旁加一小段，写下画面前后发生的事。",
            "拼贴：照片、个人贴纸和几个散落的小词，拼出那天的感觉。",
          ],
        },
        {
          id: "write-what-the-camera-missed",
          title: "写镜头没有拍到的那一部分",
          paragraphs: [
            "照片里已经有咖啡，不妨写当时聊到了什么；照片里已经有海，不妨写风声有多大、为什么那一刻停了下来。“店快打烊了，我们还没讲完那个故事”，往往比“今天和朋友喝咖啡”更能帮你回到现场。",
            "不知道怎么动笔，可以从“我想记住的是……”“画面外其实……”“这一刻让我觉得……”里选一句接下去。具体的一个细节就够，不必把每一页都写成长日记。",
          ],
          image: "paper",
          caption: "给照片留位置，也给当时没能拍下来的话留一点空白。",
        },
        {
          id: "keep-and-revisit",
          title: "慢慢积累，回看时就有了一叠日子",
          paragraphs: [
            "完成的笔记会成为卡片。翻阅时看到的是已经整理过的图文页面，某一张卡片让你想起新的细节，就再打开补一句。它可以随着记忆继续变化。",
            "笔记保存在设备上，基本编辑无需联网；下载额外素材和使用可选的 Pro iCloud 同步时需要网络。想留一份到相册，可以把页面导出为图片，再决定要不要分享给别人。",
          ],
          image: "stack",
          caption: "用卡片堆回看已经完成的照片日记。",
        },
      ],
      faq: [
        {
          question: "照片日记和相册有什么区别？",
          answer:
            "相册保存画面，照片日记再加上你对那个片刻的记录，比如对话、心情或画面外的细节。拼拼笔记可以把这些文字与照片排在同一页。",
        },
        {
          question: "一定要每天写吗？",
          answer:
            "不用。遇到想留下的片刻再做一页就好。一张照片和一句话，也可以是一篇完整记录。",
        },
        {
          question: "做好的图文日记能保存到相册吗？",
          answer:
            "可以。拼拼笔记支持把笔记导出为图片；保存时需允许相应的照片权限。App 内的原笔记仍可继续编辑。",
        },
      ],
    },
    "travel-journal": {
      slug: "travel-journal",
      title: "旅行手帐 App：把旅途做成照片拼贴｜拼拼笔记",
      description:
        "把旅途照片、当地的一句话和小发现，做成自己的旅行手帐。了解旅行日记记什么、怎么排版，在 iPhone 与 iPad 上用拼拼笔记开始记录。",
      eyebrow: "旅行手帐 · 旅途拼贴",
      heading: "把旅途带回家，一次留一页。",
      intro:
        "旅行手帐可以留下照片之外的旅途：第一顿早餐、绕错的一条路、反复听见的一句话。用拼拼笔记把这些文字、照片与个人贴纸放在一起，在 iPhone 或 iPad 上把一次旅行慢慢收成一叠卡片。",
      image: "travel",
      imageAlt:
        "拼拼笔记中的旅行手帐制作示例，旅途照片与地点、个人感受排在同一页",
      guide: "travel-journal-ideas",
      sections: [
        {
          id: "collect-the-small-details",
          title: "除了地标，也带回一点路上的细节",
          paragraphs: [
            "拍一张远景记住地点，再拍一张近景记住当时的自己：早餐、门把手、包里带着的书。写下天气，或今天最意外的一件事。这些不起眼的内容，会让旅行照片拼贴有自己的语气。",
            "车票、收据也可以通过拍照成为页面的一部分。准备导出分享前，先检查姓名、预订编号等信息；值得自己留下的细节，不一定都适合放进公开图片。",
          ],
          image: "travel",
          caption:
            "在 App 中完成的旅行手帐制作示例，用来展示照片与文字的组合。",
        },
        {
          id: "give-each-page-a-role",
          title: "一页只讲一件事，排版就有了方向",
          paragraphs: [
            "想记一整天，可以用地点作标题、一张照片作主图，再按顺序写三个片刻。想记一顿饭，就给食物特写、菜名和口味各留一点位置。旅程最后一页，也许只需要一张图和一句“回去以后最想念什么”。",
            "让地点或日期容易找到，把次要照片与贴纸围在主图旁边，别挤掉正文。如果希望多篇笔记有一本旅行册的感觉，可以沿用相似的标题大小和文字颜色，不必每页重新设计。",
          ],
          steps: [
            "先选主题：一天、一顿饭、一片街区，或一个新发现。",
            "先摆最重要的照片，再用文字写下地点。",
            "补上几句，说明这件事为什么值得留在这次旅行里。",
          ],
        },
        {
          id: "write-while-its-fresh",
          title: "趁还记得，先写下粗糙的一版",
          paragraphs: [
            "回住处的路上，先留一张图、一个标题和几句没修饰过的话。等有时间了再慢慢排版。记录不必和经历同时完成，先把容易忘的细节留住，比立即做出漂亮页面更有用。",
            "设备上已有的内容可以用于离线基本编辑。出发前，先下载好想用的额外纸张或字体。Pro iCloud 同步和新素材下载都需要网络，使用时请等设备恢复连接。",
          ],
          image: "paper",
          caption: "先记片刻，等有空时再细调照片和文字的位置。",
        },
        {
          id: "keep-a-page-share-a-page",
          title: "完整的故事自己留，选好的一页再分享",
          paragraphs: [
            "页面完成后，可以导出为图片存入相册，再通过熟悉的分享方式发送给朋友，像寄出一张自己制作的旅行明信片。App 里的笔记还保留着，回来后想补充，也能继续修改。",
            "免费下载后，文字、照片和贴纸就能用来开始。高级纸张、字体、正文内嵌照片、动画与 iCloud 同步是可选 Pro 权益。不需要特定的纸张，也不需要复杂拼贴，旅行页一样可以很有你的样子。",
          ],
          image: "export",
          caption: "导出的图片适合分享成品，不能代替可编辑笔记的备份。",
        },
      ],
      faq: [
        {
          question: "旅行手帐应该写什么？",
          answer:
            "从一个地点、一张照片和一个容易忘记的细节开始。除了景点，也可以写早餐、声音、聊天、小物件和临时改变的计划。",
        },
        {
          question: "旅行中没网络还能记录吗？",
          answer:
            "可以用设备上已有的内容进行基本编辑。额外素材建议提前下载；Pro iCloud 同步和新素材下载需要联网。",
        },
        {
          question: "App 会自动记录旅行路线吗？",
          answer:
            "这里的旅行手帐由你主动添加的照片与文字组成，不承诺自动追踪或生成行程路线。",
        },
      ],
    },
  },
};

const guides: Record<Locale, Record<GuideSlug, GuideContent>> = {
  en: {
    "iphone-digital-scrapbook": {
      slug: "iphone-digital-scrapbook",
      title: "How to Make a Digital Scrapbook on iPhone | PinyPiny",
      description:
        "Make your first digital scrapbook page on iPhone: choose a photo, arrange text, add a personal sticker, and export an image in PinyPiny.",
      heading: "Make your first scrapbook page on iPhone.",
      intro:
        "Start with one photo and a moment you want to keep. This guide walks through a small, freely arranged page in PinyPiny using text, a separately placed photo, and a personal sticker. You can follow the same idea on iPad.",
      minutes: 5,
      scenario: "digital-scrapbook",
      sections: [
        {
          id: "choose-one-moment",
          title: "1. Choose one moment, not a whole camera roll",
          paragraphs: [
            "Pick a photo with a story you can describe in a sentence. For this first page, a quiet breakfast or a walk is easier to work with than an entire holiday. Keep a second photo only if it adds something the first one cannot show.",
            "Open PinyPiny and create a note. Begin with a plain paper option so the content can lead. Premium papers and fonts are optional Pro features; you can make the composition with the core tools first.",
          ],
          image: "paper",
          caption: "Start with a new note and room for one small story.",
        },
        {
          id: "place-the-main-photo",
          title: "2. Put the main photo on the page",
          paragraphs: [
            "Add your chosen photo as a separate element. Move and resize it until it becomes the focal point, leaving space for a title and a caption. You might keep it straight for a quiet page or turn it slightly for a looser scrapbook feel.",
            "This approach uses a photo placed on the paper. Inserting a photo directly inside running text is a different feature and requires Pro. You do not need inline photos to complete this example.",
          ],
          image: "daily",
          caption:
            "Creative example: a photo and text arranged as separate page elements.",
        },
        {
          id: "add-words-that-matter",
          title: "3. Add the words the photo needs",
          paragraphs: [
            "Write a short title and one or two sentences about the moment. “The walk that took all afternoon” says more than a generic label such as “Weekend.” Add a date or place in text if it will help you remember the scene later.",
            "Use a clear difference between the title and the caption. Keep body text readable, give it some space, and try one accent color before adding more. A scrapbook page can feel personal without filling every corner.",
          ],
          steps: [
            "Name the moment in a short title.",
            "Add a detail outside the frame: a sound, conversation, or feeling.",
            "Read the caption at its final size and adjust spacing if needed.",
          ],
        },
        {
          id: "make-a-personal-sticker",
          title: "4. Add one sticker that belongs to the story",
          paragraphs: [
            "Open Sticker Studio and choose a photo with a clear subject. Select the subject you want to keep, generate its preview, then place the result on the paper. A flower from the walk or the cup from breakfast makes the decoration part of the memory.",
            "Position the sticker beside the main photo instead of over the important detail. If the cutout is not clear, try another image with better separation between the subject and background. This is a useful finishing detail, not a required step.",
          ],
          image: "sticker",
          caption:
            "Select a detected subject from your own photo to create a personal sticker.",
        },
        {
          id: "review-export-revisit",
          title: "5. Read it once, then keep or export it",
          paragraphs: [
            "Check that the title leads, the photo is visible, and the caption is comfortable to read. Remove one element if the page feels crowded. Return to the card stack to keep the editable note in your collection.",
            "To keep a finished copy in Photos, use the note's export option and allow the requested Photos permission. The output is an image. Before sharing, check that the page does not show personal details you would rather keep private.",
          ],
          image: "export",
          caption:
            "Export a finished image while keeping the editable note inside PinyPiny.",
        },
      ],
      faq: [
        {
          question: "What do I need for my first digital scrapbook page?",
          answer:
            "An iPhone or iPad running iOS or iPadOS 18 or later, PinyPiny, and one photo are enough to start. Add a short title and a sentence before trying more decoration.",
        },
        {
          question: "Can I follow this without Pro?",
          answer:
            "Yes. The basic composition uses text, a separately placed photo, and a sticker. Optional premium papers and fonts shown elsewhere, inline photos, animation, and iCloud sync require Pro.",
        },
        {
          question: "Is the finished page a PDF?",
          answer:
            "This guide uses image export to Photos. It does not promise PDF export or a downloadable, editable template.",
        },
      ],
    },
    "photo-stickers": {
      slug: "photo-stickers",
      title: "How to Turn a Photo into a Journal Sticker | PinyPiny",
      description:
        "Create a photo sticker in PinyPiny using an existing photo or the camera. Learn subject selection, previewing, and placing the cutout on a note.",
      heading: "Turn something from your day into a sticker.",
      intro:
        "A photo sticker is a cutout of a subject from one of your pictures. PinyPiny's Sticker Studio offers two starting points: choose a photo you already have, or take a new one. The steps differ slightly, so choose the route that fits your moment.",
      minutes: 4,
      scenario: "digital-scrapbook",
      sections: [
        {
          id: "pick-a-clear-subject",
          title: "1. Start with a subject you can see clearly",
          paragraphs: [
            "A cup, a flower, a pet, or a small souvenir is a good first subject. Use a photo where the whole object is visible and does not blend into the background. Fine hair, transparent objects, shadows, and crowded scenes can make a cutout less predictable.",
            "Open a note and its Sticker Studio. Choose the photo route for an image already in your library, or the camera route when the object is in front of you. Only grant permissions you need for the route you use.",
          ],
        },
        {
          id: "choose-from-photos",
          title: "2. From Photos: select the subject yourself",
          paragraphs: [
            "Choose an image from the photo picker and wait for subject detection. Tap the detected subject you want to keep. You can select more than one detected subject when the picture contains several; the preview action becomes available once there is a selection.",
            "Generate the preview and inspect the edges. If the wrong subject is selected, return to the subject selection and try again. A single detected subject may already be selected for you, but it is still worth checking before you place it.",
          ],
          steps: [
            "Open Sticker Studio and choose the option to select a photo.",
            "Pick an image, then select the detected subject or subjects.",
            "Generate a preview and check that it includes what you want.",
          ],
          image: "sticker",
          caption:
            "The Photos route lets you choose detected subjects before generating the sticker.",
        },
        {
          id: "take-a-new-photo",
          title: "3. From Camera: capture, then check the preview",
          paragraphs: [
            "Choose the camera option in Sticker Studio and allow camera access when asked. Put the subject fully inside the frame, keep the background simple, and take the picture. The camera flow detects the main subject and prepares a sticker preview automatically.",
            "Inspect that preview before adding it to the note. If it misses what you intended, retake the photo with a clearer angle or try the Photos route for manual subject selection. Camera results depend on the scene; not every object can be separated cleanly.",
          ],
          image: "sticker",
          caption:
            "The camera route prepares a preview from the main detected subject.",
        },
        {
          id: "place-on-the-paper",
          title: "4. Place the sticker where it helps the page",
          paragraphs: [
            "Confirm the preview to add the sticker to your note. Move and resize it like a page element. Try putting a small cutout beside a title, or let it overlap the edge of a photo while keeping the important part of that photo visible.",
            "One personal sticker often gives a page enough character. If you need a second, use it to guide the eye toward the caption rather than to cover unused space. The aim is to connect the decoration to the story.",
          ],
          image: "inspiration",
          caption:
            "Creative example: a photo cutout becomes one detail in a finished collage.",
        },
        {
          id: "check-and-finish",
          title: "5. If the cutout is unclear, change the source",
          paragraphs: [
            "When no useful subject is detected, a new source photo is usually the clearest next step. Move the subject away from a busy background, include its edges, and avoid severe blur. For an existing photo, try a different shot of the same object.",
            "If the camera is unavailable, use an existing photo instead. If access was denied, you can review permission settings on your device. Once the page is complete, export the whole note as an image if you want a copy in Photos.",
          ],
        },
      ],
      faq: [
        {
          question: "Can I choose which subject becomes a sticker?",
          answer:
            "In the Photos route, you can select from the subjects detected in the image before generating the preview. The camera route automatically starts with the main detected subject.",
        },
        {
          question: "Why was part of my subject left out?",
          answer:
            "Subject separation depends on the source image. Try a clearer photo with the full object in view and more contrast between the subject and its background. A clean cutout is not guaranteed for every photo.",
        },
        {
          question: "Can I make a sticker without taking a new photo?",
          answer:
            "Yes. Choose an existing image through Sticker Studio's photo picker, select the detected subject, and preview the result before placing it in the note.",
        },
      ],
    },
    "travel-journal-ideas": {
      slug: "travel-journal-ideas",
      title: "Travel Journal Ideas: What to Write & How to Lay It Out",
      description:
        "Five practical ways to build a travel journal page, from collecting small details to arranging photos and captions in PinyPiny on iPhone or iPad.",
      heading: "A travel journal you can start before the trip is over.",
      intro:
        "You do not have to document every hour. Choose one moment you want to bring home and give it a photo, a few words, and some space. These travel journal ideas help you decide what to collect and how to turn it into a page in PinyPiny.",
      minutes: 6,
      scenario: "travel-journal",
      sections: [
        {
          id: "pick-a-small-question",
          title: "1. Give the day one small question",
          paragraphs: [
            "Before you fill a page, choose what it is about. “What surprised me today?” produces a different entry from “What did I eat?” or “Where did I feel most at home?” One question gives your photos and captions a reason to sit together.",
            "For a short trip, you could make an arrival page, a favorite meal page, and a last-day reflection. For a longer trip, a few place-based entries may be easier to keep than a strict daily record.",
          ],
          steps: [
            "A first impression: what did you notice as soon as you arrived?",
            "A small discovery: what would you have missed if you had hurried?",
            "A last-day thought: what will you miss when you leave?",
          ],
        },
        {
          id: "collect-an-anchor-and-detail",
          title: "2. Collect one anchor photo and one close-up",
          paragraphs: [
            "Use a wide view to establish the place and a small detail to make it personal. A street and the pastry you ate there, or a beach and the book you carried, give you a simple pair to build around. More photos are optional.",
            "Photograph tickets or small souvenirs if you want to include them. Before sharing a page, check those images for names, codes, and booking information. Keep a quick text note of the place or dish name while you still remember it.",
          ],
          image: "travel",
          caption:
            "Creative example: one main travel photograph leads the page, with smaller details around it.",
        },
        {
          id: "make-a-rough-entry",
          title: "3. Make a rough entry while it is fresh",
          paragraphs: [
            "Create a note in PinyPiny, add your main photo, and write the place and a short sentence. Do this before spending time on colors or decoration. You can refine the page when you have a quieter moment.",
            "Basic editing works with content available on your device even without a connection. Prepare additional papers or fonts before leaving if you plan to use them. Downloads and Pro iCloud sync need network access.",
          ],
          image: "paper",
          caption:
            "Capture the detail first; make the layout more deliberate later.",
        },
        {
          id: "arrange-a-readable-page",
          title: "4. Build the layout around the part you remember",
          paragraphs: [
            "Place the strongest photo first. Add a clear title with the place or day, then group the caption beside the picture it explains. Keep the second image smaller so the page has an obvious starting point.",
            "A photo sticker of a souvenir can connect the pieces without adding another full photograph. Use the same accent color or title style across the trip to give the collection some continuity. Premium paper and font choices are optional Pro features, not a requirement for the layout.",
          ],
          steps: [
            "Lead with one photo and a short place or day title.",
            "Write three small details: something seen, something felt, something unexpected.",
            "Add a close-up or personal sticker only if it strengthens the story.",
          ],
          image: "travel",
          caption:
            "A finished travel page made in the app as an example; there is no template to import.",
        },
        {
          id: "end-with-a-postcard",
          title: "5. Turn one page into a postcard",
          paragraphs: [
            "Before exporting, read the caption and make sure the page is comfortable to view at phone size. Remove anything that hides a face, place name, or important detail. Use the note's export option to save a finished image to Photos.",
            "The image is a shareable copy, while your editable note stays in PinyPiny. When you get home, revisit the card stack and add the things the trip made you think about afterward. That later perspective can become its own final page.",
          ],
          image: "export",
          caption:
            "Share a finished image and keep the editable travel note in your card stack.",
        },
      ],
      faq: [
        {
          question: "What can I write besides a list of places?",
          answer:
            "Write the detail the itinerary does not contain: a sound, a taste, a conversation, a wrong turn, or a small surprise. A short line beside a photo can be enough.",
        },
        {
          question: "Should I finish every page during the trip?",
          answer:
            "You can make a rough entry first with a photo and a few words, then return to arrange it. Choose the pace that leaves you time to experience the trip.",
        },
        {
          question: "Can I keep travel pages on both iPhone and iPad?",
          answer:
            "PinyPiny supports iPhone and iPad. iCloud sync is an optional Pro feature and requires a network connection and the appropriate iCloud setup on your devices.",
        },
      ],
    },
  },
  zh: {
    "iphone-digital-scrapbook": {
      slug: "iphone-digital-scrapbook",
      title: "iPhone 怎么做电子手帐？从一张照片开始｜拼拼笔记",
      description:
        "用拼拼笔记制作第一篇 iPhone 电子手帐：选照片、排文字、做个人贴纸，最后导出图片。附简单排版思路与免费、Pro 功能说明。",
      heading: "从一张照片开始，做好第一篇电子手帐。",
      intro:
        "不必先找齐一整套素材。准备一张照片，再想一句想留下的话，就能在拼拼笔记里开始。这篇教程用独立摆放的照片、文字和个人贴纸，做一页小手帐；同样的思路也适用于 iPad。",
      minutes: 5,
      scenario: "digital-scrapbook",
      sections: [
        {
          id: "choose-one-moment",
          title: "1. 先选一个片刻，不急着整理整个相册",
          paragraphs: [
            "选一张能让你用一句话讲出故事的照片。第一次制作，早餐、散步比整趟假期更容易下手。如果还想放第二张，就先想想：它有没有补充主图没能表达的内容？",
            "打开拼拼笔记，新建一篇笔记。先从简单的纸面开始，让内容成为主角。高级纸张与字体是可选 Pro 权益，可以先用基础工具把这一页的结构搭起来。",
          ],
          image: "paper",
          caption: "从一篇新笔记开始，先给一个小故事留出位置。",
        },
        {
          id: "place-the-main-photo",
          title: "2. 先摆主照片，再给文字留位置",
          paragraphs: [
            "把选好的照片作为独立元素添加到纸面，调整它的位置和大小，在旁边留出标题、短文字的空间。想清爽一点就摆正，想更像纸质拼贴，可以稍微转一个角度。",
            "这里使用的是摆在纸面上的照片。把照片直接插在正文文字之间，是另一项需要 Pro 的功能；完成这一页不需要使用正文内嵌照片。",
          ],
          image: "daily",
          caption: "制作示例：照片与文字分别摆放，按自己的想法调整主次。",
        },
        {
          id: "add-words-that-matter",
          title: "3. 写照片需要的那句话",
          paragraphs: [
            "添一个短标题，再用一两句话记录当时。“本来只想走十分钟，结果逛了一下午”，比单写“周末”更能帮以后回看的你找到记忆。日期、地点也可以直接写成文字放在旁边。",
            "让标题和正文有明显区别，正文先保证读得清，再考虑装饰。第一版只选一种点缀色，让纸面留一点空白，就能有完整的感觉。",
          ],
          steps: [
            "用一个短标题，说清这一页想记住的片刻。",
            "补一个画面外的细节：声音、对话，或当时的感受。",
            "按最终大小读一遍，调整太小的字和过紧的间距。",
          ],
        },
        {
          id: "make-a-personal-sticker",
          title: "4. 加一张和故事有关的贴纸",
          paragraphs: [
            "打开贴纸工作室，从照片里选一张主体清楚的图片，选择想保留的主体，生成预览，再放到纸上。散步遇见的花、早餐时的杯子，都能让装饰本身成为记录的一部分。",
            "把贴纸放在主图旁边，尽量别盖住最重要的地方。切出的边缘不理想时，可以换一张主体与背景分得更开的照片。贴纸是收尾的小细节，这一步也可以留到以后再做。",
          ],
          image: "sticker",
          caption: "从自己的照片里选择识别出的主体，制作个人贴纸。",
        },
        {
          id: "review-export-revisit",
          title: "5. 读一遍，收进卡片堆或导出图片",
          paragraphs: [
            "看看视线会不会先落到标题和主图上，照片是否完整，正文是否好读。如果显得拥挤，试着删掉一个不重要的元素。回到卡片堆后，这篇笔记还可以再次打开编辑。",
            "想留到相册，就使用笔记的导出功能，并允许保存时请求的照片权限。得到的是完成页面的图片。准备分享前，再看一眼有没有不想公开的姓名、号码或其他细节。",
          ],
          image: "export",
          caption: "导出成品图片；App 中仍保留可继续编辑的原笔记。",
        },
      ],
      faq: [
        {
          question: "第一次做电子手帐，要准备什么？",
          answer:
            "一台运行 iOS 18 或 iPadOS 18 及以上系统的 iPhone、iPad，拼拼笔记，以及一张照片就能开始。先写短标题和一句话，再考虑更多装饰。",
        },
        {
          question: "不购买 Pro 能跟着做吗？",
          answer:
            "可以。这里的基本排版使用文字、独立摆放的照片和贴纸。高级纸张、字体、正文内嵌照片、动画与 iCloud 同步需要 Pro。",
        },
        {
          question: "完成后是导出 PDF 吗？",
          answer:
            "这篇教程使用导出图片到相册的方式，不承诺 PDF 导出，也不提供可以导入 App 的可编辑模板。",
        },
      ],
    },
    "photo-stickers": {
      slug: "photo-stickers",
      title: "怎么把照片做成手帐贴纸？相册与相机两种方法｜拼拼笔记",
      description:
        "用拼拼笔记贴纸工作室，从相册选择照片或直接拍摄，识别主体、查看预览，再放进笔记。了解两条流程与照片主体不清楚时的处理方法。",
      heading: "把日常里的一个小东西，做成自己的贴纸。",
      intro:
        "照片贴纸，是把图片里的主体单独取出来，再放进笔记。拼拼笔记的贴纸工作室有两条入口：从已有照片开始，或直接打开相机拍摄。两条流程略有不同，按手边的素材来选就好。",
      minutes: 4,
      scenario: "digital-scrapbook",
      sections: [
        {
          id: "pick-a-clear-subject",
          title: "1. 先找一张主体清楚的图",
          paragraphs: [
            "第一次可以试试杯子、花、宠物或旅行带回的小物件。主体尽量完整，不要和背景混在一起。透明物体、细碎毛发、很重的阴影或拥挤场景，都可能让分离结果更难判断。",
            "在一篇笔记中打开贴纸工作室。有现成照片就从相册选图，东西就在眼前则可以选相机。按照实际使用的入口，授予所需权限即可。",
          ],
        },
        {
          id: "choose-from-photos",
          title: "2. 从照片制作：自己选择想保留的主体",
          paragraphs: [
            "从照片选择器里选一张图，等待主体识别，再点选想保留的主体。同一张图识别出多个主体时，也可以选择多个；有了选择后，再生成预览。只有一个识别结果时，App 可能已为你选好，仍建议确认一下。",
            "在预览里看看边缘和主体是否符合预期。如果选错了，可以返回重新选择主体。确认满意，再把它放到纸上，不必急着直接加入笔记。",
          ],
          steps: [
            "打开贴纸工作室，选择从照片开始。",
            "选图，等待识别，再点选要保留的主体。",
            "生成预览，确认需要的部分都在。",
          ],
          image: "sticker",
          caption: "照片入口支持先选识别出的主体，再生成贴纸预览。",
        },
        {
          id: "take-a-new-photo",
          title: "3. 从相机制作：拍下小物，再检查预览",
          paragraphs: [
            "在贴纸工作室选择相机，首次使用时允许相机权限。让主体完整进入画面，尽量避开复杂背景，再按下拍摄。相机流程会识别主要主体，自动准备贴纸预览。",
            "先看预览有没有取到你想要的部分，再加入笔记。结果不合适，可以换个角度重拍，或改用照片入口手动选择识别出的主体。识别依赖实际画面，不是每个物件都能得到干净的边缘。",
          ],
          image: "sticker",
          caption: "相机入口会根据主要识别主体自动生成预览，加入前请先确认。",
        },
        {
          id: "place-on-the-paper",
          title: "4. 放进纸面，让贴纸帮你讲故事",
          paragraphs: [
            "确认预览后，将贴纸加入当前笔记，再像其他页面元素一样调整位置与大小。可以把小物放在标题旁，也可以稍微压住照片边缘，但别盖掉照片里的主角。",
            "先加一张往往就够。如果还想加第二张，让它把视线引向正文，而不是仅仅填满空位。那天真正出现过的小东西，比一堆无关装饰更能帮你想起当时。",
          ],
          image: "inspiration",
          caption: "制作示例：照片主体成为拼贴页面中的一个小细节。",
        },
        {
          id: "check-and-finish",
          title: "5. 识别不理想时，先换一张来源图",
          paragraphs: [
            "没有识别出合适主体时，最直接的办法通常是换图：让主体远离杂乱背景，完整拍下边缘，减少明显模糊。已有照片可以试试同一个物件的另一张角度，不必在一个不清楚的结果上反复尝试。",
            "相机不可用时，可以先从已有照片制作；如果此前拒绝了权限，可以到设备设置里检查。页面完成后，仍可将整篇笔记导出为图片，保留一份到相册。",
          ],
        },
      ],
      faq: [
        {
          question: "能自己选照片里的哪个物体做贴纸吗？",
          answer:
            "从照片入口制作时，可以在 App 识别出的主体里进行选择，再生成预览。相机入口则会先自动使用识别出的主要主体。",
        },
        {
          question: "为什么物体边缘没有完整保留？",
          answer:
            "主体分离受原照片影响。可以换一张主体完整、画面清晰、与背景区分明显的照片；并非所有照片都能获得干净的分离结果。",
        },
        {
          question: "不用重新拍照，也能做贴纸吗？",
          answer:
            "可以。在贴纸工作室从已有照片中选图，选择识别出的主体，生成并检查预览后，就可以放进笔记。",
        },
      ],
    },
    "travel-journal-ideas": {
      slug: "travel-journal-ideas",
      title: "旅行手帐写什么、怎么排版？从一个小发现开始｜拼拼笔记",
      description:
        "旅行手帐不必照抄行程表。从照片、小发现和三句记录开始，学习收集素材、安排图文和导出成品，在拼拼笔记里留住旅途。",
      heading: "旅行还没结束，就能开始的手帐。",
      intro:
        "不用逐小时记录行程。挑一个想带回家的片刻，配一张照片、几句话和一点空白，就能完成旅行日记的第一步。下面从“记什么”开始，再把收集到的内容放进拼拼笔记。",
      minutes: 6,
      scenario: "travel-journal",
      sections: [
        {
          id: "pick-a-small-question",
          title: "1. 先给今天一个小问题",
          paragraphs: [
            "动手排版前，先确定这一页回答什么。“今天最意外的事是什么？”“吃到了什么？”“哪里让我想多待一会儿？”不同问题会帮你选出不同的照片，也让文字有话可写。",
            "短途旅行可以留到达、最喜欢的一餐、离开前的心情三篇；长途旅行也可以按地点记几页，不必强迫自己每天交一份作业。先选适合这趟旅行的节奏。",
          ],
          steps: [
            "第一印象：刚到的时候，最先注意到了什么？",
            "小发现：如果走得再快一点，会错过什么？",
            "临别一页：回去以后，最想念的会是什么？",
          ],
        },
        {
          id: "collect-an-anchor-and-detail",
          title: "2. 一张主图，加一个近处的小细节",
          paragraphs: [
            "用远景说明“在哪里”，用近景记住“我在那里做了什么”。一条街配一块路上吃的点心，一片海配一本随身的书，这样一组素材就够开始，不必把当天所有照片都放进去。",
            "想留下车票或小纪念品，也可以拍成照片。准备分享时，留意图片上的姓名、编码和预订信息。另外趁还记得，用文字记下地名、店名或菜名，回家后就不用对着照片猜。",
          ],
          image: "travel",
          caption: "制作示例：用一张主照片带出地点，再放少量细节呼应。",
        },
        {
          id: "make-a-rough-entry",
          title: "3. 先把记忆放进笔记，再慢慢排版",
          paragraphs: [
            "在拼拼笔记里新建笔记，加入主图，写下地点和一句当时的记录。先完成这些，再考虑颜色和装饰。等回住处、有一段安静时间时，继续调整布局就好。",
            "设备上已有的内容可用于离线基本编辑。如果计划使用额外纸张或字体，出发前先下载。新素材下载与 Pro iCloud 同步需要网络，别把联网当作开始记录的前提。",
          ],
          image: "paper",
          caption: "先留下容易忘记的细节，再把页面慢慢整理好。",
        },
        {
          id: "arrange-a-readable-page",
          title: "4. 用清楚的主次，排出这一页的顺序",
          paragraphs: [
            "先摆最重要的照片，用简短标题写地点或日期，再把说明文字靠近对应图片。第二张照片适当缩小，页面就会有明确的阅读起点，不必靠很多装饰来撑起版面。",
            "想加一点个人感，可以把纪念品做成照片贴纸。几页之间沿用一种点缀色或标题样式，也能慢慢形成整本旅行册的感觉。高级纸张和字体是可选 Pro 权益，不是完成这套排版的必要条件。",
          ],
          steps: [
            "一张主图，配一个容易找到的地点或日期标题。",
            "写三个小细节：看到了什么、感受到了什么、意外发生了什么。",
            "只有能补充故事时，再加近景或个人贴纸。",
          ],
          image: "travel",
          caption: "App 内完成的旅行页面制作示例，不提供模板导入。",
        },
        {
          id: "end-with-a-postcard",
          title: "5. 选一页，做成寄给朋友的明信片",
          paragraphs: [
            "导出前按手机上实际查看的大小读一遍，确认没有挡住人脸、地名或重要文字，再用笔记的导出功能将成品图片保存到相册。想和朋友分享，就发送这张完成的页面。",
            "导出的是便于分享的图片，可编辑的原笔记仍在拼拼笔记里。回家后再翻卡片堆，也许会想添上后来才明白的一点感受；这些新的想法，可以成为旅程最后一页。",
          ],
          image: "export",
          caption: "分享一张成品图片，把完整、可继续编辑的记录留在卡片堆里。",
        },
      ],
      faq: [
        {
          question: "除了行程表，旅行手帐还能写什么？",
          answer:
            "可以写行程表没有的内容：声音、口味、一段对话、绕错的路或一个意外发现。照片旁的一小句，也能是一篇有记忆点的记录。",
        },
        {
          question: "必须在旅行时把每一页都做完吗？",
          answer:
            "不用。先放照片、写几句话，回来后再排版也很好。选一个不会挤掉旅行体验的记录节奏。",
        },
        {
          question: "能在 iPhone 和 iPad 上保留同一份旅行笔记吗？",
          answer:
            "拼拼笔记支持 iPhone 和 iPad。iCloud 同步属于可选 Pro 功能，使用时需要联网，并在设备上完成相应的 iCloud 设置。",
        },
      ],
    },
  },
};

export function getScenario(
  locale: Locale,
  slug: ScenarioSlug,
): ScenarioContent {
  return scenarios[locale][slug];
}

export function getGuide(locale: Locale, slug: GuideSlug): GuideContent {
  return guides[locale][slug];
}
