import { faqs } from '@/data/faqs'
import { Accordion } from '@/components/ui/Accordion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FadeIn } from '@/components/animations/FadeIn'

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionHeading
          align="left"
          eyebrow="Support"
          title="Questions? We've Got Answers."
          subtitle="Quick answers about signup, pricing, matching, and privacy."
        />
        <FadeIn>
          <Accordion items={faqs} />
        </FadeIn>
      </div>
    </section>
  )
}
