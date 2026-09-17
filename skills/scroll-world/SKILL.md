---
name: scroll-world
description: Optional cinematic scroll-scrubbed 3D-world landing system. Activate only when the brief explicitly benefits from a continuous camera fly-through, diorama world, immersive scroll cinematic, or similar 3D storytelling device.
source: https://github.com/oso95/scroll-world
license: MIT
---

# Scroll World

An OPTIONAL specialist skill for creating immersive landing pages where scroll drives a pre-rendered camera journey through connected 3D scenes.

## Activation policy

This skill is **not part of the default Website Factory pipeline**.

Activate it only when one or more of these signals are present:
- user explicitly asks for Scroll World / 3D world / scroll cinematic;
- the brief calls for a continuous camera fly-through between scenes;
- an immersive diorama or spatial storytelling concept is clearly central to the requested experience;
- the user explicitly asks to use this skill.

Do not activate it merely because a page could have scroll animation. Standard GSAP/ScrollTrigger motion remains the default.

## Core output

When activated, design the experience as a continuous visual journey:
1. define the story beats/scenes;
2. establish one coherent art direction for all scenes;
3. generate or source scene stills;
4. create camera-motion clips with frame-locked seams;
5. use scroll position to scrub the rendered video chain;
6. provide graceful mobile degradation and reduced-motion behavior;
7. validate the complete experience in a browser.

## Non-negotiable seam rule

Connected clips must meet on an identical frame/state. A visible pop at a scene boundary is a failure. Validate the first seam carefully before scaling the same method across the whole chain.

## Architecture guidance

Prefer the upstream portable, framework-agnostic scrub-engine approach when technically appropriate. Keep the engine isolated from the visual/page content so it can be dropped into plain HTML or a framework without restructuring the whole site.

## Story design

Use 5–7 meaningful scenes when the brief supports a journey. Derive scenes from the actual business/value chain instead of inventing generic sections. Each scene should have:
- a concrete subject or environment;
- a clear narrative beat;
- concise supporting copy;
- a transition reason into the next scene.

## Visual consistency

Use one shared style preamble, palette, lighting logic, camera language, and material language across all generated scenes. Do not mix unrelated scene aesthetics.

## Camera modes

Choose deliberately based on the brief:
- fly-through world: expressive dives, pull-outs, and hops;
- continuous walkthrough: mostly forward movement;
- locked isometric glide: stable angle with the world moving through frame.

Do not silently substitute a different camera grammar because it is easier to implement.

## Mobile

A true mobile version should be recomposed for portrait rather than treated as a blind center-crop when the cinematic chain is core to the experience. If a native portrait chain is impractical, label the fallback clearly and preserve usability.

## Motion and performance

- scroll should control time rather than trigger a pile of independent entrance animations;
- avoid layout-heavy work on every scroll tick;
- use requestAnimationFrame/coalesced seeking or the upstream scrub engine pattern;
- respect `prefers-reduced-motion` and provide a static/fallback presentation;
- lazy-load expensive media where feasible;
- test on touch devices and slower hardware before shipping.

## Cost / external generation

The upstream project uses external image/video generation tooling and describes a budget-first workflow. Treat generation cost as a project decision, not an invisible implementation detail. Do not start a large generation batch without confirming the required asset count, resolution, and fallback plan.

## Website Factory integration

- Stage 01 Reference: may be used to analyze cinematic spatial language.
- Stage 02 Architecture: only activate when spatial storytelling is part of the brief.
- Stage 03 Desktop: validate scene composition, video framing, overlays, and content legibility.
- Stage 04 Responsive: build the portrait/fallback experience.
- Stage 05 Motion & Production: wire the scrub engine, optimize media, accessibility, reduced motion, and final QA.

## Interaction with other skills

Taste Skill, Hallmark, Refactoring UI, Frontend Design, and the standard Website Factory rules remain active. Scroll World is an additive specialist layer, not a replacement for them.

## Anti-overuse rule

Never add a 3D scroll-world just to make a page look impressive. If the subject matter, narrative, assets, performance budget, or user goal does not justify it, stay with the normal motion system.

## Source note

This file is an adapted integration contract for the Website Factory. The upstream repository is referenced for its scroll-world workflow, seam discipline, scene planning, and scrub-engine architecture; it is not a verbatim copy of the upstream implementation.
