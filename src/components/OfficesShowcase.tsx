'use client'

import { useState } from 'react'
import Image from 'next/image'

export interface Office {
  city: string
  country: string
  role: string
  address: string
  lng: number
  lat: number
  photo: string
  hq?: boolean
}

export const offices: Office[] = [
  {
    city: 'New York',
    country: 'United States',
    role: 'Too Lost (HQ)',
    address: '915 Broadway, 8th Floor, New York NY 10010',
    lng: -73.9897,
    lat: 40.7394,
    hq: true,
    photo: '/offices/new-york.jpg',
  },
  {
    city: 'Hollywood',
    country: 'United States',
    role: 'Too Lost',
    address: '1680 Vine Street, 11th Floor, Los Angeles, CA 90028',
    lng: -118.3287,
    lat: 34.1017,
    photo: '/offices/hollywood.jpg',
  },
  {
    city: 'Brisbane',
    country: 'Australia',
    role: 'GYRO.Group',
    address: '279 Brunswick St, Fortitude Valley QLD 4006, Australia',
    lng: 153.0251,
    lat: -27.4698,
    photo: '/offices/brisbane.jpg',
  },
  {
    city: 'Sydney',
    country: 'Australia',
    role: 'GYRO.Group',
    address: '',
    lng: 151.2093,
    lat: -33.8688,
    photo: '/offices/sydney.jpg',
  },
  {
    city: 'Melbourne',
    country: 'Australia',
    role: 'GYRO.Group',
    address: '',
    lng: 144.9631,
    lat: -37.8136,
    photo: '/offices/melbourne.jpg',
  },
  {
    city: 'Manila',
    country: 'Philippines',
    role: 'GYRO.Group',
    address: '',
    lng: 120.9842,
    lat: 14.5995,
    photo: '/offices/manila.jpg',
  },
  {
    city: 'Reykjavík',
    country: 'Iceland',
    role: 'Too Lost',
    address: 'Laugavegur 26, 101 Reykjavík',
    lng: -21.9426,
    lat: 64.1466,
    photo: '/offices/reykjavik.jpg',
  },
  {
    city: 'Mumbai',
    country: 'India',
    role: 'Too Lost',
    address: '',
    lng: 72.8656,
    lat: 19.0596,
    photo: '/offices/mumbai.jpg',
  },
  {
    city: 'São Paulo',
    country: 'Brazil',
    role: 'Too Lost',
    address: '',
    lng: -46.6550,
    lat: -23.5613,
    photo: '/offices/sao-paulo.jpg',
  },
  {
    city: 'Toronto',
    country: 'Canada',
    role: 'GYRO.Group',
    address: '',
    lng: -79.3832,
    lat: 43.6532,
    photo: '/offices/toronto.jpg',
  },
]

export function OfficesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = offices[activeIndex]

  return (
    <div className="offices-showcase-wrap">
      <div className="offices-showcase">
        <div className="offices-featured">
          <div className="offices-featured-img">
            {offices.map((office, i) => (
              <Image
                key={office.city}
                src={office.photo}
                alt={office.city}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                style={{
                  objectFit: 'cover',
                  opacity: i === activeIndex ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                  zIndex: i === activeIndex ? 2 : 1,
                }}
                priority={i === 0}
              />
            ))}
          </div>
          <div className="offices-featured-overlay">
            {active.hq && (
              <span className="offices-featured-badge">HEADQUARTERS</span>
            )}
            <h2 className="offices-featured-city">{active.city}</h2>
            {active.address && <p className="offices-featured-address">{active.address}</p>}
            <p className="offices-featured-role">{active.role}</p>
          </div>
        </div>

        <div className="offices-rest">
          {offices.map((office, i) => (
            <button
              key={office.city}
              type="button"
              className={`offices-rest-card ${i === activeIndex ? 'is-active' : ''}`}
              onClick={() => setActiveIndex(i)}
              onMouseEnter={() => setActiveIndex(i)}
            >
              <div className="offices-rest-img">
                <Image
                  src={office.photo}
                  alt={office.city}
                  width={140}
                  height={100}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div className="offices-rest-info">
                <span className="offices-rest-label">{office.role}</span>
                <h3 className="offices-rest-city">{office.city}</h3>
                <span className="offices-rest-country">{office.country}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
