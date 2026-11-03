'use client'

import Image from 'next/image'
import { gallery } from '@/data/gallery'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer'
import { cn } from '@/lib/utils'

export function LoveGallery() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Atmosphere"
          title="Love Looks Beautiful on Everyone."
          subtitle="A visual moodboard for the Kundana experience."
        />

        <StaggerContainer className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((item) => (
            <StaggerItem key={item.id} className="mb-4 break-inside-avoid">
              <figure
                className={cn(
                  'group relative overflow-hidden rounded-[1.4rem]',
                  item.tall ? 'aspect-[3/4.2]' : 'aspect-[4/3.2]',
                )}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-[rgba(33,24,39,0.75)] via-transparent to-transparent p-4 opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="text-sm font-semibold text-white">{item.caption}</span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
