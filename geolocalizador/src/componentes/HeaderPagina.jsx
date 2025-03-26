import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HeaderPagina() {
  const [menuVisible, setMenuVisible] = useState(false);

  const cambiarVisibilidadMenu = () => {
    setMenuVisible(!menuVisible);
  }

  return (
    <header className="flex items-center bg-[#36b83c] pt-16 pb-10 w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="flex w-full items-center justify-between px-4">
        <div className="flex-1 text-center">
          <h1 className="font-bold cursor-pointer text-4xl md:text-5xl lg:text-6xl font-roboto text-white">
            <a href="">OMNIANIMALLS</a>
          </h1>
        </div>

        <div className="absolute right-10">
          {!menuVisible && (
            <img 
              src="/home.svg" 
              className="w-10 h-10 cursor-pointer transition-transform duration-100 hover:scale-110" 
              onClick={cambiarVisibilidadMenu} 
              alt="Menu"
            />
          )}
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 bg-[#36b83c]/85 border border-gray-200 rounded-md shadow-lg w-full max-w-xs mt-2 text-white h-screen flex flex-col items-center justify-start transform transition-transform duration-500 ease-in-out
          ${menuVisible ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <img 
          src="/home.svg" 
          className="w-10 h-10 cursor-pointer transition-transform duration-100 hover:scale-110 mt-10" 
          onClick={cambiarVisibilidadMenu} 
          alt="Menu"
        />
        <ul className="p-2 mt-10">
          <li className="p-2 hover:bg-[#453c5c] rounded-md cursor-pointer" >Iniciar Sesión</li>
          <li className="p-2 hover:bg-[#453c5c] rounded-md cursor-pointer">Registrarse</li>
        </ul>
      </div>
    </header>
  );
}

export default HeaderPagina;
