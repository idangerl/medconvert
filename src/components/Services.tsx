import { LayoutGrid as Layout, MessageCircle, Search, Zap } from 'lucide-react';

export default function Services() {
  const services = [
  {
    icon: Layout,
    title: 'Una página pensada para atraer pacientes',
    description: 'Diseñada específicamente para tu especialidad y enfocada en generar consultas reales.'
  },
  {
    icon: MessageCircle,
    title: 'Contacto directo en un solo clic',
    description: 'El paciente puede escribirte fácilmente sin formularios ni pasos innecesarios.'
  },
  {
    icon: Search,
    title: 'Te encuentran cuando te buscan',
    description: 'Optimizada para aparecer en Google cuando alguien busca tu servicio.'
  },
  {
    icon: Zap,
    title: 'Funciona perfecto en cualquier dispositivo',
    description: 'Carga rápido y se adapta a celulares, donde la mayoría de pacientes te buscan.'
  }
];

  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
  <h2 className="text-3xl md:text-4xl font-bold mb-4">
   Todo lo que necesitas para empezar a recibir pacientes
  </h2>
  <p className="text-lg text-blue-100 max-w-2xl mx-auto">
    Te dejo todo listo para que los pacientes te encuentren y te escriban sin complicaciones.
  </p>
</div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
