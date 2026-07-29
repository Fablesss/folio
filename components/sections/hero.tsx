"use client";

import { useLang } from "@/components/language-context";
import { Container } from "@/components/ui";

export function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full opacity-[0.07] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
        }}
      />

      <Container className="relative py-24 sm:py-32">
        {/*
          On phones, the portrait sits between the heading and the pitch. From
          md, the heading spans the full width while the pitch and portrait
          share the next row. From lg, the portrait spans both text rows.
        */}
        <div className="grid grid-cols-1 items-start gap-x-5 gap-y-8 md:grid-cols-[1fr_16rem] md:gap-x-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-x-16">
          <div className="rise min-w-0 md:col-span-2 md:row-start-1 lg:col-span-1 lg:col-start-1">
            <h1 className="text-5xl font-semibold sm:text-7xl">
              {t.hero.name}
            </h1>

            <p className="mt-4 text-xl font-medium text-accent sm:text-2xl">
              {t.hero.role}
            </p>
          </div>

          <div className="rise min-w-0 row-start-3 md:col-start-1 md:row-start-2 lg:row-start-2">
            <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg lg:text-xl">
              {t.hero.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
              >
                {t.hero.ctaPrimary}
              </a>
              <a
                href="#projects"
                className="inline-flex items-center rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-fg transition-colors hover:bg-surface"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="rise row-start-2 w-full max-w-64 justify-self-center self-center md:col-start-2 md:row-start-2 md:max-w-none lg:row-span-2 lg:row-start-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={t.hero.portrait.src}
              alt={t.hero.portrait.alt}
              width={800}
              height={1200}
              className="w-full rounded-card border border-border object-cover"
            />
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-10 sm:grid-cols-4">
          {t.hero.highlights.map((h) => (
            <div key={h.label}>
              <dt className="text-2xl font-semibold">
                {h.value}
              </dt>
              <dd className="mt-1 text-sm text-subtle">{h.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
