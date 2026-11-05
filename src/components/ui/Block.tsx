import type { ReactNode } from "react";
import Link from "next/link";

type Tone = "default" | "soft" | "ocean" | "dark";

const tones: Record<Tone, string> = {
  default: "bg-surface border-border text-ocean-navy",
  soft: "bg-ecume border-border text-ocean-navy",
  ocean: "bg-surface border-border text-ocean-navy",
  dark: "bg-ocean-navy border-white/10 text-white",
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
      className={`relative overflow-hidden rounded-sm border p-6 sm:p-8 ${tones[tone]} ${hover ? "block-hover" : ""} ${className}`}
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
      <Block className="h-full" tone="soft" hover={false}>
        {eyebrow ? <p className="eyebrow mb-3 text-ocean-teal">{eyebrow}</p> : null}
        <h3 className="font-display mb-3 text-2xl tracking-tight text-ocean-navy">
          {title}
        </h3>
        <p className="mb-6 text-text-secondary leading-relaxed">{description}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-ocean-teal transition-transform group-hover:translate-x-1">
          {cta}
        </span>
      </Block>
    </Link>
  );
}
