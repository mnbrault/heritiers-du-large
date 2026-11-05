"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import StaggeredMenu from "./StaggeredMenu";
import { NAV, SITE, mailto } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const lightOnHero = isHome && !scrolled;
  const buttonColor = lightOnHero ? "#ffffff" : "#0a1628";

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
      colors={["#1e3a5f", "#0d9488", "#0a1628"]}
      accentColor="#38bdf8"
      menuButtonColor={buttonColor}
      openMenuButtonColor="#ffffff"
      changeMenuColorOnOpen
      headerBottomExtra={
        <p className="sm-tagline">{SITE.tagline}</p>
      }
    />
  );
}
