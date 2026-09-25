# design-system.md

Derived from `app/globals.css`. This is the objective spec the System critic checks against.
Anything not listed here is not part of the system and should not appear.

## Colour tokens — the complete set

| Token | Value | Role |
|---|---|---|
| `--paper` | `#f6f5ef` | page ground (vellum) |
| `--paper-2` | `#efede3` | recessed panel |
| `--ink` | `#20242b` | primary type, borders |
| `--ink-soft` | `#5d6470` | secondary type, thin strokes |
| `--line` | `#cfccc0` | hairline rules |
| `--copper` | `#b06a2e` | **the only functional accent** |
| `--copper-soft` | `#d18a48` | accent, hover/active transitions and SVG illustration artwork only — never a resting UI chrome colour |
| `--copper-deep` | `#8a5122` | accent, hover/active transitions and SVG illustration artwork only — never a resting UI chrome colour |

No colour outside this table may appear anywhere. No second accent hue.

## Type

| Token | Family | Permitted use |
|---|---|---|
| `--disp` | Saira Condensed | headings only (`h1`, `h2`, `.ebar h3`) |
| `--mono` | IBM Plex Mono | technical metadata **only** — REV numbers, doc IDs, spec table values, part numbers, pin/test-point labels, nav index |
| `--body` | IBM Plex Sans | body copy and prose |

**Weight ceiling: 500 on all heading text.** Body 400, emphasis 600 permitted in prose only.
Mono must never carry a heading or a sentence of prose.

## Structure

- Borders: `1px` hairline only. `2px` is permitted **only** on these four, which are the
  complete list: the spec-table top rule, SVG copper strokes, the `.ck` drawing-selection
  brackets on project-card hover, and the `.pos em` underline in the hero sentence.
  *(Spec-completeness correction: the last two are pre-existing design elements this
  document failed to enumerate on first writing. They are recorded here to make the list
  accurate — not granted permission retroactively. The accent-budget question they raise
  is piece 2's to settle, not this rule's.)*
- **No `box-shadow` on any element.** Elevation is border + background-value contrast only.
- `border-radius`: `0` everywhere, except `50%` on genuine circular indicators (status dot, rail vias).
- `--nav-h`: `54px`; `.sec` carries `scroll-margin-top: calc(var(--nav-h) + 24px)`.

## Spacing

- Major section bottom padding: `110px` (projects section `40px`, as cards carry their own `64px` bottom margin).
- Project card gap: `64px`.
- Frame max width `1120px`, rail column `72px` (collapses to `18px` under 720px).

## Motion

- All scroll animation is one-shot (`once: true`), never scrubbed except the signal rail.
- Every animation must be inert under `prefers-reduced-motion: reduce`.
- The rail fill is the single exception permitted to track scroll position continuously.
