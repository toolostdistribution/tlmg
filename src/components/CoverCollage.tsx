'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  images: string[]
}

// Fixed scatter positions — each cover gets a unique spot, rotation, and scale.
// Coordinates are % of container; rotation in degrees.
const SCATTER = [
  { x: 2, y: -5, rot: -14, s: 0.9 },
  { x: 18, y: 8, rot: 7, s: 0.75 },
  { x: 35, y: -8, rot: -9, s: 0.85 },
  { x: 52, y: 5, rot: 12, s: 0.7 },
  { x: 68, y: -4, rot: -6, s: 0.9 },
  { x: 84, y: 10, rot: 15, s: 0.72 },
  { x: 8, y: 52, rot: 10, s: 0.78 },
  { x: 26, y: 58, rot: -12, s: 0.85 },
  { x: 42, y: 48, rot: 5, s: 0.7 },
  { x: 60, y: 55, rot: -8, s: 0.82 },
  { x: 76, y: 45, rot: 11, s: 0.76 },
  { x: 92, y: 56, rot: -15, s: 0.68 },
  { x: 5, y: 28, rot: -5, s: 0.65 },
  { x: 45, y: 26, rot: 8, s: 0.62 },
  { x: 72, y: 24, rot: -10, s: 0.7 },
  { x: 90, y: 32, rot: 6, s: 0.65 },
  { x: 22, y: 34, rot: -7, s: 0.6 },
  { x: 58, y: 30, rot: 13, s: 0.58 },
]

export function CoverCollage({ images }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const rafRef = useRef(0)
  const currentRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    let running = true
    const tick = () => {
      if (!running) return
      const cur = currentRef.current
      cur.x += (pointer.x - cur.x) * 0.05
      cur.y += (pointer.y - cur.y) * 0.05
      const el = containerRef.current
      if (el) {
        el.style.setProperty('--px', cur.x.toFixed(4))
        el.style.setProperty('--py', cur.y.toFixed(4))
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      running = false
      cancelAnimationFrame(rafRef.current)
    }
  }, [pointer])

  function handlePointerMove(e: React.PointerEvent) {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    setPointer({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    })
  }

  function handlePointerLeave() {
    setPointer({ x: 0, y: 0 })
  }

  return (
    <div
      ref={containerRef}
      className="division-collage"
      aria-hidden="true"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ '--px': '0', '--py': '0' } as React.CSSProperties}
    >
      {images.map((src, i) => {
        const pos = SCATTER[i % SCATTER.length]
        // Deeper items (higher index) react more to pointer
        const depth = 0.6 + (i / images.length) * 0.8
        return (
          <div
            className="collage-cell"
            key={`${src}-${i}`}
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              '--rot': `${pos.rot}deg`,
              '--s': pos.s,
              '--depth': depth.toFixed(2),
            } as React.CSSProperties}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" draggable={false} />
          </div>
        )
      })}
    </div>
  )
}
