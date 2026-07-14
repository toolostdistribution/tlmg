import { NextResponse } from 'next/server'
import {
  COOKIE_NAME,
  COOKIE_MAX_AGE,
  SITE_PASSWORD,
  deriveToken,
  safeEqual,
} from '@/lib/site-auth'

if (!SITE_PASSWORD) {
  console.error('Missing "auth" environment variable')
}

const MAX_ATTEMPTS = 5
const WINDOW_MS = 60_000
const LOCKOUT_MS = 300_000

const attempts = new Map<string, { count: number; firstAttempt: number; lockedUntil?: number }>()

function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  const real = request.headers.get('x-real-ip')
  if (real) return real
  return 'unknown'
}

function cleanupExpired() {
  const now = Date.now()
  for (const [ip, data] of attempts) {
    if (data.lockedUntil && now > data.lockedUntil) {
      attempts.delete(ip)
    } else if (now - data.firstAttempt > WINDOW_MS && !data.lockedUntil) {
      attempts.delete(ip)
    }
  }
}

export async function POST(request: Request) {
  const ip = getClientIP(request)
  const now = Date.now()

  cleanupExpired()

  const record = attempts.get(ip)

  if (record?.lockedUntil && now < record.lockedUntil) {
    return NextResponse.json(
      { error: 'Too many attempts. Try again later.' },
      { status: 429 }
    )
  }

  let body: { password?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const { password } = body

  if (!password || typeof password !== 'string') {
    return NextResponse.json({ error: 'Password required' }, { status: 400 })
  }

  if (!SITE_PASSWORD) {
    return NextResponse.json({ error: 'Auth not configured' }, { status: 500 })
  }

  if (safeEqual(password, SITE_PASSWORD)) {
    attempts.delete(ip)
    const response = NextResponse.json({ success: true })
    response.cookies.set(COOKIE_NAME, deriveToken(SITE_PASSWORD), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: COOKIE_MAX_AGE,
    })
    return response
  }

  if (!record || now - record.firstAttempt > WINDOW_MS) {
    attempts.set(ip, { count: 1, firstAttempt: now })
  } else {
    record.count++
    if (record.count >= MAX_ATTEMPTS) {
      record.lockedUntil = now + LOCKOUT_MS
      return NextResponse.json(
        { error: 'Too many attempts. Try again later.' },
        { status: 429 }
      )
    }
  }

  const delay = Math.min(1000 * Math.pow(2, (record?.count ?? 1) - 1), 5000)
  await new Promise((resolve) => setTimeout(resolve, delay))

  return NextResponse.json(
    { error: 'Invalid password' },
    { status: 401 }
  )
}
