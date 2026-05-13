import type { Metadata } from "next";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Contact — Elarion Studios",
  description:
    "Get in touch with Elarion Studios for questions, feedback, early access, or business inquiries.",
};

const CONTACT_EMAIL = "contact@elarionstudios.com";

const topics = [
  {
    label: "General",
    description: "Questions, feedback, or just want to say hello.",
    email: CONTACT_EMAIL,
  },
  {
    label: "Early Access",
    description: "Interested in trying Luren before public launch.",
    email: CONTACT_EMAIL,
  },
  {
    label: "Press & Media",
    description: "Interviews, features, or press kit requests.",
    email: CONTACT_EMAIL,
  },
  {
    label: "Business",
    description: "Partnerships, licensing, or enterprise inquiries.",
    email: CONTACT_EMAIL,
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-luren-surface px-6 pt-36 pb-16">
        <div
          className="orb"
          style={{
            width: 420,
            height: 420,
            background:
              "radial-gradient(circle, rgba(78,205,196,0.14) 0%, transparent 70%)",
            top: "-80px",
            right: "-80px",
            animation: "float-b 22s ease-in-out infinite",
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-luren-muted">
            Get in touch
          </p>
          <h1
            className="mb-5 font-heading italic text-luren-heading"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.2 }}
          >
            Contact Elarion Studios
          </h1>
          <p className="max-w-lg text-base font-light leading-relaxed text-luren-body">
            For questions, feedback, early access, or future inquiries — reach
            out directly.
          </p>
        </div>
      </section>

      {/* Contact topics */}
      <section className="bg-luren-surface px-6 pb-28">
        <div className="mx-auto max-w-3xl">
          <div
            className="mb-14 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(116,216,255,0.18), transparent)",
            }}
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {topics.map((t) => (
              <a
                key={t.label}
                href={`mailto:${t.email}?subject=${encodeURIComponent(
                  `[${t.label}] — Elarion Studios`
                )}`}
                className="group rounded-2xl p-6 transition-colors duration-300"
                style={{
                  background: "rgba(10, 32, 48, 0.45)",
                  border: "1px solid rgba(116,216,255,0.1)",
                  backdropFilter: "blur(14px)",
                }}
              >
                <p className="mb-1.5 text-sm font-semibold text-luren-heading transition-colors group-hover:text-luren-cyan">
                  {t.label}
                </p>
                <p className="mb-4 text-xs font-light leading-relaxed text-luren-muted">
                  {t.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-luren-cyan">
                  {t.email}
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            ))}
          </div>

          <p className="mt-12 text-center text-xs text-luren-muted">
            We read every message. Response times may vary.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
