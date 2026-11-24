import Image from "next/image";
import Link from "next/link";
import { copyFor } from "@/lib/ui-copy";
import { media } from "@/lib/media";
import { localizedPath, type Locale } from "@/lib/routes";
import { SiteFrame } from "./site-frame";
import { DownloadArea } from "./download-area";
import { HeroStage } from "./hero-stage";
import { AppDemo } from "./app-demo";
import { StyleShowcase } from "./style-showcase";
import { Faq } from "./faq";
import { ArrowIcon, FeatureIcon } from "./icons";
import { getGuide, guideSlugs } from "@/lib/editorial-content";
import { StructuredData } from "./structured-data";

const featureIcons = ["text", "photo", "sticker"] as const;

export function HomePage({ locale }: { locale: Locale }) {
  const c = copyFor(locale);
  const zh = locale === "zh";
  return (
    <SiteFrame locale={locale}>
      <StructuredData locale={locale} page="" />

      <section className="hero page-section">
        <div className="hero-copy">
          <p className="eyebrow hero-category">
            <span className="eyebrow-dot" aria-hidden="true" />
            {c.category}
          </p>
          <h1>
            <span className="headline-line">{c.title}</span>
            <br />
            <em className="headline-line headline-emphasis">{c.emphasis}</em>
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
            {zh ? "设备本地优先保存，离线可写" : "Local-first storage, works offline"}
          </li>
          <li>
            <span>02</span>
            {zh ? "设备端贴纸工作室，照片主体抠图" : "On-device Sticker Studio cutouts"}
          </li>
          <li>
            <span>03</span>
            {zh ? "iPhone 与 iPad · 支持 5 种语言" : "iPhone & iPad · 5 app languages"}
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
        <div className="work-gallery">
          {c.examples.map((item, index) => (
            <article
              className="work-example"
              key={item.slug}
              data-reveal
              style={{ "--stagger": index } as React.CSSProperties}
            >
              <Link
                className="work-image"
                href={localizedPath(locale, item.slug)}
              >
                <span className="plate-tag" aria-hidden="true">
                  {zh ? `页码 0${index + 1}` : `PLATE 0${index + 1}`}
                </span>
                <span className="work-image-frame">
                  <Image
                    {...media[item.image]}
                    alt={`${item.name} — ${item.text}`}
                    sizes="(max-width:700px) 86vw, (max-width:1000px) 30vw, 350px"
                  />
                </span>
              </Link>
              <div className="work-meta">
                <span className="work-index" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
                <Link
                  className="text-link"
                  href={localizedPath(locale, item.slug)}
                >
                  {item.link}
                  <ArrowIcon />
                </Link>
              </div>
            </article>
          ))}
        </div>
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

        <div className="feature-rows">
          {c.features.map(([title, description], index) => (
            <article
              key={title}
              className="feature-card"
              data-reveal
              style={{ "--stagger": index } as React.CSSProperties}
            >
              <div className="feature-card-top">
                <span className="feature-num">0{index + 1}</span>
                <span className="feature-icon-wrap" aria-hidden="true">
                  <FeatureIcon kind={featureIcons[index]} />
                </span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

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
          <ul className="prompt-list">
            {c.prompts.map((prompt, index) => (
              <li key={prompt}>
                <Link
                  href={localizedPath(
                    locale,
                    index === 3
                      ? "travel-journal"
                      : index === 4 || index === 5
                        ? "digital-scrapbook"
                        : "photo-journal",
                  )}
                >
                  <span className="prompt-num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="prompt-label">{prompt}</span>
                  <ArrowIcon />
                </Link>
              </li>
            ))}
          </ul>
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
        <div className="guide-list">
          {guideSlugs.map((slug, index) => {
            const guide = getGuide(locale, slug);
            return (
              <article
                key={slug}
                className="guide-folio"
                data-reveal
                style={{ "--stagger": index } as React.CSSProperties}
              >
                <div className="guide-folio-top">
                  <span className="guide-type">
                    {zh ? "实用教程" : "A practical guide"} · {guide.minutes}{" "}
                    {zh ? "分钟" : "min"}
                  </span>
                  <span className="guide-index" aria-hidden="true">
                    0{index + 1}
                  </span>
                </div>
                <h3>
                  <Link href={localizedPath(locale, `guides/${slug}`)}>
                    {guide.heading}
                  </Link>
                </h3>
                <p>{guide.intro}</p>
                <Link
                  className="text-link"
                  href={localizedPath(locale, `guides/${slug}`)}
                >
                  {zh ? "打开教程" : "Read the guide"}
                  <ArrowIcon />
                </Link>
                <span className="guide-motif" aria-hidden="true">
                  {["Aa", "↗", "…"][index]}
                </span>
              </article>
            );
          })}
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
        <div className="final-cta">
          <span className="stage-corner stage-corner--tl" aria-hidden="true" />
          <span className="stage-corner stage-corner--tr" aria-hidden="true" />
          <span className="stage-corner stage-corner--bl" aria-hidden="true" />
          <span className="stage-corner stage-corner--br" aria-hidden="true" />
          <div className="final-icon-halo">
            <Image
              src="/assets/pinypiny/app-icon.png"
              alt=""
              width={76}
              height={76}
            />
          </div>
          <p className="eyebrow final-eyebrow">
            {zh ? "iPhone 与 iPad · iOS 18+" : "IPHONE & IPAD · IOS 18+"}
          </p>
          <h2>{c.finalTitle}</h2>
          <p>{c.finalText}</p>
          <DownloadArea locale={locale} position="footer" />
          <small>{c.downloadNote}</small>
        </div>
      </section>
    </SiteFrame>
  );
}
