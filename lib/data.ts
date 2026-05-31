export const BRAND = {
  name: "Starka Motor",
  shortName: "SM",
  tagline: "Grupo CGA · Taller multimarca · La Albatalía",
  phone: "+34 968 29 70 00",
  phoneDisplay: "968 29 70 00",
  whatsapp: "+34968297000",
  email: "info@starkamotor.es",
  address: {
    street: "Carril los Uñas, 162",
    locality: "La Albatalía, Murcia",
    region: "Región de Murcia",
    postalCode: "30009",
    country: "ES",
  },
  geo: {
    lat: 37.9986,
    lng: -1.1508,
  },
  url: "https://starkamotor.es",
  hours: [
    { day: "Lunes - Viernes", time: "07:00 — 19:00" },
    { day: "Sábado", time: "Cerrado" },
    { day: "Domingo", time: "Cerrado" },
  ],
  social: {
    instagram: "https://instagram.com/starkamotor",
    facebook: "https://facebook.com/starkamotor",
    google: "https://g.page/starkamotor",
  },
  legal: {
    companyName: "STARKA MOTOR S.L.",
    cif: "B73107146",
    legalForm: "Sociedad Limitada",
    cnae: "4520 - Mantenimiento y reparación de vehículos de motor",
    founded: "19-12-2000",
  },
};

export const STATS = [
  { value: "24", suffix: "+", label: "Años de experiencia" },
  { value: "12.000", suffix: "+", label: "Vehículos reparados" },
  { value: "4.5", suffix: "★", label: "Valoración Google" },
  { value: "81", suffix: "+", label: "Reseñas verificadas" },
];

export const SERVICES = [
  {
    id: "mecanica",
    n: "01",
    title: "Mecánica general",
    excerpt:
      "Reparación integral del motor, distribución, embragues y todo lo que tu vehículo necesite. Más de 24 años de experiencia avalan nuestro trabajo.",
    icon: "wrench",
    tags: ["Motor", "Distribución", "Embrague"],
  },
  {
    id: "chapa",
    n: "02",
    title: "Chapa y pintura",
    excerpt:
      "Reparación de carrocería, golpes, abolladuras y pintado completo o parcial. Acabados de calidad profesional.",
    icon: "shield",
    tags: ["Carrocería", "Pintura", "Golpes"],
  },
  {
    id: "electricidad",
    n: "03",
    title: "Electricidad",
    excerpt:
      "Sistemas eléctricos, baterías, alternadores, iluminación y electrónica del vehículo. Diagnosticamos donde otros cambian piezas a ciegas.",
    icon: "ecu",
    tags: ["Batería", "Alternador", "Cableado"],
  },
  {
    id: "aire",
    n: "04",
    title: "Aire acondicionado",
    excerpt:
      "Carga, reparación de fugas y mantenimiento completo del sistema de climatización. Soluciones definitivas, no parches.",
    icon: "diagnosis",
    tags: ["Carga A/C", "Fugas", "Climatización"],
  },
  {
    id: "vehiculos-usados",
    n: "05",
    title: "Venta de vehículos",
    excerpt:
      "Compraventa de vehículos usados revisados y garantizados. Importación y exportación de automóviles y complementos.",
    icon: "check",
    tags: ["Usado", "Nuevo", "Alternativo"],
  },
  {
    id: "revisiones",
    n: "06",
    title: "Revisiones y Pre-ITV",
    excerpt:
      "Mantenimiento preventivo y revisión completa para pasar la ITV sin sorpresas. Tu coche siempre a punto.",
    icon: "tire",
    tags: ["Pre-ITV", "Revisión", "Mantenimiento"],
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Diagnóstico",
    body: "Examinamos tu vehículo a fondo y te explicamos qué necesita. Sin tecnicismos innecesarios.",
  },
  {
    step: "02",
    title: "Presupuesto claro",
    body: "Te entregamos un presupuesto detallado con opciones: pieza usada, nueva o alternativa. Tú decides.",
  },
  {
    step: "03",
    title: "Reparación profesional",
    body: "Técnicos con más de 24 años de experiencia. Cada reparación con la garantía de un trabajo bien hecho.",
  },
  {
    step: "04",
    title: "Entrega y garantía",
    body: "Te lo devolvemos probado y con garantía por escrito. Tu satisfacción es nuestro mejor aval.",
  },
];

