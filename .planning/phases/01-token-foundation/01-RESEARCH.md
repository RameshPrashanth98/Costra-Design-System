# Phase 1: Token Foundation - Research

**Researched:** 2026-03-27
**Domain:** Design token architecture for React + TypeScript + Tailwind CSS + Storybook
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
### Token naming and structure
- **D-01:** Use a clearer design-system naming scheme instead of keeping the raw HTML variable names as the public token model.
- **D-02:** Keep a small semantic layer on top of raw foundations for common usage, rather than exposing only raw foundation values.
- **D-03:** Do not encode component-usage tokens in Phase 1; this phase should stay at the foundation level even where the HTML shows component usage hints.
- **D-04:** Optimize the Phase 1 token architecture for fidelity to the current HTML first, not future abstraction.

### Claude's Discretion
- How to map raw source tokens to the public token schema while preserving traceability back to the HTML
- Exact token file layout, export shape, and naming mechanics for React, Tailwind, and Storybook consumption
- Whether the semantic layer is implemented as aliases, generated mappings, or a documented wrapper over the raw foundation tokens

### Deferred Ideas (OUT OF SCOPE)
None - discussion stayed within phase scope
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| TOKN-01 | Design tokens for color foundations are extracted from the source HTML and exposed as shared system values | Use DTCG-style source tokens with raw color groups plus a small semantic alias layer; generate CSS and TS exports from one source |
| TOKN-02 | Design tokens for typography roles, weights, and type scale are extracted from the source HTML and exposed as shared system values | Preserve typography as both primitive font tokens and role tokens for `display`, `heading`, `body`, `caption`, and `code` |
| TOKN-03 | Design tokens for spacing, elevation, border radius, and grid foundations are extracted from the source HTML and exposed to Tailwind, components, and Storybook | Generate Tailwind v4 `@theme` variables and typed TS exports from the same source token files; keep breakpoint values in `rem` for Tailwind |
| TOKN-04 | Iconography foundations from the source HTML are documented as canonical sizes, stroke rules, and supported initial icons | Store iconography as foundation metadata plus icon inventory, not as component tokens; export docs-friendly JSON/TS for Storybook |
</phase_requirements>

## Summary

Phase 1 should establish a single token source that is tool-friendly, traceable to the HTML, and ready to feed later Tailwind and Storybook work without becoming the Tailwind config itself. The strongest approach is a DTCG-style token source with two layers: `foundation` tokens that mirror the HTML categories closely, and a very small `semantic` alias layer for recurring usage concepts like primary text, secondary text, canvas, and accent.

Use Style Dictionary as the translation layer instead of custom scripts. It already supports token aliasing, DTCG-compatible types, multi-file token sources, and multi-target output. That keeps Phase 1 focused on extraction quality and naming instead of inventing a token compiler. Tailwind v4 should consume generated theme variables through `@theme`, while Storybook should consume generated JSON/TS artifacts and later MDX pages, not a second hand-maintained token map.

The HTML source already contains enough structured information to extract an initial public model: 16 color variables, 3 font families, 7 typography roles plus code, a 4px-based spacing scale, 6 shadows plus glow, 7 radii, a 12-column grid with responsive breakpoint guidance, and 12 initial icons with fixed canvas and stroke rules. The main planning risk is not discovery but preserving source traceability while renaming tokens into a clearer public vocabulary.

**Primary recommendation:** Use DTCG-style token files plus Style Dictionary, with `foundation` as the source of truth and a minimal alias-based `semantic` layer that generates Tailwind CSS variables, typed TS exports, and docs data from one build.

## Project Constraints (from CLAUDE.md)

- Build and document the system in `React + TypeScript + Tailwind CSS + Storybook`.
- Treat `8.costra-design-system.html` as the visual source of truth.
- Keep extracted tokens and initial components clearly traceable back to the HTML.
- Maintain a `WCAG 2.1 AA` baseline for token and documentation decisions.
- Optimize for a Storybook-first internal design system before package distribution.
- Do not recommend a workflow that bypasses GSD planning/execution for repo changes.

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| `style-dictionary` | `5.4.0` (published 2026-03-22) | Token translation and multi-target output | Standard token build layer; supports aliasing, typed token metadata, and multiple source files |
| `tailwindcss` | `4.2.2` (published 2026-03-18) | CSS-first utility system and theme variable consumption | Tailwind v4 expects theme variables via `@theme`, which matches generated token output well |
| `@storybook/react-vite` | `10.3.3` (published 2026-03-23) | Storybook framework for React on Vite | Official Storybook framework for React+Vite; aligns with future docs and component work |
| `typescript` | `6.0.2` (published 2026-03-23) | Typed token exports and source metadata | Gives typed token contracts for app and Storybook consumers |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `react` | `19.2.4` (published 2026-01-26) | Storybook and future component runtime | Needed once Storybook Foundation begins; not the token source itself |
| `react-dom` | `19.2.4` (published 2026-01-26) | React DOM renderer | Required alongside React for Storybook/web runtime |
| `vite` | `8.0.3` (published 2026-03-26) | Build/dev tooling for Storybook and future app scaffolding | Preferred builder pairing for current Storybook and Vitest |
| `vitest` | `4.1.2` (published 2026-03-26) | Token validation tests | Lightweight Phase 1 validation path for token manifests and exports |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| `style-dictionary` | Custom token build scripts | Worse: adds bespoke parsing/output work with no benefit in this phase |
| Tailwind v4 `@theme` output | `tailwind.config.*`-only token definition | Older pattern; duplicates token source and fights Tailwind v4’s CSS-first model |
| Storybook MDX + generated token data | Token table addon dependency | Addon can help later, but Phase 1 does not need extra docs tooling to prove the token model |

