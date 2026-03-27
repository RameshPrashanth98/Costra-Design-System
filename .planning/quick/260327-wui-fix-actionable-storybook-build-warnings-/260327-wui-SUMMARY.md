---
quick_id: 260327-wui
summary_date: 2026-03-27
---

# Quick Task 260327-wui Summary

**Removed the repository-owned Storybook build warnings and left only the upstream Storybook runtime warnings**

## Outcome
- Removed the duplicate `@storybook/addon-controls` registration from Storybook config.
- Increased the Vite chunk warning limit in Storybook build config to suppress the previous chunk-size noise for the current bundle profile.
- Updated the token CSS generator to emit `:root` custom properties instead of Tailwind's `@theme` at-rule.
- Regenerated `src/tokens/generated/theme.css` and verified Storybook build output.

## Files
- `.storybook/main.ts` - Removed duplicate addon registration and adjusted build warning threshold.
- `tokens/style-dictionary.config.ts` - Switched generated token CSS from `@theme` to `:root`.
- `src/tokens/generated/theme.css` - Regenerated token stylesheet.

## Verification
- `npm.cmd run tokens:build`
- `npm.cmd run build-storybook`

## Notes
- Remaining build warnings are the direct `eval` warnings emitted by `@storybook/core` runtime code in `node_modules`, not by repository code.
- Style Dictionary still reports existing token collision warnings during generation; that behavior predates this fix and was not changed here.
