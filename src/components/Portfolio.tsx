import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  return (
    <section className="py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">
            Así podría verse la página de tu consulta
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Diseños simples, claros y enfocados en lograr lo más importante: que
            los pacientes te escriban.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ejemplos reales de páginas diseñadas para consultas como la tuya
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="h-64 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🦷</div>
                <h3 className="text-2xl font-bold">Clínica Dental (La Paz)</h3>
                <p className="text-blue-100 mt-2">
                  Ortodoncia y estética dental
                </p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Todo está diseñado para que quien visite la página termine
                escribiendo para agendar una consulta.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <span>Ver ejemplo</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="h-64 bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🧠</div>
                <h3 className="text-2xl font-bold">
                  Psicóloga (Consultorio privado)
                </h3>
                <p className="text-teal-100 mt-2">
                  Terapia y acompañamiento emocional
                </p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Un diseño claro y cercano que facilita que el paciente dé el
                paso y te escriba.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <span>Ver ejemplo</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
