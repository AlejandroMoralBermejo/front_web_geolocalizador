import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderPagina from './componentes/HeaderPagina';
import BodyPagina from './componentes/BodyPagina';
import LogIn from './LogIn';

function App() {
  return (
    <div>
      <HeaderPagina/>
      <BodyPagina/>
    </div>
  );
}

export default App;
