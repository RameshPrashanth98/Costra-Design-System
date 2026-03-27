import type { CSSProperties, PropsWithChildren, ReactNode } from 'react';

import { foundation } from '../../tokens';
import type { NavItem, TokenRow } from './foundationData';

function asTextColor(background: string): string {
  const normalized = background.trim().toLowerCase();
  return normalized === '#ffffff' || normalized === '#fafafa' ? '#050505' : '#FAFAFA';
}

export function pageStyle(): CSSProperties {
  return {
    background:
      'radial-gradient(circle at top, rgba(200, 255, 0, 0.08), transparent 30%), linear-gradient(180deg, #050505 0%, #0A0A0B 100%)',
    color: foundation.color.text.primary.$resolvedValue
  };
}

export function FoundationPageShell({
  eyebrow,
  title,
  intro,
  nav,
  children
}: PropsWithChildren<{
  eyebrow: string;
  title: string;
  intro: string;
  nav?: NavItem[];
}>) {
  return (
    <main style={pageStyle()}>
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-10 px-6 py-8 md:px-10 md:py-12">
        <section className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-default)] bg-[linear-gradient(135deg,rgba(17,17,19,0.96),rgba(24,24,27,0.88))] shadow-[var(--shadow-xl)]">
          <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5">
              <p className="font-[var(--font-caption)] text-xs uppercase tracking-[0.24em] text-[var(--color-accent-primary)]">{eyebrow}</p>
              <h1 className="max-w-4xl text-4xl font-black uppercase tracking-[-0.04em] md:text-6xl">{title}</h1>
              <p className="max-w-3xl text-base leading-7 text-[var(--color-text-secondary)] md:text-lg">{intro}</p>
            </div>
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[color:rgba(10,10,11,0.78)] p-6">
              <p className="font-[var(--font-caption)] text-xs uppercase tracking-[0.22em] text-[var(--color-accent-primary)]">Source of Truth</p>
              <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
                These foundation pages are generated from the HTML foundations document and the extracted token exports in
                <code className="ml-1 font-[var(--font-code)] text-[var(--color-text-primary)]">src/tokens/</code>.
              </p>
              {nav ? (
                <div className="mt-6 grid gap-3">
                  {nav.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] bg-[color:rgba(17,17,19,0.92)] px-4 py-3 transition hover:border-[var(--color-accent-primary)] hover:bg-[color:rgba(24,24,27,0.98)]"
                    >
                      <div className="font-[var(--font-caption)] text-[11px] uppercase tracking-[0.2em] text-[var(--color-accent-primary)]">
                        {item.label}
                      </div>
                      <div className="mt-1 text-sm text-[var(--color-text-secondary)]">{item.description}</div>
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>
        {children}
      </div>
    </main>
  );
}

export function SectionCard({
  id,
  eyebrow,
  title,
  description,
  children,
  aside
}: PropsWithChildren<{
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
}>) {
  return (
    <section
      id={id}
      className="rounded-[var(--radius-xl)] border border-[var(--color-border-default)] bg-[color:rgba(17,17,19,0.94)] p-6 shadow-[var(--shadow-lg)] md:p-8"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          <p className="font-[var(--font-caption)] text-xs uppercase tracking-[0.24em] text-[var(--color-accent-primary)]">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em]">{title}</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)] md:text-base">{description}</p>
        </div>
        {aside ? <div className="w-full max-w-md">{aside}</div> : null}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export function MetricsStrip({ items }: { items: Array<{ label: string; value: string; note?: string }> }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[color:rgba(10,10,11,0.88)] p-4"
        >
          <div className="font-[var(--font-caption)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent-primary)]">{item.label}</div>
          <div className="mt-3 text-2xl font-semibold">{item.value}</div>
          {item.note ? <div className="mt-2 text-sm text-[var(--color-text-secondary)]">{item.note}</div> : null}
        </div>
      ))}
    </div>
  );
}

export function PrincipleList({ items }: { items: string[] }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {items.map((item, index) => (
        <article
          key={item}
          className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[color:rgba(10,10,11,0.9)] p-5"
        >
          <div className="font-[var(--font-caption)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent-primary)]">
            Principle {String(index + 1).padStart(2, '0')}
          </div>
          <p className="mt-3 text-base leading-7 text-[var(--color-text-primary)]">{item}</p>
        </article>
      ))}
    </div>
  );
}

