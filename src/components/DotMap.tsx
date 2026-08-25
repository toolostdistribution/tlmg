'use client'

import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

interface OfficeLocation {
  city: string
  country: string
  role: string
  lng: number
  lat: number
  address: string
  photo: string
}

const OFFICES: OfficeLocation[] = [
  { city: 'New York', country: 'United States', role: 'Too Lost (HQ)', lng: -73.9897, lat: 40.7394, address: '915 Broadway, 8th Floor, New York NY 10010', photo: '/offices/new-york.jpg' },
  { city: 'Hollywood', country: 'United States', role: 'Too Lost', lng: -118.3287, lat: 34.1017, address: '1680 Vine Street, 11th Floor, Los Angeles, CA 90028', photo: '/offices/hollywood.jpg' },
  { city: 'Reykjavík', country: 'Iceland', role: 'Too Lost', lng: -21.9426, lat: 64.1466, address: 'Laugavegur 26, 101 Reykjavík', photo: '/offices/reykjavik.jpg' },
  { city: 'Brisbane', country: 'Australia', role: 'GYRO.Group', lng: 153.0251, lat: -27.4698, address: '279 Brunswick St, Fortitude Valley QLD 4006', photo: '/offices/brisbane.jpg' },
  { city: 'Sydney', country: 'Australia', role: 'GYRO.Group', lng: 151.2093, lat: -33.8688, address: '', photo: '/offices/sydney.jpg' },
  { city: 'Melbourne', country: 'Australia', role: 'GYRO.Group', lng: 144.9631, lat: -37.8136, address: '', photo: '/offices/melbourne.jpg' },
  { city: 'Manila', country: 'Philippines', role: 'GYRO.Group', lng: 120.9842, lat: 14.5995, address: '', photo: '/offices/manila.jpg' },
  { city: 'Mumbai', country: 'India', role: 'GYRO.Group', lng: 72.8656, lat: 19.0596, address: '', photo: '/offices/mumbai.jpg' },
  { city: 'São Paulo', country: 'Brazil', role: 'GYRO.Group', lng: -46.6550, lat: -23.5613, address: '', photo: '/offices/sao-paulo.jpg' },
  { city: 'Toronto', country: 'Canada', role: 'GYRO.Group', lng: -79.3832, lat: 43.6532, address: '', photo: '/offices/toronto.jpg' },
]

