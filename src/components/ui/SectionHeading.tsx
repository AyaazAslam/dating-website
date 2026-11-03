import { Badge } from './Badge'
import { RevealText } from '@/components/animations/RevealText'

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
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl text-left'}>
      {eyebrow ? <Badge className="mb-4">{eyebrow}</Badge> : null}
      <RevealText
        text={title}
        className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl md:text-5xl"
      />
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  )
}
