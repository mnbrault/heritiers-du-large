import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ContactLine } from "@/components/ui/ContactLine";
import { mailto, WP } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bertrand Castelnérac",
  description:
    "Bertrand Castelnérac, skipper professionnel et entrepreneur : 25 ans de voile, du Mini aux foils, et des partenariats pour les entreprises.",
};

const stats = [
  { value: "4", label: "titres de Champion de France Élite en équipage" },
  { value: "2", label: "titres de Champion d'Europe Maxi Yacht IRC" },
  { value: "15", label: "participations au Tour de France à la Voile" },
  { value: "8", label: "transatlantiques en course" },
];

const ventures = [
  {
    name: "La Base course au large de Lorient",
    url: "https://www.lorientlabase-courseaularge.fr/fr",
    note: "anciennement AOS",
  },
  {
    name: "SEAir Platforms",
    url: "https://seair-platforms.com/",
    note: "bureau d'études et foils",
  },
  {
    name: "Littoral Énergies Partagées",
    url: "https://littoralenergies.com/",
    note: "énergies portuaires",
  },
];

function Gallery({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  return (
    <div
      className={`grid gap-4 ${images.length > 2 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}
    >
      {images.map((img) => (
        <div
          key={img.src}
          className="relative aspect-[4/3] overflow-hidden bg-ocean-navy"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}

export default function BertrandPage() {
  return (
    <>
      <section className="border-b border-border bg-surface lg:grid lg:min-h-screen lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 pb-14 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:px-12 xl:px-16">
          <div className="max-w-xl">
            <h1 className="font-display text-4xl tracking-tight text-ocean-navy sm:text-5xl lg:text-6xl">
              Bertrand Castelnérac
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-text-secondary sm:text-xl">
              Skipper professionnel, entrepreneur et conseil auprès des
              entreprises.
            </p>
            <div className="mt-8">
              <Button href={mailto("Échangeons sur votre projet")}>
                Échangeons sur votre projet ↗
              </Button>
            </div>
          </div>

          <div className="mt-14 max-w-xl border-t border-border pt-10 sm:mt-16">
            <p className="eyebrow mb-4">REPÈRE 01 // 25 ANS</p>
            <h2 className="font-display text-3xl tracking-tight text-ocean-navy sm:text-4xl">
              25 ans de voile professionnelle sur tous supports
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              Monocoque, multicoque, foils · Équipage, solitaire, double.
            </p>
          </div>

          <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            {stats.map((s) => (
              <div
                key={s.label}
                className="border border-border bg-ecume p-5 sm:p-6"
              >
                <p className="font-display text-4xl text-ocean-teal sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[70vh] bg-ocean-navy lg:sticky lg:top-0 lg:min-h-screen">
          <Image
            src={`${WP}/2026/10/clipboard-10.png`}
            alt="Bertrand Castelnérac à bord du Mini 747"
            fill
            priority
            className="object-cover object-[center_18%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      <Section className="bg-ecume">
        <SectionHeader
          eyebrow="REPÈRE 02 // FOILS"
          title="Foils · Innovation & performance"
          description={
            <>
              Entrepreneur et ancien cofondateur de SEAir, devenue{" "}
              <a
                href="https://seair-platforms.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ocean-teal hover:underline"
              >
                SEAir Platforms
              </a>
              .
            </>
          }
        />
        <Gallery
          images={[
            {
              src: `${WP}/2026/10/clipboard-17.jpeg`,
              alt: "Moth à foils",
            },
            {
              src: `${WP}/2026/10/clipboard-18.jpeg`,
              alt: "Moth à foils",
            },
            {
              src: `${WP}/2026/10/clipboard-23.jpeg`,
              alt: "Catamaran à foils GDF Suez",
            },
          ]}
        />
      </Section>

      <Section className="bg-surface">
        <SectionHeader
          eyebrow="REPÈRE 03 // MINI"
          title="Mini · Deux Mini Transat et le premier Mini volant"
          description="Deux participations à la Mini Transat et lancement du premier Mini volant."
        />
        <Gallery
          images={[
            {
              src: `${WP}/2026/10/clipboard-25.jpeg`,
              alt: "Mini 747",
            },
            {
              src: `${WP}/2026/10/clipboard-28.jpeg`,
              alt: "Mini 747",
            },
          ]}
        />
      </Section>

      <Section className="bg-ecume">
        <SectionHeader
          eyebrow="REPÈRE 03 B // ÉQUIPAGE"
          title="25 ans sur les circuits de haut niveau"
        />
        <Gallery
          images={[
            {
              src: `${WP}/2026/10/clipboard-34.jpeg`,
              alt: "Manœuvres en équipage",
            },
            {
              src: `${WP}/2026/10/clipboard-37.jpeg`,
              alt: "Manœuvres en équipage",
            },
          ]}
        />
      </Section>

      <Section className="bg-surface">
        <SectionHeader
          eyebrow="REPÈRE 04 // CIRCUITS"
          title="Tour Voile & IRC"
        />
        <div className="mb-10">
          <div className="mb-4 flex items-baseline justify-between gap-4">
            <h3 className="font-display text-2xl text-ocean-navy">Tour Voile</h3>
            <a
              href="https://www.tourvoile.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-ocean-teal hover:underline"
            >
              tourvoile.fr →
            </a>
          </div>
          <Gallery
            images={[
              {
                src: `${WP}/2026/10/clipboard-16.jpeg`,
                alt: "Tour Voile",
              },
              {
                src: `${WP}/2026/10/clipboard-19.jpeg`,
                alt: "Tour Voile",
              },
              {
                src: `${WP}/2026/10/clipboard-24.jpeg`,
                alt: "Tour Voile",
              },
            ]}
          />
        </div>
        <div>
          <h3 className="font-display mb-4 text-2xl text-ocean-navy">IRC</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              `${WP}/2026/10/clipboard-26.jpeg`,
              `${WP}/2026/10/clipboard-35.jpeg`,
              `${WP}/2026/10/clipboard-2.png`,
              `${WP}/2026/10/clipboard-3.png`,
            ].map((src, i) => (
              <div
                key={src}
                className="relative aspect-[4/3] overflow-hidden bg-ocean-navy"
              >
                <Image
                  src={src}
                  alt={`IRC / course ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-ecume">
        <SectionHeader
          eyebrow="REPÈRE 05 // ENTREPRENEUR"
          title="Entrepreneur & consultant"
          description="À la croisée du sport, de l'innovation et de l'entreprise : construire des projets de partenariat et de communication concrets."
        />
        <div className="rule-list">
          {ventures.map((v) => (
            <div key={v.name} className="py-7">
              <h3 className="font-display text-xl text-ocean-navy">{v.name}</h3>
              <p className="mt-2 text-sm text-text-muted">{v.note}</p>
              <a
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-ocean-teal hover:underline"
              >
                En savoir plus →
              </a>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeader
          eyebrow="REPÈRE 06 // TRANSMISSION"
          title="Rencontres & transmission"
          description="Crédit portrait : Vincent Curutchet"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              file: "clipboard-8.jpeg",
              alt: "Bertrand Castelnérac en entretien",
              position: "object-[30%_18%]",
            },
            {
              file: "clipboard-13.jpeg",
              alt: "Bertrand Castelnérac interviewé",
              position: "object-[32%_28%]",
            },
            {
              file: "clipboard-7.jpeg",
              alt: "Bertrand Castelnérac en conférence",
              position: "object-[52%_32%]",
            },
            {
              file: "clipboard-40.jpeg",
              alt: "Bertrand Castelnérac à bord",
              position: "object-[42%_12%]",
            },
            {
              file: "clipboard-12.jpeg",
              alt: "Bertrand Castelnérac sur un voilier",
              position: "object-[48%_18%]",
            },
            {
              file: "clipboard-7.png",
              alt: "Portrait de Bertrand Castelnérac en mer",
              position: "object-[22%_22%]",
            },
          ].map((photo) => (
            <div
              key={photo.file}
              className="relative aspect-[3/4] overflow-hidden bg-ocean-navy"
            >
              <Image
                src={`${WP}/2026/10/${photo.file}`}
                alt={photo.alt}
                fill
                className={`object-cover ${photo.position}`}
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-ecume">
        <SectionHeader eyebrow="REPÈRE 07 // PRESSE" title="À la une" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["clipboard-30", "clipboard-31", "clipboard-32", "clipboard-33"].map(
            (file) => (
              <div
                key={file}
                className="relative aspect-[3/4] overflow-hidden bg-surface"
              >
                <Image
                  src={`${WP}/2026/10/${file}.jpeg`}
                  alt="Coupure de presse"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ),
          )}
        </div>
        <ContactLine label="Échangeons sur votre projet" />
      </Section>
    </>
  );
}
