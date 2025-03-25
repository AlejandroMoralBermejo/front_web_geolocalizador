import "./App.css";
import Header from "./componentes/Header";
import WelcomePage from "./componentes/WelcomePage";
import Boton from "./componentes/Boton";
// import HeaderPagina from "./componentes/HeaderPagina";
// import BodyPagina from "./componentes/BodyPagina";

function App() {
  return (
    <div>
      <Header />
      <WelcomePage />
      <div className="mx-auto w-full h-auto mt-8 flex flex-row gap-8 justify-center items-center">
        <Boton texto={"Iniciar sesion"} padding={4} />
        <Boton texto={"Registrarse"} padding={4} />
      </div>
    </div>
  );
}

export default App;
