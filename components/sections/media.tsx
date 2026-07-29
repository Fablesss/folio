"use client";

import { useState } from "react";
import { useLang } from "@/components/language-context";
import { Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { Lightbox } from "@/components/lightbox";
import type { Photo } from "@/content/site";

export function Media() {
  const { t } = useLang();
  const [lightbox, setLightbox] = useState<{
    photos: Photo[];
    index: number;
  } | null>(null);

  return (
    <Section id="media">
      <Reveal>
        <SectionHeading
          eyebrow="04"
          title={t.media.heading}
          subtitle={t.media.subheading}
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.media.items.map((item, i) => (
          <Reveal key={item.photos[0].src} delay={i * 60}>
            <figure className="flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface transition-colors hover:border-border-strong">
              <div className="flex flex-col">
                {item.photos.map((photo, photoIdx) => (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    key={photo.src}
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full cursor-pointer object-cover transition-opacity hover:opacity-90"
                    style={{ objectPosition: photo.focus }}
                    onClick={() => setLightbox({ photos: item.photos, index: photoIdx })}
                  />
                ))}
              </div>
              <figcaption className="flex flex-1 flex-col p-5">
                <p className="text-sm leading-relaxed text-muted">
                  {item.caption}
                </p>
                {item.link ? (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                  >
                    {item.link.label}
                    <span aria-hidden>→</span>
                  </a>
                ) : null}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-8 text-sm leading-relaxed text-subtle">{t.media.note}</p>
      </Reveal>

      {lightbox && (
        <Lightbox
          photos={lightbox.photos}
          initialIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </Section>
  );
}
