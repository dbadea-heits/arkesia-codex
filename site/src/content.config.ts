import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { slugFromFile } from './lib/routes.mjs';

const notes = defineCollection({
	loader: glob({
		base: '..',
		pattern: '*.md',
		generateId: ({ entry }) => slugFromFile(entry),
	}),
});

export const collections = { notes };
