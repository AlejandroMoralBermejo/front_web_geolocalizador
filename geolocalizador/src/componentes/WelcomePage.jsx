import React from "react";

const WelcomePage = () => {
  return (
    <div className="mt-32 sm:mt-40 gap-6 flex flex-col justify-center items-center flex-1 text-center px-4 animate-fade-in">
      <h1 className="max-w-xl mx-auto font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-white mb-6 text-balance leading-tight">
        <span className="text-white block">Bienvenid@ a</span>
        <span className="text-[#e6ff2b] block">geolocalizer</span>
      </h1>
      <p className="max-w-md mx-auto text-sm sm:text-base md:text-lg font-normal text-slate-300 mb-4 text-balance leading-relaxed">
        "Conectamos ubicaciones y personas, facilitando la exploración y el
        acceso a información en tiempo real. Potenciamos la experiencia de
        navegar con precisión y facilidad."
      </p>
    </div>
  );
};

export default WelcomePage;
