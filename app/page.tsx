import Image from "next/image";

import { DownloadButton } from "@/components/download-button";
import { ArrowIcon, FeatureIcon, LockIcon, SparkIcon } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <div className="site-shell home-page">
      <SiteHeader />

      <main id="main-content">
        <section className="hero-section page-section">
          <div className="hero-copy">
            <h1>A beautiful place for the things worth keeping.</h1>
            <p className="hero-summary">
              {siteConfig.name} is a visual notebook for everyday thoughts, photos, and small moments — made to be
              written, shaped, and revisited.
            </p>
            <div className="hero-actions">
              <DownloadButton />
              <a className="text-link" href="#inside">
                See inside <ArrowIcon />
              </a>
            </div>
            <div className="hero-note">
              <LockIcon />
              <span>Made for iPhone · kept on your device</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual__back hero-visual__back--yellow" aria-hidden="true" />
            <div className="hero-visual__back hero-visual__back--pink" aria-hidden="true" />
            <div className="hero-frame">
              <div className="hero-frame__label">
                <span>THE DAY, KEPT</span>
                <span>01 / 01</span>
              </div>
              <Image
                src="/assets/pinnia/hero-card-stack.jpg"
                alt={`${siteConfig.name} showing a layered stack of paper-like notes with a dated note in front`}
                width={1179}
                height={2556}
                fetchPriority="high"
                sizes="(max-width: 760px) 86vw, (max-width: 860px) 78vw, (max-width: 1200px) 38vw, 420px"
              />
              <div className="hero-frame__rail" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
            <span className="hero-caption">A stack you can come back to.</span>
          </div>
        </section>

        <section className="statement-section page-section" id="inside" aria-labelledby="inside-title">
          <div className="section-rule" aria-hidden="true" />
          <div className="statement-grid">
            <h2 id="inside-title">A note is more than a line in a list.</h2>
            <div>
              <p>
                {siteConfig.name} gives your thoughts a page with room to breathe. Write a few words, place a photo,
                add a sticker, and let the whole moment stay together.
              </p>
              <p className="handwritten-line">Keep the feeling, not just the timestamp.</p>
            </div>
          </div>
        </section>

        <section className="stack-section page-section" id="details" aria-labelledby="details-title">
          <div className="stack-section__intro">
            <h2 id="details-title">Make something you will want to open again.</h2>
            <p className="section-note">THE {siteConfig.name.toUpperCase()} WAY · A SMALL RITUAL FOR BIG FEELINGS</p>
          </div>
          <div className="stack-stage">
            <div className="stack-card stack-card--back stack-card--back-one" aria-hidden="true">
              <span>08 / 21</span>
            </div>
            <div className="stack-card stack-card--back stack-card--back-two" aria-hidden="true">
              <span>08 / 24</span>
            </div>
            <article className="stack-card stack-card--front">
              <div className="stack-card__topline">
                <span>SAMPLE NOTE</span>
                <span>08 / 26</span>
              </div>
              <div className="stack-card__date">26</div>
              <h3>Rainy day reflections</h3>
              <p>
                A few quiet lines, a photo from the walk home, and the kind of afternoon you want to remember
                exactly as it was.
              </p>
              <div className="stack-card__footer">
                <span>text</span>
                <span>photo</span>
                <span>place</span>
              </div>
            </article>
          </div>
        </section>

        <section className="feature-section page-section" aria-labelledby="features-title">
          <div className="feature-section__intro">
            <h2 id="features-title">Keep every piece of the moment together.</h2>
            <p className="section-note">WORDS · IMAGES · LITTLE DETAILS</p>
          </div>
          <div className="feature-grid">
            <article className="feature-card feature-card--yellow">
              <div className="feature-card__head">
                <FeatureIcon kind="text" />
                <span className="feature-card__mark">TEXT</span>
              </div>
              <h3>Write like you mean it.</h3>
              <p>Quiet pages for quick thoughts, long entries, and everything in between.</p>
            </article>
            <article className="feature-card feature-card--pink">
              <div className="feature-card__head">
                <FeatureIcon kind="photo" />
                <span className="feature-card__mark">PHOTO</span>
              </div>
              <h3>Keep the whole scene.</h3>
              <p>Let images sit beside your words, just like they do in a real notebook.</p>
            </article>
            <article className="feature-card feature-card--blue">
              <div className="feature-card__head">
                <FeatureIcon kind="sticker" />
                <span className="feature-card__mark">STICKER</span>
              </div>
              <h3>Make the page yours.</h3>
              <p>Choose the paper, ink, type, and little visual details that fit the day.</p>
            </article>
          </div>
        </section>

        <section className="gallery-section page-section" aria-labelledby="gallery-title">
          <div className="gallery-copy">
            <h2 id="gallery-title">Somewhere between a diary and a little piece of design.</h2>
            <p className="section-note">A PAGE CAN HOLD A DAY</p>
            <p>
              {siteConfig.name} keeps the useful parts of a notes app and gives them the texture of a personal journal.
              Your pages can be spare, expressive, or wonderfully unfinished.
            </p>
          </div>
          <div className="gallery-grid">
            <figure className="gallery-card gallery-card--lined">
              <Image
                src="/assets/pinnia/note-lined.jpg"
                alt={`A ${siteConfig.name} lined-paper note with a date, weather, location, and a short reflection`}
                width={1170}
                height={1540}
                loading="lazy"
                sizes="(max-width: 760px) 86vw, 360px"
              />
              <figcaption>Leave room for the details.</figcaption>
            </figure>
            <figure className="gallery-card gallery-card--rainy">
              <Image
                src="/assets/pinnia/note-rainy-day.jpg"
                alt={`A ${siteConfig.name} English journal page titled Rainy Day Reflections`}
                width={1170}
                height={1633}
                loading="lazy"
                sizes="(max-width: 760px) 86vw, 360px"
              />
              <figcaption>Make the ordinary worth keeping.</figcaption>
            </figure>
            <figure className="gallery-card gallery-card--type">
              <Image
                src="/assets/pinnia/type-styles.png"
                alt={`A ${siteConfig.name} typography sample showing serif and handwritten styles`}
                width={1170}
                height={1424}
                loading="lazy"
                sizes="(max-width: 760px) 86vw, 360px"
              />
              <figcaption>Find a voice for the page.</figcaption>
            </figure>
          </div>
        </section>

        <section className="final-cta page-section">
          <div className="final-cta__paper">
            <div className="final-cta__copy">
              <h2>Give your everyday thoughts somewhere beautiful to land.</h2>
              <p className="section-note">LET IT DRIFT · TAKE IT WITH YOU</p>
            </div>
            <div className="final-cta__motif" aria-hidden="true">
              <div className="mini-note mini-note--back">
                <span>PHOTO</span>
                <SparkIcon />
              </div>
              <div className="mini-note mini-note--middle">
                <span>ONE DAY</span>
                <strong>26</strong>
              </div>
              <div className="mini-note mini-note--front">
                <span>KEEP IT</span>
                <strong>close.</strong>
              </div>
            </div>
            <DownloadButton />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
