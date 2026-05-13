"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ease } from "@/lib/motion";

export default function StudioMission() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-luren-surface px-6 py-24">
      <div
        className="mx-auto mb-16 h-px max-w-sm"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(116,216,255,0.2), transparent)",
        }}
      />

      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: reduced ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease }}
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-luren-muted">
          Our philosophy
        </p>
        <h2
          className="mb-6 font-heading italic text-luren-heading"
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}
        >
          Technology that works with you, not against you.
        </h2>
        <p className="mb-10 text-base font-light leading-relaxed text-luren-body">
          We believe the most effective tools are the ones that understand how
          you work — not the ones that demand you work a certain way. Every
          system we build starts from that principle.
        </p>

        <Link
          href="/about"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-luren-cyan transition-colors hover:text-luren-heading"
        >
          Our full story
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
}
