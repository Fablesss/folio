"use client";

import { useState } from "react";
import { useLang } from "@/components/language-context";
import { Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { Lightbox } from "@/components/lightbox";
import type { Photo } from "@/content/site";

export function Hobbies() {
  const { t } = useLang();
  const [lightbox, setLightbox] = useState<{
    photos: Photo[];
    index: number;
  } | null>(null);

  return (
    <Section id="hobbies">
      <Reveal>
        <SectionHeading
          eyebrow="08"
          title={t.hobbies.heading}
          subtitle={t.hobbies.subheading}
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.hobbies.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 60}>
            <article className="flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface transition-colors hover:border-border-strong">
              <div className="flex flex-col">
                {item.images.map((photo, photoIdx) => (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    key={photo.src}
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full cursor-pointer object-cover transition-opacity hover:opacity-90"
                    style={{ objectPosition: photo.focus }}
                    onClick={() => setLightbox({ photos: item.images, index: photoIdx })}
                  />
                ))}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-base font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

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
