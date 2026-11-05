import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ContactLine } from "@/components/ui/ContactLine";
import { mailto, WP } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Les Héritiers du large – Conseil et consulting, communication d'entreprise, publicité et sponsoring voile à Lorient",
  description:
    "Sponsoring voile, communication d'entreprise et navigations à Lorient et La Trinité-sur-Mer. Découvrez Les Héritiers du large.",
};

const portes = [
  {
    n: "01",
    href: "/elite",
    title: "Élite",
    description: "Le circuit Figaro, tremplin des champions du large.",
  },
  {
    n: "02",
    href: "/academie",
    title: "Académie",
    description: (
      <>
        Détecter et accompagner les <strong>jeunes talents</strong> avec{" "}
        <strong>ORLABAY</strong>.
      </>
    ),
  },
  {
    n: "03",
    href: "/corporatif",
    title: "Corporatif",
    description: "Créer des liens entre vos équipes, clients et partenaires.",
  },
];

const etapes = [
  "Définir vos publics et vos objectifs",
  "Construire les activations",
  "Faire vivre votre partenariat sportif",
];

export default function HomePage() {
  return (
    <>
      {/* Zone A — Hero split : photo sans texte dessus */}
      <PageHero
        fullBleed
        eyebrow="JOURNAL DE BORD // COURSE AU LARGE"
        title="Les Héritiers du large"
        description="Performance, transmission et rencontres : la course au large au service de votre entreprise."
        cta={{
          href: mailto("Préparons votre navigation"),
          label: "Préparons votre navigation ↗",
        }}
        image={{
          src: `${WP}/2026/10/clipboard.jpeg`,
          alt: "Flotte Figaro en régate",
        }}
      />

      {/* Zone B — Cap */}
      <Section className="bg-ecume">
        <p className="eyebrow mb-5">DONNEZ UN CAP À VOTRE DÉVELOPPEMENT</p>
        <p className="max-w-2xl text-2xl leading-snug text-ocean-navy sm:text-3xl">
          Pour renforcer votre stratégie commerciale :{" "}
          <span className="font-semibold">invitons vos cibles à naviguer.</span>
        </p>
      </Section>

      {/* Zone C — Trois portes */}
      <Section className="bg-surface">
        <SectionHeader
          eyebrow="REPÈRE 01 // LES HÉRITIERS DU LARGE"
          title="Trois activités, un cap commun"
          description="Élite, Académie et Corporatif : un même fil conducteur entre performance sportive et développement d'entreprise."
        />

        <div className="rule-list">
          {portes.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group grid gap-2 py-7 sm:grid-cols-[4rem_1fr_auto] sm:items-baseline sm:gap-6"
            >
              <span className="eyebrow text-ocean-teal">{p.n}</span>
              <div>
                <h3 className="font-display text-2xl text-ocean-navy transition-colors group-hover:text-ocean-teal">
                  {p.title}
                </h3>
                <p className="mt-2 max-w-xl text-text-secondary leading-relaxed">
                  {p.description}
                </p>
              </div>
              <span className="text-sm font-semibold text-ocean-teal transition-transform group-hover:translate-x-1">
                Tracer la route →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Zone D — Méthode + Zone E — Contact rappel */}
      <Section className="bg-ecume">
        <SectionHeader
          eyebrow="REPÈRE 02 // CONSEIL & COMMUNICATION"
          title="Conseil & communication d'entreprise par le sport"
          description="À Lorient et sur la côte Atlantique, Bertrand Castelnérac accompagne les entreprises dans leurs projets de communication, de développement commercial et de sponsoring voile."
        />

        <ol className="rule-list max-w-2xl">
          {etapes.map((item, i) => (
            <li
              key={item}
              className="grid grid-cols-[3.5rem_1fr] gap-4 py-6 sm:gap-6"
            >
              <span className="eyebrow pt-1 text-ocean-teal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-lg text-ocean-navy leading-relaxed">{item}</p>
            </li>
          ))}
        </ol>

        <ContactLine label="Construisons votre projet" />
      </Section>
    </>
  );
}
