"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ease } from "@/lib/motion";

const screens = [
  { label: "Tide", sublabel: "Energy rhythm tracking", color: "#74d8ff" },
  { label: "Journal", sublabel: "Daily reflection", color: "#b58cff" },
  { label: "Actions", sublabel: "Aligned task flow", color: "#4ecdc4" },
];

const desktopLayout = [
  { rotate: "-6deg", scale: 0.92, z: 1, delay: 0 },
  { rotate: "0deg", scale: 1, z: 2, delay: 0.12 },
  { rotate: "6deg", scale: 0.92, z: 1, delay: 0.24 },
];

const AUTOPLAY_MS = 3200;

function PhoneShell({
  label,
  sublabel,
  color,
}: {
  label: string;
  sublabel: string;
  color: string;
}) {
  return (
    <div
      style={{
        width: 220,
        height: 448,
        borderRadius: 38,
        border: "1.5px solid rgba(116,216,255,0.15)",
        background: "#071929",
        boxShadow:
          "0 48px 96px rgba(0,0,0,0.55), 0 0 0 1px rgba(116,216,255,0.05) inset",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* Notch */}
      <div
        style={{
          position: "absolute",
          top: 14,
          left: "50%",
          transform: "translateX(-50%)",
          width: 76,
          height: 20,
          borderRadius: 12,
          background: "#040f19",
          zIndex: 10,
        }}
      />
      {/* Screen gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(160deg, ${color}12 0%, #071929 60%, #040f19 100%)`,
        }}
      />
      {/* Placeholder content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          padding: "0 24px",
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: `${color}18`,
            border: `1px solid ${color}40`,
          }}
        />
        <p style={{ color, fontSize: 13, fontWeight: 600, textAlign: "center" }}>
          {label}
        </p>
        <p
          style={{
            color: "#8ca8b3",
            fontSize: 11,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          {sublabel}
        </p>
      </div>
      {/* Glare */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 36,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.035) 0%, transparent 45%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export default function AppPreview() {
  const reduced = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % screens.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [reduced]);

  const go = (index: number) => {
    if (index === current) return;
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  return (
    <section
      className="relative overflow-hidden px-6 py-28"
      style={{ background: "#07172a" }}
    >
      <div
        className="orb"
        style={{
          width: 600,
          height: 300,
          background:
            "radial-gradient(ellipse, rgba(78,205,196,0.1) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-luren-muted">
            App preview
          </p>
          <h2
            className="font-heading italic text-luren-heading"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
          >
            Beautifully crafted, inside and out.
          </h2>
        </div>

        {/* ── Mobile: swooping carousel ── */}
        <div className="sm:hidden">
          <div className="relative flex h-[500px] items-center justify-center overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={current}
                className="absolute"
                initial={{
                  x: direction > 0 ? 300 : -300,
                  y: 60,
                  rotate: direction > 0 ? 16 : -16,
                  opacity: 0,
                  scale: 0.82,
                }}
                animate={{
                  x: 0,
                  y: 0,
                  rotate: 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  x: direction < 0 ? 300 : -300,
                  y: 60,
                  rotate: direction < 0 ? 16 : -16,
                  opacity: 0,
                  scale: 0.82,
                }}
                transition={{ duration: 0.52, ease }}
              >
                <PhoneShell {...screens[current]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {screens.map((s, i) => (
              <button
                key={s.label}
                onClick={() => go(i)}
                aria-label={`View ${s.label}`}
                className="rounded-full transition-all duration-300"
                style={{
                  height: 6,
                  width: i === current ? 24 : 6,
                  background:
                    i === current
                      ? "#74d8ff"
                      : "rgba(116,216,255,0.22)",
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop: three phones side by side ── */}
        <div className="hidden items-end justify-center gap-4 sm:flex sm:gap-6">
          {screens.map((s, i) => {
            const { rotate, scale, z, delay } = desktopLayout[i];
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: reduced ? 0 : 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, ease, delay: reduced ? 0 : delay }}
                style={{
                  transform: `rotate(${rotate}) scale(${scale})`,
                  zIndex: z,
                  flexShrink: 0,
                }}
              >
                <PhoneShell {...s} />
              </motion.div>
            );
          })}
        </div>

        <p className="mt-16 text-center text-xs text-luren-muted">
          Final UI subject to change. Drop screenshots into{" "}
          <code className="font-mono text-luren-muted/80">
            /public/screenshots/
          </code>{" "}
          to replace placeholders.
        </p>
      </div>
    </section>
  );
}