export const DIFFERENTIATORS = [
  {
    title: "Precios competitivos",
    body: "Opciones de piezas usadas, nuevas o alternativas para que elijas lo que mejor se adapte a tu bolsillo.",
  },
  {
    title: "24 años de experiencia",
    body: "Desde el año 2000 reparando coches en Murcia. Conocemos cada marca, cada modelo, cada problema.",
  },
  {
    title: "Trato directo y honrado",
    body: "Hablas con el mecánico que toca tu coche. Sin intermediarios, sin presupuestos inflados.",
  },
  {
    title: "Grupo CGA",
    body: "Formamos parte de un grupo de talleres con recursos y conocimientos compartidos para darte el mejor servicio.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Laura Martínez",
    role: "Google · verificada",
    rating: 5,
    body: "Los descubrí por una recomendación, y puedo decir que he encontrado un taller fiable 100%. Precios super competitivos. Con opción de usado, nuevo o alternativo!",
  },
  {
    name: "Maria",
    role: "Google · verificada",
    rating: 5,
    body: "Me arreglaron el aire acondicionado perfectamente, después de estar en varios talleres mareándome y pagando reparaciones que no duraban mucho, por fin me lo han solucionado. Muchas gracias. Volveré para que seáis mi taller para todo.",
  },
  {
    name: "Joaquin Bascuñana García",
    role: "Google · verificada",
    rating: 5,
    body: "Era mi primera vez y me ha asombrado su profesionalidad y buen hacer. Merece la pena.",
  },
  {
    name: "Poker",
    role: "Google · verificada",
    rating: 5,
    body: "Servicio excelente. Llevé hace poco a arreglar mi Xsara y el personal fue muy agradable, la reparación rápida y un precio gratamente sorprendente. Servicio 10/10, sin duda volveré.",
  },
  {
    name: "JAVIER VALERO",
    role: "Google · verificada",
    rating: 5,
    body: "Gente muy honrada y profesionales. Los presupuestos se ciñen a la reparación. Recomendable 100%.",
  },
  {
    name: "Paolo De angelis",
    role: "Google · verificada",
    rating: 5,
    body: "Súper agradecida!!! Ha sido un regalazo encontrarlos!",
  },
  {
    name: "Pascual Ruiz Morales",
    role: "Google · verificada",
    rating: 5,
    body: "Grandes profesionales, taller de confianza. Es el único sitio al que llevo mi coche con tranquilidad. Atentos y asesoran cualquier duda.",
  },
  {
    name: "JOSE HUERTAS",
    role: "Google · verificada",
    rating: 5,
    body: "Un servicio estupendo y rápido y a un precio más que razonable y un trato directo y personal, lo recomiendo sin duda.",
  },
  {
    name: "Pepe Albaladejo",
    role: "Google · verificada",
    rating: 5,
    body: "Son GENIALES. Prontitud. Muy buen servicio y atención. Puntualidad y seriedad. Y PRECIOS más que razonables.",
  },
  {
    name: "Matthias Vera",
    role: "Google · verificada",
    rating: 5,
    body: "Muy profesional y un trato magnífico. Lo recomiendo.",
  },
];

export const FAQ = [
  {
    q: "¿Trabajáis todas las marcas?",
    a: "Sí. Somos un taller multimarca con experiencia en vehículos europeos, asiáticos y americanos. Da igual tu coche, lo reparamos.",
  },
  {
    q: "¿Tenéis opciones de piezas económicas?",
    a: "Por supuesto. Te ofrecemos opciones de pieza usada, nueva u alternativa para que elijas lo que mejor se ajuste a tu presupuesto. Siempre con garantía.",
  },
  {
    q: "¿Cuánto tarda una reparación?",
    a: "Depende del trabajo, pero siempre te informamos del plazo antes de empezar. Para revisiones y mantenimiento, normalmente en el mismo día.",
  },
  {
    q: "¿Hacéis compraventa de coches?",
    a: "Sí. Compraventa de vehículos usados, importación y exportación. Todos los coches que vendemos pasan una revisión completa.",
  },
];
