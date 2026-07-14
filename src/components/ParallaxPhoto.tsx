'use client'

import { useEffect, useRef } from 'react'

export function ParallaxPhoto({ src, alt }: { src: string; alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const img = imgRef.current
    if (!container || !img) return

    let ticking = false

    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const rect = container!.getBoundingClientRect()
        const windowH = window.innerHeight
        const progress = (windowH - rect.top) / (windowH + rect.height)
        const clamped = Math.max(0, Math.min(1, progress))
        const offset = (clamped - 0.5) * -80
        img!.style.transform = `translateY(${offset}px)`
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="divisions-team-photo" ref={containerRef}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img ref={imgRef} src={src} alt={alt} />
    </div>
  )
}
