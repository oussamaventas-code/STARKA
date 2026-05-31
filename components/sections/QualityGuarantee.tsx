"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitReveal } from "@/components/ui/SplitReveal";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export function QualityGuarantee() {
  const container = useRef<HTMLElement>(null);
  const bgImage = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for the background image
      gsap.to(bgImage.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden py-32"
    >
      {/* Background with Parallax */}
      <div className="absolute inset-0 h-[130%] w-full">
        <video
          ref={bgImage}
          src="/videos/Garantia.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover scale-[1.15] opacity-80"
        />
        {/* Dark overlays to blend text and hide watermarks on the edges */}
        <div className="absolute inset-0 bg-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-transparent to-ink-950" />
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(10,10,10,0.9)]" />
      </div>

      {/* Content */}
      <div className="container-x relative z-10 text-center">
        <div className="eyebrow mx-auto mb-6 justify-center !text-bone-200 backdrop-blur-sm">
          Seguridad en Carretera
        </div>
        <SplitReveal
          as="h2"
          className="h-display mx-auto max-w-[20ch] text-[clamp(2.5rem,7vw,6rem)] leading-none text-white drop-shadow-2xl"
        >
          De nuestro elevador a la calle con total seguridad.
        </SplitReveal>
        <p className="mx-auto mt-8 max-w-2xl text-[clamp(1rem,2vw,1.25rem)] text-bone-200 drop-shadow-md">
          No solo reparamos vehículos; devolvemos la tranquilidad. Cada coche
          que sale de nuestras instalaciones ha sido probado y revisado
          para garantizar tu seguridad.
        </p>
      </div>
    </section>
  );
}
