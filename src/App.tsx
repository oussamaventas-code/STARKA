import React, { useState, useEffect } from 'react';
import { 
  Wrench, 
  Paintbrush, 
  Zap, 
  Car, 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  ChevronDown, 
  Menu, 
  X, 
  CheckCircle2,
  ShieldCheck,
  Award,
  Users,
  ExternalLink,
  MessageSquare,
  Loader2,
  Send,
  Map
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import Chatbot from './components/Chatbot';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Reseñas', href: '#reseñas' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-starka-dark/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Car className="w-8 h-8 text-starka-red" />
            <span className="font-display font-bold text-2xl tracking-tighter">
              STARKA<span className="text-starka-red">MOTOR</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-semibold hover:text-starka-red transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:968297000" 
              className="bg-starka-red hover:bg-red-700 px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg shadow-red-500/20"
            >
              <Phone className="w-4 h-4" />
              <span>968 29 70 00</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-3 -mr-2 hover:bg-white/5 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[51] md:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-starka-dark z-[52] md:hidden shadow-2xl flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-white/5">
                <div className="flex items-center space-x-2">
                  <Car className="w-6 h-6 text-starka-red" />
                  <span className="font-display font-bold text-xl tracking-tighter">
                    STARKA<span className="text-starka-red">MOTOR</span>
                  </span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-white/5 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-8 px-6 space-y-2">
                {navLinks.map((link, i) => (
                  <motion.a 
                    key={link.name} 
                    href={link.href} 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5"
                  >
                    <span className="text-xl font-bold tracking-tight group-hover:text-starka-red transition-colors">
                      {link.name}
                    </span>
                    <ChevronDown className="w-5 h-5 -rotate-90 opacity-30 group-hover:opacity-100 group-hover:text-starka-red transition-all" />
                  </motion.a>
                ))}
              </div>

              <div className="p-6 space-y-4 border-t border-white/5 bg-white/2">
                <a 
                  href="tel:968297000" 
                  className="flex items-center justify-center space-x-3 w-full bg-starka-red py-4 rounded-2xl font-bold text-lg shadow-lg shadow-starka-red/20 active:scale-95 transition-transform"
                >
                  <Phone className="w-5 h-5" />
                  <span>968 29 70 00</span>
                </a>
                <div className="flex justify-center space-x-6 pt-2">
                  <div className="flex flex-col items-center text-gray-500">
                    <Clock className="w-5 h-5 mb-1" />
                    <span className="text-[10px] uppercase tracking-widest">L-V 8:00-20:00</span>
                  </div>
                  <div className="flex flex-col items-center text-gray-500">
                    <MapPin className="w-5 h-5 mb-1" />
                    <span className="text-[10px] uppercase tracking-widest">Murcia, ES</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=75&w=1200" 
          alt="Taller mecánico profesional" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-starka-dark via-starka-dark/80 to-starka-dark"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-starka-red/10 border border-starka-red/20 px-4 py-2 rounded-full mb-8">
            <span className="flex h-2 w-2 rounded-full bg-starka-red animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-starka-red">Abierto: Lunes a Viernes</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tighter">
            TU COCHE EN LAS <br />
            <span className="gradient-text">MEJORES MANOS</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl font-light leading-relaxed">
            Taller multimarca líder en Murcia. Especialistas en chapa, pintura, mecánica y electricidad. 
            Calidad certificada y atención personalizada desde 2009.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="tel:968297000" 
              className="px-10 py-5 bg-starka-red rounded-full font-bold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-2xl shadow-red-500/40 flex items-center justify-center space-x-3"
            >
              <Phone className="w-5 h-5" />
              <span>LLAMAR AHORA</span>
            </a>
            <a 
              href="#servicios" 
              className="px-10 py-5 border-2 border-white/20 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center"
            >
              Nuestros Servicios
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl">
            {[
              { label: 'Google Reviews', value: '4.5/5', icon: Star },
              { label: 'Reseñas Reales', value: '4,500+', icon: MessageSquare },
              { label: 'Años Experiencia', value: '15+', icon: Award },
              { label: 'Garantía Total', value: '100%', icon: ShieldCheck },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="glass-card p-4 rounded-2xl flex flex-col items-center md:items-start"
              >
                <stat.icon className="w-5 h-5 text-starka-red mb-2" />
                <div className="text-2xl font-display font-bold">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Mecánica General',
      desc: 'Desde mantenimientos preventivos hasta reparaciones complejas de motor y transmisión con diagnosis de última generación.',
      icon: Wrench,
      img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=75&w=800',
      className: 'md:col-span-2 md:row-span-2'
    },
    {
      title: 'Chapa y Pintura',
      desc: 'Acabados impecables con cabina de pintura presurizada y laboratorio de color propio.',
      icon: Paintbrush,
      img: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=75&w=800',
      className: 'md:col-span-2 md:row-span-1'
    },
    {
      title: 'Electricidad',
      desc: 'Especialistas en sistemas electrónicos, baterías y climatización.',
      icon: Zap,
      img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=75&w=600',
      className: 'md:col-span-1 md:row-span-1'
    },
    {
      title: 'Venta Ocasión',
      desc: 'Vehículos revisados en 100 puntos críticos.',
      icon: Car,
      img: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=75&w=600',
      className: 'md:col-span-1 md:row-span-1'
    }
  ];

  return (
    <section id="servicios" className="py-32 bg-starka-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-4 tracking-tighter">
              NUESTRAS <span className="text-starka-red">ESPECIALIDADES</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Ofrecemos una cobertura integral para su vehículo, combinando artesanía tradicional con la tecnología más avanzada del sector.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-2 text-starka-red font-bold uppercase tracking-widest text-xs">
              <span className="w-12 h-[1px] bg-starka-red"></span>
              <span>Excelencia Técnica</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[700px]">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden border border-white/5 bg-starka-gray/20 min-h-[400px] md:min-h-0 ${service.className}`}
            >
              <img 
                src={service.img} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-starka-dark via-starka-dark/60 to-transparent opacity-90"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-auto">
                  <div className="w-10 h-10 bg-starka-red/20 backdrop-blur-md border border-starka-red/30 rounded-xl flex items-center justify-center mb-4 transform -rotate-6 group-hover:rotate-0 transition-transform">
                    <service.icon className="w-5 h-5 text-starka-red" />
                  </div>
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-starka-red transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                  {service.desc}
                </p>
                
                <div className="mt-6 flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-white/0 group-hover:text-white/100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <span>Saber más</span>
                  <ChevronDown className="w-4 h-4 -rotate-90" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="nosotros" className="py-32 bg-starka-gray/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-starka-red/20 blur-3xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=75&w=800" 
              alt="Taller Starka Motor" 
              className="rounded-3xl shadow-2xl border border-white/10 relative z-10"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute -bottom-10 -right-10 glass-card p-8 rounded-3xl z-20 hidden md:block">
              <div className="text-4xl font-display font-bold text-starka-red">15+</div>
              <div className="text-xs uppercase tracking-widest font-bold text-gray-400">Años de Confianza</div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
              PASIÓN POR LA <br />
              <span className="text-starka-red">PERFECCIÓN</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              En Starka Motor S.L., entendemos que tu coche es más que un medio de transporte. 
              Es una inversión y una herramienta vital en tu día a día. Por eso, aplicamos 
              estándares de calidad de concesionario oficial con la cercanía de un taller de confianza.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Taller Multimarca', desc: 'Expertos en todas las marcas y modelos del mercado.' },
                { title: 'Recambios de Calidad', desc: 'Solo utilizamos piezas originales o certificadas.' },
                { title: 'Transparencia Total', desc: 'Presupuestos cerrados y explicación detallada de cada reparación.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="mt-1 bg-starka-red/20 p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-starka-red" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center space-x-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/48?img=${i + 10}`} 
                    className="w-12 h-12 rounded-full border-4 border-starka-dark"
                    alt="Cliente satisfecho"
                    loading="lazy"
                  />
                ))}
              </div>
              <div>
                <div className="flex text-yellow-500 mb-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">+4,500 Clientes Satisfechos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: 'Laura Martínez',
      text: 'Los descubrí por una recomendación, y puedo decir que he encontrado un taller fiable 100%. Precios super competitivos.',
      rating: 5,
      date: 'Hace 3 semanas'
    },
    {
      name: 'Pedro G.',
      text: 'Buenos profesionales con mucha experiencia, buen precio y, además, buenas personas. Totalmente recomendable.',
      rating: 5,
      date: 'Hace 2 meses'
    },
    {
      name: 'Maria S.',
      text: 'Me arreglaron el aire acondicionado perfectamente después de estar en varios talleres mareándome. ¡Por fin confianza!',
      rating: 5,
      date: 'Hace 5 meses'
    }
  ];

  return (
    <section id="reseñas" className="py-32 bg-starka-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">OPINIONES DE <span className="text-starka-red">CLIENTES</span></h2>
          <p className="text-gray-500 text-lg">Nuestra mejor publicidad es un cliente satisfecho.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 rounded-3xl relative"
            >
              <div className="flex text-starka-red mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-300 mb-8 italic leading-relaxed">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div className="font-bold">{review.name}</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">{review.date}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://www.google.com/search?q=STARKA+MOTOR+S.L+Murcia" 
            target="_blank" 
            className="inline-flex items-center space-x-2 text-starka-red hover:text-white transition-colors font-bold uppercase tracking-widest text-sm"
          >
            <span>Ver todas las reseñas en Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "¿Ofrecéis coche de sustitución?",
      a: "Sí, disponemos de una flota de coches de sustitución gratuitos para nuestros clientes mientras reparamos su vehículo (sujeto a disponibilidad)."
    },
    {
      q: "¿Trabajáis con todas las compañías de seguros?",
      a: "Trabajamos con todas las compañías aseguradoras del mercado. Somos taller distinguido y concertado con las principales mutuas."
    },
    {
      q: "¿Cuánto tiempo suele tardar una reparación de chapa y pintura?",
      a: "Depende del alcance de los daños, pero una reparación estándar suele tardar entre 3 y 5 días laborables."
    },
    {
      q: "¿Tienen garantía las reparaciones?",
      a: "Todas nuestras reparaciones cuentan con garantía por escrito. En pintura, utilizamos materiales de alta gama con garantía de por vida en el color."
    },
    {
      q: "¿Es necesario pedir cita previa?",
      a: "Para una mejor atención recomendamos pedir cita, especialmente para mecánica y diagnosis, aunque atendemos urgencias de forma inmediata."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-starka-dark relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4 tracking-tighter">
            PREGUNTAS <span className="text-starka-red">FRECUENTES</span>
          </h2>
          <p className="text-gray-500 text-lg">Resolvemos tus dudas más comunes sobre nuestros servicios y procesos.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="glass-card rounded-2xl border border-white/5 overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg pr-8">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-starka-red transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const payload = {
      ...formState,
      source: 'Formulario de Contacto Web',
      timestamp: new Date().toISOString()
    };

    try {
      // Intentamos el envío estándar
      const response = await fetch('https://n8n.srv1119749.hstgr.cloud/webhook/aa0c74a4-67ae-4196-8bd0-ab6abd5406aa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Error en la respuesta del servidor');

      setSubmitted(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.warn('Error en envío estándar, reintentando con modo permisivo...', error);
      
      try {
        // Si falla por CORS (común en webhooks), reintentamos con un envío "simple" (no-cors)
        // Esto permite que los datos lleguen aunque no podamos leer la respuesta
        await fetch('https://n8n.srv1119749.hstgr.cloud/webhook/aa0c74a4-67ae-4196-8bd0-ab6abd5406aa', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain',
          },
          body: JSON.stringify(payload),
        });

        // En modo no-cors no podemos verificar response.ok, pero asumimos éxito para el usuario
        setSubmitted(true);
        setFormState({ name: '', email: '', phone: '', message: '' });
      } catch (retryError) {
        console.error('Error crítico enviando formulario:', retryError);
        alert('Lo sentimos, hay un problema técnico con el formulario. Por favor, llámanos directamente al 968 29 70 00 para atenderte de inmediato.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-32 bg-starka-gray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 tracking-tighter">
                ¿DÓNDE <span className="text-starka-red">ESTAMOS?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12">Visítanos en nuestras instalaciones en La Albatalía, Murcia. Estaremos encantados de atenderte.</p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-starka-red/10 p-4 rounded-2xl">
                    <MapPin className="w-6 h-6 text-starka-red" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Dirección</h4>
                    <p className="text-gray-500">Carril los Uñas, 162<br />30009 La Albatalía, Murcia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-starka-red/10 p-4 rounded-2xl">
                    <Phone className="w-6 h-6 text-starka-red" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Teléfono</h4>
                    <a href="tel:968297000" className="text-2xl font-display font-bold hover:text-starka-red transition-colors">968 29 70 00</a>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-starka-red/10 p-4 rounded-2xl">
                    <Clock className="w-6 h-6 text-starka-red" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Horario</h4>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm text-gray-500">
                      <span>Lunes - Viernes:</span>
                      <span className="text-white">8:00 - 14:00 / 16:00 - 20:00</span>
                      <span>Sábados:</span>
                      <span className="text-white">9:00 - 14:00</span>
                      <span>Domingos:</span>
                      <span className="text-starka-red font-bold">Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[300px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
              {showMap ? (
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d786.0466595153605!2d-1.159194!3d37.9956032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6381bf167c0249%3A0x75659746e9d06577!2sSTARKA%20MOTOR%20S.L%20REPARACION%20GENERAL%20DEL%20AUTOMOVIL!5e0!3m2!1ses!2ses!4v1741287500000!5m2!1ses!2ses" 
                  className="w-full h-full grayscale invert border-0"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : (
                <div className="absolute inset-0 bg-starka-gray/40 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-16 bg-starka-red/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Map className="w-8 h-8 text-starka-red" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Mapa Interactivo</h4>
                  <p className="text-sm text-gray-500 mb-6 max-w-[200px]">Carga el mapa para ver nuestra ubicación exacta y obtener indicaciones.</p>
                  <button 
                    onClick={() => setShowMap(true)}
                    className="bg-starka-red hover:bg-red-700 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-lg shadow-red-500/20"
                  >
                    Cargar Mapa
                  </button>
                </div>
              )}
            </div>

            <div className="flex space-x-4">
              {['facebook', 'instagram', 'twitter'].map(social => (
                <a 
                  key={social}
                  href="#" 
                  className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-starka-red transition-colors group border border-white/5"
                >
                  <Users className="w-5 h-5 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[40px] border border-white/5 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-display text-3xl font-bold mb-2">ENVÍANOS UN <span className="text-starka-red">MENSAJE</span></h3>
              <p className="text-gray-500 mb-8">Responderemos a tu consulta en menos de 24 horas laborables.</p>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/10 border border-green-500/20 p-8 rounded-3xl text-center"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">¡Mensaje Enviado!</h4>
                  <p className="text-gray-400">Gracias por contactar con Starka Motor. Nos pondremos en contacto contigo muy pronto.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-starka-red font-bold uppercase tracking-widest text-sm hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Nombre Completo</label>
                      <input 
                        required
                        type="text" 
                        value={formState.name}
                        onChange={e => setFormState({...formState, name: e.target.value})}
                        className="w-full bg-starka-dark border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-starka-red transition-colors"
                        placeholder="Ej: Juan Pérez"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email</label>
                      <input 
                        required
                        type="email" 
                        value={formState.email}
                        onChange={e => setFormState({...formState, email: e.target.value})}
                        className="w-full bg-starka-dark border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-starka-red transition-colors"
                        placeholder="juan@ejemplo.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Teléfono</label>
                    <input 
                      required
                      type="tel" 
                      value={formState.phone}
                      onChange={e => setFormState({...formState, phone: e.target.value})}
                      className="w-full bg-starka-dark border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-starka-red transition-colors"
                      placeholder="600 000 000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Mensaje o Consulta</label>
                    <textarea 
                      required
                      rows={4}
                      value={formState.message}
                      onChange={e => setFormState({...formState, message: e.target.value})}
                      className="w-full bg-starka-dark border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-starka-red transition-colors resize-none"
                      placeholder="¿En qué podemos ayudarte?"
                    ></textarea>
                  </div>
                  <button 
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-starka-red hover:bg-red-700 py-5 rounded-2xl font-bold text-lg transition-all transform active:scale-[0.98] flex items-center justify-center space-x-3 shadow-xl shadow-red-500/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                      <>
                        <span>Enviar Solicitud</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-gray-600 text-center">
                    Al enviar este formulario, aceptas nuestra política de privacidad y protección de datos.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-starka-dark border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-8 md:mb-0">
            <Car className="w-6 h-6 text-starka-red" />
            <span className="font-display font-bold text-xl tracking-tighter">
              STARKA<span className="text-starka-red">MOTOR</span>
            </span>
          </div>
          
          <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>

          <div className="mt-8 md:mt-0 text-[10px] uppercase tracking-widest text-gray-600 font-bold">
            © 2024 Starka Motor S.L. | Murcia, España
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
      <Chatbot />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/34968297000" 
        target="_blank"
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center"
      >
        <MessageSquare className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
