'use client'

import { motion } from 'framer-motion'
import {
  Archive,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Home,
  Package,
  PackageCheck,
  Phone,
  Sofa,
  Trash2,
  Truck,
} from 'lucide-react'
import Link from 'next/link'

import { PageHero } from '@/components/sections/page-hero'
import { ProcessSection } from '@/components/sections/process-section'
import { ValuesMarquee } from '@/components/sections/values-marquee'
import { ZonesSection } from '@/components/sections/zones-section'
import { Button } from '@/components/ui/button'
import { SectionTitle } from '@/components/ui/section-title'
import { useContent } from '@/hooks/use-content'
import { siteConfig } from '@/lib/seo'

const ease = [0.22, 1, 0.36, 1] as const
const defaultIcons = [Home, Sofa, Truck, Briefcase, Archive, Trash2, Package, PackageCheck]

const defaults = {
  hero: {
    eyebrow: 'Nos services',
    title: 'Des prestations complètes, du carton au camion',
    description:
      "Particuliers ou professionnels, chaque déménagement est différent. Nous adaptons nos équipes, notre matériel et nos camions à votre besoin, pour un service fiable, rapide et soigné.",
    image: 'https://i.ibb.co/Zp1dLCHs/IMG-1931.jpg',
  },
  services: [
    {
      title: "Déménagement d'appartements & maisons",
      description:
        'Prise en charge complète : emballage, démontage, chargement, transport, remontage. Du studio au grand volume.',
      points: ['Démontage & remontage inclus', 'Emballage sur demande', 'Toutes distances'],
    },
    {
      title: 'Livraison de meubles & électroménager',
      description:
        "Livraison soignée à domicile, avec mise en place et installation si besoin. Courtes et longues distances.",
      points: ['Mise en place à domicile', 'Étage & accès difficile', 'Rendez-vous sur créneau'],
    },
    {
      title: 'Transport de marchandises',
      description:
        "Transport professionnel de marchandises, matériel ou objets volumineux, avec camion adapté au volume à déplacer.",
      points: ['Véhicule adapté au volume', 'Courte et longue distance', 'Sanglage & calage pro'],
    },
    {
      title: 'Transfert de bureaux & locaux pro',
      description:
        'Organisation complète : mobilier, matériel informatique, archives. Planning optimisé pour limiter les interruptions.',
      points: ['Intervention weekend possible', 'Matériel informatique sécurisé', 'Plan de reprise rapide'],
    },
    {
      title: "Vidage d'appartements & maisons",
      description:
        "Débarras complet avec tri, enlèvement et mise en déchèterie. Pratique pour successions, ventes ou travaux.",
      points: ['Tri & évacuation', 'Mise en déchèterie', 'Logement rendu vide & propre'],
    },
    {
      title: 'Vidage de caves & garages',
      description:
        "On débarrasse, charge et évacue en déchèterie tous les encombrants. Vous récupérez un espace propre et vide.",
      points: ['Encombrants évacués', 'Tri sur place possible', 'Intervention rapide'],
    },
    {
      title: 'Emballage & protection',
      description:
        "Cartons, scotch, papier bulle, housses : matériel adapté à vos objets fragiles. Emballage réalisé par nos équipes sur demande.",
      points: ['Matériel fourni', 'Objets fragiles protégés', 'Prestation optionnelle'],
    },
    {
      title: 'Monte-meubles & gros volumes',
      description:
        "Pour les étages difficiles d'accès ou les objets volumineux, nous mobilisons les équipements et équipes nécessaires.",
      points: ['Monte-meubles', 'Gros électroménager', 'Pianos & coffres-forts'],
    },
  ],
}

