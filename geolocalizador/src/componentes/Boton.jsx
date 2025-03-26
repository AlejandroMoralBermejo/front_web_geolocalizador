import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para redirigir

function Boton({ texto, padding, color, redireccion }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(redireccion);
  };

  return (
    <div>
      <button
        className={`bg-[#e6ff2b] p-${padding} font-bold rounded-full shadow-xs hover:bg-[#a3af4a] hover:scale-105 transition-all duration-500`}
        onClick={handleClick}
      >
        {texto}
      </button>
    </div>
  );
}

export default Boton;
