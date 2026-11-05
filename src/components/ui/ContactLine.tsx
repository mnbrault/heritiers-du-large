import { mailto, SITE } from "@/lib/site";

export function ContactLine({
  label = "Construisons votre projet",
}: {
  label?: string;
}) {
  return (
    <p className="eyebrow pt-8 text-slate-500">
      CONTACT // {label} :{" "}
      <a
        href={mailto(label)}
        className="text-ocean-accent transition-colors hover:text-blue-700"
      >
        Bertrand Castelnérac ↗
      </a>
      <span className="sr-only"> ({SITE.email})</span>
    </p>
  );
}
