import preprocess from 'svelte-preprocess';
import cloudflare from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: cloudflare({
			target: 'es2020',
			platform: 'browser',
		}),
	},
	// Uncomment if using a newer version of SvelteKit and there's a module error
	// vite: {
	// 	optimizeDeps: {
	// 		entries: []
	// 	}
	// }
};

export default config;
