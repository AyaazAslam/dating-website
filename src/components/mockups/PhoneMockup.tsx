'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Heart, Star, X } from 'lucide-react'
import { useState } from 'react'
import { profiles } from '@/data/profiles'
import { AppBottomNavigation, type AppTab } from './AppBottomNavigation'
import { ChatPreview } from './ChatPreview'
import { ProfileCard } from './ProfileCard'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'
import { SITE } from '@/lib/constants'

export function PhoneMockup({ interactive = false }: { interactive?: boolean }) {
  const [index, setIndex] = useState(0)
  const [liked, setLiked] = useState(false)
  const [matchOpen, setMatchOpen] = useState(false)
  const [tab, setTab] = useState<AppTab>('discover')
  const [chatId, setChatId] = useState(profiles[0].id)
  const reduce = useReducedMotion()
  const profile = profiles[index % profiles.length]

  function nextProfile() {
    setLiked(false)
    setIndex((value) => (value + 1) % profiles.length)
  }

  function onLike() {
    setLiked(true)
    if (interactive) setMatchOpen(true)
  }

  return (
    <>
      <motion.div
        className="relative mx-auto w-[min(100%,290px)]"
        initial={reduce ? false : { opacity: 0, scale: 0.94, y: 18 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="overflow-hidden rounded-[2rem] border border-white/20 bg-[#120b16] p-2 shadow-[0_30px_80px_rgba(99,43,120,0.35)]">
          <div className="mx-auto mb-2 h-4 w-24 rounded-b-2xl bg-black/80" />
          <div className="overflow-hidden rounded-[1.55rem] bg-[#1b1220]">
            <div className="flex items-center justify-between px-4 py-3 text-white">
              <div>
                <p className="font-display text-lg font-semibold tracking-tight">{SITE.name}</p>
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/45">Demo app</p>
              </div>
              <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <Heart className="h-4 w-4 text-[var(--secondary)]" />
                <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-[var(--primary)]" />
              </span>
            </div>

            <div className="min-h-[390px]">
              {tab === 'chats' ? (
                <ChatPreview activeId={chatId} onSelect={setChatId} />
              ) : tab === 'me' ? (
                <div className="space-y-3 p-4 text-white">
                  <p className="text-sm text-white/60">Your profile</p>
                  <p className="font-display text-2xl font-semibold">Ready to meet someone?</p>
                  <p className="text-sm text-white/70">
                    Registration is {SITE.registrationFee.toLocaleString('en-BI')} {SITE.currency} · 18+
                  </p>
                </div>
              ) : tab === 'explore' ? (
                <div className="grid grid-cols-2 gap-2 p-3">
                  {profiles.slice(0, 4).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setIndex(profiles.findIndex((p) => p.id === item.id))
                        setTab('discover')
                      }}
                      className="overflow-hidden rounded-2xl"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.image} alt={item.name} className="aspect-[3/4] w-full object-cover" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="space-y-3 p-3">
                  <ProfileCard profile={profile} />
                  {interactive ? (
                    <div className="flex items-center justify-center gap-3 pb-1">
                      <button
                        type="button"
                        aria-label="Pass"
                        onClick={nextProfile}
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--ink)] shadow-lg transition hover:scale-105"
                      >
                        <X className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        aria-label="Super like"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--plum)] text-white shadow-lg transition hover:scale-105"
                      >
                        <Star className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        aria-label="Like"
                        onClick={onLike}
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)] text-white shadow-lg transition hover:scale-105"
                      >
                        <Heart className={`h-5 w-5 ${liked ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  ) : null}
                </div>
              )}
            </div>

            <AppBottomNavigation active={tab} onChange={setTab} />
          </div>
        </div>
      </motion.div>

      <Modal open={matchOpen} onClose={() => setMatchOpen(false)} title="It is a Match">
        <p className="text-[var(--muted)]">
          You and {profile.name} liked each other. This is a frontend demo only.
        </p>
        <div className="mt-5 flex gap-3">
          <Button
            className="flex-1"
            onClick={() => {
              setMatchOpen(false)
              setTab('chats')
            }}
          >
            Open chat
          </Button>
          <Button
            variant="secondary"
            className="flex-1"
            onClick={() => {
              setMatchOpen(false)
              nextProfile()
            }}
          >
            Keep browsing
          </Button>
        </div>
      </Modal>
    </>
  )
}
