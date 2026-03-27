# Phase 1: Token Foundation - Context

**Gathered:** 2026-03-27
**Status:** Ready for planning

<domain>
## Phase Boundary

Extract the Costra visual foundation from the HTML file into a maintainable token architecture. This phase covers token definitions for color, typography, spacing, elevation, radius, grid, and iconography foundations, but does not introduce component-specific token layers or broader component implementation.

</domain>

<decisions>
## Implementation Decisions

### Token naming and structure
- **D-01:** Use a clearer design-system naming scheme instead of keeping the raw HTML variable names as the public token model.
- **D-02:** Keep a small semantic layer on top of raw foundations for common usage, rather than exposing only raw foundation values.
- **D-03:** Do not encode component-usage tokens in Phase 1; this phase should stay at the foundation level even where the HTML shows component usage hints.
- **D-04:** Optimize the Phase 1 token architecture for fidelity to the current HTML first, not future abstraction.

### the agent's Discretion
- How to map raw source tokens to the public token schema while preserving traceability back to the HTML
- Exact token file layout, export shape, and naming mechanics for React, Tailwind, and Storybook consumption
- Whether the semantic layer is implemented as aliases, generated mappings, or a documented wrapper over the raw foundation tokens

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Source foundation
- `8.costra-design-system.html` - Canonical visual source of truth for the Costra token system, including raw CSS variables, grid guidance, icon rules, and documented foundation sections

### Project scope
- `.planning/PROJECT.md` - Project vision, constraints, and non-negotiable decisions for the Storybook-first internal design system
- `.planning/REQUIREMENTS.md` - Phase-mapped token requirements for Phase 1 (`TOKN-01` through `TOKN-04`)
- `.planning/ROADMAP.md` - Phase 1 goal, success criteria, and plan breakdown for Token Foundation

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `8.costra-design-system.html`: Contains the complete current token source, documented foundation sections, and explicit CSS variable definitions that should seed the extracted token system

### Established Patterns
- CSS custom properties in `:root` are the current source format for foundations
- The HTML separates foundations into color, typography, spacing, elevation, grid, iconography, border radius, and token summary sections, which can guide the initial extraction map
- The source includes both raw foundation values and descriptive guidance, but no existing React or Tailwind codebase patterns yet

### Integration Points
- The extracted token model will need to feed Tailwind configuration, React component styling, and Storybook foundation documentation in later phases
- Source traceability back to the HTML is important because this repository currently has no other implementation source of truth

</code_context>

<specifics>
## Specific Ideas

- The public token model should be clearer for the team than the raw HTML variable names
- A small semantic usage layer is acceptable in Phase 1, but it should sit on top of the source foundations rather than replace them
- The phase should resist jumping ahead into component tokenization even where the HTML includes usage examples

</specifics>

<deferred>
## Deferred Ideas

None - discussion stayed within phase scope

</deferred>

---

*Phase: 01-token-foundation*
*Context gathered: 2026-03-27*
