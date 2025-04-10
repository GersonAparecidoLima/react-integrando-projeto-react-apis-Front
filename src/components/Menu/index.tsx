import React from 'react';
import { Link } from 'react-router-dom'; // Importando Link para navegação
import styles from './Menu.module.scss'; // Importando os estilos

export default function Menu() {

  const rotas = [{
    label: 'Início',
    to: '/'
  }, {
    label: 'Cadastro',
    to: '/cadastro'
  }, {
    label: 'Produto',
    to: '/produto'
  }, {
    label: 'Lista de Usuários',
    to: '/lista-usuario'
  }
  
  ];

  return (
    <nav className={styles.Navbar}> {/* Adicionando a classe do menu */}
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={rota.to}>
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
