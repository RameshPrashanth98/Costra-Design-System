# Costra Token System

Phase 1 defines one token source for Costra foundations and a deliberately small semantic layer.

## Directory Layout

- `tokens/foundation` contains the audited foundation token source files for color, typography, spacing, elevation, radius, grid, and iconography.
- `tokens/semantic` contains the allowed cross-cutting semantic aliases.
- `tokens/manifest` contains source-audit artifacts such as `extraction-map.json` and `source-map.json`.
- `src/tokens/generated` contains committed generated consumer artifacts.

## Allowed Semantic Groups

Phase 1 semantic aliases are limited to:
- `text`
- `surface`
- `border`
- `interactive`
- `status`

These aliases are cross-cutting conveniences layered on top of foundation tokens. Component-specific tokens are out of scope for Phase 1.

## Consumer Contract

- Tailwind should consume `src/tokens/generated/theme.css`.
- Storybook and docs should consume `src/tokens/generated/tokens.json`.
- App or component code should import from `src/tokens/index.ts`.
- `src/tokens/index.ts` re-exports the generated token objects from `./generated/tokens` and exposes the stylesheet path constant.

## Notes

- Foundation token leaves preserve HTML traceability in `$extensions.costra`.
- `tokens/manifest/source-map.json` is the explicit bridge from public token paths to the original HTML variables, selectors, and iconography rules.
- Any future semantic additions should stay cross-cutting until a later phase explicitly introduces component tokens.
