import type { Metadata } from "next";

import { LegalLayout } from "@/components/legal-layout";
import { siteConfig } from "@/lib/site-config";

const productName = siteConfig.name;
const legalTitle = `Privacy Policy — ${productName}`;
const metadataDescription = `How ${productName} handles notes, media, permissions, and support information.`;

export const metadata: Metadata = {
  title: { absolute: legalTitle },
  description: metadataDescription,
  applicationName: productName,
  openGraph: {
    siteName: productName,
    title: legalTitle,
    description: metadataDescription,
  },
  twitter: {
    title: legalTitle,
    description: metadataDescription,
  },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      sections={[
        { id: "overview", label: "Overview" },
        { id: "data", label: "Information the App handles" },
        { id: "third-parties", label: "Third-party services" },
        { id: "retention", label: "Storage, retention, and deletion" },
        { id: "choices", label: "Your choices" },
        { id: "children", label: "Children's privacy" },
        { id: "changes", label: "Changes to this policy" },
        { id: "contact", label: "Contact" }
      ]}
      title="Privacy Policy"
      lastUpdated="September 15, 2026"
      summary={`${productName} is designed to keep personal notes close: on your device, in your hands, and under your control.`}
    >
      <section id="overview">
        <h2>1. Overview</h2>
        <p>
          This Privacy Policy explains how LRAI STUDIO, developed by {siteConfig.developer} (&quot;LRAI
          STUDIO,&quot; &quot;we,&quot; or &quot;us&quot;), handles information in the {siteConfig.name} ({siteConfig.chineseName}) app (the &quot;App&quot;), and on this
          website. The App is a local-first notes and
          journaling app. The current version does not require an account and
          does not operate a remote account, advertising, analytics, or cross-app tracking system.
        </p>
        <p>
          Questions about this policy can be sent to <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
        </p>
      </section>

      <section id="data">
        <h2>2. Information the App handles</h2>
        <h3>Notes and media you create</h3>
        <p>
          The App handles the text, photos, stickers, layouts, dates, and other content you choose to create or add.
          This content is stored locally in the app&apos;s storage on your device. We do not receive or review your notes
          through a server operated on behalf of the App.
        </p>

        <h3>Photos and camera access</h3>
        <p>
          If you choose to add a photo, make a sticker, or export a note, the App may request access to Photos or the
          camera. Photos and camera captures are used to complete the action you request. Sticker extraction is
          performed on the device. The App does not upload your photo library or camera captures to LRAI STUDIO.
          You can decline or later change these permissions in iOS Settings.
        </p>

        <h3>Location and weather context</h3>
        <p>
          If you grant When In Use location access, the App may use your current location while creating a new note to
          obtain a city/country label and a weather forecast for that time. The App does not request background location access
          or continuously track your movements. When available, the resulting location label and weather snapshot may
          be saved with that note; the App is not designed to keep a history of precise coordinates.
        </p>

        <h3>Purchases</h3>
        <p>
          If you purchase an optional feature in the App through the App Store, Apple processes the transaction through
          StoreKit. We do not receive your payment card number. Purchase history and subscription management are
          handled through your Apple account and Apple&apos;s services.
        </p>

        <h3>Support messages</h3>
        <p>
          If you email us, we receive the address and the information you include so that we can respond and keep
          a reasonable record of support communication. We do not use support messages for advertising.
        </p>
      </section>

      <section id="third-parties">
        <h2>3. Third-party services</h2>
        <p>
          The App uses Apple system services when you choose features that depend on them, including Photos,
          Camera, Core Location, and StoreKit. Those services may process information under Apple&apos;s
          own terms and privacy policies. We do not sell your personal information or provide your note content to
          advertising networks, data brokers, or third-party analytics providers.
        </p>
        <p>
          Weather forecasts are provided by MET Norway through a Cloudflare-hosted proxy operated for the App.
          Before transmission, the App rounds latitude and longitude to two decimal places. The proxy receives
          these approximate coordinates and the connection IP address; it does not receive note contents,
          account identifiers, or precise coordinates. It sends only the approximate coordinates to MET Norway
          and does not forward your IP address. Cloudflare processes connections under its own privacy policies.
          Our application does not log IP addresses, coordinates, or request bodies. Public forecasts are cached
          by geographic grid, without user identifiers, until at most one day after their cache expiry.
          MET Norway may log the proxy IP address and approximate coordinates under its
          <a href="https://www.met.no/en/About-us/privacy" target="_blank" rel="noreferrer"> privacy policy</a>.
          Forecasts are used to provide the requested feature, not for advertising or tracking.
        </p>
        <p>
          Weather snapshots remain with their notes and are not continuously refreshed. Forecasts are not measured
          observations. Data is attributed to MET Norway under
          <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer"> CC BY 4.0</a>;
          temperature units and weather icons are adapted for display. Existing Apple weather snapshots are no
          longer displayed; the migration does not delete stored note data.
        </p>
      </section>

      <section id="retention">
        <h2>4. Storage, retention, and deletion</h2>
        <p>
          Your notes and locally stored media remain on your device until you delete them in the App, remove the app,
          or otherwise clear the app&apos;s data. iOS device backups, if enabled by you, are controlled by Apple
          and may contain app data according to your backup settings.
        </p>
        <p>
          You can delete individual notes and saved stickers in the App. If you contact us about a support message,
          you may ask us to delete that correspondence where we are able to do so, subject to records we must keep
          for legal, security, or accounting reasons.
        </p>
      </section>

      <section id="choices">
        <h2>5. Your choices</h2>
        <p>
          You decide whether to grant Photos, Camera, and location permissions. You can change those choices in iOS
          Settings. The App does not require location, camera, or photo access for basic note writing. You may also
          delete local content directly in the app.
        </p>
      </section>

      <section id="children">
        <h2>6. Children&apos;s privacy</h2>
        <p>
          The App is not directed to children under 13, or the minimum age required by applicable law in your location.
          We do not knowingly collect personal information from children through an account for the App because the App
          does not require accounts.
        </p>
      </section>

      <section id="changes">
        <h2>7. Changes to this policy</h2>
        <p>
          We may update this policy when the App&apos;s features, services, or legal obligations change. The updated version
          will be posted on this page with a new &quot;Last updated&quot; date. If a change materially affects how
          we handle information, we will make that change clear where appropriate.
        </p>
      </section>

      <section id="contact">
        <h2>8. Contact</h2>
        <p>
          Privacy questions and requests: <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
        </p>
        <p className="legal-signoff">
          LRAI STUDIO · {siteConfig.developer} · {siteConfig.name}
        </p>
      </section>
    </LegalLayout>
  );
}
