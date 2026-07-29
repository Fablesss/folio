"use client";

import { useLang } from "@/components/language-context";
import { Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export function About() {
  const { t } = useLang();

  return (
    <Section id="about">
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <Reveal>
          <SectionHeading eyebrow="01" title={t.about.heading} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={t.about.portrait.src}
            alt={t.about.portrait.alt}
            width={599}
            height={900}
            loading="lazy"
            className="mt-8 hidden w-full max-w-[15rem] rounded-card border border-border object-cover md:block"
          />
        </Reveal>
        <Reveal delay={80}>
          <p className="text-xl font-medium leading-relaxed text-fg">
            {t.about.lead}
          </p>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
