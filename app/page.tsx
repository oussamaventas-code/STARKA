import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Experience } from "@/components/sections/Experience";
import { Insurances } from "@/components/sections/Insurances";
import { CarSales } from "@/components/sections/CarSales";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { QualityGuarantee } from "@/components/sections/QualityGuarantee";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Experience />
      <Insurances />
      <CarSales />
      <VideoShowcase />
      <QualityGuarantee />
      <Testimonials />
      <Faq />
      <CtaFinal />
      <Footer />
    </>
  );
}
