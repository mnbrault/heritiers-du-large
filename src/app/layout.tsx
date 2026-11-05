import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SITE, WP } from "@/lib/site";
import "./globals.css";

const display = localFont({
  src: "../fonts/archivo-black-latin-400-normal.woff2",
  variable: "--font-display",
  display: "swap",
  weight: "400",
  fallback: ["Arial Black", "Impact", "sans-serif"],
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
      <body className={`${display.variable} antialiased`}>
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