function ServicesGrid({ services }: { services: any[] }) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-background">
      {/* Ambient */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 size-[520px] -translate-x-1/2 rounded-full bg-primary/8 blur-[140px]" />
        <div className="absolute right-0 bottom-0 size-[380px] rounded-full bg-[oklch(0.68_0.2_42/0.08)] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionTitle
          eyebrow="Toutes nos prestations"
          title="Une solution pour chaque projet"
          description="Nous prenons en charge l'intégralité de votre déménagement ou uniquement les étapes qui vous manquent. À vous de choisir."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {services.map((s: any, i: number) => {
            const Icon = defaultIcons[i] ?? Truck
            const featured = i === 0
            return (
              <motion.article
                key={s.title || i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, ease, delay: i * 0.04 }}
                className={`group relative overflow-hidden rounded-3xl border p-5 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-md)] sm:p-7 ${
                  featured
                    ? 'border-transparent bg-gradient-to-br from-[oklch(0.22_0.06_260)] via-[oklch(0.19_0.05_260)] to-[oklch(0.24_0.08_260)] text-white sm:row-span-2'
                    : 'border-border/70 bg-card/80 backdrop-blur-sm hover:border-primary/30'
                }`}
              >
                {/* Ghost number */}
                <span
                  className={`pointer-events-none absolute -right-2 -top-2 font-display text-[110px] font-black leading-none select-none ${
                    featured ? 'text-white/[0.06]' : 'text-foreground/[0.035]'
                  }`}
                  aria-hidden
                >
                  0{i + 1}
                </span>

                {/* Hover glow */}
                {!featured && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-20 -top-20 -z-10 size-60 rounded-full bg-gradient-to-br from-[oklch(0.68_0.2_42/0.15)] to-transparent opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                  />
                )}
                {featured && (
                  <>
                    <div aria-hidden className="pointer-events-none absolute -top-24 -right-10 size-64 rounded-full bg-[oklch(0.68_0.2_42/0.25)] blur-3xl" />
                    <div aria-hidden className="pointer-events-none absolute -bottom-28 -left-10 size-72 rounded-full bg-[oklch(0.42_0.1_260/0.3)] blur-3xl" />
                  </>
                )}

                <div className="relative flex h-full flex-col">
                  <div
                    className={`inline-flex size-12 items-center justify-center rounded-2xl shadow-lg ring-1 ${
                      featured
                        ? 'bg-gradient-to-br from-[oklch(0.72_0.2_42)] to-[oklch(0.58_0.2_28)] text-white shadow-[oklch(0.68_0.2_42/0.4)] ring-white/10'
                        : 'bg-gradient-to-br from-primary to-[oklch(0.22_0.06_260)] text-white shadow-primary/20 ring-white/10'
                    }`}
                  >
                    <Icon className="size-5" strokeWidth={2.2} aria-hidden />
                  </div>

                  <h3
                    className={`mt-5 font-display leading-tight tracking-[-0.01em] ${
                      featured ? 'text-[26px] text-white sm:text-[30px]' : 'text-lg text-foreground'
                    }`}
                  >
                    {s.title}
                  </h3>

                  <p
                    className={`mt-3 text-[14px] leading-relaxed ${
                      featured ? 'text-white/75 text-[15px]' : 'text-muted-foreground'
                    }`}
                  >
                    {s.description}
                  </p>

                  {s.points && s.points.length > 0 && (
                    <ul className="mt-5 space-y-2">
                      {s.points.map((p: string) => (
                        <li
                          key={p}
                          className={`flex items-start gap-2.5 text-[13px] ${
                            featured ? 'text-white/85' : 'text-foreground/80'
                          }`}
                        >
                          <span
                            className={`mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full ${
                              featured
                                ? 'bg-[oklch(0.72_0.2_42/0.25)] ring-1 ring-[oklch(0.72_0.2_42/0.5)]'
                                : 'bg-primary/10 ring-1 ring-primary/20'
                            }`}
                          >
                            <CheckCircle2
                              className={`size-2.5 ${featured ? 'text-[oklch(0.88_0.14_42)]' : 'text-primary'}`}
                              aria-hidden
                            />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}

                  {featured && (
                    <div className="mt-auto pt-8">
                      <Button
                        className="bg-[oklch(0.72_0.2_42)] text-white hover:bg-[oklch(0.62_0.2_42)]"
                        asChild
                      >
                        <Link href="/contact">
                          Demander ce service
                          <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ServicesHighlight() {
  const rows = [
    { k: 'Particuliers', v: 'Studios, appartements, maisons, villas : tous volumes, toutes distances.' },
    { k: 'Professionnels', v: 'Bureaux, locaux commerciaux, ateliers : planning optimisé pour limiter les interruptions.' },
    { k: 'Urgences & gros volumes', v: 'Interventions courtes, débarras complets, livraisons spécifiques. On s\'adapte.' },
  ]
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-[oklch(0.17_0.05_260)] text-white">
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-20 size-[520px] rounded-full bg-[oklch(0.68_0.2_42/0.2)] blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-20 size-[420px] rounded-full bg-[oklch(0.42_0.1_260/0.35)] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.72_0.2_42/0.3)] bg-[oklch(0.72_0.2_42/0.12)] px-3 py-1">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.72_0.18_42)] opacity-70" />
                <span className="relative inline-flex size-1.5 rounded-full bg-[oklch(0.72_0.18_42)]" />
              </span>
              <span className="font-display text-[10px] font-semibold tracking-[0.2em] text-[oklch(0.88_0.14_42)] uppercase">
                Pour qui on intervient
              </span>
            </div>
            <h2 className="mt-6 font-display text-3xl leading-[1.08] tracking-[-0.03em] sm:text-4xl lg:text-[44px]">
              Chaque déménagement{' '}
              <span className="bg-gradient-to-r from-[oklch(0.78_0.16_42)] via-[oklch(0.72_0.2_42)] to-[oklch(0.68_0.22_28)] bg-clip-text text-transparent">
                a son équipe
              </span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              On mobilise le bon matériel et le bon nombre d'intervenants selon la nature du déménagement. Résultat : moins de temps perdu, plus de soin.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="bg-[oklch(0.68_0.2_42)] text-white shadow-[0_10px_30px_-10px_oklch(0.68_0.2_42/0.8)] hover:bg-[oklch(0.62_0.2_42)]" asChild>
                <Link href="/contact">
                  Demander un devis
                  <ArrowRight className="transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" className="border-white/25 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 hover:text-white" asChild>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>
                  <Phone className="size-4" />
                  {siteConfig.phone}
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="space-y-3"
          >
            {rows.map((r, i) => (
              <li
                key={r.k}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-[oklch(0.72_0.2_42/0.3)] hover:bg-white/10"
              >
                <span
                  className="pointer-events-none absolute -right-1 top-1 font-display text-[72px] font-black leading-none text-white/[0.04] select-none"
                  aria-hidden
                >
                  0{i + 1}
                </span>
                <div className="relative flex items-start gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.72_0.2_42)] to-[oklch(0.58_0.2_28)] text-white shadow-lg ring-1 ring-white/10">
                    <CheckCircle2 className="size-4" aria-hidden />
                  </span>
                  <div>
                    <p className="font-display text-base font-semibold text-white">{r.k}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">{r.v}</p>
                  </div>
                </div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}

export function ServicesContent() {
  const { data } = useContent('services', defaults)
  const hero = data.hero ?? defaults.hero
  const services = data.services ?? defaults.services

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image={hero.image}
        breadcrumb="Services"
      />

      <ValuesMarquee />
      <ServicesGrid services={services} />
      <ServicesHighlight />
      <ProcessSection />
      <ZonesSection />
    </>
  )
}
