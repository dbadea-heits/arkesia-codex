---
class: Dimensionalist
spec: Time Wielder
specKr: 시간 관리자
role: DPS
content: Solo Mode
angle: none
icon: dimensionalist/forewarning.png
updated: 2026-10-21
---

Solo Mode gold-funnel alt at 1704.5 climbing to 1710 (1715 / 1720 optional), switching from Space Wielder. Inven's Extreme Mordum list in [tierlist.md](tierlist.md) rates Time Wielder S and Space Wielder A (avg 10.0 vs 7.0), and Time Wielder has no back attack, no rift to open and close.
Codes are KR builds imported to CE; whether they play like KR depends on global having KR's 2026-07-22 Dimensionalist balance patch.

## Play this now

Time 111, Pinpoint Strike without a gem. It needs no Ark Grid cores, which fits a character with no usable Time cores yet. Play it until the 222 cores below are in.

```
4C2378D3E51EE8AA7729253F16D71F0CB845990949307D49579981BB6D76E91BB036B917232AB9CA44171DF21E9D13C32C21FA06742FA44248D3186E95406062
```

- Source: 업혀가나, "시간 111 일점 노보석 [배율 투력1.1, 로펙1.17+]" (Time 111, no gem on Pinpoint Strike; multiplier 1.1, LoPEC 1.17+) — https://www.inven.co.kr/board/lostark/6543/4173 (2026-08-05, after the 7/22 patch)
- What the code holds: Enlightenment Time Wielder 1, Singularity 1, Acceleration Enhancement 3, On the Hour 1, Hidden Enhancement 1, Timeline Collapse 3; Evolution Crit 10, Specialization 30; runes on all 8 leveled skills
- 업혀가나 is the author Inven commenters point to for Time (4260, 4397). This is his latest 111 revision: a short repeating loop whose Divergence part is always the same, "very comfortable". No gem on ![Pinpoint Strike](assets/icons/dimensionalist/pinpoint-strike.png) Pinpoint Strike gives more Divergence and ![Dimensional Break](assets/icons/dimensionalist/dimensional-break.png) Dimensional Break casts (about 2% more DPS in his 3-minute test with no runes)
- Changes from his earlier build: a cooldown gem on ![Airsplitter](assets/icons/dimensionalist/airsplitter.png) Airsplitter, no gem on Pinpoint Strike, different runes. The rune list and engravings are only in screenshots, so check them after importing
- Weak spot: Dimensional Break's cooldown still drifts a little, so short dead gaps happen. Time 111 also loses its cycle when a skill misses while you build toward Divergence (Inven 5108); a boss that doesn't move, as in Solo Mode, softens that

## How it plays

- **Phase Dial:** time ticks the dial forward every second and landing skills winds it up. Each wind-up cuts every skill's remaining cooldown by 0.2s (more with Specialization) and gives the Acceleration buff (+10% attack speed, +5% cast speed, +50% MP recovery for 6s). When the minute hand passes 12 o'clock, ![Timeline Divergence](assets/icons/dimensionalist/timeline-divergence.png) Timeline Divergence (Z) becomes available.
- **Timeline Divergence** leaves an echo, then pauses the dial and your cooldowns for 15s; every regular skill is usable once inside it, whatever its cooldown outside. Leave with ![Timeline Collapse](assets/icons/dimensionalist/timeline-collapse.png) Timeline Collapse (Z: damage, back to your echo, push immunity and 50% damage reduction for 2s), End Split Timeline (X: no damage, stay where you are), or let the 15s run out. Forgetting Collapse loses only Collapse's own hit.
- Your HP reverts to what it was before Divergence when you leave: don't drink potions inside it, use it to soak damage.
- Delayed-hit skills (![Pinpoint Strike](assets/icons/dimensionalist/pinpoint-strike.png) Pinpoint Strike, ![Temporal Crush](assets/icons/dimensionalist/temporal-crush.png) Temporal Crush, ![Karmic Verdict](assets/icons/dimensionalist/karmic-verdict.png) Karmic Verdict, ![Shackles of Time](assets/icons/dimensionalist/shackles-of-time.png) Shackles of Time) wind the dial when their hits land, so let them finish ticking before pressing Divergence.
- ![Cross Thrust](assets/icons/dimensionalist/cross-thrust.png) Cross Thrust: charge it fully, or it hits once and winds the dial half as much. Press it twice with a half-beat gap, not as a spam: a fast second press gets eaten (Inven 3941), and without push immunity a hit also eats it (Inven 4081).
- **No angle needed:** Hit Master is a non-directional bonus, so no back attack. Names for Divergence / Collapse are from Maxroll's [Time Wielder guide](https://maxroll.gg/lost-ark/build-guides/time-wielder-dimensionalist-build-guide); their icon mapping (Inven `ark_passive_di_5` / `ark_passive_di_6`) is inferred from the rotations.

