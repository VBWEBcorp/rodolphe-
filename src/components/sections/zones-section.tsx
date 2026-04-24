'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

import { SectionTitle } from '@/components/ui/section-title'
import { siteConfig } from '@/lib/seo'

const ease = [0.22, 1, 0.36, 1] as const

export function ZonesSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-muted/20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          color: 'var(--foreground)',
          maskImage:
            'radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 -z-10 size-[380px] rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionTitle
          eyebrow="Zones desservies"
          title="Franche-Comté, Grand Est et au-delà"
          description="Nous intervenons à Besançon, dans tout le Doubs et partout en Franche-Comté & Grand Est. Des déplacements vers le reste de la France sont possibles sur simple demande."
        />

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {siteConfig.zones.map((city, i) => (
            <motion.div
              key={city}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, ease, delay: i * 0.03 }}
              className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-4 py-2 shadow-[var(--shadow-xs)] ring-1 ring-foreground/[0.03] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:shadow-[var(--shadow-sm)]"
            >
              <span className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <MapPin className="size-3" strokeWidth={2.4} aria-hidden />
              </span>
              <span className="font-display text-sm font-semibold tracking-tight text-foreground">
                {city}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-xs text-muted-foreground">
          Votre ville n'est pas listée ? Contactez-nous, nous étudions chaque demande.
        </p>
      </div>
    </section>
  )
}
