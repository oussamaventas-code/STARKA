"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Icon } from "@/components/ui/Icon";
import Image from "next/image";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const CARS = [
  "/images/car_golf_1779995075103.png",
  "/images/car_seat_1779995088482.png",
  "/images/car_audi_a3_1779995103599.png",
];

export function CarSales() {
  const root = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % CARS.length);
    }, 4000); // 4 seconds per image
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".sales-bg", {
        scale: 1.1,
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-ink-950 py-32">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-sm border border-white/[0.06] bg-ink-900 p-8 md:p-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="sales-bg absolute inset-0 bg-gradient-to-br from-ink-800 to-ink-950 opacity-50" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_var(--brand)_0%,_transparent_50%)] opacity-10 mix-blend-screen" />
            <div className="absolute inset-0 grid-lines opacity-20" />
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="eyebrow mb-5">Compra · Venta</div>
              <SplitReveal as="h2" className="title-2 text-white">
                Vehículos de
              </SplitReveal>
              <SplitReveal as="h2" className="title-2 text-bone-300/80">
                ocasión premium.
              </SplitReveal>
              <p className="mt-6 max-w-md text-bone-300">
                No solo reparamos coches, también seleccionamos las mejores unidades del mercado.
                Cada vehículo a la venta pasa por una exhaustiva revisión de 100 puntos en nuestro
                taller antes de ser entregado. Compra con la tranquilidad de un taller certificado.
              </p>
              
              <div className="mt-10">
                <MagneticButton href="/vehiculos" variant="primary">
                  Ver stock disponible
                  <Icon name="arrow" className="h-4 w-4" />
                </MagneticButton>
              </div>
            </div>

            <div className="hidden lg:block relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-white/10 bg-white/[0.02] shadow-2xl">
               {CARS.map((src, i) => (
                 <div 
                   key={src}
                   className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${current === i ? 'opacity-100' : 'opacity-0'}`}
                 >
                   <Image 
                     src={src}
                     alt="Vehículo de ocasión premium en Starka Motor"
                     fill
                     className="object-cover object-center"
                     sizes="(max-width: 1024px) 100vw, 50vw"
                   />
                 </div>
               ))}
               <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent opacity-80" />
               <div className="absolute bottom-6 right-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white">
                 STARKA SELECTION
               </div>
               
               {/* Indicators */}
               <div className="absolute bottom-6 left-6 flex gap-2">
                 {CARS.map((_, i) => (
                   <div 
                     key={i} 
                     className={`h-1 rounded-full transition-all duration-500 ${current === i ? 'w-6 bg-brand' : 'w-2 bg-white/20'}`}
                   />
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
