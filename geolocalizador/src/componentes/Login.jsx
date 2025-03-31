import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const users = [{ username: "root", password: "root" }];

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const validUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (validUser) {
      alert("Login exitoso");
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } else {
      alert("Username o password incorrectos");
      setError("Ha salido mal");
      localStorage.clear();
    }
  };

  return (
    <div className="group relative transition-all duration-500">
      {/* Glow animado alrededor del contenedor al hacer hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 group-hover:blur-md bg-accent-primary transition-all duration-500 animate-glow border border-accent-primary z-0" />

      {/* Contenedor principal */}
      <div className="relative bg-white/30 backdrop-blur-md rounded-xl p-8 w-96 text-gray-900 border border-white/50 shadow-xl z-10 transition-all duration-500">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 bg-white/50 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary placeholder-gray-600"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-white/50 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary placeholder-gray-600"
          />
        </div>

        <div className="flex items-center justify-between mt-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-accent-primary" />
            <span className="text-sm text-gray-800">Remember me</span>
          </label>
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>

        <button
          onClick={handleLogin}
          className="w-full mt-4 py-2 bg-accent-primary hover:bg-accent-hover hover:scale-105 transition-all duration-500 text-black font-semibold rounded-md"
        >
          LOGIN
        </button>

        <p className="text-center text-sm mt-4 text-gray-800">
          New here?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
