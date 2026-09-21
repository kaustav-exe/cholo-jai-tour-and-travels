import { sanityClient, isSanityConfigured } from '../../sanity/client';
import {
  siteSettingsQuery,
  allPackagesQuery,
  packageByIdQuery,
  homepageQuery,
  activeReelsQuery,
  galleryItemsQuery,
  testimonialsQuery,
  faqsQuery,
} from '../../sanity/queries';
import { packages as staticPackages, type TourPackage } from '../../data/packages';
import { siteConfig as staticSiteConfig, aboutData as staticAboutData } from '../../data/siteConfig';
import { facebookReels as staticFacebookReels, type FacebookReel } from '../../data/facebookReels';
import { galleryImages as staticGalleryImages, type GalleryImage } from '../../data/gallery';

export interface SiteSettingsData {
  name: string;
  phoneNumbers: string[];
  email: string;
  address: string;
  socials: {
    whatsapp?: string;
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
  announcementBanner?: {
    enabled?: boolean;
    headline?: string;
    subtext?: string;
    buttonText?: string;
    buttonLink?: string;
  };
  aboutSummary?: {
    mission?: string;
    vision?: string;
    experienceYears?: string;
    stats?: Array<{ label: string; value: string }>;
  };
}

export class ContentService {
  /**
   * Fetch site settings with static fallback
   */
  static async getSiteSettings(): Promise<SiteSettingsData> {
    if (isSanityConfigured && sanityClient) {
      try {
        const data = await sanityClient.fetch(siteSettingsQuery);
        if (data && data.name) {
          return {
            name: data.name || staticSiteConfig.name,
            phoneNumbers: data.phoneNumbers?.length ? data.phoneNumbers : staticSiteConfig.phoneNumbers,
            email: data.email || staticSiteConfig.email,
            address: data.address || staticSiteConfig.address,
            socials: { ...staticSiteConfig.socials, ...data.socials },
            announcementBanner: data.announcementBanner,
            aboutSummary: data.aboutSummary || {
              mission: staticAboutData.mission,
              vision: staticAboutData.vision,
              experienceYears: "10+",
              stats: staticAboutData.stats,
            },
          };
        }
      } catch (err) {
        console.warn('[ContentService] Sanity fetch failed for siteSettings, using static fallback:', err);
      }
    }

    return {
      name: staticSiteConfig.name,
      phoneNumbers: staticSiteConfig.phoneNumbers,
      email: staticSiteConfig.email,
      address: staticSiteConfig.address,
      socials: staticSiteConfig.socials,
      aboutSummary: {
        mission: staticAboutData.mission,
        vision: staticAboutData.vision,
        experienceYears: "10+",
        stats: staticAboutData.stats,
      },
    };
  }

  /**
   * Fetch all tour packages with static fallback
   */
  static async getAllPackages(): Promise<TourPackage[]> {
    if (isSanityConfigured && sanityClient) {
      try {
        const cmsPackages = await sanityClient.fetch(allPackagesQuery);
        if (cmsPackages && cmsPackages.length > 0) {
          return cmsPackages.map((pkg: any) => ({
            id: pkg.slug || pkg.packageId || pkg._id,
            title: pkg.title,
            destination: pkg.destination,
            duration: pkg.duration,
            price: pkg.price,
            originalPrice: pkg.originalPrice,
            image: pkg.image || '/images/hero_andaman_1783678485939.png',
            shortDescription: pkg.shortDescription || '',
            featured: pkg.featured ?? false,
            rating: pkg.rating ?? 4.8,
            reviewsCount: pkg.reviewsCount ?? 120,
            nextDate: pkg.nextDate ?? 'Available on Booking',
            stayBreakdown: pkg.stayBreakdown,
            seasonalPricing: pkg.seasonalPricing,
            pricingNote: pkg.pricingNote,
            gallery: pkg.gallery?.length ? pkg.gallery : [pkg.image],
            videoUrl: pkg.videoUrl,
            highlights: pkg.highlights,
            transport: pkg.transport,
            accommodation: pkg.accommodation,
            pricingDetails: pkg.pricingDetails,
            itinerary: pkg.itinerary,
            bookingProcess: pkg.bookingProcess,
            importantNotes: pkg.importantNotes,
          }));
        }
      } catch (err) {
        console.warn('[ContentService] Sanity fetch failed for packages, using static fallback:', err);
      }
    }

    return staticPackages;
  }

