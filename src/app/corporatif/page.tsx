import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ContactLine } from "@/components/ui/ContactLine";
import { mailto, WP } from "@/lib/site";

export const metadata: Metadata = {
  title: "Corporatif",
  description:
    "Régates, navigations et séminaires d'entreprise à Lorient et La Trinité-sur-Mer : cohésion, relations clients et communication sur mesure.",
};

const objectifs = [
  {
    title: "Cohésion d'équipe",
    items: [
      "Répartir les rôles et coopérer",
      "Partager les manœuvres",
      "Débriefer l'expérience collective",
    ],
  },
  {
    title: "Relations clients",
    items: [
      "Inviter vos cibles commerciales",
      "Créer un temps d'échange privilégié",
      "Développer vos relations professionnelles",
    ],
  },
  {
    title: "Communication",
    items: [
      "Faire vivre votre partenariat sportif",
      "Rencontres et prises de parole",
      "Images, récits et contenus à partager",
    ],
  },
];

const formats = [
  {
    title: "Découverte à la voile",
    image: `${WP}/2026/10/clipboard-4.jpeg`,
    alt: "Océanis 31",
    items: [
      "Océanis 31 · départ de Lorient",
      "Une expérience conviviale pour vos invités",
      "Novices et initiés bienvenus",
    ],
  },
  {
    title: "Initiation à la régate",
    image: `${WP}/2026/10/clipboard-11.jpeg`,
    alt: "Figaro 3",
    items: [
      "Figaro 3 · La Trinité-sur-Mer",
      "Découvrir les réglages et les manœuvres",
      "Participer aux décisions à bord",
    ],
  },
  {
    title: "Challenge en flotte",
    image: `${WP}/2026/10/clipboard-4.png`,
    alt: "Régate en flotte",
    credit: "Tre Golfi Sailing Week | Studio Borlenghi",
    items: [
      "Un événement pour plusieurs équipages",
      "Un format à construire avec un prestataire",
      "Échanges à terre et expérience sur l'eau",
    ],
  },
];

const journee = [
  {
    n: "01",
    t: "Préparer",
    d: "Vos publics et vos objectifs · Le format et le port de départ · Le calendrier et les modalités",
  },
  {
    n: "02",
    t: "Embarquer",
    d: "Accueil et présentation du bateau · Briefing sécurité et répartition des rôles · Navigation adaptée",
  },
  {
    n: "03",
    t: "Prolonger",
    d: "Débriefing et échanges · Rencontre avec le skipper · Contenus et suivi du partenariat",
  },
];

const faq = [
  {
    q: "Faut-il déjà savoir naviguer ?",
    a: "Non : nous choisissons un programme adapté à votre expérience et à celle de vos invités.",
  },
  {
    q: "Quel format choisir ?",
    a: "Une découverte conviviale, une initiation à la régate ou un événement en flotte : partons de vos objectifs.",
  },
  {
    q: "Comment obtenir une proposition ?",
    a: "Précisez le nombre de personnes, la période, le port souhaité et l'objectif de votre événement.",
  },
];

export default function CorporatifPage() {
  return (
    <>
      <PageHero
        eyebrow="LORIENT // LA TRINITÉ-SUR-MER"
        title="Corporatif · Faites équipe en mer"
        description="Navigations, régates d'entreprise et relations publiques : un programme adapté à vos équipes, à vos invités et à vos objectifs."
        cta={{
          href: mailto("Construisons votre projet"),
          label: "Construisons votre projet ↗",
        }}
      />

      <Section className="bg-surface">
        <SectionHeader
          eyebrow="REPÈRE 01 // OBJECTIFS"
          title="Quel objectif pour votre entreprise ?"
        />
        <div className="rule-list">
          {objectifs.map((o) => (
            <div key={o.title} className="py-8">
              <h3 className="font-display text-xl text-ocean-navy">{o.title}</h3>
              <ul className="mt-3 space-y-2 text-text-secondary">
                {o.items.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-ecume">
        <SectionHeader
          eyebrow="REPÈRE 02 // FORMATS"
          title="Trois formats pour embarquer"
          description="Formules sur devis · En semaine ou le week-end · Programme adapté au groupe et à la météo."
        />
        <div className="grid gap-10 lg:grid-cols-3">
          {formats.map((f) => (
            <figure key={f.title}>
              <div className="relative aspect-[16/10] overflow-hidden bg-ocean-navy">
                <Image
                  src={f.image}
                  alt={f.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <figcaption className="mt-4">
                <h3 className="font-display text-xl text-ocean-navy">
                  {f.title}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                  {f.items.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
                {f.credit ? (
                  <p className="photo-credit mt-3">{f.credit}</p>
                ) : null}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-10">
          <Link
            href="/offres"
            className="font-semibold text-ocean-teal hover:underline"
          >
            Voir les offres de navigation et d&apos;activation →
          </Link>
        </p>
      </Section>

      <Section className="bg-surface">
        <SectionHeader
          eyebrow="REPÈRE 03 // JOURNÉE TYPE"
          title="Une journée construite autour de vos invités"
          description="De l'invitation au retour à terre, chaque temps fort sert votre objectif : créer des liens et faire signer des contrats qui ne l'auraient pas été à distance."
        />
        <ol className="rule-list max-w-3xl">
          {journee.map((s) => (
            <li
              key={s.n}
              className="grid grid-cols-[3.5rem_1fr] gap-4 py-7 sm:gap-6"
            >
              <span className="eyebrow pt-1 text-ocean-teal">{s.n}</span>
              <div>
                <h3 className="font-display text-2xl text-ocean-navy">{s.t}</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  {s.d}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="bg-ecume">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="REPÈRE 04 // PRISES DE PAROLE"
              title="La course au large entre dans votre entreprise"
            />
            <ul className="space-y-3 text-text-secondary">
              <li>· Conférences et rencontres avec vos collaborateurs</li>
              <li>· Décision, gestion du risque et performance collective</li>
              <li>· Coulisses et récits pour vos temps forts de communication</li>
            </ul>
          </div>
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden bg-ocean-navy">
              <Image
                src={`${WP}/2026/10/clipboard-7.jpeg`}
                alt="Bertrand Castelnérac en conférence"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </figure>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeader
          eyebrow="REPÈRE 05 // PARTENAIRE"
          title="Pour les événements en flotte : Yellow Impact Sailing"
          description="Prestataire de régates d'entreprise et de séminaires voile en Bretagne, notamment depuis Lorient et La Trinité-sur-Mer."
        />
        <p className="max-w-2xl text-text-secondary leading-relaxed">
          Pour un projet multibateaux, le format, l&apos;encadrement et les
          disponibilités sont à étudier avec le prestataire.
        </p>
        <a
          href="https://yellow-impactsailing.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block font-semibold text-ocean-teal hover:underline"
        >
          yellow-impactsailing.com →
        </a>
      </Section>

      <Section className="bg-ecume">
        <SectionHeader
          eyebrow="FAQ // PRÉPARONS VOTRE NAVIGATION"
          title="Questions fréquentes"
        />
        <div className="rule-list max-w-3xl">
          {faq.map((item) => (
            <div key={item.q} className="py-7">
              <h3 className="text-lg font-semibold text-ocean-navy">
                {item.q}
              </h3>
              <p className="mt-2 text-text-secondary leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
        <ContactLine label="Construisons votre projet" />
      </Section>
    </>
  );
}
