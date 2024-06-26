import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { imagetools } from '@zerodevx/svelte-img/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		imagetools({
			profiles: {
				screenshot: new URLSearchParams('w=540;1280;2560&format=webp;jpg;png'),
				overlay: new URLSearchParams('format=webp;png'),
				icon: new URLSearchParams('w=48&format=svg'),
			},
		}),
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
