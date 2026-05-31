import { BRAND } from "./data";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "@id": `${BRAND.url}/#business`,
  name: BRAND.name,
  image: `${BRAND.url}/images/hero-poster.svg`,
  url: BRAND.url,
  telephone: BRAND.phone,
  email: BRAND.email,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: BRAND.address.street,
    addressLocality: BRAND.address.locality,
    addressRegion: BRAND.address.region,
    postalCode: BRAND.address.postalCode,
    addressCountry: BRAND.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BRAND.geo.lat,
    longitude: BRAND.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "19:00",
    },
  ],
  sameAs: [BRAND.social.instagram, BRAND.social.facebook, BRAND.social.google],
  areaServed: {
    "@type": "City",
    name: "Murcia",
  },
  makesOffer: [
    "Mecánica general",
    "Chapa y pintura",
    "Electricidad del automóvil",
    "Aire acondicionado",
    "Compraventa de vehículos",
    "Revisiones y Pre-ITV",
  ].map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s },
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "81",
  },
};
