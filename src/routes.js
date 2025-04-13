import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from './pages/Cadastro/Cadastro';  // Importando o componente Cadastro
import Inicio from './pages/Inicio';  // Importando o componente Inicio
import Menu from './components/Menu';  // Importando o Menu
import ListaUsuario from './pages/Cadastro/ListaUsuario';  // Importando a página ListaUsuario
import Produto from './pages/Produto/Produto';  // Importando a página Produto

export default function AppRouter() {
  return (
    <Router>
      <div>
        {/* Colocando o Menu fora das rotas, para ser exibido em todas as páginas */}
        <Menu />

        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/produto' element={<Produto />} /> {/* Rota para Produto */}
          <Route path='/lista-usuario' element={<ListaUsuario />} /> {/* Rota para ListaUsuario */}
        </Routes>
      </div>
    </Router>
  );
}