**Installation:**
```bash
npm install react react-dom
npm install -D typescript vite tailwindcss @storybook/react-vite storybook style-dictionary vitest
```

**Version verification:** Verified via `npm.cmd view` on 2026-03-27 against the npm registry.

## Architecture Patterns

### Recommended Project Structure
```text
tokens/
  foundation/
    color.tokens.json        # Public raw foundations, traced to HTML vars
    typography.tokens.json   # Font families, weights, role styles
    spacing.tokens.json      # 4px scale
    elevation.tokens.json    # Shadow tokens
    radius.tokens.json       # Radius scale
    grid.tokens.json         # Columns, gutters, margins, breakpoints
    iconography.tokens.json  # Icon sizes, stroke rules, icon inventory
  semantic/
    color.tokens.json        # Minimal aliases like text.primary
    surface.tokens.json      # Minimal aliases like surface.canvas
  manifest/
    source-map.json          # Optional extraction audit for traceability
  style-dictionary.config.ts # Multi-target build config

src/
  tokens/
    generated/
      theme.css              # Tailwind v4 @theme output
      tokens.ts              # Typed JS/TS export
      tokens.json            # Storybook/docs data
    index.ts                 # Stable import surface
```

### Pattern 1: Foundation Source + Semantic Aliases
**What:** Keep a public `foundation` layer for extracted source values and a very small `semantic` layer implemented as aliases.
**When to use:** Always in Phase 1.
**Why:** This satisfies D-02 without skipping ahead into component tokens.
**Example:**
```json
{
  "foundation": {
    "color": {
      "accent": {
        "$type": "color",
        "$value": "#C8FF00",
        "$description": "Primary accent from source HTML",
        "$extensions": {
          "costra": {
            "sourceCssVar": "--c-accent",
            "sourceSection": "CORE PALETTE / ACCENT"
          }
        }
      }
    }
  },
  "semantic": {
    "color": {
      "interactive": {
        "primary": {
          "$type": "color",
          "$value": "{foundation.color.accent}"
        }
      }
    }
  }
}
```
Source: DTCG format + Style Dictionary aliasing  
Links: https://www.designtokens.org/tr/drafts/format/ , https://styledictionary.com/info/tokens/

### Pattern 2: Preserve Traceability in Token Metadata
**What:** Every renamed public token should carry source metadata.
**When to use:** For all extracted tokens, especially renamed color and typography roles.
**How:** Add `$description` and `$extensions.costra.*` fields with original CSS variable, HTML section, and extraction notes.
**Why:** The repo has no second source of truth yet; later review work needs an audit trail.

### Pattern 3: Generate, Don’t Re-Declare
**What:** Generate Tailwind CSS, TS exports, and JSON docs data from the token files.
**When to use:** For every downstream consumer.
**Example:**
```css
@import "tailwindcss";

@theme {
  --color-accent: #C8FF00;
  --font-display: "Outfit", sans-serif;
  --shadow-glow: 0 0 40px rgba(200, 255, 0, 0.12);
}
```
Source: Tailwind theme variables  
Link: https://tailwindcss.com/docs/theme

### Pattern 4: Treat Typography Roles as First-Class Tokens
**What:** Capture typography as both primitives and named role tokens.
**When to use:** For `display-1`, `display-2`, `heading-1`, `heading-2`, `heading-3`, `body`, `caption`, and `code`.
**Why:** The HTML provides role-level styles, not just loose font sizes. Flattening them loses fidelity and makes Storybook docs harder later.

### Pattern 5: Document Iconography as Foundation Data, Not Components
**What:** Keep iconography as token-adjacent foundation metadata in Phase 1.
**When to use:** For canvas size, stroke width, linecap/join, supported sizes, and initial icon inventory.
**Why:** TOKN-04 is about documenting icon foundations, not building an icon component library yet.

