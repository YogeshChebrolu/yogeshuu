// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: change this to your real domain before deploying
  site: 'https://example.com',
  integrations: [sitemap()],
  redirects: {
    '/about': '/#about',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