## Setup

- **Engravings:** Grudge, Adrenaline, Keen Blunt Weapon, Hit Master, Cursed Doll (loagg, 721 Time Wielders at 1720+: 721 / 720 / 715 / 683 / 669). Stabilized Status can replace Cursed Doll (43 loagg players do)
- **Stats and Ark Passive:** Specialization first (Inven 277 quotes about 1,800, 4621 about 1,840), Swiftness as the other base stat. Evolution Crit 10, Specialization 30, Boundless MP 2, Unlimited Magick 2, Master 1, Pulverize 1, Standing Striker 2, plus Optimized Training 1 (the 111 codes) or Keen Sense 1 (the 222 codes; Maxroll swaps Keen Sense for Optimized Training for lower cooldowns at the cost of crit). Enlightenment Time Wielder 1, Singularity 1, Acceleration Enhancement 3, On the Hour 1, Hidden Enhancement 1, Timeline Collapse 3. Leap Instant Spell 2, Release Potential 4, Unleashed Power 5, Quantum Prison 3
- **Gems** (Inven 3941, 222 priority; damage = 겁화, cooldown = 작열): 1) ![Dimensional Break](assets/icons/dimensionalist/dimensional-break.png) Dimensional Break damage + cooldown. 2) ![Timeline Divergence](assets/icons/dimensionalist/timeline-divergence.png) Timeline Divergence damage. 3) ![Temporal Crush](assets/icons/dimensionalist/temporal-crush.png) Temporal Crush cooldown. 4) ![Cross Thrust](assets/icons/dimensionalist/cross-thrust.png) Cross Thrust and Temporal Crush damage. 5) ![Boundary Break](assets/icons/dimensionalist/boundary-break.png) Boundary Break, ![Forewarning](assets/icons/dimensionalist/forewarning.png) Forewarning, ![Needle Strike](assets/icons/dimensionalist/needle-strike.png) Needle Strike cooldown. 6) Boundary Break damage, Cross Thrust cooldown. Maxroll adds ![Pinpoint Strike](assets/icons/dimensionalist/pinpoint-strike.png) Pinpoint Strike to the damage and cooldown lists for 111

Shared by every code below unless a build says otherwise.

## Rotation

Checked against the post's skill icons. Opener, then a three-step loop that ends in the Divergence block.

- Opener: ![Airsplitter](assets/icons/dimensionalist/airsplitter.png) Airsplitter → ![Forewarning](assets/icons/dimensionalist/forewarning.png) Forewarning → ![Needle Strike](assets/icons/dimensionalist/needle-strike.png) Needle Strike → ![Cross Thrust](assets/icons/dimensionalist/cross-thrust.png) Cross Thrust → ![Karmic Verdict](assets/icons/dimensionalist/karmic-verdict.png) Karmic Verdict → ![Dimensional Break](assets/icons/dimensionalist/dimensional-break.png) Dimensional Break → Divergence block
- Divergence block (always the same): ![Timeline Divergence](assets/icons/dimensionalist/timeline-divergence.png) Timeline Divergence → ![Karmic Verdict](assets/icons/dimensionalist/karmic-verdict.png) Karmic Verdict → ![Dimensional Break](assets/icons/dimensionalist/dimensional-break.png) Dimensional Break → ![Temporal Crush](assets/icons/dimensionalist/temporal-crush.png) Temporal Crush → ![Boundary Break](assets/icons/dimensionalist/boundary-break.png) Boundary Break → ![Timeline Collapse](assets/icons/dimensionalist/timeline-collapse.png) Timeline Collapse
- Loop, repeated forever:
  1. ![Forewarning](assets/icons/dimensionalist/forewarning.png) Forewarning → ![Needle Strike](assets/icons/dimensionalist/needle-strike.png) Needle Strike → ![Temporal Crush](assets/icons/dimensionalist/temporal-crush.png) Temporal Crush → ![Boundary Break](assets/icons/dimensionalist/boundary-break.png) Boundary Break → ![Airsplitter](assets/icons/dimensionalist/airsplitter.png) Airsplitter → ![Cross Thrust](assets/icons/dimensionalist/cross-thrust.png) Cross Thrust
  2. ![Forewarning](assets/icons/dimensionalist/forewarning.png) Forewarning → ![Needle Strike](assets/icons/dimensionalist/needle-strike.png) Needle Strike → ![Pinpoint Strike](assets/icons/dimensionalist/pinpoint-strike.png) Pinpoint Strike → ![Airsplitter](assets/icons/dimensionalist/airsplitter.png) Airsplitter
  3. ![Forewarning](assets/icons/dimensionalist/forewarning.png) Forewarning → ![Needle Strike](assets/icons/dimensionalist/needle-strike.png) Needle Strike → ![Cross Thrust](assets/icons/dimensionalist/cross-thrust.png) Cross Thrust → ![Dimensional Break](assets/icons/dimensionalist/dimensional-break.png) Dimensional Break → Divergence block

