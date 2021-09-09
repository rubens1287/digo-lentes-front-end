import React, { useState } from "react";
import {
  Button,
  TextField,
  Switch,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import { Container, Typography } from "@material-ui/core";
import "@fontsource/roboto";
import './estilo.css'

function FormularioCadastro({ cadastro }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocao, setPromocao] = useState(true);
  const [novidade, setNovidade] = useState(true);
  const [errosCPF, setErrosCPF] = useState({
    cpf: { valido: true, texto: "" },
  });
  const [errosNome, setErrosNome] = useState({
    nome: { valido: true, texto: "" },
  });

  function validaCPF(cpf) {
    if (cpf.length !== 11) {
      setErrosCPF({
        cpf: { valido: false, texto: "CPF deve conter 11 digitos" },
      });
    } else {
      setErrosCPF({
        cpf: { valido: true, texto: "" },
      });
    }
  }

  function validaNome(nome) {
    if (nome.length <= 0) {
      setErrosNome({
        nome: { valido: false, texto: "Você deve preencher seu nome" },
      });
    } else {
      setErrosNome({
        nome: { valido: true, texto: "" },
      });
    }
  }

  return (
    <section className="formulario">
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Solicite um orçamento
        </Typography>
        <Typography variant="caption" component="h1" align="center">
          Preencha esse formulario e deixe com a gente, nós entramos em contato.
        </Typography>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            cadastro({ nome, sobrenome, cpf, promocao, novidade });
          }}
        >
          <TextField
            value={nome}
            onChange={(event) => {
              setNome(event.target.value);
            }}
            onBlur={(event) => {
              let tempNome = event.target.value;
              validaNome(tempNome);
            }}
            id="nome-input"
            label="Nome"
            variant="outlined"
            margin="normal"
            fullWidth
            helperText={errosNome.nome.texto}
            error={!errosNome.nome.valido}
          />

          <TextField
            value={sobrenome}
            onChange={(event) => {
              setSobrenome(event.target.value);
            }}
            id="sobrenome-input"
            label="Sobrenome"
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <TextField
            value={cpf}
            onChange={(event) => {
              let tempCpf = event.target.value;
              if (tempCpf.length >= 11) {
                tempCpf = tempCpf.substr(0, 11);
              }
              setCpf(tempCpf.substr(0, 11));
            }}
            onBlur={(event) => {
              let tempCpf = event.target.value;
              validaCPF(tempCpf);
            }}
            id="cpf-input"
            label="CPF"
            variant="outlined"
            margin="normal"
            fullWidth
            helperText={errosCPF.cpf.texto}
            error={!errosCPF.cpf.valido}
            type="number"
          />

          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={promocao}
                  onChange={(event) => setPromocao(event.target.checked)}
                  name="promocao"
                  color="primary"
                />
              }
              label="Promoções"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={novidade}
                  onChange={(event) => setNovidade(event.target.checked)}
                  name="novidade"
                  color="primary"
                />
              }
              label="Novidades"
            />
          </FormGroup>

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Solicitar Orçamento
          </Button>
        </form>
      </Container>
    </section>
  );
}

export default FormularioCadastro;
