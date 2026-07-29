"use client";

import { useLang } from "@/components/language-context";
import { Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import type { ProjectItem } from "@/content/site";

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="flex h-full flex-col rounded-card border border-border bg-surface p-6 transition-colors hover:border-border-strong">
      {project.image ? (
        <a
          href={project.image.src}
          target="_blank"
          rel="noreferrer"
          className="mb-5 block overflow-hidden rounded-lg border border-border"
          aria-label={project.image.alt}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image.src}
            alt={project.image.alt}
            loading="lazy"
            className="w-full transition-transform duration-500 hover:scale-[1.02]"
          />
        </a>
      ) : null}

      <p className="font-mono text-xs uppercase tracking-[0.15em] text-subtle">
        {project.role}
      </p>
      <h4 className="mt-3 text-lg font-semibold tracking-tight">
        {project.title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      {project.result ? (
        <p className="mt-4 rounded-lg bg-accent-soft px-3 py-2 text-sm text-accent">
          {project.result}
        </p>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted"
          >
            {s}
          </span>
        ))}
      </div>

      {project.link ? (
        <a
          href={project.link.href}
          target={project.link.href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          {project.link.label}
          <span aria-hidden>→</span>
        </a>
      ) : null}
    </article>
  );
}

export function Projects() {
  const { t } = useLang();

  return (
    <Section id="projects">
      <Reveal>
        <SectionHeading
          eyebrow="05"
          title={t.projects.heading}
          subtitle={t.projects.subheading}
        />
      </Reveal>

      {t.projects.groups.map((group, gi) => (
        <div key={group.title} className={gi === 0 ? "mt-12" : "mt-16"}>
          <Reveal>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.12em] text-subtle">
              {group.title}
            </h3>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {group.items.map((project, i) => (
              <Reveal
                key={project.title}
                delay={i * 60}
                className={project.featured ? "lg:col-span-2" : undefined}
              >
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
}
