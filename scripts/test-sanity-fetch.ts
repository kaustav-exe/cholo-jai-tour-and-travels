import { ContentService } from '../src/services/content/contentService';

async function test() {
  console.log('Fetching live packages from Sanity...');
  const packages = await ContentService.getAllPackages();
  console.log(`Fetched ${packages.length} packages.`);
  if (packages.length > 0) {
    console.log('Sample Package 1:', {
      id: packages[0].id,
      title: packages[0].title,
      price: packages[0].price,
      destination: packages[0].destination,
    });
  }

  const settings = await ContentService.getSiteSettings();
  console.log('Site Settings:', {
    name: settings.name,
    phones: settings.phoneNumbers,
    email: settings.email,
  });
}

test().catch(console.error);
