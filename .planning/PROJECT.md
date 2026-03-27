# Costra Design System

## What This Is

Costra Design System is a Storybook-first internal design system for the Costra team. It converts the existing HTML foundation file into reusable React and TypeScript components, Tailwind-powered design tokens, and documented UI patterns that upcoming product versions can build on consistently.

## Core Value

The team can build upcoming Costra interfaces from one shared token system and a documented first component set without reinterpreting the original HTML by hand.

## Requirements

### Validated

- [x] Extract design tokens from the source HTML into maintainable shared definitions - Validated in Phase 1: Token Foundation

### Active

- [ ] Build an initial reusable component set from the HTML patterns
- [ ] Document foundations and component variants in Storybook
- [ ] Enforce WCAG 2.1 AA accessibility across the supported v1 system

### Out of Scope

- Publishable package distribution - v1 is an internal Storybook reference, not a packaged library
- Full component catalog - future versions will expand the component set beyond the initial HTML-derived patterns
- Product screen implementation - this milestone focuses on the system, not app pages

## Context

The current visual source of truth is [`8.costra-design-system.html`](D:/1.Product Development with AI/1.1 project/4.Cost of living tracker/Design system with codex/8.costra-design-system.html), which already defines Costra's dark visual language, lime accent palette, typography roles, 4px spacing scale, elevation, border radius, grid behavior, and iconography guidance.

The HTML currently demonstrates foundations plus a first set of reusable patterns such as navigation, hero, table-of-contents links, section headers, token showcase cards, code blocks, icon cells, and footer treatments. V1 should preserve that visual language while translating it into team-usable React, TypeScript, Tailwind, and Storybook building blocks.

The primary audience is the internal Costra team. Phase 1 is now complete with a generated and traceable token foundation committed under `src/tokens/generated/`, which gives the upcoming Storybook and Tailwind work a stable source to consume. The system is expected to grow in future versions, so the initial implementation needs a clean token architecture and a documentation structure that make later component additions straightforward.

## Constraints

- **Tech stack**: React + TypeScript + Tailwind CSS + Storybook - the system must be built and documented in this stack
- **Source fidelity**: HTML foundation file is the visual source of truth - extracted tokens and initial components should clearly map back to it
- **Accessibility**: WCAG 2.1 AA - component patterns, focus states, contrast, and documentation guidance must meet this baseline
- **Delivery shape**: Storybook-first internal system - optimize for discoverability, reuse, and documentation before package distribution

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Storybook is the primary delivery surface for v1 | Team needs an internal reference and review surface before packaging | - Pending |
| The HTML file is the source of truth for v1 foundations | Prevents drift while extracting tokens and first components | Validated in Phase 1 |
| All components must consume shared tokens instead of hard-coded values | Makes future component expansion consistent and maintainable | Token export surface established in Phase 1 |
| WCAG 2.1 AA is a release bar for supported v1 components | Accessibility quality is part of the system contract, not a later enhancement | - Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `$gsd-transition`):
1. Requirements invalidated? -> Move to Out of Scope with reason
2. Requirements validated? -> Move to Validated with phase reference
3. New requirements emerged? -> Add to Active
4. Decisions to log? -> Add to Key Decisions
5. "What This Is" still accurate? -> Update if drifted

**After each milestone** (via `$gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check - still the right priority?
3. Audit Out of Scope - reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-03-27 after Phase 1 completion*


