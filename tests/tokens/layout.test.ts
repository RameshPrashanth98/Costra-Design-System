import { describe, expect, test } from 'vitest';

import extractionMap from '../../tokens/manifest/extraction-map.json';

describe('layout tokens', () => {
  test('captures spacing, elevation, radius, and grid source references', () => {
    expect(extractionMap.categories.spacing.references).toEqual(
      expect.arrayContaining(['--space-1', '--space-6', '--space-24'])
    );
    expect(extractionMap.categories.elevation.references).toEqual(
      expect.arrayContaining(['--shadow-xs', '--shadow-glow'])
    );
    expect(extractionMap.categories.radius.references).toEqual(
      expect.arrayContaining(['--radius-0', '--radius-full'])
    );
    expect(extractionMap.categories.grid.references).toEqual(
      expect.arrayContaining(['--grid-columns', '40rem', '48rem', '64rem', '80rem', '96rem'])
    );
  });

  test.todo('spacing tokens expose the 4px scale from 0 through 24');
  test.todo('grid outputs include columns, gutter, margin, max width, and rem breakpoints');
});
