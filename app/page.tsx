"use client";

import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import Problem from "@/src/components/Problem";
import Solution from "@/src/components/Solution";
import Services from "@/src/components/Services";
import Portfolio from "@/src/components/Portfolio";
import FinalCTA from "@/src/components/FinalCTA";
import ComparisonSection from "@/src/components/ComparisonSection";
import Footer from "@/src/components/Footer";
import FloatingWhatsApp from "@/src/components/FloatingWhatsApp";

export default function Home() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+51969894933";
    const message = encodeURIComponent(
      "Hola, quiero empezar a recibir más pacientes con una página web. ¿Me puedes ayudar?"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  // ... resto de tu código de la función Home

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero onWhatsAppClick={handleWhatsAppClick} />
      <div id="problem">
        <Problem />
      </div>
      <div id="solucion">
        <Solution />
      </div>
      
      <div id="services">
        <Services />
      </div>
      <div id="comparison">
        <ComparisonSection />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <FinalCTA onWhatsAppClick={handleWhatsAppClick} />
      <Footer />
      <FloatingWhatsApp onClick={handleWhatsAppClick} />
    </div>
  );
}