import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const configDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(configDir, '..');
const foundationDir = path.join(configDir, 'foundation');
const semanticDir = path.join(configDir, 'semantic');

function readJsonFiles(dir) {
  return fs
    .readdirSync(dir)
    .filter((entry) => entry.endsWith('.json'))
    .sort()
    .map((entry) => ({
      file: path.relative(rootDir, path.join(dir, entry)).replace(/\\/g, '/'),
      data: JSON.parse(fs.readFileSync(path.join(dir, entry), 'utf8'))
    }));
}

function deepMerge(target, source) {
  for (const [key, value] of Object.entries(source)) {
    if (value && typeof value === 'object' && !Array.isArray(value) && !("$value" in value)) {
      if (!target[key] || typeof target[key] !== 'object' || Array.isArray(target[key])) {
        target[key] = {};
      }
      deepMerge(target[key], value);
    } else {
      target[key] = value;
    }
  }
  return target;
}

const foundationFiles = readJsonFiles(foundationDir);
const semanticFiles = readJsonFiles(semanticDir);
const sourceTree = [...foundationFiles, ...semanticFiles].reduce((acc, entry) => deepMerge(acc, entry.data), {});

function isTokenNode(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value) && Object.hasOwn(value, '$value');
}

function buildTokenMap(node, trail = [], map = new Map()) {
  if (isTokenNode(node)) {
    map.set(trail.join('.'), node);
    return map;
  }

  if (!node || typeof node !== 'object' || Array.isArray(node)) {
    return map;
  }

  for (const [key, value] of Object.entries(node)) {
    buildTokenMap(value, [...trail, key], map);
  }

  return map;
}

const tokenMap = buildTokenMap(sourceTree);

function resolveReferencePath(reference) {
  const key = reference.replace(/[{}]/g, '').trim();
  const token = tokenMap.get(key);
  if (!token) {
    throw new Error(`Unknown token reference: ${reference}`);
  }
  return resolveTokenValue(token.$value);
}

function resolveTokenValue(value) {
  if (typeof value === 'string') {
    const exactReference = value.match(/^\{.+\}$/);
    if (exactReference) {
      return resolveReferencePath(value);
    }

    return value.replace(/\{[^}]+\}/g, (reference) => {
      const resolved = resolveReferencePath(reference);
      if (Array.isArray(resolved)) {
        return resolved.join(', ');
      }
      if (typeof resolved === 'object') {
        return JSON.stringify(resolved);
      }
      return String(resolved);
    });
  }

  if (Array.isArray(value)) {
    return value.map((entry) => resolveTokenValue(entry));
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, resolveTokenValue(entry)]));
  }

  return value;
}

function enrichTokenTree(node) {
  if (isTokenNode(node)) {
    return {
      ...node,
      $resolvedValue: resolveTokenValue(node.$value)
    };
  }

  if (Array.isArray(node)) {
    return node.map((entry) => enrichTokenTree(entry));
  }

  if (!node || typeof node !== 'object') {
    return node;
  }

  return Object.fromEntries(Object.entries(node).map(([key, value]) => [key, enrichTokenTree(value)]));
}

const generatedPayload = {
  foundation: enrichTokenTree(sourceTree.foundation),
  semantic: enrichTokenTree(sourceTree.semantic),
  meta: {
    generatedAt: '2026-03-27T14:31:16.408Z',
    sourceFiles: [...foundationFiles, ...semanticFiles].map((entry) => entry.file)
  }
};

const genericFontFamilies = new Set(['serif', 'sans-serif', 'monospace', 'system-ui']);

function formatCssValue(value) {
  if (Array.isArray(value)) {
    return value
      .map((entry) => {
        if (typeof entry !== 'string') {
          return String(entry);
        }
        return genericFontFamilies.has(entry) ? entry : `'${entry}'`;
      })
      .join(', ');
  }

  if (typeof value === 'number') {
    return String(value);
  }

  return String(value);
}

function addVariable(lines, name, value) {
  lines.push(`  ${name}: ${formatCssValue(value)};`);
}

