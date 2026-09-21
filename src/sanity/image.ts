import imageUrlBuilder from '@sanity/image-url';
import { sanityClient, isSanityConfigured } from './client';

const builder = isSanityConfigured && sanityClient ? imageUrlBuilder(sanityClient) : null;

export function urlForImage(source: any) {
  if (!builder || !source) {
    if (typeof source === 'string') return source;
    if (source?.asset?.url) return source.asset.url;
    return '';
  }
  try {
    return builder.image(source).auto('format').fit('max');
  } catch {
    return '';
  }
}
