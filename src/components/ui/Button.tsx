import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/25 hover:from-blue-700 hover:to-blue-800 hover:-translate-y-0.5",
  secondary:
    "bg-white text-slate-800 border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50",
  ghost: "bg-transparent text-white border border-white/30 hover:bg-white/10",
  light:
    "bg-white text-ocean-navy hover:bg-azure-mist shadow-lg shadow-black/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all ${variants[variant]} ${className}`;

  if (external || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
