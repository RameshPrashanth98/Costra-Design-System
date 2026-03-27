import { describe, expect, test } from 'vitest';

import elevationTokens from '../../tokens/foundation/elevation.tokens.json';
import gridTokens from '../../tokens/foundation/grid.tokens.json';
import radiusTokens from '../../tokens/foundation/radius.tokens.json';
import spacingTokens from '../../tokens/foundation/spacing.tokens.json';

describe('layout tokens', () => {
  test('define spacing, elevation, radius, and grid foundations', () => {
    expect(Object.keys(spacingTokens.foundation.spacing)).toEqual(
      expect.arrayContaining(['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24'])
    );
    expect(spacingTokens.foundation.spacing['10'].$value).toBe('40px');
    expect(elevationTokens.foundation.elevation.glow.$value).toContain('40px');
    expect(radiusTokens.foundation.radius.full.$value).toBe('9999px');
    expect(gridTokens.foundation.grid.columns.$value).toBe(12);
    expect(gridTokens.foundation.grid.breakpoint.sm.$value).toBe('40rem');
    expect(gridTokens.foundation.grid.breakpoint.md.$value).toBe('48rem');
    expect(gridTokens.foundation.grid.breakpoint.lg.$value).toBe('64rem');
    expect(gridTokens.foundation.grid.breakpoint.xl.$value).toBe('80rem');
    expect(gridTokens.foundation.grid.breakpoint['2xl'].$value).toBe('96rem');
  });
});
