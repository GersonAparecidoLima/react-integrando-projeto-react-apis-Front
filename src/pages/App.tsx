import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastro from '../pages/Cadastro/Cadastro'; // Importando o componente Cadastro
import Produto from '../pages/Produto/Produto'; // Importando o componente Produto
import ListaUsuario from '../pages/ListaUsuario/ListaUsuario'; // Importando o componente ListaUsuario
import Menu from '../components/Menu'; // Importando o componente Menu
import style from './App.module.scss'; // Importando o estilo do App

function App() {
  return (
    <Router>
      <div className={style.AppContainer}>
        {/* Usando o componente Menu */}
        <Menu />

        <Routes>
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/produto" element={<Produto />} />
          <Route path="/lista-usuario" element={<ListaUsuario />} />
          <Route path="/" element={<h1>Bem-vindo ao Meu Aplicativo</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
