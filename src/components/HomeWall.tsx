'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

type Item = { src: string; name?: string }

const ARTISTS: Item[] = [
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

const COVERS: Item[] = Array.from({ length: 18 }, (_, i) => ({
  src: `/toolost-covers/${String(i + 1).padStart(2, '0')}.webp`,
}))

// Interleave covers between portraits so neither clusters on the wall.
const POOL: Item[] = ARTISTS.flatMap((artist, i) =>
  i % 2 === 1 && COVERS[(i - 1) / 2] ? [artist, COVERS[(i - 1) / 2]] : [artist],
)

const TILE_COUNT = 56
const SWAP_INTERVAL = 900

type Tile = { current: number; previous: number | null }

export function HomeWall() {
  const [tiles, setTiles] = useState<Tile[]>(() =>
    Array.from({ length: TILE_COUNT }, (_, i) => ({ current: i, previous: null })),
  )

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let lastSlot = -1

    const id = window.setInterval(() => {
      setTiles((prev) => {
        const shown = new Set(prev.map((t) => t.current))
        const spare = POOL.map((_, i) => i).filter((i) => !shown.has(i))
        if (spare.length === 0) return prev

        let slot = Math.floor(Math.random() * prev.length)
        if (slot === lastSlot) slot = (slot + 1) % prev.length
        lastSlot = slot

        const next = [...prev]
        next[slot] = {
          current: spare[Math.floor(Math.random() * spare.length)],
          previous: prev[slot].current,
        }
        return next
      })
    }, SWAP_INTERVAL)

    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="home-wall">
      {tiles.map((tile, i) => {
        const item = POOL[tile.current]
        const previous = tile.previous === null ? null : POOL[tile.previous]
        return (
          <figure
            key={i}
            className="home-wall-tile"
            style={{ '--i': i } as React.CSSProperties}
          >
            {previous && (
              <Image src={previous.src} alt="" fill sizes="(max-width: 900px) 15vw, 8vw" aria-hidden="true" />
            )}
            <Image
              key={item.src}
              src={item.src}
              alt={item.name ?? ''}
              fill
              sizes="(max-width: 900px) 15vw, 8vw"
              className={previous ? 'is-entering' : undefined}
              preload={i < 28}
              draggable={false}
            />
          </figure>
        )
      })}
    </div>
  )
}
