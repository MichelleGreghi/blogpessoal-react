import React, { ChangeEvent, useEffect, useState } from "react";
import "./CadastroUsuario.css";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import User from "../../models/User";
import { cadastroUsuario } from "../../service/Service";
import { toast } from "react-toastify";

function CadastroUsuario() {
  let navigate = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState<String>("");
  const [user, setUser] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (userResult.id != 0) {
      navigate("/login");
    }
  }, [userResult]);

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (confirmarSenha === user.senha) {
      try {
        await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
        toast.success("Usuário cadastrado com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
        });
      } catch (error) {
        console.log(error);
        toast.error("Erro ao cadastrar o Usuário! O Usuário já existe!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
        });
      }
    } else {
      toast.error(
        "Erro ao cadastrar o Usuário! Verifique os dados e tente novamente.",
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
        }
      );
    }
  }
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const validarEmail = emailRegex.test(user.usuario);

  const nomeOk = user.nome.length > 0 && user.nome.length < 3;
  const usuarioOk = !validarEmail && user.usuario.length > 0;
  const senhaOk = user.senha.length > 0 && user.senha.length < 8;
  const confirmarSenhaOk = confirmarSenha !== user.senha;
  const vazio =
    user.nome.length === 0 ||
    user.usuario.length === 0 ||
    user.senha.length === 0 ||
    confirmarSenha.length === 0;

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6} className="imagem2"></Grid>
      <Grid item xs={6} alignItems="center">
        <Box paddingX={10}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              component="h3"
              align="center"
              className="textos2"
            >
              Cadastrar
            </Typography>
            <TextField
              error={nomeOk}
              value={user.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="nome"
              label="nome"
              variant="outlined"
              name="nome"
              margin="normal"
              fullWidth
              helperText={nomeOk ? "Digite um nome válido!" : ""}
            />
            <TextField
              error={usuarioOk}
              value={user.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="usuario"
              label="usuario"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
              helperText={usuarioOk ? "Digite um e-mail válido!" : ""}
            />
            <TextField
              value={user.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="foto"
              label="foto"
              variant="outlined"
              name="foto"
              margin="normal"
              fullWidth
            />
            <TextField
              error={senhaOk}
              value={user.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
              helperText={
                senhaOk ? "A senha precisa ter no mínimo 8 caracteres" : ""
              }
            />
            <TextField
              error={confirmarSenhaOk}
              value={confirmarSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                confirmarSenhaHandle(e)
              }
              id="confirmarSenha"
              label="confirmarSenha"
              variant="outlined"
              name="confirmarSenha"
              margin="normal"
              type="password"
              fullWidth
              helperText={confirmarSenhaOk ? "As senhas não conferem!" : ""}
            />
            <Box marginTop={2} textAlign="center">
              <Link to="/login">
                <Button variant="contained" className="botaoCancelar">
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                variant="contained"
                className="botaoCadastrar"
                disabled={
                  nomeOk || usuarioOk || senhaOk || confirmarSenhaOk || vazio
                    ? true
                    : false
                }
              >
                Cadastrar
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CadastroUsuario;
