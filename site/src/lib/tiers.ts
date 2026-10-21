import tierlist from '../../../tierlist.md?raw';

export interface TierRating {
	/** Column header of the source list, e.g. `Oct 20`. */
	list: string;
	/** `S`, `A+`, … or `—` when that list didn't rate it. */
	tier: string;
}

export interface TierEntry {
	ratings: TierRating[];
	avg: number;
}

/** Cells of a Markdown table row: `| a | b |` → `['a', 'b']`. */
const cells = (line: string) => line.split('|').slice(1, -1).map((cell) => cell.trim());
/** Lookup key: `Judgment (DPS)` / `Time Wielder†` in tierlist.md match a guide's `spec: Judgment` / `Time Wielder`. */
const key = (cls: string, engraving: string) =>
	`${cls.toLowerCase()}|${engraving.replace(/\(.*?\)|[†*]/g, '').trim().toLowerCase()}`;

/** Rows of tierlist.md's tier table (the one with an `Avg` column), keyed by class + engraving. */
const entries = new Map<string, TierEntry>();
const lines = tierlist.split('\n');
const headerAt = lines.findIndex((line) => line.startsWith('|') && cells(line).includes('Avg'));
if (headerAt >= 0) {
	const header = cells(lines[headerAt]);
	const avgCol = header.indexOf('Avg');
	for (const line of lines.slice(headerAt + 2)) {
		if (!line.startsWith('|')) break;
		const row = cells(line);
		entries.set(key(row[0], row[1]), {
			ratings: header.slice(2, avgCol).map((list, i) => ({ list, tier: row[i + 2] })),
			avg: Number(row[avgCol]),
		});
	}
}

export const tierFor = (cls: string, spec: string) => entries.get(key(cls, spec));
