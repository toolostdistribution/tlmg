'use client'

import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const offices = [
  { name: 'New York, New York', country: 'United States', address: '915 Broadway, 8th Floor, New York NY 10010', lng: -73.9897, lat: 40.7394, hq: true, photo: '/lycs-architecture-U2BI3GMnSSE-unsplash.jpg' },
  { name: 'Hollywood, California', country: 'United States', address: '1680 Vine Street, 11th Floor, Los Angeles, CA 90028', lng: -118.3287, lat: 34.1017, photo: '/lycs-architecture-U2BI3GMnSSE-unsplash.jpg' },
  { name: 'Reykjavík', country: 'Iceland', address: 'Laugavegur 26, 101 Reykjavík, Iceland', lng: -21.9426, lat: 64.1466, photo: '/lycs-architecture-U2BI3GMnSSE-unsplash.jpg' },
  { name: 'Brisbane', country: 'Australia', address: '279 Brunswick St, Fortitude Valley QLD 4006, Australia', lng: 153.0251, lat: -27.4698, photo: '/lycs-architecture-U2BI3GMnSSE-unsplash.jpg' },
  { name: 'Mumbai', country: 'India', address: '', lng: 72.8656, lat: 19.0596, photo: '/offices/mumbai.jpg' },
  { name: 'São Paulo', country: 'Brazil', address: '', lng: -46.6550, lat: -23.5613, photo: '/offices/sao-paulo.jpg' },
  { name: 'Toronto', country: 'Canada', address: '', lng: -79.3832, lat: 43.6532, photo: '/offices/toronto.jpg' },
]

type Pt = { lng: number; lat: number }

// Spherical (great-circle) interpolation between two points, with longitude
// unwrapping so arcs never streak across the antimeridian.
function greatCircle(start: Pt, end: Pt, steps = 64): [number, number][] {
  const toRad = (d: number) => (d * Math.PI) / 180
  const toDeg = (r: number) => (r * 180) / Math.PI
  const lat1 = toRad(start.lat)
  const lon1 = toRad(start.lng)
  const lat2 = toRad(end.lat)
  const lon2 = toRad(end.lng)

  const d =
    2 *
    Math.asin(
      Math.sqrt(
        Math.sin((lat2 - lat1) / 2) ** 2 +
          Math.cos(lat1) * Math.cos(lat2) * Math.sin((lon2 - lon1) / 2) ** 2,
      ),
    )
  if (d === 0) return [[start.lng, start.lat], [end.lng, end.lat]]

  const coords: [number, number][] = []
  let prevLon: number | null = null
  for (let i = 0; i <= steps; i++) {
    const f = i / steps
    const A = Math.sin((1 - f) * d) / Math.sin(d)
    const B = Math.sin(f * d) / Math.sin(d)
    const x = A * Math.cos(lat1) * Math.cos(lon1) + B * Math.cos(lat2) * Math.cos(lon2)
    const y = A * Math.cos(lat1) * Math.sin(lon1) + B * Math.cos(lat2) * Math.sin(lon2)
    const z = A * Math.sin(lat1) + B * Math.sin(lat2)
    const lat = Math.atan2(z, Math.sqrt(x * x + y * y))
    let lon = toDeg(Math.atan2(y, x))
    if (prevLon !== null) {
      while (lon - prevLon > 180) lon -= 360
      while (lon - prevLon < -180) lon += 360
    }
    prevLon = lon
    coords.push([lon, toDeg(lat)])
  }
  return coords
}

function buildConnections(): GeoJSON.FeatureCollection<GeoJSON.LineString> {
  const features: GeoJSON.Feature<GeoJSON.LineString>[] = []
  for (let i = 0; i < offices.length; i++) {
    for (let j = i + 1; j < offices.length; j++) {
      features.push({
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: greatCircle(offices[i], offices[j]),
        },
      })
    }
  }
  return { type: 'FeatureCollection', features }
}