function emitThemeVariables() {
  const lines = ['@theme {'];
  const foundation = generatedPayload.foundation;
  const semantic = generatedPayload.semantic;

  for (const [group, tokens] of Object.entries(foundation.color)) {
    for (const [tokenName, token] of Object.entries(tokens)) {
      addVariable(lines, `--color-foundation-${group}-${tokenName}`, token.$resolvedValue);
    }
  }

  addVariable(lines, '--color-text-primary', semantic.color.text.primary.$resolvedValue);
  addVariable(lines, '--color-text-secondary', semantic.color.text.secondary.$resolvedValue);
  addVariable(lines, '--color-text-muted', semantic.color.text.muted.$resolvedValue);
  addVariable(lines, '--color-surface-canvas', semantic.surface.canvas.$resolvedValue);
  addVariable(lines, '--color-surface-panel', semantic.surface.panel.$resolvedValue);
  addVariable(lines, '--color-surface-panel-elevated', semantic.surface.panelElevated.$resolvedValue);
  addVariable(lines, '--color-border-default', semantic.border.default.$resolvedValue);
  addVariable(lines, '--color-border-subtle', semantic.border.subtle.$resolvedValue);
  addVariable(lines, '--color-interactive-primary', semantic.color.interactive.primary.$resolvedValue);
  addVariable(lines, '--color-interactive-primary-hover', semantic.color.interactive.primaryHover.$resolvedValue);

  for (const [tokenName, token] of Object.entries(foundation.typography.family)) {
    addVariable(lines, `--font-family-${tokenName}`, token.$resolvedValue);
  }

  for (const [roleName, token] of Object.entries(foundation.typography.role)) {
    addVariable(lines, `--font-${roleName}`, token.$resolvedValue.fontFamily);
    addVariable(lines, `--font-size-${roleName}`, token.$resolvedValue.fontSize);
    addVariable(lines, `--font-weight-${roleName}`, token.$resolvedValue.fontWeight);
    addVariable(lines, `--line-height-${roleName}`, token.$resolvedValue.lineHeight);
    if (token.$resolvedValue.letterSpacing) {
      addVariable(lines, `--letter-spacing-${roleName}`, token.$resolvedValue.letterSpacing);
    }
    if (token.$resolvedValue.textTransform) {
      addVariable(lines, `--text-transform-${roleName}`, token.$resolvedValue.textTransform);
    }
  }

  for (const [tokenName, token] of Object.entries(foundation.spacing)) {
    addVariable(lines, `--space-${tokenName}`, token.$resolvedValue);
  }

  for (const [tokenName, token] of Object.entries(foundation.elevation)) {
    addVariable(lines, `--shadow-${tokenName}`, token.$resolvedValue);
  }

  for (const [tokenName, token] of Object.entries(foundation.radius)) {
    addVariable(lines, `--radius-${tokenName}`, token.$resolvedValue);
  }

  addVariable(lines, '--grid-columns', foundation.grid.columns.$resolvedValue);
  addVariable(lines, '--grid-gutter', foundation.grid.gutter.$resolvedValue);
  addVariable(lines, '--grid-margin', foundation.grid.margin.$resolvedValue);
  addVariable(lines, '--grid-max', foundation.grid.max.$resolvedValue);

  for (const [tokenName, token] of Object.entries(foundation.grid.breakpoint)) {
    addVariable(lines, `--breakpoint-${tokenName}`, token.$resolvedValue);
  }

  addVariable(lines, '--icon-canvas', foundation.iconography.canvas.$resolvedValue);
  addVariable(lines, '--icon-stroke-width', foundation.iconography.strokeWidth.$resolvedValue);
  addVariable(lines, '--icon-stroke-linecap', foundation.iconography.strokeLinecap.$resolvedValue);
  addVariable(lines, '--icon-stroke-linejoin', foundation.iconography.strokeLinejoin.$resolvedValue);

  for (const [tokenName, token] of Object.entries(foundation.iconography.size)) {
    addVariable(lines, `--icon-size-${tokenName}`, token.$resolvedValue);
  }

  lines.push('}');
  return lines.join('\n') + '\n';
}

function serializeJson(payload) {
  return JSON.stringify(payload, null, 2) + '\n';
}

function serializeTypeScript(payload) {
  return [
    `export const foundation = ${JSON.stringify(payload.foundation, null, 2)} as const;`,
    '',
    `export const semantic = ${JSON.stringify(payload.semantic, null, 2)} as const;`,
    '',
    `export const meta = ${JSON.stringify(payload.meta, null, 2)} as const;`,
    '',
    'export default { foundation, semantic, meta } as const;'
  ].join('\n');
}

export default {
  source: ['tokens/foundation/**/*.json', 'tokens/semantic/**/*.json'],
  platforms: {
    costra: {
      buildPath: './',
      files: [
        {
          destination: 'src/tokens/generated/theme.css',
          format: 'costra/theme-css'
        },
        {
          destination: 'src/tokens/generated/tokens.json',
          format: 'costra/tokens-json'
        },
        {
          destination: 'src/tokens/generated/tokens.ts',
          format: 'costra/tokens-ts'
        }
      ]
    }
  },
  hooks: {
    formats: {
      'costra/theme-css': () => emitThemeVariables(),
      'costra/tokens-json': () => serializeJson(generatedPayload),
      'costra/tokens-ts': () => serializeTypeScript(generatedPayload)
    }
  }
};

