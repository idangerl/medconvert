"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import FinalCTA from "@/components/FinalCTA";
import ComparisonSection from "@/components/ComparisonSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+59169894933";
    const message = encodeURIComponent(
      "Hola, quiero empezar a recibir más pacientes con una página web. ¿Me puedes ayudar?",
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

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