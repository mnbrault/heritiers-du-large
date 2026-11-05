import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "./Container";
import { Button } from "./Button";

export function PageHero({
  eyebrow,
  title,
  description,
  cta,
  image,
  fullBleed = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  cta?: { href: string; label: string };
  image?: { src: string; alt: string; credit?: string };
  fullBleed?: boolean;
}) {
  if (fullBleed && image) {
    return (
      <section className="relative min-h-[88vh] overflow-hidden text-white">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(45,180,160,0.22),transparent_55%)]" />

        <Container className="relative flex min-h-[88vh] flex-col justify-end pb-16 pt-36 sm:pb-20 sm:pt-40">
          <div className="max-w-3xl">
            {eyebrow ? (
              <p className="eyebrow animate-fade-up mb-5 text-frozen-water/90">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="font-display animate-fade-up-delay text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            {description ? (
              <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
                {description}
              </p>
            ) : null}
            {cta ? (
              <div className="animate-fade-up-delay-2 mt-10">
                <Button href={cta.href} variant="light">
                  {cta.label}
                </Button>
              </div>
            ) : null}
          </div>
          {image.credit ? (
            <p className="mt-10 text-xs text-white/50">{image.credit}</p>
          ) : null}
        </Container>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1e3a5f 1px, transparent 1px), linear-gradient(to bottom, #1e3a5f 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="pointer-events-none absolute top-10 right-0 h-[380px] w-[380px] rounded-full bg-gradient-to-br from-blue-100/50 via-teal-100/30 to-transparent blur-3xl" />

      <Container className="relative">
        <div className={`grid gap-10 ${image ? "lg:grid-cols-[1.1fr_0.9fr] lg:items-end" : ""}`}>
          <div>
            {eyebrow ? (
              <p className="eyebrow mb-4 text-ocean-accent">{eyebrow}</p>
            ) : null}
            <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                {description}
              </p>
            ) : null}
            {cta ? (
              <div className="mt-8">
                <Button href={cta.href}>{cta.label}</Button>
              </div>
            ) : null}
          </div>
          {image ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 shadow-xl shadow-blue-900/10">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
