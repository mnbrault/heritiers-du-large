export const SITE = {
  name: "Les Héritiers du large",
  tagline:
    "Partenaires : entrez dans la course au large avec le budget minimum et le maximum de retour sur investissement.",
  email: "bertrandcastelnerac@gmail.com",
  port: "PORT D'ATTACHE // LORIENT",
  description:
    "Conseil, communication d'entreprise et sponsoring sportif",
  linkedin:
    "https://www.linkedin.com/in/bertrand-castelnerac-38543b29/",
  facebook: "https://www.facebook.com/bertrand.castelnerac/",
} as const;

export const NAV = [
  { href: "/", label: "Accueil" },
  { href: "/offres", label: "Offres" },
  { href: "/elite", label: "Élite" },
  { href: "/academie", label: "Académie" },
  { href: "/corporatif", label: "Corporatif" },
  { href: "/bertrand", label: "Bertrand" },
] as const;

export const mailto = (subject?: string) => {
  const base = `mailto:${SITE.email}`;
  if (!subject) return base;
  return `${base}?subject=${encodeURIComponent(subject)}`;
};

export const WP = "https://lesheritiersdularge.wordpress.com/wp-content/uploads";
