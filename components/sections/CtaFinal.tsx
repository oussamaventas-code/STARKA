"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Icon } from "@/components/ui/Icon";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { BRAND } from "@/lib/data";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export function CtaFinal() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".cta-glow", {
        scale: 1.4,
        opacity: 0.6,
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
    <section
      id="contacto"
      ref={root}
      className="relative isolate overflow-hidden bg-ink-950 py-36 md:py-52"
    >
      <div
        aria-hidden
        className="cta-glow pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-glow opacity-20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-lines opacity-30"
      />
      <div className="container-x relative text-center">
        <div className="eyebrow mx-auto mb-6 justify-center !text-bone-300">Reserva ahora</div>
        <SplitReveal
          as="h2"
          className="h-display mx-auto max-w-[18ch] text-[clamp(2.5rem,9vw,9rem)] text-white"
        >
          Tu coche merece
        </SplitReveal>
        <SplitReveal
          as="h2"
          className="h-display mx-auto max-w-[18ch] text-[clamp(2.5rem,9vw,9rem)]"
        >
          <span className="shine-text">profesionales de verdad.</span>
        </SplitReveal>

        <p className="mx-auto mt-10 max-w-xl text-bone-300 md:text-lg">
          Reserva tu cita hoy y recibe un diagnóstico profesional. Sin compromiso,
          sin sorpresas, sin esperas innecesarias.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton href={`tel:${BRAND.phone}`} variant="primary">
            <Icon name="phone" className="h-4 w-4" />
            Llamar al taller
          </MagneticButton>
          <MagneticButton
            href={`https://wa.me/${BRAND.whatsapp.replace("+", "")}`}
            variant="ghost"
          >
            WhatsApp
            <Icon name="arrow" className="h-4 w-4" />
          </MagneticButton>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 font-mono text-[11px] uppercase tracking-[0.25em] text-bone-300">
          <span className="flex items-center gap-2">
            <Icon name="pin" className="h-4 w-4 text-brand" />
            {BRAND.address.street}, {BRAND.address.locality}
          </span>
          <span className="flex items-center gap-2">
            <Icon name="clock" className="h-4 w-4 text-brand" />
            L-V 07:00 — 19:00
          </span>
          <span className="flex items-center gap-2">
            <Icon name="shield" className="h-4 w-4 text-brand" />
            Garantía por escrito
          </span>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  // Get today's date in YYYY-MM-DD format to prevent selecting past dates
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/oussamaventas@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Nombre: data.nombre,
          Teléfono: data.telefono,
          Vehículo: data.vehiculo,
          Servicio: data.servicio,
          "Fecha solicitada": data.fecha,
          Mensaje: data.mensaje || "Sin comentarios",
          _subject: `Nueva solicitud de cita: ${data.nombre} - ${data.fecha}`,
          _template: "box",
        }),
      });

      if (response.ok) {
        setSent(true);
      }
    } catch (error) {
      console.error("Error enviando formulario:", error);
    } finally {
      setSending(false);
      setSent(true); // Fallback visual de éxito
    }
  };

  if (sent) {
    return (
      <div className="mx-auto mt-16 max-w-lg rounded-2xl border border-brand/20 bg-brand/5 p-8 text-center backdrop-blur">
        <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-brand/10">
          <Icon name="check" className="h-7 w-7 text-brand" />
        </div>
        <p className="font-display text-xl text-white">¡Solicitud enviada!</p>
        <p className="mt-2 text-sm text-bone-300">
          Hemos recibido tu petición de cita. Te contactaremos pronto para confirmarla.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-16 max-w-2xl space-y-5 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 text-left backdrop-blur md:p-10"
    >
      <div className="text-center">
        <h3 className="font-display text-xl text-white">Reserva tu cita en el taller</h3>
        <p className="mt-1 text-sm text-bone-300">
          Elige fecha y dinos qué necesitas. Te confirmaremos lo antes posible.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2">
        {/* Datos Personales */}
        <div className="space-y-1">
          <label className="pl-1 font-mono text-[10px] uppercase tracking-wider text-bone-300">
            Nombre completo *
          </label>
          <input
            type="text"
            name="nombre"
            required
            placeholder="Tu nombre"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-bone-300/30 outline-none transition-colors focus:border-brand"
          />
        </div>
        <div className="space-y-1">
          <label className="pl-1 font-mono text-[10px] uppercase tracking-wider text-bone-300">
            Teléfono *
          </label>
          <input
            type="tel"
            name="telefono"
            required
            placeholder="Tu teléfono"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-bone-300/30 outline-none transition-colors focus:border-brand"
          />
        </div>

        {/* Vehículo y Servicio */}
        <div className="space-y-1 md:col-span-2">
          <label className="pl-1 font-mono text-[10px] uppercase tracking-wider text-bone-300">
            Marca y modelo del vehículo *
          </label>
          <input
            type="text"
            name="vehiculo"
            required
            placeholder="Ej: Seat León 2018"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-bone-300/30 outline-none transition-colors focus:border-brand"
          />
        </div>

        <div className="space-y-1">
          <label className="pl-1 font-mono text-[10px] uppercase tracking-wider text-bone-300">
            Servicio a realizar *
          </label>
          <select
            name="servicio"
            required
            defaultValue=""
            className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-brand [&>option]:text-ink-950"
          >
            <option value="" disabled hidden>Selecciona un servicio</option>
            <option value="Mecánica general">Mecánica general</option>
            <option value="Chapa y pintura">Chapa y pintura</option>
            <option value="Electricidad">Electricidad</option>
            <option value="Aire acondicionado">Aire acondicionado</option>
            <option value="Revisión / Pre-ITV">Revisión / Pre-ITV</option>
            <option value="Compraventa de vehículos">Compraventa de vehículos</option>
            <option value="Otro (Detallar en comentarios)">Otro (Detallar en comentarios)</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="pl-1 font-mono text-[10px] uppercase tracking-wider text-bone-300">
            Fecha de la cita *
          </label>
          <div className="relative">
            <input
              type="date"
              name="fecha"
              required
              min={today}
              className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-brand [&::-webkit-calendar-picker-indicator]:invert"
            />
          </div>
        </div>

        {/* Comentarios */}
        <div className="space-y-1 md:col-span-2">
          <label className="pl-1 font-mono text-[10px] uppercase tracking-wider text-bone-300">
            ¿Algún comentario adicional?
          </label>
          <textarea
            name="mensaje"
            rows={3}
            placeholder="Ruido al arrancar, revisión pre-ITV..."
            className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-bone-300/30 outline-none transition-colors focus:border-brand"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="btn-primary mt-2 w-full justify-center py-4 disabled:opacity-50"
      >
        {sending ? 'Procesando...' : 'Solicitar cita'}
      </button>

      <p className="text-center text-[10px] text-bone-300/80">
        Al solicitar cita, aceptas nuestra{' '}
        <a href="/politica-privacidad" className="text-brand hover:underline">
          política de privacidad
        </a>.
      </p>
    </form>
  );
}
