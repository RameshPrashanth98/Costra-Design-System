---
quick_id: 260327-u6d
summary_date: 2026-03-27
---

# Quick Task 260327-u6d Summary

**Updated Storybook sorting so the Foundations Styles section follows the requested order**

## Outcome
- Added explicit `storySort` ordering in Storybook preview parameters.
- Set the styles section order to: Color, Typography, Spacing, Elevation, Grid, Iconography, Border and Radius.
- Kept the existing stories and token-driven content unchanged.
- Verified the configuration with a successful `npm.cmd run build-storybook` run.

## Files
- `.storybook/preview.ts` - Added the Storybook sidebar sort order for foundations.

## Verification
- `npm.cmd run build-storybook`

## Notes
- Storybook still logs the existing duplicate-controls addon message because `@storybook/addon-controls` is explicitly listed alongside `@storybook/addon-essentials`.
- Lightning CSS still warns about the generated token stylesheet using Tailwind v4's `@theme` at-rule.
