'use client'

import { useEffect, useRef, useState } from 'react'

const DURATION = 1400
const MORPH_DURATION = 900

export function Loader() {
  const [phase, setPhase] = useState<'loading' | 'morphing' | 'gone'>('loading')
  const [progress, setProgress] = useState(0)
  const logoRef = useRef<HTMLDivElement>(null)
  const skipped = useRef(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      skipped.current = true
      setPhase('gone')
      document.documentElement.classList.add('loader-done')
      return
    }

    document.body.style.overflow = 'hidden'
    let raf = 0
    const start = performance.now()

    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION, 1)
      const eased = t < 0.8 ? t * 1.1 : 0.88 + (t - 0.8) * 0.6
      setProgress(Math.min(100, Math.round(eased * 100)))
      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setProgress(100)
        startMorph()
      }
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      document.body.style.overflow = ''
    }
  }, [])

  function startMorph() {
    const logo = logoRef.current
    if (!logo) return

    const navLogo = document.querySelector('.nav-logo') as HTMLElement
    if (!navLogo) {
      setPhase('gone')
      document.documentElement.classList.add('loader-done')
      document.body.style.overflow = ''
      return
    }

    const logoRect = logo.getBoundingClientRect()
    const navRect = navLogo.getBoundingClientRect()
    const navLogoSize = 48

    const startX = logoRect.left + logoRect.width / 2
    const startY = logoRect.top + logoRect.height / 2
    const endX = navRect.left + navLogoSize / 2
    const endY = navRect.top + navLogoSize / 2

    const dx = endX - startX
    const dy = endY - startY
    const scale = navLogoSize / logoRect.width

    logo.style.transition = `transform ${MORPH_DURATION}ms cubic-bezier(0.76, 0, 0.24, 1), opacity ${MORPH_DURATION * 0.3}ms ${MORPH_DURATION * 0.7}ms ease`
    logo.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`
    logo.style.opacity = '0'

    setPhase('morphing')

    setTimeout(() => {
      setPhase('gone')
      document.documentElement.classList.add('loader-done')
      document.body.style.overflow = ''
    }, MORPH_DURATION)
  }

  useEffect(() => {
    if (phase === 'gone' && !skipped.current) {
      document.body.style.overflow = ''
    }
  }, [phase])

  if (phase === 'gone') return null

  return (
    <div className={`loader ${phase === 'morphing' ? 'is-morphing' : ''}`} aria-hidden="true">
      <div className="loader-inner">
        <div className="loader-logo" ref={logoRef}>
          <svg className="loader-logo-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path
                id="loaderCirclePath"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="nav-logo-circle-text">
              <textPath href="#loaderCirclePath" startOffset="0%">
                Too Lost Music Group - EST 2026 -&nbsp;
              </textPath>
            </text>
          </svg>
        </div>
        <div className="loader-meter">
          <span className="loader-count">{String(progress).padStart(3, '0')}</span>
          <span className="loader-track">
            <span className="loader-fill" style={{ transform: `scaleX(${progress / 100})` }} />
          </span>
        </div>
      </div>
    </div>
  )
}
