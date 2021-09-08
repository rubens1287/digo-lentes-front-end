import React, { Fragment } from "react";
import FormularioCadastro from "../FormularioCadastro/FormularioCadastro";
import "./estilo.css";

function Conteudo() {
  return (
    <Fragment>
      <section className="conteudo">
        <section className="destaques">
          <div className="destaques__principal caixa">
            <h3 className="destaques__titulo">Estilo</h3>
          </div>
          <div className="destaques__secundario caixa">
            <h3 className="destaques__titulo">Marcas</h3>
          </div>
          <div className="destaques__secundario caixa">
            <h3 className="destaques__titulo">Comodidade</h3>
          </div>
          <div className="destaques__secundario caixa">
            <h3 className="destaques__titulo">Visão</h3>
          </div>
        </section>
      </section>
      <FormularioCadastro cadastro={aoEnviarForm} />
    </Fragment>
  );
}

export default Conteudo;

function aoEnviarForm(dados) {
  console.log(dados);
}
