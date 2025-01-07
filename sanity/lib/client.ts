import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  token:process.env.NEXT_PUBLIC_SANITY_PROJECT_TOKEN,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset:'blog',
  apiVersion:'v2025-01-06',
  useCdn: true, 
})
