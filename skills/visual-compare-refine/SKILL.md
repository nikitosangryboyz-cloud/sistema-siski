---
name: visual-compare-refine
description: Validate a rendered webpage against a visual target and drive targeted correction. Use after any visual implementation pass.
license: MIT
---

# Visual Compare → Refine

Inspired by the render/screenshot/compare/refine loop from `sevzq/screenshot-to-html` and browser verification guidance from `Enixes/astra-frontend-design`.

## Loop

1. Capture the current implementation at the exact target viewport.
2. Compare target and render in regions: hero, navigation, content blocks, imagery, footer.
3. Classify each difference:
   - A: structure/layout
   - B: dimensions/spacing
   - C: typography
   - D: color/contrast
   - E: shadows/radii/gradients/polish
4. Fix A before B, B before C, C before D, D before E.
5. Re-render.
6. Reject changes that make the visual result worse.
7. Repeat until remaining differences are cosmetic.

## Evidence
Never claim visual QA from source inspection alone when browser rendering is available.

## PASS
No material layout, typography, asset, contrast or interaction mismatch remains for the requested viewport(s).

## Source
https://github.com/sevzq/screenshot-to-html
