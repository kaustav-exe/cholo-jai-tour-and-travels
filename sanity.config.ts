import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { structure } from './src/sanity/structure';
import { schemaTypes } from './src/sanity/schemaTypes';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID || '5i3d5kwq';
const dataset = process.env.PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || 'production';

export default defineConfig({
  name: 'cholo-jai-tour-and-travels',
  title: 'Cholo Jai Tour & Travels CMS',
  basePath: '/admin',
  projectId,
  dataset,
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes,
  },
});
