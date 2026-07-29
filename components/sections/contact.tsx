"use client";

import { useLang } from "@/components/language-context";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export function Contact() {
  const { t } = useLang();

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border py-24 sm:py-32 md:scroll-mt-28"
    >
      <Container>
        <Reveal>
          <div className="rounded-card border border-border bg-surface p-8 sm:p-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              09
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.contact.heading}
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
              {t.contact.text}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${t.contact.email}`}
                className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
              >
                {t.contact.email}
              </a>
              {t.contact.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-border-strong px-5 py-3 text-sm font-medium text-fg transition-colors hover:bg-bg"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <p className="mt-8 border-t border-border pt-6 text-sm text-subtle">
              {t.contact.note}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
