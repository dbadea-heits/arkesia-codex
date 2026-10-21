# Effect settings: a calmer combat screen

Cuts other players' skill effects, tones down your own, and removes flashes and screen shake, so the boss stays readable. Work top to bottom.

Option names were confirmed in the Korean client (screenshot in [this settings guide](https://yamyami9.tistory.com/27)); the English labels below are literal translations, so the global client's wording may differ slightly. Menu paths and the Accessibility options are from the [official Accessibility Options article](https://help.playlostark.com/hc/en-us/articles/37754234136475-Accessibility-Options).

## 1. Other players' and your own skill effects

ESC → **Settings** (gear icon) → **Gameplay** → **Controls and Display** (KR: 환경설정 → 게임플레이 → 표시 관련 설정 → 이펙트 표시)

| Option (English, literal) | KR label | Set to | Why |
|---|---|---|---|
| Combat Effect Display | 전투 이펙트 표시 | **Show party members' beneficial effects** (파티원의 이로운 효과 표시) | Party damage skills stop drawing; heals, shields and buffs still show |
| Combat Effect Visibility (Self) | 전투 이펙트 가시성 (본인) | **~60%** | Your own skills stay readable without hiding the boss |
| Combat Effect Visibility (Allies) | 전투 이펙트 가시성 (아군) | **~15%** | Whatever party effects still draw become faint |
| Colosseum Combat Effect Display | 콜로세움 전투 이펙트 표시 | Same as Combat Effect Display | PvP only; optional |

- [ ] Combat Effect Display → party members' beneficial effects only
- [ ] Self visibility → ~60%
- [ ] Allies visibility → ~15%
- [ ] Optional: Colosseum display → same

The 61% / 15% values are the guide's. Lower Self further if your own skills still cover the boss; raise it if you lose track of where your skills land.

## 2. Screen shake

Same tab: **Gameplay** → **Controls and Display** → **Combat Settings**.

- [ ] **Skill Screen Shake** → off

## 3. Flashing light

ESC → **Settings** → **Accessibility** → **Video Accessibility**.

- [ ] **Photosensitivity Mode** → on. Limits or reduces animations with large areas of flashing light. Some cutscenes still flash; they show a warning and a Skip button.

## 4. Particles (optional)

ESC → **Settings** → **Video**.

- [ ] Lower **particle quality** if the screen still feels busy. This also helps frame rate in 8-player raids. [inference: the official article lists the setting but not its visual effect]

## Check it

- [ ] Run a solo raid or a Chaos Dungeon and look at the boss during your burst: you should see its body and telegraphs through your skills
- [ ] In a party, heals and shields from the support should still be visible
