import { describe, expect, test } from 'vitest';

import extractionMap from '../../tokens/manifest/extraction-map.json';

describe('color tokens', () => {
  test('audits the HTML source references for foundation color tokens', () => {
    const color = extractionMap.categories.color;

    expect(color.sourceSection).toContain('Core Palette');
    expect(color.references).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ token: '--c-accent' }),
        expect.objectContaining({ token: '--c-accent-glow' }),
        expect.objectContaining({ token: '--c-success' }),
        expect.objectContaining({ token: '--c-error' })
      ])
    );
  });

  test.todo('generated color tokens expose foundation and semantic groups with source metadata');
  test.todo('semantic aliases cover text.primary, text.secondary, surface.canvas, and interactive.primary');
});
