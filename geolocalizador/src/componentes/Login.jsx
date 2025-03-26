import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const users = [{ username: "root", password: "root" }];

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //   localStorage.clear();

  const handleLogin = () => {
    const validUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (validUser) {
      alert("Login exitoso");
      localStorage.setItem("isAuthenticated", "true"); // Corregido aquí
      navigate("/"); // Redirige al usuario a la página principal
    } else {
      alert("Username o password incorrectos");
      setError("Ha salido mal");
      localStorage.clear(); // Limpia localStorage en caso de error
    }
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-[#2c3e50] to-[#1e3a5f] min-h-screen">
      {/* Contenedor del formulario con efecto glassmorphism */}
      <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8 w-96 text-white">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

        {/* Campos de entrada */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 bg-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white/80"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white/80"
          />
        </div>

        {/* Checkbox + botón */}
        <div className="flex items-center justify-between mt-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-blue-500" />
            <span className="text-sm">Remember me</span>
          </label>
          <a href="#" className="text-sm text-blue-300 hover:underline">
            Forgot password?
          </a>
        </div>

        {/* Botón de inicio de sesión */}
        <button
          onClick={handleLogin}
          className="w-full mt-4 py-2 bg-[#e6ff2b] hover:bg-[#a3af4a] hover:scale-105 transition-all duration-500 text-black font-semibold rounded-md"
        >
          LOGIN
        </button>

        {/* Enlace de registro */}
        <p className="text-center text-sm mt-4">
          New here?{" "}
          <a href="#" className="text-blue-300 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
