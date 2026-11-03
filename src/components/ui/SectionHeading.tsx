import { Badge } from './Badge'
import { FadeIn } from '@/components/animations/FadeIn'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <FadeIn
      className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl text-left'}
    >
      {eyebrow ? <Badge className="mb-4">{eyebrow}</Badge> : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-white/65 sm:text-lg">{subtitle}</p>
      ) : null}
    </FadeIn>
  )
}
