import type { Meta, StoryObj } from '@storybook/react';

import { allTokenGroups, designPrinciples, generatedSourceFiles, overviewNav } from './foundationData';
import { FoundationPageShell, MetricsStrip, PrincipleList, SectionCard } from './foundationDocs';

function OverviewPage() {
  return (
    <FoundationPageShell
      eyebrow="Foundation / Overview"
      title="Costra foundations lock the system before components scale."
      intro="Costra is a brutalist, dark-first design system extracted from the HTML foundations document. The visual language is high-contrast, geometric, and intentionally severe, with electric lime reserved for trust, verification, and primary signal."
      nav={overviewNav}
    >
      <SectionCard
        id="overview"
        eyebrow="System Philosophy"
        title="Precision, authority, and signal over decoration."
        description="The system is designed for security-minded interfaces where density, clarity, and confidence matter more than softness. Dark surfaces carry the application, lime identifies what is trusted or actionable, and tokens provide the only sanctioned path to styling."
      >
        <PrincipleList items={designPrinciples} />
      </SectionCard>

      <SectionCard
        id="design-tokens"
        eyebrow="Token Model"
        title="Foundation and semantic tokens define the styling contract."
        description="Foundation tokens preserve fidelity to the original HTML source. Semantic tokens provide stable public names for component authors. Components should prefer semantic tokens for meaning and foundation tokens for lower-level system work."
      >
        <MetricsStrip
          items={[
            { label: 'Token groups', value: String(allTokenGroups.length), note: 'Color, typography, spacing, elevation, grid, iconography, radius, and semantic.' },
            { label: 'Source files', value: String(generatedSourceFiles.length), note: 'Generated from the audited token source set in tokens/.' },
            { label: 'Visual stance', value: 'Dark-first', note: 'Canvas and panels stay dark so status and action can cut through cleanly.' },
            { label: 'Accent strategy', value: 'Electric lime', note: 'Reserve the accent for verification, trust states, and primary action.' }
          ]}
        />
      </SectionCard>

      <SectionCard
        eyebrow="Foundation Sections"
        title="Storybook foundations are organized for scanning."
        description="Each section is isolated so designers and engineers can inspect the visual system quickly, find the exact token name, and understand intended usage without reverse engineering the HTML source."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {overviewNav.slice(1).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[color:rgba(10,10,11,0.9)] p-5 transition hover:border-[var(--color-accent-primary)]"
            >
              <div className="font-[var(--font-caption)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent-primary)]">{item.label}</div>
              <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">{item.description}</p>
            </a>
          ))}
        </div>
      </SectionCard>
    </FoundationPageShell>
  );
}

const meta = {
  title: 'Foundations/Overview',
  component: OverviewPage,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof OverviewPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <OverviewPage />
};
