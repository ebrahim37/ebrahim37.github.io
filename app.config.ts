import { defineConfig } from '@solidjs/start/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	server: {
		https: {
			cert: 'ssl/fullchain.pem',
			key: 'ssl/privkey.pem',
		},
		output: {
			publicDir: 'docs',
		},
		compressPublicAssets: {
			brotli: false,
			gzip: false,
		},
		prerender: {
			routes: ['/'],
		},
	},
});
