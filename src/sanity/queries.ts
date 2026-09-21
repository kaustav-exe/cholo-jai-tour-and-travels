export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  name,
  phoneNumbers,
  email,
  address,
  socials,
  announcementBanner,
  aboutSummary
}`;

export const allPackagesQuery = `*[_type == "tourPackage" && isAvailable != false] | order(featured desc, sortOrder asc, _createdAt desc) {
  _id,
  title,
  "slug": coalesce(slug.current, packageId),
  packageId,
  destination,
  duration,
  price,
  originalPrice,
  shortDescription,
  "image": coalesce(image.asset->url, imageUrl, "/images/hero_andaman_1783678485939.png"),
  featured,
  isAvailable,
  rating,
  reviewsCount,
  nextDate,
  stayBreakdown,
  seasonalPricing,
  pricingNote,
  "gallery": coalesce(gallery[].asset->url, galleryUrls, [imageUrl]),
  videoUrl,
  highlights,
  transport,
  accommodation,
  pricingDetails,
  itinerary,
  bookingProcess,
  importantNotes
}`;

export const packageByIdQuery = `*[_type == "tourPackage" && (slug.current == $id || packageId == $id || _id == $id || _id == "tourPackage-" + $id)][0] {
  _id,
  title,
  "slug": coalesce(slug.current, packageId),
  packageId,
  destination,
  duration,
  price,
  originalPrice,
  shortDescription,
  "image": coalesce(image.asset->url, imageUrl, "/images/hero_andaman_1783678485939.png"),
  featured,
  isAvailable,
  rating,
  reviewsCount,
  nextDate,
  stayBreakdown,
  seasonalPricing,
  pricingNote,
  "gallery": coalesce(gallery[].asset->url, galleryUrls, [imageUrl]),
  videoUrl,
  highlights,
  transport,
  accommodation,
  pricingDetails,
  itinerary,
  bookingProcess,
  importantNotes
}`;

export const homepageQuery = `*[_type == "homepage"][0] {
  title,
  heroSlides[] {
    tagline,
    title,
    subtext,
    "package": packageRef-> {
      _id,
      title,
      "slug": coalesce(slug.current, packageId),
      packageId,
      destination,
      duration,
      price,
      "image": coalesce(image.asset->url, imageUrl),
      seasonalPricing
    },
    "customImageUrl": customImage.asset->url,
    primaryButtonText,
    secondaryButtonText
  },
  promotionalBanner {
    enabled,
    badge,
    headline,
    subtext,
    "package": featuredPackage-> {
      _id,
      title,
      "slug": coalesce(slug.current, packageId),
      packageId,
      duration,
      price,
      seasonalPricing
    },
    ctaText
  },
  popularDestinationsSection {
    heading,
    subtitle,
    "packages": selectedPackages[]-> {
      _id,
      title,
      "slug": coalesce(slug.current, packageId),
      packageId,
      destination,
      duration,
      price,
      "image": coalesce(image.asset->url, imageUrl),
      seasonalPricing
    }
  },
  featuredPackagesSection {
    badge,
    heading,
    subtitle,
    "packages": packages[]-> {
      _id,
      title,
      "slug": coalesce(slug.current, packageId),
      packageId,
      destination,
      duration,
      price,
      "image": coalesce(image.asset->url, imageUrl),
      shortDescription,
      rating,
      reviewsCount,
      seasonalPricing
    }
  },
  whyChooseUsSection[] {
    icon,
    title,
    description
  },
  ctaSection
}`;

export const activeReelsQuery = `*[_type == "facebookReel" && isActive != false] | order(sortOrder asc, _createdAt desc) {
  _id,
  "id": coalesce(packageId, _id),
  title,
  destination,
  facebookUrl,
  "thumbnail": coalesce(thumbnail.asset->url, thumbnailUrl, "/images/hero_andaman_1783678485939.png"),
  views,
  likes,
  duration,
  date,
  sortOrder
}`;

export const galleryItemsQuery = `*[_type == "galleryItem"] | order(sortOrder asc, _createdAt desc) {
  _id,
  "id": _id,
  title,
  "url": coalesce(image.asset->url, imageUrl, "/images/tour-1.jpeg"),
  "alt": coalesce(image.alt, title),
  category
}`;

export const testimonialsQuery = `*[_type == "testimonial" && featured != false] | order(_createdAt desc) {
  _id,
  name,
  location,
  tourPackage,
  rating,
  comment,
  "avatar": avatar.asset->url,
  date
}`;

export const faqsQuery = `*[_type == "faq"] | order(sortOrder asc) {
  _id,
  question,
  answer,
  category
}`;
