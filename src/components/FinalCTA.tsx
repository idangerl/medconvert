import { MessageCircle, CheckCircle } from 'lucide-react';

interface FinalCTAProps {
  onWhatsAppClick: () => void;
}

export default function FinalCTA({ onWhatsAppClick }: FinalCTAProps) {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-blue-50 to-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
      Empieza a recibir más pacientes hoy
    </h2>
    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
      Te ayudo a tener una página que convierta visitas en consultas reales por WhatsApp.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
      <div className="flex items-center gap-2 text-gray-700">
        <CheckCircle className="w-5 h-5 text-green-600" />
        <span>Implementación rápida</span>
      </div>
      <div className="flex items-center gap-2 text-gray-700">
        <CheckCircle className="w-5 h-5 text-green-600" />
        <span>Optimizado para celulares</span>
      </div>
      <div className="flex items-center gap-2 text-gray-700">
        <CheckCircle className="w-5 h-5 text-green-600" />
        <span>Enfocado en generar pacientes</span>
      </div>
    </div>

    <button
      onClick={onWhatsAppClick}
      className="bg-green-500 hover:bg-green-600 text-white font-semibold px-10 py-5 rounded-lg text-xl flex items-center gap-3 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 mx-auto"
    >
      <MessageCircle className="w-7 h-7" />
      Escribir ahora por WhatsApp
    </button>

    <p className="text-gray-500 mt-6">
      Respuesta en menos de 24 horas
    </p>
  </div>
</section>
  );
}
