import React from "react";
import {AppBar, Toolbar, Typography, Box, createTheme, ThemeProvider} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import useLocalStorage from "react-use-localstorage";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../../store/token/Reducer";
import { addToken } from "../../../store/token/Actions";
import {toast} from 'react-toastify';

const theme = createTheme({
  typography: {
    fontFamily: `"Indie Flower", cursive`,
  },
});

function Navbar() {
  // const [token, setToken] = useLocalStorage("token");

  const dispatch = useDispatch();

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  let navigate = useNavigate();

  function goLogout() {
    dispatch(addToken(""));
    
    toast.info('Usuário deslogado!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable:false,
      theme:"colored",
      progress: undefined,
    });

    navigate("/login");
  }

  var navbarComponent;

  if (token !== "") {
    navbarComponent = (
      
      
      <AppBar position="static" style={{ background: "#FFB3C1" }}>
        <Toolbar variant="dense">
          <ThemeProvider theme={theme}>
          <Link to="/home" className="blog">
            <Typography
              variant="h5"
              style={{
                color: "#C9184A",
                fontSize: 50,
                background: "#FFB3C1",
                textAlign: "center",
              }}
            >
              Blog da Mi
            </Typography>
            </Link>
            <Box className="cursor"></Box>
            <Box display="flex" justifyContent="start">
              <Link to="/home" className="navbar">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" style={{ color: "#C9184A" }}>
                    Home
                  </Typography>
                </Box>
              </Link>
              {/* <Link to="/formularioPostagem" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" style={{ color: "#C9184A" }}>
                    Criar Postagem
                  </Typography>
                </Box>
              </Link> */}
              <Link to="/postagens" className="navbar">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" style={{ color: "#C9184A" }}>
                    Postagens
                  </Typography>
                </Box>
              </Link>
              <Link to="/temas" className="navbar">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" style={{ color: "#C9184A" }}>
                    Temas
                  </Typography>
                </Box>
              </Link>
              {/* <Link to="/formularioTema" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" style={{ color: "#C9184A" }}>
                    Cadastrar Temas
                  </Typography>
                </Box>
              </Link> */}
              <Link to="/perfil" className="navbar">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" style={{ color: "#C9184A" }}>
                    Perfil de Usuário
                  </Typography>
                </Box>
              </Link>
              <Link to="/atualizar-perfil" className="navbar">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" style={{ color: "#C9184A" }}>
                    Atualizar o Perfil de Usuário
                  </Typography>
                </Box>
              </Link>

              <Box mx={1} className="navbar" onClick={goLogout}>
                <Typography variant="h6" style={{ color: "#C9184A" }}>
                  Logout
                </Typography>
              </Box>
            </Box>
          </ThemeProvider>
        </Toolbar>
      </AppBar>
    );
    
  }
  return <>{navbarComponent}</>;
}

export default Navbar;
