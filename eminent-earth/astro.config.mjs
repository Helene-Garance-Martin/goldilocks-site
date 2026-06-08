// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'goldilocks',
			customCss: ['./src/styles/custom.css'],
			components: {
				Hero: './src/components/Hero.astro',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Helene-Garance-Martin/goldilocks' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [{ autogenerate: { directory: 'guides' } }],
				},
				{
					label: 'Commands',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
