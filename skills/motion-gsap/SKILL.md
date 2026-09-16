---
name: motion-gsap
description: Add restrained production motion with GSAP core, timelines and ScrollTrigger while preserving performance and reduced-motion accessibility.
license: MIT
---

# Motion with GSAP

Adapted from the official `greensock/gsap-skills` guidance.

## Use

- `gsap-core` for individual tweens, easing, stagger and responsive motion.
- `gsap-timeline` for choreographed sequences.
- `gsap-scrolltrigger` for scroll-linked animation, scrub and pinning.
- GSAP plugins only when the interaction genuinely requires them.

## Rules

- Motion must support hierarchy, feedback or narrative.
- Prefer transforms and `autoAlpha` over layout-heavy properties.
- Use timelines for sequences rather than chains of arbitrary delays.
- Use `gsap.matchMedia()` for responsive and `prefers-reduced-motion` behavior.
- Kill/revert animations when the DOM lifecycle requires it.
- Remove debug markers before production.
- Never animate everything just because GSAP is available.

## PASS
Animation is smooth, purposeful, reversible where needed, responsive, reduced-motion aware and does not create layout jank.

## Sources
https://github.com/greensock/gsap-skills
https://github.com/greensock/gsap-skills/blob/main/skills/gsap-core/SKILL.md
https://github.com/greensock/gsap-skills/blob/main/skills/gsap-timeline/SKILL.md
https://github.com/greensock/gsap-skills/blob/main/skills/gsap-scrolltrigger/SKILL.md
