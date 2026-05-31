import { MagneticButton } from '@/components/ui/MagneticButton';

export default function NotFound() {
  return (
    <div className="relative isolate flex min-h-screen flex-col items-center justify-center bg-ink-950 text-center">
      {/* Grid background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines opacity-20" />

      {/* Subtle glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bosch-glow opacity-10 blur-3xl"
      />

      <div className="relative z-10 px-6">
        {/* Large 404 */}
        <h1 className="font-display text-[clamp(8rem,30vw,20rem)] font-extrabold leading-none text-white/[0.04] select-none">
          404
        </h1>

        {/* Main headline */}
        <p className="-mt-12 font-display text-3xl font-bold text-white md:-mt-20 md:text-5xl">
          Esta página no existe
        </p>

        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-md text-bone-300 md:text-lg">
          Parece que te has perdido. Vuelve al taller.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <MagneticButton href="/" variant="primary">
            Volver al inicio
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
