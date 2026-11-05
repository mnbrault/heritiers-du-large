import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ContactLine } from "@/components/ui/ContactLine";
import { mailto, WP } from "@/lib/site";

export const metadata: Metadata = {
  title: "Élite",
  description:
    "Circuit Figaro, Solitaire et parcours de champions : découvrez le programme Élite des Héritiers du large et ses ambitions de course au large.",
};

const circuit = [
  {
    title: "Classe Figaro Bénéteau",
    text: "Au cœur d'un circuit de référence.",
    href: "https://www.classefigarobeneteau.fr/fr",
  },
  {
    title: "La Solitaire du Figaro",
    text: "Se mesurer en solitaire.",
    href: "https://www.lasolitaire.com/",
  },
  {
    title: "Double & préparation",
    text: "Courses en double, entraînements et immersion dans la préparation.",
  },
];

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

      <Section className="bg-surface">
        <SectionHeader
          eyebrow="REPÈRE 01 // LE CIRCUIT"
          title="Le circuit, la préparation, la course"
        />
        <div className="rule-list">
          {circuit.map((item) => (
            <div key={item.title} className="py-7">
              <h3 className="font-display text-xl text-ocean-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-text-secondary">{item.text}</p>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-ocean-teal hover:underline"
                >
                  Découvrir →
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-ocean-navy text-white">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow mb-4 !text-white/55">
            CAP // OBJECTIFS SPORTIFS — 2027
          </p>
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            Un programme à faire grandir ensemble
          </h2>
        </div>
        <ol className="rule-list border-white/15 max-w-3xl [&_*]:border-white/15">
          {objectifs.map((o, i) => (
            <li
              key={o.title}
              className="grid grid-cols-[3.5rem_1fr] gap-4 py-7 sm:gap-6"
            >
              <span className="eyebrow pt-1 !text-ocean-teal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl">{o.title}</h3>
                <p className="mt-2 text-white/70 leading-relaxed">{o.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-2xl text-sm text-white/55">
          Horizons à terme :{" "}
          <strong className="text-white">Route du Rhum 2030</strong>, puis{" "}
          <strong className="text-white">Vendée Globe 2032</strong>. Programme
          proposé, à construire avec les partenaires.
        </p>
      </Section>

      <Section className="bg-ecume">
        <SectionHeader
          eyebrow="LA FABRIQUE DES CHAMPIONS"
          title="Le Figaro révèle les grands noms du large"
          description="Avant de gagner un tour du monde, ils ont couru la Solitaire du Figaro."
        />
        <div className="overflow-hidden border border-border bg-surface">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-ecume">
              <tr>
                <th className="eyebrow px-5 py-4 !text-ocean-teal">Marin</th>
                <th className="eyebrow px-5 py-4 !text-ocean-teal">Solitaire</th>
                <th className="eyebrow hidden px-5 py-4 !text-ocean-teal sm:table-cell">
                  Vendée Globe
                </th>
              </tr>
            </thead>
            <tbody>
              {champions.map((c) => (
                <tr
                  key={c.name}
                  className="border-b border-border last:border-0"
                >
                  <td className="px-5 py-4 font-medium text-ocean-navy">
                    {c.name}
                  </td>
                  <td className="px-5 py-4 text-text-secondary">
                    {c.solitaire}
                  </td>
                  <td className="hidden px-5 py-4 text-text-secondary sm:table-cell">
                    {c.vendee}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-text-muted">
          Soutenir un talent aujourd&apos;hui. Accompagner une histoire qui
          grandit.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <figure>
            <div className="relative aspect-[16/10] overflow-hidden bg-ocean-navy">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Macif_sant%C3%A9_pr%C3%A9voyance_Imoca_%C3%A0_Lorient_-_The_Transat_CIC_2024_01.jpg"
                alt="IMOCA Macif santé prévoyance à Lorient"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <figcaption className="photo-credit mt-3">
              IMOCA · Le tour du monde — crédit Jug81 (CC BY-SA 4.0)
            </figcaption>
          </figure>
          <figure>
            <div className="relative aspect-[16/10] overflow-hidden bg-ocean-navy">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/e/e2/TheTransat24_Class40_01.jpg"
                alt="Flotte Class40 à Lorient avant The Transat 2024"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <figcaption className="photo-credit mt-3">
              Class40 · Les grandes traversées — crédit MFonzatti (CC BY-SA 4.0)
            </figcaption>
          </figure>
        </div>
        <p className="mt-4 text-xs text-text-muted">
          Parcours historiques cités à titre d&apos;illustration. Ces marins ne
          sont pas présentés comme partenaires du projet.
        </p>
      </Section>

      <Section className="bg-surface">
        <SectionHeader
          eyebrow="REPÈRE 03 // GRANDES ROUTES"
          title="Les grandes routes du large"
        />
        <div className="rule-list">
          <div className="py-8">
            <h3 className="font-display text-2xl text-ocean-navy">
              Route du Rhum
            </h3>
            <p className="mt-3 max-w-xl text-text-secondary leading-relaxed">
              La grande traversée en solitaire : un horizon pour faire grandir
              un projet sportif.
            </p>
            <a
              href="https://www.routedurhum.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-ocean-teal hover:underline"
            >
              routedurhum.com →
            </a>
          </div>
          <div className="py-8">
            <h3 className="font-display text-2xl text-ocean-navy">
              Vendée Globe
            </h3>
            <p className="mt-3 max-w-xl text-text-secondary leading-relaxed">
              Le tour du monde comme horizon de la course au large et de ses
              parcours de champions.
            </p>
            <a
              href="https://www.vendeeglobe.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-ocean-teal hover:underline"
            >
              vendeeglobe.org →
            </a>
          </div>
        </div>
        <ContactLine label="Soutenir le programme Élite" />
      </Section>
    </>
  );
}
