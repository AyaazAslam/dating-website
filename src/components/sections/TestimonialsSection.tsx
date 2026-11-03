import Image from 'next/image'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer'

export function TestimonialsSection() {
  return (
    <section id="stories" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Love stories"
          title="Real couples. Real love."
          subtitle="Fictional demo stories for this mockup. Not real customer claims."
        />

        <StaggerContainer className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item) => (
            <StaggerItem key={item.id}>
              <blockquote className="flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-[var(--surface)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/40">
                <div
                  className="mb-4 flex gap-1 text-[var(--primary)]"
                  aria-label={`${item.rating} out of 5 stars`}
                >
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="font-display text-lg leading-snug text-white">“{item.quote}”</p>
                <footer className="mt-6 flex items-center gap-3">
                  <Image
                    src={item.avatar}
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">{item.name}</p>
                    <p className="text-xs text-white/50">
                      {item.city} · {item.age} · Demo
                    </p>
                  </div>
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
