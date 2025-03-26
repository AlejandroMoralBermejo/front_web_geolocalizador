import React from "react";

const WelcomePage = () => {
  return (
    <div className="mt-40  gap-3 flex flex-col justify-center items-center flex-1 text-center px-4">
      <h1 className="max-w-lg mx-auto font-bold text-4xl md:text-6xl xl:text-6xl text-white mb-4">
        <span className="important-text text-white">Bienvenid@ a</span>
        <br />
        <span className="important-text text-[#e6ff2b]">geolocalizer</span>
      </h1>
      <p className="mt-12 max-w-md mx-auto text-sm md:text-lg font-normal text-slate-300 mb-6">
        "Conectamos Ubicaciones y Personas, Facilitando la Exploración y el
        Acceso a Información en Tiempo Real. Potenciamos la Experiencia de
        Navegar con Precisión y Facilidad."
      </p>
    </div>
  );
};

export default WelcomePage;
