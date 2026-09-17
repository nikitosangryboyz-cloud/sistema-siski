---
name: frontend-design
description: "Distinctive, intentional frontend design skill adapted from Anthropic's official frontend-design skill. Use when building or reshaping pages, landing pages, components, or visual interfaces."
license: Apache-2.0 (upstream)
metadata:
  author: Anthropic
  source: https://github.com/anthropics/skills/tree/main/skills/frontend-design
  integrated: Website Factory
---

# Frontend Design — Website Factory Integration

Use this skill as the primary art-direction layer when translating references into production frontend code. It works alongside Taste Skill, Hallmark, Refactoring UI, and the existing visual QA system.

## 1. Design lead mindset

Before coding, establish the subject, audience, primary job, aesthetic direction, technical constraints, and one memorable visual idea that belongs to this brief.

Do not begin from a generic SaaS template. The industry, materials, environment, audience, and real content should influence the visual language.

## 2. Ground design in the subject

Art direction must come from the actual niche. Industry, materials, physical environment, tools, vocabulary and audience should influence imagery, composition, typography and interaction.

Do not simply change colors while keeping the same layout.

## 3. Typography

Choose typography deliberately rather than repeatedly defaulting to Arial, Inter, Roboto, system fonts, or one fashionable font.

Rules:
- one or two families maximum;
- establish a clear type scale;
- use intentional weights, widths and tracking;
- keep reading lines reasonably short;
- do not randomly emphasize one word in a heading with another color, italic, or weight;
- avoid unnecessary ALL-CAPS labels and decorative eyebrow text;
- typography itself may be part of the visual composition.

## 4. Hero direction

The hero must introduce the most characteristic element of the subject.

Do not automatically use giant centered heading + paragraph + buttons, statistic + label + gradient accent, generic image on the right, or floating SaaS cards.

Choose the hero treatment based on the subject and reference: editorial composition, product focus, architectural framing, immersive image, typographic statement, interactive demonstration, asymmetric split, or another deliberate composition.

## 5. Spatial composition

Use composition intentionally: asymmetric alignment, overlap, controlled negative space, grid-breaking elements, varied scale, strong alignment systems, and deliberate density changes.

Do not make every section a centered stack of identical cards.

## 6. Visual structure

Borders, rules, numbering, labels and dividers must communicate structure or content. They are not decoration by default.

Numbered markers are appropriate for sequences, processes and timelines. Do not add 01 / 02 / 03 simply because they look designed.

## 7. Motion

Motion should have purpose. Prefer one strong page-load sequence, meaningful section reveals, contextual hover states, interaction feedback and scroll-triggered moments that support the narrative.

Avoid applying the same fade-up animation to every section or every card. Coordinate with `skills/motion-gsap/SKILL.md` and respect `prefers-reduced-motion`.

## 8. Two-pass workflow

### Pass A — Design plan

Define:
- 4–6 named color tokens;
- typography roles;
- layout concept;
- alignment rules;
- distinctive visual principle;
- hero concept;
- motion principle.

Use a compact wireframe if needed.

### Pass B — Critique then build

Ask:
- Would this plan look substantially different for another niche?
- Did the visual choices come from the actual subject?
- Is there a clear memorable idea?
- Is the composition too template-like?
- Are there decorative elements without a job?
- Is one element carrying the visual identity while the rest remains disciplined?

Revise the plan before coding if it reads generic.

## 9. Anti-slop constraints

Reject default convergence such as:
- purple gradient on white;
- repeated Inter / Space Grotesk defaults;
- identical rounded cards;
- generic SaaS dashboards;
- arbitrary monospace labels;
- decorative ALL-CAPS eyebrows everywhere;
- middle-dot metadata strings used as decoration;
- universal arrow → on every CTA;
- fake metrics, fake testimonials, fake logos;
- gradients used without contextual purpose;
- every section having identical spacing and structure.

These rules complement Hallmark and Taste Skill rather than replace them.

## 10. Restraint

Spend boldness in one place. One memorable element is usually stronger than ten competing effects.

Remove decoration that does not serve hierarchy, meaning, navigation, interaction, brand expression, or justified atmosphere.

## 11. Content is design

Use plain, specific, user-facing language.

- Active voice.
- Sentence case by default.
- CTA text describes the actual action.
- No filler copy.
- No invented claims or statistics.
- Empty states and errors explain what happened and what the user can do next.

## 12. Production floor

Every implementation must preserve responsive behavior, keyboard focus visibility, accessible contrast, reduced motion, semantic HTML, clean CSS specificity, consistent tokens, and screenshot-based visual review when tooling permits.

## Website Factory integration

### Stage 01 — Reference
Extract visual DNA while keeping the reference's distinctive character. Identify typography, composition, image treatment, density, color logic and memorable visual device.

### Stage 02 — Architecture
Translate the visual direction into a niche-specific information architecture. Do not clone the reference's section sequence when the business requires another structure.

### Stage 03 — Desktop
Apply the design plan with production-level typography, spacing, imagery, hierarchy and composition. Run Hallmark + Refactoring UI critique.

### Stage 04 — Responsive
Recompose for tablet and mobile. Do not merely shrink desktop. Preserve hierarchy and the memorable visual idea at smaller widths.

### Stage 05 — Motion & Production
Add purposeful motion and interactions. Run visual QA, accessibility checks, reduced-motion checks, console/error checks and final anti-slop review.

## Relationship to other Website Factory skills

- **Taste Skill** → visual taste, design direction, anti-template variety.
- **Hallmark** → structural variety, anti-slop constraints, preflight.
- **Refactoring UI** → hierarchy, spacing, typography, color, depth and systematic polish.
- **Frontend Design** → subject-specific art direction, typography, composition, restraint and creative direction.
- **Motion GSAP** → implementation of purposeful animation.
- **Production QA** → final verification.

This is an adapted integration of Anthropic's frontend-design skill for the Website Factory system, not a verbatim copy of the upstream file.
