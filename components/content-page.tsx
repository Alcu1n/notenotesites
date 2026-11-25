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
import {
  getBlogPost,
  getAllBlogPosts,
  type BlogSlug,
  type BlogSection,
} from "@/lib/blog-content";
import {
  getComparison,
  getAllComparisons,
  vsSlugs,
  type VsSlug,
} from "@/lib/vs-content";
import { getLegal, type LegalSlug } from "@/lib/legal-content";
import { media } from "@/lib/media";
import { localizedPath, type Locale, type PageSlug } from "@/lib/routes";
import { siteConfig, appFacts } from "@/lib/site-config";
import { supportFaqFor } from "@/lib/ui-copy";
import { SiteFrame } from "./site-frame";
import { StructuredData } from "./structured-data";
import { DownloadArea } from "./download-area";
import { Faq } from "./faq";
import { ArrowIcon } from "./icons";

function formatDate(iso: string, locale: Locale): string {
  const [year, month, day] = iso.split("-").map(Number);
  if (locale === "zh") return `${year}年${month}月${day}日`;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${months[(month || 1) - 1]} ${day}, ${year}`;
}

function Breadcrumbs({
  locale,
  page,
  label,
}: {
  locale: Locale;
  page: string;
  label: string;
}) {
  const zh = locale === "zh";
  const parent = page.startsWith("guides/")
    ? { slug: "guides", label: zh ? "教程" : "Guides" }
    : page.startsWith("blog/")
      ? { slug: "blog", label: zh ? "博客" : "Blog" }
      : page.startsWith("vs/")
        ? { slug: "vs", label: zh ? "产品对比" : "Compare" }
        : null;

  return (
    <nav
      className="breadcrumbs"
      aria-label={zh ? "当前位置" : "Breadcrumb"}
    >
      <Link href={localizedPath(locale)}>{zh ? "首页" : "Home"}</Link>
      <span className="breadcrumb-sep" aria-hidden="true">
        /
      </span>
      {parent && (
        <>
          <Link href={localizedPath(locale, parent.slug)}>{parent.label}</Link>
          <span className="breadcrumb-sep" aria-hidden="true">
            /
          </span>
        </>
      )}
      <span aria-current="page">{label}</span>
    </nav>
  );
}

function Closing({ locale, page }: { locale: Locale; page: string }) {
  return (
    <section className="article-closing-wrap page-section" data-reveal>
      <div className="article-closing">
        <span className="stage-corner stage-corner--tl" aria-hidden="true" />
        <span className="stage-corner stage-corner--tr" aria-hidden="true" />
        <span className="stage-corner stage-corner--bl" aria-hidden="true" />
        <span className="stage-corner stage-corner--br" aria-hidden="true" />
        <div className="article-closing-copy">
          <p className="eyebrow">
            {locale === "zh" ? "开始你的第一页" : "START YOUR FIRST PAGE"}
          </p>
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
      </div>
    </section>
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
        if (match[2].startsWith("/")) {
          return (
            <Link href={match[2]} key={index}>
              {match[1]}
            </Link>
          );
        }
        return (
          <a href={match[2]} key={index}>
            {match[1]}
          </a>
        );
      })}
    </>
  );
}

function EditorialSections({
  sections,
  locale,
}: {
  sections: (EditorialSection | BlogSection)[];
  locale: Locale;
}) {
  return (
    <>
      {sections.map((section, index) => {
        const hasLeadingNum = /^\d+\./.test(section.title);
        const blogSection = section as BlogSection;
        return (
          <section id={section.id} key={section.id} data-reveal>
            {!hasLeadingNum && (
              <span className="article-sec-num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
            <h2>{section.title}</h2>
            {section.paragraphs.map((text) => (
              <p key={text}>
                <RichText text={text} />
              </p>
            ))}
            {blogSection.bullets && (
              <ul className="editorial-bullets">
                {blogSection.bullets.map((item) => (
                  <li key={item}>
                    <RichText text={item} />
                  </li>
                ))}
              </ul>
            )}
            {section.steps && (
              <ol className="editorial-steps">
                {section.steps.map((step) => (
                  <li key={step}>
                    <RichText text={step} />
                  </li>
                ))}
              </ol>
            )}
            {blogSection.table && (
              <div className="editorial-table-wrap">
                <table className="editorial-table">
                  <caption>{blogSection.table.caption}</caption>
                  <thead>
                    <tr>
                      {blogSection.table.headers.map((header) => (
                        <th scope="col" key={header}>
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {blogSection.table.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) =>
                          cellIndex === 0 ? (
                            <th scope="row" key={cellIndex}>
                              {cell}
                            </th>
                          ) : (
                            <td key={cellIndex}>{cell}</td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {section.image && (
              <figure className="article-figure">
                <div className="article-figure-frame">
                  <Image
                    {...media[section.image]}
                    alt={section.caption || section.title}
                    sizes="(max-width:700px) 86vw, 400px"
                  />
                </div>
                <figcaption>
                  {section.caption ||
                    (locale === "zh"
                      ? "真实 App 制作示例，部分样式使用 Pro 功能。"
                      : "A real app example. Some styling uses Pro features.")}
                </figcaption>
              </figure>
            )}
          </section>
        );
      })}
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
  const companionBlogSlug: BlogSlug =
    slug === "digital-scrapbook"
      ? "digital-scrapbook-layout-ideas"
      : slug === "photo-journal"
        ? "everyday-photo-journal-prompts"
        : "private-offline-photo-journal-iphone";
  const companionBlog = getBlogPost(locale, companionBlogSlug);

  return (
    <>
      <Breadcrumbs locale={locale} page={slug} label={c.eyebrow} />
      <section className="scenario-hero page-section">
        <div className="scenario-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            {c.eyebrow}
          </p>
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
        <figure className="scenario-figure">
          <div className="scenario-stage">
            <span className="stage-corner stage-corner--tl" aria-hidden="true" />
            <span className="stage-corner stage-corner--tr" aria-hidden="true" />
            <span className="stage-corner stage-corner--bl" aria-hidden="true" />
            <span className="stage-corner stage-corner--br" aria-hidden="true" />
            <span className="scenario-stage-label" aria-hidden="true">
              {zh ? "真实 App 示例" : "REAL APP PAGE"}
            </span>
            <div className="scenario-shot">
              <Image
                {...media[c.image]}
                alt={c.imageAlt}
                sizes="(max-width:700px) 75vw, 340px"
                loading="eager"
              />
            </div>
          </div>
          <figcaption>
            <span className="caption-dot" aria-hidden="true" />
            {zh
              ? "真实 App 作品示例 · 部分样式使用 Pro"
              : "Made in the app · Some styling uses Pro"}
          </figcaption>
        </figure>
      </section>
      <div className="article-layout page-section">
        <aside className="article-index">
          <p>{zh ? "这一页里" : "On this page"}</p>
          {c.sections.map((s, index) => (
            <a href={`#${s.id}`} key={s.id}>
              <span className="toc-num" aria-hidden="true">
                0{index + 1}
              </span>
              <span>{s.title}</span>
            </a>
          ))}
        </aside>
        <article className="article-body">
          <EditorialSections sections={c.sections} locale={locale} />
          <section className="article-callout" data-reveal>
            <p className="eyebrow">{zh ? "配套教程与深度阅读" : "COMPANION GUIDE & READING"}</p>
            <h2>{zh ? "跟着做一页" : "Make your first page"}</h2>
            <p>{getGuide(locale, c.guide).intro}</p>
            <div className="related-links" style={{ marginTop: 16 }}>
              <Link
                className="text-link"
                href={localizedPath(locale, `guides/${c.guide}`)}
              >
                {getGuide(locale, c.guide).heading}
                <ArrowIcon />
              </Link>
              <Link
                className="text-link"
                href={localizedPath(locale, `blog/${companionBlog.slug}`)}
              >
                {companionBlog.heading}
                <ArrowIcon />
              </Link>
              <Link className="text-link" href={localizedPath(locale, "vs")}>
                {zh
                  ? "对比苹果手记、Day One 与 Zinnia"
                  : "Compare PinyPiny vs Apple Journal, Day One & Zinnia"}
                <ArrowIcon />
              </Link>
            </div>
          </section>
          <section data-reveal>
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
    <section className="related-section" data-reveal>
      <h2>
        {locale === "zh" ? "还有这些记录方式" : "More ways to keep a moment"}
      </h2>
      <div className="related-links">
        {scenarioSlugs
          .filter((s) => s !== current)
          .map((s) => (
            <Link className="text-link" href={localizedPath(locale, s)} key={s}>
              {getScenario(locale, s).anchorLabel}
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
          <span className="eyebrow-dot" aria-hidden="true" />
          {zh ? "动手做一页" : "Make a page, step by step"}
        </p>
        <h1>{c.heading}</h1>
        <p className="lead">{c.intro}</p>
        <p className="byline">
          <span>
            {zh ? "作者 " : "By "}
            <Link href={localizedPath(locale, "about")}>
              @lemon · LRAI STUDIO
            </Link>
          </span>
          <span className="byline-sep" aria-hidden="true">
            ·
          </span>
          <span>
            {c.minutes} {zh ? "分钟阅读" : "min read"}
          </span>
          <span className="byline-sep" aria-hidden="true">
            ·
          </span>
          <time dateTime={appFacts.contentUpdated}>
            {zh
              ? `更新于 ${formatDate(appFacts.contentUpdated, "zh")}`
              : `Updated ${formatDate(appFacts.contentUpdated, "en")}`}
          </time>
        </p>
      </header>
      <div className="article-layout page-section">
        <aside className="article-index">
          <p>{zh ? "跟着这些步骤" : "Step outline"}</p>
          {c.sections.map((s, index) => (
            <a href={`#${s.id}`} key={s.id}>
              {!/^\d+\./.test(s.title) && (
                <span className="toc-num" aria-hidden="true">
                  0{index + 1}
                </span>
              )}
              <span>{s.title}</span>
            </a>
          ))}
        </aside>
        <article className="article-body">
          <div className="guide-intro-note" data-primary-download>
            <p>
              {zh
                ? "在拼拼笔记中跟着操作。App 可免费下载，下文提及的高级纸张、字体或样式可能需要 Pro。"
                : "Follow along in PinyPiny. The app is free to download; premium paper, fonts or styling shown below may require Pro."}
            </p>
            <DownloadArea
              locale={locale}
              page={page}
              qr={false}
              position="guide-start"
            />
          </div>
          <EditorialSections sections={c.sections} locale={locale} />
          <section className="article-callout" data-reveal>
            <p className="eyebrow">
              {zh ? "对应使用场景" : "BUILT FOR THIS WORKFLOW"}
            </p>
            <h2>{getScenario(locale, c.scenario).anchorLabel}</h2>
            <p>{getScenario(locale, c.scenario).intro}</p>
            <Link
              className="text-link"
              href={localizedPath(locale, c.scenario)}
            >
              {zh
                ? `探索${getScenario(locale, c.scenario).anchorLabel}`
                : `Explore ${getScenario(locale, c.scenario).anchorLabel}`}
              <ArrowIcon />
            </Link>
          </section>
          <section data-reveal>
            <h2>{zh ? "常见问题" : "Common questions"}</h2>
            <Faq items={c.faq} />
          </section>
          <RelatedScenarios locale={locale} current={c.scenario} />
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
          <span className="eyebrow-dot" aria-hidden="true" />
          {zh ? "让第一张纸，不再空白" : "A little help getting started"}
        </p>
        <h1>
          {zh
            ? "电子手帐与\n照片日记教程。"
            : "Digital scrapbook &\nphoto journal guides."}
        </h1>
        <p className="lead">
          {zh
            ? "从手帐的第一张纸，到一张自己的贴纸，再到旅行回来后不舍得忘记的片刻。这里的教程使用真实 App 操作，帮助你把“想记录”变成一页看得见的作品。"
            : "Start a scrapbook, make a sticker from your own photo, or save the details of a trip. These guides use real app steps to help you turn a small idea into a page."}
        </p>
      </section>
      <div className="guide-index-list page-section">
        {guideSlugs.map((slug, index) => {
          const c = getGuide(locale, slug),
            image =
              slug === "photo-stickers"
                ? media.daily
                : slug === "travel-journal-ideas"
                  ? media.travel
                  : media.inspiration;
          return (
            <article key={slug} data-reveal>
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
              <div className="guide-index-copy">
                <p className="eyebrow">
                  <span className="section-num">0{index + 1}</span>
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
      <div className="page-section">
        <section className="article-callout" data-reveal>
          <p className="eyebrow">{zh ? "延伸阅读" : "FURTHER READING"}</p>
          <h2>
            {zh
              ? "想看更多排版思路与工具对比？"
              : "Looking for layout recipes or app comparisons?"}
          </h2>
          <p>
            {zh
              ? "在拼拼笔记博客阅读电子手帐排版比例、离线私密方案与 25 个日常照片日记灵感，或直接查看与苹果手记、Day One、Zinnia 的客观对比。"
              : "Read essays on iPhone scrapbook ratios, offline local-first privacy, and 25 photo journal prompts in the blog, or compare PinyPiny side by side with other iOS journal apps."}
          </p>
          <div className="related-links" style={{ marginTop: 16 }}>
            <Link className="text-link" href={localizedPath(locale, "blog")}>
              {zh ? "进入拼拼笔记博客" : "Browse all blog articles"}
              <ArrowIcon />
            </Link>
            <Link className="text-link" href={localizedPath(locale, "vs")}>
              {zh ? "查看 iPhone 手帐与日记 App 对比" : "Compare journal apps"}
              <ArrowIcon />
            </Link>
          </div>
        </section>
      </div>
      <div className="page-section">
        <RelatedScenarios locale={locale} current="" />
      </div>
      <Closing locale={locale} page="guides" />
    </>
  );
}

function BlogIndex({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  const allPosts = getAllBlogPosts(locale);
  return (
    <>
      <Breadcrumbs
        locale={locale}
        page="blog"
        label={zh ? "博客" : "Blog"}
      />
      <section className="article-hero page-section">
        <p className="eyebrow">
          <span className="eyebrow-dot" aria-hidden="true" />
          {zh ? "拼拼笔记博客 · 编辑专栏" : "PINYPINY BLOG · EDITORIAL NOTES"}
        </p>
        <h1>
          {zh
            ? "电子手帐排版、\n隐私与记录灵感。"
            : "Digital scrapbooking,\nprivacy & journaling notes."}
        </h1>
        <p className="lead">
          {zh
            ? "围绕 iPhone 与 iPad 上的真实记录习惯：分享可复用的手帐排版比例、免注册离线照片日记方案、日常写作灵感，以及手帐和日记 App 的选择思路。"
            : "Practical essays on laying out iPhone scrapbook pages, keeping a private offline photo journal without an account, beating blank-page friction, and choosing the right memory app."}
        </p>
      </section>
      <div className="guide-index-list page-section">
        {allPosts.map((post, index) => (
          <article key={post.slug} data-reveal>
            <Link
              href={localizedPath(locale, `blog/${post.slug}`)}
              className="guide-index-image"
            >
              <Image
                {...media[post.coverImage]}
                alt={post.coverAlt}
                sizes="(max-width:700px) 85vw, 260px"
              />
            </Link>
            <div className="guide-index-copy">
              <p className="eyebrow">
                <span className="section-num">0{index + 1}</span>
                {post.category} · {post.minutes} {zh ? "分钟阅读" : "min read"}
              </p>
              <h2>
                <Link href={localizedPath(locale, `blog/${post.slug}`)}>
                  {post.heading}
                </Link>
              </h2>
              <p>{post.intro}</p>
              <Link
                className="text-link"
                href={localizedPath(locale, `blog/${post.slug}`)}
              >
                {zh ? "阅读全文" : "Read article"}
                <ArrowIcon />
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="page-section">
        <section className="article-callout" data-reveal>
          <p className="eyebrow">{zh ? "客观产品对比" : "HONEST COMPARISONS"}</p>
          <h2>
            {zh
              ? "还在对比不同的 iPhone 日记与手帐 App？"
              : "Comparing iPhone journal and scrapbook apps?"}
          </h2>
          <p>
            {zh
              ? "我们整理了基于公开信息核对的对比页，明确写清每款工具各自更胜一筹的场景。"
              : "Read fact-checked side-by-side breakdowns showing where each app wins and when PinyPiny fits best."}
          </p>
          <div className="related-links" style={{ marginTop: 16 }}>
            {vsSlugs.map((slug) => (
              <Link
                key={slug}
                className="text-link"
                href={localizedPath(locale, `vs/${slug}`)}
              >
                {getComparison(locale, slug).heading}
                <ArrowIcon />
              </Link>
            ))}
          </div>
        </section>
      </div>
      <div className="page-section">
        <RelatedScenarios locale={locale} current="" />
      </div>
      <Closing locale={locale} page="blog" />
    </>
  );
}

function BlogPostPage({ locale, slug }: { locale: Locale; slug: BlogSlug }) {
  const post = getBlogPost(locale, slug);
  const page = `blog/${slug}`;
  const zh = locale === "zh";
  const splitIndex = post.calloutAfterSectionIndex + 1;
  const firstHalf = post.sections.slice(0, splitIndex);
  const secondHalf = post.sections.slice(splitIndex);

  return (
    <>
      <Breadcrumbs locale={locale} page={page} label={post.category} />
      <header className="article-hero page-section">
        <p className="eyebrow">
          <span className="eyebrow-dot" aria-hidden="true" />
          {post.category}
        </p>
        <h1>{post.heading}</h1>
        <p className="lead">{post.intro}</p>
        <p className="byline">
          <span>
            {zh ? "作者 " : "By "}
            <Link href={localizedPath(locale, "about")}>
              @lemon · LRAI STUDIO
            </Link>
          </span>
          <span className="byline-sep" aria-hidden="true">
            ·
          </span>
          <span>
            {post.minutes} {zh ? "分钟阅读" : "min read"}
          </span>
          <span className="byline-sep" aria-hidden="true">
            ·
          </span>
          <time dateTime={post.updatedAt}>
            {zh
              ? `更新于 ${formatDate(post.updatedAt, "zh")}`
              : `Updated ${formatDate(post.updatedAt, "en")}`}
          </time>
        </p>
      </header>
      <div className="article-layout page-section">
        <aside className="article-index">
          <p>{zh ? "本文目录" : "On this page"}</p>
          {post.sections.map((s, index) => (
            <a href={`#${s.id}`} key={s.id}>
              <span className="toc-num" aria-hidden="true">
                0{index + 1}
              </span>
              <span>{s.title}</span>
            </a>
          ))}
        </aside>
        <article className="article-body">
          <EditorialSections sections={firstHalf} locale={locale} />
          <section className="article-callout" data-primary-download data-reveal>
            <p className="eyebrow">{post.callout.eyebrow}</p>
            <h2>{post.callout.title}</h2>
            <p>{post.callout.body}</p>
            <div className="blog-callout-actions">
              <Link
                className="text-link"
                href={localizedPath(locale, post.callout.targetSlug)}
              >
                {post.callout.linkLabel}
                <ArrowIcon />
              </Link>
              <DownloadArea
                locale={locale}
                page={page}
                qr={false}
                position="blog-callout"
              />
            </div>
          </section>
          <EditorialSections sections={secondHalf} locale={locale} />
          <section data-reveal>
            <h2>{zh ? "常见问题" : "Common questions"}</h2>
            <Faq items={post.faq} />
          </section>
          <section className="related-section" data-reveal>
            <h2>{zh ? "延伸阅读与配套教程" : "Related reading & guides"}</h2>
            <div className="related-links">
              <Link
                className="text-link"
                href={localizedPath(locale, post.primaryScenario)}
              >
                {getScenario(locale, post.primaryScenario).anchorLabel}
                <ArrowIcon />
              </Link>
              {post.relatedGuides.map((gSlug) => (
                <Link
                  className="text-link"
                  href={localizedPath(locale, `guides/${gSlug}`)}
                  key={gSlug}
                >
                  {getGuide(locale, gSlug).heading}
                  <ArrowIcon />
                </Link>
              ))}
              {post.relatedBlogSlugs.map((bSlug) => (
                <Link
                  className="text-link"
                  href={localizedPath(locale, `blog/${bSlug}`)}
                  key={bSlug}
                >
                  {getBlogPost(locale, bSlug).heading}
                  <ArrowIcon />
                </Link>
              ))}
            </div>
          </section>
        </article>
      </div>
      <Closing locale={locale} page={page} />
    </>
  );
}

function VsIndex({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  const all = getAllComparisons(locale);
  return (
    <>
      <Breadcrumbs
        locale={locale}
        page="vs"
        label={zh ? "产品对比" : "Compare"}
      />
      <section className="article-hero page-section">
        <p className="eyebrow">
          <span className="eyebrow-dot" aria-hidden="true" />
          {zh ? "事实核对 · 客观取舍" : "FACT-CHECKED COMPARISONS"}
        </p>
        <h1>
          {zh
            ? "拼拼笔记与其他\niPhone 日记 App 对比。"
            : "PinyPiny vs other\niPhone journal apps."}
        </h1>
        <p className="lead">
          {zh
            ? "每款记录工具都有自己最擅长的方向。以下对比基于 2026 年 11 月 25 日核对的公开官方资料，既写清拼拼笔记的优势，也明确标出竞品更适合你的场景。"
            : "Every journaling app makes different design trade-offs. Each comparison below is verified against official documentation on November 25, 2026 and clearly states where the other app wins."}
        </p>
      </section>
      <section className="page-section" style={{ paddingTop: 0 }}>
        <div className="vs-index-grid">
          {all.map((item, index) => (
            <article className="vs-index-card" key={item.slug} data-reveal>
              <p className="eyebrow">
                <span className="section-num">0{index + 1}</span>
                {zh ? `核对日期 ${item.checkedDate}` : `Checked ${item.checkedDate}`}
              </p>
              <h2>
                <Link href={localizedPath(locale, `vs/${item.slug}`)}>
                  {item.heading}
                </Link>
              </h2>
              <p>{item.verdict}</p>
              <Link
                className="text-link"
                href={localizedPath(locale, `vs/${item.slug}`)}
              >
                {zh
                  ? `查看与 ${item.competitorName} 的完整对比`
                  : `Read PinyPiny vs ${item.competitorName}`}
                <ArrowIcon />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <div className="page-section">
        <RelatedScenarios locale={locale} current="" />
      </div>
      <Closing locale={locale} page="vs" />
    </>
  );
}

function VsDetailPage({ locale, slug }: { locale: Locale; slug: VsSlug }) {
  const c = getComparison(locale, slug);
  const page = `vs/${slug}`;
  const zh = locale === "zh";
  const otherComparisons = vsSlugs.filter((s) => s !== slug);

  return (
    <>
      <Breadcrumbs
        locale={locale}
        page={page}
        label={zh ? `对比 ${c.competitorName}` : `vs ${c.competitorName}`}
      />
      <header className="article-hero page-section">
        <p className="eyebrow">
          <span className="eyebrow-dot" aria-hidden="true" />
          {c.eyebrow}
        </p>
        <h1>{c.heading}</h1>
        <div className="vs-verdict-box">
          <p className="eyebrow">{zh ? "一句话结论" : "SHORT VERDICT"}</p>
          <p className="lead" style={{ marginTop: 8 }}>
            {c.verdict}
          </p>
        </div>
        <p className="byline">
          <span>
            {zh ? "整理自公开官方信息" : "Verified from official docs"}
          </span>
          <span className="byline-sep" aria-hidden="true">
            ·
          </span>
          <time dateTime={c.checkedDate}>
            {zh
              ? `核对日期 ${formatDate(c.checkedDate, "zh")}`
              : `Checked ${formatDate(c.checkedDate, "en")}`}
          </time>
        </p>
      </header>
      <div className="article-layout page-section">
        <aside className="article-index">
          <p>{zh ? "对比目录" : "On this page"}</p>
          <a href="#comparison-table">
            <span className="toc-num" aria-hidden="true">
              01
            </span>
            <span>{zh ? "核心差异表" : "Key differences"}</span>
          </a>
          <a href="#pricing-reality">
            <span className="toc-num" aria-hidden="true">
              02
            </span>
            <span>{zh ? "价格与付费方式" : "Pricing & model"}</span>
          </a>
          <a href="#who-wins">
            <span className="toc-num" aria-hidden="true">
              03
            </span>
            <span>{zh ? "各自更适合谁" : "Which fits you"}</span>
          </a>
          <a href="#switching-steps">
            <span className="toc-num" aria-hidden="true">
              04
            </span>
            <span>{zh ? "如何衔接使用" : "Getting started"}</span>
          </a>
        </aside>
        <article className="article-body">
          <section id="comparison-table" data-reveal>
            <span className="article-sec-num" aria-hidden="true">
              01
            </span>
            <h2>
              {zh
                ? `拼拼笔记与 ${c.competitorName} 核心差异一览`
                : `PinyPiny vs ${c.competitorName}: side-by-side triggers`}
            </h2>
            <div className="editorial-table-wrap">
              <table className="editorial-table">
                <caption>
                  {zh
                    ? `拼拼笔记与 ${c.competitorName} 核心功能与边界对比（核对日期：${c.checkedDate}）`
                    : `Side-by-side comparison of ${c.competitorName} and PinyPiny (checked ${c.checkedDate})`}
                </caption>
                <thead>
                  <tr>
                    <th scope="col">{zh ? "对比维度" : "Decision factor"}</th>
                    <th scope="col">{c.competitorName}</th>
                    <th scope="col">{zh ? "拼拼笔记 PinyPiny" : "PinyPiny"}</th>
                    <th scope="col">{zh ? "核对来源" : "Source"}</th>
                  </tr>
                </thead>
                <tbody>
                  {c.summaryRows.map((row) => (
                    <tr key={row.trigger}>
                      <th scope="row">{row.trigger}</th>
                      <td>{row.competitor}</td>
                      <td>{row.pinypiny}</td>
                      <td>{row.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="pricing-reality" data-reveal>
            <span className="article-sec-num" aria-hidden="true">
              02
            </span>
            <h2>{c.pricingHeading}</h2>
            {c.pricingParagraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
            <p className="media-note" style={{ marginTop: 18 }}>
              {c.pricingNote}
            </p>
          </section>

          <section id="who-wins" data-reveal>
            <span className="article-sec-num" aria-hidden="true">
              03
            </span>
            <h2>
              {zh
                ? `应该选 ${c.competitorName} 还是拼拼笔记？`
                : `Should you pick ${c.competitorName} or PinyPiny?`}
            </h2>
            <div className="vs-split-grid">
              <div className="vs-win-card">
                <h3>{c.competitorWinsHeading}</h3>
                <ul className="editorial-bullets">
                  {c.competitorWins.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="vs-win-card vs-win-card--accent">
                <h3>{c.pinypinyWinsHeading}</h3>
                <ul className="editorial-bullets">
                  {c.pinypinyWins.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="switching-steps" data-reveal>
            <span className="article-sec-num" aria-hidden="true">
              04
            </span>
            <h2>{c.migrationHeading}</h2>
            <p>{c.migrationIntro}</p>
            <ol className="editorial-steps">
              {c.migrationSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <div style={{ marginTop: 28 }} data-primary-download>
              <DownloadArea
                locale={locale}
                page={page}
                qr={false}
                position="vs-migration"
              />
            </div>
          </section>

          <section data-reveal>
            <h2>{zh ? "常见问题" : "Common questions"}</h2>
            <Faq items={c.faq} />
          </section>

          <section className="related-section" data-reveal>
            <h2>{zh ? "更多对比与相关阅读" : "More comparisons & reading"}</h2>
            <div className="related-links">
              {otherComparisons.map((other) => (
                <Link
                  key={other}
                  className="text-link"
                  href={localizedPath(locale, `vs/${other}`)}
                >
                  {getComparison(locale, other).heading}
                  <ArrowIcon />
                </Link>
              ))}
              <Link
                className="text-link"
                href={localizedPath(locale, c.relatedScenario)}
              >
                {getScenario(locale, c.relatedScenario).anchorLabel}
                <ArrowIcon />
              </Link>
              <Link
                className="text-link"
                href={localizedPath(locale, `blog/${c.relatedBlogSlug}`)}
              >
                {getBlogPost(locale, c.relatedBlogSlug).heading}
                <ArrowIcon />
              </Link>
            </div>
          </section>
        </article>
      </div>
      <Closing locale={locale} page={page} />
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
        <p className="eyebrow">
          <span className="eyebrow-dot" aria-hidden="true" />
          LRAI STUDIO · PINYPINY
        </p>
        <h1>{c.title}</h1>
        <p className="lead">{c.summary}</p>
        <p className="byline">
          <span>LRAI STUDIO · PinyPiny</span>
          <span className="byline-sep" aria-hidden="true">
            ·
          </span>
          <time dateTime={c.updated}>
            {zh
              ? `更新于 ${formatDate(c.updated, "zh")}`
              : `Updated ${formatDate(c.updated, "en")}`}
          </time>
        </p>
      </header>
      <div className="article-layout page-section">
        <nav
          className="article-index"
          aria-label={zh ? "本页目录" : "On this page"}
        >
          <p>{zh ? "本页目录" : "On this page"}</p>
          {c.sections.map((s, index) => (
            <a key={s.id} href={`#${s.id}`}>
              <span className="toc-num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{s.title}</span>
            </a>
          ))}
        </nav>
        <article className="article-body legal-content">
          {c.sections.map((s, index) => (
            <section id={s.id} key={s.id}>
              <span className="article-sec-num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
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
        ["购买方式", "免费下载，可选 Pro App 内购买（订阅或终身买断）"],
        ["数据保存", "设备本地优先，无需注册账号；Pro 支持私人 iCloud 同步"],
        ["App 语言", "简体中文、繁体中文、英语、日语、韩语"],
        [
          "明确边界",
          "不使用生成式 AI 自动写日记，不提供手绘笔刷、PDF 导出、模板导入或网页编辑器",
        ],
      ]
    : [
        ["What it is", "Visual notes and a freeform collage journal"],
        ["Devices", "iPhone and iPad, iOS / iPadOS 18 or later"],
        ["Made by", "LRAI STUDIO · @lemon"],
        [
          "Availability",
          "Free download, with optional Pro (subscription or one-time Lifetime)",
        ],
        [
          "Your content",
          "Local-first storage with no separate account; Pro includes private iCloud sync",
        ],
        [
          "App languages",
          "English, Simplified Chinese, Traditional Chinese, Japanese, Korean",
        ],
        [
          "What it is not",
          "No generative AI auto-writing, no Apple Pencil drawing tools, no PDF/template import, and no web editor",
        ],
      ];
  return (
    <>
      <Breadcrumbs locale={locale} page="about" label={zh ? "关于" : "About"} />
      <section className="about-hero page-section">
        <div className="about-icon-frame">
          <Image
            src="/assets/pinypiny/app-icon.png"
            alt="PinyPiny"
            width={112}
            height={112}
          />
        </div>
        <p className="eyebrow">LRAI STUDIO</p>
        <h1>
          {zh
            ? "关于拼拼笔记：\n给生活碎片一张纸。"
            : "About PinyPiny,\na visual notebook for your life."}
        </h1>
        <p className="lead">
          {zh
            ? "拼拼笔记（PinyPiny）由 @lemon 开发。它把文字、照片、贴纸和纸张放到一起，让记事也可以像制作一张小小的拼贴。"
            : "PinyPiny is made by @lemon at LRAI STUDIO. It brings writing, photos, stickers and paper together, so a note can become a small collage of your life."}
        </p>
      </section>
      <article className="about-body page-section">
        <section data-reveal>
          <span className="article-sec-num" aria-hidden="true">
            01
          </span>
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
              ? "你可以从很简单的一页开始：一张照片、一句只有自己知道意思的话。拼拼笔记不会用 AI 替你编造回忆；字体、颜色、照片和贴纸是表达的材料，空白也是。"
              : "Start with a photo and a sentence only you could write. PinyPiny does not use generative AI to write captions for you; type, color, photos and stickers are materials for your own voice."}
          </p>
        </section>
        <section data-reveal>
          <span className="article-sec-num" aria-hidden="true">
            02
          </span>
          <h2>
            {zh
              ? "翻阅，也是记录的一部分。"
              : "Returning is part of remembering."}
          </h2>
          <p>
            {zh
              ? "完成的笔记不会只变成列表里的一行。它会回到一叠纸张卡片中，等待你再翻过来。我们把产品最鲜明的表达留给纸面和卡片，希望工具在需要时出现，内容始终是主角。"
              : "A finished note becomes a card in a stack you can browse again. Paper and cards carry the app's character; the tools are there to help, while what you put on the page stays at the center."}
          </p>
        </section>
        <section className="fact-ledger-section" data-reveal>
          <span className="article-sec-num" aria-hidden="true">
            03
          </span>
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
        <section data-reveal>
          <span className="article-sec-num" aria-hidden="true">
            04
          </span>
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
          <div className="related-links" style={{ marginTop: 14 }}>
            <Link className="text-link" href={localizedPath(locale, "support")}>
              {zh ? "查看帮助与支持" : "Visit help & support"}
              <ArrowIcon />
            </Link>
            <Link className="text-link" href={localizedPath(locale, "blog")}>
              {zh ? "阅读拼拼笔记博客" : "Read the PinyPiny blog"}
              <ArrowIcon />
            </Link>
          </div>
        </section>
        <RelatedScenarios locale={locale} current="" />
      </article>
      <Closing locale={locale} page="about" />
    </>
  );
}

function Support({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  const questions = supportFaqFor(locale, siteConfig.supportEmail);
  return (
    <>
      <Breadcrumbs
        locale={locale}
        page="support"
        label={zh ? "帮助与支持" : "Help & support"}
      />
      <header className="article-hero page-section">
        <p className="eyebrow">
          <span className="eyebrow-dot" aria-hidden="true" />
          {zh ? "需要一点帮助？" : "A little help, when you need it"}
        </p>
        <h1>
          {zh ? "拼拼笔记\n帮助与支持。" : "PinyPiny\nhelp & support."}
        </h1>
        <p className="lead">
          {zh
            ? "从第一篇笔记，到导出、购买和同步。先看看下面的回答，或直接写信给开发者。"
            : "From your first page to export, purchases and sync. Find an answer below, or write directly to the maker."}
        </p>
        <a
          className="text-link support-mail"
          href={`mailto:${siteConfig.supportEmail}`}
        >
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
        <div className="support-walkthroughs" data-reveal>
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
            <Link
              className="text-link"
              href={localizedPath(
                locale,
                "blog/private-offline-photo-journal-iphone",
              )}
            >
              {getBlogPost(locale, "private-offline-photo-journal-iphone").heading}
              <ArrowIcon />
            </Link>
          </div>
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
  else if (page === "blog") content = <BlogIndex locale={locale} />;
  else if (page === "vs") content = <VsIndex locale={locale} />;
  else if (page === "about") content = <About locale={locale} />;
  else if (page === "support") content = <Support locale={locale} />;
  else if (page.startsWith("guides/"))
    content = <GuidePage locale={locale} slug={page.slice(7) as GuideSlug} />;
  else if (page.startsWith("blog/"))
    content = <BlogPostPage locale={locale} slug={page.slice(5) as BlogSlug} />;
  else if (page.startsWith("vs/"))
    content = <VsDetailPage locale={locale} slug={page.slice(3) as VsSlug} />;
  else content = <ScenarioPage locale={locale} slug={page as ScenarioSlug} />;
  return (
    <SiteFrame locale={locale} page={page}>
      <StructuredData locale={locale} page={page} />
      {content}
    </SiteFrame>
  );
}
