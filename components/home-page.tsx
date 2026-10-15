import Image from "next/image";
import Link from "next/link";
import { copyFor } from "@/lib/ui-copy";
import { media } from "@/lib/media";
import { localizedPath, type Locale } from "@/lib/routes";
import { SiteFrame } from "./site-frame";
import { DownloadArea } from "./download-area";
import { AppDemo } from "./app-demo";
import { StyleShowcase } from "./style-showcase";
import { Faq } from "./faq";
import { ArrowIcon } from "./icons";
import { getGuide, guideSlugs } from "@/lib/editorial-content";
import { StructuredData } from "./structured-data";
export function HomePage({ locale }: { locale: Locale }) {
  const c = copyFor(locale);
  const zh = locale === "zh";
  return (
    <SiteFrame locale={locale}>
      <StructuredData locale={locale} page="" />
      <section className="hero page-section">
        <div className="hero-copy">
          <p className="eyebrow hero-category">{c.category}</p>
          <h1>
            {c.title}
            <br />
            <em>{c.emphasis}</em>
          </h1>
          <p className="hero-summary">{c.summary}</p>
          <div className="hero-actions" data-primary-download>
            <DownloadArea locale={locale} />
            <a className="text-link" href="#demo">
              {c.seeDemo}
              <ArrowIcon />
            </a>
          </div>
          <p className="hero-note">{c.downloadNote}</p>
        </div>
        <figure className="hero-visual">
          <div className="hero-stage">
            <span className="stage-label">
              {zh
                ? "纸张、照片，还有一点你。"
                : "PAPER, PHOTOS & A LITTLE YOU."}
            </span>
            <div className="hero-work">
              <Image
                {...media.hero}
                alt={c.heroAlt}
                sizes="(max-width:700px) 56vw, 278px"
                fetchPriority="high"
                loading="eager"
              />
            </div>
            <div className="hero-stack">
              <Image
                {...media.stack}
                alt={
                  zh
                    ? "用纸张卡片堆翻阅笔记"
                    : "Browse notes in a paper card stack"
                }
                sizes="(max-width:700px) 23vw, 155px"
              />
            </div>
          </div>
          <figcaption>{c.heroCaption}</figcaption>
        </figure>
      </section>
      <section className="work-section page-section" id="inside">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{c.galleryKicker}</p>
            <h2>
              {c.galleryTitle}
              <br />
              <em>{c.galleryEmphasis}</em>
            </h2>
          </div>
          <p>{c.galleryIntro}</p>
        </div>
        <div className="work-gallery">
          {c.examples.map((item) => (
            <article className="work-example" key={item.slug}>
              <Link
                className="work-image"
                href={localizedPath(locale, item.slug)}
              >
                <Image
                  {...media[item.image]}
                  alt={`${item.name} — ${item.text}`}
                  sizes="(max-width:700px) 86vw, (max-width:1000px) 30vw, 350px"
                />
              </Link>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
              <Link
                className="text-link"
                href={localizedPath(locale, item.slug)}
              >
                {item.link}
                <ArrowIcon />
              </Link>
            </article>
          ))}
        </div>
        <p className="media-note">{c.exampleNote}</p>
      </section>
      <section className="demo-section page-section" id="demo">
        <div className="demo-copy">
          <p className="eyebrow">{c.demoKicker}</p>
          <h2>
            {c.demoTitle}
            <br />
            <em>{c.demoEmphasis}</em>
          </h2>
          <p>{c.demoText}</p>
          <ul className="demo-steps">
            {c.demoSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
          <DownloadArea locale={locale} position="demo" qr={false} />
        </div>
        <AppDemo locale={locale} />
      </section>
      <section className="style-section page-section">
        <div className="style-copy">
          <p className="eyebrow">{c.styleKicker}</p>
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
      <section className="features-section page-section" id="details">
        <h2>{c.featureTitle}</h2>
        <div className="feature-rows">
          {c.features.map(([title, description]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <div className="pro-details">
          <div>
            <h3>{c.proTitle}</h3>
            <p>{c.proText}</p>
            <Link className="text-link" href={localizedPath(locale, "support")}>
              {zh ? "查看功能与购买说明" : "Features & purchase help"}
              <ArrowIcon />
            </Link>
          </div>
          <dl>
            {c.proRows.map(([label, detail]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="prompt-section page-section">
        <div className="section-heading">
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
                {prompt}
                <ArrowIcon />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="guides-section page-section">
        <div className="section-heading">
          <div>
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
              <article key={slug}>
                <span className="guide-type">
                  {zh ? "实用教程" : "A practical guide"} · {guide.minutes}{" "}
                  {zh ? "分钟" : "min"}
                </span>
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
      <section className="faq-section page-section">
        <h2>{c.faqTitle}</h2>
        <Faq items={[...c.faq]} />
        <Link className="text-link" href={localizedPath(locale, "support")}>
          {zh ? "还有问题？查看帮助" : "More questions? Visit support"}
          <ArrowIcon />
        </Link>
      </section>
      <section className="final-cta page-section">
        <Image
          src="/assets/pinypiny/app-icon.png"
          alt=""
          width={72}
          height={72}
        />
        <h2>{c.finalTitle}</h2>
        <p>{c.finalText}</p>
        <DownloadArea locale={locale} position="footer" />
        <small>{c.downloadNote}</small>
      </section>
    </SiteFrame>
  );
}
