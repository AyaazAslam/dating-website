import { AlertTriangle, MapPin, ShieldCheck, UserRound } from 'lucide-react'
import { safetyTips } from '@/data/safety'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer'

const icons = [UserRound, AlertTriangle, MapPin, ShieldCheck]

export function SafetySection() {
  return (
    <section id="safety" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Safety"
          title="Stay safe while you date"
          subtitle="Kundana involves profile browsing and paid unlocks. Be careful, stay honest, and meet in public."
        />

        <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {safetyTips.map((tip, index) => {
            const Icon = icons[index]
            return (
              <StaggerItem key={tip.id}>
                <article className="h-full rounded-[1.4rem] border border-white/10 bg-[var(--surface)] p-5">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--blush)] text-[var(--primary)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">{tip.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{tip.text}</p>
                </article>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-white/50">
          Ntimugire ubwoba — but stay smart. First meetings belong in public places, not private
          homes.
        </p>
      </div>
    </section>
  )
}
