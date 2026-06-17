import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import vike from 'vike/plugin';
import vikeSolid from 'vike-solid/vite';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [
		tailwindcss(),
		vike(),
		vikeSolid(),
	],
	resolve: {
		alias: {
			'~': path.join(rootDir, 'src'),
		},
	},
});