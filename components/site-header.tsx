"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/components/language-context";
import { Container } from "@/components/ui";

export function SiteHeader() {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("");
  const navRef = useRef<HTMLElement>(null);
  const lastAutoActiveRef = useRef("");

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const nav = navRef.current;
        if (!nav) return;

        const sectionHrefs = [
          "#about",
          "#experience",
          "#projects",
          "#teaching",
          "#media",
          "#skills",
          "#education",
          "#hobbies",
        ];
        let currentHref = "";
        const activationLine = window.innerHeight * 0.35;

        for (const href of sectionHrefs) {
          const section = document.querySelector<HTMLElement>(href);
          if (section && section.getBoundingClientRect().top <= activationLine) {
            currentHref = href;
          }
        }
        setActiveHref(currentHref);

        if (currentHref === lastAutoActiveRef.current) return;
        lastAutoActiveRef.current = currentHref;

        const activeLink = currentHref
          ? nav.querySelector<HTMLAnchorElement>(`a[href="${currentHref}"]`)
          : null;

        if (activeLink) {
          const maxScroll = nav.scrollWidth - nav.clientWidth;
          const navRect = nav.getBoundingClientRect();
          const linkRect = activeLink.getBoundingClientRect();
          const centered =
            nav.scrollLeft +
            linkRect.left -
            navRect.left -
            (nav.clientWidth - activeLink.offsetWidth) / 2;
          nav.scrollTo({
            left: Math.max(0, Math.min(centered, maxScroll)),
            behavior: "smooth",
          });
        } else {
          nav.scrollLeft = 0;
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const navItems = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#teaching", label: t.nav.teaching },
    { href: "#media", label: t.nav.media },
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
            className="inline-flex rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-accent-hover sm:px-4 sm:text-sm"
          >
            {t.nav.contact}
          </a>
        </div>
      </Container>

      {/* Keep every link available at every width; the row scrolls when needed. */}
      <Container>
        <nav
          ref={navRef}
          aria-label="Основная навигация"
          className={`flex h-11 touch-pan-x items-center gap-5 overflow-x-auto overscroll-x-contain border-t [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden transition-colors ${
            scrolled ? "border-border" : "border-transparent"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => {
                const nav = navRef.current;
                if (!nav) return;

                const link = event.currentTarget;
                const navRect = nav.getBoundingClientRect();
                const linkRect = link.getBoundingClientRect();
                const maxScroll = nav.scrollWidth - nav.clientWidth;
                const centered =
                  nav.scrollLeft +
                  linkRect.left -
                  navRect.left -
                  (nav.clientWidth - link.offsetWidth) / 2;

                nav.scrollTo({
                  left: Math.max(0, Math.min(centered, maxScroll)),
                  behavior: "smooth",
                });
              }}
              aria-current={activeHref === item.href ? "location" : undefined}
              className={`shrink-0 text-sm transition-colors ${
                activeHref === item.href
                  ? "font-medium text-accent"
                  : "text-muted hover:text-fg"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
