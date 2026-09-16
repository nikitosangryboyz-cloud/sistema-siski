---
name: design-system-extraction
description: Extract a compact design system from a screenshot or reference: typography, color roles, spacing, radii, shadows, containers and layout rules.
license: MIT
---

# Design System Extraction

Use the visual reference to infer relationships and reusable tokens, not a list of coordinates.

## Produce

- `design-system/tokens.json`
- `design-system/reference.md`

Tokens should cover:
- background / surface / text / muted / border / brand / accent
- display / heading / body / utility type roles
- font weights, line heights, letter spacing
- spacing rhythm
- container max widths and gutters
- radii
- shadow levels
- breakpoints and layout constraints

## Rules

Prefer 4–8 meaningful color roles and a small type scale. Record gradients as named treatments. Record layout relationships (grid, alignment, density), not raw screenshot coordinates.

## PASS
The implementation can be rebuilt from the extracted rules without repeatedly guessing individual values.
