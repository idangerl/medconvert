import { AlertCircle, TrendingDown, Users } from 'lucide-react';

export default function Problem() {
  const problems = [
  {
    icon: TrendingDown,
    title: 'No tienes una forma clara de captar pacientes',
    description: 'Sin una página optimizada, dependes solo de recomendaciones o redes sociales.'
  },
  {
    icon: Users,
    title: 'Pierdes pacientes interesados',
    description: 'Personas que buscan tu servicio no encuentran cómo contactarte rápidamente.'
  },
  {
    icon: AlertCircle,
    title: 'Tu presencia online no genera resultados',
    description: 'Tener redes o información no es suficiente si no convierten en consultas reales.'
  }
];
  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">
            Si no tienes una página optimizada, estás perdiendo pacientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sin una página clara y enfocada en convertir, los pacientes no saben cómo contactarte y terminan yéndose con otra opción.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <problem.icon className="w-8 h-8 text-blue-500" />
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