export function TokenTable({ rows }: { rows: TokenRow[] }) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)]">
      <div className="grid grid-cols-[1.4fr_1fr_1.1fr_1.8fr] gap-4 border-b border-[var(--color-border-subtle)] bg-[color:rgba(10,10,11,0.94)] px-4 py-3 text-[11px] uppercase tracking-[0.16em] text-[var(--color-accent-primary)]">
        <span>Token</span>
        <span>Value</span>
        <span>Source</span>
        <span>Usage</span>
      </div>
      <div className="divide-y divide-[var(--color-border-subtle)] bg-[color:rgba(17,17,19,0.92)]">
        {rows.map((row) => (
          <div key={row.path} className="grid grid-cols-[1.4fr_1fr_1.1fr_1.8fr] gap-4 px-4 py-4 text-sm">
            <div>
              <div className="font-medium text-[var(--color-text-primary)]">{row.path}</div>
              <div className="mt-1 font-[var(--font-caption)] text-[11px] uppercase tracking-[0.16em] text-[var(--color-text-secondary)]">
                {row.type} | {row.layer}
              </div>
            </div>
            <code className="break-words font-[var(--font-code)] text-[var(--color-text-primary)]">{row.value}</code>
            <div className="text-[var(--color-text-secondary)]">{row.source}</div>
            <div className="text-[var(--color-text-secondary)]">{row.usage}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ColorSwatchGrid({
  groups
}: {
  groups: Array<{ name: string; description: string; rows: TokenRow[] }>;
}) {
  return (
    <div className="grid gap-8">
      {groups.map((group) => (
        <section key={group.name}>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">{group.name}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-text-secondary)]">{group.description}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {group.rows.map((row) => (
              <article
                key={row.path}
                className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[color:rgba(10,10,11,0.88)] p-4"
              >
                <div
                  className="flex h-28 items-end rounded-[var(--radius-md)] border border-white/10 p-3"
                  style={{ background: row.value, color: asTextColor(row.value) }}
                >
                  <span className="font-[var(--font-caption)] text-[11px] uppercase tracking-[0.16em]">{row.source}</span>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="font-medium">{row.path}</div>
                  <code className="block font-[var(--font-code)] text-sm text-[var(--color-accent-primary)]">{row.value}</code>
                  <p className="text-sm leading-6 text-[var(--color-text-secondary)]">{row.usage}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function TypographyShowcase({ rows }: { rows: TokenRow[] }) {
  return (
    <div className="grid gap-4">
      {rows.map((row) => {
        const preview = row.value
          .split(' | ')
          .reduce<Record<string, string>>((accumulator, entry) => {
            const [key, value] = entry.split(': ');
            if (key && value) {
              accumulator[key] = value;
            }
            return accumulator;
          }, {});

        const typographyStyle: CSSProperties = {
          fontFamily: preview.fontFamily,
          fontWeight: Number(preview.fontWeight),
          fontSize: preview.fontSize,
          lineHeight: preview.lineHeight,
          letterSpacing: preview.letterSpacing,
          textTransform: preview.textTransform as CSSProperties['textTransform']
        };

        return (
          <article
            key={row.path}
            className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[color:rgba(10,10,11,0.88)] p-5"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="font-[var(--font-caption)] text-[11px] uppercase tracking-[0.16em] text-[var(--color-accent-primary)]">
                  {row.path}
                </div>
                <div className="mt-3" style={typographyStyle}>
                  {row.path.includes('display')
                    ? 'Costra System'
                    : row.path.includes('heading')
                      ? 'Precision under pressure.'
                      : row.path.includes('caption')
                        ? 'VERIFIED SIGNAL'
                        : row.path.includes('code')
                          ? "token.path('costra.signal.primary')"
                          : 'Dark-first interfaces need clear, disciplined hierarchy.'}
                </div>
              </div>
              <div className="grid min-w-64 gap-2 text-sm text-[var(--color-text-secondary)]">
                <div><strong className="text-[var(--color-text-primary)]">Value:</strong> {row.value}</div>
                <div><strong className="text-[var(--color-text-primary)]">Usage:</strong> {row.usage}</div>
                <div><strong className="text-[var(--color-text-primary)]">Source:</strong> {row.source}</div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function SpacingScale({ rows }: { rows: TokenRow[] }) {
  return (
    <div className="grid gap-3">
      {rows.map((row) => (
        <div
          key={row.path}
          className="grid items-center gap-4 rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] bg-[color:rgba(10,10,11,0.88)] px-4 py-4 md:grid-cols-[1.4fr_140px_1fr]"
        >
          <div>
            <div className="font-medium">{row.path}</div>
            <div className="mt-1 text-sm text-[var(--color-text-secondary)]">{row.usage}</div>
          </div>
          <code className="font-[var(--font-code)] text-sm text-[var(--color-accent-primary)]">{row.value}</code>
          <div className="flex items-center">
            <div
              className="h-3 rounded-full bg-[linear-gradient(90deg,var(--color-accent-primary),rgba(200,255,0,0.18))]"
              style={{ width: row.value === '0px' ? '1px' : row.value }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function ElevationCards({ rows }: { rows: TokenRow[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {rows.map((row) => (
        <article
          key={row.path}
          className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[color:rgba(10,10,11,0.88)] p-5"
        >
          <div
            className="flex h-36 items-end rounded-[var(--radius-md)] border border-white/10 bg-[color:var(--color-surface-panel)] p-4"
            style={{ boxShadow: row.value }}
          >
            <span className="font-[var(--font-caption)] text-[11px] uppercase tracking-[0.16em] text-[var(--color-accent-primary)]">
              preview
            </span>
          </div>
          <div className="mt-4 space-y-2">
            <div className="font-medium">{row.path}</div>
            <code className="block font-[var(--font-code)] text-sm text-[var(--color-text-primary)]">{row.value}</code>
            <p className="text-sm leading-6 text-[var(--color-text-secondary)]">{row.usage}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function GridVisualization({ rows }: { rows: TokenRow[] }) {
  const lookup = Object.fromEntries(rows.map((row) => [row.path, row]));
  const columns = Number(lookup['foundation.grid.columns']?.value ?? '12');

  return (
    <div className="grid gap-8">
      <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[color:rgba(10,10,11,0.88)] p-5">
        <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
          {Array.from({ length: columns }, (_, index) => (
            <div
              key={index}
              className="flex h-20 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-accent-primary)]/30 bg-[var(--color-accent-primary)]/10 font-[var(--font-caption)] text-xs uppercase tracking-[0.16em] text-[var(--color-accent-primary)]"
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {rows.map((row) => (
          <article
            key={row.path}
            className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[color:rgba(10,10,11,0.88)] p-4"
          >
            <div className="font-[var(--font-caption)] text-[11px] uppercase tracking-[0.16em] text-[var(--color-accent-primary)]">
              {row.source}
            </div>
            <div className="mt-3 font-medium">{row.path}</div>
            <code className="mt-2 block font-[var(--font-code)] text-sm text-[var(--color-text-primary)]">{row.value}</code>
            <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">{row.usage}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function IconRulesGrid({
  rules,
  inventory
}: {
  rules: TokenRow[];
  inventory: TokenRow[];
}) {
  return (
    <div className="grid gap-8">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {rules.map((row) => (
          <article
            key={row.path}
            className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[color:rgba(10,10,11,0.88)] p-4"
          >
            <div className="font-[var(--font-caption)] text-[11px] uppercase tracking-[0.16em] text-[var(--color-accent-primary)]">
              {row.source}
            </div>
            <div className="mt-3 font-medium">{row.path}</div>
            <code className="mt-2 block font-[var(--font-code)] text-sm text-[var(--color-text-primary)]">{row.value}</code>
            <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">{row.usage}</p>
          </article>
        ))}
      </div>
      <div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Current Inventory</h3>
          <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
            The HTML foundations file defines the icon set inventory, but this repository does not yet expose icon React components.
            This page documents what exists today without inventing a component API ahead of implementation.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {inventory.map((row) => (
            <article
              key={row.path}
              className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[color:rgba(10,10,11,0.88)] p-4"
            >
              <div className="flex h-24 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] bg-[color:rgba(17,17,19,0.96)]">
                <span className="font-[var(--font-caption)] text-xs uppercase tracking-[0.22em] text-[var(--color-accent-primary)]">
                  {row.value}
                </span>
              </div>
              <div className="mt-4 font-medium">{row.path}</div>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                Reserved inventory name from the source foundations document.
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export function RadiusShowcase({ rows }: { rows: TokenRow[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {rows.map((row) => (
        <article
          key={row.path}
          className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[color:rgba(10,10,11,0.88)] p-5"
        >
          <div className="grid grid-cols-3 gap-3">
            {['Button', 'Card', 'Input'].map((label) => (
              <div
                key={label}
                className="flex h-16 items-center justify-center border border-[var(--color-accent-primary)]/40 bg-[var(--color-accent-primary)]/10 text-xs uppercase tracking-[0.12em] text-[var(--color-text-primary)]"
                style={{ borderRadius: row.value }}
              >
                {label}
              </div>
            ))}
          </div>
          <div className="mt-4 font-medium">{row.path}</div>
          <code className="mt-2 block font-[var(--font-code)] text-sm text-[var(--color-accent-primary)]">{row.value}</code>
          <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">{row.usage}</p>
        </article>
      ))}
    </div>
  );
}
