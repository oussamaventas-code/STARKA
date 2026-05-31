import { ScrollMarquee } from "@/components/ui/ScrollMarquee";

export function Marquee() {
  return (
    <section className="border-y border-white/[0.06] bg-ink-900 py-8">
      <ScrollMarquee
        items={[
          "Grupo CGA",
          "Mecánica General",
          "Chapa y Pintura",
          "Electricidad",
          "Aire Acondicionado",
          "La Albatalía · Murcia",
        ]}
      />
    </section>
  );
}
