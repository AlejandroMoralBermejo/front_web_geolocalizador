import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const users = [{ username: "root", password: "root" }];

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
      localStorage.clear();
    }
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-[#2c3e50] to-[#1e3a5f] min-h-screen">
      <div className="bg-white/10 backdrop-blur-xl rounded-lg shadow-2xl p-8 w-96 text-white animate-fade-in border border-lime-400/30 hover:shadow-lime-400 transition-all duration-700">
        <h2 className="text-2xl font-bold text-center mb-6 tracking-wider text-lime-300 drop-shadow-glow animate-pulse">
          INICIAR SESIÓN
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 bg-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400 placeholder-white/80 transition-all duration-300"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400 placeholder-white/80 transition-all duration-300"
          />
        </div>

        <div className="flex items-center justify-between mt-4">
          <label className="flex items-center space-x-2 text-sm">
            <input type="checkbox" className="accent-lime-500" />
            <span>Remember me</span>
          </label>
          <button className="text-sm text-lime-300 hover:underline">
            Forgot password?
          </button>
        </div>

        <button
          onClick={handleLogin}
          className="w-full mt-6 py-2 bg-lime-400 hover:bg-lime-500 hover:scale-105 transition-all duration-300 text-gray-900 font-bold rounded-full shadow-md shadow-lime-200"
        >
          LOGIN
        </button>

        <p className="text-center text-sm mt-6">
          New here?{" "}
          <button className="text-lime-300 hover:underline">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
