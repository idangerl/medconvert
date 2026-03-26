import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
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
      <Problem />
      <Solution />
      <div id="benefits">
        <Benefits />
      </div>
      <div id="services">
        <Services />
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

export default App;
