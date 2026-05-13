"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ease } from "@/lib/motion";

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Tide",
    color: "#74d8ff",
    description:
      "Track your natural energy rhythms and biorhythms to know when to push and when to recover.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Journal",
    color: "#b58cff",
    description:
      "Capture thoughts, emotions, and reflections with guided prompts that surface what matters most.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Actions",
    color: "#4ecdc4",
    description:
      "Prioritize and execute tasks that are aligned with your energy state and deeper intentions.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
    title: "Reflect",
    color: "#7ef0d3",
    description:
      "Weekly and monthly retrospectives that distill patterns and insights from your data over time.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Calendar",
    color: "#74d8ff",
    description:
      "Sync your schedule with your inner rhythms so your time reflects your actual priorities.",
  },
];

export default function LurenFeatures() {
  const reduced = useReducedMotion();
  const y = reduced ? 0 : 28;

  return (
    <section className="relative overflow-hidden bg-luren-surface px-6 py-28">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(10,32,48,0.9) 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-luren-muted">
            What's inside
          </p>
          <h2
            className="font-heading italic text-luren-heading"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
          >
            Five modules. One alignment.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group relative rounded-2xl p-7 transition-colors duration-300"
              style={{
                background: "rgba(10, 32, 48, 0.45)",
                border: "1px solid rgba(116, 216, 255, 0.1)",
                backdropFilter: "blur(14px)",
              }}
              initial={{ opacity: 0, y }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                ease,
                delay: reduced ? 0 : i * 0.08,
              }}
              whileHover={reduced ? {} : { y: -4 }}
            >
              <div
                className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: `${f.color}16`, color: f.color }}
              >
                {f.icon}
              </div>
              <h3
                className="mb-2 text-base font-semibold"
                style={{ color: f.color }}
              >
                {f.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-luren-body">
                {f.description}
              </p>
            </motion.div>
          ))}

          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
