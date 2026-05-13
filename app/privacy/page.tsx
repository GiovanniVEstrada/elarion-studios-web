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
            className="mb-8 font-heading italic text-luren-heading"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
          >
            Privacy Policy
          </h1>

          <div
            className="mb-12 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(116,216,255,0.18), transparent)",
            }}
          />

          <p className="mb-4 text-sm font-light leading-relaxed text-luren-body">
            A full privacy policy is being prepared and will be published here
            before Luren launches on Android and iOS.
          </p>
          <p className="text-sm font-light leading-relaxed text-luren-body">
            In the meantime, if you have any privacy-related questions, please
            reach out at{" "}
            <a
              href="mailto:contact@elarionstudios.com"
              className="text-luren-cyan underline-offset-4 hover:underline"
            >
              contact@elarionstudios.com
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