### Anti-Patterns to Avoid
- **Tailwind-as-source-of-truth:** Do not define the canonical tokens only inside Tailwind config or CSS. Tailwind should consume generated output.
- **Semantic sprawl:** Do not create button, card, input, or badge tokens in Phase 1. Those are component tokens and violate D-03.
- **Untraceable renaming:** Do not rename `--c-*` values into polished public names without keeping source metadata.
- **Primitive-only typography:** Do not reduce typography to just `fontSize` and `fontWeight` primitives when the source clearly defines role styles.
- **SVG implementation creep:** Do not start building a generalized icon component system here; capture icon rules and inventory only.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Token transformation | Custom parser/output scripts | `style-dictionary` | Solves aliasing, multi-file merging, and multi-target output already |
| Tailwind token plumbing | Manual duplication in config and CSS | Generated `@theme` CSS | Prevents drift between token source and utility layer |
| Token docs routing | Custom docs shell | Storybook MDX + generated token data | Official docs path, no need for custom documentation infrastructure |
| Token validation | Ad hoc node scripts | `vitest` | Cheap assertions for manifest shape and exported values |

**Key insight:** The expensive part of this phase is naming and traceability, not file generation. Use standard tooling for generation so planning stays focused on token correctness.

## Common Pitfalls

### Pitfall 1: Public Names Drift Too Far from the Source
**What goes wrong:** Renamed tokens become cleaner but no one can tell what HTML value they came from.
**Why it happens:** Teams rename for readability and skip source metadata.
**How to avoid:** Store original CSS variable names and source section in `$extensions.costra`.
**Warning signs:** Reviewers cannot answer “what did this replace in the HTML?” quickly.

### Pitfall 2: Tailwind Breakpoints Are Kept in `px`
**What goes wrong:** Custom breakpoints sort unexpectedly once mixed with Tailwind defaults.
**Why it happens:** The HTML expresses breakpoints in `px`, but Tailwind v4 defaults are `rem`.
**How to avoid:** Convert the documented `640/768/1024/1280/1536px` breakpoints to `40/48/64/80/96rem` in generated Tailwind theme output.
**Warning signs:** Responsive utilities override in the wrong order.

### Pitfall 3: Glow and Shadow Tokens Are Flattened Incorrectly
**What goes wrong:** `shadow-glow` gets treated like a regular opaque box shadow and loses its semantic difference.
**Why it happens:** Teams normalize shadows without respecting special accent-glow usage.
**How to avoid:** Keep `glow` as a named elevation token, distinct from the utilitarian shadow scale.
**Warning signs:** Accent glow gets rewritten as another generic elevation step.

### Pitfall 4: Typography Is Extracted as CSS Vars Only
**What goes wrong:** Font families exist, but the type system roles from the HTML disappear.
**Why it happens:** The root CSS only declares families; role styles live in class definitions lower in the file.
**How to avoid:** Extract both font primitives and role tokens from `.type-sample-*` definitions and metadata blocks.
**Warning signs:** Storybook can list fonts, but not `display-1` or `heading-2`.

### Pitfall 5: Iconography Is Over-Abstracted
**What goes wrong:** The plan expands into a full SVG component library before the token layer is stable.
**Why it happens:** The HTML already contains icon SVG paths, tempting implementation work.
**How to avoid:** Capture only iconography foundations and icon inventory in Phase 1.
**Warning signs:** Tasks start discussing props, icon loaders, or tree-shaking.

## Code Examples

Verified patterns from official sources:

### Tailwind v4 Theme Variable Consumption
```css
@import "tailwindcss";

@theme {
  --font-display: "Outfit", sans-serif;
  --breakpoint-xl: 80rem;
  --color-accent: #C8FF00;
}
```
Source: Tailwind theme docs  
Link: https://tailwindcss.com/docs/theme

### Storybook MDX Docs-Only Page
```mdx
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Foundations/Color" />

# Color Foundations
```
Source: Storybook MDX docs  
Link: https://storybook.js.org/docs/writing-docs/mdx

### Style Dictionary Alias Pattern
```json
{
  "size": {
    "font": {
      "medium": { "value": "16" },
      "base": { "value": "{size.font.medium}" }
    }
  }
}
```
Source: Style Dictionary token aliasing  
Link: https://styledictionary.com/info/tokens/

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `tailwind.config.js` as the main token registry | Tailwind v4 `@theme` variables in CSS | Tailwind v4 | Better fit for generated token CSS and runtime CSS variable usage |
| Bespoke token JSON schema per team | DTCG-style token structures with aliasing and metadata | Current design token tooling direction | Easier interoperability and lower custom tooling cost |
| Storybook Webpack-heavy setup | `@storybook/react-vite` | Modern Storybook default direction | Faster local iteration and better Vite/Vitest alignment |

