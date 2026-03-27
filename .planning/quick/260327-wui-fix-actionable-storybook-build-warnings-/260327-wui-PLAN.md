---
quick_id: 260327-wui
created: 2026-03-27
status: completed
---

# Quick Task 260327-wui Plan

## Goal
Fix the Storybook build warnings that are caused by this repository's configuration and generated assets.

## Scope
- Remove duplicate Storybook addon registration.
- Replace generated token CSS `@theme` output with plain CSS variables.
- Rebuild tokens and verify Storybook build output.
- Leave third-party Storybook runtime warnings alone if they originate in dependencies.
