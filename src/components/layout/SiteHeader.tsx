"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, SITE, mailto } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = !isHome || scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-slate-200/80 bg-white/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div
        className={`border-b px-6 py-2 text-center text-[11px] tracking-[0.14em] uppercase sm:px-8 ${
          solid
            ? "border-slate-100 bg-slate-50 text-slate-500"
            : "border-white/10 bg-black/20 text-white/75"
        }`}
      >
        {SITE.tagline}
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          className={`font-display text-xl font-semibold tracking-tight sm:text-2xl ${
            solid ? "text-ocean-navy" : "text-white"
          }`}
        >
          Les Héritiers du large
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  solid
                    ? active
                      ? "text-ocean-accent"
                      : "text-slate-600 hover:text-slate-900"
                    : active
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={mailto("Préparons votre navigation")}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
              solid
                ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md shadow-blue-600/20"
                : "bg-white text-ocean-navy"
            }`}
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className={`rounded-lg border px-3 py-2 text-sm font-medium lg:hidden ${
            solid
              ? "border-slate-200 text-slate-800"
              : "border-white/30 text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-100 bg-white px-6 py-5 lg:hidden">
          <nav className="flex flex-col gap-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-base font-medium text-slate-800 hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={mailto("Préparons votre navigation")}
              className="mt-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-3 py-3 text-center font-semibold text-white"
            >
              Contact
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
