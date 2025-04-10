import React, { useState } from 'react';
import style from './Cadastro.module.scss';
import FormularioGenerico from '../../components/FormularioGenerico/FormularioGenerico';


function Cadastro() {
  // Definindo o estado dos campos do formulário
  const [dadosCadastro, setDadosCadastro] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  // Função de manipulação do submit do formulário
  function handleSubmit(dados: { [key: string]: string }) {
    // Aqui você pode simular o envio dos dados
    console.log('Dados do cadastro:', dados);
    // Limpa o formulário após o submit
    setDadosCadastro({
      nome: '',
      email: '',
      senha: '',
    });
  }

  // Definindo os campos do formulário
  const campos = [
    { label: 'Nome', tipo: 'text', nome: 'nome', valor: dadosCadastro.nome, required: true },
    { label: 'Email', tipo: 'email', nome: 'email', valor: dadosCadastro.email, required: true },
    { label: 'Senha', tipo: 'password', nome: 'senha', valor: dadosCadastro.senha, required: true },
  ];

  return (
    <div className={style.cadastro}>

      <h2>Cadastro de Usuário</h2>
      <FormularioGenerico 
        campos={campos} 
        onSubmit={handleSubmit} 
        tipoFormulario="cadastro" 
      />
      
      <button 
        className={style.botaoProduto} 
        onClick={() => handleSubmit(dadosCadastro)} // Aqui chamamos a função de submit
      >
        Cadastrar
      </button>
    </div>
  );
}

export default Cadastro;