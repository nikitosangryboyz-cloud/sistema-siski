# Stage 05 — Motion & Production

## Motion

Implemented with GSAP + ScrollTrigger loaded only when reduced motion is not requested.

- Hero entrance sequence.
- Section reveal on scroll.
- Subtle hero image parallax.
- Subtle title drift.
- No scroll hijacking.
- No permanent decorative animation.
- No ScrollTrigger markers in production.

These choices follow the official GSAP ScrollTrigger pattern: register the plugin, keep scroll-driven animations tied to top-level triggers, and respect reduced motion. urlGSAP ScrollTrigger skillhttps://github.com/greensock/gsap-skills/blob/main/skills/gsap-scrolltrigger/SKILL.md

## Production checklist

- semantic header/nav/main/section/footer;
- skip link;
- real links and phone/email controls;
- keyboard-accessible menu button;
- `aria-expanded` state;
- descriptive image alt text;
- responsive layout;
- reduced-motion fallback;
- no fake review blocks or invented guarantees;
- external images use explicit `alt` and lazy loading where appropriate;
- demo contact data must be replaced before publication.

## Stage 05 PASS

The page has restrained motion, basic accessibility and production-oriented structure. The remaining environment-dependent check is a final browser render/console audit using the repository's screenshot/QA tooling.
