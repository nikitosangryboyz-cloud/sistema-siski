# Stage 1 — Reference → HTML

## Goal
Точно восстановить визуальный язык предоставленного референса в HTML/CSS.

## Input
- screenshot(s) of the reference
- optionally supplied assets
- project constraints

## Responsibilities
- analyze composition and layout
- identify container/grid behavior
- reproduce typography hierarchy
- reproduce colors, backgrounds, gradients and borders
- reproduce shadows, radii and image treatment
- reproduce components and spacing
- create an initial responsive-safe HTML/CSS foundation without doing full responsive polish yet

## Output
- working HTML page
- clean CSS architecture
- `design-system.md` with discovered visual tokens
- asset references documented

## Do not
- invent a different visual style
- redesign the reference
- add random decorative elements
- introduce generic AI landing-page patterns
- move to niche-specific information architecture before visual reconstruction is stable

## QA / PASS
PASS only when the rendered page is visually close to the reference in composition, typography, spacing, color, proportions and hierarchy.
