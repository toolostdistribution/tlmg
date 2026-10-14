import { defineLive } from 'next-sanity/live'
import { client } from './client'

// The dataset is public, so published content needs no token. The read token
// stays server-side and is only used if draft perspectives are ever requested.
export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: process.env.SANITY_API_READ_TOKEN || false,
  browserToken: false,
})
