import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono, Source_Sans_3 } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SITE, WP } from "@/lib/site";
import "./globals.css";

const display = localFont({
  src: [
    {
      path: "../fonts/archivo-black-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/archivo-black-latin-ext-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["Arial Black", "Impact", "sans-serif"],
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
