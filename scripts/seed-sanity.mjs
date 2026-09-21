/**
 * Cholo Jai Tour & Travels — Comprehensive Sanity Data Seeder
 * 
 * Usage:
 *   node scripts/seed-sanity.mjs
 */

import { createClient } from '@sanity/client';
import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

// Load environment variables from .env
if (existsSync(resolve('.env'))) {
  const envContent = readFileSync(resolve('.env'), 'utf-8');
  envContent.split('\n').forEach((line) => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [k, ...v] = trimmed.split('=');
      if (k) {
        process.env[k.trim()] = v.join('=').trim().replace(/(^"|"$)/g, '');
      }
    }
  });
}

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID || '5i3d5kwq';
const dataset = process.env.PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || 'production';
const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.log('ℹ️  Project ID:', projectId);
  console.log('ℹ️  Dataset:', dataset);
  console.log('ℹ️  SANITY_API_TOKEN is needed to write/seed data via this script.');
  console.log('👉  To get an API token: Sanity.io Manage -> Project (5i3d5kwq) -> API -> Tokens -> Add API Token (Editor/Admin permissions).');
  console.log('👉  You can also edit and create packages directly in the Studio at http://localhost:4321/admin');
  process.exit(0);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2024-03-01',
  useCdn: false,
});

async function seedData() {
  console.log(`🚀 Starting Cholo Jai Tour & Travels migration to Sanity (Project: ${projectId})...`);

  // 1. Site Settings Document
  const siteSettingsDoc = {
    _id: 'siteSettings',
    _type: 'siteSettings',
    name: 'Cholo Jai Tour & Travels',
    phoneNumbers: ['9830905332', '9239458171'],
    email: 'cholojai2013@gmail.com',
    address: 'R. N. Avenue, Sodepur, Near Deshbandhu School, Kolkata - 700110',
    socials: {
      whatsapp: 'https://wa.me/919830905332',
      facebook: 'https://www.facebook.com/profile.php?id=61577840137646',
      instagram: 'https://instagram.com/',
    },
    aboutSummary: {
      mission: 'To provide unforgettable and seamless travel experiences with personalized service and care.',
      vision: 'To be the most trusted and preferred travel agency in Kolkata, known for our commitment to excellence.',
      experienceYears: '10+',
      stats: [
        { label: 'Happy Customers', value: '10k+' },
        { label: 'Tours Completed', value: '500+' },
        { label: 'Destinations', value: '50+' },
        { label: 'Expert Guides', value: '20+' },
      ],
    },
  };

  await client.createOrReplace(siteSettingsDoc);
  console.log('✅ Site Settings document created');

  console.log('🎉 Seeding completed successfully!');
}

seedData().catch((err) => {
  console.error('❌ Seeding failed:', err);
  process.exit(1);
});
