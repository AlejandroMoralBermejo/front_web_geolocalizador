import React from "react";
import dispositivo from "../images/dispositivo.png";
import iconos from "../images/iconostecnologias.png";

const Catalogo = () => {
  return (
    <div className="min-h-screen mt-32 px-6 py-16 bg-gradient-to-b from-[#C9D6BD] to-[#597D60] text-white animate-fade-in-up flex flex-col items-center">
      
      {/* TÍTULO */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#3b4f3b] to-[#7d996d] text-transparent bg-clip-text drop-shadow-lg">
        Tecnología que transforma el campo
      </h1>

      {/* IMAGEN PRINCIPAL */}
      <img
        src={dispositivo}
        alt="Dispositivo Geolocalizador"
        className="w-full max-w-2xl rounded-2xl shadow-xl mb-12 border border-white/20"
      />

      {/* DESCRIPCIÓN DE PRODUCTOS FUTUROS */}
      <div className="max-w-4xl text-white/90 text-lg md:text-xl leading-relaxed text-center mb-16">
        <p>
          En Geolocalizer estamos diseñando dispositivos portátiles equipados con <span className="text-accent-primary font-semibold">ESP32</span>, sensores biométricos, GPS de alta precisión y conectividad inalámbrica. 
        </p>
        <br />
        <p>
          El objetivo es ofrecer a los ganaderos sistemas que permitan conocer en tiempo real la ubicación, actividad, temperatura corporal y otras constantes vitales del animal.
        </p>
        <br />
        <p>
          Pronto lanzaremos una línea de productos con integración a plataformas web y móviles, que incluirá <span className="text-accent-primary font-semibold">notificaciones inteligentes</span> para alertas de escape, inactividad prolongada o comportamientos anómalos.
        </p>
      </div>

      {/* ICONOS DE TECNOLOGÍAS */}
      <img
        src={iconos}
        alt="Tecnologías utilizadas"
        className="w-full max-w-xl rounded-xl shadow-lg border border-white/20"
      />

      {/* CASOS PRÁCTICOS */}
      <div className="mt-16 max-w-4xl text-white/90 text-lg md:text-xl text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#e6ff2b]">¿Cómo lo usan los ganaderos?</h2>
        <ul className="list-disc list-inside space-y-3 text-left">
          <li>
            Localización inmediata de animales perdidos o fuera del perímetro.
          </li>
          <li>
            Detección temprana de enfermedades mediante variaciones en temperatura o actividad.
          </li>
          <li>
            Control de hábitos de alimentación y descanso.
          </li>
          <li>
            Seguimiento remoto desde móvil o PC, sin necesidad de estar presente.
          </li>
        </ul>
      </div>

      {/* PIE DE PÁGINA */}
      <p className="mt-12 text-sm text-white/70">
        ¿Quieres ser parte del futuro de la ganadería? Contáctanos y reserva tu equipo piloto.
      </p>
    </div>
  );
};

export default Catalogo;
