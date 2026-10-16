import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { extraHref, noteHref, slugFromFile } from './routes.mjs';

const DOC_REF = /^([\w.-]+\.(md|html))(#.*)?$/i;

/**
 * Sätteri mdast plugin. Notes cross-reference each other as `[x](guides.md)`, `[x](space-rotation.html)`
 * or plain `` `guides.md` ``. Rewrite those to site routes; inline-code references become links
 * only when the file exists.
 */
export default function docLinksPlugin({ contentDir }) {
	const hrefFor = (ref) => {
		const match = DOC_REF.exec(ref);
		if (!match) return null;
		const [, file, ext, hash = ''] = match;
		if (!existsSync(join(contentDir, file))) return null;
		return (ext.toLowerCase() === 'md' ? noteHref(slugFromFile(file)) : extraHref(file)) + hash;
	};

	return {
		name: 'doc-links',
		link(node, ctx) {
			const href = hrefFor(node.url);
			if (href) ctx.setProperty(node, 'url', href);
		},
		inlineCode(node, ctx) {
			const href = hrefFor(node.value);
			if (href) ctx.wrapNode(node, { type: 'link', url: href, children: [] });
		},
	};
}
