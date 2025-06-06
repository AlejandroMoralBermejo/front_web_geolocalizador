import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import Header from "./componentes/Header";
import { useEffect } from "react";
import WelcomePage from "./componentes/WelcomePage";
import Boton from "./componentes/Boton";
import InicioSesion from "./Inicio_sesion";

function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const location = useLocation();

  // Si el usuario no está autenticado, lo redirige a "/Inicio_sesion"
  if (!isAuthenticated) {
    return <Navigate to="/Inicio_sesion" state={{ from: location }} replace />;
  }

  return children;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <>
                <Header />
                <WelcomePage />
                <div className="mt-16 gap-4 mx-auto w-full h-auto flex flex-row justify-center items-center">
                  <Boton
                    texto="frfrerdededededeedededed"
                    padding={4}
                    redireccion="/Inicio_sesion"
                  />
                  <Boton
                    texto="Registrarse"
                    padding={4}
                    redireccion="/Registro"
                  />
                </div>
              </>
            </PrivateRoute>
          }
        />
        <Route path="/Inicio_sesion" element={<InicioSesion />} />
        <Route path="/Registro" element={<h1>Registro</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
