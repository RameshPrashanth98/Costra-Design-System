import { foundation, meta, semantic } from '../../tokens';

type TokenLeaf = {
  $type: string;
  $value: unknown;
  $resolvedValue: unknown;
  $extensions?: {
    costra?: Record<string, unknown>;
  };
};

export type TokenRow = {
  category: string;
  path: string;
  value: string;
  type: string;
  usage: string;
  source: string;
  section: string;
  layer: 'foundation' | 'semantic';
};

export type NavItem = {
  label: string;
  href: string;
  description: string;
};

type UsageMap = Record<string, string>;

const tokenUsage: UsageMap = {
  'foundation.color.base.black': 'Absolute black used for maximum contrast moments and dark framing.',
  'foundation.color.base.white': 'Pure white used sparingly for inverse lockups and high-emphasis contrast.',
  'foundation.color.surface.canvas': 'Default application canvas for the dark-first environment.',
  'foundation.color.surface.panel': 'Primary panel surface for cards, sections, and content shells.',
  'foundation.color.surface.panelElevated': 'Raised surface layer for overlays and emphasized containers.',
  'foundation.color.border.default': 'Standard border color for structural separation and field outlines.',
  'foundation.color.border.subtle': 'Low-contrast border for nested containers and quiet separators.',
  'foundation.color.text.primary': 'Primary text color for core reading surfaces.',
  'foundation.color.text.secondary': 'Secondary text for supporting content and metadata.',
  'foundation.color.text.muted': 'Muted text for low-emphasis labels and inactive cues.',
  'foundation.color.accent.primary': 'Electric lime accent reserved for action, verification, and signal.',
  'foundation.color.accent.dim': 'Pressed or secondary accent tone used to step back intensity.',
  'foundation.color.accent.glow': 'Accent glow wash for ambient highlights and spotlight surfaces.',
  'foundation.color.accent.glowSoft': 'Softer accent atmosphere for large backgrounds and gradients.',
  'foundation.color.status.success': 'Positive state color for safe, verified, and completed moments.',
  'foundation.color.status.warning': 'Warning state color for cautionary and review-required moments.',
  'foundation.color.status.error': 'Error state color for failures, blockers, and destructive states.',
  'foundation.color.status.info': 'Informational state color for status callouts and passive signals.',
  'foundation.spacing.0': 'Zero spacing for edge-to-edge alignment and hard seams.',
  'foundation.spacing.1': 'Micro spacing for icon nudges and tight inline separation.',
  'foundation.spacing.2': 'Compact spacing for dense controls and utility groupings.',
  'foundation.spacing.3': 'Small spacing for labels, chips, and stacked microcopy.',
  'foundation.spacing.4': 'Default compact spacing between related controls.',
  'foundation.spacing.5': 'Intermediate spacing when 16px is too tight and 24px is too open.',
  'foundation.spacing.6': 'Base layout spacing for cards, rows, and grouped content.',
  'foundation.spacing.8': 'Comfortable spacing for section internals and content breathing room.',
  'foundation.spacing.10': 'Expanded spacing for page modules and transitional layout gaps.',
  'foundation.spacing.12': 'Large spacing for section breaks and panel padding.',
  'foundation.spacing.16': 'Heavy spacing for hero blocks and major content transitions.',
  'foundation.spacing.20': 'Oversized spacing for strong visual pause and staging.',
  'foundation.spacing.24': 'Maximum spacing tier for page architecture and showcase layouts.',
  'foundation.elevation.xs': 'Subtle shadow for low-risk separation on already-dark surfaces.',
  'foundation.elevation.sm': 'Light depth cue for cards and compact interactive controls.',
  'foundation.elevation.md': 'Default elevated surface shadow for layered content.',
  'foundation.elevation.lg': 'Pronounced depth for modal-like emphasis and hero framing.',
  'foundation.elevation.xl': 'Maximum neutral shadow for strong focus containers.',
  'foundation.elevation.glow': 'Accent-driven glow for verification, trust, and special emphasis.',
  'foundation.grid.columns': 'Core column count for responsive layout composition.',
  'foundation.grid.gutter': 'Horizontal space between columns in the default grid.',
  'foundation.grid.margin': 'Outer page margin that frames the layout against the canvas.',
  'foundation.grid.max': 'Maximum readable width for dashboard and content layouts.',
  'foundation.grid.breakpoint.sm': 'Small breakpoint for compact layouts and mobile handoff.',
  'foundation.grid.breakpoint.md': 'Medium breakpoint for tablet and compact desktop transitions.',
  'foundation.grid.breakpoint.lg': 'Large breakpoint for desktop layout expansion.',
  'foundation.grid.breakpoint.xl': 'Extra-large breakpoint for wide work surfaces.',
  'foundation.grid.breakpoint.2xl': 'Largest breakpoint for dense data and large displays.',
  'foundation.radius.0': 'Default radius for brutalist rectangles and precise hard edges.',
  'foundation.radius.xs': 'Minimal rounding for restrained softening on compact controls.',
  'foundation.radius.sm': 'Small rounding for utility surfaces and subtle tactility.',
  'foundation.radius.md': 'Moderate rounding for inputs and frequently used controls.',
  'foundation.radius.lg': 'Visible rounding for cards and larger interactive surfaces.',
  'foundation.radius.xl': 'Large rounding for featured containers and hero shells.',
  'foundation.radius.full': 'Full pill radius for tags, chips, badges, and avatars.',
  'foundation.iconography.canvas': 'Standard icon artboard size for the full set.',
  'foundation.iconography.strokeWidth': 'Default stroke weight for sharp, precise icon construction.',
  'foundation.iconography.strokeLinecap': 'Stroke cap rule for consistent icon endings.',
  'foundation.iconography.strokeLinejoin': 'Stroke join rule for consistent icon corners.',
  'foundation.iconography.size.sm': 'Small icon size for dense supporting UI.',
  'foundation.iconography.size.md': 'Compact icon size for controls and supporting labels.',
  'foundation.iconography.size.base': 'Default icon size for primary interface usage.',
  'foundation.iconography.size.lg': 'Large icon size for hero states and emphasis.',
  'foundation.typography.family.display': 'Display family for bold headlines and brand moments.',
  'foundation.typography.family.body': 'Body family for readable interface and supporting copy.',
  'foundation.typography.family.mono': 'Monospace family for labels, telemetry, and code-like data.',
  'foundation.typography.role.display-1': 'Largest display style for hero statements and brand anchors.',
  'foundation.typography.role.display-2': 'Secondary display scale for major marketing or section headlines.',
  'foundation.typography.role.heading-1': 'Primary heading style for page and module headings.',
  'foundation.typography.role.heading-2': 'Secondary heading style for subsection titles.',
  'foundation.typography.role.heading-3': 'Compact heading style for grouped content and cards.',
  'foundation.typography.role.body': 'Default body copy style for interface reading.',
  'foundation.typography.role.caption': 'Caption style for metadata, labels, and utility headings.',
  'foundation.typography.role.code': 'Code style for technical strings and implementation references.',
  'semantic.color.text.primary': 'Public semantic token for default readable text.',
  'semantic.color.text.secondary': 'Public semantic token for supporting text hierarchy.',
  'semantic.color.text.muted': 'Public semantic token for low-emphasis text states.',
  'semantic.color.interactive.primary': 'Primary action color used by interactive components.',
  'semantic.color.interactive.primaryHover': 'Hover state color for primary interaction surfaces.',
  'semantic.color.status.success': 'Semantic success feedback surface and text accents.',
  'semantic.color.status.warning': 'Semantic warning feedback surface and text accents.',
  'semantic.color.status.error': 'Semantic error feedback surface and text accents.',
  'semantic.color.status.info': 'Semantic informational feedback surface and text accents.',
  'semantic.surface.canvas': 'Semantic app canvas surface token for page-level backgrounds.',
  'semantic.surface.panel': 'Semantic panel surface token for standard containers.',
  'semantic.surface.panelElevated': 'Semantic elevated surface token for overlays and emphasis.',
  'semantic.border.default': 'Semantic default border token for components.',
  'semantic.border.subtle': 'Semantic subtle border token for quiet separators.'
};

