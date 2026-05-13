import type { Metadata } from "next";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Elarion Studios",
  description: "Privacy policy for Elarion Studios and the Luren app.",
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="min-h-screen bg-luren-surface px-6 pt-36 pb-28">
        <div className="mx-auto max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-luren-muted">
            Legal
          </p>
          <h1
            className="mb-3 font-heading italic text-luren-heading"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
          >
            Privacy Policy
          </h1>
          <p className="mb-8 text-xs text-luren-muted">Last updated: May 13, 2026</p>

          <div
            className="mb-12 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(116,216,255,0.18), transparent)",
            }}
          />

          <div className="space-y-10 text-sm font-light leading-relaxed text-luren-body">
            <p>
              Elarion Studios (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates
              the Luren mobile application (the &ldquo;App&rdquo;) and the Elarion Studios website
              at elarionstudios.org (the &ldquo;Site&rdquo;). This Privacy Policy explains what
              information we collect, how we use it, and your rights regarding that information.
            </p>

            <section>
              <h2 className="mb-3 text-base font-semibold text-luren-heading">
                1. Information We Collect
              </h2>
              <p className="mb-3">
                <span className="font-medium text-luren-heading">Information you provide:</span>
              </p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Account details (name, email address) when you create an account</li>
                <li>Mood ratings and energy logs you enter in the Tide feature</li>
                <li>Journal entries and reflections written in the Journal feature</li>
                <li>Tasks and action items created in the Actions feature</li>
                <li>Calendar events and scheduling information</li>
              </ul>
              <p className="mt-3">
                <span className="font-medium text-luren-heading">Collected automatically:</span>
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>Basic usage analytics (features accessed, session duration)</li>
                <li>Device information (device type, operating system version)</li>
                <li>Crash reports and performance diagnostics</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-base font-semibold text-luren-heading">
                2. How We Use Your Information
              </h2>
              <p className="mb-3">We use your information to:</p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Provide, maintain, and improve the App&rsquo;s features</li>
                <li>Generate personalized insights and pattern analysis within the App</li>
                <li>Respond to support requests and inquiries</li>
                <li>Monitor and improve performance and reliability</li>
              </ul>
              <p className="mt-4">
                Your journal entries, mood logs, tasks, and personal reflections are used solely to
                deliver the App&rsquo;s features to you. We do not sell, rent, or share this data
                with third parties for marketing or advertising purposes.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-base font-semibold text-luren-heading">
                3. Data Storage and Security
              </h2>
              <p>
                Your personal data is stored securely using industry-standard encryption in transit
                and at rest. We implement appropriate technical and organizational measures to
                protect your information against unauthorized access, alteration, disclosure, or
                destruction.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-base font-semibold text-luren-heading">
                4. Third-Party Services
              </h2>
              <p>
                The App may use third-party services for analytics and crash reporting. These
                services may collect anonymized usage data under their own privacy policies. We do
                not share your personal journal entries, mood logs, or other user-generated content
                with any third party.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-base font-semibold text-luren-heading">
                5. Data Retention and Deletion
              </h2>
              <p>
                You may delete your account and all associated data at any time from within the
                App&rsquo;s settings. Upon deletion, your personal data will be permanently removed
                from our systems within 30 days.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-base font-semibold text-luren-heading">
                6. Children&rsquo;s Privacy
              </h2>
              <p>
                The App is not directed to children under 13. We do not knowingly collect personal
                information from children under 13. If you believe a child has provided us with
                personal data, please contact us and we will promptly delete it.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-base font-semibold text-luren-heading">
                7. Your Rights
              </h2>
              <p className="mb-3">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Access the personal data we hold about you</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, contact us at{" "}
                <a
                  href="mailto:contact@elarionstudios.com"
                  className="text-luren-cyan underline-offset-4 hover:underline"
                >
                  contact@elarionstudios.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-base font-semibold text-luren-heading">
                8. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of
                significant changes via email or in-app notification. Continued use of the App after
                changes are posted constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-base font-semibold text-luren-heading">
                9. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, reach out at{" "}
                <a
                  href="mailto:contact@elarionstudios.com"
                  className="text-luren-cyan underline-offset-4 hover:underline"
                >
                  contact@elarionstudios.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
