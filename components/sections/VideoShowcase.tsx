"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitReveal } from "@/components/ui/SplitReveal";
import Image from "next/image";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export function VideoShowcase() {
  const root = useRef<HTMLElement>(null);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrap.current,
        { scale: 0.78, borderRadius: "48px" },
        {
          scale: 1,
          borderRadius: "0px",
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );

      gsap.to(".showcase-copy", {
        yPercent: -10,
        opacity: 0.4,
        scrollTrigger: {
          trigger: root.current,
          start: "center center",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative isolate min-h-[120vh] overflow-hidden bg-ink-900 py-32"
    >
      <div className="container-x relative z-10 mb-16">
        <div className="eyebrow mb-5">04 · Dentro del taller</div>
        <SplitReveal as="h2" className="title-2 text-white">
          Donde la mecánica
        </SplitReveal>
        <SplitReveal as="h2" className="title-2 text-bone-300/80">
          se convierte en arte.
        </SplitReveal>
      </div>

      <div
        ref={wrap}
        className="relative mx-auto aspect-video w-[88%] max-w-[1600px] overflow-hidden border border-white/[0.06]"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/showcase-poster.jpg"
            alt="Interior del taller Starka Motor"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-ink-950/20" />

        <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-px border-t border-white/10 bg-white/5 backdrop-blur md:grid-cols-4">
          {[
            { k: "Experiencia", v: "+24 años" },
            { k: "Bahías", v: "6 puestos" },
            { k: "Equipo", v: "Profesional" },
            { k: "Garantía", v: "Por escrito" },
          ].map((s) => (
            <div key={s.k} className="bg-ink-950/60 px-5 py-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone-300">
                {s.k}
              </div>
              <div className="font-display text-base text-white md:text-lg">{s.v}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="showcase-copy container-x relative z-10 mt-20 grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-7 md:col-start-2">
          <h3 className="h-display text-3xl text-white md:text-5xl">
            Trabajo bien hecho. <span className="text-bone-300/60">Resultados visibles.</span>
          </h3>
        </div>
        <p className="text-bone-300 md:col-span-4">
          Cada reparación sigue nuestro protocolo de calidad: revisión inicial, diagnóstico,
          ejecución, prueba y entrega documentada. Nada se queda al azar.
        </p>
      </div>
    </section>
  );
}
