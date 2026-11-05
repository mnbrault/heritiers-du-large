import { mailto, SITE } from "@/lib/site";

export function ContactLine({
  label = "Construisons votre projet",
}: {
  label?: string;
}) {
  return (
    <p className="eyebrow pt-12 text-[0.68rem]">
      CONTACT // {label} :{" "}
      <a
        href={mailto(label)}
        className="text-ocean-teal transition-colors hover:text-ocean-navy"
      >
        Bertrand Castelnérac ↗
      </a>
      <span className="sr-only"> ({SITE.email})</span>
    </p>
  );
}
