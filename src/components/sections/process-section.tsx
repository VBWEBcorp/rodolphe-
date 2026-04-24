'use client'

import { motion } from 'framer-motion'
import { CalendarCheck, ClipboardList, PackageCheck, Truck } from 'lucide-react'

import { SectionTitle } from '@/components/ui/section-title'

const ease = [0.22, 1, 0.36, 1] as const

const steps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Vous nous contactez',
    description:
      "Par téléphone, email ou formulaire. On échange sur votre projet : volume, dates, adresses, contraintes particulières.",
  },
  {
    icon: CalendarCheck,
    step: '02',
    title: 'Devis gratuit sous 24h',
    description:
      "Nous établissons un devis clair et détaillé. Pas d'engagement, pas de frais cachés. Vous validez quand vous êtes prêt.",
  },
  {
    icon: PackageCheck,
    step: '03',
    title: 'Préparation du jour J',
    description:
      "Nous planifions l'intervention, préparons matériel et équipe, anticipons l'accès aux logements et les autorisations si besoin.",
  },
  {
    icon: Truck,
    step: '04',
    title: 'Le jour du déménagement',
    description:
      "Emballage, démontage, chargement, transport, remontage. Nos équipes gèrent tout. Vous, vous profitez de votre nouveau lieu.",
  },
]

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-muted/20">
      {/* Decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)',
        }}
      />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionTitle
          eyebrow="Comment ça se passe"
          title="Un déménagement en 4 étapes simples"
          description="De votre premier contact à la dernière caisse déposée, voici comment nous organisons chaque intervention."
        />

        <div className="relative mt-16">
          {/* Connecting line (desktop) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-14 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
          />

          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {steps.map((s, i) => (
              <motion.li
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, ease, delay: i * 0.1 }}
                className="relative"
              >
                {/* Icon circle sitting on the line */}
                <div className="relative z-10 mx-auto flex size-28 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[oklch(0.72_0.18_42)] to-[oklch(0.58_0.2_28)] opacity-10 blur-xl" />
                  <div className="relative flex size-20 items-center justify-center rounded-full bg-background shadow-[var(--shadow-md)] ring-1 ring-border">
                    <div className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[oklch(0.22_0.06_260)] text-white shadow-inner">
                      <s.icon className="size-7" strokeWidth={2} aria-hidden />
                    </div>
                    <span className="absolute -bottom-1 -right-1 flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.72_0.2_42)] to-[oklch(0.58_0.2_28)] font-display text-xs font-bold text-white shadow-lg ring-2 ring-background">
                      {s.step}
                    </span>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 px-2 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
