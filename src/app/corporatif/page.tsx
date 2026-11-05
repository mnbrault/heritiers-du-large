import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Block } from "@/components/ui/Block";
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

      <Section className="bg-white">
        <SectionHeader
          eyebrow="REPÈRE 01 // OBJECTIFS"
          title="Quel objectif pour votre entreprise ?"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {objectifs.map((o) => (
            <Block key={o.title}>
              <h3 className="font-display mb-4 text-xl font-semibold">
                {o.title}
              </h3>
              <ul className="space-y-2 text-slate-600">
                {o.items.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </Block>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-slate-50 to-white">
        <SectionHeader
          eyebrow="REPÈRE 02 // FORMATS"
          title="Trois formats pour embarquer"
          description="Formules sur devis · En semaine ou le week-end · Programme adapté au groupe et à la météo."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {formats.map((f) => (
            <Block key={f.title} hover={false} className="overflow-hidden !p-0">
              <div className="relative aspect-[16/10]">
                <Image
                  src={f.image}
                  alt={f.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display mb-3 text-xl font-semibold">
                  {f.title}
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  {f.items.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
                {f.credit ? (
                  <p className="mt-3 text-xs text-slate-400">{f.credit}</p>
                ) : null}
              </div>
            </Block>
          ))}
        </div>
        <p className="mt-8">
          <Link
            href="/offres"
            className="font-semibold text-ocean-accent hover:underline"
          >
            Voir les offres de navigation et d&apos;activation →
          </Link>
        </p>
      </Section>

      <Section className="bg-white">
        <SectionHeader
          eyebrow="REPÈRE 03 // JOURNÉE TYPE"
          title="Une journée construite autour de vos invités"
          description="De l'invitation au retour à terre, chaque temps fort sert votre objectif : créer des liens et faire signer des contrats qui ne l'auraient pas été à distance."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {[
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
          ].map((s) => (
            <Block key={s.n} tone="soft">
              <p className="eyebrow mb-3 text-ocean-accent">{s.n}</p>
              <h3 className="font-display mb-3 text-2xl font-semibold">
                {s.t}
              </h3>
              <p className="text-slate-600 leading-relaxed">{s.d}</p>
            </Block>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="REPÈRE 04 // PRISES DE PAROLE"
              title="La course au large entre dans votre entreprise"
            />
            <ul className="space-y-3 text-slate-600">
              <li>· Conférences et rencontres avec vos collaborateurs</li>
              <li>· Décision, gestion du risque et performance collective</li>
              <li>· Coulisses et récits pour vos temps forts de communication</li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
            <Image
              src={`${WP}/2026/10/clipboard-7.jpeg`}
              alt="Bertrand Castelnérac en conférence"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeader
          eyebrow="REPÈRE 05 // PARTENAIRE"
          title="Pour les événements en flotte : Yellow Impact Sailing"
          description="Prestataire de régates d'entreprise et de séminaires voile en Bretagne, notamment depuis Lorient et La Trinité-sur-Mer."
        />
        <Block tone="ocean" hover={false}>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Pour un projet multibateaux, le format, l&apos;encadrement et les
            disponibilités sont à étudier avec le prestataire.
          </p>
          <a
            href="https://yellow-impactsailing.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ocean-accent hover:underline"
          >
            yellow-impactsailing.com →
          </a>
        </Block>
      </Section>

      <Section className="bg-gradient-to-b from-slate-50 to-white">
        <SectionHeader
          eyebrow="FAQ // PRÉPARONS VOTRE NAVIGATION"
          title="Questions fréquentes"
        />
        <div className="space-y-4">
          {faq.map((item) => (
            <Block key={item.q} hover={false}>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {item.q}
              </h3>
              <p className="text-slate-600 leading-relaxed">{item.a}</p>
            </Block>
          ))}
        </div>
        <ContactLine label="Construisons votre projet" />
      </Section>
    </>
  );
}
