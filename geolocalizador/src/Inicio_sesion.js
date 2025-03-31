import "./App.css";
import Login from "./componentes/Login";
import "./index.css";

function Inicio_sesion() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#C9D6BD] to-[#597D60]">
      <div className="relative group transition-all duration-500">
        <div className="absolute inset-0 w-[500px] h-[500px] rounded-full bg-[#A9D18E] blur-3xl opacity-0 group-hover:opacity-30 transition-all duration-500 scale-110 -z-10" />
        <Login />
      </div>
    </div>
  );
}

export default Inicio_sesion;
