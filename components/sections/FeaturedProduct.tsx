"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ease } from "@/lib/motion";

const highlights = [
  "Energy rhythm tracking (Tide)",
  "Guided journaling",
  "Intention-aligned actions",
  "Reflective insights",
];

export default function FeaturedProduct() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-luren-surface px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-luren-muted">
            First product
          </p>
          <h2
            className="font-heading italic text-luren-heading"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
          >
            Luren — Personal Alignment System
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease }}
          className="relative rounded-3xl p-8 sm:p-12"
          style={{
            background: "rgba(10, 32, 48, 0.55)",
            border: "1px solid rgba(116,216,255,0.14)",
            backdropFilter: "blur(18px)",
          }}
        >
          {/* Top highlight line */}
          <div
            className="absolute -top-px left-12 right-12 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(116,216,255,0.3), transparent)",
            }}
          />

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: info */}
            <div className="flex flex-col justify-center">
              <span
                className="mb-6 inline-block w-fit rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-widest"
                style={{
                  background: "rgba(116,216,255,0.1)",
                  color: "#74d8ff",
                  border: "1px solid rgba(116,216,255,0.25)",
                }}
              >
                Coming to Android & iOS
              </span>

              <p className="mb-5 text-sm font-light leading-relaxed text-luren-body">
                Luren is an intelligent personal alignment system that connects
                your energy, insights, and intentions — all in one place. Built
                for people who take their growth seriously.
              </p>

              <ul className="mb-8 space-y-2.5">
                {highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-3 text-sm text-luren-body"
                  >
                    <span className="h-1 w-1 flex-shrink-0 rounded-full bg-luren-cyan" />
                    {h}
                  </li>
                ))}
              </ul>

              <Link
                href="/luren"
                className="inline-flex items-center gap-2 text-sm font-medium text-luren-cyan transition-colors hover:text-luren-heading"
              >
                Explore Luren
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
            </div>

            {/* Right: app card visual */}
            <div className="flex items-center justify-center">
              <div
                className="relative flex h-56 w-48 flex-col items-center justify-center gap-3 rounded-3xl sm:h-64 sm:w-52"
                style={{
                  background: "rgba(6,19,31,0.85)",
                  border: "1px solid rgba(116,216,255,0.18)",
                  boxShadow:
                    "0 0 60px rgba(116,216,255,0.08), 0 40px 80px rgba(0,0,0,0.35)",
                }}
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{
                    background: "rgba(116,216,255,0.1)",
                    border: "1px solid rgba(116,216,255,0.25)",
                  }}
                >
                  <div
                    className="h-5 w-5 rounded-full"
                    style={{ background: "#74d8ff" }}
                  />
                </div>
                <p className="font-heading text-xl italic text-luren-heading">
                  Luren
                </p>
                <p className="text-center text-[11px] font-medium uppercase tracking-[0.15em] text-luren-muted">
                  Personal Alignment
                </p>
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%)",
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
