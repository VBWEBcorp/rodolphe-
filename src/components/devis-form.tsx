'use client'

import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { submitToFormspree } from '@/lib/formspree'
import { siteConfig } from '@/lib/seo'
import { cn } from '@/lib/utils'

type Theme = 'dark' | 'light'

type Props = {
  theme?: Theme
  /** Objet de l'email envoyé via Formspree */
  subject: string
  /** Champs cachés transmis tels quels (ex. { Formule: 'Confort' }) */
  hiddenFields?: Record<string, string>
  submitLabel?: string
  successTitle?: string
  successText?: string
  className?: string
}

/**
 * Formulaire de demande de devis détaillé, partagé par toutes les pages
 * (accueil, contact, popup formule) pour garantir des champs identiques partout.
 * Deux habillages : `dark` (sur fond sombre) et `light` (sur carte claire).
 */
export function DevisForm({
  theme = 'dark',
  subject,
  hiddenFields,
  submitLabel = 'Envoyer ma demande',
  successTitle = 'Demande bien envoyée',
  successText = 'Merci ! On vous recontacte sous 24h avec une estimation claire et gratuite.',
  className,
}: Props) {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const dark = theme === 'dark'

  const labelClass = dark
    ? 'text-[11px] font-medium uppercase tracking-wider text-white/60'
    : 'text-[11px] font-medium uppercase tracking-wider text-foreground/70'

  // Base commune aux champs texte/date
  const fieldClass = dark
    ? 'h-11 w-full rounded-xl border border-white/15 bg-white/5 text-white placeholder:text-white/35 focus-visible:border-[oklch(0.72_0.18_42)] focus-visible:ring-[oklch(0.72_0.18_42/0.4)]'
    : 'h-10 w-full rounded-lg border border-input bg-transparent placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/40'

  // Le <select> a besoin d'un fond OPAQUE, sinon le menu déroulant natif
  // s'affiche en blanc sur blanc (illisible). On force aussi la couleur des
  // <option> via `optionStyle` pour une lisibilité garantie sur tous les navigateurs.
  const selectClass = dark
    ? 'h-11 w-full rounded-xl border border-white/15 bg-[oklch(0.21_0.05_260)] px-3 text-sm text-white focus-visible:border-[oklch(0.72_0.18_42)] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[oklch(0.72_0.18_42/0.4)] [color-scheme:dark]'
    : 'h-10 w-full rounded-lg border border-input bg-white px-3 text-sm text-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40'

  const optionStyle = dark
    ? { backgroundColor: '#1c1830', color: '#ffffff' }
    : { backgroundColor: '#ffffff', color: '#111827' }

  const textareaClass = dark
    ? 'w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-sm leading-relaxed text-white transition-colors placeholder:text-white/35 focus-visible:border-[oklch(0.72_0.18_42)] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[oklch(0.72_0.18_42/0.4)]'
    : 'w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm leading-relaxed shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40'

  const sectionLabelClass = dark
    ? 'text-[11px] font-semibold uppercase tracking-[0.18em] text-[oklch(0.88_0.14_42)]'
    : 'text-[11px] font-semibold uppercase tracking-[0.18em] text-primary'

  const dividerClass = dark ? 'border-white/10' : 'border-border'
  const phoneLinkClass = dark
    ? 'text-[11px] text-white/45'
    : 'text-[11px] text-muted-foreground'

  if (sent) {
    return dark ? (
      <div
        className={cn(
          'rounded-2xl border border-[oklch(0.72_0.18_42/0.3)] bg-[oklch(0.72_0.18_42/0.1)] p-8 text-center',
          className
        )}
      >
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[oklch(0.72_0.2_42)] text-white shadow-lg">
          <CheckCircle2 className="size-6" aria-hidden />
        </div>
        <p className="mt-4 font-display text-base font-semibold text-white">
          {successTitle}
        </p>
        <p className="mt-1.5 text-sm text-white/70">{successText}</p>
      </div>
    ) : (
      <div
        className={cn(
          'rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center',
          className
        )}
      >
        <div className="mx-auto flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <CheckCircle2 className="size-5" aria-hidden />
        </div>
        <p className="mt-3 font-display text-base font-semibold text-foreground">
          {successTitle}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">{successText}</p>
      </div>
    )
  }

  return (
    <form
      className={cn('space-y-4', className)}
      onSubmit={async (e) => {
        e.preventDefault()
        if (submitting) return
        const formData = new FormData(e.currentTarget)
        formData.set('_subject', subject)
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
      {hiddenFields
        ? Object.entries(hiddenFields).map(([name, value]) => (
            <input key={name} type="hidden" name={name} value={value} />
          ))
        : null}

      {/* Civilité + type de déménagement */}
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label htmlFor="devis-civilite" className={labelClass}>
            Je suis
          </Label>
          <select
            id="devis-civilite"
            name="Civilité"
            required
            defaultValue=""
            className={selectClass}
          >
            <option value="" disabled style={optionStyle}>
              Sélectionnez…
            </option>
            <option value="M." style={optionStyle}>
              M.
            </option>
            <option value="Mme" style={optionStyle}>
              Mme
            </option>
          </select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="devis-type" className={labelClass}>
            Je souhaite déménager
          </Label>
          <select
            id="devis-type"
            name="Type de déménagement"
            required
            defaultValue=""
            className={selectClass}
          >
            <option value="" disabled style={optionStyle}>
              Sélectionnez…
            </option>
            <option value="Un domicile" style={optionStyle}>
              Un domicile
            </option>
            <option value="Une entreprise" style={optionStyle}>
              Une entreprise
            </option>
          </select>
        </div>
      </div>

      {/* Période souhaitée */}
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label htmlFor="devis-date-debut" className={labelClass}>
            Entre le
          </Label>
          <Input
            id="devis-date-debut"
            name="Déménagement au plus tôt"
            type="date"
            className={cn(fieldClass, dark && '[color-scheme:dark]')}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="devis-date-fin" className={labelClass}>
            Et le
          </Label>
          <Input
            id="devis-date-fin"
            name="Déménagement au plus tard"
            type="date"
            className={cn(fieldClass, dark && '[color-scheme:dark]')}
          />
        </div>
      </div>

      {/* Chargement (départ) */}
      <div className={cn('space-y-3 border-t pt-4', dividerClass)}>
        <p className={sectionLabelClass}>Chargement du déménagement</p>
        <div className="space-y-1.5">
          <Label htmlFor="devis-depart" className={labelClass}>
            Adresse de départ
          </Label>
          <textarea
            id="devis-depart"
            name="Adresse de départ"
            rows={2}
            required
            placeholder="N°, rue, code postal, ville"
            className={textareaClass}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="devis-depart-infos" className={labelClass}>
            Indications départ
          </Label>
          <Input
            id="devis-depart-infos"
            name="Indications départ"
            placeholder="Étage, ascenseur, stationnement…"
            className={fieldClass}
          />
        </div>
      </div>

      {/* Livraison (arrivée) */}
      <div className={cn('space-y-3 border-t pt-4', dividerClass)}>
        <p className={sectionLabelClass}>Livraison du déménagement</p>
        <div className="space-y-1.5">
          <Label htmlFor="devis-arrivee" className={labelClass}>
            Adresse d&apos;arrivée
          </Label>
          <textarea
            id="devis-arrivee"
            name="Adresse d'arrivée"
            rows={2}
            required
            placeholder="N°, rue, code postal, ville"
            className={textareaClass}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="devis-arrivee-infos" className={labelClass}>
            Indications arrivée
          </Label>
          <Input
            id="devis-arrivee-infos"
            name="Indications arrivée"
            placeholder="Étage, ascenseur, stationnement…"
            className={fieldClass}
          />
        </div>
      </div>

      {/* Coordonnées */}
      <div className={cn('space-y-4 border-t pt-4', dividerClass)}>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <Label htmlFor="devis-prenom" className={labelClass}>
              Prénom
            </Label>
            <Input
              id="devis-prenom"
              name="Prénom"
              required
              autoComplete="given-name"
              placeholder="Jean"
              className={fieldClass}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="devis-nom" className={labelClass}>
              Nom
            </Label>
            <Input
              id="devis-nom"
              name="Nom"
              required
              autoComplete="family-name"
              placeholder="Dupont"
              className={fieldClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <Label htmlFor="devis-tel" className={labelClass}>
              Téléphone
            </Label>
            <Input
              id="devis-tel"
              name="Téléphone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="06 12 34 56 78"
              className={fieldClass}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="devis-email" className={labelClass}>
              Email
            </Label>
            <Input
              id="devis-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="jean@exemple.fr"
              className={fieldClass}
            />
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <Label htmlFor="devis-message" className={labelClass}>
          Un message complémentaire ?
        </Label>
        <textarea
          id="devis-message"
          name="Message complémentaire"
          rows={3}
          placeholder="Volume, objets fragiles, monte-meubles, piano…"
          className={textareaClass}
        />
      </div>

      {error ? (
        <p
          className={cn(
            'rounded-lg px-3 py-2 text-center text-xs',
            dark ? 'bg-red-500/15 text-red-200' : 'bg-destructive/10 text-destructive'
          )}
        >
          {error}
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className={cn(
          'group w-full',
          dark
            ? 'bg-[oklch(0.68_0.2_42)] text-white shadow-[0_10px_30px_-10px_oklch(0.68_0.2_42/0.8)] hover:bg-[oklch(0.62_0.2_42)]'
            : 'rounded-full'
        )}
      >
        {submitting ? 'Envoi en cours…' : submitLabel}
        {!submitting ? (
          <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
        ) : null}
      </Button>

      <p className={cn('pt-1 text-center', phoneLinkClass)}>
        Ou appelez-nous directement au{' '}
        <a
          href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
          className={cn(
            'font-semibold underline-offset-2 hover:underline',
            dark ? 'text-white/80' : 'text-foreground/80'
          )}
        >
          {siteConfig.phone}
        </a>
      </p>
    </form>
  )
}
