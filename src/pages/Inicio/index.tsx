import Cadastro from '../Cadastro/Cadastro';  // Importação do componente Cadastro

export default function Inicio() {
  return (
    <section>
      <h3>
        Bem-vindo ao Aplicativo
      </h3>
      <div>
        {/* Usando o componente Cadastro */}
        <Cadastro />
      </div>
    </section>
  );
}
