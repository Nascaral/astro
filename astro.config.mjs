import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://d0ba6b4e.astro-d1k.pages.dev', // FIXED
  integrations: [mdx(), sitemap()],
});
