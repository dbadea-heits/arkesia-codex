# Lost Ark — Solo Raid Alt Class Comparison (1640, gold funnel)

Original goal: pick 3 of Guardian Knight, Valkyrie, Wardancer, Slayer, Paladin, Berserker, Striker, Shadowhunter to run Solo Mode raids at 1640 and funnel gold to a main.

Research date: 2026-09-30. Rewritten 2026-10-16 with the per-class build research (`GK.md`, `Shadowhunter.md`, `mayhem.md`, `compare-striker.md`, `slayer.md`, `scouter.md`, `paladin-solo.md`, `space.md`), the gold rules in `raid.md` / `guides.md`, and the roster in `roster-plan.md`.

## TL;DR

- **The roster is set and full.** 6 gold earners max per roster, and this roster has exactly 6 (`guides.md` → Gold rules). Adding a class means replacing one.
- **What got played** (`roster-plan.md`, 2026-10-15):

  | Character | Role | ilvl | Spec |
  |---|---|---|---|
  | Paladin | Main | 1720.0 | Blessed Aura (support) in party; Judgment (DPS) build for solo (`paladin-solo.md`) |
  | Dimensionalist | 2nd | 1704.5 | Space Wielder (`space.md`) |
  | Shadowhunter | 1640 alt | 1649.66 | Demonic Impulse |
  | Berserker | 1640 alt | 1648.00 | Mayhem |
  | Machinist | 1640 alt | 1646.66 | Arthetinean Skill |
  | Striker | 1640 alt | 1645.50 | Esoteric Flurry / Deathblow |

