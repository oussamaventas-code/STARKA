"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS } from "@/lib/data";
import { SplitReveal } from "@/components/ui/SplitReveal";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export function Process() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".proc-row", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".proc-list",
          start: "top 80%",
        },
      });
      gsap.from(".proc-line", {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 1.6,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".proc-list",
          start: "top 80%",
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="proceso"
      ref={root}
      className="relative overflow-hidden bg-ink-900 py-32 md:py-44"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-brand-glow opacity-[0.07] blur-3xl"
      />
      <div className="container-x">
        <div className="mb-20 max-w-3xl">
          <div className="eyebrow mb-5">02 · Cómo trabajamos</div>
          <SplitReveal as="h2" className="title-2 text-white">
            Cuatro pasos.
          </SplitReveal>
          <SplitReveal as="h2" className="title-2 text-bone-300/80">
            Cero sorpresas.
          </SplitReveal>
        </div>

        <div className="proc-list relative">
          <div className="proc-line absolute left-[28px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-brand via-white/10 to-transparent md:block" />

          <div className="flex flex-col gap-12">
            {PROCESS.map((p, i) => (
              <div
                key={p.step}
                className="proc-row grid grid-cols-1 items-start gap-6 md:grid-cols-[80px_1fr] md:gap-12"
              >
                <div className="relative">
                  <div className="grid h-14 w-14 place-items-center rounded-full border border-white/10 bg-ink-800 font-mono text-sm tracking-widest text-brand-glow">
                    {p.step}
                  </div>
                </div>
                <div className="flex flex-col gap-3 border-l border-white/[0.06] pl-6 md:flex-row md:items-baseline md:justify-between md:gap-12 md:border-none md:pl-0">
                  <h3 className="h-display max-w-md text-2xl text-white md:text-4xl">
                    {p.title}
                  </h3>
                  <p className="max-w-md text-bone-300">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
