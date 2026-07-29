"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Reveals its children with a subtle rise animation when scrolled into view.
 * Respects prefers-reduced-motion via the .rise rule in globals.css.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? undefined : 0,
        animation: shown
          ? `rise 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms both`
          : undefined,
      }}
    >
      {children}
    </div>
  );
}
