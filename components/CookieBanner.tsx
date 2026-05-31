'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('amm-cookies-accepted');
    if (!accepted) {
      // Delay showing the banner so it doesn't overlap the loader
      const timer = setTimeout(() => setShow(true), 4500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('amm-cookies-accepted', 'true');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed inset-x-0 bottom-0 z-[60] p-4 md:p-6"
        >
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 rounded-2xl border border-white/[0.08] bg-ink-900/90 px-6 py-5 backdrop-blur-xl md:flex-row md:gap-6">
            <p className="flex-1 text-sm text-bone-200">
              Utilizamos cookies propias y de terceros para mejorar tu experiencia.
              Al continuar navegando, aceptas nuestra{' '}
              <Link
                href="/politica-cookies"
                className="text-bosch underline underline-offset-4 hover:text-white"
              >
                política de cookies
              </Link>.
            </p>
            <div className="flex shrink-0 gap-3">
              <Link
                href="/politica-cookies"
                className="rounded-full border border-white/10 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-bone-300 transition-colors hover:border-white/30 hover:text-white"
              >
                Más información
              </Link>
              <button
                onClick={accept}
                className="rounded-full bg-bosch px-6 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white transition-all hover:bg-bosch-glow hover:shadow-lg hover:shadow-bosch/20"
              >
                Aceptar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
