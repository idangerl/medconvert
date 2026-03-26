import { MessageCircle, Smartphone, TrendingUp, Shield } from 'lucide-react';

export default function Benefits() {
  const benefits = [
  {
    icon: TrendingUp,
    title: 'Más consultas reales',
    description: 'Convierte visitantes en pacientes que te escriben directamente para agendar una consulta'
  },
  {
    icon: MessageCircle,
    title: 'Contacto inmediato por WhatsApp',
    description: 'Recibe mensajes de pacientes interesados al instante, sin formularios complicados'
  },
  {
    icon: Shield,
    title: 'Imagen profesional',
    description: 'Transmite confianza con una página clara y moderna que refleja la calidad de tu atención'
  },
  {
    icon: Smartphone,
    title: 'Optimizado para celulares',
    description: 'Tus pacientes podrán contactarte fácilmente desde su celular, donde ocurre la mayoría de búsquedas'
  }
];

  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
 Beneficios que te ayudan a conseguir más pacientes
</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
  Todo lo que necesitas para atraer más pacientes y convertir visitas en consultas reales
</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-6 p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
