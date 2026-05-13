"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ease } from "@/lib/motion";
import OrbBackground from "@/components/ui/OrbBackground";

const orbs = [
  {
    size: 520,
    color: "rgba(116,216,255,0.22)",
    top: "-120px",
    left: "-140px",
    animation: "float-a" as const,
    duration: 20,
  },
  {
    size: 420,
    color: "rgba(78,205,196,0.18)",
    top: "35%",
    right: "-100px",
    animation: "float-b" as const,
    duration: 26,
  },
  {
    size: 340,
    color: "rgba(181,140,255,0.16)",
    bottom: "-60px",
    left: "30%",
    animation: "float-c" as const,
    duration: 32,
  },
];

export default function LurenHero() {
  const reduced = useReducedMotion();
  const y = reduced ? 0 : 28;

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-luren-surface px-6 pt-32 pb-24">
      <OrbBackground orbs={orbs} />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.p
          className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-luren-muted"
          initial={{ opacity: 0, y }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0 }}
        >
          Elarion Studios
        </motion.p>

        <motion.h1
          className="mb-6 font-heading italic text-luren-heading"
          style={{ fontSize: "clamp(2.2rem, 6vw, 3.6rem)", lineHeight: 1.18 }}
          initial={{ opacity: 0, y }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.12 }}
        >
          Know yourself.
          <br />
          Align your life.
        </motion.h1>

        <motion.p
          className="mx-auto mb-10 max-w-xl text-base font-light leading-relaxed text-luren-body sm:text-lg"
          initial={{ opacity: 0, y }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.22 }}
        >
          Luren is an intelligent personal alignment system that connects your
          energy, insights, and intentions — all in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.32 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-luren-cyan/50 px-7 py-3 text-sm font-medium uppercase tracking-widest text-luren-cyan transition-all duration-300 hover:border-luren-cyan hover:bg-luren-cyan/10"
              style={{ boxShadow: "0 0 24px rgba(116,216,255,0.15)" }}
            >
              {/* Google Play icon */}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-12.6-3.57-3.57L3.18 23.76zM20.5 10.37l-2.79-1.6-3.96 3.96 3.96 3.96 2.8-1.61c.8-.46.8-1.66-.01-2.11v-.6zM2 3.17c-.05.17-.08.37-.08.58v16.5c0 .21.03.41.08.58l.1.1 9.25-9.25v-.22L2.1 3.07 2 3.17zM13.57 8.46l-1.3-1.31-9.18-5.3c-.35-.2-.74-.23-1.09-.08l12.14 12.14-1.3-1.3-.27-4.15z" />
              </svg>
              Coming to Google Play
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-luren-cyan/50 px-7 py-3 text-sm font-medium uppercase tracking-widest text-luren-cyan transition-all duration-300 hover:border-luren-cyan hover:bg-luren-cyan/10"
              style={{ boxShadow: "0 0 24px rgba(116,216,255,0.15)" }}
            >
              {/* Apple icon */}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Coming to App Store
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <div
          className="h-8 w-px"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(116,216,255,0.4))",
          }}
        />
      </motion.div>
    </section>
  );
}
