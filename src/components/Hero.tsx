import heroImage from "../assets/hero-image.png";
import { MessageCircle } from "lucide-react";

interface HeroProps {
  onWhatsAppClick: () => void;
}

export default function Hero({ onWhatsAppClick }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-10  px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-500 leading-tight mb-6">
              Consigue pacientes diariamente para agendar en tu consulta
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Creamos una página optimizada + estrategia para que pacientes reales te contacten todos los días
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Respuesta en menos de 24 horas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Sin compromiso</span>
              </div>
            </div>
            <button
              onClick={onWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg text-lg flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              Consigue más pacientes ahora
            </button>
          </div>

          <div className="relative flex justify-center items-center overflow-visible transition-transform duration-500 hover:scale-105">
  <img
    src={heroImage}
    alt="Página web médica optimizada para conseguir pacientes"
    className="
      w-full 
      md:w-[150%] 
      md:max-w-none 
      md:-mr-20 
      object-contain 
      md:translate-x-10
    "
  />

  {/* Difuminado inferior */}
  <div className="
    absolute bottom-0 left-0 
    w-full md:w-[150%] 
    h-32 
    bg-gradient-to-t from-blue-50 to-transparent 
    pointer-events-none
  "></div>
</div>
        </div>
      </div>
    </section>
  );
}
