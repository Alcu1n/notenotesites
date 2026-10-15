import Image from "next/image";
import Link from "next/link";
import {
  getScenario,
  getGuide,
  scenarioSlugs,
  guideSlugs,
  type ScenarioSlug,
  type GuideSlug,
  type EditorialSection,
} from "@/lib/editorial-content";
import { getLegal, type LegalSlug } from "@/lib/legal-content";
import { media } from "@/lib/media";
import { localizedPath, type Locale, type PageSlug } from "@/lib/routes";
import { siteConfig, appFacts } from "@/lib/site-config";
import { SiteFrame } from "./site-frame";
import { StructuredData } from "./structured-data";
import { DownloadArea } from "./download-area";
import { Faq } from "./faq";
import { ArrowIcon } from "./icons";

function Breadcrumbs({
  locale,
  page,
  label,
}: {
  locale: Locale;
  page: string;
  label: string;
}) {
  return (
    <nav
      className="breadcrumbs"
      aria-label={locale === "zh" ? "当前位置" : "Breadcrumb"}
    >
      <Link href={localizedPath(locale)}>
        {locale === "zh" ? "首页" : "Home"}
      </Link>
      <span aria-hidden="true">/</span>
      {page.startsWith("guides/") && (
        <>
          <Link href={localizedPath(locale, "guides")}>
            {locale === "zh" ? "教程" : "Guides"}
          </Link>
          <span aria-hidden="true">/</span>
        </>
      )}
      <span aria-current="page">{label}</span>
    </nav>
  );
}
function Closing({ locale, page }: { locale: Locale; page: string }) {
  return (
    <section className="article-closing page-section">
      <div>
        <h2>
          {locale === "zh" ? "这一页，换你来写。" : "Make the next page yours."}
        </h2>
        <p>
          {locale === "zh"
            ? "从手机里的一张照片开始。免费下载，可选 Pro 高级功能。"
            : "Start with a photo already on your phone. Free to download, with optional Pro."}
        </p>
      </div>
      <DownloadArea locale={locale} page={page} position="article-end" />
    </section>
  );
}
function EditorialSections({
  sections,
  locale,
}: {
  sections: EditorialSection[];
  locale: Locale;
}) {
  return (
    <>
      {sections.map((section) => (
        <section id={section.id} key={section.id}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
          {section.steps && (
            <ol>
              {section.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          )}
          {section.image && (
            <figure className="article-figure">
              <Image
                {...media[section.image]}
                alt={section.caption || section.title}
                sizes="(max-width:700px) 86vw, 400px"
              />
              <figcaption>
                {section.caption ||
                  (locale === "zh"
                    ? "真实 App 制作示例，部分样式使用 Pro 功能。"
                    : "A real app example. Some styling uses Pro features.")}
              </figcaption>
            </figure>
          )}
        </section>
      ))}
    </>
  );
}
function ScenarioPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: ScenarioSlug;
}) {
  const c = getScenario(locale, slug),
    zh = locale === "zh";
  return (
    <>
      <Breadcrumbs locale={locale} page={slug} label={c.eyebrow} />
      <section className="scenario-hero page-section">
        <div>
          <p className="eyebrow">{c.eyebrow}</p>
          <h1>{c.heading}</h1>
          <p className="lead">{c.intro}</p>
          <div data-primary-download>
            <DownloadArea locale={locale} page={slug} />
          </div>
          <p className="media-note">
            {zh
              ? "iPhone 与 iPad · 免费下载，可选 Pro"
              : "iPhone & iPad · Free to download, optional Pro"}
          </p>
        </div>
        <figure>
          <Image
            {...media[c.image]}
            alt={c.imageAlt}
            sizes="(max-width:700px) 75vw, 340px"
            loading="eager"
          />
          <figcaption>
            {zh
              ? "真实 App 作品示例 · 部分样式使用 Pro"
              : "Made in the app · Some styling uses Pro"}
          </figcaption>
        </figure>
      </section>
      <div className="article-layout page-section">
        <aside className="article-index">
          <p>{zh ? "这一页里" : "On this page"}</p>
          {c.sections.map((s) => (
            <a href={`#${s.id}`} key={s.id}>
              {s.title}
            </a>
          ))}
        </aside>
        <article className="article-body">
          <EditorialSections sections={c.sections} locale={locale} />
          <section>
            <h2>{zh ? "跟着做一页" : "Make your first page"}</h2>
            <p>{getGuide(locale, c.guide).intro}</p>
            <Link
              className="text-link"
              href={localizedPath(locale, `guides/${c.guide}`)}
            >
              {getGuide(locale, c.guide).heading}
              <ArrowIcon />
            </Link>
          </section>
          <section>
            <h2>{zh ? "你可能还想知道" : "A few useful answers"}</h2>
            <Faq items={c.faq} />
          </section>
          <RelatedScenarios locale={locale} current={slug} />
        </article>
      </div>
      <Closing locale={locale} page={slug} />
    </>
  );
}
function RelatedScenarios({
  locale,
  current,
}: {
  locale: Locale;
  current: string;
}) {
  return (
    <section>
      <h2>
        {locale === "zh" ? "还有这些记录方式" : "More ways to keep a moment"}
      </h2>
      <div className="related-links">
        {scenarioSlugs
          .filter((s) => s !== current)
          .map((s) => (
            <Link className="text-link" href={localizedPath(locale, s)} key={s}>
              {getScenario(locale, s).heading}
              <ArrowIcon />
            </Link>
          ))}
      </div>
    </section>
  );
}
function GuidePage({ locale, slug }: { locale: Locale; slug: GuideSlug }) {
  const c = getGuide(locale, slug),
    page = `guides/${slug}`,
    zh = locale === "zh";
  return (
    <>
      <Breadcrumbs locale={locale} page={page} label={c.heading} />
      <header className="article-hero page-section">
        <p className="eyebrow">
          {zh ? "动手做一页" : "Make a page, step by step"}
        </p>
        <h1>{c.heading}</h1>
        <p className="lead">{c.intro}</p>
        <p className="byline">
          {zh ? "作者" : "By"}{" "}
          <Link href={localizedPath(locale, "about")}>
            @lemon · LRAI STUDIO
          </Link>
          <span>
            {c.minutes} {zh ? "分钟阅读" : "min read"}
          </span>
          <time dateTime={appFacts.contentUpdated}>
            {zh ? "更新于 2026年10月15日" : "Updated October 15, 2026"}
          </time>
        </p>
      </header>
      <div className="article-layout page-section">
        <aside className="article-index">
          <p>{zh ? "跟着这些步骤" : "In this guide"}</p>
          {c.sections.map((s) => (
            <a href={`#${s.id}`} key={s.id}>
              {s.title}
            </a>
          ))}
        </aside>
        <article className="article-body">
          <div className="guide-intro-note" data-primary-download>
            <p>
              {zh
                ? "在拼拼笔记中跟着操作。App 可免费下载，文中提及的高级纸张、字体或样式可能需要 Pro。"
                : "Follow along in PinyPiny. The app is free to download; premium paper, fonts or styling mentioned in this guide may require Pro."}
            </p>
            <DownloadArea
              locale={locale}
              page={page}
              qr={false}
              position="guide-start"
            />
          </div>
          <EditorialSections sections={c.sections} locale={locale} />
          <section>
            <h2>{zh ? "常见问题" : "Common questions"}</h2>
            <Faq items={c.faq} />
          </section>
          <RelatedScenarios locale={locale} current="" />
        </article>
      </div>
      <Closing locale={locale} page={page} />
    </>
  );
}
function GuidesIndex({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  return (
    <>
      <Breadcrumbs
        locale={locale}
        page="guides"
        label={zh ? "教程与灵感" : "Guides & ideas"}
      />
      <section className="article-hero page-section">
        <p className="eyebrow">
          {zh ? "让第一张纸，不再空白" : "A little help getting started"}
        </p>
        <h1>
          {zh
            ? "把手边的照片，\n变成自己的记录。"
            : "From your camera roll\nto a page of your own."}
        </h1>
        <p className="lead">
          {zh
            ? "从手帐的第一张纸，到一张自己的贴纸，再到旅行回来后不舍得忘记的片刻。这里的教程使用真实 App 操作，帮助你把“想记录”变成一页看得见的作品。"
            : "Start a scrapbook, make a sticker from your own photo, or save the details of a trip. These guides use real app steps to help you turn a small idea into a page."}
        </p>
      </section>
      <div className="guide-index-list page-section">
        {guideSlugs.map((slug) => {
          const c = getGuide(locale, slug),
            image =
              slug === "photo-stickers"
                ? media.daily
                : slug === "travel-journal-ideas"
                  ? media.travel
                  : media.inspiration;
          return (
            <article key={slug}>
              <Link
                href={localizedPath(locale, `guides/${slug}`)}
                className="guide-index-image"
              >
                <Image
                  {...image}
                  alt={c.heading}
                  sizes="(max-width:700px) 85vw, 260px"
                />
              </Link>
              <div>
                <p className="eyebrow">
                  {c.minutes} {zh ? "分钟阅读" : "min read"}
                </p>
                <h2>
                  <Link href={localizedPath(locale, `guides/${slug}`)}>
                    {c.heading}
                  </Link>
                </h2>
                <p>{c.intro}</p>
                <Link
                  className="text-link"
                  href={localizedPath(locale, `guides/${slug}`)}
                >
                  {zh ? "打开教程" : "Read the guide"}
                  <ArrowIcon />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
      <Closing locale={locale} page="guides" />
    </>
  );
}
function RichText({ text }: { text: string }) {
  const chunks = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {chunks.map((chunk, index) => {
        const match = chunk.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!match || !/^(https:\/\/|mailto:|\/(?!\/))/.test(match[2]))
          return chunk;
        return (
          <a href={match[2]} key={index}>
            {match[1]}
          </a>
        );
      })}
    </>
  );
}
function LegalPage({ locale, slug }: { locale: Locale; slug: LegalSlug }) {
  const c = getLegal(locale, slug),
    zh = locale === "zh";
  return (
    <>
      <Breadcrumbs locale={locale} page={slug} label={c.title} />
      <header className="article-hero legal-hero page-section">
        <h1>{c.title}</h1>
        <p className="lead">{c.summary}</p>
        <p className="byline">
          LRAI STUDIO · PinyPiny
          <time dateTime={c.updated}>
            {zh ? "更新于 2026年10月15日" : "Updated October 15, 2026"}
          </time>
        </p>
      </header>
      <div className="article-layout page-section">
        <nav
          className="article-index"
          aria-label={zh ? "本页目录" : "On this page"}
        >
          <p>{zh ? "本页目录" : "On this page"}</p>
          {c.sections.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              {s.title}
            </a>
          ))}
        </nav>
        <article className="article-body legal-content">
          {c.sections.map((s) => (
            <section id={s.id} key={s.id}>
              <h2>{s.title}</h2>
              {s.paragraphs.map((text) => (
                <p key={text}>
                  <RichText text={text} />
                </p>
              ))}
              {s.subsections?.map((sub) => (
                <div key={sub.title}>
                  <h3>{sub.title}</h3>
                  {sub.paragraphs.map((text) => (
                    <p key={text}>
                      <RichText text={text} />
                    </p>
                  ))}
                </div>
              ))}
            </section>
          ))}
        </article>
      </div>
    </>
  );
}
function About({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  const facts = zh
    ? [
        ["是什么", "视觉笔记与自由拼贴手帐"],
        ["适用设备", "iPhone 与 iPad，iOS / iPadOS 18 及以上"],
        ["开发者", "LRAI STUDIO · @lemon"],
        ["购买方式", "免费下载，可选 Pro App 内购买"],
        ["数据保存", "设备本地；Pro 支持私人 iCloud 同步"],
        ["App 语言", "简体中文、繁体中文、英语、日语、韩语"],
      ]
    : [
        ["What it is", "Visual notes and a freeform collage journal"],
        ["Devices", "iPhone and iPad, iOS / iPadOS 18 or later"],
        ["Made by", "LRAI STUDIO · @lemon"],
        ["Availability", "Free download, with optional Pro in-app purchases"],
        ["Your content", "Local storage; Pro includes private iCloud sync"],
        [
          "App languages",
          "English, Simplified Chinese, Traditional Chinese, Japanese, Korean",
        ],
      ];
  return (
    <>
      <Breadcrumbs locale={locale} page="about" label={zh ? "关于" : "About"} />
      <section className="about-hero page-section">
        <Image
          src="/assets/pinypiny/app-icon.png"
          alt="PinyPiny"
          width={112}
          height={112}
        />
        <p className="eyebrow">LRAI STUDIO</p>
        <h1>
          {zh
            ? "给生活碎片，\n一张自己的纸。"
            : "A page for the pieces\nthat make a life."}
        </h1>
        <p className="lead">
          {zh
            ? "拼拼笔记（PinyPiny）由 @lemon 开发。它把文字、照片、贴纸和纸张放到一起，让记事也可以像制作一张小小的拼贴。"
            : "PinyPiny is made by @lemon at LRAI STUDIO. It brings writing, photos, stickers and paper together, so a note can become a small collage of your life."}
        </p>
      </section>
      <article className="about-body page-section">
        <section>
          <h2>
            {zh
              ? "记下内容，也留下它的样子。"
              : "Keep the thought. Keep the feeling, too."}
          </h2>
          <p>
            {zh
              ? "有些片刻用一句话就能说清；有些日子，需要一张照片才能想起来。拼拼笔记让这些不同的内容住在同一张纸上，不必把每段记忆都装进相同的格子。"
              : "Some moments need only a sentence. Others make more sense beside a photo. PinyPiny gives those different pieces a page to share, without asking every memory to fit the same arrangement."}
          </p>
          <p>
            {zh
              ? "你可以从很简单的一页开始：一张照片、一句只有自己知道意思的话。字体、颜色、照片和贴纸是表达的材料，空白也是。不必先成为设计师，才能把自己的生活收好。"
              : "Start with a photo and a sentence only you could write. Type, color, photos and stickers are materials for expression. So is empty space. You do not have to become a designer to keep something personal."}
          </p>
        </section>
        <section>
          <h2>
            {zh
              ? "翻阅，也是记录的一部分。"
              : "Returning is part of remembering."}
          </h2>
          <p>
            {zh
              ? "完成的笔记不会只变成列表里的一行。它会回到一叠纸张卡片中，等待你再翻过来。我们把产品最鲜明的表达留给纸面和卡片，希望工具在需要时出现，内容始终是主角。"
              : "A finished note becomes a card in a stack you can browse again. Paper and cards carry the app’s character; the tools are there to help, while what you put on the page stays at the center."}
          </p>
        </section>
        <section>
          <h2>{zh ? "PinyPiny 产品信息" : "PinyPiny at a glance"}</h2>
          <dl className="fact-list">
            {facts.map(([label, detail]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section>
          <h2>{zh ? "联系开发者" : "Talk to the maker"}</h2>
          <p>
            {zh
              ? "有问题、建议，或想告诉我们你用拼拼笔记记录了什么，可以写信到："
              : "For questions, ideas, or something you would like to tell us about PinyPiny, write to "}
            <a href={`mailto:${siteConfig.supportEmail}`}>
              {siteConfig.supportEmail}
            </a>
            {zh ? "。" : "."}
          </p>
          <Link className="text-link" href={localizedPath(locale, "support")}>
            {zh ? "查看帮助与支持" : "Visit help & support"}
            <ArrowIcon />
          </Link>
        </section>
      </article>
      <Closing locale={locale} page="about" />
    </>
  );
}
function Support({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  const questions = zh
    ? [
        {
          question: "第一次打开，先做什么？",
          answer:
            "创建一篇笔记，先写一句话，再用照片入口添加一张自己的照片。想做抠图贴纸时进入贴纸工作室；想换纸张、字体或颜色时打开对应样式选项。不要急着填满页面。",
        },
        {
          question: "照片和贴纸有什么不同？",
          answer:
            "普通照片会保留完整画面。贴纸工作室可以识别并提取照片中的主体，生成带透明背景的贴纸，再加入当前笔记。照片来源允许手动选择识别出的主体，相机来源会先提取主要主体。",
        },
        {
          question: "怎样导出图片？",
          answer:
            "在笔记编辑器中打开导出选项，选择可用的导出样式并保存到系统相册。允许所需的相册权限，并检查设备可用空间。导出是图片，不会创建可共同编辑的网页或 PDF。",
        },
        {
          question: "哪些功能需要 Pro？",
          answer:
            "高级纸张与字体、正文内嵌照片、特殊照片边框、动画及 iCloud 同步属于 Pro。App 可以免费下载并使用基础编辑。具体商品、价格与条款以购买界面和 Apple 显示为准。",
        },
        {
          question: "已经买过 Pro，怎样恢复？",
          answer:
            "确认设备登录了购买时使用的 Apple 账户，在 Pro 购买界面选择“恢复购买”，保持网络可用，并等待结果。恢复购买不会新建一笔购买；如果没有找到记录，请核对 Apple 的购买历史。",
        },
        {
          question: "怎样取消订阅或申请退款？",
          answer:
            "在系统设置中打开 Apple 账户的订阅管理，查看或取消 PinyPiny 的订阅。卸载 App 不会自动取消订阅。退款申请由 Apple 按其政策处理。终身购买不是自动续订订阅。",
        },
        {
          question: "iCloud 同步没有完成怎么办？",
          answer:
            "同步需要 Pro、可用的 Apple iCloud 账户、网络和足够的 iCloud 存储。查看 App 的 iCloud 同步状态与提示，确认两台设备使用相同 Apple 账户并安装可用更新。不要为排查问题先删除 App 或本地数据；仍有问题请联系支持。同步不是独立备份。",
        },
        {
          question: "离线时哪些功能可以用？",
          answer:
            "基础笔记编辑和已保存内容可离线使用。尚未缓存的字体、天气、商店交易及 iCloud 同步需要网络。即使云端暂不可用，也请保留设备上的本地数据。",
        },
        {
          question: "怎么管理照片、相机或定位权限？",
          answer:
            "在 iOS 或 iPadOS 设置中找到 PinyPiny，查看并调整权限。基础文字记录不要求相机或定位。定位只用于你允许的地点与天气上下文，不持续追踪行程。",
        },
        {
          question: "我的问题不在这里？",
          answer: `请发邮件到 ${siteConfig.supportEmail}，附上设备型号、系统版本、App 版本和复现步骤。截图请先遮住私人笔记、照片和 Apple 账户信息。`,
        },
      ]
    : [
        {
          question: "How do I make my first page?",
          answer:
            "Create a note, write a sentence, then add a photo using the photo control. Open Sticker Studio when you want a cut-out subject. Use the available paper, type and color controls to style the page. It is fine to leave space.",
        },
        {
          question: "What is the difference between a photo and a sticker?",
          answer:
            "A photo keeps the complete picture. Sticker Studio extracts recognized subjects into a transparent sticker you can add to the current note. With a library photo, select recognized subjects; the camera flow first extracts the main subject.",
        },
        {
          question: "How do I export a page?",
          answer:
            "Open the export options in the note editor, choose an available export style, and save the image to Photos. Allow the required Photos permission and check available device storage. Export creates an image, not a shared editing page or PDF.",
        },
        {
          question: "Which features need Pro?",
          answer:
            "Additional papers and fonts, inline photos, special photo frames, animation and iCloud sync require Pro. The app is free to download with core editing. Available products, local prices and purchase terms are shown in the app and by Apple.",
        },
        {
          question: "How do I restore a previous Pro purchase?",
          answer:
            "Use the Apple account that made the purchase, open the Pro purchase screen and choose Restore Purchases. Keep a network connection and wait for the result. Restoring does not make a new purchase. If no purchase is found, check your Apple purchase history.",
        },
        {
          question: "How do I cancel a subscription or request a refund?",
          answer:
            "Open subscriptions in your Apple account settings to manage or cancel a PinyPiny subscription. Deleting the app does not cancel it. Apple handles refund requests under its policies. A Lifetime purchase is not an auto-renewing subscription.",
        },
        {
          question: "What if iCloud sync has not completed?",
          answer:
            "Sync needs Pro, an available Apple iCloud account, a connection and sufficient iCloud storage. Check the app’s iCloud status and messages, use the same Apple account on your devices, and install available updates. Do not start troubleshooting by deleting the app or local data. Contact support if needed. Sync is not an independent backup.",
        },
        {
          question: "What works offline?",
          answer:
            "Core note editing and saved content work offline. Uncached fonts, weather, store transactions and iCloud sync need a connection. Keep the local data on your device if cloud services are temporarily unavailable.",
        },
        {
          question: "Where do I change permissions?",
          answer:
            "Find PinyPiny in iOS or iPadOS Settings to review Photos, Camera and location permissions. Basic writing does not require camera or location access. Location supplies optional place and weather context; it does not continuously track a journey.",
        },
        {
          question: "Does PinyPiny have an Android or web editor?",
          answer:
            "PinyPiny is an iPhone and iPad app. This website explains the app and shows real example pages; it is not an online notebook editor.",
        },
        {
          question: "How can I get more help?",
          answer: `Email ${siteConfig.supportEmail} with your device, system version, app version and steps to reproduce the problem. Remove private notes, photos and Apple account details from screenshots before sending them.`,
        },
      ];
  return (
    <>
      <Breadcrumbs
        locale={locale}
        page="support"
        label={zh ? "帮助与支持" : "Help & support"}
      />
      <header className="article-hero page-section">
        <p className="eyebrow">
          {zh ? "需要一点帮助？" : "A little help, when you need it"}
        </p>
        <h1>
          {zh
            ? "把问题放下，\n继续写下一页。"
            : "Back to making\nsomething yours."}
        </h1>
        <p className="lead">
          {zh
            ? "从第一篇笔记，到导出、购买和同步。先看看下面的回答，或直接写信给开发者。"
            : "From your first page to export, purchases and sync. Find an answer below, or write directly to the maker."}
        </p>
        <a className="text-link" href={`mailto:${siteConfig.supportEmail}`}>
          {siteConfig.supportEmail}
          <ArrowIcon />
        </a>
      </header>
      <section className="support-body page-section">
        <div className="support-download" data-primary-download>
          <DownloadArea
            locale={locale}
            page="support"
            position="support-start"
          />
        </div>
        <Faq items={questions} />
        <h2>{zh ? "想边看边做？" : "Prefer a walkthrough?"}</h2>
        <div className="related-links">
          {guideSlugs.map((s) => (
            <Link
              key={s}
              className="text-link"
              href={localizedPath(locale, `guides/${s}`)}
            >
              {getGuide(locale, s).heading}
              <ArrowIcon />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
export function ContentPage({
  locale,
  page,
}: {
  locale: Locale;
  page: Exclude<PageSlug, "">;
}) {
  let content;
  if (page === "privacy" || page === "terms")
    content = <LegalPage locale={locale} slug={page} />;
  else if (page === "guides") content = <GuidesIndex locale={locale} />;
  else if (page === "about") content = <About locale={locale} />;
  else if (page === "support") content = <Support locale={locale} />;
  else if (page.startsWith("guides/"))
    content = <GuidePage locale={locale} slug={page.slice(7) as GuideSlug} />;
  else content = <ScenarioPage locale={locale} slug={page as ScenarioSlug} />;
  return (
    <SiteFrame locale={locale} page={page}>
      <StructuredData locale={locale} page={page} />
      {content}
    </SiteFrame>
  );
}
