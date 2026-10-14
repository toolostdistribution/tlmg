export interface CompanySection {
  slug: string
  label: string
}

export const COMPANY_SECTIONS: CompanySection[] = [
  { slug: 'leadership', label: 'Leadership' },
  { slug: 'board', label: 'Board of Directors' },
  { slug: 'partners', label: 'Strategic Partners' },
  { slug: 'global-presence', label: 'Global Presence' },
]

export function companySectionHref(slug: string) {
  return `/company/${slug}`
}
