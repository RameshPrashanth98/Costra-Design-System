import type { Preview } from '@storybook/react';
import '../src/tokens/generated/theme.css';
import './preview.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    a11y: {
      test: 'todo'
    },
    backgrounds: {
      default: 'costra-canvas',
      values: [
        { name: 'costra-canvas', value: '#050505' },
        { name: 'costra-panel', value: '#111113' },
        { name: 'white', value: '#ffffff' }
      ]
    },
    options: {
      storySort: {
        order: [
          'Foundations',
          ['Overview', 'Design Tokens', 'Styles', ['Color', 'Typography', 'Spacing', 'Elevation', 'Grid', 'Iconography', 'Border and Radius']]
        ]
      }
    },
    layout: 'fullscreen'
  }
};

export default preview;
