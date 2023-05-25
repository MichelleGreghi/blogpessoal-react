import React, { useState, useEffect } from "react";
import "./ListaTema.css";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import Tema from "../../../models/Tema";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { busca } from "../../../service/Service";
import { useSelector } from "react-redux";
import { UserState } from "../../../store/token/Reducer";
import { toast } from "react-toastify";

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>();
  // const [token, setToken] = useLocalStorage('token');

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  let navigate = useNavigate();

  useEffect(() => {
    if (token === "") {
      toast.error("Você precisa estar logado!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login");
    }
  }, [token]);

  async function getTema() {
    await busca("/temas", setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getTema();
  }, [temas?.length]);

  return (
    <>
      {temas?.map((tema) => (
        <Box m={2}>
          <Card variant="outlined">
            <CardContent style={{ backgroundColor: "#fff0f3" }}>
              <Typography style={{ color: "#C9184A" }} gutterBottom>
                Tema
              </Typography>
              <Typography
                style={{ color: "#C9184A" }}
                variant="h5"
                component="h2"
              >
                {tema.descricao}
              </Typography>
            </CardContent>

            <CardActions style={{ backgroundColor: "#fff0f3" }}>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link to={`/temas/${tema.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      size="small"
                      className="btnAtualizar"
                    >
                      Atualizar
                    </Button>
                  </Box>
                </Link>
                <Link
                  to={`/deletarTema/${tema.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      size="small"
                      className="btnDeletar"
                    >
                      Deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaTema;
