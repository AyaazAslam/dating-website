import Link from 'next/link'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'dark'
type Size = 'sm' | 'md' | 'lg'

interface SharedProps {
  children: ReactNode
  className?: string
  variant?: Variant
  size?: Size
}

const variants: Record<Variant, string> = {
  primary:
    'bg-[var(--primary)] text-white shadow-[0_12px_30px_rgba(255,61,110,0.35)] hover:bg-[var(--primary-deep)] hover:-translate-y-0.5',
  secondary:
    'bg-white/5 text-white border border-white/15 hover:border-[var(--primary)] hover:bg-white/10',
  ghost: 'bg-transparent text-white/80 hover:bg-white/8 hover:text-white',
  dark: 'bg-[var(--plum)] text-white hover:bg-[var(--plum-deep)] hover:-translate-y-0.5',
}

const sizes: Record<Size, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--page)] disabled:opacity-60 disabled:pointer-events-none'

type ButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'>

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}

interface ButtonLinkProps extends SharedProps {
  href: string
}

export function ButtonLink({
  href,
  children,
  className,
  variant = 'primary',
  size = 'md',
}: ButtonLinkProps) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </Link>
  )
}
