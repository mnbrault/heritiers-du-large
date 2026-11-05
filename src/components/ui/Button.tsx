import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light";

const variants: Record<Variant, string> = {
  primary:
    "bg-ocean-teal text-white hover:bg-[#0b7f75] hover:-translate-y-0.5 shadow-md shadow-ocean-navy/10",
  secondary:
    "bg-transparent text-ocean-navy border border-border hover:border-ocean-teal hover:text-ocean-teal",
  ghost: "bg-transparent text-white border border-white/30 hover:bg-white/10",
  light:
    "bg-white text-ocean-navy hover:bg-ecume shadow-md shadow-black/10",
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
  const classes = `inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-sm font-semibold tracking-wide transition-all ${variants[variant]} ${className}`;

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
