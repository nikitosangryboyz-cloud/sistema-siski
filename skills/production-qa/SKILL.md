---
name: production-qa
description: Final production audit for frontend sites: build errors, console errors, assets, links, accessibility, responsive behavior, performance and SEO basics.
---

# Production QA

## Technical checks

- no console errors
- no missing images/fonts/assets
- no broken internal links
- no accidental external dependencies
- clean HTML/CSS/JS structure
- no obvious dead code or duplicate rules
- correct asset paths from the published root

## Accessibility

- semantic headings
- form labels
- keyboard access
- visible focus
- sufficient contrast
- useful alt text
- touch targets
- `prefers-reduced-motion`

## Responsive

Render representative narrow, tablet and desktop widths. Check overflow, clipping, wrapping, fixed/sticky elements and interactive states.

## SEO baseline

Check title, description, one clear H1, heading hierarchy, language, viewport, favicon and Open Graph basics where applicable.

## PASS
No material blocker remains for publication. Any unavoidable limitation is explicitly recorded in the project state.
