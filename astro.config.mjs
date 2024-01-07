import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import partytown from '@astrojs/partytown';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://www.stefan-stan.dev',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
  integrations: [
    partytown(),
    mdx(),
    sitemap(),
    icon({
      iconDir: 'src/assets/icons',
    }),
  ],
});
