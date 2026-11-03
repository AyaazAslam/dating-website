'use client'

import Image from 'next/image'
import { profiles } from '@/data/profiles'
import { cn } from '@/lib/utils'

const chats = [
  { profile: profiles[0], preview: 'Shall we meet for coffee?', unread: true },
  { profile: profiles[2], preview: 'Your gallery is beautiful', unread: false },
  { profile: profiles[4], preview: 'Good morning', unread: true },
]

export function ChatPreview({
  activeId,
  onSelect,
}: {
  activeId: string
  onSelect: (id: string) => void
}) {
  const active = chats.find((chat) => chat.profile.id === activeId) ?? chats[0]

  return (
    <div className="flex h-full flex-col bg-[#120b16] text-white">
      <div className="border-b border-white/10 px-4 py-3">
        <p className="text-sm font-semibold">Messages</p>
      </div>
      <div className="space-y-1 border-b border-white/10 p-2">
        {chats.map((chat) => (
          <button
            key={chat.profile.id}
            type="button"
            onClick={() => onSelect(chat.profile.id)}
            className={cn(
              'flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left transition',
              active.profile.id === chat.profile.id ? 'bg-white/10' : 'hover:bg-white/5',
            )}
          >
            <Image
              src={chat.profile.image}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="min-w-0 flex-1">
              <span className="flex items-center justify-between gap-2">
                <span className="truncate text-sm font-semibold">{chat.profile.name}</span>
                {chat.unread ? (
                  <span className="h-2 w-2 rounded-full bg-[var(--primary)]" aria-hidden />
                ) : null}
              </span>
              <span className="block truncate text-xs text-white/55">{chat.preview}</span>
            </span>
          </button>
        ))}
      </div>
      <div className="flex flex-1 flex-col justify-end gap-2 p-3">
        <div className="max-w-[80%] self-start rounded-2xl rounded-bl-md bg-white/10 px-3 py-2 text-sm">
          {active.preview}
        </div>
        <div className="max-w-[80%] self-end rounded-2xl rounded-br-md bg-[var(--primary)] px-3 py-2 text-sm">
          That sounds perfect
        </div>
      </div>
    </div>
  )
}
