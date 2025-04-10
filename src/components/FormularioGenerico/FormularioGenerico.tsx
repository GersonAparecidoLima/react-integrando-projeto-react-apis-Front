import React, { useState } from 'react'; 
import style from './FormularioGenerico.module.scss';

interface Campo {
  label: string;
  tipo: string;
  nome: string;
  valor: string;
  required: boolean;
 
}

interface Props {
  campos: Campo[];
  onSubmit: (dados: { [key: string]: string }) => void;
  tipoFormulario: string;
  
}

export default function FormularioGenerico({ campos, onSubmit, tipoFormulario }: Props) {
  // Estado dos dados do formulário
  const [dadosFormulario, setDadosFormulario] = useState<Record<string, string>>(
    campos.reduce((acc, campo) => {
      acc[campo.nome] = campo.valor || '';
      return acc;
    }, {} as Record<string, string>)
  );

  // Estado para armazenar os erros de validação
  const [erros, setErros] = useState<Record<string, string>>({});

  // Função para atualizar o estado conforme o usuário digita
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDadosFormulario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Função para validar o formulário
  const validarFormulario = () => {
    const novosErros: Record<string, string> = {};

    // Itera sobre os campos e valida se os campos obrigatórios estão preenchidos
    campos.forEach((campo) => {
      if (campo.required && !dadosFormulario[campo.nome]) {
        novosErros[campo.nome] = `${campo.label} é obrigatório.`;
      }
    });

    setErros(novosErros); // Atualiza o estado de erros
    return Object.keys(novosErros).length === 0; // Se não houver erros, o formulário é válido
  };

  // Função para enviar os dados do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Previne o comportamento padrão de envio do formulário
    if (validarFormulario()) {
      onSubmit(dadosFormulario); // Envia os dados para o componente pai
    }
  };

  return (
    <form className={style.formularioGenerico} onSubmit={handleSubmit}>
      {campos.map((campo) => (
        <div key={campo.nome} className={style.inputContainer}>
          <label htmlFor={campo.nome}>{campo.label}</label>
          <input
            type={campo.tipo}
            name={campo.nome}
            id={campo.nome}
            value={dadosFormulario[campo.nome]}
            onChange={handleInputChange}
            required
          />
          {/* Exibindo a mensagem de erro se houver */}
          {erros[campo.nome] && <div className={style.popError}>{erros[campo.nome]}</div>}
        </div>
      ))}     
    </form>
  );
}
