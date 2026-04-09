import {
  Stethoscope,
  LayoutTemplate,
  Search,
  Users,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: "Analizamos tu consulta",
      description:
        "Entendemos tu especialidad, ubicación y cómo atraer pacientes en tu ciudad.",
    },
    {
      icon: LayoutTemplate,
      title: "Creamos tu página optimizada",
      description:
        "Diseñamos una página enfocada en que los pacientes te escriban fácilmente por WhatsApp.",
    },
    {
      icon: Search,
      title: "Te encuentran cuando te buscan",
      description:
        "Optimizamos tu presencia para que aparezcas cuando alguien necesita tu servicio.",
    },
    {
      icon: Users,
      title: "Empiezas a recibir pacientes",
      description:
        "Personas interesadas llegan a tu página y te escriben para agendar una consulta.",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cómo empezar a recibir pacientes en tu consulta
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Un proceso simple que te permite atraer pacientes y convertirlos en
            consultas reales en pocos días.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const gradients = [
              "from-blue-400 to-blue-500",
              "from-indigo-400 to-indigo-500",
              "from-purple-400 to-purple-500",
              "from-green-400 to-green-500",
            ];

            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                {/* STEP NUMBER */}
                <div className="text-white/40 text-sm mb-2 font-bold">
                  Paso {index + 1}
                </div>

                {/* ICON */}
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br ${gradients[index]}`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-blue-100 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* FOOTER */}
        <div className="text-center mt-10">
          <p className="text-xl md:text-2xl font-bold">
            En menos de 7 días puedes empezar a ver resultados
          </p>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mt-2">
            Nos encargamos de todo el proceso. Tú solo te enfocas en atender a tus pacientes.
          </p>
        </div>
      </div>
    </section>
  );
}