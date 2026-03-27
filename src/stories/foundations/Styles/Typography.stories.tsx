import type { Meta, StoryObj } from '@storybook/react';

import { typographyFamilies, typographyRoles } from '../foundationData';
import { FoundationPageShell, SectionCard, TokenTable, TypographyShowcase } from '../foundationDocs';

function TypographyPage() {
  return (
    <FoundationPageShell
      eyebrow="Foundation / Styles / Typography"
      title="Outfit carries authority. Mono carries precision."
      intro="Typography in Costra is intentionally forceful. Display and body roles use Outfit for geometric confidence, while JetBrains Mono supports telemetry, captions, labels, and code-like strings."
    >
      <SectionCard
        id="typography"
        eyebrow="Typeface Families"
        title="Family tokens"
        description="Family tokens define the approved type stacks for brand, interface, and technical expression."
      >
        <TokenTable rows={typographyFamilies} />
      </SectionCard>

      <SectionCard
        eyebrow="Type Scale"
        title="Role-based styles"
        description="Role tokens map directly to the display, heading, body, caption, and code styles extracted from the source HTML."
      >
        <TypographyShowcase rows={typographyRoles} />
      </SectionCard>
    </FoundationPageShell>
  );
}

const meta = {
  title: 'Foundations/Styles/Typography',
  component: TypographyPage,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof TypographyPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <TypographyPage />
};
