import Image from "next/image";
import Link from "next/link";

import { DownloadButton } from "@/components/download-button";
import { ArrowIcon, LockIcon } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-config";

const pages = [
  { image: "note-lined.jpg", width: 1170, height: 1540, title: "A little context.", description: "A date, a place, the weather. Leave room for the details.", alt: "A lined-paper note with a date, weather, location, and a short reflection" },
  { image: "note-rainy-day.jpg", width: 1170, height: 1633, title: "A moment in words.", description: "Quick thoughts or a longer entry. Write at your own pace.", alt: "An English journal page titled Rainy Day Reflections" },
  { image: "type-styles.png", width: 1170, height: 1424, title: "A voice of your own.", description: "Find the paper, ink, and type that feel like you.", alt: "A typography sample showing serif and handwritten styles" },
];

export default function HomePage() {
  return (
    <div className="site-shell home-page">
      <SiteHeader />
      <main id="main-content">
        <section className="hero-section page-section">
          <div className="hero-copy">
            <h1>Keep the <em>good parts.</em></h1>
            <p className="hero-summary">
              {siteConfig.name} is a visual notebook for your everyday thoughts,
              photos, and small moments. A page to make your own. A stack to come back to.
            </p>
            <div className="hero-actions">
              <DownloadButton />
              <a className="text-link" href="#inside">See inside <ArrowIcon /></a>
            </div>
            <p className="hero-note"><LockIcon /> Made for iPhone · local-first</p>
          </div>
          <figure className="hero-visual">
            <div className="hero-frame">
              <Image src="/assets/pinypiny/hero-card-stack.jpg"
                alt={`${siteConfig.name}: a layered stack of paper-like notes with a dated note in front`}
                width={1179} height={2556} fetchPriority="high"
                sizes="(max-width: 700px) 78vw, 340px" />
            </div>
            <figcaption>Your days, one page at a time.</figcaption>
          </figure>
        </section>

        <section className="inside-section page-section" id="inside" aria-labelledby="inside-title">
          <div className="section-intro">
            <h2 id="inside-title">A page for the <em>whole moment.</em></h2>
            <p>Write a few words. Place a photo. Add a sticker. Keep the pieces of your day together, just as you remember them.</p>
          </div>
          <div className="gallery-grid">
            {pages.map((item) => (
              <figure className="gallery-card" key={item.image}>
                <div className="gallery-image">
                  <Image src={`/assets/pinypiny/${item.image}`} alt={`${siteConfig.name}: ${item.alt}`}
                    width={item.width} height={item.height} sizes="(max-width: 700px) 90vw, (max-width: 1100px) 29vw, 350px" />
                </div>
                <figcaption><h3>{item.title}</h3><p>{item.description}</p></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="details-section page-section" id="details" aria-labelledby="details-title">
          <h2 id="details-title">Make it yours.<br /><em>Keep it close.</em></h2>
          <div className="feature-list">
            <article><h3>Words, photos, and stickers.</h3><p>Bring them together on one page. Shape a note around the moment, with space for more than words.</p></article>
            <article><h3>Easy to return to.</h3><p>Revisit your stack or search for a thought. Autosave, undo, and delete recovery help along the way.</p></article>
            <article><h3>Personal by design.</h3><p>Your notes and media are stored on your device. You choose when to grant access to photos, camera, or location.</p><Link className="text-link" href="/privacy">Read our privacy policy <ArrowIcon /></Link></article>
          </div>
        </section>

        <section className="final-cta page-section" aria-labelledby="download-title">
          <div><h2 id="download-title">Something worth <em>keeping.</em></h2><p>Make a little room for your everyday.</p></div>
          <DownloadButton />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
