"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { SplitReveal } from "@/components/ui/SplitReveal";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export function Services() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".svc-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".svc-grid",
          start: "top 80%",
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="servicios"
      ref={root}
      className="relative overflow-hidden bg-ink-950 py-32 md:py-44"
    >
      <div className="container-x">
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="eyebrow mb-5">01 · Servicios</div>
            <SplitReveal as="h2" className="title-2 text-white">
              Todo lo que tu coche necesita,
            </SplitReveal>
            <SplitReveal as="h2" className="title-2 text-bone-300/80">
              bajo un mismo techo.
            </SplitReveal>
          </div>
          <p className="max-w-md text-bone-200/80">
            Mecánica, chapa, pintura, electricidad y compraventa. Precios competitivos
            con opciones de pieza usada, nueva o alternativa.
          </p>
        </div>

        <div className="svc-grid grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.04] md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof SERVICES)[number] }) {
  const card = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = card.current;
    if (!el) return;
    const onEnter = () => {
      gsap.to(el.querySelector(".svc-icon"), {
        y: -6,
        scale: 1.08,
        color: "#FF2D4F",
        duration: 0.5,
        ease: "power3",
      });
      gsap.to(el.querySelector(".svc-bg"), {
        opacity: 1,
        duration: 0.6,
        ease: "power3",
      });
      gsap.to(el.querySelector(".svc-arrow"), {
        x: 8,
        duration: 0.4,
        ease: "power3",
      });
    };
    const onLeave = () => {
      gsap.to(el.querySelector(".svc-icon"), {
        y: 0,
        scale: 1,
        color: "#f5f5f4",
        duration: 0.5,
        ease: "power3",
      });
      gsap.to(el.querySelector(".svc-bg"), {
        opacity: 0,
        duration: 0.6,
        ease: "power3",
      });
      gsap.to(el.querySelector(".svc-arrow"), {
        x: 0,
        duration: 0.4,
        ease: "power3",
      });
    };
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <a
      ref={card}
      href="#contacto"
      className="svc-card group relative flex flex-col gap-6 overflow-hidden bg-ink-950 p-8 md:p-10"
    >
      <span className="svc-bg pointer-events-none absolute inset-0 bg-brand-glow opacity-0" />
      <div className="relative flex items-start justify-between">
        <span className="svc-icon text-white">
          <Icon name={service.icon} className="h-10 w-10" />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone-300">
          {service.n}
        </span>
      </div>

      <div className="relative">
        <h3 className="h-display text-2xl text-white md:text-3xl">{service.title}</h3>
        <p className="mt-3 max-w-[36ch] text-sm text-bone-300">{service.excerpt}</p>
      </div>

      <div className="relative mt-auto flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {service.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-300"
            >
              {t}
            </span>
          ))}
        </div>
        <span className="svc-arrow text-brand">
          <Icon name="arrow" className="h-5 w-5" />
        </span>
      </div>
    </a>
  );
}
