import { defineConfig } from '@solidjs/start/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	vite({ router }) {
		if (router === 'client') {
			return {
				plugins: [tailwindcss()],
				server: {
					hmr: {
						protocol: 'wss',
						host: 'localhost.ebra.dev',
						port: 3391,
					},
				},
			};
		}
		return {
			plugins: [tailwindcss()],
		};
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
