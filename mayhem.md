# Mayhem Berserker — Solo Mode gold-funnel alt

Collected 2026-09-27. All codes extracted verbatim from source HTML.

Skill, tripod, engraving and Ark Passive names are global client names. Skills and tripods are matched to the KR names by game ID through lostarkcodex.com (US vs KR locale); Ark Passive nodes come from the Lost Ark Wiki and Maxroll. Icons in `assets/icons/berserker/` come from lostarkcodex.com.

## Skill legend

| Icon | Global name | KR name | Role |
|---|---|---|---|
| ![Red Dust](assets/icons/berserker/red-dust.png) | Red Dust | 레드 더스트 | Party synergy and Atk. Power self-buff (Rage window); cast it first |
| ![Dark Rush](assets/icons/berserker/dark-rush.png) | Dark Rush | 다크 러쉬 | Mayhem Ark Passive skill replacing Bloody Rush; top damage-share skill in the 111 build |
| ![Brave Slash](assets/icons/berserker/brave-slash.png) | Brave Slash | 브레이브 슬래쉬 | Damage skill; land it from behind |
| ![Overdrive](assets/icons/berserker/overdrive.png) | Overdrive | 오버드라이브 | Main damage skill |
| ![Finish Strike](assets/icons/berserker/finish-strike.png) | Finish Strike | 피니쉬 스트라이크 | Main damage skill |
| ![Hell Blade](assets/icons/berserker/hell-blade.png) | Hell Blade | 헬 블레이드 | Main damage skill |
| ![Sword Storm](assets/icons/berserker/sword-storm.png) | Sword Storm | 소드 스톰 | Damage skill in the pre-grid rotation; replaced by Tempest Slash + Power Break in the 111 build |
| ![Power Break](assets/icons/berserker/power-break.png) | Power Break | 파워 브레이크 | Filler damage skill |
| ![Tempest Slash](assets/icons/berserker/tempest-slash.png) | Tempest Slash | 템페스트 슬래쉬 | Filler damage skill |
| ![Mountain Crash](assets/icons/berserker/mountain-crash.png) | Mountain Crash | 마운틴 크래쉬 | Damage skill, Counter |
| ![Shoulder Charge](assets/icons/berserker/shoulder-charge.png) | Shoulder Charge | 숄더 차지 | Mobility skill |
| ![Whirlwind](assets/icons/berserker/whirlwind.png) | Whirlwind | 휠윈드 | Hold-type skill (2.1s hold in the 333 build) |
| ![Blood Slash](assets/icons/berserker/blood-slash.png) | Blood Slash | 블러드 슬래시 | Hyper Awakening skill |
| ![Fury Method](assets/icons/berserker/fury-method.png) | Fury Method | 퓨리 메소드 | Hyper Awakening skill; slightly stronger than Blood Slash below 1680 |

