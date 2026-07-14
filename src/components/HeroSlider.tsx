'use client'

import { useEffect, useMemo, useState } from 'react'

type Artist = { src: string; name: string }

const ALL_ARTISTS: Artist[] = [
  { src: '/artists/070 Shake.jpg', name: '070 Shake' },
  { src: '/artists/A$AP Ferg.jpg', name: 'A$AP Ferg' },
  { src: '/artists/AlexWarren.jpg', name: 'Alex Warren' },
  { src: '/artists/Flo-Milli.jpg', name: 'Flo Milli' },
  { src: '/artists/Chief Keef.webp', name: 'Chief Keef' },
  { src: '/artists/Ali Gatie.webp', name: 'Ali Gatie' },
  { src: '/artists/teddyswims.jpg', name: 'Teddy Swims' },
  { src: '/artists/Princess Nokia.webp', name: 'Princess Nokia' },
  { src: '/artists/RoyelOtis.jpg', name: 'Royel Otis' },
  { src: '/artists/Dani Leigh.jpg', name: 'Dani Leigh' },
  { src: '/artists/Mach-Hommy.jpeg', name: 'Mach-Hommy' },
  { src: '/artists/currentjoys.jpg', name: 'Current Joys' },
  { src: '/artists/pinksweats.jpeg', name: 'Pink Sweat$' },
  { src: '/artists/Ichiko Aoba.png', name: 'Ichiko Aoba' },
  { src: '/artists/LilTjay.jpg', name: 'Lil Tjay' },
  { src: '/artists/YG.webp', name: 'YG' },
  { src: '/artists/Emei.jpg', name: 'Emei' },
  { src: '/artists/Felly.jpg', name: 'Felly' },
  { src: '/artists/HUGEL.jpg', name: 'HUGEL' },
  { src: '/artists/Leah Kate.webp', name: 'Leah Kate' },
  { src: '/artists/anees.webp', name: 'Anees' },
  { src: '/artists/copeland.webp', name: 'Copeland' },
  { src: '/artists/KIRBY.jpg', name: 'KIRBY' },
  { src: '/artists/Jev.jpeg', name: 'Jev' },
  { src: '/artists/Eric Reprid.jpg', name: 'Eric Reprid' },
  { src: '/artists/The Game.webp', name: 'The Game' },
  { src: '/artists/Smash Mouth.jpeg', name: 'Smash Mouth' },
  { src: '/artists/Jutes.jpg', name: 'Jutes' },
  { src: '/artists/JHIN.webp', name: 'JHIN' },
  { src: '/artists/Foglake.jpg', name: 'Fog Lake' },
  { src: '/artists/Asal.jpg', name: 'Asal' },
  { src: '/artists/Madtsai.jpg', name: 'Madtsai' },
  { src: '/artists/LukeChaing.jpg', name: 'Luke Chiang' },
  { src: '/artists/cecenatalie.webp', name: 'Cece Natalie' },
  { src: '/artists/chaseshakur.jpg', name: 'Chase Shakur' },
  { src: '/artists/Ayesha(1).jpg', name: 'Ayesha Erotica' },
  { src: '/artists/ayybo.jpg', name: 'Ayybo' },
  { src: '/artists/1nonly.jpg', name: '1nonly' },
  { src: '/artists/chrisgray.jpg', name: 'Chris Grey' },
  { src: '/artists/MinatureTigers.jpg', name: 'Miniature Tigers' },
  { src: '/artists/Sydney Ross Mitchell.jpg', name: 'Sydney Ross Mitchell' },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const ROW_SIZES = [9, 8, 8, 8, 8]
const ROW_DURATIONS = [42, 56, 48, 60, 44]
const ROW_OFFSETS = [0, -60, -30, -90, -15]

export function HeroSlider() {
  const [mounted, setMounted] = useState(false)
  const [scrollFade, setScrollFade] = useState(0)

  const rows = useMemo(() => {
    const shuffled = shuffle(ALL_ARTISTS)
    const result: Artist[][] = []
    let cursor = 0
    for (const size of ROW_SIZES) {
      result.push(shuffled.slice(cursor, cursor + size))
      cursor += size
    }
    return result
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    let ticking = false
    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const progress = Math.min(1, window.scrollY / window.innerHeight)
        setScrollFade(progress)
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="hero-mosaic"
      style={{
        opacity: mounted ? 1 - scrollFade * 0.7 : 0,
      }}
    >
      {rows.map((row, rowIdx) => {
        const direction = rowIdx % 2 === 0 ? 'left' : 'right'
        return (
          <div
            key={rowIdx}
            className="hero-mosaic-row"
            data-direction={direction}
            style={{
              animationDuration: `${ROW_DURATIONS[rowIdx]}s`,
              marginLeft: `${ROW_OFFSETS[rowIdx]}px`,
            }}
          >
            {[...row, ...row].map((artist, i) => (
              <figure key={`${artist.src}-${i}`} className="hero-mosaic-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={artist.src}
                  alt={artist.name}
                  draggable={false}
                  loading={rowIdx < 3 ? 'eager' : 'lazy'}
                />
                <figcaption>{artist.name}</figcaption>
              </figure>
            ))}
          </div>
        )
      })}
    </div>
  )
}
