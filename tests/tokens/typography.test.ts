import { describe, expect, test } from 'vitest';

import typographyTokens from '../../tokens/foundation/typography.tokens.json';

describe('typography tokens', () => {
  test('define font families and the required type roles', () => {
    expect(typographyTokens.foundation.typography.family.display.$value).toEqual(['Outfit', 'sans-serif']);
    expect(typographyTokens.foundation.typography.family.body.$value).toEqual(['Outfit', 'sans-serif']);
    expect(typographyTokens.foundation.typography.family.mono.$value).toEqual(['JetBrains Mono', 'Space Mono', 'monospace']);

    const roles = typographyTokens.foundation.typography.role;

    expect(Object.keys(roles)).toEqual(
      expect.arrayContaining([
        'display-1',
        'display-2',
        'heading-1',
        'heading-2',
        'heading-3',
        'body',
        'caption',
        'code'
      ])
    );
    expect(roles['display-1'].$extensions.costra.sourceSelector).toBe('.type-sample-d1');
    expect(roles['heading-1'].$value.fontSize).toBe('2.25rem');
    expect(roles.code.$value.lineHeight).toBe(1.5);
  });
});
