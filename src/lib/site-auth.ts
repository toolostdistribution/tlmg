import { createHmac, timingSafeEqual } from 'crypto'

export const COOKIE_NAME = 'site-auth'
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 7

export const SITE_PASSWORD = process.env.auth

/**
 * Secret used to derive the auth cookie value. Deriving via HMAC (instead of a
 * bare hash of the password) means the cookie value cannot be precomputed by
 * someone who only guesses the password, and it lets the token be invalidated
 * by rotating the secret.
 */
const AUTH_SECRET =
  process.env.SITE_AUTH_SECRET || process.env.PAYLOAD_SECRET || ''

/**
 * Deterministically derive the cookie token from the password. Both the proxy
 * (gate) and the login API compute this so they agree on the expected value.
 */
export function deriveToken(password: string): string {
  return createHmac('sha256', AUTH_SECRET).update(password).digest('hex')
}

/** Constant-time string comparison that never throws on length mismatch. */
export function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  if (bufA.length !== bufB.length) return false
  return timingSafeEqual(bufA, bufB)
}
