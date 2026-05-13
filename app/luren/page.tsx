import type { Metadata } from "next";
import LurenHero from "@/components/sections/LurenHero";
import LurenFeatures from "@/components/sections/LurenFeatures";
import AppPreview from "@/components/sections/AppPreview";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Luren — Know Yourself. Align Your Life.",
  description:
    "Luren is an intelligent personal alignment system that helps you track, reflect, and evolve through your moods, actions, journal, calendar, and personal insights.",
  openGraph: {
    title: "Luren — Know Yourself. Align Your Life.",
    description:
      "An intelligent personal alignment system by Elarion Studios. Coming soon to Android and iOS.",
  },
};

export default function LurenPage() {
  return (
    <main>
      <LurenHero />
      <LurenFeatures />
      <AppPreview />
      <Footer />
    </main>
  );
}
