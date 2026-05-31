import Link from "next/link";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-ink-950 pb-24 pt-32">
      {/* Back link */}
      <div className="container-x mb-12">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-bone-300 transition-colors hover:text-bosch"
        >
          <span className="inline-block h-px w-6 bg-bone-300 transition-all group-hover:w-10 group-hover:bg-bosch" />
          Volver al inicio
        </Link>
      </div>

      {/* Legal content */}
      <article className="container-x">
        <div className="mx-auto max-w-3xl">
          <div className="prose-legal space-y-8 text-bone-200 leading-relaxed [&_h1]:font-display [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:tracking-normal [&_h1]:text-white [&_h1]:mb-4 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-normal [&_h2]:text-white [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-bone-200 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:text-bone-200 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:text-bone-200 [&_a]:text-bosch [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-bosch-glow [&_strong]:text-white [&_strong]:font-semibold">
            {children}
          </div>
        </div>
      </article>

      {/* Bottom separator */}
      <div className="container-x mt-20">
        <div className="mx-auto max-w-3xl border-t border-white/[0.06] pt-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone-300">
            Última actualización: Mayo 2026
          </p>
        </div>
      </div>
    </div>
  );
}