## Other builds

### Runner-up — Time 111, 4 Quick Recharge, Cross Thrust stockpile

```
5CF7688A8910B6EC70D20D24AB5A013881327415A52ABED5E3CF51C4428D98861F0DBC4B6088AFBAE748F0C3DF4FC5A43A336C15EBA27D5B599D6224E1B4FF35
```

- Source: 업혀가나, "배율은 유지하면서 실전성 높인 시간 111" (111 that keeps the multiplier but plays better) — https://www.inven.co.kr/board/lostark/6543/3645 (2026-07-27)
- Difference from the pick: same Ark Passive, but loose rules instead of a fixed loop. Needle Strike + Forewarning as a pair, then two Fusion skills, or one Fusion skill + Cross Thrust; the Divergence block is the same. The author says you "almost never" have to watch Cross Thrust's cooldown. Multiplier 1.06 to 1.1
- Gems in that post: cooldown gems on Needle Strike, Forewarning, Cross Thrust and Pinpoint Strike; damage and cooldown gems on Temporal Crush, Boundary Break and Dimensional Break; a damage gem on Timeline Divergence

### Once the 222 cores are in — Time 222, Dial Acceleration variant

Switch when Twisted Timeline (Sun) is at Relic 17P, Timeline (Moon) at 14P and Distortion (Star) at 10P: the minimum Inven says runs (업혀가나 in comments on 3941, 4089 and 378). Time 222 is the biggest loagg group (349 of 721 Time Wielders) and has the highest ceiling: the Inven comment ranking is 222 > 112 > 111, and loagg's average combat power is about 4,410 on 222 vs about 4,130 on 111 (confounded by gear, so a hint only).

```
B418331D47FD492038A29C05D6B229D8A21EDB9201999B85FE2434E2AE66E1D57F60BE68B037A1C2E82B00E368055FA677DAF5637AACE052B4D29A9DCB591F52
```