  /**
   * Fetch single tour package by slug / ID
   */
  static async getPackageById(id: string): Promise<TourPackage | undefined> {
    if (isSanityConfigured && sanityClient) {
      try {
        const pkg = await sanityClient.fetch(packageByIdQuery, { id });
        if (pkg) {
          return {
            id: pkg.slug || pkg.packageId || pkg._id,
            title: pkg.title,
            destination: pkg.destination,
            duration: pkg.duration,
            price: pkg.price,
            originalPrice: pkg.originalPrice,
            image: pkg.image || '/images/hero_andaman_1783678485939.png',
            shortDescription: pkg.shortDescription || '',
            featured: pkg.featured ?? false,
            rating: pkg.rating ?? 4.8,
            reviewsCount: pkg.reviewsCount ?? 120,
            nextDate: pkg.nextDate ?? 'Available on Booking',
            stayBreakdown: pkg.stayBreakdown,
            seasonalPricing: pkg.seasonalPricing,
            pricingNote: pkg.pricingNote,
            gallery: pkg.gallery?.length ? pkg.gallery : [pkg.image],
            videoUrl: pkg.videoUrl,
            highlights: pkg.highlights,
            transport: pkg.transport,
            accommodation: pkg.accommodation,
            pricingDetails: pkg.pricingDetails,
            itinerary: pkg.itinerary,
            bookingProcess: pkg.bookingProcess,
            importantNotes: pkg.importantNotes,
          };
        }
      } catch (err) {
        console.warn(`[ContentService] Sanity fetch failed for package "${id}", using static fallback:`, err);
      }
    }

    return staticPackages.find((p) => p.id === id);
  }

  /**
   * Fetch Facebook Reels
   */
  static async getFacebookReels(): Promise<FacebookReel[]> {
    if (isSanityConfigured && sanityClient) {
      try {
        const reels = await sanityClient.fetch(activeReelsQuery);
        if (reels && reels.length > 0) {
          return reels.map((r: any) => ({
            id: r.id || r._id,
            title: r.title,
            destination: r.destination,
            thumbnail: r.thumbnail || '/images/hero_andaman_1783678485939.png',
            facebookUrl: r.facebookUrl,
            views: r.views || '10K+',
            likes: r.likes || '1K+',
            duration: r.duration || '0:30',
            date: r.date || 'Recent Reel',
          }));
        }
      } catch (err) {
        console.warn('[ContentService] Sanity fetch failed for facebookReels, using static fallback:', err);
      }
    }

    return staticFacebookReels;
  }

  /**
   * Fetch Gallery Images
   */
  static async getGalleryImages(): Promise<GalleryImage[]> {
    if (isSanityConfigured && sanityClient) {
      try {
        const items = await sanityClient.fetch(galleryItemsQuery);
        if (items && items.length > 0) {
          return items.map((g: any) => ({
            id: g.id || g._id,
            url: g.url || '/images/tour-1.jpeg',
            alt: g.alt || g.title || 'Tour photo',
          }));
        }
      } catch (err) {
        console.warn('[ContentService] Sanity fetch failed for gallery, using static fallback:', err);
      }
    }

    return staticGalleryImages;
  }

  /**
   * Fetch Testimonials
   */
  static async getTestimonials() {
    if (isSanityConfigured && sanityClient) {
      try {
        const reviews = await sanityClient.fetch(testimonialsQuery);
        if (reviews && reviews.length > 0) return reviews;
      } catch (err) {
        console.warn('[ContentService] Sanity fetch failed for testimonials:', err);
      }
    }

    return [
      {
        name: "Anirban Mukherjee",
        location: "Kolkata",
        tourPackage: "Tropical Andaman Tour",
        rating: 5,
        comment: "Our Andaman tour with Cholo Jai was organized flawlessly. Flight tickets, cruise to Havelock, hotel stays and Bengali meals were top-notch!",
      },
      {
        name: "Debolina Sen",
        location: "Howrah",
        tourPackage: "Kashmir Paradise Tour",
        rating: 5,
        comment: "Gulmarg snow gondola ride and Dal lake houseboat stay were magical. Truly dependable family travel organizers.",
      },
      {
        name: "Rajarshi Ghosh",
        location: "Salt Lake, Kolkata",
        tourPackage: "North Sikkim & Gangtok",
        rating: 5,
        comment: "Zero Point and Gurudongmar Lake trip was smooth and memorable. Great driver and courteous staff.",
      }
    ];
  }

  /**
   * Fetch FAQs
   */
  static async getFaqs() {
    if (isSanityConfigured && sanityClient) {
      try {
        const faqs = await sanityClient.fetch(faqsQuery);
        if (faqs && faqs.length > 0) return faqs;
      } catch (err) {
        console.warn('[ContentService] Sanity fetch failed for FAQs:', err);
      }
    }

    return [
      {
        question: "How do I book a tour package?",
        answer: "You can click on any package card or 'Book on WhatsApp' button to connect directly with our travel consultant, or call us directly at 9830905332.",
        category: "booking",
      },
      {
        question: "Are flights and vehicle transfers included?",
        answer: "Yes, major long-distance packages like Andaman include roundtrip Kolkata flights and dedicated AC vehicles for all local sightseeing.",
        category: "general",
      },
      {
        question: "Can itineraries be customized for private groups?",
        answer: "Absolutely! We customize itineraries, hotel categories, and durations for families, couples, and corporate groups.",
        category: "general",
      }
    ];
  }
}
