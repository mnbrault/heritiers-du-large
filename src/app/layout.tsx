import type { Metadata } from "next";
import { JetBrains_Mono, Fraunces, Source_Sans_3 } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SITE, WP } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Les Héritiers du large – Conseil, communication et sponsoring voile à Lorient",
    template: "%s · Les Héritiers du large",
  },
  description:
    "Sponsoring voile, communication d'entreprise et navigations à Lorient et La Trinité-sur-Mer. Découvrez Les Héritiers du large.",
  openGraph: {
    title: SITE.name,
    description:
      "Performance, transmission et rencontres : la course au large au service de votre entreprise.",
    locale: "fr_FR",
    type: "website",
    images: [`${WP}/2026/10/clipboard.jpeg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}
      >
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