export function OfficesMap() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const markers = useRef<mapboxgl.Marker[]>([])
  const [active, setActive] = useState<number | null>(null)
  const [dialogOffice, setDialogOffice] = useState<number | null>(null)

  function focusOffice(index: number) {
    setActive(index)
    setDialogOffice(index)
    const office = offices[index]
    map.current?.flyTo({
      center: [office.lng, office.lat],
      zoom: 5,
      speed: 1.1,
      curve: 1.4,
      essential: true,
    })
    markers.current[index]?.togglePopup()
  }

  function closeDialog() {
    setDialogOffice(null)
  }

  useEffect(() => {
    if (!mapContainer.current || map.current) return

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ''

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [10, 20],
      zoom: 1.5,
      projection: 'globe',
      interactive: true,
      scrollZoom: false,
      boxZoom: false,
      doubleClickZoom: false,
      touchZoomRotate: false,
      pitchWithRotate: false,
      attributionControl: false,
      logoPosition: 'bottom-left',
    })

    map.current.on('load', () => {
      const logo = mapContainer.current?.querySelector('.mapboxgl-ctrl-logo')
      if (logo) logo.remove()
      const attrib = mapContainer.current?.querySelector('.mapboxgl-ctrl-attrib')
      if (attrib) attrib.remove()

      const m = map.current!

      m.setFog({
        color: '#000000',
        'high-color': '#000000',
        'horizon-blend': 0.02,
        'space-color': '#000000',
        'star-intensity': 0,
      })

      // Dark, minimal styling — keep the map readable
      const styleLayers = m.getStyle().layers || []
      styleLayers.forEach((l) => {
        try {
          if (l.type === 'background') {
            m.setPaintProperty(l.id, 'background-color', '#000000')
          } else if (l.type === 'fill') {
            if (l.id.includes('water')) {
              m.setPaintProperty(l.id, 'fill-color', '#060606')
            } else if (l.id === 'land' || l.id.includes('landcover') || l.id.includes('landuse')) {
              m.setPaintProperty(l.id, 'fill-color', '#111111')
            }
          } else if (l.type === 'line') {
            if (l.id.includes('admin-0')) {
              m.setPaintProperty(l.id, 'line-color', 'rgba(255, 255, 255, 0.2)')
            } else if (l.id.includes('admin-1')) {
              m.setLayoutProperty(l.id, 'visibility', 'none')
            } else if (l.id.includes('road') || l.id.includes('waterway') || l.id.includes('tunnel') || l.id.includes('bridge')) {
              m.setLayoutProperty(l.id, 'visibility', 'none')
            }
          } else if (l.type === 'symbol') {
            if (l.id.includes('country')) {
              m.setPaintProperty(l.id, 'text-color', 'rgba(255, 255, 255, 0.25)')
              m.setPaintProperty(l.id, 'text-halo-color', '#000000')
            } else {
              m.setLayoutProperty(l.id, 'visibility', 'none')
            }
          }
        } catch {}
      })

      map.current!.addSource('office-connections', {
        type: 'geojson',
        data: buildConnections(),
      })

      map.current!.addLayer({
        id: 'office-connections-glow',
        type: 'line',
        source: 'office-connections',
        layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: {
          'line-color': '#f0efe8',
          'line-width': 6,
          'line-opacity': 0.06,
          'line-blur': 3,
        },
      })

      map.current!.addLayer({
        id: 'office-connections',
        type: 'line',
        source: 'office-connections',
        layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: {
          'line-color': '#f0efe8',
          'line-width': 2.25,
          'line-opacity': 0.3,
          'line-dasharray': [1.6, 1.4],
        },
      })

      offices.forEach((office, i) => {
        const el = document.createElement('div')
        el.className = 'map-marker'

        const popup = new mapboxgl.Popup({
          offset: 25,
          closeButton: false,
          className: 'map-popup',
        }).setHTML(`
          <strong>${office.name}</strong>
          ${office.address ? `<span>${office.address}</span>` : ''}
        `)

        const marker = new mapboxgl.Marker(el)
          .setLngLat([office.lng, office.lat])
          .setPopup(popup)
          .addTo(map.current!)

        el.addEventListener('click', () => focusOffice(i))
        markers.current[i] = marker
      })
    })

    return () => {
      map.current?.remove()
      map.current = null
      markers.current = []
    }
  }, [])

  return (
    <div className="offices-layout offices-layout--stacked">
      <div className="offices-cards-row">
        {offices.map((office, i) => (
          <button
            key={office.name}
            type="button"
            className={`office-chip ${i === active ? 'is-active' : ''}`}
            onClick={() => focusOffice(i)}
          >
            <h3>{'hq' in office && office.hq ? `★ ${office.name}` : office.name}</h3>
            <p>{office.country}</p>
          </button>
        ))}
      </div>
      <div ref={mapContainer} className="offices-map" style={{ width: '100%', height: '500px' }} />

      {dialogOffice !== null && (
        <div className="office-dialog-backdrop" onClick={closeDialog}>
          <div className="office-dialog" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="division-dialog-close" onClick={closeDialog} aria-label="Close">
              ×
            </button>
            <div className="office-dialog-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={offices[dialogOffice].photo} alt={offices[dialogOffice].name} />
            </div>
            <div className="office-dialog-content">
              <h3 className="office-dialog-name">{offices[dialogOffice].name}</h3>
              <p className="office-dialog-country">{offices[dialogOffice].country}</p>
              {offices[dialogOffice].address && <p className="office-dialog-address">{offices[dialogOffice].address}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
