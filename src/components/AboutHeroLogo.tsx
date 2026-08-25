'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import {
  HERO_LOGO_HANDOFF,
  HERO_LOGO_MORPH_DISTANCE,
  HERO_LOGO_RELEASE,
} from './hero-logo-morph'

type Box = { top: number; left: number; size: number }

/** Position of an element's layout box, unaffected by transforms on it or its ancestors. */
function layoutBox(el: HTMLElement): Box {
  let top = 0
  let left = 0
  for (let node: HTMLElement | null = el; node; node = node.offsetParent as HTMLElement | null) {
    top += node.offsetTop
    left += node.offsetLeft
  }
  return { top, left, size: el.offsetWidth }
}

export function AboutHeroLogo() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const scroller = scrollRef.current
    const svg = svgRef.current
    const link = svg?.parentElement
    if (!scroller || !svg || !link) return

    const navLogo = document.querySelector<HTMLElement>('.nav-logo')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // On a client-side navigation the nav logo has been spinning since page load
    // while this one starts from zero, which would jump at the handoff.
    const navSpin = navLogo?.querySelector('svg')?.getAnimations()[0]
    const heroSpin = svg.getAnimations()[0]
    if (navSpin && heroSpin && navSpin.currentTime !== null) {
      heroSpin.currentTime = navSpin.currentTime
    }

    let from = layoutBox(link)
    let to = navLogo ? layoutBox(navLogo) : null

    function render() {
      if (!scroller) return
      const scrolled = window.scrollY
      const progress = scrolled / HERO_LOGO_MORPH_DISTANCE

      if (reduced || !to) {
        scroller.style.opacity = String(Math.max(0, 1 - progress))
        scroller.style.pointerEvents = progress > 0.5 ? 'none' : 'auto'
        return
      }

      // Smoothstep so the logo leaves at page-scroll speed and decelerates into
      // the slot instead of stopping dead.
      const t = Math.min(1, Math.max(0, progress))
      const eased = t * t * (3 - 2 * t)

      const naturalTop = from.top - scrolled
      const dx = (to.left - from.left) * eased
      const dy = (to.top - naturalTop) * eased
      const scale = 1 + (to.size / from.size - 1) * eased

      scroller.style.transform = `translate3d(${dx.toFixed(2)}px, ${dy.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`
      scroller.style.opacity = progress >= HERO_LOGO_RELEASE ? '0' : '1'
      scroller.style.pointerEvents = progress > 0.02 ? 'none' : 'auto'
    }

    let frame = 0
    function onScroll() {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        render()
      })
    }

    function onResize() {
      if (!link) return
      from = layoutBox(link)
      if (navLogo) to = layoutBox(navLogo)
      render()
    }

    render()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div className="about-hero-logo">
      <div className="about-hero-logo-scroll" ref={scrollRef}>
        <Link href="/" aria-label="Too Lost Music Group" className="about-hero-logo-link">
          <svg
            ref={svgRef}
            className="about-hero-logo-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path
                id="heroCirclePath"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="nav-logo-circle-text">
              <textPath href="#heroCirclePath" startOffset="0%">
                Too Lost Music Group - EST 2026 -&nbsp;
              </textPath>
            </text>
          </svg>
        </Link>
      </div>
    </div>
  )
}
