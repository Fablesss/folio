"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { content, type Lang, type SiteContent } from "@/content/site";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: SiteContent;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "folio.lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Start with "en" so server and first client render match (no hydration
  // mismatch); we resolve the real preference right after mount.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "ru" || saved === "en") {
      setLangState(saved);
      return;
    }
    const nav = navigator.language?.toLowerCase() ?? "";
    setLangState(nav.startsWith("ru") ? "ru" : "en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggle = useCallback(() => {
    setLangState((prev) => {
      const next = prev === "ru" ? "en" : "ru";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, toggle, t: content[lang] }),
    [lang, setLang, toggle],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLang must be used within a LanguageProvider");
  }
  return ctx;
}
