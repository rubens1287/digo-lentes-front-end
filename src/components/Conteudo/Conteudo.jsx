import React, { Fragment } from "react";
import FormularioCadastro from "../FormularioCadastro/FormularioCadastro";
import "./estilo.css";
import { makeStyles } from '@material-ui/core/styles';
import logo from "../../static/architect.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Conteudo() {
  const classes = useStyles();

  return (
    <Fragment>
      <header className="w3-display-container w3-content w3-wide" id="home">
        <img className="w3-image" src={logo} alt="Architecture" width="2000" height="500"/>
        <div className="w3-display-middle w3-margin-top w3-center">
          <h1 className="w3-xxlarge w3-text-white">
            <span className="w3-padding w3-black w3-opacity-min">
              <b>DIGO</b>
            </span> 
            <span className="w3-hide-small w3-text-light-grey"> LENTES</span>
          </h1>
        </div>
      </header>
      <div className="w3-content w3-padding" id="home">
        <div className="w3-container w3-padding-32" id="armacoes">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Amarções</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="w3-container w3-padding-32" id="lentes">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Lentes</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="w3-container w3-padding-32" id="depoimentos">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Depoimentos</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="w3-container w3-padding-32" id="contact">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Contato</h3>
          <p>Lets get in touch and talk about your next project.</p>
          <FormularioCadastro cadastro={aoEnviarForm} />
        </div>
      </div>
    </Fragment>
  );
}

export default Conteudo;

function aoEnviarForm(dados) {
  console.log(dados);
}
