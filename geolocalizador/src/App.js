import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import WelcomePage from "./componentes/WelcomePage";
import Boton from "./componentes/Boton";
import InicioSesion from "./Inicio_sesion";
import Conocenos from "./componentes/Conocenos";
import Catalogo from "./componentes/Catalogo";
import Layout from "./componentes/Layout";
import Registro from "./componentes/Registro";

function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const location = useLocation();

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
              <Layout>
                <WelcomePage />
                <div className="mt-16 gap-4 mx-auto w-full h-auto flex flex-col md:flex-row justify-center items-center px-4">
                  <Boton texto="Iniciar sesión" redireccion="/Inicio_sesion" />
                  <Boton texto="Registrarse" redireccion="/Registro" />
                </div>
              </Layout>
            </PrivateRoute>
          }
        />
        <Route path="/Inicio_sesion" element={<InicioSesion />} />
        <Route
          path="/Registro"
          element={
            <Layout>
              <Registro />
            </Layout>
          }
        />
        <Route
          path="/conocenos"
          element={
            <Layout>
              <Conocenos />
            </Layout>
          }
        />
        <Route
          path="/catalogo"
          element={
            <Layout>
              <Catalogo />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
