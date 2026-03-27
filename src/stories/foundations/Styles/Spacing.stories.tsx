import type { Meta, StoryObj } from '@storybook/react';

import { spacingTokens } from '../foundationData';
import { FoundationPageShell, SectionCard, SpacingScale } from '../foundationDocs';

function SpacingPage() {
  return (
    <FoundationPageShell
      eyebrow="Foundation / Styles / Spacing"
      title="Spacing follows a strict 4px-based rhythm."
      intro="Costra spacing is disciplined, not expressive. The scale is built for repeatable dashboard structure, compact operational density, and deliberate whitespace rather than soft consumer-style breathing room."
    >
      <SectionCard
        id="spacing"
        eyebrow="Scale"
        title="Spacing tokens"
        description="Each spacing token is shown with its name, raw value, intended usage, and a proportional preview bar so the scale can be compared quickly in Storybook."
      >
        <SpacingScale rows={spacingTokens} />
      </SectionCard>
    </FoundationPageShell>
  );
}

const meta = {
  title: 'Foundations/Styles/Spacing',
  component: SpacingPage,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof SpacingPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <SpacingPage />
};
