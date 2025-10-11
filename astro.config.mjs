// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// Cambia esta URL por la URL de tu sitio publicado
	site: 'https://slapsart.github.io',
	// Si tu sitio está en un subdirectorio, descomenta y ajusta la siguiente línea
	base: '/Attom-Docs',
	integrations: [
		starlight({
			title: 'Attom Docs',
			//social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Investigación IA',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Fundamentos', slug: 'investigacion/fundamentos-ia' },
					],
				},
				{
					label: 'Componentes',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Fundamentos', slug: 'componentes/fundamentos' },
						{ label: 'Básicos', slug: 'componentes/basicos' },
					],
				},
			],
		}),
	],
});
