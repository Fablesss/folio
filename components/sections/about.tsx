"use client";

import { useLang } from "@/components/language-context";
import { Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export function About() {
  const { t } = useLang();

  return (
    <Section id="about">
      <Reveal>
        <SectionHeading eyebrow="01" title={t.about.heading} />
      </Reveal>

      <div className="mt-10 grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <Reveal>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={t.about.portrait.src}
            alt={t.about.portrait.alt}
            width={599}
            height={900}
            loading="lazy"
            className="hidden w-full max-w-[22rem] rounded-card border border-border object-cover md:block"
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
