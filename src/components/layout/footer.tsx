import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

import { Logo } from '@/components/layout/logo'
import { siteConfig } from '@/lib/seo'

const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

const legalLinks = [
  { label: 'Mentions légales', to: '/mentions-legales' },
  { label: 'Confidentialité', to: '/politique-de-confidentialite' },
  { label: 'CGU', to: '/conditions-generales' },
  { label: 'Cookies', to: '/politique-cookies' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-zinc-950 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-amber-500/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-8 sm:px-6 sm:pt-16 lg:px-8">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand + contact */}
          <div className="space-y-5 lg:col-span-1">
            <Logo variant="dark" className="-ml-1" />
            <p className="max-w-xs text-[13px] leading-relaxed text-zinc-400">
              Déménagement & transport à Besançon, dans tout le Doubs et partout en Franche-Comté & Grand Est. Particuliers et professionnels.
            </p>
            <div className="space-y-2.5 pt-1">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="group flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                <span className="flex size-8 items-center justify-center rounded-lg bg-white/5 text-primary transition-colors group-hover:bg-primary/15">
                  <Phone className="size-3.5" />
                </span>
                <span>
                  {siteConfig.phone}
                  <span className="text-[11px] text-zinc-500"> · portable</span>
                </span>
              </a>
              <a
                href={`tel:${siteConfig.phoneFixe.replace(/\s/g, '')}`}
                className="group flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                <span className="flex size-8 items-center justify-center rounded-lg bg-white/5 text-primary transition-colors group-hover:bg-primary/15">
                  <Phone className="size-3.5" />
                </span>
                <span>
                  {siteConfig.phoneFixe}
                  <span className="text-[11px] text-zinc-500"> · fixe</span>
                </span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                <span className="flex size-8 items-center justify-center rounded-lg bg-white/5 text-primary transition-colors group-hover:bg-primary/15">
                  <Mail className="size-3.5" />
                </span>
                {siteConfig.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-zinc-400">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-primary">
                  <MapPin className="size-3.5" />
                </span>
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.postalCode} {siteConfig.address.city}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation + Légal en grille 2 colonnes sur mobile/tablette */}
          <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:col-span-2 lg:grid-cols-2">
            <nav aria-label="Navigation">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Navigation
              </h3>
              <ul className="mt-5 space-y-3">
                {navLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.to}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Légal">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Légal
              </h3>
              <ul className="mt-5 space-y-3">
                {legalLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.to}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Zones desservies */}
          <div className="lg:col-span-1">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Zones desservies
            </h3>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {siteConfig.zones.map((city) => (
                <li
                  key={city}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-zinc-300"
                >
                  {city}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[11px] text-zinc-500">
              Franche-Comté · Grand Est · et partout en France sur demande
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10" />

        <div className="mt-6 flex flex-col gap-2 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} EN PAYS WÊ. Tous droits réservés.
          </p>
          <p>SIRET : {siteConfig.siret}</p>
        </div>
      </div>
    </footer>
  )
}
