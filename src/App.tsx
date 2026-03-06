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
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-starka-gray border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-semibold hover:text-starka-red transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:968297000" 
                className="block w-full text-center bg-starka-red py-4 rounded-xl font-bold"
              >
                Llamar: 968 29 70 00
              </a>
            </div>
          </motion.div>
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
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=2000" 
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
      img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1200',
      className: 'md:col-span-2 md:row-span-2'
    },
    {
      title: 'Chapa y Pintura',
      desc: 'Acabados impecables con cabina de pintura presurizada y laboratorio de color propio.',
      icon: Paintbrush,
      img: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80&w=1200',
      className: 'md:col-span-2 md:row-span-1'
    },
    {
      title: 'Electricidad',
      desc: 'Especialistas en sistemas electrónicos, baterías y climatización.',
      icon: Zap,
      img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1200',
      className: 'md:col-span-1 md:row-span-1'
    },
    {
      title: 'Venta Ocasión',
      desc: 'Vehículos revisados en 100 puntos críticos.',
      icon: Car,
      img: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800',
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
              className={`group relative rounded-3xl overflow-hidden border border-white/5 bg-starka-gray/20 ${service.className}`}
            >
              <img 
                src={service.img} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
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
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000" 
              alt="Taller Starka Motor" 
              className="rounded-3xl shadow-2xl border border-white/10 relative z-10"
              referrerPolicy="no-referrer"
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
                    src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                    className="w-12 h-12 rounded-full border-4 border-starka-dark"
                    alt="Cliente satisfecho"
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

const Contact = () => {
  return (
    <section id="contacto" className="py-32 bg-starka-gray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">¿DÓNDE <span className="text-starka-red">ESTAMOS?</span></h2>
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
                    <span className="text-starka-red">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex space-x-4">
              {['facebook', 'instagram', 'twitter'].map(social => (
                <a 
                  key={social}
                  href="#" 
                  className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-starka-red transition-colors group"
                >
                  <Users className="w-5 h-5 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          <div className="h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.341457194684!2d-1.132884923444!3d37.9926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63821000000000%3A0x0!2zMzfCsDU5JzMzLjQiTiAxwrAwNyc1OC40Ilc!5e0!3m2!1ses!2ses!4v1710000000000!5m2!1ses!2ses" 
              className="w-full h-full grayscale invert border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
      <Contact />
      <Footer />
      
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
