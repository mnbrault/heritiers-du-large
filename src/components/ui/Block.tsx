import type { ReactNode } from "react";
import Link from "next/link";

type Tone = "default" | "soft" | "ocean" | "dark";

const tones: Record<Tone, string> = {
  default:
    "bg-gradient-to-br from-white to-slate-50 border-slate-200 text-slate-900",
  soft: "bg-gradient-to-br from-slate-50 to-white border-slate-200 text-slate-900",
  ocean:
    "bg-gradient-to-br from-blue-50 to-white border-blue-100 text-slate-900",
  dark: "bg-gradient-to-br from-ocean-navy to-ocean-deep border-white/10 text-white",
};

export function Block({
  children,
  className = "",
  tone = "default",
  hover = true,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  tone?: Tone;
  hover?: boolean;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag
      className={`relative overflow-hidden rounded-2xl border p-6 sm:p-8 ${tones[tone]} ${hover ? "block-hover" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}

export function BlockLink({
  href,
  title,
  description,
  cta = "Tracer la route →",
  eyebrow,
}: {
  href: string;
  title: string;
  description: ReactNode;
  cta?: string;
  eyebrow?: string;
}) {
  return (
    <Link href={href} className="group block h-full">
      <Block className="h-full" tone="soft">
        {eyebrow ? (
          <p className="eyebrow mb-3 text-ocean-accent">{eyebrow}</p>
        ) : null}
        <h3 className="font-display mb-3 text-2xl font-semibold tracking-tight text-slate-900">
          {title}
        </h3>
        <p className="mb-6 text-slate-600 leading-relaxed">{description}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-ocean-accent transition-transform group-hover:translate-x-1">
          {cta}
        </span>
      </Block>
    </Link>
  );
}
