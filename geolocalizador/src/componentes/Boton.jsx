import React from "react";

function Boton({ texto, padding, color, redireccion }) {
  return (
    <div>
      <button
        className={`bg-[#e6ff2b] p-${padding} font-bold rounded-full shadow-xs hover:bg-[#a3af4a] hover:scale-105 transition-all duration-500`}
      >
        {texto}
      </button>
    </div>
  );
}

export default Boton;
