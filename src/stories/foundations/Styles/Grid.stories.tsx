import type { Meta, StoryObj } from '@storybook/react';

import { gridTokens } from '../foundationData';
import { FoundationPageShell, GridVisualization, SectionCard } from '../foundationDocs';

function GridPage() {
  return (
    <FoundationPageShell
      eyebrow="Foundation / Styles / Grid"
      title="A 12-column grid keeps complex layouts disciplined."
      intro="Costra uses a rigid 12-column structure with 24px gutters and a 1280px max width. The grid is intended for dense product surfaces where alignment precision matters more than decorative freedom."
    >
      <SectionCard
        id="grid"
        eyebrow="Layout System"
        title="Grid tokens"
        description="Columns, gutter, margin, max width, and breakpoints are documented together so engineering and design can keep the layout contract aligned."
      >
        <GridVisualization rows={gridTokens} />
      </SectionCard>
    </FoundationPageShell>
  );
}

const meta = {
  title: 'Foundations/Styles/Grid',
  component: GridPage,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof GridPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <GridPage />
};
