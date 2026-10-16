/** URL slug for a notes file: `Shadowhunter.md` → `shadowhunter`, `class_compare.md` → `class-compare`. */
export const slugFromFile = (file) =>
	file
		.replace(/\.md$/i, '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');

/** GitHub Pages serves the site from https://dbadea-heits.github.io/arkesia-codex/. */
export const SITE = 'https://dbadea-heits.github.io';
export const BASE = '/arkesia-codex';

export const homeHref = `${BASE}/`;
export const noteHref = (slug) => `${BASE}/notes/${slug}/`;
export const extraHref = (file) => `${BASE}/extras/${file}`;

/** Dev-server endpoint that writes a ticked checkbox back to its note (see task-toggle-server.mjs). */
export const TASK_TOGGLE_ROUTE = '/__tasks/toggle';
