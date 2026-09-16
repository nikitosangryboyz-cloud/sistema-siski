---
name: reference-to-code
description: Rebuild a supplied website screenshot into high-fidelity semantic HTML/CSS using a render-compare-refine loop. Use for screenshot, mockup, or visual-reference reconstruction.
license: MIT
---

# Reference → Code

Adapted from `sevzq/screenshot-to-html` and reference-to-code guidance in `Enixes/astra-frontend-design`.

## Contract

Input: one or more screenshots + optional assets.
Output: semantic HTML/CSS/JS implementation at the reference viewport.

### Workflow
1. Determine the true design width and screenshot scale.
2. Read global composition before individual elements.
3. Extract a small token system: colors, type scale, spacing, radii, shadows, container widths.
4. Infer layout intent with grid/flex/flow; do not recreate the screenshot with absolute-positioned magic numbers.
5. Preserve visible text exactly unless the project brief explicitly asks for replacement.
6. Implement semantic structure and real controls.
7. Render at the reference width.
8. Compare region-by-region: structure → size/spacing → color/contrast → typography → polish.
9. Fix the highest-impact differences and render again until the visual gap is small.
10. Verify a second viewport before PASS.

## Hard rules
- The rendered result is the source of truth.
- No pixel-coordinate soup.
- No arbitrary redesign during Stage 1.
- No invented sections.
- No blurry asset upscaling.
- Use tokens rather than repeated magic values.

## PASS
Reference composition, hierarchy, type, color, spacing and imagery read as the same design language; semantic structure is maintainable; no major overflow or dead controls.

## Sources
https://github.com/sevzq/screenshot-to-html
https://github.com/Enixes/astra-frontend-design
