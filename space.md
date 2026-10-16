# Dimensionalist, Space Wielder: Solo Mode skill codes

I found no Space Wielder skill code written specifically for Solo Mode. I searched the Inven Dimensionalist board (its solo-mode threads contain no codes), fmkorea, STOVE, YouTube and arca.live. The two codes below are general builds from after the 2026-07-22 Space Wielder balance patch. Jev ranked them with that gap in mind.

**Assumptions I made for the brief:**
- "WarpWeaver" is the Dimensionalist (차원술사), and "Space Swordman" is its Space Wielder spec (공간 검사).
- No core set was given, so I defaulted to the one most used on loagg: **222**, with 325 of 764 characters at item level 1720+. 333 is almost tied at 323; 111 has 49.

## Skill legend

Skill names are the global client names, matched to the KR names by game ID through lostarkcodex.com (US vs KR locale). Icons in `assets/icons/dimensionalist/` were downloaded from lostarkcodex.com and converted to 32px PNG. Engraving names (Grudge, Raid Captain, Ambush Master, Mass Increase, Keen Blunt Weapon, Adrenaline) were matched the same way; Supersonic Breakthrough and Blunt Thorn are Ark Passive Evolution nodes, named as in Maxroll's Ark Passive overview.

| Icon | Global name | KR name | Role |
|---|---|---|---|
| ![Spatial Slash](assets/icons/dimensionalist/spatial-slash.png) | Spatial Slash | 공간 절단 | Super-armor skill; first in the chain |
| ![Vacuum](assets/icons/dimensionalist/vacuum.png) | Vacuum | 진공 | Super-armor skill; second in the chain; Sun 17P adds its 3-stack buff |
| ![Override](assets/icons/dimensionalist/override.png) | Override | 분광 | Super-armor skill; last in the chain; Star 17P makes it immune to knockdown |
| ![Airsplitter](assets/icons/dimensionalist/airsplitter.png) | Airsplitter | 공간 베기 | Moon 17P gives it 2 charges; the other 222 skill variant |
| ![Boundary Break](assets/icons/dimensionalist/boundary-break.png) | Boundary Break | 경계 돌파 | Named in the 222 variant's label; the sources I read don't describe its role |
| ![Spatial Manipulation](assets/icons/dimensionalist/spatial-manipulation.png) | Spatial Manipulation | 공간 조작 | Teleport through the boss; grants 4 uses of stagger/knockdown immunity |
| ![Forward Thrust](assets/icons/dimensionalist/forward-thrust.png) | Forward Thrust | 전방 찌르기 | 222: builds sub-Fate A stacks; reset by Retaliate |
| ![Retaliate](assets/icons/dimensionalist/retaliate.png) | Retaliate | 역공 | 222: counter; resets Forward Thrust; main damage-gem target |
| ![Cross Slash](assets/icons/dimensionalist/cross-slash.png) | Cross Slash | 너머 베기 | 222: closes the Boundary Break chain |
| ![Cross Thrust](assets/icons/dimensionalist/cross-thrust.png) | Cross Thrust | 건너 찌르기 | Skipped in 222 (a 333 / Time Wielder skill) |
| ![Needle Strike](assets/icons/dimensionalist/needle-strike.png) | Needle Strike | 일침 | Time: paired with Forewarning before every Fusion skill |
| ![Forewarning](assets/icons/dimensionalist/forewarning.png) | Forewarning | 예고 | Time: paired with Needle Strike; Synergy skill |
| ![Temporal Crush](assets/icons/dimensionalist/temporal-crush.png) | Temporal Crush | 시간 분쇄 | Time: Fusion skill, cast inside Timeline Divergence |
| ![Pinpoint Strike](assets/icons/dimensionalist/pinpoint-strike.png) | Pinpoint Strike | 일점 관통 | Time: Fusion skill; left without a gem in the 111 pick |
| ![Dimensional Break](assets/icons/dimensionalist/dimensional-break.png) | Dimensional Break | 차원의 틈 | Time: main damage skill |
| ![Karmic Verdict](assets/icons/dimensionalist/karmic-verdict.png) | Karmic Verdict | 업의 경계 | Time: first skill inside Timeline Divergence |
| ![Timeline Divergence](assets/icons/dimensionalist/timeline-divergence.png) | Timeline Divergence (Z) | 시간선 분화 | Time identity: opens a 15s window where every skill is usable once |
| ![Timeline Collapse](assets/icons/dimensionalist/timeline-collapse.png) | Timeline Collapse (Z) | 시간선 붕괴 | Time identity: optional exit; deals damage and returns you to your echo |
| — | Interference (Z) / Dimensional Trigger (Z) | 간섭 / 차원 격발 | Space identity: opens the rift ("gate") on one side of the boss / closes and detonates it |

KR sources say "5피면" for "5 super-armor skills" (the title of the 111 post below). Mapping note: the global name for 분광 is Override, not Cross Slash; Cross Slash is 너머 베기, a different skill that the 111 and Portia guides don't use (the 222 Supersonic Breakthrough build added below does use it).

