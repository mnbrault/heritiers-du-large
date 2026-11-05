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
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
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
      className={`mb-12 sm:mb-16 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}
    >
      {eyebrow ? (
        <p
          className={`eyebrow mb-4 text-ocean-accent ${align === "center" ? "" : ""}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}
