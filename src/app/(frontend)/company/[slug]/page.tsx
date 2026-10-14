import { notFound, permanentRedirect } from 'next/navigation'
import { boardMembers, leaders } from '@/payload/people-data'

export default async function LegacyPersonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  if (leaders.some((m) => m.slug === slug && m.bio?.length)) {
    permanentRedirect(`/company/leadership/${slug}`)
  }
  if (boardMembers.some((m) => m.slug === slug && m.bio.length)) {
    permanentRedirect(`/company/board/${slug}`)
  }
  notFound()
}
