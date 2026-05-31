"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TESTIMONIALS } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { SplitReveal } from "@/components/ui/SplitReveal";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export function Testimonials() {
  const root = useRef<HTMLElement>(null);
  const trackA = useRef<HTMLDivElement>(null);
  const trackB = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (trackA.current) {
        gsap.to(trackA.current, {
          xPercent: -50,
          ease: "none",
          repeat: -1,
          duration: 50,
        });
      }
      if (trackB.current) {
        gsap.to(trackB.current, {
          xPercent: 50,
          ease: "none",
          repeat: -1,
          duration: 60,
        });
      }
    }, root);
    return () => ctx.revert();
  }, []);

  const half1 = TESTIMONIALS.slice(0, 5);
  const half2 = TESTIMONIALS.slice(5);
  const loopA = [...half1, ...half1, ...half1];
  const loopB = [...half2, ...half2, ...half2];

  return (
    <section
      id="testimonios"
      ref={root}
      className="relative overflow-hidden bg-ink-950 py-32 md:py-44"
    >
      <div className="container-x mb-16 grid grid-cols-1 gap-6 md:mb-20 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <div className="eyebrow mb-5">05 · Reseñas</div>
          <SplitReveal as="h2" className="title-2 text-white">
            La confianza
          </SplitReveal>
          <SplitReveal as="h2" className="title-2 text-bone-300/80">
            no se compra, se gana.
          </SplitReveal>
        </div>
        <div className="md:col-span-5">
          <div className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-brand text-white">
              <Icon name="star" className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-display text-3xl text-white">4.5</span>
                <div className="flex text-brand">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="star" className="h-4 w-4" />
                  ))}
                </div>
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone-300">
                81+ reseñas en Google
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="marquee mb-4 overflow-hidden">
        <div ref={trackA} className="flex w-max gap-5">
          {loopA.map((t, i) => (
            <TestimonialCard key={`a-${i}`} t={t} />
          ))}
        </div>
      </div>
      <div className="marquee overflow-hidden">
        <div
          ref={trackB}
          className="flex w-max gap-5"
          style={{ transform: "translateX(-50%)" }}
        >
          {loopB.map((t, i) => (
            <TestimonialCard key={`b-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <article className="flex w-[360px] shrink-0 flex-col gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 md:w-[440px]">
      <div className="flex items-center justify-between">
        <div className="flex text-brand">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Icon key={i} name="star" className="h-4 w-4" />
          ))}
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone-300">
          Google · verificada
        </span>
      </div>
      <p className="font-display text-xl leading-snug text-white md:text-2xl">
        &ldquo;{t.body}&rdquo;
      </p>
      <div className="mt-auto flex items-center gap-3 border-t border-white/[0.06] pt-5">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-white/5 font-display text-sm text-white">
          {t.name.split(" ")[0][0]}
        </div>
        <div>
          <div className="text-sm text-white">{t.name}</div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-300">
            {t.role}
          </div>
        </div>
      </div>
    </article>
  );
}
