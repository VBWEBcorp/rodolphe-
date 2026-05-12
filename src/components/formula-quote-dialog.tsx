'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { submitToFormspree } from '@/lib/formspree'
import type { Formula } from '@/lib/formulas'

const ease = [0.22, 1, 0.36, 1] as const

type Props = {
  formula: Formula | null
  open: boolean
  onClose: () => void
}

export function FormulaQuoteDialog({ formula, open, onClose }: Props) {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (open) {
      setSent(false)
      setError(null)
    }
  }, [open, formula?.slug])

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
              {sent ? (
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
                  <div className="mx-auto flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <CheckCircle2 className="size-5" aria-hidden />
                  </div>
                  <p className="mt-3 font-display text-base font-semibold text-foreground">
                    Demande bien envoyée
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Nous vous recontactons sous 24h avec une estimation
                    personnalisée pour votre formule {formula.name}.
                  </p>
                  <Button
                    onClick={onClose}
                    variant="outline"
                    className="mt-5 rounded-full"
                  >
                    Fermer
                  </Button>
                </div>
              ) : (
                <form
                  className="space-y-4"
                  onSubmit={async (e) => {
                    e.preventDefault()
                    if (submitting) return
                    const form = e.currentTarget
                    const formData = new FormData(form)
                    formData.set(
                      '_subject',
                      `Demande de devis — Formule ${formula.name}`
                    )
                    setSubmitting(true)
                    setError(null)
                    try {
                      await submitToFormspree(formData)
                      setSent(true)
                    } catch (err) {
                      setError(
                        err instanceof Error
                          ? err.message
                          : 'Une erreur est survenue. Veuillez réessayer.'
                      )
                    } finally {
                      setSubmitting(false)
                    }
                  }}
                >
                  <input type="hidden" name="Formule" value={formula.name} />

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="formula-firstname"
                        className="text-[11px] font-medium tracking-wider text-foreground/70 uppercase"
                      >
                        Prénom
                      </Label>
                      <Input
                        id="formula-firstname"
                        name="Prénom"
                        required
                        autoComplete="given-name"
                        className="h-10"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="formula-lastname"
                        className="text-[11px] font-medium tracking-wider text-foreground/70 uppercase"
                      >
                        Nom
                      </Label>
                      <Input
                        id="formula-lastname"
                        name="Nom"
                        required
                        autoComplete="family-name"
                        className="h-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="formula-phone"
                      className="text-[11px] font-medium tracking-wider text-foreground/70 uppercase"
                    >
                      Téléphone
                    </Label>
                    <Input
                      id="formula-phone"
                      name="Téléphone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="06 12 34 56 78"
                      className="h-10"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="formula-cartons"
                        className="text-[11px] font-medium tracking-wider text-foreground/70 uppercase"
                      >
                        Nombre de cartons
                      </Label>
                      <Input
                        id="formula-cartons"
                        name="Nombre de cartons"
                        type="number"
                        min={0}
                        required
                        placeholder="0"
                        className="h-10"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="formula-furniture"
                        className="text-[11px] font-medium tracking-wider text-foreground/70 uppercase"
                      >
                        Nombre de meubles
                      </Label>
                      <Input
                        id="formula-furniture"
                        name="Nombre de meubles"
                        type="number"
                        min={0}
                        required
                        placeholder="0"
                        className="h-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="formula-other"
                      className="text-[11px] font-medium tracking-wider text-foreground/70 uppercase"
                    >
                      Autres précisions
                    </Label>
                    <textarea
                      id="formula-other"
                      name="Autres précisions"
                      rows={3}
                      placeholder="Étage, monte-meubles, électroménager, piano…"
                      className="flex w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:outline-none"
                    />
                  </div>

                  {error ? (
                    <p className="rounded-lg bg-destructive/10 px-3 py-2 text-center text-xs text-destructive">
                      {error}
                    </p>
                  ) : null}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="w-full rounded-full"
                  >
                    {submitting ? 'Envoi en cours…' : 'Envoyer la demande'}
                  </Button>

                  <p className="pt-1 text-center text-[11px] text-muted-foreground">
                    Réponse sous 24h · Sans engagement
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
