import type { Metadata } from "next";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "About — Elarion Studios",
  description:
    "Elarion Studios is an independent software studio building calm, intelligent systems for reflection, alignment, creativity, and intentional living.",
};

const values = [
  {
    label: "Calm over noise",
    body: "We design tools that lower your cognitive load, not raise it. Less alert, more signal.",
  },
  {
    label: "Alignment over productivity",
    body: "We're not optimizing for output. We're building systems that help you work in ways that are actually sustainable.",
  },
  {
    label: "Depth over features",
    body: "Every module ships when it's worth shipping. We'd rather give you one thing that works well than ten that don't.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-luren-surface px-6 pt-36 pb-20">
        <div
          className="orb"
          style={{
            width: 500,
            height: 300,
            background:
              "radial-gradient(ellipse, rgba(181,140,255,0.14) 0%, transparent 70%)",
            top: "-50px",
            left: "-100px",
            animation: "float-a 26s ease-in-out infinite",
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-luren-muted">
            About the studio
          </p>
          <h1
            className="mb-5 font-heading italic text-luren-heading"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.2 }}
          >
            Independent. Intentional. Building quietly.
          </h1>
          <p className="max-w-2xl text-base font-light leading-relaxed text-luren-body">
            Elarion Studios is an independent software studio focused on building
            calm, intelligent systems for reflection, alignment, creativity, and
            intentional living.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-luren-surface px-6 pb-20">
        <div className="mx-auto max-w-3xl">
          <div
            className="mb-16 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(116,216,255,0.18), transparent)",
            }}
          />

          <div className="space-y-8">
            <div>
              <h2
                className="mb-4 font-heading italic text-luren-heading"
                style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
              >
                What we're trying to do.
              </h2>
              <p className="text-base font-light leading-relaxed text-luren-body">
                The goal is to create technology that helps people understand
                their patterns, organize their lives, and move with more clarity
                — without overwhelming them.
              </p>
            </div>

            <p className="text-base font-light leading-relaxed text-luren-body">
              Most productivity tools are built around the assumption that you
              need to do more. We think the problem is usually different — you
              need to understand what's worth doing, and when. That's what we
              build for.
            </p>

            <p className="text-base font-light leading-relaxed text-luren-body">
              Luren is the first product in that ecosystem. More will follow,
              each serving a different facet of how people think, create, and
              live.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="px-6 py-20"
        style={{ background: "#07172a" }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="mb-10 text-xs font-semibold uppercase tracking-[0.22em] text-luren-muted">
            How we work
          </p>
          <div className="space-y-10">
            {values.map((v) => (
              <div key={v.label} className="flex gap-6">
                <div
                  className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                  style={{ background: "#74d8ff" }}
                />
                <div>
                  <p className="mb-2 text-sm font-semibold text-luren-heading">
                    {v.label}
                  </p>
                  <p className="text-sm font-light leading-relaxed text-luren-body">
                    {v.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio symbol */}
      <section className="bg-luren-surface px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full"
              style={{
                background: "rgba(116,216,255,0.07)",
                border: "1px solid rgba(116,216,255,0.18)",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#74d8ff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>
          <p className="font-heading text-lg italic text-luren-heading">
            Elarion Studios
          </p>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-luren-muted">
            Building with intention
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
