'use client'

import { Check, ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

type Props = {
  name: string
  options: string[]
  placeholder?: string
  id?: string
  /** Ouvre le panneau vers le haut (utile quand le champ est en bas d'une carte) */
  openUp?: boolean
}

export function MultiSelect({
  name,
  options,
  placeholder = 'Sélectionnez…',
  id,
  openUp = false,
}: Props) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string[]>([])
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  function toggle(option: string) {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    )
  }

  const label =
    selected.length === 0
      ? placeholder
      : selected.length === 1
        ? selected[0]
        : `${selected.length} prestations sélectionnées`

  return (
    <div className="relative" ref={ref}>
      {/* Valeur transmise au formulaire (Formspree) */}
      <input type="hidden" name={name} value={selected.join(', ')} />

      <button
        type="button"
        id={id}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex h-10 w-full items-center justify-between gap-2 rounded-xl border border-white/15 bg-white/5 px-3 text-left text-sm text-white transition-colors focus-visible:border-[oklch(0.72_0.18_42)] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[oklch(0.72_0.18_42/0.4)]"
      >
        <span className={selected.length === 0 ? 'truncate text-white/35' : 'truncate'}>
          {label}
        </span>
        <ChevronDown
          className={`size-4 shrink-0 text-white/50 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open ? (
        <div
          role="listbox"
          aria-multiselectable
          className={`absolute left-0 z-30 w-full overflow-hidden rounded-xl border border-white/15 bg-[oklch(0.17_0.05_260)] p-1.5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] ${
            openUp ? 'bottom-full mb-1.5' : 'top-full mt-1.5'
          }`}
        >
          {options.map((option) => {
            const isSelected = selected.includes(option)
            return (
              <button
                key={option}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => toggle(option)}
                className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm text-white/85 transition-colors hover:bg-white/10"
              >
                <span
                  className={`flex size-4 shrink-0 items-center justify-center rounded-[5px] border transition-colors ${
                    isSelected
                      ? 'border-[oklch(0.72_0.2_42)] bg-[oklch(0.72_0.2_42)] text-white'
                      : 'border-white/25'
                  }`}
                >
                  {isSelected ? <Check className="size-3" strokeWidth={3} /> : null}
                </span>
                {option}
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
