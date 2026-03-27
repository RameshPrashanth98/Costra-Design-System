import type { Meta, StoryObj } from '@storybook/react';

import { paletteGroups } from '../foundationData';
import { ColorSwatchGrid, FoundationPageShell, SectionCard } from '../foundationDocs';

function ColorPage() {
  return (
    <FoundationPageShell
      eyebrow="Foundation / Styles / Color"
      title="High-contrast color with one unmistakable signal accent."
      intro="Costra color is anchored in black surfaces, assertive text contrast, and an electric lime reserved for trust, verification, and primary action. Semantic status colors stay disciplined and utilitarian."
    >
      <SectionCard
        id="color"
        eyebrow="Style Foundation"
        title="Palette groups"
        description="The palette groups match the source system structure while clarifying how the tokens should be applied in components and documentation."
      >
        <ColorSwatchGrid groups={paletteGroups} />
      </SectionCard>
    </FoundationPageShell>
  );
}

const meta = {
  title: 'Foundations/Styles/Color',
  component: ColorPage,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ColorPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ColorPage />
};
