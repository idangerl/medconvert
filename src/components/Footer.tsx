import logo from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
  <div className="max-w-6xl mx-auto">
    <div className="grid md:grid-cols-3 gap-8 mb-8">
      <div>
        <div className="flex items-center gap-3 mb-4">
  <img 
    src={logo} 
    alt="MedConvert logo"
    className="w-20 h-20 object-contain"
  />
  <div className="flex flex-col leading-tight">
    <span className="text-lg font-bold">
      MedConvert
    </span>
    <span className="text-xs text-gray-400">
      Convierte visitas en pacientes
    </span>
  </div>
</div>
        <p className="text-gray-400">
          Páginas web para médicos enfocadas en conseguir más pacientes.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-4">Servicios</h3>
        <ul className="space-y-2 text-gray-400">
          <li>Diseño de landing page</li>
          <li>Integración con WhatsApp</li>
          <li>Optimización SEO básica</li>
          <li>Diseño responsive</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-4">Especialidades</h3>
        <ul className="space-y-2 text-gray-400">
          <li>Médicos generales</li>
          <li>Dentistas</li>
          <li>Psicólogos</li>
          <li>Especialistas</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
      <p>&copy; {currentYear} MedConvert. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>
  );
}
