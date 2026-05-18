"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ease } from "@/lib/motion";
import CTAButton from "@/components/ui/CTAButton";
import WaveField from "@/components/WaveField";

export default function StudioHero() {
  const reduced = useReducedMotion();
  const y = reduced ? 0 : 28;

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-luren-surface px-6 pt-32 pb-24">
      <WaveField className="absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 z-[2] pointer-events-none" style={{ backdropFilter: 'blur(3px)' }} />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.p
          className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-luren-muted"
          initial={{ opacity: 0, y }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0 }}
        >
          Elarion Studios
        </motion.p>

        <motion.h1
          className="mb-7 font-heading italic text-luren-heading"
          style={{ fontSize: "clamp(2rem, 5.5vw, 3.4rem)", lineHeight: 1.2 }}
          initial={{ opacity: 0, y }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.12 }}
        >
          Intelligent systems for reflection,
          <br className="hidden sm:block" /> alignment, and creative life.
        </motion.h1>

        <motion.p
          className="mx-auto mb-10 max-w-2xl text-base font-light leading-relaxed text-luren-body sm:text-lg"
          initial={{ opacity: 0, y }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.22 }}
        >
          Elarion Studios builds calm, emotionally aware digital tools designed
          to help people understand themselves, organize their lives, and move
          with more clarity.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.32 }}
        >
          <CTAButton href="/luren" variant="primary">
            Explore Luren
          </CTAButton>
          <CTAButton href="/apps" variant="ghost">
            View Future Apps
          </CTAButton>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[3]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <div
          className="h-8 w-px"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(116,216,255,0.35))",
          }}
        />
      </motion.div>
    </section>
  );
}
