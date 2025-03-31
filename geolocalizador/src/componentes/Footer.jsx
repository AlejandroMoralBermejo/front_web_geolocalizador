import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6 mt-20 text-center text-sm text-slate-400 bg-transparent backdrop-blur-md">
      <p>
        Página creada por{" "}
        <span className="text-lime-400 font-semibold">
          Ignacio de Loyola Díaz Jiménez
        </span>{" "}
        y{" "}
        <span className="text-lime-400 font-semibold">
          Alejandro Moral Bermejo
        </span>{" "}
        © 2025
      </p>
    </footer>
  );
};

export default Footer;
