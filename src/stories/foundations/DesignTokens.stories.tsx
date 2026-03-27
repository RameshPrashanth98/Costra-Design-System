import type { Meta, StoryObj } from '@storybook/react';

import { allTokenGroups } from './foundationData';
import { FoundationPageShell, SectionCard, TokenTable } from './foundationDocs';

function DesignTokensPage() {
  return (
    <FoundationPageShell
      eyebrow="Foundation / Design Tokens"
      title="The token catalog is the styling API."
      intro="Every token shown here is imported from the generated token source. The tables are grouped by system concern so teams can audit names, values, source references, and intended usage without duplicating the token data."
    >
      {allTokenGroups.map((group) => (
        <SectionCard
          key={group.name}
          eyebrow={`Token Group / ${group.name}`}
          title={group.name}
          description={`Documented token values for ${group.name.toLowerCase()}. Consume these values from src/tokens rather than copying raw values into components or stories.`}
        >
          <TokenTable rows={group.rows} />
        </SectionCard>
      ))}
    </FoundationPageShell>
  );
}

const meta = {
  title: 'Foundations/Design Tokens',
  component: DesignTokensPage,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof DesignTokensPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <DesignTokensPage />
};
