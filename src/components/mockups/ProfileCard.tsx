'use client'

import Image from 'next/image'
import { BadgeCheck, MapPin } from 'lucide-react'
import type { Profile } from '@/types'

export function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <article className="relative aspect-[3/4.15] overflow-hidden rounded-[1.4rem] bg-[#2a1b30]">
      <Image
        src={profile.image}
        alt={`${profile.name}, ${profile.age}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 260px, 280px"
        priority
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-4 pt-16 text-white">
        <div className="mb-2 inline-flex items-center rounded-full bg-[var(--primary)] px-2.5 py-1 text-xs font-bold">
          {profile.compatibility}% match
        </div>
        <h3 className="flex items-center gap-1.5 font-display text-2xl font-semibold">
          {profile.name}, {profile.age}
          {profile.verified ? <BadgeCheck className="h-5 w-5 text-[var(--secondary)]" /> : null}
        </h3>
        <p className="mt-1 flex items-center gap-1 text-sm text-white/80">
          <MapPin className="h-3.5 w-3.5" />
          {profile.city} · {profile.occupation}
        </p>
      </div>
    </article>
  )
}
