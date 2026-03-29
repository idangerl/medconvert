import { CheckCircle, Zap, Target } from "lucide-react";
import solutionImage from "../assets/solution-image.png";

export default function Solution() {
  return (
    <section className="py-16 md:py-20 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-6">
              Una página diseñada para conseguirte pacientes
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Cada elemento está pensado para que quien visite tu página termine
              escribiéndote.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Diseñada para que te escriban
                  </h3>
                  <p className="text-gray-600">
                    No es una página informativa, está pensada para generar
                    consultas reales.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Optimizada para celulares
                  </h3>
                  <p className="text-gray-600">
                    La mayoría de pacientes te buscarán desde su teléfono, y
                    todo funciona perfecto ahí.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Contacto directo y sencillo
                  </h3>
                  <p className="text-gray-600">
                    Con un solo clic, el paciente puede escribirte sin
                    complicaciones.
                  </p>
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

            <h3 className="text-2xl font-bold text-blue-500 mb-4 text-center">
              En pocos días puedes empezar a recibir consultas
            </h3>

            <p className="text-gray-600 text-center">
              Una página simple, clara y enfocada en lograr una sola cosa: que
              los pacientes te contacten.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
