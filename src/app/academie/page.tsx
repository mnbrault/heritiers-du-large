import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
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

      <Section className="bg-surface">
        <SectionHeader
          eyebrow="REPÈRE 01 // DÉTECTION → COURSE"
          title="De la détection à la course"
        />

        <figure className="mb-12">
          <div className="relative aspect-[21/9] min-h-[200px] overflow-hidden bg-ocean-navy">
            <Image
              src={`${WP}/2026/10/clipboard-41.jpeg`}
              alt="ORLABAY // Le collectif en mer"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <figcaption className="photo-credit mt-3">
            ORLABAY // LE COLLECTIF EN MER
          </figcaption>
        </figure>

        <div className="rule-list">
          <div className="py-8">
            <h3 className="font-display text-2xl text-ocean-navy">
              Le collectif ORLABAY
            </h3>
            <ul className="mt-4 space-y-2 text-text-secondary">
              <li>· Entraînements et régates en équipage</li>
              <li>· Transmission de l&apos;expérience</li>
              <li>· Progression à tous les postes</li>
            </ul>
            <a
              href="https://www.orlabay.fr/page/3642589-accueil"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-ocean-teal hover:underline"
            >
              Découvrir ORLABAY →
            </a>
          </div>
          <div className="py-8">
            <h3 className="font-display text-2xl text-ocean-navy">
              Un vivier de talents
            </h3>
            <ul className="mt-4 space-y-2 text-text-secondary">
              <li>· Repérer les qualités en mer</li>
              <li>· Donner une place aux jeunes équipiers</li>
              <li>· Construire un parcours vers la compétition</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-text-secondary">
          Le{" "}
          <a
            href="https://www.tourvoile.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ocean-teal hover:underline"
          >
            Tour Voile
          </a>{" "}
          : une aventure d&apos;équipage pour progresser ensemble.
        </p>
      </Section>

      <Section className="bg-ecume">
        <SectionHeader
          eyebrow="REPÈRE 02 // CHALLENGES"
          title="Deux challenges de détection"
          description="Calendrier, critères et financement à construire avec les partenaires."
        />
        <div className="rule-list">
          <div className="py-8">
            <p className="eyebrow mb-3 text-ocean-teal">DÉTECTION FÉMININE</p>
            <h3 className="font-display text-2xl text-ocean-navy">
              Transat Paprec
            </h3>
            <ul className="mt-4 space-y-2 text-text-secondary">
              <li>· Appel à candidatures</li>
              <li>· Journées de sélection en mer</li>
              <li>· Préparation d&apos;un duo mixte sur Figaro</li>
            </ul>
            <a
              href="https://www.transatpaprec.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-ocean-teal hover:underline"
            >
              transatpaprec.com →
            </a>
          </div>
          <div className="py-8">
            <p className="eyebrow mb-3 text-ocean-teal">DÉTECTION JEUNES</p>
            <h3 className="font-display text-2xl text-ocean-navy">Entreprise</h3>
            <ul className="mt-4 space-y-2 text-text-secondary">
              <li>· Stages avec ORLABAY</li>
              <li>· Régates et évaluation en équipage</li>
              <li>· Accompagnement soutenu par une entreprise</li>
            </ul>
          </div>
        </div>
        <ContactLine label="Accompagner les talents" />
      </Section>
    </>
  );
}