function isTokenLeaf(value: unknown): value is TokenLeaf {
  return Boolean(
    value &&
      typeof value === 'object' &&
      '$type' in (value as Record<string, unknown>) &&
      '$resolvedValue' in (value as Record<string, unknown>)
  );
}

function formatValue(value: unknown): string {
  if (Array.isArray(value)) {
    return value.join(', ');
  }

  if (value && typeof value === 'object') {
    return Object.entries(value as Record<string, unknown>)
      .map(([key, entry]) => `${key}: ${formatValue(entry)}`)
      .join(' | ');
  }

  return String(value);
}

function sourceLabel(token: TokenLeaf): string {
  const costra = token.$extensions?.costra ?? {};
  return String(
    costra.publicPath ??
      costra.sourceCssVar ??
      costra.sourceSelector ??
      costra.sourceLabel ??
      costra.label ??
      'source-reference'
  );
}

function sourceSection(token: TokenLeaf): string {
  return String(token.$extensions?.costra?.sourceSection ?? token.$extensions?.costra?.layer ?? 'General');
}

function flattenTokenTree(
  root: Record<string, unknown>,
  prefix: string,
  layer: 'foundation' | 'semantic',
  category: string
): TokenRow[] {
  return Object.entries(root).flatMap(([key, value]) => {
    const path = `${prefix}.${key}`;

    if (isTokenLeaf(value)) {
      return [
        {
          category,
          path,
          value: formatValue(value.$resolvedValue),
          type: value.$type,
          usage: tokenUsage[path] ?? 'Use this token through the shared token layer rather than hardcoded values.',
          source: sourceLabel(value),
          section: sourceSection(value),
          layer
        }
      ];
    }

    if (value && typeof value === 'object') {
      return flattenTokenTree(value as Record<string, unknown>, path, layer, category);
    }

    return [];
  });
}

