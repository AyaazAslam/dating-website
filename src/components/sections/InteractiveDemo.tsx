import { SectionHeading } from '@/components/ui/SectionHeading'
import { FadeIn } from '@/components/animations/FadeIn'
import { PhoneMockup } from '@/components/mockups/PhoneMockup'

export function InteractiveDemo() {
  return (
    <section id="demo" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Product demo"
            title="More Than Just Swiping."
            subtitle="A beautiful experience designed to bring people closer. Try likes, chats, and tabs in this frontend demo."
          />
          <FadeIn className="mt-6 space-y-3 text-sm leading-relaxed text-[var(--muted)]">
            <p>Pass moves to the next profile. Like opens a match modal. Chats switch conversations instantly.</p>
            <p>No backend is connected. Every interaction is a product preview for client review.</p>
          </FadeIn>
        </div>
        <FadeIn variant="scale">
          <PhoneMockup interactive />
        </FadeIn>
      </div>
    </section>
  )
}
