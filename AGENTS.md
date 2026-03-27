<!-- GSD:project-start source:PROJECT.md -->
## Project

**Costra Design System**

Costra Design System is a Storybook-first internal design system for the Costra team. It converts the existing HTML foundation file into reusable React and TypeScript components, Tailwind-powered design tokens, and documented UI patterns that upcoming product versions can build on consistently.

**Core Value:** The team can build upcoming Costra interfaces from one shared token system and a documented first component set without reinterpreting the original HTML by hand.

### Constraints

- **Tech stack**: React + TypeScript + Tailwind CSS + Storybook - the system must be built and documented in this stack
- **Source fidelity**: HTML foundation file is the visual source of truth - extracted tokens and initial components should clearly map back to it
- **Accessibility**: WCAG 2.1 AA - component patterns, focus states, contrast, and documentation guidance must meet this baseline
- **Delivery shape**: Storybook-first internal system - optimize for discoverability, reuse, and documentation before package distribution
<!-- GSD:project-end -->

<!-- GSD:stack-start source:STACK.md -->
## Technology Stack

Technology stack not yet documented. Will populate after codebase mapping or first phase.
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd:quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd:debug` for investigation and bug fixing
- `/gsd:execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->

<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd:profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
