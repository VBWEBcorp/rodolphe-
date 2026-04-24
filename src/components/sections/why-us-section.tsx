'use client'

import { motion } from 'framer-motion'
import { Award, Clock, HeartHandshake, ShieldCheck } from 'lucide-react'

import { SectionTitle } from '@/components/ui/section-title'

const ease = [0.22, 1, 0.36, 1] as const

const features = [
  {
    icon: ShieldCheck,
    title: 'Vos biens en sécurité',
    description:
      "Matériel d'emballage professionnel, housses de protection, sangles et cales. Nous manipulons vos meubles comme les nôtres.",
    accent: 'from-[oklch(0.42_0.1_260)] to-[oklch(0.55_0.12_260)]',
  },
  {
    icon: Clock,
    title: 'Ponctualité garantie',
    description:
      "Nous arrivons à l'heure prévue, respectons les délais annoncés et vous tenons informé à chaque étape.",
    accent: 'from-[oklch(0.68_0.2_42)] to-[oklch(0.55_0.2_28)]',
  },
  {
    icon: HeartHandshake,
    title: 'Une équipe à votre écoute',
    description:
      "Un interlocuteur unique du devis à la livraison. On s'adapte à vos contraintes, on répond rapidement à vos questions.",
    accent: 'from-[oklch(0.42_0.1_260)] to-[oklch(0.55_0.12_260)]',
  },
  {
    icon: Award,
    title: 'Tarifs justes & transparents',
    description:
      "Devis détaillé et gratuit sous 24h. Pas de frais cachés, pas de mauvaise surprise. Vous savez ce que vous payez.",
    accent: 'from-[oklch(0.68_0.2_42)] to-[oklch(0.55_0.2_28)]',
  },
]

export function WhyUsSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-background">
      {/* Ambient gradient */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 size-[400px] -translate-y-1/2 rounded-full bg-primary/8 blur-[140px]" />
        <div className="absolute right-0 top-0 size-[350px] rounded-full bg-[oklch(0.68_0.2_42/0.08)] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionTitle
          eyebrow="Pourquoi EN PAYS WÊ"
          title="Un déménagement sans stress, vraiment"
          description="Quatre engagements que nous tenons sur chaque intervention, parce qu'un bon déménageur ne se mesure pas aux promesses mais aux résultats."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card/80 p-8 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-md)]"
            >
              {/* Number background */}
              <span
                className="pointer-events-none absolute -right-2 -top-2 font-display text-[120px] font-black leading-none text-foreground/[0.035] select-none"
                aria-hidden
              >
                0{i + 1}
              </span>

              {/* Hover gradient wash */}
              <div
                aria-hidden
                className={`pointer-events-none absolute -inset-20 -z-10 rounded-full bg-gradient-to-br ${f.accent} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-[0.12]`}
              />

              <div className="relative">
                <div
                  className={`inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${f.accent} text-white shadow-lg shadow-black/10 ring-1 ring-white/10`}
                >
                  <f.icon className="size-6" strokeWidth={2.2} aria-hidden />
                </div>
                <h3 className="mt-6 font-display text-xl leading-tight tracking-[-0.01em] text-foreground sm:text-[22px]">
                  {f.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
