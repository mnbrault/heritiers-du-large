import Link from "next/link";
import { NAV, SITE, mailto } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-ocean-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-12">
        <div>
          <p className="eyebrow mb-3 text-frozen-water/70">{SITE.port}</p>
          <p className="font-display text-2xl font-semibold tracking-tight">
            {SITE.name}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
            {SITE.description}
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4 text-frozen-water/70">Navigation</p>
          <ul className="space-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4 text-frozen-water/70">Contact</p>
          <a
            href={mailto()}
            className="block text-sm font-medium text-white hover:text-frozen-water"
          >
            Bertrand Castelnérac
          </a>
          <a
            href={mailto()}
            className="mt-1 block text-sm text-white/70 hover:text-white"
          >
            {SITE.email}
          </a>
          <div className="mt-5 flex gap-4 text-sm">
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
