"use client";

import { useLang } from "@/components/language-context";
import { Section, SectionHeading, Chip } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export function Skills() {
  const { t } = useLang();

  return (
    <Section id="skills">
      <Reveal>
        <SectionHeading
          eyebrow="06"
          title={t.skills.heading}
          subtitle={t.skills.subheading}
        />
      </Reveal>

      <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {t.skills.groups.map((group, i) => (
          <Reveal key={group.title} delay={i * 60}>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-subtle">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
