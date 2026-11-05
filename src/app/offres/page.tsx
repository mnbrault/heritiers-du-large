import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Block } from "@/components/ui/Block";
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

      <Section className="bg-white">
        <SectionHeader
          eyebrow="REPÈRE 01 // PACKS"
          title="Packs communication & activation"
          description="Des packs combinables, construits autour de vos objectifs commerciaux et de communication."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {packs.map((pack) => (
            <Block key={pack.n}>
              <p className="eyebrow mb-3 text-ocean-accent">{pack.n}</p>
              <h3 className="font-display mb-4 text-2xl font-semibold text-slate-900">
                {pack.title}
              </h3>
              <ul className="space-y-2 text-slate-600">
                {pack.items.map((item) => (
                  <li key={item} className="leading-relaxed">
                    · {item}
                  </li>
                ))}
              </ul>
            </Block>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-slate-50 to-white">
        <SectionHeader
          eyebrow="REPÈRE 02 // NAVIGATIONS"
          title="Nos offres de navigation"
          description="Novice ou déjà initié, bienvenue à bord !"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <Block hover={false} className="overflow-hidden !p-0">
            <div className="relative aspect-[16/10]">
              <Image
                src={`${WP}/2026/10/clipboard-11.jpeg`}
                alt="Figaro 3 en navigation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 sm:p-8">
              <p className="eyebrow mb-2 text-ocean-accent">
                FIGARO 3 · LA TRINITÉ-SUR-MER
              </p>
              <h3 className="font-display text-2xl font-semibold text-slate-900">
                Performance : initiation à la régate
              </h3>
            </div>
          </Block>

          <Block hover={false} className="overflow-hidden !p-0">
            <div className="relative aspect-[16/10]">
              <Image
                src={`${WP}/2026/10/clipboard-4.jpeg`}
                alt="Océanis 31 Carpe Diem"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 sm:p-8">
              <p className="eyebrow mb-2 text-ocean-accent">
                OCÉANIS 31 · LORIENT
              </p>
              <h3 className="font-display text-2xl font-semibold text-slate-900">
                Découverte de la voile — « Carpe Diem »
              </h3>
            </div>
          </Block>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            "Navigations pour vos équipes, vos clients et vos invités",
            "Découverte de la voile ou initiation à la régate",
            "En semaine ou le week-end",
          ].map((item) => (
            <Block key={item} tone="soft">
              <p className="text-slate-700">{item}</p>
            </Block>
          ))}
        </div>

        <p className="mt-8 text-sm font-medium text-slate-500">
          Formules sur devis · Tarifs spéciaux sur demande
        </p>
      </Section>

      <Section className="bg-white">
        <SectionHeader
          eyebrow="REPÈRE 03 // PUBLICITÉ"
          title="Publicité & sponsoring à bord"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {sponsoring.map((pack) => (
            <Block key={pack.title} tone="ocean">
              <h3 className="font-display mb-4 text-xl font-semibold text-slate-900">
                {pack.title}
              </h3>
              <ul className="space-y-2 text-slate-600">
                {pack.items.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </Block>
          ))}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-slate-600">
          Un quart d&apos;un côté de coque est réservé à{" "}
          <a
            href="https://www.orlabay.fr/page/3642589-accueil"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ocean-accent hover:underline"
          >
            ORLABAY
          </a>{" "}
          et ses partenaires. Implantation à valider selon les droits existants
          et les règles de course.
        </p>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeader
          eyebrow="REPÈRE 04 // PILOTAGE"
          title="Un partenariat piloté autour de vos objectifs"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            "Cibles commerciales et publics à mobiliser",
            "Calendrier de contenus et d'événements",
            "Pour moins de 200 K€, un pack complet marketing / navigations / publicité",
          ].map((item, i) => (
            <Block key={item}>
              <p className="eyebrow mb-3 text-ocean-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="text-slate-800 leading-relaxed">{item}</p>
            </Block>
          ))}
        </div>
        <p className="mt-8">
          <Link
            href="/corporatif"
            className="font-semibold text-ocean-accent hover:underline"
          >
            Voir aussi les formats corporatifs →
          </Link>
        </p>
        <ContactLine label="Étudions votre formule" />
      </Section>
    </>
  );
}