function createDotPatternImage(size: number, dotRadius: number, color: [number, number, number, number]): ImageData {
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!
  ctx.clearRect(0, 0, size, size)
  ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3] / 255})`
  ctx.beginPath()
  ctx.arc(size / 2, size / 2, dotRadius, 0, Math.PI * 2)
  ctx.fill()
  return ctx.getImageData(0, 0, size, size)
}

export function DotMap() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [activeOffice, setActiveOffice] = useState(0)
  // Mapbox GL throws when the browser has no working WebGL context. Without
  // this the exception escapes to the router error boundary and blanks the page.
  const [mapAvailable, setMapAvailable] = useState(true)

  function selectOffice(index: number) {
    setActiveOffice(index)
    const office = OFFICES[index]
    map.current?.panTo([office.lng, office.lat], { duration: 800 })
  }

  useEffect(() => {
    const m = map.current
    if (!m || !m.isStyleLoaded()) return

    const activeCity = OFFICES[activeOffice].city

    m.setPaintProperty('offices-dot', 'circle-opacity', [
      'case', ['==', ['get', 'city'], activeCity], 1, 0.3
    ])
    m.setPaintProperty('offices-pulse', 'circle-opacity', [
      'case', ['==', ['get', 'city'], activeCity], 0.2, 0
    ])
    m.setPaintProperty('offices-labels', 'text-opacity', [
      'case', ['==', ['get', 'city'], activeCity], 1, 0.4
    ])
    m.setPaintProperty('offices-sublabels', 'text-opacity', [
      'case', ['==', ['get', 'city'], activeCity], 1, 0.3
    ])
  }, [activeOffice])

  useEffect(() => {
    if (!mapContainer.current || map.current) return

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ''

    const isDark = !document.documentElement.classList.contains('light-mode')
    const bgColor = isDark ? '#0a0a0a' : '#ffffff'
    const markerColor = isDark ? '#ffffff' : '#000000'
    const labelColor = isDark ? 'rgba(255,255,255,0.9)' : '#000000'
    const dotColorRgba: [number, number, number, number] = isDark
      ? [255, 255, 255, 70]
      : [0, 0, 0, 50]

    const mapOptions: mapboxgl.MapOptions = {
      container: mapContainer.current,
      style: {
        version: 8,
        name: 'Dot Matrix',
        sources: {},
        layers: [
          {
            id: 'background',
            type: 'background',
            paint: { 'background-color': bgColor },
          },
        ],
        glyphs: 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf',
      },
      center: [OFFICES[0].lng, OFFICES[0].lat],
      zoom: 1.15,
      minZoom: 1.15,
      maxZoom: 1.15,
      projection: 'mercator',
      interactive: true,
      scrollZoom: false,
      dragPan: true,
      dragRotate: false,
      touchZoomRotate: false,
      doubleClickZoom: false,
      boxZoom: false,
      pitchWithRotate: false,
      attributionControl: false,
    }

    try {
      map.current = new mapboxgl.Map(mapOptions)
    } catch {
      setMapAvailable(false)
      return
    }

    map.current.on('load', () => {
      const m = map.current!

      const logo = mapContainer.current?.querySelector('.mapboxgl-ctrl-logo')
      if (logo) (logo as HTMLElement).style.display = 'none'
      const attrib = mapContainer.current?.querySelector('.mapboxgl-ctrl-attrib')
      if (attrib) (attrib as HTMLElement).style.display = 'none'

      const patternSize = 6
      const imageData = createDotPatternImage(patternSize, 1.2, dotColorRgba)
      m.addImage('dot-pattern', { width: patternSize, height: patternSize, data: new Uint8Array(imageData.data.buffer) })

      m.addSource('countries', {
        type: 'vector',
        url: 'mapbox://mapbox.country-boundaries-v1',
      })

      m.addLayer({
        id: 'land-dots',
        type: 'fill',
        source: 'countries',
        'source-layer': 'country_boundaries',
        paint: {
          'fill-pattern': 'dot-pattern',
          'fill-opacity': 1,
        },
      })

      m.addSource('offices', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: OFFICES.map((office) => ({
            type: 'Feature' as const,
            properties: { city: office.city, country: office.country, role: office.role },
            geometry: { type: 'Point' as const, coordinates: [office.lng, office.lat] },
          })),
        },
      })

      m.addLayer({
        id: 'offices-pulse',
        type: 'circle',
        source: 'offices',
        paint: {
          'circle-radius': 14,
          'circle-color': markerColor,
          'circle-opacity': ['case', ['==', ['get', 'city'], OFFICES[0].city], 0.2, 0],
          'circle-blur': 0.8,
        },
      })

      m.addLayer({
        id: 'offices-dot',
        type: 'circle',
        source: 'offices',
        paint: {
          'circle-radius': 5,
          'circle-color': markerColor,
          'circle-opacity': ['case', ['==', ['get', 'city'], OFFICES[0].city], 1, 0.3],
          'circle-stroke-width': 2,
          'circle-stroke-color': bgColor,
        },
      })

      m.addLayer({
        id: 'offices-labels',
        type: 'symbol',
        source: 'offices',
        layout: {
          'text-field': ['get', 'city'],
          'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
          'text-size': 11,
          'text-offset': [0, -1.6],
          'text-anchor': 'bottom',
          'text-allow-overlap': true,
        },
        paint: {
          'text-color': labelColor,
          'text-halo-color': bgColor,
          'text-halo-width': 2,
          'text-opacity': ['case', ['==', ['get', 'city'], OFFICES[0].city], 1, 0.4],
        },
      })

      m.addLayer({
        id: 'offices-sublabels',
        type: 'symbol',
        source: 'offices',
        layout: {
          'text-field': ['get', 'country'],
          'text-font': ['DIN Pro Regular', 'Arial Unicode MS Regular'],
          'text-size': 9.5,
          'text-offset': [0, 1.5],
          'text-anchor': 'top',
          'text-allow-overlap': true,
        },
        paint: {
          'text-color': isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
          'text-halo-color': bgColor,
          'text-halo-width': 1.5,
          'text-opacity': ['case', ['==', ['get', 'city'], OFFICES[0].city], 1, 0.3],
        },
      })

      m.on('click', 'offices-dot', (e) => {
        if (e.features?.[0]) {
          const city = e.features[0].properties?.city
          const idx = OFFICES.findIndex(o => o.city === city)
          if (idx >= 0) selectOffice(idx)
        }
      })

      m.on('click', 'offices-pulse', (e) => {
        if (e.features?.[0]) {
          const city = e.features[0].properties?.city
          const idx = OFFICES.findIndex(o => o.city === city)
          if (idx >= 0) selectOffice(idx)
        }
      })

      m.on('mouseenter', 'offices-dot', () => {
        m.getCanvas().style.cursor = 'pointer'
      })
      m.on('mouseleave', 'offices-dot', () => {
        m.getCanvas().style.cursor = ''
      })
    })

    return () => {
      map.current?.remove()
      map.current = null
    }
  }, [])

  const highlighted = OFFICES[activeOffice]

  return (
    <div className="dot-map-wrap">
      <div className={`dot-map-top ${mapAvailable ? '' : 'dot-map-top--no-map'}`}>
        {mapAvailable && <div ref={mapContainer} className="dot-map" />}
        <div className="dot-map-highlight">
          <div className="dot-map-highlight-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={highlighted.photo} alt={highlighted.city} key={highlighted.city} />
          </div>
          <div className="dot-map-highlight-info">
            <h3 className="dot-map-highlight-city">{highlighted.city}</h3>
            <p className="dot-map-highlight-country">{highlighted.country}</p>
            <p className="dot-map-highlight-role">{highlighted.role}</p>
            {highlighted.address && <p className="dot-map-highlight-address">{highlighted.address}</p>}
          </div>
        </div>
      </div>
      <div className="dot-map-cards">
        {OFFICES.map((o, i) => (
          <button
            key={o.city}
            type="button"
            className={`dot-map-card ${activeOffice === i ? 'is-active' : ''}`}
            onClick={() => selectOffice(i)}
          >
            <span className="dot-map-card-dot" />
            <div className="dot-map-card-info">
              <h4 className="dot-map-card-city">{o.city}</h4>
              <p className="dot-map-card-country">{o.country}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
