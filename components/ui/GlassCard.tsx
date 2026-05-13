import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  accentColor?: string;
}

export default function GlassCard({
  children,
  className = "",
  accentColor,
}: GlassCardProps) {
  return (
    <div
      className={`relative rounded-2xl ${className}`}
      style={{
        background: "rgba(10, 32, 48, 0.45)",
        border: `1px solid ${accentColor ? `${accentColor}1a` : "rgba(116,216,255,0.1)"}`,
        backdropFilter: "blur(14px)",
      }}
    >
      {children}
    </div>
  );
}
