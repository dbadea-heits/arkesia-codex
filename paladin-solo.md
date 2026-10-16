# DPS Paladin (Judgment) — Solo Mode Build (translated from Inven)

Source: [유스타인, Inven Paladin board, 2026-06-24](https://www.inven.co.kr/board/lostark/5558/88648). Skill, buff, Ark Passive, engraving, card and Solo Mode names are global client names. Skills were matched to the KR names by game ID through lostarkcodex.com (US vs KR locale), identity skills and buff stacks by the Lost Ark Wiki, and Ark Passive nodes by the Lost Ark Wiki and Maxroll. Skill icons in `assets/icons/holyknight/` come from lostarkcodex.com (and the Lost Ark Wiki for identity skills and stacks), converted to 32px PNG.

Why this class for solo: see [class_compare.md](class_compare.md).

## Skill legend

| Icon | Global name | KR name | Role |
|---|---|---|---|
| ![Sacred Executioner](assets/icons/holyknight/sacred-executioner.png) | Sacred Executioner | 신의 집행자 | The Z identity skill; the Judgment build keeps its effect always on |
| ![Judgment Blade](assets/icons/holyknight/judgment-blade.png) | Judgment Blade | 심판의 칼날 | The X skill the Divine Knight node swaps in; builds Judgment Sword stacks |
| ![Executioner's Sword](assets/icons/holyknight/executioner-s-sword.png) | Executioner's Sword | 집행자의 검 | Normal skill; loses its counter under Divine Knight |
| ![Charge](assets/icons/holyknight/charge.png) | Charge | 돌진 | Gains the counter (its thrust attack) under Divine Knight |
| ![Execution of Justice](assets/icons/holyknight/execution-of-justice.png) | Execution of Justice | 정의 집행 | Hit-immunity skill |
| ![Divine Justice](assets/icons/holyknight/divine-justice.png) | Divine Justice | 신성한 정의 | Hyper Awakening skill (inferred: the Paladin Leap nodes Sacred Light and Righteous Light refer to casting Divine Justice) |
| ![Sword of Punishment](assets/icons/holyknight/sword-of-punishment.png) | Sword of Punishment | 징벌의 검 | Buff stack (max 30) from Punish Skill hits |
| ![Judgment Sword](assets/icons/holyknight/judgment-sword.png) | Judgment Sword | 심판의 검 | Buff stack (max 3) from Judgment Blade hits |

KR sources call Target Weak Point "약점 공략" with the nickname "쁘띠회심" (a mini crit-damage buff); the Inven post refers to Sacred Executioner as "Z아덴" and Judgment Blade as "X아덴기" (아덴 = identity). The author's Inven build nicknames have no global names: **뭉가** = Blunt Thorn build, **신속 입타** = Swiftness + Standing Striker build.

## What the Divine Knight node (Enlightenment tier 1) does
The Judgment spec is built on this node.
1. You can't use Holy Skills.
2. Piety Meter always full; ![Sacred Executioner](assets/icons/holyknight/sacred-executioner.png) Sacred Executioner (Z) never runs out.
3. Sacred Executioner effect always on: +20% damage to enemies even with Z off.
4. Turning on Sacred Executioner → **Divine Knight** (+15% move speed) for 60 s.
5. X becomes ![Judgment Blade](assets/icons/holyknight/judgment-blade.png) **Judgment Blade**.
6. Each Punish Skill hit (1 s internal cooldown): **Target Weak Point** for 5 s (+8% crit damage taken), +1 ![Sword of Punishment](assets/icons/holyknight/sword-of-punishment.png) **Sword of Punishment** stack, +3 s Divine Knight.
7. Swords stack up to 30; turning Z off drops them all (3,306 damage and 2% mana per stack).
8. **![Executioner's Sword](assets/icons/holyknight/executioner-s-sword.png) Executioner's Sword no longer counters → counter with ![Charge](assets/icons/holyknight/charge.png) Charge.**

## Engravings (all level 4 Relic books)
| KR | EN | Note |
|---|---|---|
| 돌격대장 | Raid Captain | |
| 아드레날린 | Adrenaline | |
| 예리한 둔기 | Keen Blunt Weapon | stone Lv.3 |
| 원한 | Grudge | stone Lv.2 |
| 저주받은 인형 | Cursed Doll | swap option: Stabilized Status |

## Cards
Light of Salvation 6-piece, all cards 5★: −30% Dark damage taken, +15% Holy damage, attacks become Holy.

## Ark Passive
The author's character has 140 / 101 / 70 points; at 1640 you will have fewer, so fill in this order.

**Evolution 140 points:** T1 Swiftness 12, Crit 28 · T2 Limit Break 3 · T3 Zealous Smite 2 · T4 Master 1, Critical 1 · T5 Blunt Thorn 2

**Enlightenment 101 points:** T1 Divine Knight 1 · T2 Piety Training 3 · T3 Judgment 3, Prelude of Punishment 1 · T4 Protective Judgement 1, Blessing of Judgment 3

**Leap 70 points:** T1 Release Potential 4, Instant Spell 2, Unleashed Power 5 · T2 Execution Sentence 3

Node names are matched to the KR names below. Rows marked "inferred" were matched by tree position and point totals, not by an exact name (Maxroll and the Lost Ark Wiki list the global nodes without KR names).

| Global node | KR node | Match |
|---|---|---|
| Swiftness, Crit | 신속, 치명 | exact |
| Limit Break | 한계 돌파 | exact |
| Keen Sense, Optimized Training | 예리한 감각, 최적화 훈련 | exact |
| Zealous Smite | 혼신의 강타 | inferred (Evolution tier 3 position) |
| Master | 달인 | exact |
| Critical | 회심 | inferred (Evolution tier 4 position) |
| Blunt Thorn | 뭉툭한 가시 | exact |
| Divine Knight | 신의 기사 | exact |
| Piety Training | 신앙 수련 | inferred (Enlightenment tier 2 position) |
| Judgment | 심판자 | inferred (Enlightenment tier 3 position) |
| Prelude of Punishment | 징벌의 서막 | exact |
| Protective Judgement | 심판의 가호 | inferred (1 level of a 5-level, 2-point node) |
| Blessing of Judgment | 심판의 세례 | inferred (3 levels of a 3-level, 8-point node; the only mapping that makes the build total ≈101 points) |
| Release Potential | 잠재력 해방 | inferred (Leap tier 1 position) |
| Instant Spell | 즉각적인 주문 | exact |
| Unleashed Power | 풀려난 힘 | inferred (Leap tier 1 position) |
| Execution Sentence | 집행 선고 | exact |

## Skill codes
These are from the Korean server; whether they import on global is unconfirmed.

Main (Blunt Thorn); the author reposted this same code in the comments as the updated version:
```
978402441957C1D8E648231E54773CDEB5323066A250AD560D40C031A7E83DC4A859712AA8446D3841644AAAE28E8FC75B6A738F4617569A1141CAC95C689377
```
Swiftness / Standing Striker (for players who dislike Blunt Thorn):
```
364D0E732C0A94D7CB45D037B0DD2776DF2A2B2CDCF969DE7D41FD7F39006F1E01BF48806E1B9C85B6FB0E2069BD10971F4FFE430CBF2ADB9B233A488E011B09
```

## Tuning notes
- Short on crit (no Relic Adrenaline / low accessory rolls): replace Limit Break with **Keen Sense** (+4% crit) plus more Crit.
- With Blunt Thorn: the author suggests **Keen Sense + Optimized Training** instead of Limit Break (Blunt Thorn already gives high Evolution damage).
- Solo buff: **True Supporter**.
- Ark Grid (needs 1700): if you only solo, don't rush the 222 core; per the author it makes the build back-attack based, which is bad 1-on-1, and the Order Star core has a damage penalty. Before Ark Grid, Judgment doesn't depend on attack angle.

## How to play
1. Build ![Sword of Punishment](assets/icons/holyknight/sword-of-punishment.png) Swords of Punishment (max 30) with Punish Skills; hitting with X builds ![Judgment Sword](assets/icons/holyknight/judgment-sword.png) Judgment Swords (max 3).
2. In the damage window, **turn Z off** to drop all swords. Most players who think their solo damage is low aren't doing this.
3. Hyper Awakening (![Divine Justice](assets/icons/holyknight/divine-justice.png) Divine Justice) does the same damage with Z on or off → use it right after turning Z off.
4. Use X (![Judgment Blade](assets/icons/holyknight/judgment-blade.png) Judgment Blade) right after another Punish Skill (turning Z on counts): no wind-up or recovery, faster cast.
5. ![Execution of Justice](assets/icons/holyknight/execution-of-justice.png) Execution of Justice is fine as the hit-immunity skill.
6. Counters: ![Charge](assets/icons/holyknight/charge.png) **Charge**, not ![Executioner's Sword](assets/icons/holyknight/executioner-s-sword.png) Executioner's Sword.

## Reference videos (from the post)
- Hyper Awakening timing: https://www.youtube.com/watch?v=8r4xVOr9L7g
- Z usage / sword drop + X chaining: https://www.youtube.com/watch?v=VF14qWnvFbc
- Kazeros Act 1: https://www.youtube.com/watch?v=NCV9ji3bzXo
- Kazeros Act 2: https://www.youtube.com/watch?v=cpisxUiG4DQ
- Kazeros Act 3: https://www.youtube.com/watch?v=_dezDitRbWs
