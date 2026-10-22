# Paladin honing: 1730 → 1750

Researched 2026-10-22. No reliable method raises your success chance without eventually hitting pity: the rates are fixed and every tap is rolled on the server. What you can change is cost and variance: full breath, special honing timing, which pieces you hone, and where your materials come from. The rituals at the end are placebo.

## Where 1750 is

- **Item level:** Destined Tremor gear is worth 5 ilvl per honing stage, and a transferred piece starts at +11 (1730). **1750 means all six pieces at +15**, which is 24 successful hones in total ([loagg](https://loagg.com/calc/refining/item-level); KR players say "1750 올 15강" = "1750, everything +15", on [Inven](https://www.inven.co.kr/board/lostark/6271/3673838)).
- **Below 1730:** transfer first. Each piece needs Hellfire +20 with Advanced Honing 40, and crafting Tremor gear needs ilvl 1730 ([KR guide](https://m-lostark.game.onstove.com/GameGuide/Pages/%EC%9E%AC%EB%A0%A8)). Finish any stage whose Artisan's Energy is nearly full before transferring, because energy doesn't carry over ([Shadows Rise notes](https://www.playlostark.com/en-us/game/releases/the-shadows-rise)).
- **What 1750 opens:** Belgardin Normal (8-player, released Oct 21) and the Vambrace slot. Vambraces add no ilvl, so don't hone them before 1750 ([Arbiter of Death notes](https://www.playlostark.com/en-us/game/releases/arbiter-of-death)).

## The honing rules

From the official KR guide and the [cheonjang calculator](https://cheonjang.com/lostark/refine); the numbers below were re-derived independently and match.

- **Fail bonus:** each failure adds 10% of the base rate to your chance, up to a maximum of 2× base.
- **Artisan's Energy:** each failure adds (that tap's final chance ÷ 2.15). At 100% the next tap is guaranteed.
- **Full breath:** Glacier's Breath (armor) or Lava's Breath (weapon) adds +100% of the base rate. Books don't work on Tremor gear until the new Tremor Metallurgy books, and those only drop in Belgardin Hard or Nightmare (ilvl 1770+).

## The numbers

Values are no breath / full breath.

| Stage | Base | One-tap | Expected taps | Median | 90% done by | Pity at | Chance you end on pity |
|---|---|---|---|---|---|---|---|
| +11→12, +12→13 | 5% | 5% / 10% | 11.4 / 7.5 | 10 / 6 | 25 / 17 | 26 / 18 | 9.7% / 8.7% |
| +13→14, +14→15 | 4% | 4% / 8% | 13.7 / 9.0 | 12 / 8 | 31 / 20 | 31 / 21 | 10.4% / 9.9% |

The whole 1730 → 1750 run, all 24 stages:

| | Expected taps | Luckiest 10% | Median | Unluckiest 10% | Absolute worst | Chance of ≥1 one-tap | Expected one-taps |
|---|---|---|---|---|---|---|---|
| No breath | 302 | ≤249 | 301 | ≥355 | 684 | 66.9% | 1.1 |
| Full breath | 199 | ≤163 | 198 | ≥235 | 468 | 89.6% | 2.2 |

The chance of one-tapping all 24 stages is 4×10⁻³³. About 1 in 10 stages ends on pity whatever you do, so plan for it.

## What actually changes your odds or cost

1. **Full breath is the only thing that doubles your one-tap chance.** It cuts expected taps by about 34%. It pays off when the breath you add to one tap costs less than about **52% of that tap's other costs** (stones, leapstones, fusion material and gold). At 5% the expected taps go 11.44 → 7.52, and 11.44 / 7.52 − 1 = 0.52. The benefit grows in a straight line with the breath you add, so go full breath or none, never half. Check the breakeven against your own market prices; one KR analysis found full breath only beat no breath by a small margin ([Inven](https://www.inven.co.kr/board/lostark/6271/3979406)).
2. **Special honing gives free lottery tickets, so time them.** It uses Transference Leapstones (Horizon Cathedral stage 3, Serca Hard/Nightmare). It always rolls at the plain base rate, 5% or 4%, and never builds Artisan's Energy. A success also wipes whatever energy you've built on that stage. **Use special hones only on a fresh stage with 0% energy**, never on a stage that's halfway to pity.
3. **Choosing which pieces to hone is the biggest cost lever.** 1750 only needs 24 stages in total. On KR prices an armor tap costs about ⅓ of a weapon tap, and the next armor stage (+15→16) is still 4%. The cheapest route leaves the weapon low and pushes armor to +15/+16 (for example four armor pieces at +16 and one at +15 reaches 1750 with the weapon at +11). Paladin is mostly a support and the weapon likely still affects buff strength (unconfirmed): go armor-heavy for a cheap 1750, even or weapon-first to be stronger.
4. **Spend bound materials first, and save selection chests** until you know whether you're short on weapon or armor materials ([CoinLooting](https://coinlooting.com/lost-ark-honing-guide/)).
5. **Rotating taps across pieces doesn't help.** Each piece rolls separately, so the expected total is the same whatever order you tap in. Luck doesn't run in streaks; the only "memory" is the fail bonus and Artisan's Energy.

## Where to farm at 1730–1749

From the patch notes:

- **Weekly:** Chaos Rift (Abyssal Reversal), Haal's Hourglass and Guardian's Afterimage.
- **Raid:** Serca Hard. It drops Agony Thorns, needed for crafting and for the +20 Breakthrough later.
- **Paradise:** Hell keys at the 1730 bracket.
- **Open world:** field boss Sevek Atun and the 1730+ Chaos Gate bracket.
- **Shops:** the Honing Material Exchange and the guild Bloodstone shop.
- **Passive:** daily playtime rewards.
- **Events:** the Arktoberfest shop (until Nov 18). Belgardin Conquest pays honing chests (until Dec 2), but only once you're 1750.

Before honing, check for a honing-support or Express event (none was running on 2026-10-22). Once you're 1750, the Paradise reward bracket adds roughly 31% weekly value (an Inven user's estimate, converting bound rewards to gold).

## Superstitions (placebo, but free)

Honing is rolled on the server, so nothing on your screen or in your zone affects it. To prove one ritual lifts a 5% stage to 6% (95% confidence, 80% power) you'd need about **3,900 first taps with the ritual and 3,900 without**. Only first taps count, because the fail bonus skews every later tap.

- **Where:** the Gear Honing NPC in a capital, your Stronghold, or Lopang. Paladin pick: in front of a statue in Rohendel or Luterra. Swap channels after three fails to "change your seed".
- **What to play:** a Jukebox track before tapping. "Song of Lazenith" (라제니스의 노래) and "Song of Wolf" (늑대의 노래) are real Lost Ark OST tracks. Or hum the "it's going to take money, a whole lot of spending money" honing theme from r/lostarkgame.
- **When:** right after weekly reset (Wed 10:00 UTC) or just after clearing a raid.
- **Rituals:** hone an alt first to "burn off bad luck". Watch the full animation instead of skipping it. Hovering over the result screen shows success early (a 2021 Inven trick); that only reveals the result sooner.
- **Mindset:** treat Artisan's Energy as an EXP bar rather than pity. Every failure moves the bar forward.

## Plan

Decide armor-heavy (cheapest 1750) or even (strongest Paladin) first. Save Transference Leapstones for fresh stages, full-breath only when breath costs less than about 52% of a tap, and budget around 200 taps (full breath) or 300 (no breath) to reach 1750.
