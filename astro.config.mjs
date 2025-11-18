import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://github.com',
	base: '/Nascaral/astro',
	integrations: [mdx(), sitemap()],
});