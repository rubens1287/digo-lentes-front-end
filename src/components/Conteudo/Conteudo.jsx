import React, { Fragment } from "react";
import FormularioCadastro from "../FormularioCadastro/FormularioCadastro";
import "./estilo.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
      <section className="conteudo">
        <section className="destaques">
          <div className="destaques__logo caixa" />
          <div className="destaques__principal caixa">
            <h3 className="destaques__titulo">Estilo</h3>
          </div>
          <div className="destaques__secundario caixa">
            <h3 className="destaques__titulo">Marcas</h3>
          </div>
          <div className="destaques__secundario caixa">
            <h3 className="destaques__titulo">Comodidade</h3>
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