- Source: 업혀가나, "옆집 뽀삐도 가능한 시간 222 배율 1.33+" (Time 222 the neighbor's dog can play) — https://www.inven.co.kr/board/lostark/6543/3941 (2026-07-30, certified)
- What the code holds: Evolution Crit 10, Specialization 30, Keen Sense 1; runes on all 8 leveled skills
- Why this one: the author's practical pick over his Weakness Exposure (약점 포착) variant in the same post, which has a 2 to 3% higher ceiling but idle gaps ("현타"). A 4-step loop repeated forever, no Cross Thrust cooldown tracking, cooldown bracelets carry no penalty, and it recovers quickly from missed skills. Multiplier 1.25+ (LoPEC 1.3+). Peak damage swings a lot with whether Rage and crits proc (222 is a crit-rate and attack/move-speed efficiency class), so don't chase the 1.3+ number
- How the 222 cores change the rotation (Maxroll): Dimensional Break becomes the main damage skill and everything else exists to cut its cooldown. Twisted Timeline cuts Dimensional Break's cooldown by 5s when Destiny activates, makes casting a Fusion skill cut Cross Thrust's cooldown by 10s, and nerfs Pinpoint Strike, Temporal Crush and Boundary Break damage by 90% inside Divergence (Temporal Crush cast right before you exit lands in the original timeline at full damage). Timeline gives Destiny on Cross Thrust. Distortion boosts Cross Thrust
- Opener: ![Airsplitter](assets/icons/dimensionalist/airsplitter.png) Airsplitter → ![Forewarning](assets/icons/dimensionalist/forewarning.png) Forewarning → ![Needle Strike](assets/icons/dimensionalist/needle-strike.png) Needle Strike → ![Shackles of Time](assets/icons/dimensionalist/shackles-of-time.png) Shackles of Time → ![Cross Thrust](assets/icons/dimensionalist/cross-thrust.png) Cross Thrust ×2 → ![Karmic Verdict](assets/icons/dimensionalist/karmic-verdict.png) Karmic Verdict → ![Dimensional Break](assets/icons/dimensionalist/dimensional-break.png) Dimensional Break → ![Timeline Divergence](assets/icons/dimensionalist/timeline-divergence.png) Timeline Divergence → ![Timeline Collapse](assets/icons/dimensionalist/timeline-collapse.png) Timeline Collapse
- Loop, repeated forever (every step starts with Cross Thrust ×2, a half-beat apart):
  1. ![Cross Thrust](assets/icons/dimensionalist/cross-thrust.png) ×2 → ![Forewarning](assets/icons/dimensionalist/forewarning.png) → ![Needle Strike](assets/icons/dimensionalist/needle-strike.png) → ![Temporal Crush](assets/icons/dimensionalist/temporal-crush.png) → ![Pinpoint Strike](assets/icons/dimensionalist/pinpoint-strike.png)
  2. ![Cross Thrust](assets/icons/dimensionalist/cross-thrust.png) ×2 → ![Forewarning](assets/icons/dimensionalist/forewarning.png) → ![Needle Strike](assets/icons/dimensionalist/needle-strike.png) → ![Dimensional Break](assets/icons/dimensionalist/dimensional-break.png) → ![Boundary Break](assets/icons/dimensionalist/boundary-break.png)
  3. ![Cross Thrust](assets/icons/dimensionalist/cross-thrust.png) ×2 → ![Forewarning](assets/icons/dimensionalist/forewarning.png) → ![Needle Strike](assets/icons/dimensionalist/needle-strike.png)
  4. ![Cross Thrust](assets/icons/dimensionalist/cross-thrust.png) ×2 → ![Airsplitter](assets/icons/dimensionalist/airsplitter.png) → ![Dimensional Break](assets/icons/dimensionalist/dimensional-break.png) → ![Timeline Divergence](assets/icons/dimensionalist/timeline-divergence.png) → ![Timeline Collapse](assets/icons/dimensionalist/timeline-collapse.png)
- Skippable: Airsplitter (no effect on the cycle) and, in practice, Needle Strike (a little idle time only). For a higher peak, after Collapse and the two Cross Thrusts, if everything is off cooldown, skip Forewarning + Needle Strike and use only Temporal Crush + Pinpoint Strike. Skipping too many Forewarning / Needle Strike pairs stretches the awakening cycle

### Once the 222 cores are in, runner-up — Time 222, Inven 378 guide

```
FF7858F5CD3F9DCB6F211EB80E6544F4E80C6E8E4DCCBD507C7ACE373D804D997CDC9311FDED301391B0AF9D2EE186B3B74DF4247EDF45DE14985B69FCBB69E4
```

- Source: 업혀가나, "[2026.7.26] 시간 222 차원술사 공략 가이드" (Time 222 Dimensionalist guide, 7/26 revision) — https://www.inven.co.kr/board/lostark/6543/378 (2026-07-26, certified)
- Difference from the pick: the full guide behind the 3941 cycle: same loops, plus the engraving, Ark Passive and tripod notes; the Temporal Crush tripod is listed as Dial Acceleration or Weakness Exposure. Evolution Crit 10, Specialization 30, Keen Sense 1. It is the older of the two
- Newer, unranked: Inven [5133](https://www.inven.co.kr/board/lostark/6543/5133) (산양성, 2026-10-12, Time 222 with a 10-gem log: multiplier about 1.31 to 1.35) is the newest Time 222 code on the board. It has no rotation or engraving notes

## Ark Grid

You own Multislash, Precise Control and Dimensional Annihilation. Multislash and Precise Control are Space cores and do nothing on Time; register them for Core Essence. Dimensional Annihilation is the Time 333 Sun core (3 to 5 of 721 loagg characters play 333, and Inven has no 333 code or priority): +1.5% damage at 10P, and its 14P and 17P need Destiny, which Time gets only from a Moon core you don't have. Keep it in the Order Sun slot only while you have spare gems, at 10P, until Twisted Timeline replaces it. Each core works only for its own spec.

Target is Time 222:

| Slot | Core | Why |
|---|---|---|
| Order Sun | Twisted Timeline (왜곡된 시간선) | Mandatory at Relic 17P; changes the rotation |
| Order Moon | Timeline (타임 라인) | Destiny on Cross Thrust, Dimensional Break damage; minimum 14P |
| Order Star | Distortion (비틀림) | Cross Thrust damage and cast speed; 10P is enough |

Why 222 over 111: the 111 cores only add small buffs and none is mandatory, so a Relic selector spent on 111 buys little. The 222 Sun core is mandatory, so that is where a Relic selector pays off. The Time 111 cores are Timekeeper (Sun, 타임 키퍼: +10% attack speed always, +6% crit rate and +5% damage with Destiny), Combine Weapon (Moon, 컴바인 웨폰: Destiny on Dimensional Break, +5% Fusion cast speed) and Fusion Enhancement (Star, 결합 강화: Dimensional Break and Boundary Break damage, push immunity on Dimensional Break). 111 priority if you stay: Relic Star > Moon > Sun; Legendary Sun and Moon at 14P run the whole cycle (Inven 277, 4173). Core names are Maxroll's ([Ark Grid overview](https://maxroll.gg/lost-ark/resources/ark-grid-overview), Time Wielder guide); KR names are loagg's, paired by slot and set number in Maxroll's core IDs, so the pairing is inferred.

Priority for the 222 cores (Inven 277, 3941, 378): Relic Sun > Moon > Star; Ancient Sun = Moon > Star (277) or Sun > Moon = Star (3941).

What to take from selectors:

1. **Core essence pity box Relic selector → Sun, Twisted Timeline.** Ark Pass astrogem → Order / DPS → auto-equip → 17P. The mandatory core goes first.
2. **1715 Rapid Growth Relic Order selector (optional honing, before 2026-12-16) → Moon, Timeline**, 17P (14P is the minimum).
3. **Star, Distortion:** equip whichever Distortion drops (Act 4 / Final Day) and register everything else.
4. **Until all three are in, play 111.** One Inven Solo player with Timeline + Distortion says one Relic ticket makes 222 possible (a commenter on 5095, 2026-10-07).
5. **Chaos:** none before 1720. At 1720 the Relic Chaos selector gives one Chaos core. Chaos cores are shared across DPS specs (Maxroll): Sun Flashy Attack (현란한 공격), Moon Smoldering Strike (불타는 일격), Star Attack (공격). loagg shows 687 / 677 / 674 of 721 on those; no source ranks them, so the choice is open.

## Caveats

- No Solo Mode Time code or core-priority post exists, so every code here is a general Time build from after the 2026-07-22 patch. Solo threads are split: "solo clears without cores" (4365, 2026-08-10); "in solo always Time 222" vs "111 is better in solo for crit, attack speed and cast speed" (4271, 2026-08-07); "solo is easy, anything works" (290).
- Later balance changes are unconfirmed: Inven threads 4677 (2026-08-27) and 4741 (2026-08-31) mention further nerfs that touch Time. Codes dated 07-23 to 08-05 may predate them; only 5133 (10-12) is newer than August.
- Maxroll's Time Wielder guide (updated 2026-09-27) shows Time Wielder exists on global with the same cores and engravings, but whether global has KR's 7/22 balance patch is unverified.

## Paradise Crucible

Crucible (KR 낙원 증명) is Paradise's solo boss ladder, ranked per class. Only skill levels and tripods carry into Paradise, so the raid spec and Ark Grid don't matter here (details in [paladin.md](paladin.md#paradise-crucible)). These KR codes were checked on [lostark.bible](https://lostark.bible/tools/skill-code) and uploaded to CE on 2026-10-15, so they import on EUC.

### Pick

```
759BDF865D672769A2C37C62347B0D14882515AB8C0C9804A0E0892E3BD32D2A40D1FF76CA81CF4EBB5BA5568D421A4EDF66797535C9C8526C7D05BA287FDFA0
```

- Source: [fmkorea Crucible guide](https://www.fmkorea.com/10061421514) (2026-07-09, KR Season 3); the author cleared Crucible 10 at 3.5M Paradise score. This is his tree once Liquor Glass reaches level 9. It predates the 2026-07-22 Dimensionalist balance patch; the Season 4 author below runs the same skill families, but whether the patch changed these skills' values is unchecked
- Awakening ![Shackles of Time](assets/icons/dimensionalist/shackles-of-time.png) Shackles of Time; hyper awakening ![Karmic Verdict](assets/icons/dimensionalist/karmic-verdict.png) Karmic Verdict. The code carries runes, which don't apply in Paradise

| Skill | Level | Tripods |
|---|---|---|
| ![Needle Strike](assets/icons/dimensionalist/needle-strike.png) Needle Strike | 10 | Armor Destruction, Transfer, Dial Acceleration |
| ![Forewarning](assets/icons/dimensionalist/forewarning.png) Forewarning | 11 | Armor Destruction, Dial Acceleration, Repeat |
| ![Airsplitter](assets/icons/dimensionalist/airsplitter.png) Airsplitter | 7 | Swift Fingers, Haymaker |
| ![Cross Thrust](assets/icons/dimensionalist/cross-thrust.png) Cross Thrust | 14 | Magick Control, Dial Acceleration, Amass |
| ![Pinpoint Strike](assets/icons/dimensionalist/pinpoint-strike.png) Pinpoint Strike | 14 | Swift Fingers, Acceleration, Dial Acceleration |
| ![Temporal Crush](assets/icons/dimensionalist/temporal-crush.png) Temporal Crush | 14 | Concussion, Afterimage Shatter, Weak Point Detection |
| ![Boundary Break](assets/icons/dimensionalist/boundary-break.png) Boundary Break | 14 | Excellent Mobility, Piercing, Dial Acceleration |
| ![Dimensional Break](assets/icons/dimensionalist/dimensional-break.png) Dimensional Break | 14 | Magick Control, Star, Weak Point Detection |

Before Liquor Glass 9, use the guide's starting tree instead:

```
C9683D09122935968FC2B8203D1DCEDA18E828743A291EE55EDDE87C9AA6AF7340E9986CDB21CF40BAF207234EEDA0DC884978871189ECC2413C3B9595D84C1F
```

It is the Pick except ![Temporal Crush](assets/icons/dimensionalist/temporal-crush.png) Temporal Crush tier 2 Accumulation (instead of Afterimage Shatter) and ![Cross Thrust](assets/icons/dimensionalist/cross-thrust.png) Cross Thrust tier 3 Combo (instead of Amass). Once Liquor Glass reaches 9, swap those two tripods.

How the guide plays it:

- Paradise plays on the base Dimensionalist identity (the Ark Passive spec doesn't apply). The Paradise gear's Specialization (800 total from Bell and Mirror) boosts the Fusion skills, awakening and clock acceleration, which is why the guide builds around the Time skills.
- The core is the dimension clock: skills with the Dial Acceleration tripod speed it up, and a faster clock cuts cooldowns, including the awakening's, which the clock passing 12 o'clock does not cut.
- Before Liquor Glass 9: on pull, ![Forewarning](assets/icons/dimensionalist/forewarning.png) Forewarning (synergy) → ![Dimensional Break](assets/icons/dimensionalist/dimensional-break.png) Dimensional Break → ![Shackles of Time](assets/icons/dimensionalist/shackles-of-time.png) Shackles of Time (awakening) → ![Karmic Verdict](assets/icons/dimensionalist/karmic-verdict.png) Karmic Verdict (hyper awakening, T) → ![Temporal Crush](assets/icons/dimensionalist/temporal-crush.png) Temporal Crush, then everything else to speed the clock. Never let awakening, hyper awakening or Dimensional Break sit off cooldown.
- After Liquor Glass 9: Forewarning → Karmic Verdict → Shackles of Time → Temporal Crush → Dimensional Break → speed the clock → repeat. The rotation becomes mostly hyper awakening and awakening. Afterimage Shatter makes Temporal Crush a placed skill that fits between them, and Amass lets you spam Cross Thrust for clock speed. The author logged 7 awakening casts in one fight.
- Stuck below 60% boss HP: at 55%+ check your crit rate and retry; at 40–50% go to Elysian, run once, upgrade, and re-test before spending more entries.

### Runner-up

```
FB7DA776F44E321C290E67773EC1CC655DC0F49BC313F6A7FA148BBCC7826D3F2A36AD8006F13525E11AEF9D7368F7803FFC960347312499EC1C3F33887A805E
```

- Source: [KR Season 4 page](https://sites.google.com/view/achi-loa/%EB%82%99%EC%9B%90/%EB%82%99%EC%9B%90-%EC%8B%9C%EC%A6%8C4), weeks 1–6 (2026-09-09 → 2026-10-14), stage 7. The author (a 30-character player) says the build is weak and he needs to change it; his note: skills + awakening turn the clock and cut cooldowns
- Same awakening and hyper awakening as the Pick. Differences:

| Skill | Pick | Runner-up |
|---|---|---|
| ![Airsplitter](assets/icons/dimensionalist/airsplitter.png) Airsplitter | Lv7: Swift Fingers, Haymaker | not used |
| ![Boundary Break](assets/icons/dimensionalist/boundary-break.png) Boundary Break | Lv14: Excellent Mobility, Piercing, Dial Acceleration | Lv14: Excellent Mobility, Discharge, Dial Acceleration |
| ![Cross Thrust](assets/icons/dimensionalist/cross-thrust.png) Cross Thrust | Lv14: Magick Control, Dial Acceleration, Amass | Lv10: Magick Control, Dial Acceleration, Amass |
| ![Dimensional Break](assets/icons/dimensionalist/dimensional-break.png) Dimensional Break | Lv14: Magick Control, Star, Weak Point Detection | Lv14: Magick Control, Precise Gravity, Weak Point Detection |
| ![Forewarning](assets/icons/dimensionalist/forewarning.png) Forewarning | Lv11: Armor Destruction, Dial Acceleration, Repeat | Lv7: Armor Destruction, Dial Acceleration |
| ![Needle Strike](assets/icons/dimensionalist/needle-strike.png) Needle Strike | Lv10: Armor Destruction, Transfer, Dial Acceleration | not used |
| ![Override](assets/icons/dimensionalist/override.png) Override | not used | Lv14: Sturdy Armor, Weak Point Detection, Pinpoint Acceleration |
| ![Pinpoint Strike](assets/icons/dimensionalist/pinpoint-strike.png) Pinpoint Strike | Lv14: Swift Fingers, Acceleration, Dial Acceleration | Lv11: Swift Fingers, Reverse, Dial Acceleration |
| ![Spatial Slash](assets/icons/dimensionalist/spatial-slash.png) Spatial Slash | not used | Lv14: Magick Control, Skip, Linearity |
| ![Temporal Crush](assets/icons/dimensionalist/temporal-crush.png) Temporal Crush | Lv14: Concussion, Afterimage Shatter, Weak Point Detection | Lv14: Time Retrieval, Afterimage Shatter, Weak Point Detection |

### Restoration order

From the Season 3 guide; Dimensionalist's identity doesn't use the identity-meter options, so skip those (slot effects in [paladin.md](paladin.md#paradise-crucible)). The Season 4 author's order for classes that don't use their identity agrees on the start: Mask 1 first, Liquor Glass 9 before the other level-9 steps.

- **Phase 1:** Mask 1 and Whistle 3 (cooldown reduction)
- **Phase 2:** rush Liquor Glass 3 → 6 → 9 (hyper awakening cooldown at each)
- **Phase 3:** Bell and Mirror to 9 (cooldown reduction at 9; Specialization +200 at 3 and 6 on each, 800 total)
- **Phase 4, after every slot is at 9:** Whistle 12 (crit rate to 100%), then Censer and Mask 15 (defense ignore, crit damage on push-immune targets)
