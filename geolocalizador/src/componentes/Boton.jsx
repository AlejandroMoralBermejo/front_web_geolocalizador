import React from "react";
import { useNavigate } from "react-router-dom";

function Boton({ texto, redireccion }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(redireccion);
  };

  return (
    <div className="relative group">
      {/* Contorno animado girando */}
      <div className="absolute inset-0 rounded-full border-2 border-accent-primary opacity-50 animate-spin-slow group-hover:opacity-100 pointer-events-none"></div>

      <button
        onClick={handleClick}
        className="relative z-10 bg-accent-primary px-5 py-2 font-bold rounded-full shadow-md hover:bg-accent-hover hover:scale-105 hover:shadow-lg transition-all duration-300 text-black"
      >
        {texto}
      </button>
    </div>
  );
}

export default Boton;
