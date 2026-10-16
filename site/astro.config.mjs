import { fileURLToPath } from 'node:url';
import { satteri } from '@astrojs/markdown-satteri';
import { defineConfig } from 'astro/config';
import docLinksPlugin from './src/lib/doc-links-plugin.mjs';
import { BASE, SITE } from './src/lib/routes.mjs';
import taskLinesPlugin from './src/lib/task-lines-plugin.mjs';
import taskToggleServer from './src/lib/task-toggle-server.mjs';

// The notes (*.md, *.html, assets/) live one level up; the site renders them in place.
const contentDir = fileURLToPath(new URL('..', import.meta.url));

export default defineConfig({
	site: SITE,
	base: BASE,
	markdown: {
		syntaxHighlight: false,
		processor: satteri({ mdastPlugins: [docLinksPlugin({ contentDir }), taskLinesPlugin()] }),
	},
	vite: {
		plugins: [taskToggleServer({ contentDir })],
		server: { fs: { allow: [contentDir] } },
	},
});
