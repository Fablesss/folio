"use client";

import { useLang } from "@/components/language-context";
import { Section, SectionHeading, Chip } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export function Experience() {
  const { t } = useLang();

  return (
    <Section id="experience">
      <Reveal>
        <SectionHeading eyebrow="02" title={t.experience.heading} />
      </Reveal>

      <div className="mt-12 space-y-4">
        {t.experience.items.map((item, i) => (
          <Reveal key={`${item.company}-${i}`} delay={i * 70}>
            <article className="grid gap-5 rounded-card border border-border bg-surface p-6 sm:grid-cols-[0.9fr_2fr] sm:gap-8 sm:p-8">
              <header>
                <h3 className="flex items-center gap-2.5 text-lg font-semibold">
                  {item.logo ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={item.logo}
                      alt=""
                      aria-hidden
                      width={128}
                      height={128}
                      loading="lazy"
                      className="h-8 w-8 shrink-0 rounded-md object-contain"
                    />
                  ) : null}
                  {item.company}
                </h3>
                <p className="mt-1 text-sm text-accent">{item.role}</p>
                <p className="mt-2 font-mono text-xs text-subtle">
                  {item.period}
                  {item.location ? ` · ${item.location}` : ""}
                </p>
              </header>

              <div>
                <ul className="space-y-2.5">
                  {item.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      className="flex gap-3 text-base leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Chip key={tag}>{tag}</Chip>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
