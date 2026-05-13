"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ease } from "@/lib/motion";
import { products, statusConfig } from "@/lib/products";

export default function FutureApps() {
  const reduced = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden px-6 py-24"
      style={{ background: "#07172a" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-luren-muted">
              The ecosystem
            </p>
            <h2
              className="font-heading italic text-luren-heading"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}
            >
              What we're building.
            </h2>
          </div>
          <Link
            href="/apps"
            className="hidden items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-luren-muted transition-colors hover:text-luren-cyan sm:inline-flex"
          >
            View all
            <svg
              width="12"
              height="12"
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

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => {
            const { label, color } = statusConfig[p.status];
            const isActive = p.status === "active";

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: reduced ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  ease,
                  delay: reduced ? 0 : i * 0.08,
                }}
                className="rounded-2xl p-6"
                style={{
                  background: isActive
                    ? "rgba(10,32,48,0.6)"
                    : "rgba(10,32,48,0.3)",
                  border: `1px solid ${p.accentColor}${isActive ? "1a" : "0c"}`,
                  backdropFilter: "blur(14px)",
                }}
              >
                <div
                  className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl"
                  style={{
                    background: `${p.accentColor}14`,
                    border: `1px solid ${p.accentColor}28`,
                  }}
                >
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{
                      background: p.accentColor,
                      opacity: isActive ? 0.9 : 0.35,
                    }}
                  />
                </div>

                <span
                  className="mb-3 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest"
                  style={{
                    background: `${color}10`,
                    color,
                    border: `1px solid ${color}28`,
                  }}
                >
                  {label}
                </span>

                <h3
                  className="mb-1.5 font-heading text-base italic"
                  style={{ color: isActive ? "#ecf9ff" : "#8ca8b3" }}
                >
                  {p.name}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: isActive ? "#b6d0da" : "#6a8a96" }}
                >
                  {p.tagline}
                </p>

                {isActive && p.href && (
                  <Link
                    href={p.href}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-medium"
                    style={{ color }}
                  >
                    Explore
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            href="/apps"
            className="text-xs font-medium uppercase tracking-widest text-luren-muted hover:text-luren-cyan"
          >
            View all products →
          </Link>
        </div>
      </div>
    </section>
  );
}
