import { AlertCircle, TrendingDown, Users } from 'lucide-react';

export default function Problem() {
  const problems = [
  {
    icon: TrendingDown,
    title: 'Baja conversión',
    description: 'Tu página recibe visitas, pero los pacientes no te contactan ni agendan consultas'
  },
  {
    icon: Users,
    title: 'Pacientes no contactan',
    description: 'Los pacientes interesados no encuentran una forma clara y rápida de comunicarse contigo'
  },
  {
    icon: AlertCircle,
    title: 'Demasiada información, poca acción',
    description: 'El exceso de información confunde a los visitantes y hace que no den el siguiente paso'
  }
];
  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            La mayoría de páginas médicas no generan pacientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tener una página web no es suficiente. 
            Si no está optimizada, estás perdiendo pacientes todos los días.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <problem.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
