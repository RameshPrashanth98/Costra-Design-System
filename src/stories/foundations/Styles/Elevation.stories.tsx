import type { Meta, StoryObj } from '@storybook/react';

import { elevationTokens } from '../foundationData';
import { ElevationCards, FoundationPageShell, SectionCard } from '../foundationDocs';

function ElevationPage() {
  return (
    <FoundationPageShell
      eyebrow="Foundation / Styles / Elevation"
      title="Depth is sparse, sharp, and utilitarian."
      intro="Costra does not rely on heavy soft shadows for hierarchy. Most depth comes from surface layering and borders, with shadows used sparingly and the accent glow reserved for moments of verification or heightened signal."
    >
      <SectionCard
        id="elevation"
        eyebrow="Depth System"
        title="Elevation tokens"
        description="The elevation scale mirrors the HTML source: low blur, dense black shadows, and one accent-driven glow token for emphasis."
      >
        <ElevationCards rows={elevationTokens} />
      </SectionCard>
    </FoundationPageShell>
  );
}

const meta = {
  title: 'Foundations/Styles/Elevation',
  component: ElevationPage,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ElevationPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ElevationPage />
};
