import { describe, expect, test } from 'vitest';

import generatedTokens from '../../src/tokens/generated/tokens.json';
import sourceMap from '../../tokens/manifest/source-map.json';

function getByPath(object: Record<string, any>, tokenPath: string) {
  return tokenPath.split('.').reduce((current, segment) => current?.[segment], object);
}

describe('token traceability', () => {
  test('maps public foundation and semantic tokens back to the HTML source', () => {
    expect(sourceMap.entries.length).toBeGreaterThan(20);

    const accent = sourceMap.entries.find((entry) => entry.publicPath === 'color.accent.primary');
    const display = sourceMap.entries.find((entry) => entry.publicPath === 'typography.role.display-1');
    const breakpoint = sourceMap.entries.find((entry) => entry.publicPath === 'grid.breakpoint.lg');
    const strokeWidth = sourceMap.entries.find((entry) => entry.publicPath === 'iconography.strokeWidth');
    const textPrimary = sourceMap.entries.find((entry) => entry.publicPath === 'text.primary');

    expect(accent).toMatchObject({ sourceCssVar: '--c-accent', layer: 'foundation' });
    expect(display).toMatchObject({ sourceSelector: '.type-sample-d1', layer: 'foundation' });
    expect(breakpoint).toMatchObject({ sourceCssVar: '--bp-lg', layer: 'foundation' });
    expect(strokeWidth).toMatchObject({ sourceCssVar: 'stroke-width', layer: 'foundation' });
    expect(textPrimary).toMatchObject({ sourceCssVar: '--c-text', layer: 'semantic' });
  });

  test('preserves traceability metadata in the generated token payload', () => {
    expect(generatedTokens.foundation.color.accent.primary.$extensions.costra.sourceCssVar).toBe('--c-accent');
    expect(generatedTokens.foundation.typography.role['display-1'].$extensions.costra.sourceSelector).toBe('.type-sample-d1');
    expect(generatedTokens.foundation.grid.breakpoint.lg.$extensions.costra.sourceCssVar).toBe('--bp-lg');
    expect(generatedTokens.foundation.iconography.strokeWidth.$extensions.costra.sourceCssVar).toBe('stroke-width');
    expect(generatedTokens.semantic.color.text.primary.$extensions.costra.publicPath).toBe('text.primary');
    expect(getByPath(generatedTokens, 'semantic.surface.canvas.$resolvedValue')).toBe('#0A0A0B');
  });
});
