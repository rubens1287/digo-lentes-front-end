import React, { Component, Fragment } from "react";
import "@fontsource/roboto";
import BarraMenu from "./components/BarraMenu/BarraMenu";
import Footer from "./components/Footer/Footer";
import "./assets/App.css"
import './assets/index.css';
import Conteudo from "./components/Conteudo/Conteudo";

class App extends Component {
  render() {
    return (
      <Fragment>
        <BarraMenu/>
        <Conteudo/>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
