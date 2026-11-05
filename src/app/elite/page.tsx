import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Block } from "@/components/ui/Block";
import { ContactLine } from "@/components/ui/ContactLine";
import { mailto, WP } from "@/lib/site";

export const metadata: Metadata = {
  title: "Élite",
  description:
    "Circuit Figaro, Solitaire et parcours de champions : découvrez le programme Élite des Héritiers du large et ses ambitions de course au large.",
};

const objectifs = [
  {
    title: "Solitaire du Figaro",
    text: "Viser la victoire en bizuth sur la Solitaire du Figaro.",
  },
  {
    title: "Championnat de France",
    text: "Viser le podium du Championnat de France Élite de course au large en solitaire.",
  },
  {
    title: "Tour Voile & transmission",
    text: "Préparer un programme en équipage avec les jeunes talents et les publics entreprise.",
  },
];

const champions = [
  {
    name: "Michel Desjoyeaux",
    solitaire: "Vainqueur de la Solitaire",
    vendee: "Double vainqueur du Vendée Globe",
  },
  {
    name: "François Gabart",
    solitaire: "2e de la Solitaire en 2010",
    vendee: "Vainqueur 2012–2013",
  },
  {
    name: "Armel Le Cléac'h",
    solitaire: "Vainqueur de la Solitaire",
    vendee: "Vainqueur 2016–2017",
  },
];

export default function ElitePage() {
  return (
    <>
      <PageHero
        eyebrow="JOURNAL DE BORD // COURSE AU LARGE"
        title="Élite · Le circuit Figaro"
        description="Une école de performance et le tremplin des grands champions du large."
        cta={{
          href: mailto("Soutenir le programme Élite"),
          label: "Soutenir le programme Élite ↗",
        }}
        image={{
          src: `${WP}/2026/11/clipboard.png`,
          alt: "Figaro Bénéteau 3 en navigation",
        }}
      />

      <Section className="bg-white">
        <SectionHeader
          eyebrow="REPÈRE 01 // LE CIRCUIT"
          title="Le circuit, la préparation, la course"
        />
        <div className="grid gap-5 md:grid-cols-3">
          <Block>
            <h3 className="font-display mb-3 text-xl font-semibold">
              Classe Figaro Bénéteau
            </h3>
            <p className="mb-4 text-slate-600">
              Au cœur d&apos;un circuit de référence.
            </p>
            <a
              href="https://www.classefigarobeneteau.fr/fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-ocean-accent hover:underline"
            >
              Découvrir →
            </a>
          </Block>
          <Block>
            <h3 className="font-display mb-3 text-xl font-semibold">
              La Solitaire du Figaro
            </h3>
            <p className="mb-4 text-slate-600">Se mesurer en solitaire.</p>
            <a
              href="https://www.lasolitaire.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-ocean-accent hover:underline"
            >
              Découvrir →
            </a>
          </Block>
          <Block>
            <h3 className="font-display mb-3 text-xl font-semibold">
              Double & préparation
            </h3>
            <p className="text-slate-600">
              Courses en double, entraînements et immersion dans la préparation.
            </p>
          </Block>
        </div>
      </Section>

      <Section className="bg-ocean-navy text-white">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow mb-4 text-frozen-water/70">
            CAP // OBJECTIFS SPORTIFS — 2027
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Un programme à faire grandir ensemble
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {objectifs.map((o) => (
            <Block key={o.title} tone="dark" className="border-white/15">
              <h3 className="font-display mb-3 text-xl font-semibold">
                {o.title}
              </h3>
              <p className="text-white/75 leading-relaxed">{o.text}</p>
            </Block>
          ))}
        </div>
        <p className="mt-8 text-sm text-white/60">
          Horizons à terme : <strong className="text-white">Route du Rhum 2030</strong>,
          puis <strong className="text-white">Vendée Globe 2032</strong>.
          Programme proposé, à construire avec les partenaires.
        </p>
      </Section>

      <Section className="bg-gradient-to-b from-slate-50 to-white">
        <SectionHeader
          eyebrow="LA FABRIQUE DES CHAMPIONS"
          title="Le Figaro révèle les grands noms du large"
          description="Avant de gagner un tour du monde, ils ont couru la Solitaire du Figaro."
        />
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-ocean-accent">
              <tr>
                <th className="px-5 py-4 font-semibold">Marin</th>
                <th className="px-5 py-4 font-semibold">Solitaire</th>
                <th className="hidden px-5 py-4 font-semibold sm:table-cell">
                  Vendée Globe
                </th>
              </tr>
            </thead>
            <tbody>
              {champions.map((c) => (
                <tr key={c.name} className="border-b border-slate-100 last:border-0">
                  <td className="px-5 py-4 font-medium text-slate-900">
                    {c.name}
                  </td>
                  <td className="px-5 py-4 text-slate-600">{c.solitaire}</td>
                  <td className="hidden px-5 py-4 text-slate-600 sm:table-cell">
                    {c.vendee}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Soutenir un talent aujourd&apos;hui. Accompagner une histoire qui
          grandit.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <figure>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Macif_sant%C3%A9_pr%C3%A9voyance_Imoca_%C3%A0_Lorient_-_The_Transat_CIC_2024_01.jpg"
                alt="IMOCA Macif santé prévoyance à Lorient"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <figcaption className="mt-3 text-xs text-slate-500">
              IMOCA · Le tour du monde — crédit Jug81 (CC BY-SA 4.0)
            </figcaption>
          </figure>
          <figure>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/e/e2/TheTransat24_Class40_01.jpg"
                alt="Flotte Class40 à Lorient avant The Transat 2024"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <figcaption className="mt-3 text-xs text-slate-500">
              Class40 · Les grandes traversées — crédit MFonzatti (CC BY-SA 4.0)
            </figcaption>
          </figure>
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Parcours historiques cités à titre d&apos;illustration. Ces marins ne
          sont pas présentés comme partenaires du projet.
        </p>
      </Section>

      <Section className="bg-white">
        <SectionHeader
          eyebrow="REPÈRE 03 // GRANDES ROUTES"
          title="Les grandes routes du large"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Block>
            <h3 className="font-display mb-3 text-2xl font-semibold">
              Route du Rhum
            </h3>
            <p className="mb-4 text-slate-600 leading-relaxed">
              La grande traversée en solitaire : un horizon pour faire grandir
              un projet sportif.
            </p>
            <a
              href="https://www.routedurhum.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-ocean-accent hover:underline"
            >
              routedurhum.com →
            </a>
          </Block>
          <Block>
            <h3 className="font-display mb-3 text-2xl font-semibold">
              Vendée Globe
            </h3>
            <p className="mb-4 text-slate-600 leading-relaxed">
              Le tour du monde comme horizon de la course au large et de ses
              parcours de champions.
            </p>
            <a
              href="https://www.vendeeglobe.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-ocean-accent hover:underline"
            >
              vendeeglobe.org →
            </a>
          </Block>
        </div>
        <ContactLine label="Soutenir le programme Élite" />
      </Section>
    </>
  );
}
