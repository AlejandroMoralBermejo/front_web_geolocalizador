import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (ruta) => {
    if (location.pathname !== ruta) {
      navigate(ruta);
    } else if (ruta !== "/") {
      navigate("/");
    }
  };

  const botones = [
    { text: "Inicio", path: "/" },
    { text: "Conócenos", path: "/conocenos" },
    { text: "Catálogo", path: "/catalogo" },
  ];

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex gap-6 px-8 py-3 bg-gradient-to-r from-[#2C3E50] to-[#1E3A5F] text-white rounded-full shadow-xl backdrop-blur-md bg-opacity-70 border border-[#6EE7B7] transition-all duration-300">
        {botones.map(({ text, path }, idx) => (
          <button
            key={idx}
            onClick={() => handleNavigation(path)}
            className="relative px-4 py-1 font-semibold tracking-wide rounded-full overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-300 transform scale-0 bg-lime-400 group-hover:scale-100 group-hover:blur-sm opacity-30 rounded-full"></span>
            <span className="relative z-10 group-hover:text-lime-300 transition-all duration-300">
              {text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
