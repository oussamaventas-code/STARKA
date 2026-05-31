import { BRAND } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import Link from "next/link";
import { FooterMarquee } from "@/components/ui/FooterMarquee";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-ink-900">
      {/* Giant brand line */}
      <FooterMarquee />

      <div className="container-x py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display text-3xl tracking-normal text-white">
              {BRAND.name}
            </div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-brand">
              Grupo CGA · Taller multimarca
            </div>
            <p className="mt-6 max-w-sm text-bone-300">
              Más de 24 años de experiencia en mecánica, chapa, pintura y compraventa de
              vehículos. Trato directo, precios competitivos y la confianza de siempre.
            </p>

            <div className="mt-8 flex gap-3">
              {[
                { href: BRAND.social.instagram, label: "IG" },
                { href: BRAND.social.facebook, label: "FB" },
                { href: BRAND.social.google, label: "G" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-300 transition-colors hover:border-brand/50 hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone-300">
              Contacto
            </h4>
            <ul className="mt-5 space-y-3 text-white">
              <li className="flex items-start gap-3">
                <Icon name="phone" className="mt-1 h-4 w-4 text-brand" />
                <a href={`tel:${BRAND.phone}`} className="hover:text-brand-glow">
                  {BRAND.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="pin" className="mt-1 h-4 w-4 text-brand" />
                <span>
                  {BRAND.address.street}
                  <br />
                  {BRAND.address.postalCode} {BRAND.address.locality}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="clock" className="mt-1 h-4 w-4 text-brand" />
                <div className="text-sm text-bone-300">
                  {BRAND.hours.map((h) => (
                    <div key={h.day}>
                      <span className="text-white">{h.day}:</span> {h.time}
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone-300">
              Ubicación
            </h4>
            <div className="mt-5 aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.06]">
              <iframe
                title="Ubicación Starka Motor"
                src="https://maps.google.com/maps?q=Starka+Motor+Carril+los+U%C3%B1as+162+30009+La+Albatalia+Murcia&z=16&output=embed"
                className="h-full w-full grayscale invert-[0.92]"
                loading="lazy"
              />
            </div>
            <a
              href={`https://maps.google.com/?q=Starka+Motor,+${BRAND.address.street},+${BRAND.address.postalCode}+${BRAND.address.locality}`}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 inline-flex items-center gap-2 text-sm text-bone-200 hover:text-brand"
            >
              Cómo llegar
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="hairline mt-16 space-y-6 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.25em]">
            <Link href="/aviso-legal" className="text-bone-300 transition-colors hover:text-brand">Aviso Legal</Link>
            <Link href="/politica-privacidad" className="text-bone-300 transition-colors hover:text-brand">Privacidad</Link>
            <Link href="/politica-cookies" className="text-bone-300 transition-colors hover:text-brand">Cookies</Link>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.25em] text-bone-300 md:flex-row">
            <span>© {new Date().getFullYear()} {BRAND.name}. Todos los derechos reservados.</span>
            <span>Diseñado en Murcia · Grupo CGA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
