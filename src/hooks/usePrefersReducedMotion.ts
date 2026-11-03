'use client'

import { useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'

/** SSR-safe: animations stay off until after hydration. */
export function useCanAnimate() {
  const reduce = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted && !reduce
}
