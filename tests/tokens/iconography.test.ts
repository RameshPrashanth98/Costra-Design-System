import { describe, expect, test } from 'vitest';

import iconographyTokens from '../../tokens/foundation/iconography.tokens.json';

describe('iconography tokens', () => {
  test('define canonical rules and the starter icon inventory', () => {
    expect(iconographyTokens.foundation.iconography.canvas.$value).toBe('24px');
    expect(iconographyTokens.foundation.iconography.strokeWidth.$value).toBe('1.5');
    expect(iconographyTokens.foundation.iconography.strokeLinecap.$value).toBe('round');
    expect(iconographyTokens.foundation.iconography.strokeLinejoin.$value).toBe('round');
    expect(iconographyTokens.foundation.iconography.size.sm.$value).toBe('16px');
    expect(iconographyTokens.foundation.iconography.size.base.$value).toBe('24px');
    expect(iconographyTokens.foundation.iconography.size.lg.$value).toBe('32px');
    expect(Object.keys(iconographyTokens.foundation.iconography.inventory)).toEqual(
      expect.arrayContaining([
        'shield',
        'lock',
        'search',
        'alert',
        'scan',
        'verify',
        'reject',
        'identity',
        'monitor',
        'realtime',
        'verified',
        'activity'
      ])
    );
  });
});
