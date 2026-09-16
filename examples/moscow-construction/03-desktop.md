# Stage 03 — Desktop Polish

## Composition

- Maximum content width controlled by `--max` and fluid side padding.
- Hero image remains dominant but title stays readable above it.
- Stats use a strict column system and 1px dividers.
- Services are editorial rows instead of repeated cards.
- Projects use one wide lead image followed by two supporting images.
- Process uses a two-column editorial composition with a sticky intro on large screens.

## Typography

Display sizes use `clamp()` and negative tracking; body text stays compact and readable. Hierarchy is based on scale and whitespace, not decorative effects.

## Surface treatment

No gradients, glass panels, arbitrary shadows or excessive radii. The visual system relies on paper white, black, gray rules and photography.

## Desktop PASS

Approved at the structural level for large desktop widths. Final screenshot comparison should still be run with the system's Chrome render loop when the project is rendered in an environment with Playwright/Chrome available.
