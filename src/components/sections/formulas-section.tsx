'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { FormulaQuoteDialog } from '@/components/formula-quote-dialog'
import { SectionTitle } from '@/components/ui/section-title'
import { Button } from '@/components/ui/button'
import { formulas, type Formula } from '@/lib/formulas'

const ease = [0.22, 1, 0.36, 1] as const

function FormulaCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl bg-muted">
      <AnimatePresence mode="sync">
        <motion.img
          key={index}
          src={images[index]}
          alt={alt}
          loading="lazy"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 0.8, ease }}
          className="absolute inset-0 size-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Image ${i + 1}`}
            onClick={(e) => {
              e.stopPropagation()
              setIndex(i)
            }}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/60 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export function FormulasSection() {
  const [selected, setSelected] = useState<Formula | null>(null)

  return (
    <section className="border-b border-border/60 bg-gradient-to-b from-background to-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionTitle
          eyebrow="Nos formules"
          title="Votre déménagement en toute sérénité"
          description="Nous vous accompagnons à chaque étape avec des solutions adaptées à vos besoins et à votre budget. Que vous souhaitiez participer ou nous confier l'intégralité de votre projet, nous avons la formule qu'il vous faut."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {formulas.map((f, i) => (
            <motion.article
              key={f.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease, delay: i * 0.06 }}
              role="button"
              tabIndex={0}
              aria-label={`Demander un devis pour la formule ${f.name}`}
              onClick={() => setSelected(f)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelected(f)
                }
              }}
              className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-sm)] ring-1 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 ${
                f.highlight
                  ? 'ring-2 ring-primary'
                  : 'ring-foreground/10 hover:ring-foreground/20'
              }`}
            >
              {f.badge ? (
                <div
                  className={`absolute top-3 right-3 z-10 flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase backdrop-blur ${
                    f.highlight
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-background/90 text-foreground ring-1 ring-foreground/10'
                  }`}
                >
                  {f.highlight ? <Sparkles className="size-3" /> : null}
                  {f.badge}
                </div>
              ) : null}

              <FormulaCarousel images={f.images} alt={`Formule ${f.name}`} />

              <div className="flex flex-1 flex-col gap-4 p-5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl" aria-hidden>
                      {f.emoji}
                    </span>
                    <h3 className="font-display text-lg leading-tight tracking-tight text-foreground">
                      Formule {f.name}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-primary">{f.tagline}</p>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>

                <ul className="space-y-2 border-t border-border/60 pt-4">
                  {f.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-sm text-foreground/90"
                    >
                      <span
                        className={`mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full ${
                          f.highlight
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-primary/10 text-primary'
                        }`}
                      >
                        <Check className="size-2.5" strokeWidth={3} />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Demander un devis
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3">
          <Button asChild size="lg" variant="outline" className="rounded-full px-8">
            <Link href="/formules">
              Voir le détail des formules
              <ArrowRight className="ml-1 size-4" />
            </Link>
          </Button>
          <p className="text-xs text-muted-foreground">
            Étude personnalisée selon votre formule
          </p>
        </div>
      </div>

      <FormulaQuoteDialog
        formula={selected}
        open={selected !== null}
        onClose={() => setSelected(null)}
      />
    </section>
  )
}
