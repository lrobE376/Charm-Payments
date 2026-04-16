'use client'
// src/hooks/useScrollReveal.ts
import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    let sentinelObserver: IntersectionObserver
    let legacyObserver: IntersectionObserver

    const rafId = requestAnimationFrame(() => {
      const sections = document.querySelectorAll<HTMLElement>('[data-section]')

      sentinelObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            const sentinel = entry.target as HTMLElement
            const section = sentinel.closest<HTMLElement>('[data-section]')
            if (!section) return
            section.querySelectorAll<HTMLElement>('[data-animate]')
              .forEach((el) => el.classList.add('visible'))
            sentinelObserver.unobserve(sentinel)
          })
        },
        { threshold: 0.05 }
      )

      sections.forEach((section) => {
        const sentinel = section.querySelector<HTMLElement>('[data-animate]')
        if (sentinel) sentinelObserver.observe(sentinel)
      })

      legacyObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add('visible')
          })
        },
        { threshold: 0.1 }
      )

      document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
        .forEach((el) => legacyObserver.observe(el))
    })

    return () => {
      cancelAnimationFrame(rafId)
      sentinelObserver?.disconnect()
      legacyObserver?.disconnect()
    }
  }, [])
}
