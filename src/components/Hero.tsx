import heroImage from '../assets/hero-image.png';
import { MessageCircle } from 'lucide-react';

interface HeroProps {
  onWhatsAppClick: () => void;
}

export default function Hero({ onWhatsAppClick }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
  Consigue más pacientes con una página web que sí convierte
</h1>

<p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
  Creación de páginas web para médicos enfocadas en generar consultas reales por WhatsApp
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
              Hablar por WhatsApp
            </button>
          </div>

          <div className="hidden md:flex justify-center items-center">
  <img
    src={heroImage}
    alt="Página web médica optimizada para conseguir pacientes"
    className="w-full max-w-lg object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
  />
</div>
        </div>
      </div>
    </section>
  );
}
