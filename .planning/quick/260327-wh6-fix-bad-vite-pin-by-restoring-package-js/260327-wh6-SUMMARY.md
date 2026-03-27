---
quick_id: 260327-wh6
summary_date: 2026-03-27
---

# Quick Task 260327-wh6 Summary

**Restored the Vite dev dependency to the previous working version and verified Storybook still builds**

## Outcome
- Changed `vite` in `package.json` from `^6.4.1` back to `^8.0.3`.
- Verified the repository with a successful `npm.cmd run build-storybook` run.
- Left `package-lock.json` untouched; this task corrected the manifest only.

## Files
- `package.json` - Restored the working Vite version.

## Verification
- `npm.cmd run build-storybook`

## Notes
- The local build required rerunning outside the sandbox due the recurring `spawn EPERM` esbuild restriction.
- The existing non-blocking Storybook warnings remain unchanged.
