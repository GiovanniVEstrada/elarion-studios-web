import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Elarion Studios — Intelligent Systems for Reflection and Alignment",
    template: "%s — Elarion Studios",
  },
  description:
    "Elarion Studios builds calm, intelligent digital systems for reflection, alignment, creativity, and intentional living.",
  openGraph: {
    title: "Elarion Studios — Intelligent Systems for Reflection and Alignment",
    description:
      "Elarion Studios builds calm, intelligent digital systems for reflection, alignment, creativity, and intentional living.",
    type: "website",
    siteName: "Elarion Studios",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elarion Studios",
    description:
      "Calm, intelligent digital systems for reflection, alignment, creativity, and intentional living.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="min-h-screen antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
