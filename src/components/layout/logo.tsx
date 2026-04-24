import Link from 'next/link'

import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
  variant?: 'default' | 'dark'
}

export function Logo({ className, variant = 'default' }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="EN PAYS WÊ, Accueil"
      className={cn(
        'group inline-flex items-center transition-opacity hover:opacity-90',
        className
      )}
    >
      <img
        src="/logo-enpayswe.png"
        alt="EN PAYS WÊ · Transport & Déménagement"
        width={160}
        height={160}
        className={cn(
          'h-12 w-auto transition-transform duration-300 group-hover:scale-[1.03] sm:h-14',
          variant === 'dark' && 'brightness-0 invert'
        )}
      />
    </Link>
  )
}
