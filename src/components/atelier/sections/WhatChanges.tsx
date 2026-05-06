// src/components/atelier/sections/WhatChanges.tsx
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Container } from '@/components/atelier/Container'
import { EyebrowTag } from '@/components/atelier/EyebrowTag'
import { SpecCard } from '@/components/atelier/SpecCard'
import { cn } from '@/lib/utils'
import { prefersReducedMotion } from '@/lib/motion'

export function WhatChanges() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardWrapRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const section = sectionRef.current
    if (!section) return
    const els = cardWrapRefs.current.filter(Boolean) as HTMLDivElement[]
    if (els.length === 0) return

    if (prefersReducedMotion()) {
      els.forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      })
      return
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    })

    tl.fromTo(
      els,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.08 },
    )

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  const wrap = (id: string, i: number, node: React.ReactNode) => (
    <div
      key={id}
      ref={(el) => {
        cardWrapRefs.current[i] = el
      }}
      style={{ opacity: 0 }}
    >
      {node}
    </div>
  )

  const FooterLabel = ({ text }: { text: string }) => (
    <div
      className={cn(
        'font-atelierMono text-[10px] uppercase tracking-label',
        'text-atelier-gold/80 pt-2',
      )}
    >
      {text}
    </div>
  )

  return (
    <section
      ref={sectionRef}
      id="what-changes"
      className="bg-white py-9 px-lg"
    >
      <Container>
        <div className="mb-2xl">
          <EyebrowTag section="§04" label="WHAT CHANGES" />
          <h2
            className={cn(
              'mt-base font-atelierSerif text-3xl md:text-4xl font-medium',
              'leading-tight tracking-[-0.025em] text-atelier-ink',
              'max-w-3xl',
            )}
          >
            Run every payment channel{' '}
            <em className="italic text-atelier-forest">without juggling</em>{' '}
            processors.
          </h2>
          <p className="text-base text-black/70 max-w-2xl mt-md leading-relaxed">
            One merchant account covers every channel — register, website,
            phone orders, and recurring billing — with unified reporting and no
            extra processors to manage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-base">
          {wrap(
            'virtual-terminal',
            0,
            <SpecCard
              title="Virtual Terminal"
              description="Key in card and ACH payments from any browser — perfect for phone and mail orders."
            />,
          )}

          {wrap(
            'ecommerce-gateway',
            1,
            <SpecCard
              variant="code"
              title="E-Commerce Gateway"
              code={
                <>
                  <span className="text-atelier-gold/85">{'// React · 1 component'}</span>
                  {'\n'}
                  <span className="text-atelier-gold">import</span>{' '}
                  <span>{'{ Charm }'}</span>{' '}
                  <span className="text-atelier-gold">from</span>{' '}
                  <span className="text-atelier-cream">{"'@charm/react'"}</span>
                  {'\n'}
                  <span>{'<'}</span>
                  <span className="text-atelier-gold">Charm.Checkout</span>{' '}
                  <span>amount=</span>
                  <span className="text-atelier-cream">{'{1420}'}</span>
                  <span>{' />'}</span>
                </>
              }
            >
              <FooterLabel text="200+ INTEGRATIONS · DROP-IN" />
            </SpecCard>,
          )}

          {wrap(
            'ach',
            2,
            <SpecCard
              title="ACH Processing"
              description="Accept large invoices by bank transfer — costs less than cards, settles predictably, fully reported."
            />,
          )}

          {wrap(
            'fraud-protection',
            3,
            <SpecCard
              title="Fraud Protection"
              description="iSpyFraud rules, tokenization, and 3D Secure aligned to your risk profile."
            />,
          )}

          {wrap(
            'recurring-billing',
            4,
            <SpecCard
              variant="code"
              title="Recurring Billing"
              code={
                <>
                  <span className="text-atelier-gold/85">{'// charge.failed → retry'}</span>
                  {'\n'}
                  <span className="text-atelier-gold">on</span>
                  <span>{'('}</span>
                  <span className="text-atelier-cream">{"'charge.failed'"}</span>
                  <span>{', '}</span>
                  <span className="text-atelier-gold">async</span>{' '}
                  <span>{'e => {'}</span>
                  {'\n'}
                  {'  '}
                  <span className="text-atelier-gold">await</span>{' '}
                  <span>{'charm.retry(e.id)'}</span>
                  {'\n'}
                  <span>{'})'}</span>
                </>
              }
            >
              <FooterLabel text="SMART RETRIES · BUILT-IN" />
            </SpecCard>,
          )}

          {wrap(
            'reporting',
            5,
            <SpecCard
              title="Real-Time Reporting"
              description="See every transaction, batch, and settlement in real time — no more guessing where your money is between statements."
            />,
          )}
        </div>

        <div className="text-center mt-2xl flex flex-wrap gap-sm justify-center">
          <a
            href="/apply"
            className={cn(
              'inline-flex items-center gap-xs',
              'bg-atelier-ink text-atelier-cream',
              'px-md py-sm text-sm font-medium rounded-atelierXs',
              'hover:opacity-90 transition-opacity',
              'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
            )}
          >
            Get My Free Audit
          </a>
          <a
            href="/quote"
            className={cn(
              'inline-flex items-center px-md py-sm text-sm',
              'border border-atelier-ink/30 text-atelier-ink rounded-atelierXs',
              'hover:border-atelier-ink/60 transition-colors',
              'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
            )}
          >
            Free Rate Audit
          </a>
        </div>
      </Container>
    </section>
  )
}
