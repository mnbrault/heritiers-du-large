import type { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  children,
  id,
  className = "",
  containerClassName = "",
  narrow = false,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  narrow?: boolean;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <Container size={narrow ? "narrow" : "default"} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`mb-10 sm:mb-14 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}`}
    >
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="font-display text-3xl tracking-tight text-ocean-navy sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-text-secondary">
          {description}
        </p>
      ) : null}
    </div>
  );
}
