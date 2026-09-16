---
name: responsive-engineering
description: Adapt a finished desktop interface into robust tablet and mobile layouts without degrading the desktop implementation.
---

# Responsive Engineering

Inspired by responsive guidance in `Enixes/astra-frontend-design` and `PaulRBerg/agent-skills`.

## Workflow

1. Freeze the approved desktop visual language.
2. Identify where content naturally stops fitting; derive breakpoints from layout pressure, not device names alone.
3. Recompose grids, navigation, typography, media and CTAs where necessary.
4. Preserve hierarchy; do not simply shrink everything.
5. Verify touch target sizes, readable wrapping, forms, horizontal overflow and image crops.
6. Render at representative mobile, tablet and desktop widths.
7. Fix mobile/tablet defects without regressing desktop.

Minimum QA widths: 375, 390, 414, 430, 768, 820, 1024, 1280, 1440.

## PASS
No clipping, overlap, unreadable type, accidental horizontal scrolling or broken interaction at required widths; desktop remains visually stable.

## Sources
https://github.com/Enixes/astra-frontend-design
https://github.com/PaulRBerg/agent-skills
