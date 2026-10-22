/**
 * How the notes are grouped on the site. Only presentation lives here; the content stays in the
 * root *.md files. Notes not listed below still get a page and appear under "More notes".
 */
export interface CatalogEntry {
	slug: string;
	/** Card label; class guides default to `<spec> <class>` from their frontmatter. */
	label?: string;
	/** Path under assets/icons/, e.g. `holyknight/holy-aura.png`; class guides default to their frontmatter `icon`. */
	icon?: string;
}

export interface Section {
	id: string;
	title: string;
	blurb: string;
	/** Item-grade colour used as the section accent. */
	grade: 'ancient' | 'relic' | 'legendary' | 'epic';
	entries: CatalogEntry[];
}

export const sections: Section[] = [
	{
		id: 'roster',
		title: 'Roster',
		blurb: 'Weekly plan, gold, honing and which class to play.',
		grade: 'ancient',
		entries: [
			{ slug: 'roster-plan', label: 'Roster tracker' },
			{ slug: 'guides', label: 'Gold, honing & Ark Grid' },
			{ slug: 'raid', label: 'Solo gold by item level' },
			{ slug: 'class-compare', label: 'Solo alt class comparison' },
			{ slug: 'tierlist', label: 'Inven class tier list' },
		],
	},
	{
		id: 'classes',
		title: 'Class builds',
		blurb: 'Skill codes, engravings, Ark Passive and rotations.',
		grade: 'relic',
		entries: [
			{ slug: 'paladin' },
			{ slug: 'paladin-solo' },
			{ slug: 'dimensionalist' },
			{ slug: 'berserker' },
			{ slug: 'shadowhunter' },
			{ slug: 'striker' },
			{ slug: 'scouter' },
			{ slug: 'slayer' },
			{ slug: 'wardancer' },
			{ slug: 'gk' },
		],
	},
	{
		id: 'content',
		title: 'Content guides',
		blurb: 'Paradise keys, raid walkthroughs and game settings.',
		grade: 'legendary',
		entries: [
			{ slug: 'paradise', label: 'Paradise Hell Keys' },
			{ slug: 'paladin-honing', label: 'Paladin honing to 1750', icon: 'holyknight/heavenly-blessings.png' },
			{ slug: 'thaemine', label: 'Thaemine solo' },
			{ slug: 'effect-settings', label: 'Effect settings' },
		],
	},
];

export const moreSection: Omit<Section, 'entries'> = {
	id: 'more',
	title: 'More notes',
	blurb: 'Everything else in the notes folder.',
	grade: 'epic',
};

export const extrasSection: Omit<Section, 'entries'> = {
	id: 'extras',
	title: 'Visual cheat sheets',
	blurb: 'Stand-alone rotation cards.',
	grade: 'epic',
};
