"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Icon } from "@/components/ui/Icon";
import { BRAND, STATS } from "@/lib/data";
import { Counter } from "@/components/ui/Counter";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-video", {
        scale: 1.15,
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero-overlay", {
        opacity: 1,
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero-content", {
        yPercent: -20,
        opacity: 0.6,
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="relative isolate min-h-[100svh] w-full overflow-hidden"
    >
      {/* Background artwork */}
      <div className="absolute inset-0 -z-10">
        <video
          className="hero-video h-full w-full scale-105 object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-poster.svg"
        >
          <source src="/videos/HERO%201.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-950/40 to-ink-950" />
        <div className="hero-overlay absolute inset-0 bg-ink-950/60 opacity-0" />
        <div className="absolute inset-0 grid-lines opacity-[0.2]" />
      </div>

      {/* Top side labels */}
      <div className="container-x absolute inset-x-0 top-[110px] flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-bone-300/80 md:text-[11px]">
        <span className="flex items-center gap-2">
          <span className="inline-block h-px w-6 bg-brand" />
          38.00°N · 1.15°W
        </span>
        <span className="hidden md:flex items-center gap-2">
          Grupo CGA · Taller multimarca
          <span className="inline-block h-px w-6 bg-brand" />
        </span>
      </div>

      <div className="container-x relative flex min-h-[100svh] flex-col justify-end pb-24 pt-44 md:justify-center md:pb-32 md:pt-32">
        <div className="hero-content max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow mb-6"
          >
            Taller multimarca · La Albatalía, Murcia
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="h-display max-w-[1050px] text-[clamp(3.2rem,7.4vw,7.8rem)] text-white"
          >
            <span className="block">Tu taller</span>
            <span className="shine-text block">de confianza.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.0, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-base text-bone-200/85 md:text-lg"
          >
            Mecánica general, chapa, pintura, electricidad y aire acondicionado.
            Más de 24 años cuidando tu coche en Murcia con precios competitivos y trato directo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="#contacto" variant="primary">
              Pedir cita
              <Icon name="arrow" className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href={`tel:${BRAND.phone}`} variant="ghost">
              <Icon name="phone" className="h-4 w-4" />
              Llamar ahora
            </MagneticButton>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] md:mt-24 md:grid-cols-4"
        >
          {STATS.map((s) => (
            <div key={s.label} className="bg-ink-950/40 px-6 py-6 backdrop-blur">
              <div className="flex items-baseline gap-1 font-display text-3xl tracking-normal text-white md:text-5xl">
                <Counter to={s.value} />
                <span className="text-brand">{s.suffix}</span>
              </div>
              <div className="mt-2 text-[11px] font-mono uppercase tracking-[0.2em] text-bone-300">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.35em] text-bone-300"
      >
        <div className="flex flex-col items-center gap-2">
          <span>Desliza</span>
          <span className="block h-8 w-px animate-pulse-slow bg-brand" />
        </div>
      </motion.div>
    </section>
  );
}
