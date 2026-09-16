# Stage 04 — Responsive

## Mobile recomposition

- Header collapses to a two-column control bar with a real disclosure menu.
- Hero title wraps deliberately instead of shrinking into a desktop miniature.
- Stats become a two-column rhythm with the primary fact spanning both columns.
- About and process become one-column editorial flows.
- Services keep number/title/action on the first line and description below.
- Project gallery becomes a single-column image sequence.
- CTA typography is recomposed for narrow screens.

## Tablet

The layout keeps the desktop grid where content pressure allows it and moves stats/services to lower-density arrangements before the mobile breakpoint.

## Protection

All responsive rules are scoped in media queries; desktop selectors remain the source of truth above the breakpoint. `prefers-reduced-motion` removes entrance/parallax motion.

## Stage 04 PASS

Desktop is not intentionally modified by the mobile rules. Mobile is treated as a separate composition, not a scaled desktop screenshot.
