export interface DivisionFeature {
  title: string
  desc: string
}

export interface DivisionMetric {
  value: string
  label: string
}

export interface DivisionContent {
  website?: string
  websiteLabel?: string
  tagline?: string
  longDescription?: string
  logoImage?: string
  features?: DivisionFeature[]
  metrics?: DivisionMetric[]
  collageImages?: string[]
}

/**
 * Custom, per-division page content. Any division with an entry here renders
 * the richer custom layout; divisions without one fall back to the generic page.
 */
export const divisionContent: Record<string, DivisionContent> = {
  'too-lost': {
    website: 'https://toolost.com',
    websiteLabel: 'toolost.com',
    tagline: 'Be heard. Everywhere.',
    logoImage: '/text-2.png',
    collageImages: [
      '/toolost-covers/01.webp',
      '/toolost-covers/02.webp',
      '/toolost-covers/03.webp',
      '/toolost-covers/04.webp',
      '/toolost-covers/05.webp',
      '/toolost-covers/06.webp',
      '/toolost-covers/07.webp',
      '/toolost-covers/08.webp',
      '/toolost-covers/09.webp',
      '/toolost-covers/10.webp',
      '/toolost-covers/11.webp',
      '/toolost-covers/12.webp',
      '/toolost-covers/13.webp',
      '/toolost-covers/14.webp',
      '/toolost-covers/15.webp',
      '/toolost-covers/16.webp',
      '/toolost-covers/17.webp',
      '/toolost-covers/18.webp',
    ],
    longDescription:
      'Founded in New York in 2019, Too Lost is one of the world\'s largest independent music distribution and rights-management platforms. The company represents more than 500,000 artists and labels, manages over five million recordings, delivers music to more than 450 digital platforms and has paid more than $150 million to artists and rights holders.',
    metrics: [
      { value: '450K+', label: 'artists & labels' },
      { value: '480+', label: 'stores & platforms' },
      { value: '100%', label: 'royalty share' },
      { value: '200+', label: 'global territories' },
    ],
    features: [
      {
        title: 'Distribution',
        desc: 'Same-day delivery to 480+ stores and services worldwide — more than any other distributor. Unlimited releases, no caps.',
      },
      {
        title: 'Analytics & Trends',
        desc: 'Daily analytics, audience insights, revenue trends, and performance metrics from Spotify, Apple Music, TikTok, Instagram, and more.',
      },
      {
        title: 'Royalty Splits & Payouts',
        desc: 'Seamless split configuration and automated payments to collaborators via PayPal, Venmo, Stripe, ACH, and Tipalti.',
      },
      {
        title: 'Artist Financing',
        desc: 'Instant royalty advances — get early access to up to 10 years of future earnings from your catalog and upcoming releases.',
      },
      {
        title: 'Publishing Administration',
        desc: 'In partnership with BMG, collect unclaimed royalties from 50+ global performance and mechanical societies.',
      },
      {
        title: 'YouTube Content ID',
        desc: 'Register your music with Content ID to automatically collect revenue anytime your music is used in a YouTube video.',
      },
      {
        title: 'White Label & Enterprise',
        desc: 'Bespoke white-label services for large record labels, distributors, management companies, catalog funds, and other rights holders.',
      },
      {
        title: 'Marketing Suite',
        desc: 'Fan targeting, smart links, audience insights, auto-generated release links, and automated marketing tools.',
      },
      {
        title: 'Catalog Management',
        desc: 'Bulk CSV import, catalog migration from other distributors, advanced uploader with more settings than any competitor.',
      },
    ],
  },
}
