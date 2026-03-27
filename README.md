<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/assets/costra-logo-light.png">
  <source media="(prefers-color-scheme: light)" srcset="docs/assets/costra-logo-dark.png">
  <img alt="Costra" src="docs/assets/costra-logo-dark.png" width="460">
</picture>

# Costra Design System

Storybook-first internal design system for the Costra team.

Costra Design System converts the approved HTML foundations document into reusable React and TypeScript components, Tailwind-powered design tokens, and documented UI patterns that future Costra product versions can build on consistently.

## Why This Exists

- Preserve the original HTML foundations file as the visual source of truth.
- Give the team one shared token system instead of reinterpreting styles by hand.
- Document the system in Storybook before package distribution.
- Keep accessibility at WCAG 2.1 AA as a baseline requirement for supported components.

## Current Scope

### Included

- HTML-derived design tokens with generated CSS, JSON, and TypeScript outputs
- Storybook foundation documentation for overview, tokens, color, typography, spacing, elevation, grid, iconography, and border/radius
- React + TypeScript + Tailwind CSS development surface

### In Progress

- Initial reusable component set derived from the HTML source
- Storybook-first documentation structure for upcoming components
- Accessibility hardening across the supported v1 component surface

### Out of Scope for v1

- Package publishing and distribution
- Full component catalog coverage
- Product screen implementation

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS v4
- Storybook 8 with Vite
- Style Dictionary
- Vitest

## Project Structure

```text
src/
  stories/
  tokens/
tokens/
  foundation/
  semantic/
tests/
.planning/
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Run Storybook

```bash
npm run storybook
```

Storybook runs on `http://localhost:6006` by default.

### Build Storybook

```bash
npm run build-storybook
```

### Regenerate tokens

```bash
npm run tokens:build
```

### Run tests

```bash
npm test
```

## Design System Principles

- Brutalist clarity: hard edges, strong hierarchy, no decorative ambiguity.
- Dark-first UI: dense black surfaces let signal states and data stand out.
- Electric lime as signal: reserve the accent for trust, verification, and primary action.
- Tokens before exceptions: consume shared tokens instead of hardcoding values in components.

## Source of Truth

The visual foundation for this repository comes from the HTML foundations document used throughout the project planning and token extraction workflow. The repository is intended to stay aligned with that source while translating it into maintainable implementation assets.

## Available Scripts

- `npm run storybook` starts the Storybook development server.
- `npm run build-storybook` creates the static Storybook build.
- `npm run tokens:build` rebuilds generated token outputs from the token source files.
- `npm test` runs the Vitest suite.
- `npm run test:tokens` runs the token-specific tests.

## Repository Status

Phase 1 token foundation is complete and the Storybook foundation documentation layer is in place. The next major step is expanding the initial reusable component set on top of the shared token contract.
