export type ProductStatus = "active" | "in-development" | "concept" | "future";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  href?: string;
  accentColor: string;
}

export const products: Product[] = [
  {
    id: "luren",
    name: "Luren",
    tagline: "Personal Alignment System",
    description:
      "Track your moods, actions, journal, calendar, and reflections in one calm rhythm. Built for people who take their growth seriously.",
    status: "active",
    href: "/luren",
    accentColor: "#74d8ff",
  },
  {
    id: "creative-systems",
    name: "Creative Systems",
    tagline: "Tools for Organized Creative Work",
    description:
      "Organize ideas, worlds, and creative projects with intelligent structure that grows with you.",
    status: "in-development",
    accentColor: "#b58cff",
  },
  {
    id: "shared-life",
    name: "Shared Life Planning",
    tagline: "Systems for Intentional Living Together",
    description:
      "Shared calendars, routines, and intentional planning tools designed for life alongside others.",
    status: "future",
    accentColor: "#4ecdc4",
  },
  {
    id: "reflection-tools",
    name: "Reflection Tools",
    tagline: "Focused Emotional Clarity",
    description:
      "Focused tools for emotional clarity, journaling, and pattern discovery — distilled to their essentials.",
    status: "future",
    accentColor: "#7ef0d3",
  },
];

export const statusConfig: Record<ProductStatus, { label: string; color: string }> = {
  active: { label: "Coming to Android & iOS", color: "#74d8ff" },
  "in-development": { label: "In Development", color: "#4ecdc4" },
  concept: { label: "Concept", color: "#b58cff" },
  future: { label: "Coming Soon", color: "#8ca8b3" },
};
