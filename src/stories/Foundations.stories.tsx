import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { foundation } from '../tokens';

type ColorToken = {
  name: string;
  value: string;
  note: string;
};

type TypographyToken = {
  name: string;
  sample: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
  letterSpacing?: string;
  textTransform?: string;
};

const colorTokens: ColorToken[] = [
  { name: 'Accent / Primary', value: foundation.color.accent.primary.$resolvedValue, note: foundation.color.accent.primary.$extensions.costra.sourceCssVar },
  { name: 'Accent / Dim', value: foundation.color.accent.dim.$resolvedValue, note: foundation.color.accent.dim.$extensions.costra.sourceCssVar },
  { name: 'Surface / Canvas', value: foundation.color.surface.canvas.$resolvedValue, note: foundation.color.surface.canvas.$extensions.costra.sourceCssVar },
  { name: 'Surface / Panel', value: foundation.color.surface.panel.$resolvedValue, note: foundation.color.surface.panel.$extensions.costra.sourceCssVar },
  { name: 'Text / Primary', value: foundation.color.text.primary.$resolvedValue, note: foundation.color.text.primary.$extensions.costra.sourceCssVar },
  { name: 'Status / Success', value: foundation.color.status.success.$resolvedValue, note: foundation.color.status.success.$extensions.costra.sourceCssVar }
];

const typographyTokens: TypographyToken[] = [
  { name: 'Display 1', sample: 'Costra', ...foundation.typography.role['display-1'].$resolvedValue },
  { name: 'Display 2', sample: 'Digital Shield', ...foundation.typography.role['display-2'].$resolvedValue },
  { name: 'Heading 1', sample: 'Neutralize Threats', ...foundation.typography.role['heading-1'].$resolvedValue },
  { name: 'Heading 2', sample: 'Real-time Cross-identification', ...foundation.typography.role['heading-2'].$resolvedValue },
  { name: 'Heading 3', sample: 'Proactive defense layer', ...foundation.typography.role['heading-3'].$resolvedValue },
  { name: 'Body', sample: 'Costra uses proprietary AI and real-time cross-identification to neutralize digital threats before they take place.', ...foundation.typography.role.body.$resolvedValue },
  { name: 'Caption', sample: 'SYSTEM STATUS: OPERATIONAL', ...foundation.typography.role.caption.$resolvedValue },
  { name: 'Code', sample: "costra.verify(identity, { mode: 'realtime' })", ...foundation.typography.role.code.$resolvedValue }
];

function FoundationsPage() {
  return (
    <main className="min-h-screen bg-transparent text-[var(--color-text-primary)]">
      <section className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-10 md:px-10 md:py-16">
        <header className="rounded-[var(--radius-xl)] border border-[var(--color-border-default)] bg-[color:var(--color-surface-panel)]/80 p-8 shadow-[var(--shadow-lg)] backdrop-blur">
          <p className="mb-3 font-[var(--font-caption)] text-sm uppercase tracking-[0.24em] text-[var(--color-accent-primary)]">
            Welcome to Costra Storybook
          </p>
          <h1 className="max-w-4xl text-5xl font-black uppercase tracking-[-0.04em] md:text-7xl" style={{ fontFamily: 'var(--font-display-1)', lineHeight: '1' }}>
            Foundations first.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-text-secondary)]">
            This workspace publishes the token layer that the next phases will route through Tailwind, Storybook docs, and reusable React components.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[var(--radius-xl)] border border-[var(--color-border-default)] bg-[color:var(--color-surface-panel)] p-6 shadow-[var(--shadow-md)]">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="font-[var(--font-caption)] text-xs uppercase tracking-[0.22em] text-[var(--color-accent-primary)]">Color Palette</p>
                <h2 className="mt-2 text-2xl font-semibold">Core Costra signal colors</h2>
              </div>
              <div className="rounded-full border border-[var(--color-border-subtle)] px-3 py-1 font-[var(--font-caption)] text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
                Source-traceable tokens
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {colorTokens.map((token) => (
                <article key={token.name} className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[color:var(--color-surface-canvas)] p-4">
                  <div className="h-24 rounded-[var(--radius-md)] border border-white/10" style={{ background: token.value }} />
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.08em]">{token.name}</h3>
                      <p className="mt-1 font-[var(--font-caption)] text-xs uppercase tracking-[0.18em] text-[var(--color-text-secondary)]">{token.note}</p>
                    </div>
                    <code className="font-[var(--font-code)] text-xs text-[var(--color-accent-primary)]">{token.value}</code>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[var(--radius-xl)] border border-[var(--color-border-default)] bg-[color:var(--color-surface-panel)] p-6 shadow-[var(--shadow-md)]">
            <p className="font-[var(--font-caption)] text-xs uppercase tracking-[0.22em] text-[var(--color-accent-primary)]">Typography Scale</p>
            <h2 className="mt-2 text-2xl font-semibold">HTML-derived type roles</h2>
            <div className="mt-6 flex flex-col gap-5">
              {typographyTokens.map((token) => (
                <article key={token.name} className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[color:var(--color-surface-canvas)] p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-[var(--font-caption)] text-xs uppercase tracking-[0.2em] text-[var(--color-accent-primary)]">{token.name}</p>
                      <p
                        className="mt-2"
                        style={{
                          fontFamily: 'var(--font-' + token.name.toLowerCase().replace(/ /g, '-') + ')',
                          fontSize: token.fontSize,
                          fontWeight: token.fontWeight,
                          lineHeight: String(token.lineHeight),
                          letterSpacing: token.letterSpacing,
                          textTransform: token.textTransform as CSSProperties['textTransform']
                        }}
                      >
                        {token.sample}
                      </p>
                    </div>
                    <div className="text-right font-[var(--font-caption)] text-xs uppercase tracking-[0.16em] text-[var(--color-text-secondary)]">
                      <div>{token.fontSize}</div>
                      <div className="mt-2">{token.fontWeight}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

const meta = {
  title: 'Welcome/Foundations',
  component: FoundationsPage,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof FoundationsPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => <FoundationsPage />
};

