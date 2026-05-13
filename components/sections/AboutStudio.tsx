export default function AboutStudio() {
  return (
    <section className="relative overflow-hidden bg-luren-surface px-6 py-28">
      <div
        className="mx-auto mb-20 h-px max-w-xs"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(116,216,255,0.25), transparent)",
        }}
      />

      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-luren-cyan">
          Elarion Studios
        </p>

        <h2
          className="mb-8 font-heading italic text-luren-heading"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
        >
          Built for those who take their growth seriously.
        </h2>

        <p className="mb-6 text-base font-light leading-relaxed text-luren-body">
          Elarion Studios builds intelligent personal tools that sit at the
          intersection of self-knowledge and systems design. We believe the most
          effective productivity comes from alignment — not pressure.
        </p>

        <p className="text-base font-light leading-relaxed text-luren-body">
          Luren isn't a to-do app. It's a mirror for your life — a system that
          learns your patterns, surfaces your insights, and helps you move in the
          direction that actually matters to you.
        </p>

        <div className="mt-12 flex justify-center">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full"
            style={{
              background: "rgba(116,216,255,0.08)",
              border: "1px solid rgba(116,216,255,0.2)",
            }}
          >
            <svg
              width="20"
              height="20"
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
      </div>
    </section>
  );
}
