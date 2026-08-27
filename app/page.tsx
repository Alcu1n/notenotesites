import Image from "next/image";

import { DownloadButton } from "@/components/download-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <div className="site-shell home-page">
      <SiteHeader />

      <main>
        <section className="hero-section page-section">
          <div className="hero-copy">
            <h1>A beautiful place for the things worth keeping.</h1>
            <p className="hero-summary">
              Tucked is a visual notebook for everyday thoughts, photos, and small moments — made to be
              written, shaped, and revisited.
            </p>
            <div className="hero-actions">
              <DownloadButton />
              <a className="text-link" href="#inside">
                See inside <span className="arrow-mark" aria-hidden="true" />
              </a>
            </div>
            <div className="hero-note">
              <span className="hero-note__dot" aria-hidden="true" />
              <span>Made for iPhone · kept on your device</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="A stack of Tucked notes on a dark paper stage">
            <div className="hero-visual__back hero-visual__back--yellow" aria-hidden="true" />
            <div className="hero-visual__back hero-visual__back--pink" aria-hidden="true" />
            <div className="hero-frame">
              <div className="hero-frame__label">
                <span>THE DAY, KEPT</span>
                <span>01 / 01</span>
              </div>
              <Image
                src="/assets/tucked/hero-card-stack.jpg"
                alt="Tucked showing a layered stack of paper-like notes with a dated note in front"
                width={1179}
                height={2556}
                priority
                sizes="(max-width: 760px) 78vw, 430px"
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

        <section className="statement-section page-section" id="inside">
          <div className="section-rule" aria-hidden="true" />
          <div className="statement-grid">
            <h2>A note is more than a line in a list.</h2>
            <div>
              <p>
                Tucked gives your thoughts a page with room to breathe. Write a few words, place a photo,
                add a sticker, and let the whole moment stay together.
              </p>
              <p className="handwritten-line">Keep the feeling, not just the timestamp.</p>
            </div>
          </div>
        </section>

        <section className="stack-section page-section" id="details">
          <div className="stack-section__intro">
            <h2>Make something you will want to open again.</h2>
            <p className="section-note">THE TUCKED WAY · A SMALL RITUAL FOR BIG FEELINGS</p>
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

        <section className="feature-section page-section">
          <div className="feature-card feature-card--yellow">
            <h3>Write like you mean it.</h3>
            <span className="feature-card__mark">TEXT</span>
            <p>Quiet pages for quick thoughts, long entries, and everything in between.</p>
          </div>
          <div className="feature-card feature-card--pink">
            <h3>Keep the whole scene.</h3>
            <span className="feature-card__mark">PHOTO</span>
            <p>Let images sit beside your words, just like they do in a real notebook.</p>
          </div>
          <div className="feature-card feature-card--blue">
            <h3>Make the page yours.</h3>
            <span className="feature-card__mark">STICKER</span>
            <p>Choose the paper, ink, type, and little visual details that fit the day.</p>
          </div>
        </section>

        <section className="gallery-section page-section">
          <div className="gallery-copy">
            <h2>Somewhere between a diary and a little piece of design.</h2>
            <p className="section-note">A PAGE CAN HOLD A DAY</p>
            <p>
              Tucked keeps the useful parts of a notes app and gives them the texture of a personal journal.
              Your pages can be spare, expressive, or wonderfully unfinished.
            </p>
          </div>
          <div className="gallery-grid">
            <figure className="gallery-card gallery-card--lined">
              <Image
                src="/assets/tucked/note-lined.jpg"
                alt="A Tucked lined-paper note with a date, weather, location, and a short reflection"
                width={1170}
                height={1540}
                loading="eager"
                sizes="(max-width: 760px) 86vw, 360px"
              />
              <figcaption>Leave room for the details.</figcaption>
            </figure>
            <figure className="gallery-card gallery-card--rainy">
              <Image
                src="/assets/tucked/note-rainy-day.jpg"
                alt="A Tucked English journal page titled Rainy Day Reflections"
                width={1170}
                height={1633}
                loading="eager"
                sizes="(max-width: 760px) 86vw, 360px"
              />
              <figcaption>Make the ordinary worth keeping.</figcaption>
            </figure>
            <figure className="gallery-card gallery-card--type">
              <Image
                src="/assets/tucked/type-styles.png"
                alt="A Tucked typography sample showing serif and handwritten styles"
                width={1170}
                height={1424}
                loading="eager"
                sizes="(max-width: 760px) 86vw, 360px"
              />
              <figcaption>Find a voice for the page.</figcaption>
            </figure>
          </div>
        </section>

        <section className="final-cta page-section">
          <div className="final-cta__paper">
            <div>
              <h2>Give your everyday thoughts somewhere beautiful to land.</h2>
              <p className="section-note">TUCK IT AWAY · TAKE IT WITH YOU</p>
            </div>
            <DownloadButton />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
