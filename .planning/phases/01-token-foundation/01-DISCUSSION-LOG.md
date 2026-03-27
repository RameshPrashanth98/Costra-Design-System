# Phase 1: Token Foundation - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md - this log preserves the alternatives considered.

**Date:** 2026-03-27
**Phase:** 01-token-foundation
**Areas discussed:** Token structure

---

## Token structure

| Option | Description | Selected |
|--------|-------------|----------|
| Keep source names | Keep the HTML names close to source, like `c-accent`, `space-4`, `shadow-md` | |
| Clear design-system naming | Translate to a clearer design-system scheme, like `color.accent.primary`, `space.4`, `elevation.md` | ? |
| Hybrid public model | Preserve source traceability internally, but expose cleaner names for the team | |

**User's choice:** Clear design-system naming
**Notes:** The public token model should be easier for the team to use than the raw HTML variable names.

---

## Semantic layer

| Option | Description | Selected |
|--------|-------------|----------|
| Raw only | Raw foundations only: black, surface, accent, success, warning, etc. | |
| Semantic aliases | Add semantic aliases too: background, foreground, border, text-muted, focus-ring | |
| Hybrid semantic layer | Keep raw tokens as source of truth and add a small semantic layer for common usage | ? |

**User's choice:** Hybrid semantic layer
**Notes:** The source foundations remain authoritative, but the team should get a small semantic layer for common usage.

---

## Usage tokens

| Option | Description | Selected |
|--------|-------------|----------|
| Foundations only | Phase 1 should only define foundations | ? |
| Include usage tokens | Include usage-level tokens where the HTML is explicit, like buttons/cards/inputs radius rules | |
| Partial usage layer | Foundations first, plus a few obvious usage tokens where the HTML already gives strong guidance | |

**User's choice:** Foundations only
**Notes:** Phase 1 should not jump ahead into component-level token decisions.

---

## Architecture bias

| Option | Description | Selected |
|--------|-------------|----------|
| HTML fidelity first | Optimize for exact fidelity to the current HTML first | ? |
| Extensibility first | Optimize for future extensibility even if the structure is a bit more abstract now | |
| Balance both | Source-traceable foundations with room to layer future aliases/themes | |

**User's choice:** HTML fidelity first
**Notes:** The token model should stay close to the current visual source of truth before introducing more abstraction.

---

## the agent's Discretion

- Exact schema and file layout for raw versus semantic token exports
- Source-traceability mechanics between the HTML variables and the exposed design-system token model

## Deferred Ideas

None
