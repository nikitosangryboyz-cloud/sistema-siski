---
name: refactoring-ui
description: "Practical UI design system for visual hierarchy, spacing, color, typography, depth, images, and composition. Use during desktop polish, responsive refinement, and final visual QA."
license: MIT
metadata:
  source: "https://skills.wondel.ai/skills/refactoring-ui/"
  upstream: "wondelai/skills/refactoring-ui"
  version: "1.5.1"
---

# Refactoring UI — Website Factory Integration

A practical visual-system layer for making frontend output cleaner, more consistent, and easier to refine. Integrated from Wondel.ai's Refactoring UI skill, based on the Refactoring UI approach by Adam Wathan and Steve Schoger.

## Core rule

**Design in grayscale first, add color last.** Establish hierarchy, spacing, typography, and composition before using color to solve visual problems.

## Seven principles

### 1. Visual hierarchy
Use size, weight, and color deliberately. Not everything should compete for attention. De-emphasize labels, metadata, secondary actions, and supporting copy so primary content reads immediately.

### 2. Spacing and sizing
Use a constrained rhythm rather than arbitrary values. Default scale:
`4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128px`.

Start with more whitespace than feels necessary, then tighten. Spacing inside a group should be smaller than spacing between groups.

### 3. Typography
Use a modular type scale and deliberate line-height. Default guidance:
- display/headings: tight line-height, approximately 1.0–1.25
- body: approximately 1.5–1.75
- avoid weak body weights below 400
- normally use no more than two font families
- constrain long-form text to roughly 45–75 characters per line

Do not blindly force these values when the reference has a different typographic system; preserve the reference's visual intent.

### 4. Color
Build a systematic palette rather than isolated colors. Define named tokens for neutrals, primary, accent, and semantic colors. Check contrast independently from brand color.

Do not use color to compensate for weak hierarchy. If the design fails in grayscale, fix structure first.

### 5. Depth and shadows
Use elevation intentionally. Small shadows for slightly raised controls, larger shadows for floating surfaces. Combine a crisp component shadow with a softer ambient shadow when appropriate. If everything floats, nothing feels elevated.

### 6. Images and icons
Treat imagery as part of the composition. Preserve aspect ratio, crop intentionally, use `object-fit` correctly, and maintain consistent icon sizing/stroke language. Text over imagery requires deliberate contrast treatment.

### 7. Layout and composition
Do not center everything. Prefer strong alignment anchors, varied emphasis, overlap, bleed, and asymmetry when the art direction supports it. Vary treatment across repeated content rather than producing identical card grids.

## Website Factory integration

### Stage 01 — Reference
Extract the reference's spacing rhythm, type hierarchy, color relationships, image treatment, depth, and alignment anchors. Record these as design tokens or explicit observations before coding.

### Stage 02 — Architecture
When adapting the visual language to a niche, keep the hierarchy system intact while changing content structure to fit the business. Do not manufacture generic feature-card grids merely because they are convenient.

### Stage 03 — Desktop Polish
Run the Refactoring UI diagnostic:
1. Does hierarchy read when squinting?
2. Does the composition still work in grayscale?
3. Is whitespace sufficient?
4. Are labels/metadata quieter than primary content?
5. Does spacing follow a deliberate scale?
6. Are text widths controlled?
7. Does contrast meet accessibility needs?
8. Do shadows/elevation communicate the intended depth?

Fix structural issues before decorative ones.

### Stage 04 — Responsive
Reapply hierarchy and spacing rules at each breakpoint instead of merely shrinking desktop. Preserve relationships between groups, constrain text widths, and recompute layout composition for mobile.

### Stage 05 — Motion & Production
Motion must reinforce hierarchy and interaction, never compensate for weak layout. Check focus states, contrast, image cropping, overflow, typography, and visual consistency after animation is added.

## Anti-slop interaction with Taste + Hallmark

Refactoring UI is the **system discipline** layer.

- Taste Skill = visual taste, art direction, anti-generic design.
- Hallmark = structural variety, anti-slop, honest output, preflight.
- Refactoring UI = hierarchy, spacing, type, color, depth, and composition discipline.

When rules conflict, preserve the reference's intentional art direction while using Refactoring UI to diagnose accidental inconsistency.

## Hard rules

- No arbitrary spacing when a system value will work.
- No color used to hide hierarchy problems.
- No uncontrolled text widths on reading content.
- No random shadow values across components.
- No distorted images.
- No identical visual emphasis for every element.
- No accessibility regressions introduced during polish.
- Do not fabricate metrics, testimonials, logos, or business claims.

## Source

Integrated from Wondel.ai's open-source `refactoring-ui` skill, MIT licensed. This file is an adapted Website Factory integration rather than a verbatim copy of the upstream skill.
