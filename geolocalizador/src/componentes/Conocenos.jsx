import React from "react";
import imagen from "../images/conocenos.png";


const Conocenos = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center bg-gradient-to-b from-[#C9D6BD] to-[#597D60] text-white animate-fade-in-up">

      {/* IMAGEN */}
      <img
        src={imagen}
        alt="Geolocalizer equipo"
        className="w-full max-w-2xl rounded-2xl shadow-xl mb-8 border border-white/20"
      />

      {/* DESCRIPCIÓN */}
      <p className="max-w-3xl text-lg md:text-xl text-white/90 leading-relaxed">
        En <span className="text-accent-primary font-semibold">Geolocalizer</span> investigamos y desarrollamos
        soluciones avanzadas de{" "}
        <span className="text-accent-primary font-semibold">geolocalización para ganado</span>, desde nuestro centro en{" "}
        <span className="text-accent-primary font-semibold">Rabanales 21</span>, ubicado en el{" "}
        <span className="text-accent-primary font-semibold">Campus de Rabanales</span>, Córdoba.
        <br /><br />
        Nuestro equipo está enfocado en ofrecer a los ganaderos herramientas para{" "}
        <span className="text-accent-primary font-semibold">monitorizar</span> en tiempo real el estado y ubicación de sus animales, 
        conocer sus <span className="text-accent-primary font-semibold">constantes vitales</span> y responder con rapidez ante cualquier incidencia.
        <br /><br />
        Y esto es solo el comienzo... se vienen{" "}
        <span className="text-accent-primary font-semibold">muchas más innovaciones</span> que revolucionarán la forma de cuidar el ganado.
      </p>

      {/* TEXTO INSPIRADOR */}
      <blockquote className="mt-10 text-accent-primary font-medium italic text-lg">
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
