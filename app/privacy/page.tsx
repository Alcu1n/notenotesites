import type { Metadata } from "next";

import { LegalLayout } from "@/components/legal-layout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} handles notes, media, permissions, and support information.`,
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      summary="Driftleaf is designed to keep personal notes close: on your device, in your hands, and under your control."
    >
      <section id="overview">
        <h2>1. Overview</h2>
        <p>
          This Privacy Policy explains how LRAI STUDIO, developed by {siteConfig.developer} (&quot;LRAI
          STUDIO,&quot; &quot;we,&quot; or &quot;us&quot;), handles information in the Driftleaf app and this website.
          Driftleaf is a local-first notes and journaling app. The current version does not require an account and
          does not operate a remote account, advertising, analytics, or cross-app tracking system.
        </p>
        <p>
          Questions about this policy can be sent to <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
        </p>
      </section>

      <section id="data">
        <h2>2. Information Driftleaf handles</h2>
        <h3>Notes and media you create</h3>
        <p>
          Driftleaf handles the text, photos, stickers, layouts, dates, and other content you choose to create or
          add. This content is stored locally in the app&apos;s storage on your device. We do not receive or review
          your notes through a Driftleaf server.
        </p>

        <h3>Photos and camera access</h3>
        <p>
          If you choose to add a photo, make a sticker, or export a note, Driftleaf may request access to Photos or
          the camera. Photos and camera captures are used to complete the action you request. Sticker extraction
          is performed on the device. Driftleaf does not upload your photo library or camera captures to LRAI STUDIO.
          You can decline or later change these permissions in iOS Settings.
        </p>

        <h3>Location and weather context</h3>
        <p>
          If you grant When In Use location access, Driftleaf may use your current location while creating a new
          note to obtain a city/country label and current weather context. Driftleaf does not request background
          location access or continuously track your movements. When available, the resulting location label and
          weather snapshot may be saved with that note; Driftleaf is not designed to keep a history of precise
          coordinates.
        </p>

        <h3>Purchases</h3>
        <p>
          If you purchase an optional Driftleaf feature through the App Store, Apple processes the transaction through
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
          Driftleaf uses Apple system services when you choose features that depend on them, including Photos,
          Camera, Core Location, WeatherKit, and StoreKit. Those services may process information under Apple&apos;s
          own terms and privacy policies. We do not sell your personal information or provide your note content to
          advertising networks, data brokers, or third-party analytics providers.
        </p>
        <p>
          Weather information is provided through Apple Weather / WeatherKit. WeatherKit attribution and data-source
          information are available in Apple&apos;s <a href="https://developer.apple.com/documentation/weatherkit/weatherattribution" target="_blank" rel="noreferrer">WeatherKit attribution documentation</a>.
        </p>
      </section>

      <section id="retention">
        <h2>4. Storage, retention, and deletion</h2>
        <p>
          Your notes and locally stored media remain on your device until you delete them in Driftleaf, remove the
          app, or otherwise clear the app&apos;s data. iOS device backups, if enabled by you, are controlled by Apple
          and may contain app data according to your backup settings.
        </p>
        <p>
          You can delete individual notes and saved stickers in Driftleaf. If you contact us about a support message,
          you may ask us to delete that correspondence where we are able to do so, subject to records we must keep
          for legal, security, or accounting reasons.
        </p>
      </section>

      <section>
        <h2>5. Your choices</h2>
        <p>
          You decide whether to grant Photos, Camera, and location permissions. You can change those choices in iOS
          Settings. Driftleaf does not require location, camera, or photo access for basic note writing. You may also
          delete local content directly in the app.
        </p>
      </section>

      <section>
        <h2>6. Children&apos;s privacy</h2>
        <p>
          Driftleaf is not directed to children under 13, or the minimum age required by applicable law in your
          location. We do not knowingly collect personal information from children through a Driftleaf account because
          Driftleaf does not require accounts.
        </p>
      </section>

      <section>
        <h2>7. Changes to this policy</h2>
        <p>
          We may update this policy when Driftleaf&apos;s features, services, or legal obligations change. The updated
          version will be posted on this page with a new &quot;Last updated&quot; date. If a change materially affects how
          we handle information, we will make that change clear where appropriate.
        </p>
      </section>

      <section id="contact">
        <h2>8. Contact</h2>
        <p>
          Privacy questions and requests: <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
        </p>
        <p className="legal-signoff">LRAI STUDIO · {siteConfig.developer} · Driftleaf</p>
      </section>
    </LegalLayout>
  );
}
