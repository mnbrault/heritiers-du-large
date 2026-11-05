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
  /** Kept for compatibility: enables the split photo/text hero (never text-on-image). */
  fullBleed?: boolean;
}) {
  // fullBleed kept for callers; any hero with an image uses split (never text-on-photo).
  void fullBleed;

  if (image) {
    return (
      <section className="border-b border-border bg-surface lg:grid lg:min-h-[92vh] lg:grid-cols-2">
        {/* Mobile: photo first, no text overlay */}
        <div className="relative aspect-[4/5] bg-ocean-navy sm:aspect-[16/11] lg:order-2 lg:aspect-auto lg:min-h-[92vh]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {image.credit ? (
            <p className="photo-credit absolute bottom-3 left-4 right-4 text-white/75 drop-shadow">
              {image.credit}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col justify-center px-6 pb-14 pt-10 sm:px-8 sm:pb-16 lg:order-1 lg:px-12 lg:pt-28 xl:px-16">
          <div className="max-w-xl">
            {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
            <h1 className="font-display animate-fade-up text-4xl tracking-tight text-ocean-navy sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {description ? (
              <p className="animate-fade-up-delay mt-6 text-lg leading-relaxed text-text-secondary sm:text-xl">
                {description}
              </p>
            ) : null}
            {cta ? (
              <div className="animate-fade-up-delay-2 mt-10">
                <Button href={cta.href}>{cta.label}</Button>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-border bg-surface pt-28 pb-16 sm:pt-32 sm:pb-20">
      <Container>
        {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
        <h1 className="font-display max-w-3xl text-4xl tracking-tight text-ocean-navy sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl">
            {description}
          </p>
        ) : null}
        {cta ? (
          <div className="mt-10">
            <Button href={cta.href}>{cta.label}</Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
