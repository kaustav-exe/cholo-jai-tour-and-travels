import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID || '5i3d5kwq',
    dataset: process.env.PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || 'production',
  },
  deployment: {
    appId: 'p8b03hpokvx74vy99dk71xy6',
  },
});
