"use client";

import { useLang } from "@/components/language-context";
import { Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export function Education() {
  const { t } = useLang();

  return (
    <Section id="education">
      <Reveal>
        <SectionHeading eyebrow="07" title={t.education.heading} />
      </Reveal>

      <ul className="mt-12 divide-y divide-border border-t border-border">
        {t.education.items.map((item, i) => (
          <Reveal key={item.org} delay={i * 60}>
            <li className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-base font-semibold tracking-tight">
                  {item.program}
                </span>
                {item.note ? (
                  <span className="text-sm text-accent">{item.note}</span>
                ) : null}
              </div>
              <div className="flex shrink-0 flex-col gap-0.5 sm:items-end">
                <span className="text-sm text-muted">{item.org}</span>
                <span className="font-mono text-xs text-subtle">
                  {item.period}
                </span>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
