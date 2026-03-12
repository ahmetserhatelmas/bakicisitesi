"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

const AUTO_PLAY_MS = 4500;

export default function HeroCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);

  const go = useCallback(
    (dir: number) => {
      setIndex((i) => {
        const next = i + dir;
        if (next < 0) return images.length - 1;
        if (next >= images.length) return 0;
        return next;
      });
    },
    [images.length]
  );

  useEffect(() => {
    const t = setInterval(() => go(1), AUTO_PLAY_MS);
    return () => clearInterval(t);
  }, [go]);

  const onDragStart = (clientX: number) => {
    setDragStart(clientX);
    setDragOffset(0);
  };

  const onDragMove = (clientX: number) => {
    if (dragStart === null) return;
    setDragOffset(clientX - dragStart);
  };

  const onDragEnd = () => {
    if (dragStart === null) return;
    const threshold = 50;
    if (dragOffset < -threshold) go(1);
    if (dragOffset > threshold) go(-1);
    setDragStart(null);
    setDragOffset(0);
  };

  return (
    <div className="relative select-none">
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] max-h-[420px] touch-none cursor-grab active:cursor-grabbing"
        onPointerDown={(e) => {
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
          onDragStart(e.clientX);
        }}
        onPointerMove={(e) => dragStart !== null && onDragMove(e.clientX)}
        onPointerUp={(e) => {
          (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
          onDragEnd();
        }}
        onPointerCancel={(e) => {
          (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
          onDragEnd();
        }}
        style={{ touchAction: "none" }}
      >
        {images.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="absolute inset-0 transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(${(i - index) * 100 + (dragStart !== null ? dragOffset / 20 : 0)}%)`,
            }}
          >
            <Image
              src={`/images/banner/${name}`}
              alt=""
              fill
              className="object-cover"
              unoptimized
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Önceki / Sonraki */}
      <button
        type="button"
        onClick={() => go(-1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-[#4a3f7a] hover:bg-white transition-colors z-10"
        aria-label="Önceki"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-[#4a3f7a] hover:bg-white transition-colors z-10"
        aria-label="Sonraki"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Noktalar */}
      <div className="flex justify-center gap-1.5 mt-3">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === index ? "bg-[#4a3f7a] scale-125" : "bg-[#4a3f7a]/30 hover:bg-[#4a3f7a]/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

