'use client'

import { useEffect, useState } from 'react'

const CITIES = [
  { city: 'New York', zone: 'America/New_York', label: 'HQ' },
  { city: 'Los Angeles', zone: 'America/Los_Angeles' },
  { city: 'Toronto', zone: 'America/Toronto' },
  { city: 'São Paulo', zone: 'America/Sao_Paulo' },
  { city: 'Reykjavík', zone: 'Atlantic/Reykjavik' },
  { city: 'Brisbane', zone: 'Australia/Brisbane' },
  { city: 'Sydney', zone: 'Australia/Sydney' },
  { city: 'Melbourne', zone: 'Australia/Melbourne' },
  { city: 'Manila', zone: 'Asia/Manila' },
  { city: 'Mumbai', zone: 'Asia/Kolkata' },
]

function timeIn(zone: string, withSeconds = false) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: zone,
    hour: '2-digit',
    minute: '2-digit',
    ...(withSeconds ? { second: '2-digit' } : {}),
    hour12: false,
  }).format(new Date())
}

export function WorldClocks() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="nw-clocks" role="list" aria-label="Office local times">
      {CITIES.map((c) => (
        <div className="nw-clock" role="listitem" key={c.city}>
          <span className="nw-clock-city">
            {c.city}
            {c.label && <em>{c.label}</em>}
          </span>
          <span className="nw-clock-time" suppressHydrationWarning>
            {now ? timeIn(c.zone) : '––:––'}
          </span>
        </div>
      ))}
    </div>
  )
}
