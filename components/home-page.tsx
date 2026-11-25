import Link from "next/link";
import { copyFor } from "@/lib/ui-copy";
import { localizedPath, type Locale } from "@/lib/routes";
import { SiteFrame } from "./site-frame";
import { DownloadArea } from "./download-area";
import { HeroStage } from "./hero-stage";
import { AppDemo } from "./app-demo";
import { StyleShowcase } from "./style-showcase";
import { WorkGallery } from "./work-gallery";
import {
  FeatureBento,
  PromptDrawer,
  GuideFolios,
  FinalCtaStage,
} from "./interactive-sections";
import { Faq } from "./faq";
import { ArrowIcon } from "./icons";
import { getGuide, guideSlugs } from "@/lib/editorial-content";
import { getAllBlogPosts } from "@/lib/blog-content";
import { StructuredData } from "./structured-data";

export function HomePage({ locale }: { locale: Locale }) {
  const c = copyFor(locale);
  const zh = locale === "zh";
  const guides = guideSlugs.map((slug) => {
    const g = getGuide(locale, slug);
    return { slug, heading: g.heading, intro: g.intro, minutes: g.minutes };
  });
  const blogPosts = getAllBlogPosts(locale);

  return (
    <SiteFrame locale={locale}>
      <StructuredData locale={locale} page="" />

      <section className="hero page-section">
        <div className="hero-copy">
          <p className="eyebrow hero-category">
            <span className="eyebrow-dot eyebrow-dot--pulse" aria-hidden="true" />
            {c.category}
          </p>
          <h1>
            <span className="headline-mask">
              <span className="headline-line">{c.title}</span>
            </span>
            <br />
            <span className="headline-mask">
              <em className="headline-line headline-emphasis">{c.emphasis}</em>
            </span>
          </h1>
          <p className="hero-summary">{c.summary}</p>
          <div className="hero-actions" data-primary-download>
            <DownloadArea locale={locale} />
            <a className="text-link hero-demo-link" href="#demo">
              {c.seeDemo}
              <ArrowIcon />
            </a>
          </div>
          <p className="hero-note">{c.downloadNote}</p>
        </div>

        <HeroStage
          locale={locale}
          heroAlt={c.heroAlt}
          caption={c.heroCaption}
        />

        <ul
          className="hero-colophon"
          aria-label={zh ? "核心特性概览" : "At a glance"}
        >
          <li>
            <span>01</span>
            {zh
              ? "设备本地优先保存，离线可写"
              : "Local-first storage, works offline"}
          </li>
          <li>
            <span>02</span>
            {zh
              ? "设备端贴纸工作室，照片主体抠图"
              : "On-device Sticker Studio cutouts"}
          </li>
          <li>
            <span>03</span>
            {zh
              ? "iPhone 与 iPad · 支持 5 种语言"
              : "iPhone & iPad · 5 app languages"}
          </li>
        </ul>
      </section>

      <section className="work-section page-section" id="inside" data-reveal>
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="section-num">01</span>
              {c.galleryKicker}
            </p>
            <h2>
              {c.galleryTitle}
              <br />
              <em>{c.galleryEmphasis}</em>
            </h2>
          </div>
          <p>{c.galleryIntro}</p>
        </div>
        <WorkGallery items={c.examples} locale={locale} />
        <p className="media-note">{c.exampleNote}</p>
      </section>

      <section className="demo-section page-section" id="demo" data-reveal>
        <div className="obsidian-stage">
          <span className="stage-corner stage-corner--tl" aria-hidden="true" />
          <span className="stage-corner stage-corner--tr" aria-hidden="true" />
          <span className="stage-corner stage-corner--bl" aria-hidden="true" />
          <span className="stage-corner stage-corner--br" aria-hidden="true" />
          <AppDemo
            locale={locale}
            kicker={c.demoKicker}
            title={c.demoTitle}
            emphasis={c.demoEmphasis}
            text={c.demoText}
            steps={c.demoSteps}
            downloadSlot={
              <DownloadArea locale={locale} position="demo" qr={false} />
            }
          />
        </div>
      </section>

      <section className="style-section page-section" data-reveal>
        <div className="style-copy">
          <p className="eyebrow">
            <span className="section-num">03</span>
            {c.styleKicker}
          </p>
          <h2>
            {c.styleTitle}
            <br />
            <em>{c.styleEmphasis}</em>
          </h2>
          <p>{c.styleText}</p>
          <p className="media-note">{c.styleNote}</p>
        </div>
        <StyleShowcase locale={locale} labels={c.styleLabels} />
      </section>

      <section
        className="features-section page-section"
        id="details"
        data-reveal
      >
        <div className="features-header">
          <p className="eyebrow">
            <span className="section-num">04</span>
            {zh ? "工具退后，内容居中" : "CRAFTED FOR PERSONAL PAGES"}
          </p>
          <h2>{c.featureTitle}</h2>
        </div>

        <FeatureBento features={c.features} />

        <div className="pro-details" data-reveal>
          <div className="pro-intro">
            <span className="pro-kicker">
              {zh ? "免费下载 · 可选 Pro" : "FREE TO START · OPTIONAL PRO"}
            </span>
            <h3>{c.proTitle}</h3>
            <p>{c.proText}</p>
            <Link className="text-link" href={localizedPath(locale, "support")}>
              {zh ? "查看功能与购买说明" : "Features & purchase help"}
              <ArrowIcon />
            </Link>
          </div>
          <dl className="pro-ledger">
            {c.proRows.map(([label, detail], index) => (
              <div key={label} className={index > 0 ? "is-pro-row" : undefined}>
                <dt>
                  <span
                    className={`tier-badge ${index === 0 ? "tier-badge--free" : "tier-badge--pro"}`}
                  >
                    {index === 0 ? (zh ? "免费" : "Free") : "Pro"}
                  </span>
                  <span>{label}</span>
                </dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="prompt-section page-section" data-reveal>
        <div className="prompt-layout">
          <div className="prompt-intro">
            <p className="eyebrow">
              <span className="section-num">05</span>
              {zh ? "07 个起笔灵感" : "07 STARTING PROMPTS"}
            </p>
            <h2>{c.promptsTitle}</h2>
            <p>{c.promptsText}</p>
          </div>
          <PromptDrawer locale={locale} prompts={c.prompts} />
        </div>
      </section>

      <section className="guides-section page-section" data-reveal>
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="section-num">06</span>
              {zh ? "一步一步做一页" : "STEP-BY-STEP WALKTHROUGHS"}
            </p>
            <h2>{c.guidesTitle}</h2>
            <p>{c.guidesText}</p>
          </div>
          <Link className="text-link" href={localizedPath(locale, "guides")}>
            {c.guidesLink}
            <ArrowIcon />
          </Link>
        </div>
        <GuideFolios locale={locale} guides={guides} />

        <div className="home-editorial-strip" data-reveal>
          <div className="home-editorial-head">
            <div>
              <p className="eyebrow">
                {zh ? "拼拼笔记博客与客观对比" : "FROM THE BLOG & COMPARISONS"}
              </p>
              <h3>
                {zh
                  ? "排版技巧、离线隐私指南与日记 App 对比"
                  : "Layout essays, privacy notes & honest app comparisons"}
              </h3>
            </div>
            <div className="home-editorial-hubs">
              <Link className="text-link" href={localizedPath(locale, "blog")}>
                {zh ? "全部博客文章" : "All blog articles"}
                <ArrowIcon />
              </Link>
              <Link className="text-link" href={localizedPath(locale, "vs")}>
                {zh ? "对比其他 App" : "Compare journal apps"}
                <ArrowIcon />
              </Link>
            </div>
          </div>
          <ul className="home-blog-list">
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <Link href={localizedPath(locale, `blog/${post.slug}`)}>
                  <span className="home-blog-cat">{post.category}</span>
                  <span className="home-blog-title">{post.heading}</span>
                  <ArrowIcon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="faq-section page-section" data-reveal>
        <div className="faq-aside">
          <p className="eyebrow">
            <span className="section-num">07</span>
            {zh ? "常见疑问" : "ANSWERS"}
          </p>
          <h2>{c.faqTitle}</h2>
          <Link className="text-link" href={localizedPath(locale, "support")}>
            {zh ? "还有问题？查看帮助" : "More questions? Visit support"}
            <ArrowIcon />
          </Link>
        </div>
        <Faq items={[...c.faq]} />
      </section>

      <section className="final-cta-wrap page-section" data-reveal>
        <FinalCtaStage
          eyebrow={zh ? "iPhone 与 iPad · iOS 18+" : "IPHONE & IPAD · IOS 18+"}
          title={c.finalTitle}
          text={c.finalText}
          note={c.downloadNote}
          downloadSlot={<DownloadArea locale={locale} position="footer" />}
        />
      </section>
    </SiteFrame>
  );
}
