import React from "react";
import {
  Cpu,
  MapPin,
  Timer,
  Users,
  BookOpen,
  FlaskConical,
} from "lucide-react";

const secciones = [
  {
    icono: <FlaskConical className="w-6 h-6 text-[#637d57]" />,
    titulo: "Investigación",
    texto:
      "En Geolocalizer hemos trabajado intensamente en el diseño y desarrollo de dispositivos de geolocalización para ganado, ofreciendo soluciones innovadoras, eficaces y escalables.",
  },
  {
    icono: <Cpu className="w-6 h-6 text-[#637d57]" />,
    titulo: "Tecnología",
    texto:
      "Utilizamos ESP32 junto a módulos GPS, sensores biométricos y conectividad inalámbrica para monitorizar en tiempo real la ubicación, actividad y constantes vitales del animal.",
  },
  {
    icono: <Timer className="w-6 h-6 text-[#637d57]" />,
    titulo: "Tiempos",
    texto:
      "El desarrollo se llevó a cabo durante 4 meses con metodologías ágiles, documentación continua y prototipos iterativos.",
  },
  {
    icono: <Users className="w-6 h-6 text-[#637d57]" />,
    titulo: "Mentores",
    texto:
      "Contamos con el apoyo de profesores del Grado en Ingeniería de Software, especializados en sistemas embebidos y electrónica.",
  },
  {
    icono: <BookOpen className="w-6 h-6 text-[#637d57]" />,
    titulo: "Recursos",
    texto:
      "Utilizamos laboratorios de Rabanales 21 con kits de sensores, módulos GPS, impresoras 3D, software de simulación y entornos de programación como PlatformIO.",
  },
  {
    icono: <MapPin className="w-6 h-6 text-[#637d57]" />,
    titulo: "Ubicación",
    texto:
      "El proyecto se desarrolla en Rabanales 21, dentro del Campus Universitario de Córdoba.",
  },
];

const Investigacion = () => {
  return (
    <div className="min-h-screen mt-32 px-6 py-16 bg-gradient-to-b from-[#C9D6BD] to-[#597D60] text-white animate-fade-in-up">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#3b4f3b] to-[#7d996d] text-transparent bg-clip-text drop-shadow-lg">
        Investigación y Desarrollo
      </h1>

      <div className="grid gap-8 max-w-5xl mx-auto">
        {secciones.map((sec, idx) => (
          <div
            key={idx}
            className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group"
          >
            <div className="flex items-center gap-4 mb-2">
              {sec.icono}
              <h2 className="text-xl font-semibold text-[#637d57] group-hover:text-accent-primary transition">
                {sec.titulo}
              </h2>
            </div>
            <p className="text-white/90 leading-relaxed">{sec.texto}</p>
          </div>
        ))}
      </div>

      <p className="italic text-center mt-12 text-accent-primary font-medium text-lg">
        "Investigar es imaginar lo que aún no existe, y construirlo paso a paso con dedicación y propósito."
      </p>
    </div>
  );
};

export default Investigacion;
