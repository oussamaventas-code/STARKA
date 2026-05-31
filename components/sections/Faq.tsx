"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ } from "@/lib/data";
import { SplitReveal } from "@/components/ui/SplitReveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-ink-900 py-32 md:py-44">
      <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="eyebrow mb-5">06 · Dudas frecuentes</div>
          <SplitReveal
            as="h2"
            className="font-display text-4xl leading-tight tracking-normal text-white md:text-5xl"
          >
            Preguntas
          </SplitReveal>
          <SplitReveal
            as="h2"
            className="mt-2 font-display text-4xl leading-tight tracking-normal text-bone-300/80 md:text-5xl"
          >
            que ya tienes resueltas.
          </SplitReveal>
          <p className="mt-8 max-w-sm text-bone-300">
            Si tu duda no aparece aquí, llámanos o escríbenos. Te respondemos en menos de
            2 horas en horario de taller.
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]">
            {FAQ.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="border-b border-white/[0.06] last:border-b-0">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition-colors hover:bg-white/[0.02] md:px-8 md:py-7"
                  >
                    <span className="font-display text-lg text-white md:text-xl">
                      {f.q}
                    </span>
                    <span
                      className={`relative grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 transition-all ${
                        isOpen ? "rotate-45 bg-brand text-white" : "text-white"
                      }`}
                      aria-hidden
                    >
                      <span className="absolute block h-px w-3 bg-current" />
                      <span className="absolute block h-3 w-px bg-current" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-7 text-bone-300 md:px-8 md:pb-8 md:text-lg">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
