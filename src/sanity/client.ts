import { createClient } from '@sanity/client';

export const sanityProjectId =
  (typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_SANITY_PROJECT_ID) ||
  (typeof import.meta !== 'undefined' && import.meta.env?.SANITY_PROJECT_ID) ||
  (typeof process !== 'undefined' && process.env?.PUBLIC_SANITY_PROJECT_ID) ||
  (typeof process !== 'undefined' && process.env?.SANITY_PROJECT_ID) ||
  '5i3d5kwq';

export const sanityDataset =
  (typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_SANITY_DATASET) ||
  (typeof import.meta !== 'undefined' && import.meta.env?.SANITY_DATASET) ||
  (typeof process !== 'undefined' && process.env?.PUBLIC_SANITY_DATASET) ||
  (typeof process !== 'undefined' && process.env?.SANITY_DATASET) ||
  'production';

export const sanityApiVersion =
  (typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_SANITY_API_VERSION) ||
  (typeof import.meta !== 'undefined' && import.meta.env?.SANITY_API_VERSION) ||
  (typeof process !== 'undefined' && process.env?.PUBLIC_SANITY_API_VERSION) ||
  (typeof process !== 'undefined' && process.env?.SANITY_API_VERSION) ||
  '2024-03-01';

export const isSanityConfigured = Boolean(sanityProjectId && sanityProjectId !== 'your-project-id');

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      apiVersion: sanityApiVersion,
      useCdn: false,
      token:
        (typeof import.meta !== 'undefined' && import.meta.env?.SANITY_API_TOKEN) ||
        (typeof process !== 'undefined' && process.env?.SANITY_API_TOKEN) ||
        undefined,
    })
  : null;
