# Roadmap: Costra Design System

## Overview

This roadmap turns the existing Costra HTML foundation into a Storybook-first internal design system. The work starts by extracting durable tokens from the source file, then establishes Storybook and Tailwind consumption paths, translates the visible HTML patterns into reusable components, and finishes by hardening accessibility and team guidance so future component additions have a reliable base.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Token Foundation** - Extract and normalize the shared Costra token system from the source HTML
- [ ] **Phase 2: Storybook Foundation** - Wire Tailwind, Storybook, and token consumption around the shared theme
- [ ] **Phase 3: Structural Components** - Build the first reusable structural components from the HTML patterns
- [ ] **Phase 4: Showcase Components** - Build the first reusable showcase and token-display components with story coverage
- [ ] **Phase 5: Accessibility and Team Handoff** - Enforce WCAG 2.1 AA expectations and document team usage

## Phase Details

### Phase 1: Token Foundation
**Goal**: Extract the Costra visual foundation from the HTML file into a maintainable token architecture
**Depends on**: Nothing (first phase)
**Requirements**: [TOKN-01, TOKN-02, TOKN-03, TOKN-04]
**UI hint**: yes
**Success Criteria** (what must be TRUE):
  1. Shared token definitions exist for color, typography, spacing, elevation, radius, grid, and iconography foundations taken from the HTML source
  2. The token model clearly maps back to the source HTML without duplicating or inventing unrelated visual foundations
  3. Future components can consume the token layer from one source instead of maintaining separate style constants
**Plans**: 4 plans

Plans:
- [x] 01-01-PLAN.md - Bootstrap the token workspace and define the HTML extraction contract
- [x] 01-02-PLAN.md - Implement foundation tokens and minimal semantic aliases
- [ ] 01-03-PLAN.md - Generate shared CSS, JSON, and TypeScript token outputs
- [ ] 01-04-PLAN.md - Verify traceability and lock the stable token consumption surface

### Phase 2: Storybook Foundation
**Goal**: Establish Storybook and Tailwind as the canonical environment for exploring Costra foundations and consuming tokens
**Depends on**: Phase 1
**Requirements**: [DOCS-01, COMP-03]
**UI hint**: yes
**Success Criteria** (what must be TRUE):
  1. Storybook renders Costra foundations using the shared tokens instead of one-off styling
  2. Tailwind configuration and component styling consume the shared token system directly
  3. Foundation documentation covers the token categories the team needs to reference while building future components
**Plans**: 3 plans

Plans:
- [ ] 02-01: Configure project scaffolding for React, TypeScript, Tailwind, and Storybook
- [ ] 02-02: Connect the token system to Tailwind and shared styling utilities
- [ ] 02-03: Create foundation documentation stories for the extracted token categories

### Phase 3: Structural Components
**Goal**: Convert the HTML's core layout and structural patterns into reusable React components
**Depends on**: Phase 2
**Requirements**: [COMP-01]
**UI hint**: yes
**Success Criteria** (what must be TRUE):
  1. Structural components exist for navigation, section headers, code blocks, and footer patterns from the source HTML
  2. These components preserve the Costra visual language while exposing clean reusable APIs
  3. Structural components use shared tokens and fit cleanly into Storybook documentation
**Plans**: 2 plans

Plans:
- [ ] 03-01: Implement the reusable structural components and shared composition helpers
- [ ] 03-02: Add structural component stories and refine component APIs from the source patterns

### Phase 4: Showcase Components
**Goal**: Convert the HTML's presentation and token-display patterns into reusable documented showcase components
**Depends on**: Phase 3
**Requirements**: [COMP-02, DOCS-02]
**UI hint**: yes
**Success Criteria** (what must be TRUE):
  1. Showcase components exist for hero content, table-of-contents links, token cards, icon cells, and foundation display blocks
  2. Every v1 component has Storybook stories that demonstrate supported variants and relevant states
  3. The resulting first component set gives the team a practical base to extend in future versions
**Plans**: 3 plans

Plans:
- [ ] 04-01: Implement showcase and token-display components from the HTML patterns
- [ ] 04-02: Add comprehensive component stories for variants and documented states
- [ ] 04-03: Review component consistency against the original HTML foundation

### Phase 5: Accessibility and Team Handoff
**Goal**: Validate accessibility quality and document how the internal team should adopt and extend the system
**Depends on**: Phase 4
**Requirements**: [A11Y-01, A11Y-02, DOCS-03]
**UI hint**: yes
**Success Criteria** (what must be TRUE):
  1. Interactive components expose semantic markup, keyboard support, and visible focus treatment aligned with WCAG 2.1 AA expectations
  2. Storybook documents accessible token and component usage, including contrast-sensitive combinations where needed
  3. Team-facing guidance explains how to reuse the v1 system and where future component additions should plug in
**Plans**: 2 plans

Plans:
- [ ] 05-01: Audit and fix accessibility behavior across supported v1 components and stories
- [ ] 05-02: Add team usage guidance, extension rules, and final documentation polish

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 -> 4 -> 5

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Token Foundation | 1/4 | In Progress | - |
| 2. Storybook Foundation | 0/3 | Not started | - |
| 3. Structural Components | 0/2 | Not started | - |
| 4. Showcase Components | 0/3 | Not started | - |
| 5. Accessibility and Team Handoff | 0/2 | Not started | - |
