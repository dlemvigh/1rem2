import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const config = defineConfig({
	plugins: [
		sveltekit({
			hot: !process.env.VITEST
		})
	],
	test: {
		globals: true,
		environment: 'jsdom'
	}
});

export default config;
