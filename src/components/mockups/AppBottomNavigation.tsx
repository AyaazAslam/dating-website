'use client'

import { Compass, Heart, MessageCircle, UserRound } from 'lucide-react'
import { cn } from '@/lib/utils'

export type AppTab = 'discover' | 'explore' | 'chats' | 'me'

const tabs: { id: AppTab; label: string; icon: typeof Heart }[] = [
  { id: 'discover', label: 'Discover', icon: Heart },
  { id: 'explore', label: 'Explore', icon: Compass },
  { id: 'chats', label: 'Chats', icon: MessageCircle },
  { id: 'me', label: 'Me', icon: UserRound },
]

export function AppBottomNavigation({
  active,
  onChange,
}: {
  active: AppTab
  onChange: (tab: AppTab) => void
}) {
  return (
    <nav className="grid grid-cols-4 gap-1 border-t border-white/10 bg-[#1b1220] px-2 py-2" aria-label="App tabs">
      {tabs.map((tab) => {
        const Icon = tab.icon
        const isActive = active === tab.id
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={cn(
              'flex flex-col items-center gap-1 rounded-xl px-1 py-2 text-[10px] font-semibold transition',
              isActive ? 'bg-white/10 text-[var(--secondary)]' : 'text-white/55 hover:text-white',
            )}
          >
            <Icon className="h-4 w-4" />
            {tab.label}
          </button>
        )
      })}
    </nav>
  )
}
