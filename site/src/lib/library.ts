import type { ImageMetadata } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import { extrasSection, moreSection, sections, type Section } from '../catalog';
import { extraHref, noteHref } from './routes.mjs';

const icons = import.meta.glob<ImageMetadata>('../../../assets/icons/*/*.png', { eager: true, import: 'default' });
const extraFiles = import.meta.glob<string>('../../../*.html', { eager: true, query: '?raw', import: 'default' });

export interface LibraryItem {
	href: string;
	label: string;
	title: string;
	icon?: ImageMetadata;
}

export interface LibrarySection extends Omit<Section, 'entries'> {
	items: LibraryItem[];
}

export interface Extra {
	file: string;
	title: string;
	html: string;
}

const fileName = (path: string) => path.slice(path.lastIndexOf('/') + 1);

/** First `# heading` of a note, without inline images. */
export const docTitle = (doc: CollectionEntry<'notes'>) => {
	const h1 = doc.body?.match(/^# (.+)$/m)?.[1] ?? doc.id;
	return h1.replace(/!\[[^\]]*\]\([^)]*\)\s*/g, '').trim();
};

export const iconFor = (path?: string) => (path ? icons[`../../../assets/icons/${path}`] : undefined);

export const extras: Extra[] = Object.entries(extraFiles).map(([path, html]) => ({
	file: fileName(path),
	title: html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim() ?? fileName(path),
	html,
}));

export async function getLibrary(): Promise<LibrarySection[]> {
	const docs = new Map((await getCollection('notes')).map((doc) => [doc.id, doc]));
	const listed = new Set<string>();

	const resolved: LibrarySection[] = sections.map(({ entries, ...section }) => ({
		...section,
		items: entries.flatMap(({ slug, label, icon }) => {
			const doc = docs.get(slug);
			if (!doc) return [];
			listed.add(slug);
			return [{ href: noteHref(slug), label, title: docTitle(doc), icon: iconFor(icon) }];
		}),
	}));

	const unlisted = [...docs.values()].filter((doc) => !listed.has(doc.id));
	if (unlisted.length) {
		resolved.push({
			...moreSection,
			items: unlisted.map((doc) => ({ href: noteHref(doc.id), label: docTitle(doc), title: doc.id })),
		});
	}
	if (extras.length) {
		resolved.push({
			...extrasSection,
			items: extras.map(({ file, title }) => ({ href: extraHref(file), label: title, title: file })),
		});
	}
	return resolved;
}
