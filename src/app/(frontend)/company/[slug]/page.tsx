import { notFound, permanentRedirect } from 'next/navigation'
import { getBoardMembers, getLeaders } from '@/sanity/queries'

export default async function LegacyPersonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const [leaders, boardMembers] = await Promise.all([getLeaders(), getBoardMembers()])

  if (leaders.some((m) => m.slug === slug && m.bio?.length)) {
    permanentRedirect(`/company/leadership/${slug}`)
  }
  if (boardMembers.some((m) => m.slug === slug && m.bio.length)) {
    permanentRedirect(`/company/board/${slug}`)
  }
  notFound()
}
