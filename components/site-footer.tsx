"use client";

import { useLang } from "@/components/language-context";
import { Container } from "@/components/ui";

export function SiteFooter() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-start justify-between gap-3 text-sm text-subtle sm:flex-row sm:items-center">
        <span>
          © {year} {t.hero.name}
        </span>
        <span>{t.footer.built}</span>
      </Container>
    </footer>
  );
}
