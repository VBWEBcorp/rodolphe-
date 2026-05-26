'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'

import { DevisForm } from '@/components/devis-form'
import type { Formula } from '@/lib/formulas'

const ease = [0.22, 1, 0.36, 1] as const

type Props = {
  formula: Formula | null
  open: boolean
  onClose: () => void
}

export function FormulaQuoteDialog({ formula, open, onClose }: Props) {
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && formula ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="formula-dialog-title"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.25, ease }}
            className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-2xl bg-card shadow-[var(--shadow-lg)] ring-1 ring-foreground/10"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer"
              className="absolute top-3 right-3 z-10 flex size-8 items-center justify-center rounded-full bg-background/80 text-foreground/70 ring-1 ring-foreground/10 backdrop-blur transition-colors hover:bg-background hover:text-foreground"
            >
              <X className="size-4" />
            </button>

            <div className="bg-gradient-to-br from-primary/12 via-primary/5 to-transparent px-6 pt-6 pb-5">
              <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                Demande de devis
              </p>
              <h2
                id="formula-dialog-title"
                className="mt-2 font-display text-xl leading-tight tracking-tight text-foreground sm:text-2xl"
              >
                <span className="mr-1.5" aria-hidden>
                  {formula.emoji}
                </span>
                Formule {formula.name}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{formula.tagline}</p>
            </div>

            <div className="p-6 pt-5">
              <DevisForm
                key={formula.slug}
                theme="light"
                hiddenFields={{ Formule: formula.name }}
                subject={`Demande de devis — Formule ${formula.name}`}
                submitLabel="Envoyer ma demande"
                successText={`Merci ! Nous vous recontactons sous 24h avec une estimation personnalisée pour votre formule ${formula.name}.`}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
