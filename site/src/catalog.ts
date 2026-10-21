/**
 * How the notes are grouped on the site. Only presentation lives here; the content stays in the
 * root *.md files. Notes not listed below still get a page and appear under "More notes".
 */
export interface CatalogEntry {
	slug: string;
	label: string;
	/** Path under assets/icons/, e.g. `holyknight/holy-aura.png`. */
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
			{ slug: 'paladin', label: 'Support Paladin', icon: 'holyknight/holy-aura.png' },
			{ slug: 'paladin-solo', label: 'Judgment Paladin (solo)', icon: 'holyknight/sacred-executioner.png' },
			{ slug: 'space', label: 'Dimensionalist', icon: 'dimensionalist/spatial-slash.png' },
			{ slug: 'mayhem', label: 'Mayhem Berserker', icon: 'berserker/dark-rush.png' },
			{ slug: 'shadowhunter', label: 'Demonic Impulse Shadowhunter', icon: 'demonic/demonic-clone.png' },
			{ slug: 'compare-striker', label: 'Striker', icon: 'battlemastermale/call-of-the-wind-god.png' },
			{ slug: 'scouter', label: 'Machinist', icon: 'scouter/command-carpet.png' },
			{ slug: 'slayer', label: 'Predator Slayer', icon: 'berserkerfemale/guillotine.png' },
			{ slug: 'wardancer', label: 'First Intention Wardancer', icon: 'battlemaster/sweeping-kick.png' },
			{ slug: 'gk', label: 'Guardian Knight', icon: 'guardianknight/quake-smash.png' },
		],
	},
	{
		id: 'content',
		title: 'Content guides',
		blurb: 'Paradise keys and raid walkthroughs.',
		grade: 'legendary',
		entries: [
			{ slug: 'paradise', label: 'Paradise Hell Keys' },
			{ slug: 'thaemine', label: 'Thaemine solo' },
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
