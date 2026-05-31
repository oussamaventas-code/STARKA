"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitReveal } from "@/components/ui/SplitReveal";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const INSURANCES = [
  "Mapfre",
  "Allianz",
  "Mutua Madrileña",
  "AXA",
  "Línea Directa",
  "Reale",
  "Generali",
  "Pelayo",
  "Qualitas Auto",
  "Zurich",
];

export function Insurances() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (track.current) {
        gsap.to(track.current, {
          xPercent: -50,
          ease: "none",
          repeat: -1,
          duration: 35,
        });
      }
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden border-y border-white/[0.06] bg-ink-900 py-24 md:py-32"
    >
      <div className="container-x relative z-10 grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center">
        <div className="md:col-span-5">
          <div className="eyebrow mb-5">Seguros</div>
          <SplitReveal as="h2" className="title-2 text-white">
            Trabajamos con
          </SplitReveal>
          <SplitReveal as="h2" className="title-2 text-brand">
            tu aseguradora.
          </SplitReveal>
          <p className="mt-6 text-bone-300">
            Sea cual sea tu compañía, nosotros nos encargamos de todo el proceso.
            Gestionamos los partes y la peritación directamente para que tú no
            tengas que preocuparte por nada. Tu coche volverá a estar como nuevo,
            sin estrés.
          </p>
        </div>

        <div className="md:col-span-7">
          <div className="relative flex w-full overflow-hidden">
            {/* Gradient masks for smooth fade out at edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink-900 to-transparent md:w-32" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink-900 to-transparent md:w-32" />

            <div ref={track} className="flex w-max items-center gap-10 whitespace-nowrap px-8">
              {[...INSURANCES, ...INSURANCES].map((name, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center rounded-sm border border-white/10 bg-ink-950 px-8 py-5 font-display text-xl tracking-wide text-bone-200 transition-colors hover:border-brand/50 hover:text-white"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
