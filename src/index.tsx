import React from 'react';
import ReactDOM from 'react-dom/client'; // Usando a versão correta do ReactDOM para v18
import './index.css'; // Importando os estilos principais
import Router from './routes'; // Importando o Router para controlar as rotas

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router /> {/* Substituindo o App por Router */}
  </React.StrictMode>
);