**Deprecated/outdated:**
- Hand-maintained duplicate token maps across CSS, TS, and Storybook: unnecessary once Style Dictionary generates all three.
- Pixel-only Tailwind breakpoint customization: risky in Tailwind v4 when mixed with default `rem` breakpoints.

## Open Questions

1. **How broad should the semantic layer be in Phase 1?**
   - What we know: D-02 requires a small semantic layer, and D-03 forbids component tokens.
   - What's unclear: The exact approved alias set.
   - Recommendation: Limit semantic aliases to cross-cutting roles only: `text`, `surface`, `border`, `interactive`, and possibly `status`.

2. **Should glow colors remain raw foundation tokens or semantic tokens?**
   - What we know: The HTML defines `--c-accent-glow` and `--c-accent-glow-2`, and elevation references them.
   - What's unclear: Whether the public model exposes them under color or only through elevation.
   - Recommendation: Keep them in `foundation.color.accentGlow.*` and also allow elevation tokens to reference them.

3. **How much responsive grid behavior belongs in Phase 1?**
   - What we know: The HTML documents breakpoints plus column/gutter/margin behavior.
   - What's unclear: Whether responsive grid specs should be emitted as docs-only metadata or Tailwind-ready tokens immediately.
   - Recommendation: Store them as foundation tokens plus docs metadata now; wire full layout utilities in Phase 2.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | Token build scripts, Storybook, Tailwind, Vitest | yes | `v24.14.0` | — |
| npm | Package install and token build/test commands | yes | `11.9.0` | — |
| Git | GSD doc commits and future workflow steps | yes | `2.53.0.windows.2` | — |

**Missing dependencies with no fallback:**
- None found for planning. The repo is unscaffolded, but the required runtime and package manager are present.

**Missing dependencies with fallback:**
- None.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | `vitest 4.1.2` |
| Config file | none - see Wave 0 |
| Quick run command | `npx vitest run tests/tokens` |
| Full suite command | `npx vitest run` |

### Phase Requirements -> Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| TOKN-01 | Color tokens are extracted and exported with source traceability | unit | `npx vitest run tests/tokens/color.test.ts` | no Wave 0 |
| TOKN-02 | Typography primitives and roles are exported correctly | unit | `npx vitest run tests/tokens/typography.test.ts` | no Wave 0 |
| TOKN-03 | Spacing, elevation, radius, and grid tokens are emitted for shared consumption | unit | `npx vitest run tests/tokens/layout.test.ts` | no Wave 0 |
| TOKN-04 | Iconography foundation metadata and inventory are exported consistently | unit | `npx vitest run tests/tokens/iconography.test.ts` | no Wave 0 |

### Sampling Rate
- **Per task commit:** `npx vitest run tests/tokens`
- **Per wave merge:** `npx vitest run`
- **Phase gate:** Token source, generated exports, and traceability tests green before `/gsd:verify-work`

### Wave 0 Gaps
- [ ] `package.json` - project scaffold does not exist yet
- [ ] `vitest.config.ts` - no test runner config
- [ ] `tests/tokens/color.test.ts` - covers TOKN-01
- [ ] `tests/tokens/typography.test.ts` - covers TOKN-02
- [ ] `tests/tokens/layout.test.ts` - covers TOKN-03
- [ ] `tests/tokens/iconography.test.ts` - covers TOKN-04
- [ ] Build command wiring - token generation script not yet defined

## Sources

### Primary (HIGH confidence)
- Costra source HTML: `8.costra-design-system.html` - extracted categories, values, typography roles, breakpoints, and icon rules
- Tailwind CSS docs - theme variables and responsive breakpoint customization: https://tailwindcss.com/docs/theme , https://tailwindcss.com/docs/responsive-design#using-custom-breakpoints
- Storybook docs - MDX docs pages and Vite builder/framework guidance: https://storybook.js.org/docs/writing-docs/mdx , https://storybook.js.org/docs/builders/vite
- Style Dictionary docs - token aliasing, token file support, transforms: https://styledictionary.com/info/tokens/ , https://styledictionary.com/reference/hooks/transforms/predefined
- npm registry verification via `npm.cmd view` on 2026-03-27 for `tailwindcss`, `style-dictionary`, `storybook`, `@storybook/react-vite`, `vite`, `react`, `react-dom`, `typescript`, and `vitest`

### Secondary (MEDIUM confidence)
- Design Tokens Community Group format draft/current report - grouping, alias/reference model, metadata direction: https://www.designtokens.org/tr/drafts/format/

### Tertiary (LOW confidence)
- None.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - current versions were verified against npm and aligned with official docs
- Architecture: HIGH - based on authoritative docs plus the actual HTML source structure
- Pitfalls: HIGH - directly derived from source/stack interactions likely to affect this phase

**Research date:** 2026-03-27
**Valid until:** 2026-04-26



