# Demonic Impulse Shadowhunter — Pre-Ark Grid Build for Solo Mode (translated from Inven)

Target: item level 1640, no Ark Grid cores, Solo Mode raids.

Sources: [Hiloa, Inven Shadowhunter board, 2026-02-14, updated 2026-07-29](https://www.inven.co.kr/board/lostark/5498/71109) (main build) and [멍멍대포, 2026-02-12](https://www.inven.co.kr/board/lostark/5498/70915) (alternative). Both were posted after the 2026-02-11 KR Demonic Impulse rework. Neither is a Solo Mode build: no KR Solo Mode code exists for this spec on Inven, Arca or STOVE. Solo notes below are marked [inference].

Skills and tripods were matched by game ID through lostarkcodex.com (US vs KR locale). Blood Demonic Clone and the Ark Passive nodes come from the [Lost Ark Wiki](https://lostark.fandom.com/wiki/Shadowhunter/Ark_Passive). Icons in `assets/icons/demonic/` are from lostarkcodex.com (Blood Demonic Clone from the Lost Ark Wiki), converted to 32px PNG.

KR nicknames: **충모닉** = Demonic Impulse Shadowhunter; **입타** = Standing Striker Evolution build; **뭉가** = Blunt Thorn Evolution build; **112** = the Order Sun 1 / Moon 1 / Star 2 core set, which plays the same rotation as pre-grid.

## Skill code (main build)

```
AB885FC616808B7131C4948B5FF4C472DCDB707B9FE942A51530EB5B8481D4BFA19E0D0E63AF8D0D0F90B277F6B472B62483147E9B211709B09A4F5CE5085676
```

The author labels it "112 (= before Ark Grid)": pre-grid and 112 share one code and one rotation. KR code: global has the same Demonic Impulse rework (the "Ends of the Abyss" patch on the wiki), but no one has confirmed this code imports correctly on global.

## Skill legend

| Icon | Global name | KR name | Role |
|---|---|---|---|
| ![Demonic Slash](assets/icons/demonic/demonic-slash.png) | Demonic Slash | 데모닉 슬래쉬 | Gap closer used for the opener; synergy |
| ![Spinning Dive](assets/icons/demonic/spinning-dive.png) | Spinning Dive | 스피닝 다이브 | Hit immunity |
| ![Rising Claw](assets/icons/demonic/rising-claw.png) | Rising Claw | 라이징 클로 | Counter (normal form) |
| ![Demonic Clone](assets/icons/demonic/demonic-clone.png) | Demonic Clone | 제노사이드 | Hit immunity; optional transform skill |
| ![Demon Vision](assets/icons/demonic/demon-vision.png) | Demon Vision | 데몬 비전 | Transform skill (always used) |
| ![Decimate](assets/icons/demonic/decimate.png) | Decimate | 데시메이트 | Filler normal skill |
| ![Demon's Grip](assets/icons/demonic/demon-s-grip.png) | Demon's Grip | 데몬 그랩 | Main transform skill (ranged) |
| ![Howl](assets/icons/demonic/howl.png) | Howl | 하울링 | Synergy; optional transform skill |
| ![Ruining Rush](assets/icons/demonic/ruining-rush.png) | Ruining Rush | 루인 러쉬 | Demon Q; synergy |
| ![Death Claw](assets/icons/demonic/death-claw.png) | Death Claw | 데스 클로 | Demon W; counter |
| ![Destruction](assets/icons/demonic/destruction.png) | Destruction | 디스트럭션 | Demon E; synergy |
| ![Gore Bleeding](assets/icons/demonic/gore-bleeding.png) | Gore Bleeding | 고어 블리딩 | Demon R |
| ![Leaping Blow](assets/icons/demonic/leaping-blow.png) | Leaping Blow | 리프 블로우 | Demon A; hit immunity |
| ![Blood Massacre](assets/icons/demonic/blood-massacre.png) | Blood Massacre | 블러드 매서커 | Demon S |
| ![Blood Vortex](assets/icons/demonic/blood-vortex.png) | Blood Vortex | 블러드 볼텍스 | Demon D; main nuke, charges X |
| ![Bloody Piercing](assets/icons/demonic/bloody-piercing.png) | Bloody Piercing | 블러드 피어싱 | Demon F; main nuke, charges X |
| ![Blood Demonic Clone](assets/icons/demonic/blood-demonic-clone.png) | Blood Demonic Clone | 블러드 제노사이드 | X finisher; hit immunity |
| ![Blood Marsh](assets/icons/demonic/blood-marsh.png) | Blood Marsh | 블러디 마쉬 | Hyper Awakening Technique (T); hit immunity via Demon's Ascension |
| ![Fallen Ruin](assets/icons/demonic/fallen-ruin.png) | Fallen Ruin | 폴른 루인 | Awakening (V); hit and status immunity |

## How Demonic Impulse works after the rework

- While transformed: always immune to flinch. Immune to hits and status ailments while transforming and while un-transforming.
- Transforming heals about 20% HP.
- The demon gauge does not drain on its own while transformed.
- ![Blood Vortex](assets/icons/demonic/blood-vortex.png) Blood Vortex + ![Bloody Piercing](assets/icons/demonic/bloody-piercing.png) Bloody Piercing unlock ![Blood Demonic Clone](assets/icons/demonic/blood-demonic-clone.png) Blood Demonic Clone (X). X halves the demon gauge and halves the cooldowns of Blood Vortex and Bloody Piercing.

## Skills, tripods, runes

Tripod digits are the guide's slot numbers (tier 1 / 2 / 3). Names follow the codex tripod order, which is inferred, not ID-matched.

| Skill | Lv | Tripods | Rune | Note |
|---|---|---|---|---|
| ![Demonic Slash](assets/icons/demonic/demonic-slash.png) Demonic Slash | 10 | 132: Damage Amplification / Nimble Movement / Ambush Charge | | Synergy (8 s). Swap: 131 (Chain Charge): can't pass through the boss, but you use it twice |
| ![Spinning Dive](assets/icons/demonic/spinning-dive.png) Spinning Dive | 10 | 212: Excellent Mobility / Tenacity / Spinning Master | | Hit immunity |
| ![Rising Claw](assets/icons/demonic/rising-claw.png) Rising Claw | 10 | 232: Brutal Honesty / Concussion / Grasp of Death | | Counter |
| ![Demonic Clone](assets/icons/demonic/demonic-clone.png) Demonic Clone | 10 | 331: Tenacity / Fist of Destruction / Enh. Release Shadowburst | | Hit immunity |
| ![Demon Vision](assets/icons/demonic/demon-vision.png) Demon Vision | 14 | 131: Quick Release / Encroaching Power / Instant Discharge | Legendary Wealth | |
| ![Decimate](assets/icons/demonic/decimate.png) Decimate | 14 | 211: Swift Fingers / Encroachment Discharge / Cruel Hand | | |
| ![Demon's Grip](assets/icons/demonic/demon-s-grip.png) Demon's Grip | 14 | 322: Swift Fingers / Encroaching Power / Stretching Hand | | |
| ![Howl](assets/icons/demonic/howl.png) Howl | 14 | 322: Damage Amplification / Encroaching Power / Mighty Roar | | Synergy (16 s). Swaps: 122 (faster), 121 (faster still, smaller area) |
| ![Ruining Rush](assets/icons/demonic/ruining-rush.png) Ruining Rush (Q) | | | | Synergy (6 s) |
| ![Death Claw](assets/icons/demonic/death-claw.png) Death Claw (W) | | | Epic Quick Recharge | Counter |
| ![Destruction](assets/icons/demonic/destruction.png) Destruction (E) | | | Legendary Rage | Synergy (16 s) |
| ![Gore Bleeding](assets/icons/demonic/gore-bleeding.png) Gore Bleeding (R) | | | Legendary Quick Recharge | |
| ![Leaping Blow](assets/icons/demonic/leaping-blow.png) Leaping Blow (A) | | | Epic Galewind | Hit immunity |
| ![Blood Massacre](assets/icons/demonic/blood-massacre.png) Blood Massacre (S) | | | Legendary Vision | |
| ![Blood Vortex](assets/icons/demonic/blood-vortex.png) Blood Vortex (D) | | | Legendary Galewind | |
| ![Bloody Piercing](assets/icons/demonic/bloody-piercing.png) Bloody Piercing (F) | | | Legendary Galewind | |
| ![Blood Demonic Clone](assets/icons/demonic/blood-demonic-clone.png) Blood Demonic Clone (X) | | | | Hit immunity |
| ![Blood Marsh](assets/icons/demonic/blood-marsh.png) Blood Marsh (T) | | | | Hit immunity (from the Leap node Demon's Ascension) |
| ![Fallen Ruin](assets/icons/demonic/fallen-ruin.png) Fallen Ruin (V) | | | | Awakening; hit and status immunity |

Keep Galewind (or Vision) fixed on A/S/D/F. The Q/W/E/R runes are up to you: 4× Quick Recharge, Conviction, or Bleed/Poison.

## Engravings

| KR | Global | Note |
|---|---|---|
| 원한 | Grudge | |
| 예리한 둔기 | Keen Blunt Weapon | |
| 아드레날린 | Adrenaline | |
| 돌격대장 | Raid Captain | |
| 저주받은 인형 | Cursed Doll | Swaps below |

Cursed Doll swaps:
- **Hit Master**: doesn't boost awakening, bleed or poison damage; slightly weaker but usable.
- **Stabilized Status**: cheap Relic books; the author calls it not bad, since Demonic Impulse keeps healing.
- **Mass Increase**: the author doesn't recommend it because the attack-speed loss feels bad.

loagg usage data for the spec shows the same five as the most common set.

## Ark Passive

**Evolution** (pick one build; the author defaults to Standing Striker):

| Tier | Standing Striker build (입타) | Blunt Thorn build (뭉가) |
|---|---|---|
| T1 | Crit 10, Specialization 30 | Crit 10, Specialization 30 |
| T2 | Limit Break 1, Optimized Training 2 | Keen Sense 2, Optimized Training 1 |
| T3 | Zealous Smite 2 | Zealous Smite 2 |
| T4 | Critical 1, Pulverize 1 | Critical 1, Master 1 |
| T5 | Standing Striker 2 | Blunt Thorn 2 |

**Enlightenment:** T1 Demonic Impulse 1 · T2 Instinct Enhancement 3 · T3 Chaos Enhancement 3 · T4 Execution 3, Corrosion 2

**Leap:** T1 Unleashed Power 5, Release Potential 5 · T2 Demon's Ascension 3

Base crit rate is about 99%: Crit stat 23 + Demonize 30 + Adrenaline 20 + Chaos Enhancement 24 + accessories 2.
- Use Standing Striker by default. Switch to Blunt Thorn once crit goes over 100%.
- With a Relic Adrenaline book: Standing Striker.
- With an Epic Adrenaline book and crit over the cap: either move 1–2 Evolution points from Crit to Swiftness on Standing Striker, or use Blunt Thorn.
- On Blunt Thorn, when a crit synergy is in the party, trade Keen Sense 2 for Optimized Training 1 + Limit Break 1.
- Solo [inference]: Solo Mode has no party crit synergy, so the no-synergy numbers above are the ones that apply.

| Global node | KR node | Mapping |
|---|---|---|
| Limit Break | 한계 돌파 (한돌) | by wiki description |
| Optimized Training | 최적화 훈련 (최적) | by wiki description |
| Keen Sense | 예리한 감각 (예감) | inferred (Evolution T2 crit node) |
| Zealous Smite | 혼신의 강타 | by wiki description |
| Critical / Master / Pulverize | 회심 / 달인 / 분쇄 | by wiki description |
| Standing Striker / Blunt Thorn | 입식 타격가 / 뭉툭한 가시 | by wiki description |
| Instinct Enhancement | 본능 강화 | by wiki tree position and description |
| Chaos Enhancement | 혼돈 강화 | by wiki tree position (+30% crit while Demonized matches the crit math) |
| Execution | 처형식 | by wiki description (no gauge drain while transformed, X at 50%) |
| Corrosion | 침식 | inferred (T4 5-level node) |
| Unleashed Power / Release Potential | 풀려난 힘 / 잠재력 해방 | by wiki description |
| Demon's Ascension | 악마의 승천 | by wiki description |

## Gems (6 damage, 5 cooldown)

- **Damage gems** go on ![Blood Vortex](assets/icons/demonic/blood-vortex.png) Blood Vortex, ![Bloody Piercing](assets/icons/demonic/bloody-piercing.png) Bloody Piercing, ![Blood Massacre](assets/icons/demonic/blood-massacre.png) Blood Massacre, ![Leaping Blow](assets/icons/demonic/leaping-blow.png) Leaping Blow, ![Gore Bleeding](assets/icons/demonic/gore-bleeding.png) Gore Bleeding and ![Blood Demonic Clone](assets/icons/demonic/blood-demonic-clone.png) Blood Demonic Clone.
  - Priority: Blood Vortex >> Blood Demonic Clone >> Bloody Piercing > Gore Bleeding > Blood Massacre > Leaping Blow.
  - Put your highest damage gems on Blood Vortex and Blood Demonic Clone.
- **Cooldown gems** go on Blood Vortex, Bloody Piercing, Blood Massacre, Leaping Blow and Gore Bleeding.
  - Priority: Blood Vortex = Bloody Piercing >>> Blood Massacre > Leaping Blow > Gore Bleeding.
  - Put your highest cooldown gems on Blood Vortex and Bloody Piercing.

## Rotation

**Opener (with an Adrenaline / Atropine potion):**
1. Close the gap with ![Demonic Slash](assets/icons/demonic/demonic-slash.png) Demonic Slash.
2. Transform with ![Demon's Grip](assets/icons/demonic/demon-s-grip.png) Demon's Grip + ![Demon Vision](assets/icons/demonic/demon-vision.png) Demon Vision.
3. Use ![Death Claw](assets/icons/demonic/death-claw.png) Death Claw to reach 5 Adrenaline stacks.
4. Press ![Blood Vortex](assets/icons/demonic/blood-vortex.png) Blood Vortex and drink the Atropine potion at the same moment.
5. Then: ![Blood Vortex](assets/icons/demonic/blood-vortex.png) → ![Bloody Piercing](assets/icons/demonic/bloody-piercing.png) → ![Blood Demonic Clone](assets/icons/demonic/blood-demonic-clone.png) → ![Blood Marsh](assets/icons/demonic/blood-marsh.png) → ![Gore Bleeding](assets/icons/demonic/gore-bleeding.png) → ![Blood Massacre](assets/icons/demonic/blood-massacre.png) → ![Fallen Ruin](assets/icons/demonic/fallen-ruin.png) → ![Leaping Blow](assets/icons/demonic/leaping-blow.png) → ![Destruction](assets/icons/demonic/destruction.png) → ![Gore Bleeding](assets/icons/demonic/gore-bleeding.png). The Atropine buff ends here.
6. Continue with step 3 of the loop.

**Loop:**
1. Transform: ![Demon's Grip](assets/icons/demonic/demon-s-grip.png) Demon's Grip → ![Demon Vision](assets/icons/demonic/demon-vision.png) Demon Vision. Grip first, because Grip fills the identity gauge when it reaches the boss; the other order delays the transform.
2. ![Blood Vortex](assets/icons/demonic/blood-vortex.png) Blood Vortex → ![Bloody Piercing](assets/icons/demonic/bloody-piercing.png) Bloody Piercing → ![Blood Demonic Clone](assets/icons/demonic/blood-demonic-clone.png) Blood Demonic Clone.
3. Until Blood Vortex / Bloody Piercing come back, use: ![Blood Marsh](assets/icons/demonic/blood-marsh.png) Blood Marsh, ![Blood Massacre](assets/icons/demonic/blood-massacre.png) Blood Massacre, ![Gore Bleeding](assets/icons/demonic/gore-bleeding.png) Gore Bleeding, ![Leaping Blow](assets/icons/demonic/leaping-blow.png) Leaping Blow, ![Destruction](assets/icons/demonic/destruction.png) Destruction, ![Death Claw](assets/icons/demonic/death-claw.png) Death Claw, ![Ruining Rush](assets/icons/demonic/ruining-rush.png) Ruining Rush.
4. ![Blood Vortex](assets/icons/demonic/blood-vortex.png) Blood Vortex → ![Bloody Piercing](assets/icons/demonic/bloody-piercing.png) Bloody Piercing → ![Blood Demonic Clone](assets/icons/demonic/blood-demonic-clone.png) Blood Demonic Clone. You un-transform automatically.
5. Repeat.

**Best opener (if you can wait 45 s before the fight starts):**
1. At the start, drink an awakening potion, then use Blood Vortex and Bloody Piercing. X stays ready even after you un-transform.
2. Wait about 45 s.
3. Close the gap with ![Demonic Slash](assets/icons/demonic/demonic-slash.png) Demonic Slash, transform, then use ![Destruction](assets/icons/demonic/destruction.png) Destruction, ![Death Claw](assets/icons/demonic/death-claw.png) Death Claw and ![Ruining Rush](assets/icons/demonic/ruining-rush.png) Ruining Rush to reach 5 Adrenaline stacks.
4. Press ![Blood Demonic Clone](assets/icons/demonic/blood-demonic-clone.png) X and drink Atropine at the same moment.
5. Then X → Blood Vortex → Bloody Piercing → Blood Marsh → X.
6. Re-transform with Demon's Grip + Demon Vision.
7. Blood Massacre → Fallen Ruin → Leaping Blow → Gore Bleeding → Destruction.
8. Continue with step 3 of the loop.

**Transform options** (all start with ![Demon Vision](assets/icons/demonic/demon-vision.png) Demon Vision):
- \+ ![Demon's Grip](assets/icons/demonic/demon-s-grip.png) Demon's Grip: the default; transforms from range.
- \+ ![Howl](assets/icons/demonic/howl.png) Howl: when you need the synergy.
- \+ ![Demonic Clone](assets/icons/demonic/demonic-clone.png) Demonic Clone: when you need flinch or hit immunity.

### Solo Mode notes [inference]

- With no party, synergy timing doesn't matter. ![Howl](assets/icons/demonic/howl.png) Howl, ![Destruction](assets/icons/demonic/destruction.png) Destruction and ![Demonic Slash](assets/icons/demonic/demonic-slash.png) Demonic Slash still debuff the boss for your own damage, so keep using them.
- No support means no buff to wait for in the opener; the 45-second opener only applies where the raid has a waiting area before the boss.
- The heal on transform and the hit immunity on transform / un-transform make up for not having support shields.

## Alternative: "No Ark Grid" alt build

```
CF1AAE309D1206DD8AB176921536E4A3223859E9E6270FE94CF03FC0F475E74CA50A3313EA21FD7173137CCC7DAA2306FE3B146B5F5DBCADF81B733B8E43F94C
```

Source: [멍멍대포, Inven, 2026-02-12](https://www.inven.co.kr/board/lostark/5498/70915). Tested on a 1690 alt (combat power 1590) in three Skolakia clears; no other raid tested yet. The author calls it the easiest and most comfortable build before Ark Grid.

- **Transform:** ![Demon's Grip](assets/icons/demonic/demon-s-grip.png) Demon's Grip → ![Howl](assets/icons/demonic/howl.png) Howl.
- **Rotation:**
  1. ![Destruction](assets/icons/demonic/destruction.png) Destruction (synergy plus bleed or poison).
  2. Hyper Awakening skill.
  3. ![Blood Vortex](assets/icons/demonic/blood-vortex.png) Blood Vortex → ![Bloody Piercing](assets/icons/demonic/bloody-piercing.png) Bloody Piercing → ![Blood Demonic Clone](assets/icons/demonic/blood-demonic-clone.png) X → ![Blood Massacre](assets/icons/demonic/blood-massacre.png) Blood Massacre → ![Leaping Blow](assets/icons/demonic/leaping-blow.png) Leaping Blow → ![Death Claw](assets/icons/demonic/death-claw.png) Death Claw (Quick Recharge) → ![Gore Bleeding](assets/icons/demonic/gore-bleeding.png) Gore Bleeding.
  4. Use whatever comes off cooldown, finish with Blood Vortex → Bloody Piercing → X, and repeat.
  - The Hyper Awakening skill can wait until after Blood Vortex / Bloody Piercing / X.
  - If you don't have full movement speed when you transform, use ![Demonic Slash](assets/icons/demonic/demonic-slash.png) Demonic Slash first, and Destruction can go after the Hyper Awakening skill and D/F/X.
- **Damage gems:** R, A, S, D, F, X. Priority: D > X > F > S > A.
- **Cooldown gems:** W, A, S, D, F. Priority: D/F > S > A > W.
- **Runes:** the code uses Bleed; the author runs Poison. Either works.

# Shadowhunter in the Paradise Crucible

Crucible (KR 낙원 증명) is Paradise's solo boss ladder, ranked per class. Only **skill levels and tripods** carry into Paradise: engravings, gems, runes, cards and the whole Ark Passive don't apply (official release notes; details in `paladin.md` → What applies in Paradise). So your raid spec (Demonic Impulse) and Ark Grid don't matter here; only the skill bar, levels, tripods and awakening choice do.

These are KR codes, checked on [lostark.bible](https://lostark.bible/tools/skill-code) and uploaded to CE on 2026-10-15, so they import on EUC. Whether they play the same on global depends on global having KR's balance patches, which is unverified.

## Crucible skill legend

| Icon | Global name | KR name |
|---|---|---|
| ![Blood Marsh](assets/icons/demonic/blood-marsh.png) | Blood Marsh | 블러드 마쉬 |
| ![Cruel Cutter](assets/icons/demonic/cruel-cutter.png) | Cruel Cutter | 크루얼 커터 |
| ![Demon Vision](assets/icons/demonic/demon-vision.png) | Demon Vision | 데몬 비전 |
| ![Demon's Grip](assets/icons/demonic/demon-s-grip.png) | Demon's Grip | 데몬 그랩 |
| ![Fallen Ruin](assets/icons/demonic/fallen-ruin.png) | Fallen Ruin | 폴른 루인 |
| ![Grind Chain](assets/icons/demonic/grind-chain.png) | Grind Chain | 그라인드 체인 |
| ![Howl](assets/icons/demonic/howl.png) | Howl | 하울링 |
| ![Piercing Thorn](assets/icons/demonic/piercing-thorn.png) | Piercing Thorn | 피어스 쏜 |
| ![Rising Claw](assets/icons/demonic/rising-claw.png) | Rising Claw | 라이징 클로 |
| ![Thrust Impact](assets/icons/demonic/thrust-impact.png) | Thrust Impact | 쓰러스트 임팩트 |

## Recommended Crucible code

```
CF9117076DCB3A978FCBCAB2086EE76ADB93393A5BD9A35EB667B9ECA42D8A00F42C0934510702D296EC1FA220D65F64D12CD146B9620CF20EA445A5A90F7246
```

- Source: [KR Season 4 page](https://sites.google.com/view/achi-loa/%EB%82%99%EC%9B%90/%EB%82%99%EC%9B%90-%EC%8B%9C%EC%A6%8C4): listed weeks 2–6 (2026-09-16 → 2026-10-14), Crucible stage 4–7, played around demon form.
- Awakening ![Fallen Ruin](assets/icons/demonic/fallen-ruin.png) Fallen Ruin; hyper awakening ![Blood Marsh](assets/icons/demonic/blood-marsh.png) Blood Marsh. No runes (they wouldn't apply anyway).
- Jev pick probability: **0.92**.

| Skill | Level | Tripods |
|---|---|---|
| ![Demon's Grip](assets/icons/demonic/demon-s-grip.png) Demon's Grip | 14 | Swift Fingers, Encroaching Power, Stretching Hand |
| ![Rising Claw](assets/icons/demonic/rising-claw.png) Rising Claw | 1 | — |
| ![Piercing Thorn](assets/icons/demonic/piercing-thorn.png) Piercing Thorn | 14 | Bleed Effect, Rotting Zone, Advancing Thorns |
| ![Demon Vision](assets/icons/demonic/demon-vision.png) Demon Vision | 14 | Quick Release, Encroaching Power, Instant Discharge |
| ![Grind Chain](assets/icons/demonic/grind-chain.png) Grind Chain | 14 | Critical Blow, Chain Attack, Encroachment Release |
| ![Howl](assets/icons/demonic/howl.png) Howl | 14 | Damage Amplification, Encroaching Power, Mighty Roar |
| ![Cruel Cutter](assets/icons/demonic/cruel-cutter.png) Cruel Cutter | 14 | Bleed Effect, Double-Edged Stike, Encroachment Release |
| ![Thrust Impact](assets/icons/demonic/thrust-impact.png) Thrust Impact | 10 | Swift Thrust, Deep Thrust, Encroachment Release |

## Runner-up

```
5F4573A10FFFE025CBB554C466BF9581384388B0546A780A7F3201DCEE3D6F17DD7107B89F81A265D4258AAE5DF7C575BD7030B813CAB9785012D870FF40EBC8
```

- Source: [KR Season 3 page](https://sites.google.com/view/achi-loa/%EB%82%99%EC%9B%90/%EB%82%99%EC%9B%90-%EC%8B%9C%EC%A6%8C3): weeks 6–15 of Season 3 (2026-06-24 → 2026-08-26).
- Same awakening and hyper awakening as the recommended code.
- Differences from the recommended code:

  | Skill | Recommended | Runner-up |
  |---|---|---|
  | ![Demon Vision](assets/icons/demonic/demon-vision.png) Demon Vision | Lv14: Quick Release, Encroaching Power, Instant Discharge | Lv10: Quick Release, Encroaching Power, Instant Discharge |
  | ![Piercing Thorn](assets/icons/demonic/piercing-thorn.png) Piercing Thorn | Lv14: Bleed Effect, Rotting Zone, Advancing Thorns | Lv14: Vital Point Hit, Encroachment Discharge, Advancing Thorns |
  | ![Thrust Impact](assets/icons/demonic/thrust-impact.png) Thrust Impact | Lv10: Swift Thrust, Deep Thrust, Encroachment Release | Lv14: Swift Thrust, Deep Thrust, Encroachment Release |

## Notes and Restoration order

- Week 1 he cleared stages 1–3 with a Perfect Suppression-style code (no transform); from week 2 he plays this transform code. Week 6: stage 7 at about 2.1M Paradise score.
- Season 3 rotation note: movement skill (synergy) + skills, then awakening + hyper awakening + skills once the boss's damage reduction is low.
- Whistle 6 fills the identity gauge much faster; the author names Shadowhunter as a class that benefits.
- A Season 3 board post by another player, ["transform at stage 15"](https://www.inven.co.kr/board/lostark/5498/72613) (2026-08-14), reached top 30 by transforming at stage 15.

Restoration order (the author's, for a class that uses its identity gauge; each number is the slot's Restoration level, and slot effects are in `paladin.md` → Restoration priority):

- **Phase 1 (levels 1–4, week 1):** Mask 1 → Censer 1 → Liquor Glass / Bell / Mirror 2 → Mask / Censer / Whistle 2 → Whistle 3 → Liquor Glass 3 → Whistle 4 → Bell / Mirror 3 → Censer 4 → the rest to 4.
- **Phase 2 (level 6):** Censer 6 → Liquor Glass 6 → Whistle 6 → Mask 6, then Bell / Mirror.
- **Phase 3 (level 9):** Liquor Glass 9 first (hyper awakening cooldown), then Censer 9, then the rest.
