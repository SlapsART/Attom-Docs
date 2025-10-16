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

			// Intento de confirguraciones diferentes idiomas. --- Posponer por ahora ---
			
			/*locales: {
				es: {label: 'Español', lang: 'es', dir: 'ltr' },
			},
			defaultLocale: 'es',*/

			logo: {src: './src/assets/Attom-DS.svg', alt: 'Attom Docs Logo',
				replacesTitle: true
			},
			description: 'Documentación oficial del diseño y desarrollo del sistema de diseño Attom.',
			// Optional: add links to your social media profiles
			//social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],

							// Ruta relativa a tu archivo CSS personalizado
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Introducción',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Acerca de Attom DS', slug: 'introduccion/acerca-de-attom' },
						//{ label: 'Actualizaciones', slug: 'introduccion/actualizaciones' },
						{ label: 'Versionamiento', slug: 'introduccion/versiones' },
					],
				},
				{
					label: 'Investigación IA',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Fundamentos', slug: 'investigacion/fundamentos-ia' },
					],
				},
				{
					label: 'Diseño',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Color', slug: 'diseno/color' },
					],
				},
				{
					label: 'Componentes',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Icons', slug: 'componentes/icons' },
					],
				},
			],
		}),
	],
});
