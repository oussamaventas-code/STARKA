"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function Loader() {
  const root = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const obj = { v: 0 };
      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        onComplete: () => {
          setTimeout(() => setDone(true), 200);
        },
      });

      tl.to(obj, {
        v: 100,
        duration: 2.4,
        ease: "power2.out",
        onUpdate: () => {
          if (count.current) count.current.textContent = String(Math.floor(obj.v));
          if (bar.current) bar.current.style.transform = `scaleX(${obj.v / 100})`;
        },
      })
        .to(
          ".loader-letter",
          {
            yPercent: -100,
            duration: 0.7,
            stagger: 0.04,
            ease: "power3.inOut",
          },
          "+=0.1"
        )
        .to(
          root.current,
          {
            yPercent: -100,
            duration: 1.0,
            ease: "expo.inOut",
          },
          "-=0.2"
        );
    }, root);

    return () => ctx.revert();
  }, []);

  if (done) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950"
      aria-hidden="true"
    >
      <div className="absolute left-6 top-6 font-mono text-[11px] uppercase tracking-[0.3em] text-bone-300 md:left-10 md:top-10">
        Grupo CGA
      </div>
      <div className="absolute right-6 top-6 font-mono text-[11px] uppercase tracking-[0.3em] text-bone-300 md:right-10 md:top-10">
        La Albatalía · 30009
      </div>

      <div className="overflow-hidden">
        <div className="flex h-display font-display text-[clamp(3rem,12vw,10rem)] leading-tight tracking-normal">
          {["S", "T", "A", "R", "K", "A"].map((l, i) => (
            <span key={i} className="loader-letter inline-block">
              {l}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 flex w-[260px] flex-col gap-3 md:w-[360px]">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-bone-300">
          <span>Cargando</span>
          <span>
            <span ref={count}>0</span>%
          </span>
        </div>
        <div className="h-px w-full overflow-hidden bg-white/10">
          <div
            ref={bar}
            className="loader-bar h-full w-full origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>
    </div>
  );
}
