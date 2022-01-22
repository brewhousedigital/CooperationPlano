import adapter from '@sveltejs/adapter-netlify';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		// Svelte requires an adapter for deployment
		adapter: adapter(),
	}
};

export default config;
