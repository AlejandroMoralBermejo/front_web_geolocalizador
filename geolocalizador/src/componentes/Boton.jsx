import React from "react";
import { useNavigate } from "react-router-dom";

function Boton({ texto, redireccion }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(redireccion);
  };

  return (
    <div className="relative group">
      {/* Contorno animado */}
      <div className="absolute inset-0 rounded-full border-2 border-lime-400 opacity-50 animate-spin-slow group-hover:opacity-100 pointer-events-none"></div>

      <button
        onClick={handleClick}
        className="relative z-10 bg-[#e6ff2b] px-5 py-2 font-bold rounded-full shadow-md hover:bg-[#a3af4a] hover:scale-105 hover:shadow-lg transition-all duration-300 animate-fade-in text-black"
      >
        {texto}
      </button>
    </div>
  );
}

export default Boton;
