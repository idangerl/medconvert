import { CheckCircle, Zap, Target } from 'lucide-react';
import solutionImage from '../assets/solution-image.png';

export default function Solution() {
  return (
    <section className="py-16 md:py-20 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Páginas simples que sí convierten
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
             Diseño páginas enfocadas en un solo objetivo: que los pacientes te escriban directamente por WhatsApp.
            </p>

           <div className="space-y-4">
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
      <Target className="w-5 h-5 text-white" />
    </div>
    <div>
      <h3 className="font-semibold text-gray-900 mb-1">Diseño enfocado en convertir</h3>
      <p className="text-gray-600">Cada elemento está pensado para que los visitantes se conviertan en pacientes</p>
    </div>
  </div>

  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
      <Zap className="w-5 h-5 text-white" />
    </div>
    <div>
      <h3 className="font-semibold text-gray-900 mb-1">Rápida y optimizada para celulares</h3>
      <p className="text-gray-600">Experiencia fluida en todos los dispositivos, especialmente en móviles</p>
    </div>
  </div>

  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
      <CheckCircle className="w-5 h-5 text-white" />
    </div>
    <div>
      <h3 className="font-semibold text-gray-900 mb-1">Integración con WhatsApp</h3>
      <p className="text-gray-600">Permite que los pacientes te contacten de forma directa y sin complicaciones</p>
    </div>
  </div>
</div>

          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
  <div className="mb-6 flex justify-center">
    <img
      src={solutionImage}
      alt="Sistema optimizado para conseguir pacientes"
      className="w-full max-w-xs md:max-w-sm object-contain transition-transform duration-500 hover:scale-105 bg-transparent"
    />
  </div>

  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
    La solución ideal para tu consulta
  </h3>

  <p className="text-gray-600 text-center">
    Una página enfocada en una sola cosa: convertir visitas en pacientes reales
  </p>
</div>
        </div>
      </div>
    </section>
  );
}
