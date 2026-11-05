import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ContactLine } from "@/components/ui/ContactLine";
import { mailto, WP } from "@/lib/site";

export const metadata: Metadata = {
  title: "Offres",
  description:
    "Navigations en Figaro 3 et Océanis 31, prospection commerciale, communication et sponsoring voile. Formules entreprise sur devis.",
};

const packs = [
  {
    n: "01",
    title: "Marketing ciblé",
    items: [
      "Aide à la prospection de vos cibles commerciales",
      "Invitations à naviguer et échanger",
    ],
  },
  {
    n: "02",
    title: "Navigations",
    items: [
      "Relations publiques dans un cadre idéal",
      "Initiation à la voile et à la régate",
    ],
  },
  {
    n: "03",
    title: "Storytelling et publicité",
    items: [
      "Marquages sur les bateaux",
      "Réseaux sociaux et web-série",
      "Coulisses, portraits et carnets de bord",
    ],
  },
];

const sponsoring = [
  {
    title: "Pack Voiles",
    items: [
      "Marquage publicitaire à vos couleurs",
      "Formats et emplacements à définir",
    ],
  },
  {
    title: "Pack Coque",
    items: [
      "Surfaces disponibles en intérieur et extérieur coque",
      "Visibilité au port comme en navigation",
    ],
  },
  {
    title: "Pack Combiné",
    items: ["Voiles et coque", "Activations et contenus associés"],
  },
];

const bullets = [
  "Navigations pour vos équipes, vos clients et vos invités",
  "Découverte de la voile ou initiation à la régate",
  "En semaine ou le week-end",
];

const pilotage = [
  "Cibles commerciales et publics à mobiliser",
  "Calendrier de contenus et d'événements",
  "Pour moins de 200 K€, un pack complet marketing / navigations / publicité",
];

export default function OffresPage() {
  return (
    <>
      <PageHero
        eyebrow="CONSEIL // COMMERCE // COMMUNICATION // SPORT"
        title="Des offres pour développer vos relations et votre visibilité"
        description={
          <>
            Consulting, <strong>prospection commerciale</strong>, publicité et
            communication d&apos;entreprise : une activation de sponsoring voile
            adaptée à vos objectifs.
          </>
        }
        cta={{
          href: mailto("Étudions votre formule"),
          label: "Étudions votre formule ↗",
        }}
      />

      <Section className="bg-surface">
        <SectionHeader
          eyebrow="REPÈRE 01 // PACKS"
          title="Packs communication & activation"
          description="Des packs combinables, construits autour de vos objectifs commerciaux et de communication."
        />
        <div className="rule-list">
          {packs.map((pack) => (
            <div
              key={pack.n}
              className="grid gap-3 py-8 sm:grid-cols-[4rem_1fr] sm:gap-8"
            >
              <span className="eyebrow text-ocean-teal">{pack.n}</span>
              <div>
                <h3 className="font-display text-2xl text-ocean-navy">
                  {pack.title}
                </h3>
                <ul className="mt-4 space-y-2 text-text-secondary">
                  {pack.items.map((item) => (
                    <li key={item} className="leading-relaxed">
                      · {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-ecume">
        <SectionHeader
          eyebrow="REPÈRE 02 // NAVIGATIONS"
          title="Nos offres de navigation"
          description="Novice ou déjà initié, bienvenue à bord !"
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <figure>
            <div className="relative aspect-[16/10] overflow-hidden bg-ocean-navy">
              <Image
                src={`${WP}/2026/10/clipboard-11.jpeg`}
                alt="Figaro 3 en navigation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <figcaption className="mt-4">
              <p className="eyebrow mb-2">FIGARO 3 · LA TRINITÉ-SUR-MER</p>
              <h3 className="font-display text-2xl text-ocean-navy">
                Performance : initiation à la régate
              </h3>
            </figcaption>
          </figure>

          <figure>
            <div className="relative aspect-[16/10] overflow-hidden bg-ocean-navy">
              <Image
                src={`${WP}/2026/10/clipboard-4.jpeg`}
                alt="Océanis 31 Carpe Diem"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <figcaption className="mt-4">
              <p className="eyebrow mb-2">OCÉANIS 31 · LORIENT</p>
              <h3 className="font-display text-2xl text-ocean-navy">
                Découverte de la voile — « Carpe Diem »
              </h3>
            </figcaption>
          </figure>
        </div>

        <ul className="rule-list mt-12 max-w-2xl">
          {bullets.map((item) => (
            <li key={item} className="py-5 text-lg text-ocean-navy">
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-text-muted">
          Formules sur devis · Tarifs spéciaux sur demande
        </p>
      </Section>

      <Section className="bg-surface">
        <SectionHeader
          eyebrow="REPÈRE 03 // PUBLICITÉ"
          title="Publicité & sponsoring à bord"
        />
        <div className="rule-list">
          {sponsoring.map((pack) => (
            <div key={pack.title} className="py-8">
              <h3 className="font-display text-xl text-ocean-navy">
                {pack.title}
              </h3>
              <ul className="mt-3 space-y-2 text-text-secondary">
                {pack.items.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-text-secondary">
          Un quart d&apos;un côté de coque est réservé à{" "}
          <a
            href="https://www.orlabay.fr/page/3642589-accueil"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ocean-teal hover:underline"
          >
            ORLABAY
          </a>{" "}
          et ses partenaires. Implantation à valider selon les droits existants
          et les règles de course.
        </p>
      </Section>

      <Section className="bg-ecume">
        <SectionHeader
          eyebrow="REPÈRE 04 // PILOTAGE"
          title="Un partenariat piloté autour de vos objectifs"
        />
        <ol className="rule-list max-w-2xl">
          {pilotage.map((item, i) => (
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
        <p className="mt-8">
          <Link
            href="/corporatif"
            className="font-semibold text-ocean-teal hover:underline"
          >
            Voir aussi les formats corporatifs →
          </Link>
        </p>
        <ContactLine label="Étudions votre formule" />
      </Section>
    </>
  );
}
