"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/components/language-context";
import { Container } from "@/components/ui";

export function SiteHeader() {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#teaching", label: t.nav.teaching },
    { href: "#media", label: t.nav.media },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#education", label: t.nav.education },
    { href: "#hobbies", label: t.nav.hobbies },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-border bg-bg/80 backdrop-blur-md"
          : "border-transparent bg-bg/0"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#top" className="font-semibold tracking-tight">
          {t.hero.name}
        </a>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle language"
            className="inline-flex items-center rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-border-strong hover:text-fg"
          >
            <span className={lang === "ru" ? "text-fg" : ""}>RU</span>
            <span className="mx-1 text-subtle">/</span>
            <span className={lang === "en" ? "text-fg" : ""}>EN</span>
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover sm:inline-flex"
          >
            {t.nav.contact}
          </a>
        </div>
      </Container>

      {/* The links get a row of their own: eight of them no longer fit next to
          the name, and on their own line they show from the md breakpoint up. */}
      <Container className="hidden md:block">
        <nav
          className={`flex h-11 items-center gap-5 overflow-x-auto border-t transition-colors ${
            scrolled ? "border-border" : "border-transparent"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 text-sm text-muted transition-colors hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
