import Link from "next/link";
import { ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  variant?: "primary" | "ghost";
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export default function CTAButton({
  href,
  variant = "primary",
  children,
  icon,
  className = "",
}: CTAButtonProps) {
  const isPrimary = variant === "primary";
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium uppercase tracking-widest transition-all duration-300 ${
        isPrimary
          ? "border border-luren-cyan/50 text-luren-cyan hover:border-luren-cyan hover:bg-luren-cyan/10"
          : "border border-luren-muted/25 text-luren-muted hover:border-luren-muted/50 hover:text-luren-body"
      } ${className}`}
      style={isPrimary ? { boxShadow: "0 0 20px rgba(116,216,255,0.12)" } : undefined}
    >
      {icon}
      {children}
    </Link>
  );
}
