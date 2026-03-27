import { describe, expect, test } from 'vitest';

import foundationColor from '../../tokens/foundation/color.tokens.json';
import semanticColor from '../../tokens/semantic/color.tokens.json';
import semanticSurface from '../../tokens/semantic/surface.tokens.json';

describe('color tokens', () => {
  test('expose traceable foundation groups with semantic aliases', () => {
    expect(foundationColor.foundation.color.accent.primary.$extensions.costra.sourceCssVar).toBe('--c-accent');
    expect(foundationColor.foundation.color.accent.glow.$extensions.costra.sourceCssVar).toBe('--c-accent-glow');
    expect(foundationColor.foundation.color.text.primary.$value).toBe('#FAFAFA');
    expect(foundationColor.foundation.color.status.error.$value).toBe('#EF4444');

    expect(semanticColor.semantic.color.text.primary.$value).toBe('{foundation.color.text.primary}');
    expect(semanticColor.semantic.color.text.primary.$extensions.costra.publicPath).toBe('text.primary');
    expect(semanticColor.semantic.color.interactive.primary.$extensions.costra.publicPath).toBe('interactive.primary');
    expect(semanticSurface.semantic.surface.canvas.$value).toBe('{foundation.color.surface.canvas}');
  });
});
