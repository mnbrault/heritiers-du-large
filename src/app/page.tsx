import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Block, BlockLink } from "@/components/ui/Block";
import { ContactLine } from "@/components/ui/ContactLine";
import { mailto, WP } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Les Héritiers du large – Conseil et consulting, communication d'entreprise, publicité et sponsoring voile à Lorient",
  description:
    "Sponsoring voile, communication d'entreprise et navigations à Lorient et La Trinité-sur-Mer. Découvrez Les Héritiers du large.",
};

export default function HomePage() {
  return (
    <>
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

      <Section className="bg-white">
        <Block tone="ocean" hover={false} className="mb-16">
          <p className="eyebrow mb-3 text-ocean-accent">
            DONNEZ UN CAP À VOTRE DÉVELOPPEMENT
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-700 sm:text-xl">
            Pour renforcer votre stratégie commerciale :{" "}
            <strong className="font-semibold text-slate-900">
              invitons vos cibles à naviguer.
            </strong>
          </p>
        </Block>

        <SectionHeader
          eyebrow="REPÈRE 01 // LES HÉRITIERS DU LARGE"
          title="Trois activités, un cap commun"
          description="Élite, Académie et Corporatif : un même fil conducteur entre performance sportive et développement d'entreprise."
        />

        <div className="mb-4 flex flex-wrap gap-2">
          {["ÉLITE", "ACADÉMIE", "CORPO"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wide text-blue-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <BlockLink
            href="/elite"
            eyebrow="01"
            title="Élite"
            description="Le circuit Figaro, tremplin des champions du large."
          />
          <BlockLink
            href="/academie"
            eyebrow="02"
            title="Académie"
            description={
              <>
                Détecter et accompagner les <strong>jeunes talents</strong> avec{" "}
                <strong>ORLABAY</strong>.
              </>
            }
          />
          <BlockLink
            href="/corporatif"
            eyebrow="03"
            title="Corporatif"
            description="Créer des liens entre vos équipes, clients et partenaires."
          />
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-slate-50 to-white">
        <SectionHeader
          eyebrow="REPÈRE 02 // CONSEIL & COMMUNICATION"
          title="Conseil & communication d'entreprise par le sport"
          description="À Lorient et sur la côte Atlantique, Bertrand Castelnérac accompagne les entreprises dans leurs projets de communication, de développement commercial et de sponsoring voile."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {[
            "Définir vos publics et vos objectifs",
            "Construire les activations",
            "Faire vivre votre partenariat sportif",
          ].map((item, i) => (
            <Block key={item} tone="default">
              <p className="eyebrow mb-3 text-ocean-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="text-lg font-medium text-slate-900">{item}</p>
            </Block>
          ))}
        </div>

        <ContactLine label="Construisons votre projet" />
      </Section>
    </>
  );
}