- **How that differs from the first pick** (Paladin / Guardian Knight / Shadowhunter): the Paladin became the main instead of a solo alt. Guardian Knight wasn't rolled. Berserker and Striker (the English-source picks) were kept, and Machinist was added from outside the candidate list.
- **Solo ease among the four alts** ([inference] from each build's engravings, see the per-class table): Shadowhunter, Machinist and pre-grid Berserker don't need a specific attack angle. Striker relies on back attacks, which makes it the hardest solo alt. It's already last in the honing queue.
- **The old gold claim was wrong for 1640.** 1640 solo gold is 100% **roster-bound**, not 50% character-bound, and roster-bound gold funds the main's honing. Details below.

## Solo Mode facts that affect the decision

Sources: `raid.md` (official patch notes up to Dimensions Unbound, 2026-09-16), `guides.md`, [Lost Ark Wiki: Solo Mode](https://lostark.fandom.com/wiki/Solo_Mode), [CoinLooting Solo Raid Guide](https://coinlooting.com/lost-ark-solo-raid-guide/).

### Gold

| ilvl | Best 3 solo raids | Gold/wk | Tradable | Bound |
|---|---|---|---|---|
| 1640 | Thaemine + Echidna + Ivory Tower | 17,700 | 0 | 17,700 roster-bound |
| 1660 | Aegir (11.5k) + Thaemine + Echidna | 24,000 | 5,750 | 18,250 |
| 1670 | Brelshaza (16.5k) + Aegir + Thaemine | 34,400 | 14,000 | 20,400 |
| 1680 | Mordum (21k) + Brelshaza + Aegir | 49,000 | 24,500 | 24,500 |
| 1710 | Final Day + Serca (matchmaking) + Act 4 | 91,000 | 45,500 | 45,500 |

- Thaemine, Echidna and Ivory Tower solo pay **100% roster-bound** gold (Thaemine since Dimensions Unbound). Aegir, Brelshaza and Mordum split 50/50 tradable / roster-bound. Act 4 / Final Day bound gold may be character-bound, which isn't confirmed (`roster-plan.md` → Time-limited checks).
- Roster-bound gold can't be traded, but **it does reach the main**: the plan sends all alt roster-bound gold to the Paladin's honing until 1730. That replaces the old claim that "only ~half of solo gold can be funneled".
- Solo pays the same as Normal. There's no solo Hard. Solo gives Normal loot with no auction chest.
- 1640 alts give the roster's **worst gold per hour** (17.7k/hour). The fix is honing them up the ladder above, not changing class (`guides.md` → Gold per hour).
- Solo shares the weekly gold limit and gate progress with Normal/Hard. Clearing Gate 1 in Solo locks that week's entry to Solo.

### Gear and progression

- **Ark Grid opens at 1700.** 1640 alts have no cores, so every alt build in this repo is a **pre-grid** build. Alts get no Base Camp / Rapid Growth selectors: their cores come only from drops and Core Essence.
- **Tempering from solo only:** Agris's Scales (Adv 1–10) drop from solo Echidna. Alcaone's Eyes (Adv 11–20) drop only from Echidna **Hard**, which is party-only, so a solo-only alt may have none. The fallback is in `roster-plan.md` → Alts.
- **Mokoko Buff** (a combat buff, not a honing discount) ended around 2026-10-13.

### Buffs and mechanics

- Solo buffs are picked before the fight. **True Supporter** is a damage buff that only support classes get, **including supports running a DPS build**. That's why DPS Paladin and DPS Valkyrie overperform in solo.
- **The solo back-attack buff gives the back-attack damage bonus from any angle, but it doesn't trigger Ambush Master.** This is one user's report on the Mayhem board (`mayhem.md` → Solo Mode notes). So Ambush Master builds still have to reach the boss's back.
- Counters, stagger, weak points / destruction and positioning are all still in solo.
- No support means no party attack-speed buff, no shields and no support mana. Swiftness-capped builds (Supersonic Breakthrough) and mana-hungry classes feel it (`mayhem.md`, `GK.md`).

## Per-class verdict (candidates + roster)

"Attack angle" comes from the engravings of the class's 1640 / pre-grid build in this repo: Ambush Master = back attack, Master Brawler = head attack, neither = doesn't depend on attack angle. That mapping is [inference]; Inven only says this outright for Paladin, Guardian Knight and Shadowhunter.

| Class (spec) | On roster | Attack angle at 1640 | Inven solo view | Pre-grid build in repo |
|---|---|---|---|---|
| Paladin (Judgment, DPS) | Main (support in party) | Doesn't depend on angle before Ark Grid. The 222 core makes it back-attack based, so don't rush 222 for solo | "King of solo", fastest by far; gets True Supporter | `paladin-solo.md`: Blunt Thorn code + Swiftness / Standing Striker code |
| Shadowhunter (Demonic Impulse) | 1640 alt | Doesn't depend on angle (no Ambush Master: Grudge, Keen Blunt Weapon, Adrenaline, Raid Captain, Cursed Doll) | Recommended in 3 threads; hit immunity on transform / un-transform; transforming heals ~20% | `Shadowhunter.md`: Hiloa "112 = pre-grid" code; alt build "easiest before Ark Grid" |
| Berserker (Mayhem) | 1640 alt | Pre-grid: doesn't depend on angle (Grudge, Keen Blunt Weapon, Master's Tenacity, Raid Captain, Cursed Doll). At 1700+ the 111 build needs Ambush Master, but the Sun1 core makes Dark Rush always count as a back attack | In a 6-alt solo roster, not top-ranked. The guide author calls the build "very easy to operate". Mana runs dry in solo | `mayhem.md`: Supersonic Breakthrough Mayhem (Jev pick 0.99) |
| Machinist (Arthetinean Skill) | 1640 alt | Doesn't depend on angle (Grudge, Raid Captain, Mass Increase, Keen Blunt Weapon, Adrenaline); Strategic Fire and Avalanche are push-immune | Inven rates the **Evolutionary Legacy** spec highly for solo; Arthetinean Skill wasn't discussed. Battery needs food | `scouter.md`: 431 tree (Jev 0.67) |
| Striker (Esoteric Flurry / Deathblow) | 1640 alt, last in queue | **Back attack**: Ambush Master in both 1640 builds. Deathblow 333 "requires" back attacks; Flurry 222 is less dependent | Not mentioned in the solo threads. Class board: pre-grid Flurry is slightly stronger and more forgiving at 1640. Deathblow needs Orb's Blessing (80 Enlightenment) | `compare-striker.md`: Flurry and Deathblow codes, plus the 3-Esoteric fallback |
| Guardian Knight (Dread Roar / Hellfire Successor) | No | Dread Roar: **head attack** (Master Brawler); head attacks are easy in solo because the boss faces you | 6-alt solo player ranks it #2, "very strong" | `GK.md`: Dread Roar 333 instant-cast (Jev 0.51), Hellfire "Quake" (0.32). No solo / no-grid code since KR's 2026-04-22 patch; loagg has the two specs tied (796 vs 785) |
| Slayer (Predator) | No | **Back attack** (Ambush Master; "land back attacks as skills come off cooldown") | In a 6-alt solo roster, not top-ranked | `slayer.md`: pre-grid Predator code a player used at 1640 (Jev 0.67) |
| Valkyrie (DPS) | No | Not researched | "Easy and comfortable"; gets True Supporter. One newbie kept missing her big-hit skills | none |
| Wardancer | No | Not researched | Not mentioned for solo; named as a Swiftness example ("you handle every destruction / stagger / counter yourself") | none |
| Dimensionalist (Space Wielder; not a candidate) | 2nd character | **Directional**: hits only count on the rift side. Time Wielder doesn't depend on angle | Board: Space is hard in solo because of back attacks; players lean toward Time for solo | `space.md`: 111 no-Adrenaline code until the 222 cores are Relic 17p |

All codes are KR. They import correctly on global only if global has the matching KR balance patch, which is unverified for every class above.

## Pass 1 — English sources (2026-09-30)

Sources: [ExpCarry 2026 tier list](https://expcarry.com/lost-ark-classes-tier-list), [Skycoach](https://skycoach.gg/blog/lost-ark/articles/lost-ark-best-class-tier-list), [TheGamer](https://www.thegamer.com/lost-ark-best-solo-classes), [GK "Easy But BROKEN Hellfire" guide (YouTube)](https://www.youtube.com/watch?v=nB8NKvk0g8c).

Mid-2026 PvE tiers (ExpCarry): Wardancer S; Berserker, Slayer and Striker A; Shadowhunter B; Paladin / Valkyrie top-priority supports. Berserker, Slayer and Summoner are named as good gold-farming alts. The first-pass ranking was Berserker > Striker > Wardancer > Guardian Knight > Slayer > Valkyrie > Paladin > Shadowhunter. It ranked Paladin low because it assumed the support spec; Pass 2 corrected that.

## Pass 2 — KR Inven solo threads (2026-09-30)

23 Inven Q&A threads about which class to play in solo (Dec 2024 – Aug 2026), plus their comments. Key threads: [#247784](https://www.inven.co.kr/board/lostark/4822/247784), [#239882](https://www.inven.co.kr/board/lostark/4822/239882), [#248027](https://www.inven.co.kr/board/lostark/4822/248027), [#246736](https://www.inven.co.kr/board/lostark/4822/246736) (6-alt solo roster), [#247753](https://www.inven.co.kr/board/lostark/4822/247753), [#239758](https://www.inven.co.kr/board/lostark/4822/239758), [#244922](https://www.inven.co.kr/board/lostark/4822/244922), [#239738](https://www.inven.co.kr/board/lostark/4822/239738).

Consensus:

1. Solo is easy; **any class clears**. Pick for fun first.
2. **Support-DPS** (DPS Paladin, DPS Valkyrie) get True Supporter and dominate (KR slang "깡패", "thugs"). Fastest overall: DPS Paladin with one Brand skill slotted, #1 by a wide margin even against Ambush Master builds (#239882).
3. **Classes that don't depend on attack angle (KR 타대) are easiest**, and head-attack classes are also easy because the boss only looks at you. **Back-attack classes are hardest.**
4. **Swiftness-based** classes are comfortable, and so are classes with shields or hit immunity.
5. At bare 1640 with level 5–7 gems, clears are "surprisingly quick"; elixirs aren't required (#239738).

Other classes Inven rates highly for solo (not candidates): Lone Knight Gunlancer, Destroyer, Asura's Path Breaker (KR 수라, "king of solo difficulty"), Evolutionary Legacy Machinist, Wind Fury Aeromancer, Control Glaivier.

## Caveats

- Inven reflects KR patches; global balance can differ. No source compared clear times between classes directly.
- The attack-angle column is read from engravings, not from source statements ([inference]), except for Paladin, Guardian Knight, Shadowhunter and Dimensionalist.
- None of the alt builds was written for Solo Mode. They're party pre-grid builds that people also run solo (each build doc's caveats).
- The Pass-1 tier data is from gold-selling / boosting sites (ExpCarry, Skycoach, CoinLooting); treat it as indicative.
- Whether Act 4 / Final Day bound gold is character-bound or roster-bound decides how much a 1710 alt's bound gold can fund other characters (`roster-plan.md` → Order).
