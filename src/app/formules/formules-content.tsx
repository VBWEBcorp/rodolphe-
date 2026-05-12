'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check, Phone, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { FormulaQuoteDialog } from '@/components/formula-quote-dialog'
import { PageHero } from '@/components/sections/page-hero'
import { Button } from '@/components/ui/button'
import { SectionTitle } from '@/components/ui/section-title'
import { formulas, type Formula } from '@/lib/formulas'
import { siteConfig } from '@/lib/seo'

const ease = [0.22, 1, 0.36, 1] as const

function BigCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-muted shadow-[var(--shadow-md)] ring-1 ring-foreground/10">
      <AnimatePresence mode="sync">
        <motion.img
          key={index}
          src={images[index]}
          alt={alt}
          loading="lazy"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 0.9, ease }}
          className="absolute inset-0 size-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Image ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? 'w-8 bg-white' : 'w-2 bg-white/60 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function FormulasOverview({ onRequest }: { onRequest: (f: Formula) => void }) {
  return (
    <section className="border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionTitle
          eyebrow="Nos 4 formules"
          title="Trouvez la formule qui vous ressemble"
          description="De la solution la plus économique au service clé en main, choisissez le niveau d'accompagnement qui vous convient."
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {formulas.map((f) => (
            <button
              key={f.slug}
              type="button"
              onClick={() => onRequest(f)}
              aria-label={`Demander un devis pour la formule ${f.name}`}
              className={`group flex flex-col gap-2 rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 ${
                f.highlight
                  ? 'border-primary/40 bg-primary/5'
                  : 'border-border/70 bg-card'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{f.emoji}</span>
                {f.badge ? (
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                      f.highlight
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground/80'
                    }`}
                  >
                    {f.badge}
                  </span>
                ) : null}
              </div>
              <p className="font-display text-base font-semibold text-foreground">
                Formule {f.name}
              </p>
              <p className="text-xs font-medium text-primary">{f.tagline}</p>
              <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-foreground/70 transition-colors group-hover:text-primary">
                Demander un devis
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

function FormulaDetail({
  index,
  formula,
  onRequest,
}: {
  index: number
  formula: Formula
  onRequest: (f: Formula) => void
}) {
  const reverse = index % 2 === 1

  return (
    <section
      id={formula.slug}
      className="scroll-mt-20 border-b border-border/60 bg-background even:bg-muted/30"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div
          className={`grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14 ${
            reverse ? 'lg:[&>*:first-child]:order-2' : ''
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
          >
            <BigCarousel images={formula.images} alt={`Formule ${formula.name}`} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                  formula.highlight
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-primary/10 text-primary ring-1 ring-primary/20'
                }`}
              >
                {formula.highlight ? <Sparkles className="size-3" /> : null}
                Formule {index + 1} / {formulas.length}
              </span>
              {formula.badge ? (
                <span className="rounded-full bg-foreground/5 px-3 py-1 text-xs font-semibold text-foreground/80 ring-1 ring-foreground/10">
                  {formula.badge}
                </span>
              ) : null}
            </div>

            <h2 className="mt-5 font-display text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
              <span className="mr-2" aria-hidden>
                {formula.emoji}
              </span>
              Formule {formula.name}
            </h2>
            <p className="mt-2 text-lg font-medium text-primary">{formula.tagline}</p>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {formula.longDescription}
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60">
                  Ce qui est inclus
                </p>
                <ul className="mt-3 space-y-2.5">
                  {formula.included.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-foreground/90"
                    >
                      <span
                        className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${
                          formula.highlight
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-primary/10 text-primary'
                        }`}
                      >
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60">
                  Pour qui ?
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                  {formula.forWho}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {formula.features.map((feat) => (
                    <span
                      key={feat}
                      className="rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/80 ring-1 ring-foreground/10"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="rounded-full px-6"
                onClick={() => onRequest(formula)}
              >
                Demander cette formule
                <ArrowRight className="ml-1 size-4" />
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>
                  <Phone className="mr-1 size-4" />
                  Appeler
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ComparisonCta() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.17_0.05_260)] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-20 size-[520px] rounded-full bg-[oklch(0.68_0.2_42/0.2)] blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-20 size-[420px] rounded-full bg-[oklch(0.42_0.1_260/0.35)] blur-[120px]"
      />

      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
        <h2 className="font-display text-3xl leading-[1.08] tracking-[-0.02em] sm:text-4xl">
          Vous hésitez entre deux formules ?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          Décrivez-nous votre projet en quelques mots : nous vous proposons la formule la
          plus adaptée à votre volume, votre budget et votre planning, avec un devis
          gratuit et sans engagement.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-[oklch(0.68_0.2_42)] px-7 text-white shadow-[0_10px_30px_-10px_oklch(0.68_0.2_42/0.8)] hover:bg-[oklch(0.62_0.2_42)]"
          >
            <Link href="/contact">
              Demander un devis gratuit
              <ArrowRight className="ml-1 size-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white/25 bg-white/5 px-7 text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
          >
            <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>
              <Phone className="mr-1 size-4" />
              {siteConfig.phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export function FormulesContent() {
  const [selected, setSelected] = useState<Formula | null>(null)

  return (
    <>
      <PageHero
        eyebrow="Nos formules"
        title="Le déménagement qui vous correspond"
        description="De la formule économique au service clé en main, nous adaptons notre prestation à votre budget et à votre niveau d'implication."
        image="https://i.ibb.co/Zp1dLCHs/IMG-1931.jpg"
        breadcrumb="Formules"
      />

      <FormulasOverview onRequest={setSelected} />

      {formulas.map((f, i) => (
        <FormulaDetail key={f.slug} index={i} formula={f} onRequest={setSelected} />
      ))}

      <ComparisonCta />

      <FormulaQuoteDialog
        formula={selected}
        open={selected !== null}
        onClose={() => setSelected(null)}
      />
    </>
  )
}
