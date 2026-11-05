import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Block } from "@/components/ui/Block";
import { ContactLine } from "@/components/ui/ContactLine";
import { mailto, WP } from "@/lib/site";

export const metadata: Metadata = {
  title: "Académie",
  description:
    "ORLABAY, détection féminine Transat Paprec et jeunes talents : une académie pour accompagner les équipiers de la course au large.",
};

export default function AcademiePage() {
  return (
    <>
      <PageHero
        eyebrow="JOURNAL DE BORD // COURSE AU LARGE"
        title="Académie · Faire grandir les talents"
        description={
          <>
            Avec <strong>ORLABAY</strong>, un vivier de jeunes équipiers
            brillants.
          </>
        }
        cta={{
          href: mailto("Accompagner les talents"),
          label: "Accompagner les talents ↗",
        }}
        image={{
          src: `${WP}/2026/10/clipboard-41.jpeg`,
          alt: "La flotte Figaro et ORLABAY en mer",
        }}
      />

      <Section className="bg-white">
        <SectionHeader
          eyebrow="REPÈRE 01 // DÉTECTION → COURSE"
          title="De la détection à la course"
        />

        <div className="mb-10 overflow-hidden rounded-3xl border border-slate-200">
          <div className="relative aspect-[21/9] min-h-[220px]">
            <Image
              src={`${WP}/2026/10/clipboard-41.jpeg`}
              alt="ORLABAY // Le collectif en mer"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ocean-navy/80 to-transparent p-6">
              <p className="eyebrow text-white/90">
                ORLABAY // LE COLLECTIF EN MER
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Block>
            <h3 className="font-display mb-4 text-2xl font-semibold">
              Le collectif ORLABAY
            </h3>
            <ul className="mb-6 space-y-2 text-slate-600">
              <li>· Entraînements et régates en équipage</li>
              <li>· Transmission de l&apos;expérience</li>
              <li>· Progression à tous les postes</li>
            </ul>
            <a
              href="https://www.orlabay.fr/page/3642589-accueil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-ocean-accent hover:underline"
            >
              Découvrir ORLABAY →
            </a>
          </Block>
          <Block tone="ocean">
            <h3 className="font-display mb-4 text-2xl font-semibold">
              Un vivier de talents
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>· Repérer les qualités en mer</li>
              <li>· Donner une place aux jeunes équipiers</li>
              <li>· Construire un parcours vers la compétition</li>
            </ul>
          </Block>
        </div>

        <p className="mt-8 text-slate-600">
          Le{" "}
          <a
            href="https://www.tourvoile.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ocean-accent hover:underline"
          >
            Tour Voile
          </a>{" "}
          : une aventure d&apos;équipage pour progresser ensemble.
        </p>
      </Section>

      <Section className="bg-gradient-to-b from-slate-50 to-white">
        <SectionHeader
          eyebrow="REPÈRE 02 // CHALLENGES"
          title="Deux challenges de détection"
          description="Calendrier, critères et financement à construire avec les partenaires."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Block>
            <p className="eyebrow mb-3 text-ocean-accent">DÉTECTION FÉMININE</p>
            <h3 className="font-display mb-4 text-2xl font-semibold">
              Transat Paprec
            </h3>
            <ul className="mb-6 space-y-2 text-slate-600">
              <li>· Appel à candidatures</li>
              <li>· Journées de sélection en mer</li>
              <li>· Préparation d&apos;un duo mixte sur Figaro</li>
            </ul>
            <a
              href="https://www.transatpaprec.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-ocean-accent hover:underline"
            >
              transatpaprec.com →
            </a>
          </Block>
          <Block>
            <p className="eyebrow mb-3 text-ocean-accent">DÉTECTION JEUNES</p>
            <h3 className="font-display mb-4 text-2xl font-semibold">
              Entreprise
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>· Stages avec ORLABAY</li>
              <li>· Régates et évaluation en équipage</li>
              <li>· Accompagnement soutenu par une entreprise</li>
            </ul>
          </Block>
        </div>
        <ContactLine label="Accompagner les talents" />
      </Section>
    </>
  );
}
