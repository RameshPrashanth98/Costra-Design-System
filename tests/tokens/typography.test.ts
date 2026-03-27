import { describe, expect, test } from 'vitest';

import extractionMap from '../../tokens/manifest/extraction-map.json';

describe('typography tokens', () => {
  test('tracks the source typography roles from the HTML selectors', () => {
    const typography = extractionMap.categories.typography;
    const selectorRefs = typography.references
      .filter((entry): entry is { token: string; kind: string } => typeof entry === 'object')
      .map((entry) => entry.token);

    expect(selectorRefs).toEqual(
      expect.arrayContaining([
        '.type-sample-d1',
        '.type-sample-d2',
        '.type-sample-h1',
        '.type-sample-h2',
        '.type-sample-h3',
        '.type-sample-body',
        '.type-sample-caption',
        '.type-sample-code'
      ])
    );
  });

  test.todo('font families are exposed for display, body, and mono usage');
  test.todo('role tokens include display-1, display-2, heading-1, heading-2, heading-3, body, caption, and code');
});
