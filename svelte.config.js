import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');


/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			precompress: false,
			strict: true,
			fallback: '404.html'
		}),
		// Custom settings
		paths: {
			// hard-coded path as fallback in case github build path messes up
			base: dev ? '' : (process.env.BASE_PATH || '/svelte-image-reference'),
			// assets: dev ? "/src/lib/assets/" : process.env.BASE_PATH,
		}
	}
};

export default config;
