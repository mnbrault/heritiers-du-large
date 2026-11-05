"use client";

import StaggeredMenu from "./StaggeredMenu";
import { NAV, SITE, mailto } from "@/lib/site";

export function SiteHeader() {
  const items = [
    ...NAV.map((item) => ({
      label: item.label,
      ariaLabel: item.label,
      link: item.href,
    })),
    {
      label: "Contact",
      ariaLabel: "Contacter Bertrand Castelnérac",
      link: mailto("Préparons votre navigation"),
    },
  ];

  return (
    <StaggeredMenu
      position="right"
      isFixed
      closeOnClickAway
      displayItemNumbering
      displaySocials
      logoText={SITE.name}
      logoHref="/"
      items={items}
      socialItems={[
        { label: "LinkedIn", link: SITE.linkedin },
        { label: "Facebook", link: SITE.facebook },
        { label: "Email", link: mailto() },
      ]}
      colors={["#0a1628", "#0d9488", "#0a1628"]}
      accentColor="#0d9488"
      menuButtonColor="#0a1628"
      openMenuButtonColor="#ffffff"
      changeMenuColorOnOpen
      headerBottomExtra={<p className="sm-tagline">{SITE.tagline}</p>}
    />
  );
}
