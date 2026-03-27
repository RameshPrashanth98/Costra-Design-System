import type { Meta, StoryObj } from '@storybook/react';

import { radiusTokens } from '../foundationData';
import { FoundationPageShell, RadiusShowcase, SectionCard } from '../foundationDocs';

function BorderRadiusPage() {
  return (
    <FoundationPageShell
      eyebrow="Foundation / Styles / Border and Radius"
      title="Sharp by default, softened only with intent."
      intro="Costra defaults to hard-edged brutalist geometry. Radius is introduced selectively for touch targets, chips, badges, avatars, and a few container surfaces where controlled softness improves usability without diluting authority."
    >
      <SectionCard
        id="border-radius"
        eyebrow="Shape Language"
        title="Radius tokens"
        description="Each radius token is shown against common component types so teams can see where the system stays sharp and where it allows selective rounding."
      >
        <RadiusShowcase rows={radiusTokens} />
      </SectionCard>
    </FoundationPageShell>
  );
}

const meta = {
  title: 'Foundations/Styles/Border and Radius',
  component: BorderRadiusPage,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof BorderRadiusPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <BorderRadiusPage />
};
