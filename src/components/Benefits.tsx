import { MessageCircle, Smartphone, TrendingUp, Shield } from 'lucide-react';

export default function Benefits() {
  const benefits = [
  {
    icon: TrendingUp,
    title: 'Más pacientes escribiéndote',
    description: 'Personas interesadas te contactan directamente para agendar una consulta.'
  },
  {
    icon: MessageCircle,
    title: 'Contacto inmediato y sin fricción',
    description: 'El paciente puede escribirte en segundos, sin formularios ni pasos innecesarios.'
  },
  {
    icon: Shield,
    title: 'Una imagen que genera confianza',
    description: 'Transmites profesionalismo desde el primer momento, aumentando la probabilidad de que te elijan.'
  },
  {
    icon: Smartphone,
    title: 'Funciona perfecto en celular',
    description: 'La mayoría de pacientes te buscarán desde su teléfono, y todo está optimizado para eso.'
  }
];

  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">
 Lo que vas a conseguir con tu página
</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
  Una página pensada para algo simple: que más personas te escriban y se conviertan en pacientes.
</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-6 p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center">
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
