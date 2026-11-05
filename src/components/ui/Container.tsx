import type { ReactNode } from "react";

type Size = "default" | "narrow" | "wide";

const sizes: Record<Size, string> = {
  default: "max-w-7xl",
  narrow: "max-w-3xl",
  wide: "max-w-7xl",
};

export function Container({
  children,
  size = "default",
  className = "",
}: {
  children: ReactNode;
  size?: Size;
  className?: string;
}) {
  return (
    <div
      className={`${sizes[size]} mx-auto w-full px-6 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}
