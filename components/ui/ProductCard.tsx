"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ease } from "@/lib/motion";
import { Product, statusConfig } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  index?: number;
  featured?: boolean;
}

export default function ProductCard({
  product,
  index = 0,
  featured = false,
}: ProductCardProps) {
  const reduced = useReducedMotion();
  const { label, color } = statusConfig[product.status];
  const isActive = product.status === "active";

  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease, delay: reduced ? 0 : index * 0.1 }}
      whileHover={reduced || !isActive ? {} : { y: -4 }}
      className={`relative flex flex-col rounded-2xl transition-colors duration-300 ${
        featured ? "p-9" : "p-7"
      }`}
      style={{
        background: isActive ? "rgba(10, 32, 48, 0.6)" : "rgba(10, 32, 48, 0.3)",
        border: `1px solid ${product.accentColor}${isActive ? "20" : "0d"}`,
        backdropFilter: "blur(14px)",
      }}
    >
      {/* Status badge */}
      <span
        className="mb-5 inline-block w-fit rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-widest"
        style={{
          background: `${color}12`,
          color,
          border: `1px solid ${color}30`,
        }}
      >
        {label}
      </span>

      {/* Icon */}
      <div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl"
        style={{
          background: `${product.accentColor}16`,
          border: `1px solid ${product.accentColor}30`,
        }}
      >
        <div
          className="h-4 w-4 rounded-full"
          style={{ background: product.accentColor, opacity: isActive ? 0.9 : 0.4 }}
        />
      </div>

      <p
        className="mb-1 text-xs font-semibold uppercase tracking-[0.18em]"
        style={{ color: product.accentColor, opacity: isActive ? 1 : 0.6 }}
      >
        {product.tagline}
      </p>

      <h3
        className={`mb-3 font-heading italic text-luren-heading ${
          featured ? "text-2xl" : "text-xl"
        }`}
        style={{ opacity: isActive ? 1 : 0.65 }}
      >
        {product.name}
      </h3>

      <p
        className="flex-1 text-sm font-light leading-relaxed text-luren-body"
        style={{ opacity: isActive ? 1 : 0.55 }}
      >
        {product.description}
      </p>

      <div className="mt-6">
        {isActive && product.href ? (
          <Link
            href={product.href}
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
            style={{ color: product.accentColor }}
          >
            Explore {product.name}
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
        ) : (
          <span className="text-xs text-luren-muted">Details coming soon</span>
        )}
      </div>
    </motion.div>
  );
}
