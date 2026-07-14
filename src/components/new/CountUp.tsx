'use client'

import { useEffect, useRef } from 'react'

interface CountUpProps {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
}

function format(n: number) {
  return Math.round(n).toLocaleString('en-US')
}

export function CountUp({ value, prefix = '', suffix = '', duration = 1600 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          // ease-out quint
          const eased = 1 - Math.pow(1 - t, 5)
          el.textContent = `${prefix}${format(value * eased)}${suffix}`
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, prefix, suffix, duration])

  return (
    <span ref={ref} className="nw-countup">
      {prefix}0{suffix}
    </span>
  )
}
