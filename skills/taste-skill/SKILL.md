---
name: design-taste-frontend
source: https://github.com/Leonxlnx/taste-skill
source_license: MIT
source_version: v2 experimental
---

# Taste Skill — integrated frontend design skill

Use this skill as an additional visual-quality layer in the Website Factory System.

## Role

Prevent generic AI frontend output. Before implementation, infer the brief: industry, audience, mood, visual language, layout family, information density and motion depth. Build a coherent design system instead of assembling unrelated components.

## Core rules

- Establish a clear visual thesis before coding.
- Use intentional typography, spacing, hierarchy and composition.
- Prefer subject-specific art direction over generic SaaS/dashboard patterns.
- Vary layout composition when the brief supports it; do not repeat identical card grids.
- Motion must reinforce hierarchy and interaction, not decorate every element.
- Use GSAP/ScrollTrigger where motion is required and respect reduced motion.
- Avoid boilerplate gradients, excessive pills, meaningless glassmorphism, oversized generic headings, fake metrics, fake testimonials and decorative UI without purpose.
- Do not invent business facts. Mark uncertain/demo content explicitly.
- Perform a pre-flight visual audit before declaring the stage complete.

## Design dials

When useful, explicitly choose:

- DESIGN_VARIANCE: 1–10
- MOTION_INTENSITY: 1–10
- VISUAL_DENSITY: 1–10

Default for this Website Factory: 7 / 6 / 4 unless the reference or brief demands otherwise.

## Website Factory integration

Stage 01: use for visual-direction inference after reading the reference.
Stage 02: use for niche-specific art direction without losing the locked reference language.
Stage 03: use during desktop visual audit and anti-slop pass.
Stage 04: use to recomposite mobile/tablet instead of merely shrinking desktop.
Stage 05: use for motion direction and final pre-flight.

## Mandatory pre-flight

Before PASS, verify:

- hierarchy is obvious
- typography is intentional
- spacing rhythm is coherent
- visual language is consistent
- sections do not feel copied from a generic template
- imagery supports the subject
- interaction states exist where needed
- responsive behavior is deliberate
- motion has purpose
- no placeholder/fake UI remains

This file is an adapted integration of the upstream Taste Skill concepts, not a verbatim copy of the upstream repository.