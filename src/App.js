import React, { Component, Fragment } from "react";
import "@fontsource/roboto";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import BarraMenu from "./components/BarraMenu/BarraMenu";
import Footer from "./components/Footer/Footer";
import "./assets/App.css"
import './assets/index.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <BarraMenu/>
        <FormularioCadastro cadastro={aoEnviarForm} />
        <Footer/>
      </Fragment>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
