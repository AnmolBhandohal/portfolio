# bar.md — the standard we're building to

Reference: **teenage.engineering** (product feel) + **Linear / Hyperstudio** (structural rules), per `master-style-reference.md`.
Every line below is checkable by looking at a render or a computed style. Numbers in brackets are what the reference actually measured.

---

## M1 — No shadows, anywhere
Zero elements carry a `box-shadow`. Elevation comes only from 1px hairline borders and background-value contrast.
*[TE measured: 0 shadowed elements; only border width present is 1px.]*

## M2 — Sharp corners
No `border-radius` above 12px on any card or panel. `50%` is allowed only for genuine circular indicators (status dots, vias) — never for pill-shaped buttons or inputs.
*[TE measured: 0px radius on every element sampled.]*

## M3 — Heading text weight never exceeds 500
Hierarchy comes from size and spacing, not boldness. Applies to rendered *text*; display artwork is exempt.
*[TE measured: every live text node on the page is weight 100 or 300 — nothing heavier exists as text.]*

## M4 — Accent appears at most twice per viewport, on function only
Copper is used exclusively for primary actions and active/live states. Never as decoration, never as a default label colour, never on structural chrome.
*[TE measured: its orange appears 0 times in UI chrome — every instance is inside illustration artwork.]*

## M5 — One accent, no second colour
Copper is the only functional colour in the entire site. Everything else is the monochrome ink/paper scale. No new hue introduced anywhere.

## M6 — Monospace is for technical metadata only
Mono is reserved for REV numbers, doc IDs (DS-2029), spec values in characteristics tables, part numbers, and pin/test-point labels. Never for headings, never for body copy or prose.

## M7 — Sections breathe
At least 96px of vertical separation between major sections, and no project card butts directly against the next with less than 48px of gap.

---

## Noted tension (resolved)
The style doc's "headings 400–500" rule comes from Linear/Hyperstudio, while teenage.engineering's homepage *looks* like it uses an extremely heavy headline. Measurement resolves this: that headline is **artwork, not text** — every actual text node on TE is weight 100–300. So M3 holds against both references rather than trading one off against the other. Our current `h1` at **700** is heavier than anything TE renders as text.

## Known starting violations (measured on our site, this round)
- **M3 fails:** `h1` = 700, `h2` = 600.
- **M4 fails:** 45 elements currently carry a copper value.
- M1 passes (0 shadows). M2 passes (only `50%` on genuine dots). M7 passes (110px section padding).
