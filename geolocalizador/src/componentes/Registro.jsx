import React, { useState } from "react";

const Registro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Las contraseñas no coinciden");
      return;
    }
    alert("Cuenta registrada con éxito (simulado)");
    // Aquí iría la lógica de registro real
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#C9D6BD] to-[#597D60] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/30 backdrop-blur-md rounded-xl p-8 w-full max-w-md text-gray-900 border border-white/50 shadow-xl animate-fade-in-up"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">
          Crear cuenta
        </h2>

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 bg-white/50 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary placeholder-gray-600"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 bg-white/50 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary placeholder-gray-600"
          required
        />
        <input
          type="password"
          placeholder="Confirmar contraseña"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="w-full mb-6 px-4 py-2 bg-white/50 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary placeholder-gray-600"
          required
        />

        <button
          type="submit"
          className="w-full py-2 bg-accent-primary hover:bg-accent-hover transition-all duration-300 text-black font-semibold rounded-md"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Registro;
