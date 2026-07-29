"use client";

import { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import type { Photo } from "@/content/site";

interface LightboxProps {
  photos: Photo[];
  initialIndex: number;
  onClose: () => void;
}

export function Lightbox({ photos, initialIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const current = photos[index];
  const multiple = photos.length > 1;

  const prev = useCallback(() => setIndex((i) => (i > 0 ? i - 1 : photos.length - 1)), [photos.length]);
  const next = useCallback(() => setIndex((i) => (i < photos.length - 1 ? i + 1 : 0)), [photos.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
        aria-label="Закрыть"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>

      {multiple && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 z-10 flex size-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
            aria-label="Предыдущее"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 z-10 flex size-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
            aria-label="Следующее"
            style={{ right: "4rem" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </>
      )}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={current.src}
        alt={current.alt}
        className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ aspectRatio: "auto" }}
      />

      {multiple && (
        <div className="absolute bottom-4 flex gap-2">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setIndex(i); }}
              className={`size-2 rounded-full transition-colors ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Фото ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>,
    document.body,
  );
}
