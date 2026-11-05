import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Block } from "@/components/ui/Block";
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
          className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200"
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
      <PageHero
        title="Bertrand Castelnérac"
        description="Skipper professionnel, entrepreneur et conseil auprès des entreprises."
        cta={{
          href: mailto("Échangeons sur votre projet"),
          label: "Échangeons sur votre projet ↗",
        }}
        image={{
          src: `${WP}/2026/10/clipboard-10.png`,
          alt: "Bertrand Castelnérac à bord du Mini 747",
        }}
      />

      <Section className="bg-white">
        <SectionHeader
          eyebrow="REPÈRE 01 // 25 ANS"
          title="25 ans de voile professionnelle sur tous supports"
          description="Monocoque, multicoque, foils · Équipage, solitaire, double."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Block key={s.label} tone="ocean">
              <p className="font-display text-5xl font-semibold text-ocean-accent">
                {s.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {s.label}
              </p>
            </Block>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-slate-50 to-white">
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
                className="font-semibold text-ocean-accent hover:underline"
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

      <Section className="bg-white">
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

      <Section className="bg-slate-50">
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

      <Section className="bg-white">
        <SectionHeader
          eyebrow="REPÈRE 04 // CIRCUITS"
          title="Tour Voile & IRC"
        />
        <div className="mb-10">
          <div className="mb-4 flex items-baseline justify-between gap-4">
            <h3 className="font-display text-2xl font-semibold">Tour Voile</h3>
            <a
              href="https://www.tourvoile.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-ocean-accent hover:underline"
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
          <h3 className="font-display mb-4 text-2xl font-semibold">IRC</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              `${WP}/2026/10/clipboard-26.jpeg`,
              `${WP}/2026/10/clipboard-35.jpeg`,
              `${WP}/2026/10/clipboard-2.png`,
              `${WP}/2026/10/clipboard-3.png`,
            ].map((src, i) => (
              <div
                key={src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200"
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

      <Section className="bg-gradient-to-b from-slate-50 to-white">
        <SectionHeader
          eyebrow="REPÈRE 05 // ENTREPRENEUR"
          title="Entrepreneur & consultant"
          description="À la croisée du sport, de l'innovation et de l'entreprise : construire des projets de partenariat et de communication concrets."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {ventures.map((v) => (
            <Block key={v.name}>
              <h3 className="font-display mb-2 text-xl font-semibold">
                {v.name}
              </h3>
              <p className="mb-4 text-sm text-slate-500">{v.note}</p>
              <a
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-ocean-accent hover:underline"
              >
                En savoir plus →
              </a>
            </Block>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
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
              className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-slate-200"
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

      <Section className="bg-slate-50">
        <SectionHeader eyebrow="REPÈRE 07 // PRESSE" title="À la une" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["clipboard-30", "clipboard-31", "clipboard-32", "clipboard-33"].map(
            (file) => (
              <div
                key={file}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-slate-200 bg-white"
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
