---
name: hallmark
description: Anti-AI-slop design skill for greenfield pages, audits, redesigns, and design extraction from URLs or screenshots.
source: https://github.com/Nutlope/hallmark
version: 1.1.0
license: MIT
---

# Hallmark — Website Factory Integration

Hallmark is integrated into the Website Factory as a design-quality and anti-slop layer. It is used to make generated pages feel intentionally art-directed rather than assembled from familiar AI defaults.

## Core doctrine

1. **Structural variety before decoration.** Do not reuse the same hero → features → CTA rhythm across projects. Choose the macrostructure from the brief and reference.
2. **Distinct visual fingerprint.** Typography, composition, spacing, colour, imagery and interaction must form a coherent point of view.
3. **Honest content.** Never invent metrics, testimonials, client counts, awards, logos or proof. Use supplied facts or clearly marked placeholders.
4. **Locked design tokens.** Once the visual system is chosen, colours, typography and spacing reference named tokens rather than scattered one-off values.
5. **Bias the composition.** Avoid endless centred layouts. Use asymmetry, editorial alignment, varied section rhythm and intentional whitespace when appropriate.
6. **Typography has roles.** Use a deliberate display/body/label hierarchy. Do not default to one generic UI font for everything.
7. **Motion has purpose.** Motion supports hierarchy and interaction; use GSAP/ScrollTrigger where appropriate and always provide reduced-motion behaviour.
8. **Restraint.** If an element does not improve communication, hierarchy or interaction, remove it.

## Four modes

### Build
Default mode for new pages. Infer the brief, choose a macrostructure and visual fingerprint, then build and run the anti-slop preflight.

### Audit
Inspect an existing page and return a punch list of anti-patterns and concrete fixes. Do not edit unless explicitly requested.

### Redesign
Preserve business intent, content and information architecture while changing the visual structure and component voice. Do not delete production files without explicit approval.

### Study
For a screenshot or URL reference, extract design DNA rather than cloning pixels: macrostructure, hero archetype, typography roles, colour anchor, rhythm, imagery treatment and interaction language. Use the DNA as a reference for an original implementation.

## Website Factory stage integration

### Stage 01 — Reference → HTML
- Use Hallmark Study principles to identify the reference's structural fingerprint.
- Extract the design DNA before implementation.
- Reproduce the visual language accurately without blindly copying pixels or templates.
- Record the intended macrostructure and typography roles.

### Stage 02 — Business Architecture
- Select a niche-specific information architecture.
- Do not force the reference into a generic SaaS structure.
- Vary section rhythm and component composition according to the business.
- Keep all claims truthful.

### Stage 03 — Desktop Polish
- Run an anti-slop audit against the page.
- Remove generic gradients, repetitive cards, excessive symmetry, fake proof and decorative filler.
- Lock spacing, colour and typography into the project's design tokens.
- Verify hierarchy at the actual desktop viewport.

### Stage 04 — Responsive
- Recompose rather than simply shrink desktop.
- Verify at 320, 375, 414 and 768 px.
- Prevent horizontal overflow and awkward wrapping.
- Keep interactive labels readable and clickable.
- Preserve the visual fingerprint on mobile.

### Stage 05 — Motion & Production
- Add intentional entrance, scroll and interaction motion.
- Prefer transforms/opacity and GSAP timelines/ScrollTrigger where they add value.
- Respect `prefers-reduced-motion`.
- Finish with visual QA, accessibility, SEO, performance and console-error checks.

## Anti-slop preflight

Before final output, check:

- No purple-blue/purple-pink gradient hero used as an automatic default.
- No generic centred-everything page rhythm.
- No repetitive equal feature-card grid unless the brief genuinely calls for it.
- No meaningless glassmorphism.
- No decorative sparkle/AI badges used as filler.
- No fabricated statistics, testimonials or trust signals.
- No fake browser/phone/IDE chrome drawn with CSS.
- No random typography pairings without a reason.
- No gradient headline treatment by default.
- No arbitrary spacing values when a token scale exists.
- No mobile overflow or broken wrapping.
- No animation without a purpose or reduced-motion fallback.

## Pre-emit critique

Before shipping, rate the implementation internally on:

- Philosophy
- Hierarchy
- Execution
- Specificity
- Restraint
- Variety

If any dimension is weak, perform another refinement pass before considering the stage complete.

## Important integration rule

Hallmark is one layer of the Website Factory, not a replacement for the five-stage pipeline. It strengthens art direction, structural variety, anti-slop QA and reference study while the existing Reference → Architecture → Desktop → Responsive → Motion/Production workflow remains the source of truth.

Source: Nutlope/hallmark, MIT. This file is an adapted integration for the Website Factory rather than a verbatim copy of the upstream skill.