import type { Metadata } from "next";

import { LegalLayout } from "@/components/legal-layout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms for using ${siteConfig.name} and its related website.`,
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      summary="These terms explain the simple rules for using Tucked, a local-first place for notes and personal moments."
    >
      <section id="overview">
        <h2>1. Agreement</h2>
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your use of the Tucked app and this website, operated by
          LRAI STUDIO and developed by {siteConfig.developer}. By using Tucked, you agree to these Terms. If you do
          not agree, do not use the app or website.
        </p>
        <p>
          You must be legally able to accept these Terms in your location. If you are below the age of majority,
          use Tucked with the permission and supervision of a parent or legal guardian.
        </p>
      </section>

      <section id="data">
        <h2>2. Your content</h2>
        <p>
          You keep ownership of the text, photos, stickers, and other content you create or add to Tucked. You are
          responsible for having the rights and permissions needed for content you import, photograph, edit, or
          publish elsewhere.
        </p>
        <p>
          Tucked is designed to store your notes and media locally on your device. We do not promise that any content
          will be recoverable after device loss, app deletion, storage failure, or a change to your device backup.
          Keep any separate backup or export that matters to you.
        </p>
      </section>

      <section id="third-parties">
        <h2>3. Permissions and third-party services</h2>
        <p>
          Tucked may request access to Photos, Camera, or When In Use location so that you can add media, create
          stickers, save an export, or attach optional location and weather context to a new note. You can refuse or
          withdraw permission, though some features may not work without it.
        </p>
        <p>
          Tucked may use Apple services including StoreKit and WeatherKit. Apple services are provided by Apple under
          Apple&apos;s own terms. Weather information is for general context only, may be delayed or inaccurate, and
          must not be used for emergency, safety-critical, or life-saving decisions. Apple&apos;s required WeatherKit
          attribution is available in the <a href="https://developer.apple.com/documentation/weatherkit/weatherattribution" target="_blank" rel="noreferrer">Apple WeatherKit documentation</a>.
        </p>
      </section>

      <section>
        <h2>4. License to use Tucked</h2>
        <p>
          Subject to these Terms, we grant you a limited, personal, non-exclusive, non-transferable, revocable
          license to use Tucked for your own lawful purposes on Apple devices that you own or control. You may not
          copy, resell, sublicense, rent, reverse engineer, decompile, or attempt to extract source code from Tucked,
          except where applicable law does not allow that restriction.
        </p>
      </section>

      <section>
        <h2>5. App Store purchases</h2>
        <p>
          Optional features may be offered as in-app purchases through Apple. The price, billing period, introductory
          offer, and renewal terms shown by Apple at the time of purchase control that transaction. Auto-renewable
          subscriptions renew unless you cancel through your Apple account before the renewal period begins. You can
          manage or cancel subscriptions through the App Store or your Apple account settings.
        </p>
        <p>
          Apple is responsible for payment processing, billing, and refunds for App Store purchases under Apple&apos;s
          applicable policies. We do not ask you to provide payment card details directly to Tucked.
        </p>
      </section>

      <section>
        <h2>6. Acceptable use</h2>
        <p>
          You agree not to use Tucked to violate law or another person&apos;s rights, distribute malicious code, interfere
          with the app or website, or attempt to access systems that are not intended for you. You are responsible for
          the content you create and for how you use any exported material.
        </p>
      </section>

      <section>
        <h2>7. Availability and updates</h2>
        <p>
          We may change, pause, or discontinue parts of Tucked or this website, and we may release updates that fix
          bugs, improve security, or change features. We do not guarantee that Tucked will be available at all times
          or on every device. You are responsible for installing updates when they are made available.
        </p>
      </section>

      <section>
        <h2>8. Disclaimers</h2>
        <p>
          Tucked is provided on an &quot;as available&quot; and &quot;as is&quot; basis to the maximum extent permitted by law.
          We do not warrant that the app will be uninterrupted, error-free, or that local content will never be lost.
          Tucked is a personal writing and journaling tool, not a medical, legal, financial, emergency, or safety
          service.
        </p>
      </section>

      <section>
        <h2>9. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by applicable law, LRAI STUDIO and its developer will not be liable for
          indirect, incidental, special, consequential, or exemplary damages arising from your use of, or inability
          to use, Tucked or this website. Nothing in these Terms excludes liability that cannot be excluded under
          applicable law.
        </p>
      </section>

      <section>
        <h2>10. Changes to these Terms</h2>
        <p>
          We may update these Terms as Tucked evolves. We will post the updated Terms on this page and update the
          date shown with the policy. Your continued use of Tucked after an update means you accept the revised Terms
          to the extent permitted by law.
        </p>
      </section>

      <section id="retention">
        <h2>11. Apple as a third-party beneficiary</h2>
        <p>
          Apple is not responsible for Tucked, its content, or its support. However, where applicable under Apple&apos;s
          App Store terms, Apple and its subsidiaries may enforce these Terms as third-party beneficiaries.
        </p>
      </section>

      <section id="contact">
        <h2>12. Contact</h2>
        <p>
          Questions about these Terms can be sent to <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
        </p>
        <p className="legal-signoff">LRAI STUDIO · {siteConfig.developer} · Tucked</p>
      </section>
    </LegalLayout>
  );
}
