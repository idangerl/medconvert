import logo from '../assets/logo.png';
export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
  <img 
    src={logo} 
    alt="MedConvert logo"
    className="w-20 h-20 object-contain"
  />
  <div className="flex flex-col leading-tight">
    <span className="text-lg font-bold text-gray-900">
      MedConvert
    </span>
    <span className="text-xs text-gray-500">
      Convierte visitas en pacientes
    </span>
  </div>
</div>
          <nav className="hidden md:flex items-center gap-6">
  <a href="#benefits" className="text-gray-600 hover:text-blue-600 transition-colors">Beneficios</a>
  <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Servicios</a>
  <a href="#portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">Ejemplos</a>
</nav>
        </div>
      </div>
    </header>
  );
}