export const overviewNav: NavItem[] = [
  { label: 'Overview', href: '#overview', description: 'System philosophy, brand stance, and usage model.' },
  { label: 'Design Tokens', href: '#design-tokens', description: 'Foundation and semantic tokens extracted from the HTML source.' },
  { label: 'Color', href: '#color', description: 'Dark-first palette with electric lime signal accents.' },
  { label: 'Typography', href: '#typography', description: 'Outfit display/body pairing with JetBrains Mono utility styles.' },
  { label: 'Spacing', href: '#spacing', description: '4px-based spacing scale for disciplined rhythm.' },
  { label: 'Elevation', href: '#elevation', description: 'Minimal, utilitarian shadows with reserved accent glow.' },
  { label: 'Grid', href: '#grid', description: '12-column responsive layout structure.' },
  { label: 'Iconography', href: '#iconography', description: 'Sharp geometric icon rules and current inventory.' },
  { label: 'Border + Radius', href: '#border-radius', description: 'Angular defaults with selective softening.' }
];

export const designPrinciples = [
  'Brutalist clarity: strong edges, explicit hierarchy, zero decorative ambiguity.',
  'Dark-first surfaces: dense black layers let critical data and states carry the emphasis.',
  'Electric lime as signal: accent is reserved for trust, verification, and primary action.',
  'Tokens before exceptions: every component should consume the shared token layer instead of ad-hoc values.'
];

export const tokenGroups = {
  color: flattenTokenTree(foundation.color as Record<string, unknown>, 'foundation.color', 'foundation', 'Color'),
  typography: flattenTokenTree(foundation.typography as Record<string, unknown>, 'foundation.typography', 'foundation', 'Typography'),
  spacing: flattenTokenTree(foundation.spacing as Record<string, unknown>, 'foundation.spacing', 'foundation', 'Spacing'),
  elevation: flattenTokenTree(foundation.elevation as Record<string, unknown>, 'foundation.elevation', 'foundation', 'Elevation'),
  grid: flattenTokenTree(foundation.grid as Record<string, unknown>, 'foundation.grid', 'foundation', 'Grid'),
  iconography: flattenTokenTree(foundation.iconography as Record<string, unknown>, 'foundation.iconography', 'foundation', 'Iconography'),
  radius: flattenTokenTree(foundation.radius as Record<string, unknown>, 'foundation.radius', 'foundation', 'Border + Radius'),
  semantic: flattenTokenTree(semantic as Record<string, unknown>, 'semantic', 'semantic', 'Semantic')
};

export const allTokenGroups = [
  { name: 'Color', rows: tokenGroups.color },
  { name: 'Typography', rows: tokenGroups.typography },
  { name: 'Spacing', rows: tokenGroups.spacing },
  { name: 'Elevation', rows: tokenGroups.elevation },
  { name: 'Grid', rows: tokenGroups.grid },
  { name: 'Iconography', rows: tokenGroups.iconography },
  { name: 'Border + Radius', rows: tokenGroups.radius },
  { name: 'Semantic', rows: tokenGroups.semantic }
];

export const paletteGroups = [
  {
    name: 'Primary',
    description: 'Foundational dark surfaces and core text anchors.',
    rows: [
      ...tokenGroups.color.filter((row) => row.path.startsWith('foundation.color.base')),
      ...tokenGroups.color.filter((row) => row.path.startsWith('foundation.color.surface'))
    ]
  },
  {
    name: 'Accent',
    description: 'Verification-driven electric lime accents and atmospheric glow layers.',
    rows: tokenGroups.color.filter((row) => row.path.startsWith('foundation.color.accent'))
  },
  {
    name: 'Neutrals',
    description: 'Text and border neutrals that build readable contrast without noise.',
    rows: [
      ...tokenGroups.color.filter((row) => row.path.startsWith('foundation.color.text')),
      ...tokenGroups.color.filter((row) => row.path.startsWith('foundation.color.border'))
    ]
  },
  {
    name: 'Semantic',
    description: 'Status-driven colors for success, warning, error, and informational messaging.',
    rows: [
      ...tokenGroups.color.filter((row) => row.path.startsWith('foundation.color.status')),
      ...tokenGroups.semantic.filter((row) => row.path.startsWith('semantic.color.status'))
    ]
  }
];

export const typographyFamilies = tokenGroups.typography.filter((row) => row.path.includes('.family.'));
export const typographyRoles = tokenGroups.typography.filter((row) => row.path.includes('.role.'));
export const spacingTokens = tokenGroups.spacing;
export const elevationTokens = tokenGroups.elevation;
export const gridTokens = tokenGroups.grid;
export const radiusTokens = tokenGroups.radius;
export const iconRules = tokenGroups.iconography.filter((row) => !row.path.includes('.inventory.'));
export const iconInventory = tokenGroups.iconography.filter((row) => row.path.includes('.inventory.'));

export const generatedSourceFiles = meta.sourceFiles;
