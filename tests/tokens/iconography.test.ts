import { describe, expect, test } from 'vitest';

import extractionMap from '../../tokens/manifest/extraction-map.json';

describe('iconography tokens', () => {
  test('audits canonical icon rules and the initial inventory', () => {
    const iconography = extractionMap.categories.iconography.references;

    expect(iconography).toEqual(
      expect.arrayContaining([
        '24px',
        'stroke-width',
        'stroke-linecap',
        'stroke-linejoin',
        'Shield',
        'Verify',
        'Activity'
      ])
    );
  });

  test.todo('icon foundations expose canvas 24, strokeWidth 1.5, and round linecap/linejoin');
  test.todo('initial icon inventory includes Shield, Lock, Search, Alert, Scan, Verify, Reject, Identity, Monitor, Realtime, Verified, and Activity');
});
