import type { Metadata } from 'next';
import Image from 'next/image';
import { Icon } from "@/components/ui/Icon";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
  title: 'Vehículos en Stock | Starka Motor',
  description: 'Descubre nuestra selección de vehículos de ocasión premium. Revisados en 100 puntos y garantizados.',
};

const STOCK = [
  {
    id: 1,
    brand: "Volkswagen",
    model: "Golf 1.5 eTSI Life",
    year: "2022",
    price: "24.500 €",
    km: "34.500 km",
    hp: "130 CV",
    transmission: "Automático",
    fuel: "Microhíbrido",
    image: "/images/car_golf_1779995075103.png",
    tag: "Recién revisado",
  },
  {
    id: 2,
    brand: "SEAT",
    model: "Leon 1.5 TSI FR",
    year: "2021",
    price: "18.900 €",
    km: "52.000 km",
    hp: "150 CV",
    transmission: "Manual",
    fuel: "Gasolina",
    image: "/images/car_seat_1779995088482.png",
    tag: "1 Año Garantía",
  },
  {
    id: 3,
    brand: "Audi",
    model: "A3 Sportback 35 TFSI S-Line",
    year: "2023",
    price: "31.500 €",
    km: "18.000 km",
    hp: "150 CV",
    transmission: "Automático",
    fuel: "Gasolina",
    image: "/images/car_audi_a3_1779995103599.png",
    tag: "Oportunidad",
  }
];

export default function VehiculosPage() {
  return (
    <div className="bg-ink-950 pb-24 pt-32 md:pt-40">
      <div className="container-x">
        {/* Header */}
        <div className="mb-16 md:mb-24 max-w-3xl">
          <div className="eyebrow mb-6">Starka Selection</div>
          <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl mb-6">
            Stock de Vehículos Premium.
          </h1>
          <p className="text-lg text-bone-300">
            Cada vehículo de nuestra exposición ha sido seleccionado rigurosamente y ha superado
            una exhaustiva revisión de 100 puntos en nuestro taller. Compra con la máxima tranquilidad.
          </p>
        </div>

        {/* Grid de vehículos */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {STOCK.map((car) => (
            <div key={car.id} className="group relative flex flex-col overflow-hidden rounded-sm border border-white/[0.06] bg-ink-900 transition-all hover:border-brand/50">
              {/* Etiqueta */}
              <div className="absolute left-4 top-4 z-10 rounded-sm bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                {car.tag}
              </div>
              
              {/* Imagen */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-950">
                <Image
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 text-sm font-medium text-brand">
                  {car.year}
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-1">
                  {car.brand}
                </h3>
                <div className="text-lg text-bone-200 mb-6 font-medium">
                  {car.model}
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-y-4 gap-x-2 border-y border-white/[0.06] py-4 mb-6">
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-bone-400 mb-1">Kilómetros</span>
                    <span className="text-sm text-bone-200">{car.km}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-bone-400 mb-1">Potencia</span>
                    <span className="text-sm text-bone-200">{car.hp}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-bone-400 mb-1">Cambio</span>
                    <span className="text-sm text-bone-200">{car.transmission}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-bone-400 mb-1">Combustible</span>
                    <span className="text-sm text-bone-200">{car.fuel}</span>
                  </div>
                </div>

                {/* Footer del card */}
                <div className="mt-auto flex items-center justify-between">
                  <div className="font-display text-2xl font-bold text-white">
                    {car.price}
                  </div>
                  <a 
                    href="https://wa.me/34661849442" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/[0.05] text-white transition-colors hover:bg-brand"
                  >
                    <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer info */}
        <div className="mt-16 rounded-sm border border-brand/20 bg-brand/5 p-8 text-center md:mt-24">
          <h4 className="font-display text-xl text-white mb-2">¿No encuentras lo que buscas?</h4>
          <p className="text-bone-300 max-w-2xl mx-auto mb-6">
            Trabajamos bajo pedido. Cuéntanos qué vehículo estás buscando y nosotros nos encargamos 
            de localizarlo, revisarlo y traértelo con todas las garantías de Starka Motor.
          </p>
          <MagneticButton href="https://wa.me/34661849442" variant="outline">
            Encargar vehículo
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
