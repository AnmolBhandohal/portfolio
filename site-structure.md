# Portfolio site structure & content spec

## Section order
1. Hero
2. Projects (the core section — most of the effort goes here)
3. About
4. Capabilities
5. Contact

## Every project card has two layers

**Fast layer — visible immediately, must work even if the project is unfinished:**
- Status tag: Active / Shipped / In Progress (already using this convention — keep it, it's good)
- One real photo or render of the actual hardware. If not ready yet, show a clearly-labeled placeholder ("Photo coming") instead of a broken image or a stock photo standing in for it.
- One sharp proof number — a metric that shows it actually worked (e.g. ±7 lux accuracy, 5kHz PWM). This is the single most convincing thing on a 5-second skim.
- One line: why the project exists.

**Deep layer — for anyone who stops to read:**
- Full write-up: the hardest engineering decision on this project, what broke, how it got fixed
- Characteristics table (already doing this — keep it)
- Real photo gallery, once available
- Repo link, if public
- PCB render or schematic, once ready

## Handling work-in-progress projects honestly

Do not hide unfinished projects or fake their completeness. Instead:
- Tag clearly: "REV A — In Progress"
- Missing proof elements (photos, repo links) render as a labeled placeholder, never a broken layout or a dead link
- An actively-updating "in progress" project is a genuine positive signal — it shows real, ongoing engineering work, not a portfolio frozen at one point in time

## What NOT to do
- Do not pad a thin project with extra adjectives to make it feel finished — an honest "in progress" tag reads better than inflated copy
- Do not require every project to have full content before the site can be considered done — this site is designed to grow

## 3D / motion guidance
Reserve any 3D or interactive element for cases where it shows something a photo genuinely cannot (e.g. how a board is routed inside an enclosure) — not for entertainment or to prevent skimming. Density and hierarchy on the fast layer are what prevent skimming; motion is not a substitute for that.
