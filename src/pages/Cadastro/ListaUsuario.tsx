import React, { useEffect, useState } from 'react';
import style from './ListaUsuario.module.scss';

type Usuario = {
  nome: string;
};

const ListaUsuario = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [erro, setErro] = useState('');

  const fetchUsuarios = async () => {
    try {
      const response = await fetch('http://localhost:3000/usuarios');
      if (!response.ok) {
        throw new Error('Erro ao carregar usuários');
      }
      const data: Usuario[] = await response.json();
      setUsuarios(data);
    } catch (error) {
      if (error instanceof Error) {
        setErro(error.message);
      } else {
        setErro('Erro desconhecido');
      }
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  return (
    <div className={style.listaUsuarioContainer}>
      <h2>Lista de Usuários</h2>
      {erro && <p className={style.erro}>{erro}</p>}
      <table className={style.tabelaUsuarios}>
        <thead>
          <tr>
            <th className={style.tituloColuna}>Nome</th>

          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={index}>
              <td className={style.usuarioNome}>{usuario.nome}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaUsuario;
