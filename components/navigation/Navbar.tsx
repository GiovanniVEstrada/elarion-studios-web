"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ease } from "@/lib/motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/luren", label: "Luren" },
  { href: "/apps", label: "Apps" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50"
      style={{
        backdropFilter: "blur(18px)",
        background: "rgba(6,19,31,0.88)",
        borderBottom: "1px solid rgba(116,216,255,0.07)",
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Wordmark */}
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-heading text-lg italic text-luren-heading">
            Elarion
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-luren-muted">
            Studios
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-xs font-medium uppercase tracking-widest transition-colors duration-200 ${
                pathname === l.href
                  ? "text-luren-cyan"
                  : "text-luren-muted hover:text-luren-heading"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link
            href="/luren"
            className="hidden rounded-full border border-luren-cyan/40 px-5 py-2 text-xs font-medium uppercase tracking-widest text-luren-cyan transition-all duration-300 hover:border-luren-cyan hover:bg-luren-cyan/10 sm:inline-flex"
          >
            Explore Luren
          </Link>

          <button
            className="p-1 text-luren-muted transition-colors hover:text-luren-heading md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease }}
            style={{
              background: "rgba(6,19,31,0.97)",
              borderTop: "1px solid rgba(116,216,255,0.06)",
            }}
          >
            <div className="flex flex-col gap-5 px-6 py-6">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    pathname === l.href ? "text-luren-cyan" : "text-luren-muted"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/luren"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex w-fit rounded-full border border-luren-cyan/40 px-5 py-2 text-xs font-medium uppercase tracking-widest text-luren-cyan"
              >
                Explore Luren
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
