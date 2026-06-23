/**
 * Composant partagé pour les landing pages SEO locales (déménagement Besançon,
 * entreprise de déménagement Besançon, etc.). Chaque page fournit son propre
 * contenu et son propre JSON-LD via les props ; ce composant assure la mise en
 * page + structure HTML (H1, H2, FAQ, CTA, maillage interne) commune.
 */

import Link from 'next/link'
import { ArrowRight, CheckCircle2, MapPin, Phone, Star } from 'lucide-react'

import { CtaSection } from '@/components/sections/cta-section'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/seo'

export interface FaqItem {
  question: string
  answer: string
}

export interface SeoLandingProps {
  /** Mots-clés en bandeau (eyebrow) — court */
  eyebrow: string
  /** H1 de la page — DOIT contenir le mot-clé principal */
  h1: string
  /** Paragraphe d'introduction (~150-220 mots) */
  intro: React.ReactNode
  /** Sous-titre / argument principal sous le H1 */
  subtitle?: string
  /** Liste de bénéfices clés (3 à 6) affichée juste après le hero */
  bullets?: string[]
  /** Sections de contenu (H2 + paragraphes). Au moins 3 recommandées. */
  sections: Array<{
    h2: string
    body: React.ReactNode
  }>
  /** FAQ — au moins 4 questions. Crée un FAQPage JSON-LD côté page */
  faqs: FaqItem[]
  /** Liens internes vers d'autres pages SEO / pages clés du site */
  relatedLinks: Array<{ href: string; label: string }>
  /** Image hero (URL) — facultative */
  heroImage?: string
}

export function LocalLandingPage({
  eyebrow,
  h1,
  intro,
  subtitle,
  bullets,
  sections,
  faqs,
  relatedLinks,
  heroImage,
}: SeoLandingProps) {
  const phoneTel = siteConfig.phone.replace(/\s/g, '')

  return (
    <article>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-border/60 bg-gradient-to-br from-[oklch(0.98_0.01_260)] via-background to-[oklch(0.97_0.02_42/0.4)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3 py-1 font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                <MapPin className="size-3" aria-hidden />
                {eyebrow}
              </p>
              <h1 className="mt-5 font-display text-4xl leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[56px]">
                {h1}
              </h1>
              {subtitle && (
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                  {subtitle}
                </p>
              )}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="group" asChild>
                  <Link href="/contact">
                    Demander un devis gratuit
                    <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={`tel:${phoneTel}`}>
                    <Phone className="size-4" />
                    {siteConfig.phone}
                  </a>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-[oklch(0.82_0.17_80)] text-[oklch(0.82_0.17_80)]"
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-foreground">
                  5,0 sur Google · {siteConfig.hours.label}
                </span>
              </div>
            </div>

            {heroImage && (
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/15 via-transparent to-sky-400/10 blur-2xl"
                />
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/60 shadow-[var(--shadow-md)] ring-1 ring-foreground/5 sm:aspect-[4/3] lg:aspect-[4/5]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={heroImage}
                    alt={h1}
                    className="size-full object-cover"
                    loading="eager"
                    width={800}
                    height={1000}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Intro paragraph (texte SEO substantiel) */}
          <div className="mt-12 max-w-4xl text-pretty text-[15px] leading-[1.75] text-foreground/85 sm:mt-14 sm:text-base">
            {intro}
          </div>

          {/* Bénéfices */}
          {bullets && bullets.length > 0 && (
            <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 rounded-xl border border-border/60 bg-card/70 p-4 text-[15px] text-foreground/90 shadow-[var(--shadow-xs)]"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Sections de contenu */}
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-4xl space-y-14 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          {sections.map((sec, i) => (
            <div key={i} className="space-y-4">
              <h2 className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">
                {sec.h2}
              </h2>
              <div className="space-y-4 text-pretty text-[15px] leading-[1.75] text-foreground/85 sm:text-base">
                {sec.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border/60 bg-muted/20">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <h2 className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">
            Questions fréquentes
          </h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-border/60 bg-card/70 p-5 shadow-[var(--shadow-xs)] open:shadow-[var(--shadow-sm)]"
              >
                <summary className="cursor-pointer list-none font-display text-base font-semibold text-foreground sm:text-lg [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-3">
                    {faq.question}
                    <span className="text-primary transition-transform group-open:rotate-180">
                      ↓
                    </span>
                  </span>
                </summary>
                <div className="mt-3 text-[15px] leading-relaxed text-foreground/80">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Maillage interne — pages liées */}
      {relatedLinks.length > 0 && (
        <section className="border-b border-border/60 bg-background">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <h2 className="font-display text-xl tracking-tight text-foreground sm:text-2xl">
              Voir aussi
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-card/70 p-4 text-[15px] font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-primary/[0.04]"
                  >
                    {link.label}
                    <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CTA réutilisé */}
      <CtaSection />
    </article>
  )
}
