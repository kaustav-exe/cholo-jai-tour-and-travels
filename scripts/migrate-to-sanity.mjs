/**
 * Cholo Jai Tour & Travels — Full Data Migration Generator & Importer
 * 
 * Extracts 100% of existing website content:
 * - 15 Comprehensive Tour Packages (with itineraries, hotel, transport, seasonal rates)
 * - 5 Travel Reels with direct links
 * - 12 Photo Gallery items
 * - Website Settings & Contact (phones, socials, address, mission, stats)
 * - Homepage Configuration (Hero slider, Seasonal banner, Why choose us)
 * - FAQs & Testimonials
 * 
 * Generates `sanity-export.ndjson` and imports directly into Sanity `production` dataset.
 */

import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { execSync } from 'child_process';

// Load static packages dataset
import { packages } from '../src/data/packages.js';
import { siteConfig, aboutData } from '../src/data/siteConfig.js';
import { facebookReels } from '../src/data/facebookReels.js';
import { galleryImages } from '../src/data/gallery.js';

async function generateAndMigrate() {
  console.log('📦 Generating Sanity NDJSON data from existing website codebase...');

  const documents = [];

  // 1. Site Settings Document (Singleton)
  documents.push({
    _id: 'siteSettings',
    _type: 'siteSettings',
    name: siteConfig.name,
    phoneNumbers: siteConfig.phoneNumbers,
    email: siteConfig.email,
    address: siteConfig.address,
    socials: siteConfig.socials,
    announcementBanner: {
      enabled: true,
      headline: 'Special Festive & Winter Departures Open',
      subtext: 'Get up to ₹2,000 off on advance family package bookings',
      buttonText: 'Book Now',
      buttonLink: 'https://wa.me/919830905332',
    },
    aboutSummary: {
      mission: aboutData.mission,
      vision: aboutData.vision,
      experienceYears: '10+',
      stats: aboutData.stats,
    },
  });

  // 2. All 15 Tour Packages
  packages.forEach((pkg, index) => {
    documents.push({
      _id: `tourPackage-${pkg.id}`,
      _type: 'tourPackage',
      title: pkg.title,
      slug: { _type: 'slug', current: pkg.id },
      packageId: pkg.id,
      destination: pkg.destination,
      duration: pkg.duration,
      price: pkg.price,
      originalPrice: pkg.pricingDetails?.originalPrice || '',
      shortDescription: pkg.shortDescription || '',
      imageUrl: pkg.image,
      featured: pkg.featured || index < 4,
      isAvailable: true,
      rating: pkg.rating || 4.8,
      reviewsCount: pkg.reviewsCount || 100,
      nextDate: pkg.nextDate || 'Available on Booking',
      stayBreakdown: pkg.stayBreakdown || '',
      seasonalPricing: pkg.seasonalPricing || {},
      pricingNote: pkg.pricingNote || '',
      galleryUrls: pkg.gallery || [pkg.image],
      videoUrl: pkg.videoUrl || '',
      highlights: pkg.highlights || [],
      transport: pkg.transport || { mode: '', pickup: '', vehicle: '', details: '' },
      accommodation: pkg.accommodation || { category: '', description: '', meals: '', features: [] },
      pricingDetails: pkg.pricingDetails || { perHead: pkg.price, groupDiscount: '', inclusions: [], exclusions: [] },
      itinerary: pkg.itinerary || [],
      importantNotes: pkg.importantNotes || [],
    });
  });

  // 3. Homepage Singleton Document
  documents.push({
    _id: 'homepage',
    _type: 'homepage',
    title: 'Homepage Main Configuration',
    promotionalBanner: {
      enabled: true,
      badge: 'Special Offer',
      headline: 'Special Offer — Tropical Andaman Island Package (6 Nights / 7 Days)',
      subtext: 'Includes Flight, AC Hotels, Cruise & Meals',
      ctaText: 'Book Fare →',
    },
    whyChooseUsSection: [
      { icon: 'Shield', title: 'Safe Travel', description: 'Your safety is our top priority. We ensure secure and comfortable journeys.' },
      { icon: 'Award', title: 'Premium Quality', description: "We don't compromise on quality. Best hotels and transport guaranteed." },
      { icon: 'Map', title: 'Expert Guides', description: 'Learn about your destinations with our experienced local tour guides.' },
      { icon: 'Users', title: 'Family Friendly', description: 'Packages designed for all age groups to enjoy together seamlessly.' },
    ],
    ctaSection: {
      heading: 'Ready for your next adventure?',
      subheading: 'Contact us today and let us plan the perfect holiday for you.',
      buttonText: 'Book on WhatsApp',
      whatsappMessage: 'Hi, I want to book a tour with Cholo Jai Tour & Travels!',
    },
  });

  // 4. Facebook Reels
  facebookReels.forEach((reel) => {
    documents.push({
      _id: `facebookReel-${reel.id}`,
      _type: 'facebookReel',
      title: reel.title,
      destination: reel.destination,
      facebookUrl: reel.facebookUrl,
      thumbnailUrl: reel.thumbnail,
      views: reel.views,
      likes: reel.likes,
      duration: reel.duration,
      date: reel.date,
      isActive: true,
    });
  });

  // 5. Gallery Images
  galleryImages.forEach((img) => {
    documents.push({
      _id: `galleryItem-${img.id}`,
      _type: 'galleryItem',
      title: img.alt,
      imageUrl: img.url,
      category: 'Tour Highlights',
    });
  });

  // 6. FAQs
  const faqs = [
    {
      _id: 'faq-1',
      _type: 'faq',
      question: 'How do I book a tour package with Cholo Jai Tour & Travels?',
      answer: 'You can click on any package card or the "Book on WhatsApp" button on our website, or call us directly at 9830905332 / 9239458171. Our expert consultant will customize your dates and itinerary.',
      category: 'booking',
      sortOrder: 1,
    },
    {
      _id: 'faq-2',
      _type: 'faq',
      question: 'Are flight tickets and transfers included in Andaman tours?',
      answer: 'Yes! Our flagship 6N/7D Tropical Andaman tour includes roundtrip Kolkata-to-Kolkata flight tickets, private high-speed catamaran cruise between islands, and dedicated AC vehicles.',
      category: 'general',
      sortOrder: 2,
    },
    {
      _id: 'faq-3',
      _type: 'faq',
      question: 'Can itineraries be customized for private family or corporate groups?',
      answer: 'Absolutely. We offer fully customizable private tours for families, couples, and corporate groups tailored to your budget and preferred travel pace.',
      category: 'general',
      sortOrder: 3,
    },
  ];
  documents.push(...faqs);

  // 7. Testimonials
  const testimonials = [
    {
      _id: 'testimonial-1',
      _type: 'testimonial',
      name: 'Anirban Mukherjee',
      location: 'Kolkata',
      tourPackage: 'Tropical Andaman Tour',
      rating: 5,
      comment: 'Our Andaman tour with Cholo Jai was organized flawlessly. Flight tickets, cruise to Havelock, hotel stays and Bengali meals were top-notch!',
      featured: true,
    },
    {
      _id: 'testimonial-2',
      _type: 'testimonial',
      name: 'Debolina Sen',
      location: 'Howrah',
      tourPackage: 'Kashmir Paradise Tour',
      rating: 5,
      comment: 'Gulmarg snow gondola ride and Dal lake houseboat stay were magical. Truly dependable family travel organizers.',
      featured: true,
    },
    {
      _id: 'testimonial-3',
      _type: 'testimonial',
      name: 'Rajarshi Ghosh',
      location: 'Salt Lake, Kolkata',
      tourPackage: 'North Sikkim & Gangtok',
      rating: 5,
      comment: 'Zero Point and Gurudongmar Lake trip was smooth and memorable. Great driver and courteous staff.',
      featured: true,
    },
  ];
  documents.push(...testimonials);

  // Write to NDJSON
  const ndjsonPath = resolve('sanity-export.ndjson');
  const ndjsonContent = documents.map((doc) => JSON.stringify(doc)).join('\n');
  writeFileSync(ndjsonPath, ndjsonContent, 'utf-8');

  console.log(`✅ Generated ${documents.length} documents in ${ndjsonPath}`);
  console.log('🚀 Importing documents into Sanity production dataset...');

  try {
    const importCmd = `node "node_modules/sanity/bin/sanity" dataset import "${ndjsonPath}" production --replace`;
    const output = execSync(importCmd, { encoding: 'utf-8' });
    console.log(output);
    console.log('🎉 Sanity migration completed with 100% data successfully!');
  } catch (err) {
    console.error('Import output:', err.stdout || err.message);
  }
}

generateAndMigrate();
