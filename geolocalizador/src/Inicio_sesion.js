import "./App.css";
import Header from "./componentes/Header";
import Login from "./componentes/Login";
import "./index.css";
// import Boton from "./componentes/Boton";

function Inicio_sesion() {
  return (
    <div className="bg-gradient-to-b from-[#2c3e50] to-[#1e3a5f] min-h-screen">
      <Login />
    </div>
  );
}

export default Inicio_sesion;
