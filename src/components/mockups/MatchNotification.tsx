import Image from 'next/image'
import { heroProfile, profiles } from '@/data/profiles'

export function MatchNotification({ className }: { className?: string }) {
  const second = profiles[4]

  return (
    <div
      className={`rounded-2xl border border-white/15 bg-[#1d1528]/95 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur ${className ?? ''}`}
    >
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--primary)]">
        It is a Match
      </p>
      <div className="mt-2 flex items-center gap-2">
        <div className="flex -space-x-3">
          <Image
            src={heroProfile.image}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-full border-2 border-[#1d1528] object-cover"
          />
          <Image
            src={second.image}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-full border-2 border-[#1d1528] object-cover"
          />
        </div>
        <p className="text-sm font-medium text-white">You and {second.name} liked each other</p>
      </div>
    </div>
  )
}
