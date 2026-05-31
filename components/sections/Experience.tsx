"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DIFFERENTIATORS } from "@/lib/data";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { Icon } from "@/components/ui/Icon";
import Image from "next/image";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".exp-image", {
        yPercent: -15,
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(".diff-item", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".diff-grid",
          start: "top 85%",
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experiencia"
      ref={root}
      className="relative overflow-hidden bg-ink-950 py-32 md:py-44"
    >
      <div className="container-x grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="eyebrow mb-5">03 · Experiencia</div>
          <SplitReveal as="h2" className="title-2 text-white">
            Más de 24 años
          </SplitReveal>
          <SplitReveal as="h2" className="title-2 text-bone-300/80">
            cuidando coches en Murcia.
          </SplitReveal>

          <p className="mt-8 max-w-md text-bone-200/85">
            Starka Motor nació en el año 2000 como un taller de barrio en La Albatalía.
            Hoy formamos parte del Grupo CGA, con las herramientas y el conocimiento
            necesarios para reparar cualquier marca y modelo.
          </p>
          <p className="mt-5 max-w-md text-bone-200/85">
            Nuestros mecánicos son profesionales con décadas de experiencia, especializados
            en encontrar soluciones reales a precios justos. Pieza usada, nueva o alternativa:
            tú eliges.
          </p>

          <div className="diff-grid mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.04] sm:grid-cols-2">
            {DIFFERENTIATORS.map((d, i) => (
              <div key={d.title} className="diff-item bg-ink-950 p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-brand/30 bg-brand/10 text-brand">
                    <Icon
                      name={["shield", "clock", "check", "wrench"][i]}
                      className="h-4 w-4"
                    />
                  </span>
                  <h3 className="font-display text-lg tracking-normal text-white">
                    {d.title}
                  </h3>
                </div>
                <p className="text-sm text-bone-300">{d.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="exp-image-wrap relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/[0.06]">
            <div className="exp-image absolute inset-[-10%]">
              <Image
                src="/images/workshop.jpg"
                alt="Taller Starka Motor en La Albatalía"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <div className="flex items-end justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-300">
                    Taller
                  </div>
                  <div className="mt-1 font-display text-2xl text-white">
                    Starka Motor S.L.
                  </div>
                </div>
                <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-white backdrop-blur">
                  La Albatalía
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06]" />
          </div>

          {/* Floating tech badge */}
          <div className="glass absolute -left-6 top-12 hidden flex-col gap-1 rounded-2xl p-5 shadow-glow md:flex">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-300">
              Desde
            </div>
            <div className="font-display text-xl text-white">Año 2000</div>
          </div>
          <div className="glass absolute -right-4 bottom-16 hidden flex-col gap-1 rounded-2xl p-5 shadow-glow md:flex">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-300">
              Grupo
            </div>
            <div className="font-display text-xl text-white">CGA Talleres</div>
          </div>
        </div>
      </div>
    </section>
  );
}
