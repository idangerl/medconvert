import { X, Check, ArrowRight } from 'lucide-react';

const negativeItems = [
  'Depende solo de recomendaciones',
  'Pocos pacientes nuevos',
  'Difícil de contactar',
  'Pierde oportunidades todos los días',
];

const positiveItems = [
  'Recibe pacientes constantemente',
  'Contacto directo por WhatsApp',
  'Más confianza desde el primer momento',
  'Más consultas agendadas',
];

function NegativeItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
        <X className="w-3 h-3 text-red-500" strokeWidth={3} />
      </span>
      <span className="text-gray-500 text-sm leading-relaxed">{text}</span>
    </li>
  );
}

function PositiveItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
        <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
      </span>
      <span className="text-gray-700 text-sm leading-relaxed font-medium">{text}</span>
    </li>
  );
}

export default function ComparisonSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500 leading-tight mb-4">
            ¿Por qué algunos médicos reciben{' '}
            <span className="text-green-500">pacientes</span> y otros no?
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            La diferencia está en cómo te encuentran y cómo pueden contactarte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-300 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200 flex items-center justify-center">
                <X className="w-4 h-4 text-red-400" strokeWidth={2.5} />
              </div>
              <h3 className="text-base font-semibold text-gray-500 uppercase tracking-wide">
                Sin presencia online
              </h3>
            </div>
            <ul className="space-y-4">
              {negativeItems.map((item) => (
                <NegativeItem key={item} text={item} />
              ))}
            </ul>
          </div>

          <div className="relative bg-white rounded-2xl shadow-md border border-emerald-200 p-8 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-t-2xl" />

            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Recomendado
              </span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-green-50 border border-emerald-200 flex items-center justify-center">
                <Check className="w-4 h-4 text-green-500" strokeWidth={2.5} />
              </div>
              <h3 className="text-base font-semibold text-green-500 uppercase tracking-wide">
                Con MedConvert
              </h3>
            </div>

            <ul className="space-y-4">
              {positiveItems.map((item) => (
                <PositiveItem key={item} text={item} />
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="group inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-95">
            Quiero empezar a recibir pacientes
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
