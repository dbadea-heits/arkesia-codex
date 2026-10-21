import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { slugFromFile } from './lib/routes.mjs';

/** Frontmatter of a class guide; the shape is defined in .omp/skills/lost-ark-skill-codes/GUIDE-TEMPLATE.md. */
const guide = z.object({
	class: z.string(),
	spec: z.string(),
	specKr: z.string(),
	role: z.enum(['DPS', 'Support']),
	content: z.string(),
	angle: z.enum(['none', 'back', 'head']),
	icon: z.string(),
	updated: z.coerce.date(),
});

export type Guide = z.infer<typeof guide>;

const notes = defineCollection({
	loader: glob({
		base: '..',
		pattern: '*.md',
		generateId: ({ entry }) => slugFromFile(entry),
	}),
	// Plain notes have no frontmatter; class guides must have all of it.
	schema: z.union([guide, z.object({}).strict()]),
});

export const collections = { notes };
