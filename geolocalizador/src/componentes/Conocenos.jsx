import React from "react";
import imagen from "../images/conocenos.png";

const Conocenos = () => {
  return (
    <div className="min-h-screen mt-32 px-6 py-16 bg-gradient-to-b from-[#C9D6BD] to-[#597D60] text-white animate-fade-in-up flex flex-col items-center justify-center text-center">
      
      {/* TÍTULO */}
      <h1 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-[#3b4f3b] to-[#7d996d] text-transparent bg-clip-text drop-shadow-lg">
        ¿Qué, Por qué y Cómo lo hacemos?
      </h1>

      {/* CONTENEDOR */}
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">

        {/* IMAGEN */}
        <img
          src={imagen}
          alt="Geolocalizer equipo"
          className="w-full max-w-md rounded-2xl shadow-xl border border-white/20"
        />

        {/* TEXTO */}
        <div className="text-left max-w-xl">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            En <span className="text-accent-primary font-semibold">Geolocalizer</span> nos preguntamos:
            <br />
            <strong className="text-[#e6ff2b]">¿Cómo podemos mejorar la vida del ganadero?</strong>
            <br /><br />
            La respuesta fue clara: desarrollando tecnología para{" "}
            <span className="text-accent-primary font-semibold">geolocalización precisa y monitoreo animal</span> en tiempo real.
            <br /><br />
            Desde nuestro centro en <span className="text-accent-primary font-semibold">Rabanales 21</span>, trabajamos con{" "}
            <span className="text-accent-primary font-semibold">sensores, módulos GPS y ESP32</span> para ofrecer soluciones robustas, accesibles y adaptadas a las necesidades reales del campo.
          </p>
        </div>
      </div>

      {/* FRASE FINAL */}
      <blockquote className="mt-12 text-accent-primary font-medium italic text-lg max-w-2xl">
        "La tranquilidad del ganadero empieza con saber dónde está lo que más le importa."
      </blockquote>

      {/* CONTACTO */}
      <p className="mt-8 text-sm text-white/70">
        Contacto:{" "}
        <a
          href="mailto:info@geolocalizer.dev"
          className="underline hover:text-accent-primary transition"
        >
          info@geolocalizer.dev
        </a>
      </p>
    </div>
  );
};

export default Conocenos;
