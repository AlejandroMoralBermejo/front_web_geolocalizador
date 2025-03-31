import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-sm text-white bg-[#2F3E2E] py-4 px-6 backdrop-blur-md border-t border-white/10 shadow-inner">
      Página creada por{" "}
      <span className="text-accent-primary font-medium">
        Ignacio de Loyola Díaz Jiménez
      </span>{" "}
      y{" "}
      <span className="text-accent-primary font-medium">
        Alejandro Moral Bermejo
      </span>{" "}
      © 2025
    </footer>
  );
};

export default Footer;