Other KR terms kept: **원기달저돌** / **원예달돌저** are KR initial-strings of engraving sets (원한 = Grudge, 기습의 대가 = Ambush Master, 달인의 저력 = Master's Tenacity, 저주받은 인형 = Cursed Doll, 돌격대장 = Raid Captain, 예리한 둔기 = Keen Blunt Weapon). **부뼈제압** (Broken Bone + Suppression) and **음돌** (= 음속 돌파, Supersonic Breakthrough) are KR community nicknames with no global name. **루현** is the guide author's handle.

Inferred mappings: the source notes' "Paradise Breaker" is not a Berserker skill; it matches 파브 (= 파워 브레이크) in the KR abbreviation used by Mayhem guides, so it is written as Power Break. "Enrage" is written as Rage (the Cold Fury Ark Passive node: "Rage duration +1.5 seconds"). The Tempest Slash tripod "Swirl" (휘몰아치기) is Driving Hit in the global client. Dark Rush has no entry in lostarkcodex's Berserker skill list; its KR name 다크 러쉬 and icon were looked up by its skill ID (16141).

## Brief

- Class / spec: Berserker, Mayhem (광기)
- Content: Solo Mode raids
- Goal: gold-funnel alt; easy over max damage
- Ark Grid cores: 2026-09-27 pass defaulted to **111** (loagg 2026-09-17: 233 of 298 Mayhem at 1720+ run 111; 22 run 333). 2026-10-13 request: **no Ark Grid** → use the pre-grid section below

## Pick — 111 Rush Mayhem (Sun1 Dark Power / Moon1 Dark Torrent / Star1 Frenzy)

```
3AE77BF6727FCF2B73EFF52B7C488346CF09157EEC7022E9A2EB3FF40D045CBE9C5EE8C81DEDD39285DA5B010F81A95C3197812A184A5B35C5598199CB18D11F
```

- Source: 루현 (certified Mayhem guide author), posted 2026-03-16 — https://www.inven.co.kr/board/lostark/5341/153616 (same code in https://www.inven.co.kr/board/lostark/5341/148489)
- Version: labelled "111광기 ver.26.2.11" — last substantive Mayhem change in KR; board users say later 2026 patches were numeric tweaks only
- Jev: pick 0.64 (vs "none fits" 0.36); full-match 0.21 because it is a party-raid guide, not solo-specific
- Engravings: Grudge, Ambush Master, Master's Tenacity, Cursed Doll, Raid Captain (원기달저돌). Author calls Ambush Master mandatory (반드시): the Sun1 core Dark Power 17p makes ![Dark Rush](assets/icons/berserker/dark-rush.png) Dark Rush, the top damage-share skill, always a back attack; also land ![Brave Slash](assets/icons/berserker/brave-slash.png) Brave Slash from behind. Without the Sun1 core (pre-grid, 333) ![Dark Rush](assets/icons/berserker/dark-rush.png) Dark Rush is not a guaranteed back attack → Keen Blunt Weapon instead
- loagg 2026-09-27 (Mayhem, 1720+): Ambush Master 173/298 overall; 57–59% in 111 low-crit segments, 90–92% in 111 high-crit (~129) segments, 2/22 in 333
- Ark Passive: Blunt Thorn + Optimized Training; target ~80% non-Burst crit in town. Short on crit → swap Blunt Thorn for Supersonic Breakthrough; author: the difference is ~1% at most
- Skills: ![Tempest Slash](assets/icons/berserker/tempest-slash.png) Tempest Slash + ![Power Break](assets/icons/berserker/power-break.png) Power Break replace ![Sword Storm](assets/icons/berserker/sword-storm.png) Sword Storm (frees gems for ![Dark Rush](assets/icons/berserker/dark-rush.png) Dark Rush); Tempest tripod (Driving Hit vs Storm Slash) is taste. Not using ![Shoulder Charge](assets/icons/berserker/shoulder-charge.png) Shoulder Charge for mobility → drop to lv1, put points in ![Red Dust](assets/icons/berserker/red-dust.png) Red Dust / ![Mountain Crash](assets/icons/berserker/mountain-crash.png) Mountain Crash
- Rotation: ![Red Dust](assets/icons/berserker/red-dust.png) Red Dust → ![Dark Rush](assets/icons/berserker/dark-rush.png) Dark Rush → ![Brave Slash](assets/icons/berserker/brave-slash.png) Brave Slash → ![Overdrive](assets/icons/berserker/overdrive.png) Overdrive / ![Finish Strike](assets/icons/berserker/finish-strike.png) Finish Strike / ![Hell Blade](assets/icons/berserker/hell-blade.png) Hell Blade → ![Power Break](assets/icons/berserker/power-break.png) Power Break / ![Tempest Slash](assets/icons/berserker/tempest-slash.png) Tempest. Rage buff is near-permanent, but still ![Red Dust](assets/icons/berserker/red-dust.png) Red Dust on cooldown — ![Dark Rush](assets/icons/berserker/dark-rush.png) Dark Rush's damage bonus needs a ![Red Dust](assets/icons/berserker/red-dust.png) Red Dust first
- ![Overdrive](assets/icons/berserker/overdrive.png) Overdrive: charged tripod ≈ +1% damage over instant; instant is more forgiving
- Author: "very easy to operate"

### Solo Mode notes (board comments, not the guide)

- Mana runs dry even with food and the Azena buff; solo has no support mana. Run Focus runes on ![Red Dust](assets/icons/berserker/red-dust.png) Red Dust, ![Mountain Crash](assets/icons/berserker/mountain-crash.png) Mountain Crash, ![Overdrive](assets/icons/berserker/overdrive.png) Overdrive (older guide advice)
- One user reports the solo back-attack buff grants the normal back-attack bonus from any angle but does not trigger Ambush Master. ![Dark Rush](assets/icons/berserker/dark-rush.png) Dark Rush always counts as a back attack via the Sun1 core, so Ambush Master still applies to it

## Runner-up — 111 Broken Bone + Suppression (부뼈제압)

```
BBF629E466FEB40C80440CCE90949E8B73D085B1ECA8C965A4290563067FD03A805500C19FF6FB7DD3E39C17A49C3D64A3F612C9BF34002276F7962C2614411C
```

- Source: https://www.inven.co.kr/board/lostark/5341/154772, posted 2026-08-30
- Jev full-match: 0.09
- Difference: stagger-window burst tuned for Belgardin Nightmare; raid-specific, nerf expected — poor fit for solo farming

## If the alt has 333 cores — 333 Holding Mayhem

```
47C4BDDE8CB2DE67769090C2B50BA9446C1BFC83FA004348186AA32D14B8C67DC6E12E45347620D0734EC7EB6AEEC0FF6FD0C591EE198229ADB83EDB8F928179
```

- Source: 루현 certified guide, labelled "333광기 ver.26.2.11" — https://www.inven.co.kr/board/lostark/5341/148489
- Jev full-match: 0.03
- Harder: ![Hell Blade](assets/icons/berserker/hell-blade.png) Hell Blade holds 2.3s, ![Whirlwind](assets/icons/berserker/whirlwind.png) Whirlwind 2.1s; ![Red Dust](assets/icons/berserker/red-dust.png) Red Dust's Red Shock tripod has no stagger immunity

## No Ark Grid (pre-grid, below 1700) — Supersonic Breakthrough (음돌) Mayhem

Collected 2026-10-02, re-checked 2026-10-13. No solo-specific or post-grid pre-1700 code exists; this is the party-raid guide 루현 still links as "1700 이전 광기" in his Dec 2025 roadmap video (https://youtu.be/AjQwd1Eg8Yk), adding Critical (회심) + Pulverize (분쇄) as fixed picks [inferred: node names matched against Maxroll's Ark Passive overview list, not ID-checked]. A separate KR newbie post (시엔쿤리, 2025-12-13, https://www.inven.co.kr/board/lostark/5341/152358) gives the same advice: before Ark Grid play Mayhem, not Technique (Technique's rotation is very hard pre-grid and changes completely once you have cores), set up from this video, plus Critical + Pulverize.

```
FE2A2EBAA4DC1D32226D12E370DA5368072BC99333E811B8B7F96F125E055556C0DD6D9CAA55D693774B4062D10594669C5F8B79173D117CC64C717506FC302C
```

- Source: 루현 beginner guide, posted 2025-06-24 — https://www.inven.co.kr/board/lostark/5341/149511
- Jev 2026-10-13 (brief: Mayhem, Solo Mode, no Ark Grid): pick 0.99; full-match 0.65 (party/general guide, not solo-specific). Earlier 2026-10-02 run: pick 0.89, full-match 0.38
- Engravings: Grudge, Keen Blunt Weapon, Master's Tenacity, Raid Captain, Cursed Doll (원예달돌저). Cursed Doll swappable for MP Efficiency Increase or Mass Increase; when cutting ability stones, author suggests Grudge + Raid Captain or Keen Blunt Weapon + Raid Captain (drop Cursed Doll). Adrenaline never recommended. Elixir: Critical (회심)
- Ark Passive: copy as-is with ~80 crit / ~80 swift bracelets; short on Evolution points → fill top-down
- Crit/swift: target 90% crit excluding the 10% back-attack bonus (≈60% in town; Burst gives 30%). 22+ swift nodes keep Supersonic Breakthrough at full value (cap 153% atk/move speed = Burst 15% + support 9% + feast 5% + 129% town)
- Hyper awakening: ![Blood Slash](assets/icons/berserker/blood-slash.png) Blood Slash; below 1680 (before Leap tier 2) ![Fury Method](assets/icons/berserker/fury-method.png) Fury Method is slightly stronger
- Gems: damage priority Hyper > ![Overdrive](assets/icons/berserker/overdrive.png) Overdrive > ![Finish Strike](assets/icons/berserker/finish-strike.png) Finish Strike > ![Hell Blade](assets/icons/berserker/hell-blade.png) Hell Blade > ![Sword Storm](assets/icons/berserker/sword-storm.png) Sword Storm > ![Power Break](assets/icons/berserker/power-break.png) Power Break > ![Mountain Crash](assets/icons/berserker/mountain-crash.png) Mountain Crash (KR "마" in 옵피헬소파마; Mountain Crash is inferred). Mayhem cooldowns are synced, so cooldown gems only pay off upgraded together; prefer damage gems. Upgrading cooldown gems one at a time → reverse order (Sword Storm > Hell Blade > Finish Strike > Overdrive)
- Skills: ![Power Break](assets/icons/berserker/power-break.png) Power Break build. ![Tempest Slash](assets/icons/berserker/tempest-slash.png) Tempest Slash is 0.1% stronger in the same slot, but the author switched to Power Break for mana and animation
- Alternative: with ~10% extra crit from bracelet/synergy, or lv10 cooldown gems, the Blunt Thorn (뭉가) build may beat Supersonic Breakthrough
- Rotation: ![Red Dust](assets/icons/berserker/red-dust.png) Red Dust (+24% atk, 8s) → strongest first: (![Blood Slash](assets/icons/berserker/blood-slash.png) Blood Slash) → ![Overdrive](assets/icons/berserker/overdrive.png) Overdrive → ![Finish Strike](assets/icons/berserker/finish-strike.png) Finish Strike → ![Hell Blade](assets/icons/berserker/hell-blade.png) Hell Blade → ![Sword Storm](assets/icons/berserker/sword-storm.png) Sword Storm → ![Power Break](assets/icons/berserker/power-break.png) Power Break; ![Blood Slash](assets/icons/berserker/blood-slash.png) Blood Slash every third ![Red Dust](assets/icons/berserker/red-dust.png) Red Dust cycle
- Solo [inference]: no support 9% atk speed → shift a few crit points to swift if Supersonic Breakthrough drops off full value

Runner-up — same guide, YouTube description code (https://www.youtube.com/watch?v=o41DF4H9EuI, 2025-06-24; Jev pick 0.09 on 2026-10-02, 0.00 on 2026-10-13, full-match 0.44). Video uses ![Tempest Slash](assets/icons/berserker/tempest-slash.png) Tempest Slash in ![Power Break](assets/icons/berserker/power-break.png) Power Break's slot; author later switched to ![Power Break](assets/icons/berserker/power-break.png) Power Break, so this may be the older Tempest version:

```
9B03B0A5424B4EC7E9BB83EDB72AA8F748CD8A7F0C78D11B4A96089E5B00010FB7DD713E10F5087FD8728A6546B61827564B01CB334676E84FC0A4776042BDE4
```

Rejected 2026-10-13: Berserker's Technique (비기) pre-grid Finish build, https://www.inven.co.kr/board/lostark/5341/149897 (2025-07-21; Jev full-match 0.03, wrong spec and hard pre-grid); Broken Bone + Suppression (제압부뼈) Mayhem, https://www.inven.co.kr/board/lostark/5341/154796 (2026-09-04; Ark Grid era, Jev 0.02).

## Caveats

- Global: all codes are KR; importing on global is unverified unless global has KR's 2026-02-11 Berserker balance patch. Global Maxroll Mayhem guide (updated 2026-09-22) also recommends 111 but has no importable code
- Pre-grid codes (149511 and the YouTube runner-up) predate the 2026-02-11 Mayhem change (Rage +1.5s per skill cast) and the 2026-06-24 KR balance patch, which also listed Berserker; not re-verified since. Earlier 2026-09-27 pass rejected 149511 for this reason; kept because no newer pre-1700 Mayhem code exists, and a global client without Ark Grid is closer to the 2025 balance anyway [inference]
- Also rejected: older 333 code from 루현's Oct 2025 YouTube video, superseded by the 26.2.11 code
- Upcoming patch: board expected a KR balance patch mid/late September 2026; no post confirms it has landed

# Berserker in the Paradise Crucible

Crucible (KR 낙원 증명) is Paradise's solo boss ladder, ranked per class. Only **skill levels and tripods** carry into Paradise: engravings, gems, runes, cards and the whole Ark Passive don't apply (official release notes; details in `paladin.md` → What applies in Paradise). So your raid spec and Ark Grid don't matter here; only the skill bar, levels, tripods and awakening choice do.

These are KR codes, checked on [lostark.bible](https://lostark.bible/tools/skill-code) and uploaded to CE on 2026-10-15, so they import on EUC. Whether they play the same on global depends on global having KR's balance patches, which is unverified.

## Crucible skill legend

| Icon | Global name | KR name |
|---|---|---|
| ![Berserk Fury](assets/icons/berserker/berserk-fury.png) | Berserk Fury | 버서크 퓨리 |
| ![Blood Slash](assets/icons/berserker/blood-slash.png) | Blood Slash | 블러드 슬래시 |
| ![Finish Strike](assets/icons/berserker/finish-strike.png) | Finish Strike | 피니쉬 스트라이크 |
| ![Fury Method](assets/icons/berserker/fury-method.png) | Fury Method | 퓨리 메소드 |
| ![Hell Blade](assets/icons/berserker/hell-blade.png) | Hell Blade | 헬 블레이드 |
| ![Mountain Crash](assets/icons/berserker/mountain-crash.png) | Mountain Crash | 마운틴 크래쉬 |
| ![Overdrive](assets/icons/berserker/overdrive.png) | Overdrive | 오버드라이브 |
| ![Power Break](assets/icons/berserker/power-break.png) | Power Break | 파워 브레이크 |
| ![Red Dust](assets/icons/berserker/red-dust.png) | Red Dust | 레드 더스트 |
| ![Shoulder Charge](assets/icons/berserker/shoulder-charge.png) | Shoulder Charge | 숄더 차지 |
| ![Sword Storm](assets/icons/berserker/sword-storm.png) | Sword Storm | 소드 스톰 |
| ![Tempest Slash](assets/icons/berserker/tempest-slash.png) | Tempest Slash | 템페스트 슬래쉬 |

## Recommended Crucible code

```
F91DD82AE3D362B473345402DF99F2D7B18D0660C28A0F4CA938EEF947CA7178BD75F083AAA3A6A7564D7E9D9DD738D9EBEB90817DC246B6B06F28F3EDD96E8E
```

- Source: [KR Season 4 page](https://sites.google.com/view/achi-loa/%EB%82%99%EC%9B%90/%EB%82%99%EC%9B%90-%EC%8B%9C%EC%A6%8C4): listed weeks 4–6 (2026-09-30 → 2026-10-14), Crucible stage 7–8. It replaced his week 2–3 code.
- Awakening ![Berserk Fury](assets/icons/berserker/berserk-fury.png) Berserk Fury; hyper awakening ![Fury Method](assets/icons/berserker/fury-method.png) Fury Method. No runes (they wouldn't apply anyway).
- Jev pick probability: **0.99**.

| Skill | Level | Tripods |
|---|---|---|
| ![Power Break](assets/icons/berserker/power-break.png) Power Break | 10 | Swift Fingers, Ranged Hit, Whirlpool |
| ![Shoulder Charge](assets/icons/berserker/shoulder-charge.png) Shoulder Charge | 3 | — |
| ![Hell Blade](assets/icons/berserker/hell-blade.png) Hell Blade | 14 | Leap, Burst Enhancement, Bloody Eruption |
| ![Red Dust](assets/icons/berserker/red-dust.png) Red Dust | 14 | Damage Amplification, Enhanced Strike, Red Wave |
| ![Tempest Slash](assets/icons/berserker/tempest-slash.png) Tempest Slash | 14 | Nimble Movement, Burst Enhancement, Storm Slash |
| ![Mountain Crash](assets/icons/berserker/mountain-crash.png) Mountain Crash | 14 | Quick Prep, Technique Charge, Earthquake Shock |
| ![Finish Strike](assets/icons/berserker/finish-strike.png) Finish Strike | 14 | Enhanced Strike, Weak Point Detection, Lights Out |
| ![Overdrive](assets/icons/berserker/overdrive.png) Overdrive | 14 | Swift Fingers, Burst Enhancement, Gale Cutter |

## Runner-up

```
FC6731F8391B53BAF158E4D7D51EEEE361BD2C080D815150BED88B84FED7A66B8AC4A31E2B9C5169F2D324EAF71B5484C1EECF8CF017B8C4CEAE932E5345DF97
```

- Source: [KR Season 3 page](https://sites.google.com/view/achi-loa/%EB%82%99%EC%9B%90/%EB%82%99%EC%9B%90-%EC%8B%9C%EC%A6%8C3): weeks 5–15 of Season 3 (2026-06-17 → 2026-08-26), stages 7–15 with all slots at 9.
- Awakening ![Berserk Fury](assets/icons/berserker/berserk-fury.png) Berserk Fury; hyper awakening ![Blood Slash](assets/icons/berserker/blood-slash.png) Blood Slash.
- Differences from the recommended code:

  | Skill | Recommended | Runner-up |
  |---|---|---|
  | ![Mountain Crash](assets/icons/berserker/mountain-crash.png) Mountain Crash | Lv14: Quick Prep, Technique Charge, Earthquake Shock | Lv10: Damage Amplification, Technique Charge, Earthquake Shock |
  | ![Power Break](assets/icons/berserker/power-break.png) Power Break | Lv10: Swift Fingers, Ranged Hit, Whirlpool | Lv14: Swift Fingers, Ranged Hit, Whirlpool |
  | ![Red Dust](assets/icons/berserker/red-dust.png) Red Dust | Lv14: Damage Amplification, Enhanced Strike, Red Wave | Lv14: Nimble Movement, Enhanced Strike, Red Wave |
  | ![Shoulder Charge](assets/icons/berserker/shoulder-charge.png) Shoulder Charge | Lv3: no tripods | Lv1: no tripods |
  | ![Sword Storm](assets/icons/berserker/sword-storm.png) Sword Storm | not used | Lv14: Quick Prep, Weak Point Detection, Earthquake Wave |
  | ![Tempest Slash](assets/icons/berserker/tempest-slash.png) Tempest Slash | Lv14: Nimble Movement, Burst Enhancement, Storm Slash | not used |

## Notes and Restoration order

- Week 6: Crucible stage 8 at about 3M Paradise score. Weeks 4–5 he was stuck at stage 7 because he couldn't get a slot to level 9.

Restoration order (the author's, for a class that uses its identity gauge; each number is the slot's Restoration level, and slot effects are in `paladin.md` → Restoration priority):

- **Phase 1 (levels 1–4, week 1):** Mask 1 → Censer 1 → Liquor Glass / Bell / Mirror 2 → Mask / Censer / Whistle 2 → Whistle 3 → Liquor Glass 3 → Whistle 4 → Bell / Mirror 3 → Censer 4 → the rest to 4.
- **Phase 2 (level 6):** Censer 6 → Liquor Glass 6 → Whistle 6 → Mask 6, then Bell / Mirror.
- **Phase 3 (level 9):** Liquor Glass 9 first (hyper awakening cooldown), then Censer 9, then the rest.
