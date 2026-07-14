import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { COOKIE_NAME, SITE_PASSWORD, deriveToken, safeEqual } from '@/lib/site-auth'

const AUTH_PAGE = '/auth'
const AUTH_API = '/api/auth'

let cachedToken: string | null = null

function expectedToken(): string {
  if (cachedToken === null) {
    cachedToken = deriveToken(SITE_PASSWORD as string)
  }
  return cachedToken
}

function isAuthed(request: NextRequest): boolean {
  const cookie = request.cookies.get(COOKIE_NAME)?.value
  if (!cookie) return false
  return safeEqual(cookie, expectedToken())
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only the login page and its API are reachable without a valid session.
  const isLoginRoute =
    pathname === AUTH_PAGE || pathname === AUTH_API || pathname.startsWith(`${AUTH_API}/`)

  if (isLoginRoute) {
    return NextResponse.next()
  }

  // Fail closed: if the password is not configured, expose nothing.
  if (!SITE_PASSWORD) {
    return new NextResponse('Site authentication is not configured.', {
      status: 503,
      headers: { 'cache-control': 'no-store' },
    })
  }

  if (isAuthed(request)) {
    return NextResponse.next()
  }

  // Unauthenticated: block API/data requests with a hard 401 (never rewrite
  // an API call to an HTML page), and send everything else to the login page.
  if (pathname.startsWith('/api/')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const url = request.nextUrl.clone()
  url.pathname = AUTH_PAGE
  url.search = ''
  url.searchParams.set('next', pathname)
  return NextResponse.rewrite(url, { status: 401 })
}

export const config = {
  // Run on every request except framework code bundles (needed to render the
  // login page itself) and the favicon. Everything else -- pages, all `/api/*`
  // routes, optimized images (`_next/image`) and static files in `public/` --
  // is gated behind the password.
  matcher: ['/((?!_next/static|favicon.ico).*)'],
}
