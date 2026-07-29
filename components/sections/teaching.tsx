"use client";

import { useLang } from "@/components/language-context";
import { Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export function Teaching() {
  const { t } = useLang();

  return (
    <Section id="teaching">
      <Reveal>
        <SectionHeading
          eyebrow="03"
          title={t.teaching.heading}
          subtitle={t.teaching.subheading}
        />
      </Reveal>

      <ul className="mt-12 divide-y divide-border border-t border-border">
        {t.teaching.items.map((item, i) => (
          <Reveal key={`${item.org}-${item.course}`} delay={i * 60}>
            <li className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
              <div className="flex items-baseline gap-3">
                <span className="text-base font-semibold tracking-tight">
                  {item.course}
                </span>
                {item.note ? (
                  <span className="text-sm text-subtle">{item.note}</span>
                ) : null}
              </div>
              <span className="shrink-0 text-sm text-muted">{item.org}</span>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
