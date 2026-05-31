"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND } from "@/lib/data";
import { cn } from "@/lib/cn";

const LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#experiencia", label: "Taller" },
  { href: "#testimonios", label: "Reseñas" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div className="container-x">
          <div
            className={cn(
              "flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 md:px-7",
              scrolled
                ? "glass shadow-glow-sm"
                : "border border-transparent bg-transparent"
            )}
          >
            <Link
              href="#top"
              className="group flex items-center gap-3"
              aria-label={BRAND.name}
            >
              <Logo />
              <div className="hidden flex-col leading-none md:flex">
                <span className="text-[15px] font-semibold tracking-normal">
                  Starka Motor
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone-300">
                  Grupo CGA
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="group relative text-sm text-bone-200/80 transition-colors hover:text-white"
                >
                  {l.label}
                  <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-brand-glow transition-transform duration-500 group-hover:scale-x-100" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${BRAND.phone}`}
                className="hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-bone-200 transition-colors hover:border-brand/50 hover:text-white md:inline-flex"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-brand/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                {BRAND.phoneDisplay}
              </a>
              <a href="#contacto" className="btn-primary !py-2 !px-5 !text-xs">
                Pedir cita
              </a>
              <button
                aria-label="Menú"
                onClick={() => setOpen((v) => !v)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 lg:hidden"
              >
                <div className="flex flex-col gap-1.5">
                  <span
                    className={cn(
                      "h-px w-5 bg-white transition-all",
                      open && "translate-y-[3px] rotate-45"
                    )}
                  />
                  <span
                    className={cn(
                      "h-px w-5 bg-white transition-all",
                      open && "-translate-y-[3px] -rotate-45"
                    )}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-ink-950/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x flex h-full flex-col justify-center gap-6 pt-24">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="h-display text-[15vw] leading-none text-white"
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="mt-8 flex flex-col gap-3 font-mono text-xs uppercase tracking-[0.2em] text-bone-300">
                <a href={`tel:${BRAND.phone}`} className="transition-colors hover:text-white">{BRAND.phoneDisplay}</a>
                <span>{BRAND.address.street}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Logo() {
  return (
    <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-white/10 bg-ink-900">
      <span className="absolute inset-0 bg-brand-glow opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      <span className="relative font-display text-lg font-bold tracking-normal text-white">
        SM
      </span>
      <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand" />
    </span>
  );
}