Timeline Divergence, Timeline Collapse, Interference and Dimensional Trigger are identity skills that aren't on lostarkcodex. Their global names come from Maxroll's Time and Space Wielder guides, and the KR names from Inven posts, so those mappings are inferred rather than ID-matched. The two Time identity icons are Inven's `ark_passive_di_5` and `ark_passive_di_6`; I matched them to Divergence and Collapse by where they sit in the rotations.

## No Ark Grid (or too few cores): play 111, not 222

222 doesn't work without its cores. Its rotation depends on core effects:
- [Inven 6543/3780](https://www.inven.co.kr/board/lostark/6543/3780) (2026-07-28), "222 doesn't work on legendary cores": Sun and Moon at 17P are both required. Moon 17P is what makes the rotation run, and Sun 17P adds the ![Vacuum](assets/icons/dimensionalist/vacuum.png) Vacuum 3-stack buff.
- [Inven 6543/3886](https://www.inven.co.kr/board/lostark/6543/3886) (2026-07-29), "Space Wielder without Ark Grid?": the answers were "go roughly like 111" and "copy the 111 skill code".
- Partial cores: in [Inven 6543/4508](https://www.inven.co.kr/board/lostark/6543/4508) (2026-08-16), 221 (no Star core) did about the same damage as 222 on the dummy. So 222 is fine once you have Sun and Moon at 17P.

I found no code made specifically for zero cores. The 111 build is what the community recommends.

### Pick: 111, no-Adrenaline Supersonic Breakthrough (Jev: pick 1.00, fit 0.73)

```
8AB41656B4DC3D0CBE82228C43B9C06CE078418BACC2818368CECFD55157A8D072BF229A3B55018C9441457007B0B2ADC61F0BFD22ABF5FD4FF29D4CAFC232C1
```

- **Source:** 이주리얼, "5피면 개초딩 111 공간술사" ("dead-easy 111 Space Wielder, 5 super armor"), Inven certified post. Posted 2026-07-09, updated 2026-07-31; the author says the 7/22 patch needed no changes. https://www.inven.co.kr/board/lostark/6543/651
- **Without the grid:** the author replied on 2026-09-09 that the build works before the grid, but you should try to get at least Legendary cores. The key piece is the Sun core at 14P (+15% move speed, +6% crit rate). The other cores only add damage and convenience. Moon 17P gives ![Airsplitter](assets/icons/dimensionalist/airsplitter.png) Airsplitter 2 charges, and Star 17P makes ![Override](assets/icons/dimensionalist/override.png) Override immune to knockdown.
- **Engravings:** Grudge, Raid Captain, Ambush Master, Mass Increase, Keen Blunt Weapon.
- **Stats:** Swiftness 1577. Target 21% evolution damage.
- **Rotation:** press ![Spatial Slash](assets/icons/dimensionalist/spatial-slash.png) Spatial Slash → ![Vacuum](assets/icons/dimensionalist/vacuum.png) Vacuum → ![Override](assets/icons/dimensionalist/override.png) Override in quick succession so their super-armor windows chain together. See [space-rotation.html](space-rotation.html) for the rotation with in-game skill icons; note it labels 분광 "Cross Slash", but the game-ID name for 분광 is Override.
- **Solo:** it hits its Supersonic Breakthrough target without a support buff.

### Runner-up: 111, Adrenaline Blunt Thorn (same post, Jev fit 0.24)

```
8E560577CAA2A174036468071EB1CC4358E1CA20E995381C653E817CCAB2A06BC34DFEF2A65783E366FFD508592B4FB3D9C2CDB53006CD6A02A7EB2C6E88958B
```

- **Difference:** it runs Adrenaline (Grudge / Adrenaline / Raid Captain / Ambush Master, plus Mass Increase or Keen Blunt Weapon). The author says it has a higher theoretical ceiling but he felt little difference in real fights. Adrenaline also needs its stacks kept up, which is extra work in solo.

For this no-grid case, Jev rated the 222 code below at 0.07 and the 333 code (Inven [6543/3593](https://www.inven.co.kr/board/lostark/6543/3593), 2026-07-26) at 0.03.

## With cores: 222, ![Boundary Break](assets/icons/dimensionalist/boundary-break.png) Boundary Break + ![Spatial Manipulation](assets/icons/dimensionalist/spatial-manipulation.png) Spatial Manipulation variant (Jev's probability 0.63)

```
6FBABE6C7378137264A34DD04F63730F978D5979F3055EE3972C5E87D2DB4B99069663F5719360E2CBF31477A18C0A1AA58B1ADA95AB4EB7DAB4C3887D654AA6
```

- **Source:** 포셔 (Portia), "7/22 밸패 이후 공간 검사 111, 222, 333 코어 비교" (Space Wielder 111/222/333 core comparison after the 7/22 patch), published 2026-07-23. https://www.youtube.com/watch?v=6Cd0EiDEQtc
- **For:** 222 Space Wielder after the patch. It's a general build, not made for solo.
- **Setup notes:** the video description has only the code, so the engraving, stat and rotation details are in the video itself. What the variant means: it gives a skill slot to ![Spatial Manipulation](assets/icons/dimensionalist/spatial-manipulation.png) Spatial Manipulation, a teleport through the boss that grants 4 uses of immunity to being staggered or knocked down. That's why Jev ranked it above the ![Airsplitter](assets/icons/dimensionalist/airsplitter.png) Airsplitter variant for solo play, where no support is protecting you.
- **Fit caveat:** Jev put its fit for "222 played solo" at only 0.46, because the build assumes a party's support buffs. In solo you lose the support's roughly 9% attack/move speed, so you'll need more Swiftness to reach full Raid Captain uptime.

## With cores, runner-up: 111, no-Adrenaline Supersonic Breakthrough (probability 0.20; fit 0.77 if you run 111 cores)

Same code as the no-grid pick above, rated here against a brief that assumed full 222 cores.

```
8AB41656B4DC3D0CBE82228C43B9C06CE078418BACC2818368CECFD55157A8D072BF229A3B55018C9441457007B0B2ADC61F0BFD22ABF5FD4FF29D4CAFC232C1
```

- **Source:** Inven certified post "5피면 개초딩 111 공간술사" ("dead-easy 111 Space Wielder, 5 super armor"). Posted 2026-07-09, updated 2026-07-31. https://www.inven.co.kr/board/lostark/6543/651
- **How it differs:** it uses 111 cores and has 5 super-armor skills. The author calls it the best floor and the easiest brain-off build, with a lower ceiling (LoPEC multiplier about 1.15). It also reaches its Supersonic Breakthrough target without a support buff, which is why it fits solo best if you're on 111.
- **Engravings:** Grudge, Raid Captain, Ambush Master, Mass Increase, Keen Blunt Weapon.
- **Stats:** Swiftness 1577. Target 21% evolution damage.
- **Cores:** Legendary cores work. The key is the Sun core at 14P, which gives 15% move speed and 6% crit rate.
- **Rotation:** press ![Spatial Slash](assets/icons/dimensionalist/spatial-slash.png) Spatial Slash → ![Vacuum](assets/icons/dimensionalist/vacuum.png) Vacuum → ![Override](assets/icons/dimensionalist/override.png) Override in quick succession so their super armor windows chain together.

## Solo Mode at 1700 with 222 cores: Supersonic Breakthrough build (added 2026-10-06)

Brief for this search: Space Wielder (most played on loagg, 764 vs 721 Time Wielder, stats from 2026-09-17), Solo Mode, item level 1700, 222 cores (most used Space set on loagg: 325 vs 323 for 333). On loagg, 222 = Sun 2 찌르기의 대가 / Moon 2 포인트 어택 / Star 2 찌르기 연계; 333 = 차원 절단 / 정밀 조작 / 다중 절단; 111 = 공간 검술 / 검술 강화 / 분침 조정 (core names kept in KR; no global ID match). Jev ranked 8 post-patch candidates.

### Pick: 222 Supersonic Breakthrough (Jev: pick 0.73, fit 0.56)

```
21C42C7D1F535C9F9DFEDC832DB9ECA377CBE003382CEDE583FAAB92CD7AB15BF75B0C47C3E228855C969420F6525B1DFA9A822862F60DCD37D8EB283D2FE469
```

- **Source:** 호떡아일랜드, "음돌 사랑꾼의 222 공간검사 공략" (222 Space Wielder guide from a Supersonic Breakthrough fan), arca.live, 2026-07-23 (after the patch). https://arca.live/b/lostark/177787093
- **Why it fits solo:** a practical build, not a max-damage one. Most of its skills have push immunity or damage reduction, so the rotation rarely gets interrupted when no support is protecting you.
- **Engravings:** always Grudge, Adrenaline, Ambush Master, Keen Blunt Weapon. Flex slot: Raid Captain (best with high Swiftness), Cursed Doll, or Mass Increase (only with an attack/move speed bracelet).
- **Stats:** at least 1600 Swiftness in town for Supersonic Breakthrough. Crit comes from Adrenaline plus the 10% back-attack bonus. Short on crit: swap the 회심 node for Master (달인, +7% crit) and lower Swiftness a bit.
- **Ark Passive** (node names translated, not ID-matched):
  - Enlightenment: High-Speed Entry (고속 진입) now lasts 20s (was 10s), giving permanent +10% attack speed. Take Forbidden Spell (금단의 주문), not Endless Mana (끝없는 마나); the build runs short on mana.
  - Leap: Unleashed Power (풀려난 힘) 5, then either Potential 5 + the Dimensional Swordsmanship node (차원검술: faster cast, shorter cooldown; the author's choice) or Potential 4 / Instant 2 + the big single-hit node.
- **Gems:** 7 damage, 4 cooldown. Damage gems on ![Retaliate](assets/icons/dimensionalist/retaliate.png) Retaliate and ![Vacuum](assets/icons/dimensionalist/vacuum.png) Vacuum first; cooldown gems on ![Boundary Break](assets/icons/dimensionalist/boundary-break.png) Boundary Break.
- **7th skill slot:** ![Spatial Manipulation](assets/icons/dimensionalist/spatial-manipulation.png) Spatial Manipulation at level 7 for mobility (the author's pick), or ![Airsplitter](assets/icons/dimensionalist/airsplitter.png) Airsplitter at level 4 (slightly more damage). Skip ![Cross Thrust](assets/icons/dimensionalist/cross-thrust.png) Cross Thrust.
- **Rotation:**
  1. ![Spatial Manipulation](assets/icons/dimensionalist/spatial-manipulation.png) Spatial Manipulation (builds Adrenaline stacks) → Z to start the identity and the main Fate.
  2. ![Boundary Break](assets/icons/dimensionalist/boundary-break.png) Boundary Break → ![Spatial Slash](assets/icons/dimensionalist/spatial-slash.png) Spatial Slash → ![Override](assets/icons/dimensionalist/override.png) Override → ![Cross Slash](assets/icons/dimensionalist/cross-slash.png) Cross Slash. Boundary Break and Spatial Slash can swap.
  3. ![Forward Thrust](assets/icons/dimensionalist/forward-thrust.png) Forward Thrust → ![Retaliate](assets/icons/dimensionalist/retaliate.png) Retaliate (resets Forward Thrust) → ![Forward Thrust](assets/icons/dimensionalist/forward-thrust.png) Forward Thrust → ![Vacuum](assets/icons/dimensionalist/vacuum.png) Vacuum.
  4. Alternate steps 2 and 3, then detonate the identity.

### Runner-up: Portia's 222 Boundary Break + Spatial Manipulation (Jev: pick 0.25, fit 0.50)

Same code as the "With cores" pick above (from https://www.youtube.com/watch?v=6Cd0EiDEQtc, 2026-07-23). Same core set and same mobility slot. The video description has no engraving or stat notes. Portia's Airsplitter variant from the same video got 0.02:

```
0AD203A3EF07BCCF66DD21EE02C56278A9C3D6F533727C4CE5DB54E828945C6AF9F80D8A94630A83150383234FE4CAEBF2C7F2B8A9F996101787B7BB105D9F56
```

### Caveats for this search

- No source had a code made for Solo Mode. Board posts call Space Wielder hard in solo because of back attacks (Inven [1259](https://www.inven.co.kr/board/lostark/6543/1259)), and players there lean toward Time Wielder for solo ([290](https://www.inven.co.kr/board/lostark/6543/290), [4415](https://www.inven.co.kr/board/lostark/6543/4415)).
- Last Dimensionalist balance change: the 2026-07-22 KR class balance patch (STOVE notice 13496). Later notices through 2026-09-23 contain only bug fixes for the class.
- Other post-patch candidates Jev rejected for this brief: Portia's 333 (same video, code below), Inven [3414](https://www.inven.co.kr/board/lostark/6543/3414) 333, Inven [3593](https://www.inven.co.kr/board/lostark/6543/3593) 333 Boundary Break, and both 111 codes from Inven 651 (all fit ≤ 0.07 against 222 cores).

  ```
  F4D03E8E68DDFE863DF0A9F6518E7529E9CFC05B1001912D1D6F061393437BAF1EA42DA10997C51816538F0643B1284E1971CB184F96D4363C015D8937A35378
  ```

## Your cores: Multislash, Precise Control, Dimensional Annihilation (added 2026-10-06)

**Verdict: stay Space Wielder for now and import the 111 no-Adrenaline code** (the "No Ark Grid" pick above, repeated here). Jev: Space Wielder 0.89 vs Time Wielder 0.10; code pick 1.00, fit 0.87.

```
8AB41656B4DC3D0CBE82228C43B9C06CE078418BACC2818368CECFD55157A8D072BF229A3B55018C9441457007B0B2ADC61F0BFD22ABF5FD4FF29D4CAFC232C1
```

### What your cores actually do

Global core names are from Maxroll's [Ark Grid overview](https://maxroll.gg/lost-ark/resources/ark-grid-overview) and [Space Wielder guide](https://maxroll.gg/lost-ark/build-guides/spatial-swordsman-dimensionalist-build-guide); effects are the KR launch tooltips (Inven [6543/210](https://www.inven.co.kr/board/lostark/6543/210)). Each core only works for its own spec.

| Core (global) | KR | Spec / slot | Effect with what you own |
|---|---|---|---|
| Multislash | 다중 절단 | Space, Order Star 3 | 10P: ![Spatial Slash](assets/icons/dimensionalist/spatial-slash.png) Spatial Slash +6%. 14P: Spatial Slash with the Skip (건너뛰기) tripod gets 2 charges and −75% mana. 17P: Skip Spatial Slash +14/16%. **Works.** |
| Precise Control | 정밀 조작 | Space, Order Moon 3 | 10P: minute-hand skills +1.6%. 14P: ![Spatial Manipulation](assets/icons/dimensionalist/spatial-manipulation.png) Spatial Manipulation triggers Destiny, which does nothing without a Space Sun core. 17P: Spatial Slash +28/31%. **Works at 10P and 17P only.** |
| Dimensional Annihilation | 차원 소멸 | **Time**, Order Sun 3 | 10P: +1.5% damage. 14P/17P need Destiny inside the Separated Timeline, and Time Wielder gets Destiny only from Time Moon cores, which you don't have. **About +1.5% on Time, nothing on Space.** |

So switching to Time Wielder means playing with effectively no cores. Space keeps two working cores, both feeding Spatial Slash.

### Why not the 333 codes yet

333's loop lives on the Sun core you're missing, Severed Dimension (차원 절단): with Destiny active, other skills build fragment stacks; 6 stacks give Dimensional Distortion, which cuts Spatial Slash's cooldown by 60s. Without it there are no resets, only Multislash's 2 charges. Inven commenters: "if only the Sun is Relic, the 333 cycle runs" ([3582](https://www.inven.co.kr/board/lostark/6543/3582)) and core priority Sun → Moon → Star ([1428](https://www.inven.co.kr/board/lostark/6543/1428)). Jev rated the 333 codes 0.25–0.30 for your cores.

Once you own Severed Dimension, move to 333 with the Inven 3414 code (2026-07-25, link in Notes) or Portia's 333 code above. Jev was split (0.49) on whether that Sun core should be your next goal; the community priority above says yes for 333.

```
023684BD2CDD63B067DB78AF9F7C23EAFD6D2BE2CD4452F4153B55848ED2242A26163194E495A1BC55ABDE9FFD2AF2E9171662171CDC3A29F369A32BD4D9FC02
```

Caveat: I couldn't confirm whether the 111 code takes the Skip tripod on Spatial Slash, which Multislash's 14P/17P needs. Check Spatial Slash's tripods after importing; if Skip isn't selected, Multislash only gives its 10P +6%.

### Time Wielder for solo, if you collect Time cores later

Without cores in the picture, Jev preferred Time Wielder for solo (0.98): it's non-positional, and its 222 Destiny triggers on skill use rather than on hit. One Inven commenter switched from Space to Time for solo because Time "felt like a head attacker" ([871](https://www.inven.co.kr/board/lostark/6543/871)). Others disagree: replies to [4415](https://www.inven.co.kr/board/lostark/6543/4415) said "Space" or "run 111 on either", and one on [290](https://www.inven.co.kr/board/lostark/6543/290) said "solo is easy, anything works". Another 290 commenter says Solo Mode gives a back-attack-from-anywhere buff that doesn't feed Ambush Master (unverified). Most played Time sets on loagg: 222 (349 players) and 111 (326).

Time 222, Dial Acceleration (시계 가속) variant, Jev pick 0.97 for a Time 222 brief:

```
B418331D47FD492038A29C05D6B229D8A21EDB9201999B85FE2434E2AE66E1D57F60BE68B037A1C2E82B00E368055FA677DAF5637AACE052B4D29A9DCB591F52
```

- **Source:** "옆집 뽀삐도 가능한 시간 222 배율 1.33+" ("Time 222 even the neighbor's dog can play"), Inven, 2026-07-30. https://www.inven.co.kr/board/lostark/6543/3941
- **Notes:** a 4-step loop repeated forever; no ![Cross Thrust](assets/icons/dimensionalist/cross-thrust.png) Cross Thrust cooldown tracking; cooldown bracelets carry no penalty; recovers quickly from missed skills. Press Cross Thrust twice with a half-beat gap, or the second press gets eaten. The author recommends Dial Acceleration over the Weakness Exposure (약점 포착) variant in the same post, which has a 2–3% higher ceiling but gaps in the cycle.
- **Needs** Time 222 cores (Twisted Timeline, Timeline, Distortion); you own none.

Time 111 alternative (Time 111 cores: Timekeeper, Combine Weapon, Fusion Enhancement), 4× Quick Recharge stockpile, the author's practical pick (Inven [3645](https://www.inven.co.kr/board/lostark/6543/3645), 2026-07-27):

```
5CF7688A8910B6EC70D20D24AB5A013881327415A52ABED5E3CF51C4428D98861F0DBC4B6088AFBAE748F0C3DF4FC5A43A336C15EBA27D5B599D6224E1B4FF35
```

## No gate to close: Time Wielder 111 (added 2026-10-08)

The "gate" is Space Wielder's identity: Interference (Z) opens a Dimensional Rift on one side of the boss, only hits on that side count, and Dimensional Trigger (Z) closes it to cash in the stored damage. Every Space build has this, 111, 222 and 333 alike. A different Space code changes the skills but keeps the gate. Two facts from Inven on why it feels bad:
- Closing it is a large share of your damage. The detonation adds 24% of the damage stored in the rift, about 17–19% of total damage ([4386](https://www.inven.co.kr/board/lostark/6543/4386)).
- If the rift times out (it turns red), it stops storing damage and you have to reopen it ([4676](https://www.inven.co.kr/board/lostark/6543/4676)).

Time Wielder has no rift and no positional requirement. Its Z opens Timeline Divergence, a 15s window where every skill is usable once. Pressing Timeline Collapse (Z) to leave is optional: if you forget, the window ends by itself, and you lose only Collapse's own hit (Maxroll's [Time Wielder guide](https://maxroll.gg/lost-ark/build-guides/time-wielder-dimensionalist-build-guide)). The catch: when you leave, your HP reverts to what it was before you entered, and Collapse snaps you back to where you started. One Inven poster finds that unpleasant ([4418](https://www.inven.co.kr/board/lostark/6543/4418)).

**Cores:** you own no Time 111 or 222 cores, and Dimensional Annihilation only gives +1.5% at 10P. Without a grid, the Inven answer is "play 111 and follow its cycle" ([4796](https://www.inven.co.kr/board/lostark/6543/4796), 2026-09-05). Time 111 cores only add buffs (Timekeeper: +10% attack speed; Combine Weapon: Destiny on Dimensional Break; Fusion Enhancement: Push Immunity on Dimensional Break), so the rotation runs without them. On "brain-off" threads, the usual answers are Time 111 or Space 222, and Time 222 is called one of the busiest builds in the game ([4854](https://www.inven.co.kr/board/lostark/6543/4854), [4609](https://www.inven.co.kr/board/lostark/6543/4609)).

Jev: switch to Time 111 0.95 vs stay Space 0.05.

### Pick: Time 111, Pinpoint Strike without a gem (Jev: pick 0.99, fit 0.67)

```
4C2378D3E51EE8AA7729253F16D71F0CB845990949307D49579981BB6D76E91BB036B917232AB9CA44171DF21E9D13C32C21FA06742FA44248D3186E95406062
```

- **Source:** 업혀가나, "시간 111 일점 노보석 [배율 투력1.1, 로펙1.17+]" (Time 111, no gem on Pinpoint Strike; multiplier 1.1, LoPEC 1.17+), Inven, 2026-08-05 (after the 7/22 patch). https://www.inven.co.kr/board/lostark/6543/4173
- **Why this one:** 업혀가나 is the author Inven commenters point to for Time ([4260](https://www.inven.co.kr/board/lostark/6543/4260), [4397](https://www.inven.co.kr/board/lostark/6543/4397); one reply there recommends exactly this "Pinpoint no-gem, 4 Quick Recharge" setup). This is his latest Time 111 revision. The loop is a short 3-step cycle that repeats forever, and the Divergence part is always the same. He says it is "very comfortable" and gets more Divergence and Dimensional Break casts than the version with a gem on Pinpoint Strike (about 2% more DPS in his 3-minute test with no runes).
- **Changes from his earlier build:** a cooldown gem on ![Airsplitter](assets/icons/dimensionalist/airsplitter.png) Airsplitter, no gem on ![Pinpoint Strike](assets/icons/dimensionalist/pinpoint-strike.png) Pinpoint Strike, and different runes. The rune list and engravings are only in screenshots, so check them after importing.
- **Rotation:**
  - Opener: ![Airsplitter](assets/icons/dimensionalist/airsplitter.png) Airsplitter → ![Forewarning](assets/icons/dimensionalist/forewarning.png) Forewarning → ![Needle Strike](assets/icons/dimensionalist/needle-strike.png) Needle Strike → ![Cross Thrust](assets/icons/dimensionalist/cross-thrust.png) Cross Thrust → ![Karmic Verdict](assets/icons/dimensionalist/karmic-verdict.png) Karmic Verdict → ![Dimensional Break](assets/icons/dimensionalist/dimensional-break.png) Dimensional Break → Divergence block.
  - Divergence block (always the same): ![Timeline Divergence](assets/icons/dimensionalist/timeline-divergence.png) Timeline Divergence → ![Karmic Verdict](assets/icons/dimensionalist/karmic-verdict.png) Karmic Verdict → ![Dimensional Break](assets/icons/dimensionalist/dimensional-break.png) Dimensional Break → ![Temporal Crush](assets/icons/dimensionalist/temporal-crush.png) Temporal Crush → ![Boundary Break](assets/icons/dimensionalist/boundary-break.png) Boundary Break → ![Timeline Collapse](assets/icons/dimensionalist/timeline-collapse.png) Timeline Collapse.
  - Loop, repeated forever:
    1. ![Forewarning](assets/icons/dimensionalist/forewarning.png) Forewarning → ![Needle Strike](assets/icons/dimensionalist/needle-strike.png) Needle Strike → ![Temporal Crush](assets/icons/dimensionalist/temporal-crush.png) Temporal Crush → ![Boundary Break](assets/icons/dimensionalist/boundary-break.png) Boundary Break → ![Airsplitter](assets/icons/dimensionalist/airsplitter.png) Airsplitter → ![Cross Thrust](assets/icons/dimensionalist/cross-thrust.png) Cross Thrust
    2. ![Forewarning](assets/icons/dimensionalist/forewarning.png) Forewarning → ![Needle Strike](assets/icons/dimensionalist/needle-strike.png) Needle Strike → ![Pinpoint Strike](assets/icons/dimensionalist/pinpoint-strike.png) Pinpoint Strike → ![Airsplitter](assets/icons/dimensionalist/airsplitter.png) Airsplitter
    3. ![Forewarning](assets/icons/dimensionalist/forewarning.png) Forewarning → ![Needle Strike](assets/icons/dimensionalist/needle-strike.png) Needle Strike → ![Cross Thrust](assets/icons/dimensionalist/cross-thrust.png) Cross Thrust → ![Dimensional Break](assets/icons/dimensionalist/dimensional-break.png) Dimensional Break → Divergence block
- **Known weak spot:** the author says Dimensional Break's cooldown still drifts a little, so short dead gaps can still happen. It's improved, not fixed. Other Inven players also say Time 111 loses its cycle if a skill misses while you're building toward Divergence ([5108](https://www.inven.co.kr/board/lostark/6543/5108)). A boss that doesn't move, like in Solo Mode, makes this less of a problem.
- **Cross Thrust:** press it twice with a short gap, not as a spam. Without push immunity, it gets eaten when you're hit ([4081](https://www.inven.co.kr/board/lostark/6543/4081)).

### Runner-up: Time 111, 4 Quick Recharge, Cross Thrust stockpile (same author, Jev pick 0.01, fit 0.36)

This is the Time 111 code from the section above. It uses loose rules instead of a fixed loop: Needle Strike + Forewarning as a pair, then two Fusion skills, or one Fusion skill + Cross Thrust. The Divergence block is the same. The author says you "almost never" have to watch Cross Thrust's cooldown. His multiplier is 1.06–1.1. https://www.inven.co.kr/board/lostark/6543/3645 (2026-07-27)

```
5CF7688A8910B6EC70D20D24AB5A013881327415A52ABED5E3CF51C4428D98861F0DBC4B6088AFBAE748F0C3DF4FC5A43A336C15EBA27D5B599D6224E1B4FF35
```

Gems listed in that post: cooldown gems on Needle Strike, Forewarning, Cross Thrust and Pinpoint Strike; damage and cooldown gems on Temporal Crush, Boundary Break and Dimensional Break; a damage gem on Timeline Divergence.

Rejected: the same author's fixed 15-skill loop (Inven [3739](https://www.inven.co.kr/board/lostark/6543/3739), Jev 0.00). He admits Quick Recharge causes cooldown bottlenecks in that loop.

## Notes

- If your cores are 333, the matching code is in Inven 6543/3414 (2026-07-25): https://www.inven.co.kr/board/lostark/6543/3414. Its author says it's hard to play and has low defense, which makes it a poor choice for solo.
- I dropped codes posted before 7/22 (Inven 252 and 392, the Inven webzine codes, and the first-day YouTube videos) because they predate the patch.
- Every code in this file comes from a KR post. **Whether they import correctly on global is unverified** unless global already has KR's 7/22 Dimensionalist balance patch.

# Dimensionalist in the Paradise Crucible

Crucible (KR 낙원 증명) is Paradise's solo boss ladder, ranked per class. Only **skill levels and tripods** carry into Paradise: engravings, gems, runes, cards and the whole Ark Passive don't apply (official release notes; details in `paladin.md` → What applies in Paradise). So your raid spec (Space Wielder) and Ark Grid don't matter here; only the skill bar, levels, tripods and awakening choice do.

These are KR codes, checked on [lostark.bible](https://lostark.bible/tools/skill-code) and uploaded to CE on 2026-10-15, so they import on EUC. Whether they play the same on global depends on global having KR's balance patches, which is unverified.

## Crucible skill legend

| Icon | Global name | KR name |
|---|---|---|
| ![Airsplitter](assets/icons/dimensionalist/airsplitter.png) | Airsplitter | 공간 베기 |
| ![Boundary Break](assets/icons/dimensionalist/boundary-break.png) | Boundary Break | 경계 돌파 |
| ![Cross Thrust](assets/icons/dimensionalist/cross-thrust.png) | Cross Thrust | 건너 찌르기 |
| ![Dimensional Break](assets/icons/dimensionalist/dimensional-break.png) | Dimensional Break | 차원의 틈 |
| ![Forewarning](assets/icons/dimensionalist/forewarning.png) | Forewarning | 예고 |
| ![Karmic Verdict](assets/icons/dimensionalist/karmic-verdict.png) | Karmic Verdict | 업의 경계 |
| ![Needle Strike](assets/icons/dimensionalist/needle-strike.png) | Needle Strike | 일침 |
| ![Override](assets/icons/dimensionalist/override.png) | Override | 분광 |
| ![Pinpoint Strike](assets/icons/dimensionalist/pinpoint-strike.png) | Pinpoint Strike | 일점 관통 |
| ![Shackles of Time](assets/icons/dimensionalist/shackles-of-time.png) | Shackles of Time | 시간의 굴레 |
| ![Spatial Slash](assets/icons/dimensionalist/spatial-slash.png) | Spatial Slash | 공간 절단 |
| ![Temporal Crush](assets/icons/dimensionalist/temporal-crush.png) | Temporal Crush | 시간 분쇄 |

## Recommended Crucible code

```
759BDF865D672769A2C37C62347B0D14882515AB8C0C9804A0E0892E3BD32D2A40D1FF76CA81CF4EBB5BA5568D421A4EDF66797535C9C8526C7D05BA287FDFA0
```

- Source: [fmkorea Crucible guide](https://www.fmkorea.com/10061421514), 2026-07-09 (KR Season 3; 19k views, 45 upvotes). The author cleared Crucible 10 at 3.5M Paradise score. This is his tree once Liquor Glass reaches level 9.
- The guide predates the 2026-07-22 Dimensionalist balance patch. The Season 4 author below still runs the same skill families, but whether the patch changed these skills' values is unchecked.
- Awakening ![Shackles of Time](assets/icons/dimensionalist/shackles-of-time.png) Shackles of Time; hyper awakening ![Karmic Verdict](assets/icons/dimensionalist/karmic-verdict.png) Karmic Verdict. The code carries runes, but runes don't apply in Paradise.
- Jev pick probability: **0.84**.

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

## Before Liquor Glass 9: the guide's starting tree

```
C9683D09122935968FC2B8203D1DCEDA18E828743A291EE55EDDE87C9AA6AF7340E9986CDB21CF40BAF207234EEDA0DC884978871189ECC2413C3B9595D84C1F
```

Same as the recommended code except ![Temporal Crush](assets/icons/dimensionalist/temporal-crush.png) Temporal Crush tier 2 Accumulation (instead of Afterimage Shatter) and ![Cross Thrust](assets/icons/dimensionalist/cross-thrust.png) Cross Thrust tier 3 Combo (instead of Amass). Use it until Liquor Glass reaches level 9, then swap those two tripods.

## Runner-up

```
FB7DA776F44E321C290E67773EC1CC655DC0F49BC313F6A7FA148BBCC7826D3F2A36AD8006F13525E11AEF9D7368F7803FFC960347312499EC1C3F33887A805E
```

- Source: [KR Season 4 page](https://sites.google.com/view/achi-loa/%EB%82%99%EC%9B%90/%EB%82%99%EC%9B%90-%EC%8B%9C%EC%A6%8C4): weeks 1–6 (2026-09-09 → 2026-10-14), stage 7. The author (a 30-character player) says the build is weak and he needs to change it; his note: skills + awakening turn the clock and cut cooldowns.
- Same awakening and hyper awakening as the recommended code.
- Differences from the recommended code:

  | Skill | Recommended | Runner-up |
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

## How the guide plays it

- Paradise plays on the base Dimensionalist identity (the Ark Passive spec doesn't apply). The guide says Space Wielders should also run these Time skills in Crucible: the Paradise gear's Specialization (800 total from Bell and Mirror) boosts the Fusion skills, awakening and clock acceleration, which Space Wielder skills can't use well.
- The core is the dimension clock: skills with the Dial Acceleration tripod speed it up, and a faster clock cuts cooldowns, including the awakening's, which the clock passing 12 o'clock does not cut.
- Before Liquor Glass 9: on pull, ![Forewarning](assets/icons/dimensionalist/forewarning.png) Forewarning (synergy) → ![Dimensional Break](assets/icons/dimensionalist/dimensional-break.png) Dimensional Break → ![Shackles of Time](assets/icons/dimensionalist/shackles-of-time.png) Shackles of Time (awakening) → ![Karmic Verdict](assets/icons/dimensionalist/karmic-verdict.png) Karmic Verdict (hyper awakening, T) → ![Temporal Crush](assets/icons/dimensionalist/temporal-crush.png) Temporal Crush, then everything else to speed the clock. Never let awakening, hyper awakening or Dimensional Break sit off cooldown.
- After Liquor Glass 9: ![Forewarning](assets/icons/dimensionalist/forewarning.png) Forewarning → ![Karmic Verdict](assets/icons/dimensionalist/karmic-verdict.png) Karmic Verdict → ![Shackles of Time](assets/icons/dimensionalist/shackles-of-time.png) Shackles of Time → ![Temporal Crush](assets/icons/dimensionalist/temporal-crush.png) Temporal Crush → ![Dimensional Break](assets/icons/dimensionalist/dimensional-break.png) Dimensional Break → speed the clock → repeat. The rotation becomes mostly hyper awakening and awakening. Afterimage Shatter makes Temporal Crush a placed skill that fits between them, and Amass lets you spam Cross Thrust for clock speed. The author logged 7 awakening casts in one fight.
- Stuck below 60% boss HP: at 55%+ check your crit rate and retry; at 40–50% go to Elysian, run once, upgrade, and re-test before spending more entries.

## Restoration order (from the guide)

1. Mask 1 and Whistle 3 (cooldown reduction).
2. Rush Liquor Glass 3 → 6 → 9 (hyper awakening cooldown at each).
3. Bell and Mirror to 9 (cooldown reduction at 9; Specialization +200 at 3 and 6 on each, 800 total).
4. Skip the identity-meter options: Dimensionalist's identity doesn't use them.
5. After every slot is at 9: Whistle 12 (crit rate to 100%), then Censer and Mask 15 (defense ignore, crit damage on push-immune targets).

The Season 4 author's order for classes that don't use their identity agrees on the start: Mask 1 first, Liquor Glass 9 before the other level-9 steps.
