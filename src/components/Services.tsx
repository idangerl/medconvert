import { LayoutGrid as Layout, MessageCircle, Search, Zap } from 'lucide-react';

export default function Services() {
  const services = [
  {
    icon: Layout,
    title: 'Diseño de landing page',
    description: 'Página diseñada según tu especialidad para atraer pacientes y facilitar el contacto'
  },
  {
    icon: MessageCircle,
    title: 'Integración con WhatsApp',
    description: 'Botón directo para que los pacientes te escriban fácilmente desde la página'
  },
  {
    icon: Search,
    title: 'SEO básico',
    description: 'Optimización para que te encuentren en Google cuando buscan tus servicios'
  },
  {
    icon: Zap,
    title: 'Página rápida y responsive',
    description: 'Carga rápida y diseño adaptado a celulares, donde la mayoría de pacientes te buscan'
  }
];

  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
  <h2 className="text-3xl md:text-4xl font-bold mb-4">
   Todo lo que necesitas para empezar a recibir pacientes desde internet
  </h2>
  <p className="text-lg text-blue-100 max-w-2xl mx-auto">
    Una solución completa para tener presencia profesional en internet y recibir más consultas
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
