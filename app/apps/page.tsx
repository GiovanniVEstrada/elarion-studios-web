import type { Metadata } from "next";
import { products } from "@/lib/products";
import ProductCard from "@/components/ui/ProductCard";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Apps — Elarion Studios",
  description:
    "Explore what Elarion Studios is building — from Luren, our intelligent personal alignment system, to future tools for creative work and intentional living.",
};

export default function AppsPage() {
  return (
    <main>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-luren-surface px-6 pt-36 pb-20">
        <div
          className="orb"
          style={{
            width: 400,
            height: 400,
            background: "radial-gradient(circle, rgba(116,216,255,0.15) 0%, transparent 70%)",
            top: "-100px",
            right: "-80px",
            animation: "float-b 24s ease-in-out infinite",
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-luren-muted">
            Elarion Studios
          </p>
          <h1
            className="mb-5 font-heading italic text-luren-heading"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.2 }}
          >
            What we're building.
          </h1>
          <p className="max-w-xl text-base font-light leading-relaxed text-luren-body">
            Every product we make lives under the same principle — calm,
            intelligent tools that help you understand yourself and move with
            more clarity.
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section className="bg-luren-surface px-6 pb-28">
        <div className="mx-auto max-w-5xl">
          <div
            className="mb-12 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(116,216,255,0.15), transparent)",
            }}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} featured />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
