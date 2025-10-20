import { defineConfig } from '@solidjs/start/config';
import tailwindcss from '@tailwindcss/vite';
// @ts-expect-error
import { readFileSync } from 'fs';

import type { Post, Tag } from '~/utils/posts.ts';
const { posts, tags }: { posts: Post[], tags: Tag[] } = JSON.parse(readFileSync('src/posts/posts.json', 'utf8'));

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
			routes: [
				'/',
				'/resume',
				...posts.map(x => `/posts/${x.slug}`),
				...tags.map(x => `/tags/${x.slug}`),
				'/404.html',
			],
			crawlLinks: true,
		},
	},
});
