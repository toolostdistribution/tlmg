import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

const MAX_SIGNATURE_AGE_MS = 5 * 60 * 1000

function signatureIsFresh(header: string | null) {
  const timestamp = Number(header?.match(/t=(\d+)/)?.[1])
  return Number.isFinite(timestamp) && Math.abs(Date.now() - timestamp) < MAX_SIGNATURE_AGE_MS
}

export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET
  if (!secret) {
    return NextResponse.json({ message: 'Missing SANITY_REVALIDATE_SECRET' }, { status: 500 })
  }

  if (!signatureIsFresh(req.headers.get('sanity-webhook-signature'))) {
    return NextResponse.json({ message: 'Invalid signature' }, { status: 401 })
  }

  let isValidSignature = false
  let type: string | null = null
  try {
    const parsed = await parseBody<{ _type?: string }>(req, secret, true)
    isValidSignature = Boolean(parsed.isValidSignature)
    type = parsed.body?._type ?? null
  } catch {
    isValidSignature = false
  }
  if (!isValidSignature) {
    return NextResponse.json({ message: 'Invalid signature' }, { status: 401 })
  }

  revalidatePath('/', 'layout')
  return NextResponse.json({ revalidated: true, type })
}
