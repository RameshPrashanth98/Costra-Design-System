import type { Meta, StoryObj } from '@storybook/react';

import { iconInventory, iconRules } from '../foundationData';
import { FoundationPageShell, IconRulesGrid, SectionCard } from '../foundationDocs';

function IconographyPage() {
  return (
    <FoundationPageShell
      eyebrow="Foundation / Styles / Iconography"
      title="Icons stay geometric, minimal, and unambiguous."
      intro="The source HTML defines a strict 24x24 canvas, 1.5 stroke weight, and a clear inventory of icon concepts. This Storybook page documents the rules and current inventory until the icon set is implemented as reusable components."
    >
      <SectionCard
        id="iconography"
        eyebrow="Construction Rules"
        title="Iconography foundation"
        description="Use these tokens and rules as the contract for future icon implementation. Do not invent stylistic deviations that soften the system or blur meaning."
      >
        <IconRulesGrid rules={iconRules} inventory={iconInventory} />
      </SectionCard>
    </FoundationPageShell>
  );
}

const meta = {
  title: 'Foundations/Styles/Iconography',
  component: IconographyPage,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof IconographyPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <IconographyPage />
};
