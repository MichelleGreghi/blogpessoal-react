import React from 'react';
import { AppBar, Toolbar, Typography, Box, createTheme, ThemeProvider} from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import useLocalStorage from 'react-use-localstorage';

const theme = createTheme({  
    typography: {
      "fontFamily": 
      `"Indie Flower", cursive` ,
    },
  });

function Navbar(){
    const [ token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    function goLogout(){
        setToken('')
        alert("Usuário deslogado!")
        navigate('/login')
    }

    return(
        <>
        <Typography variant="h5" style={{color: "#C9184A", fontSize: 50,background: "#FFB3C1", textAlign:"center"}}>
             Blog da Mi
        </Typography>
            <AppBar position="static" style={{background: "#FFB3C1"}}  >
                <Toolbar variant="dense" >
                <ThemeProvider theme={theme}>
                    <Box className='cursor'>
                    </Box>
                    <Box display="flex" justifyContent="start">
                        <Link to='/home' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                    <Typography variant="h6" style={{color: "#C9184A"}}>
                                        Home
                                    </Typography>
                            </Box>
                        </Link>
                        <Link to="/formularioPostagem" className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" style={{color: "#C9184A"}}>
                                    Criar Postagem
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/postagens" className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" style={{color: "#C9184A"}}>
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/temas" className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" style={{color: "#C9184A"}}>
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/formularioTema" className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" style={{color: "#C9184A"}}>
                                    Cadastrar Temas
                                </Typography>
                            </Box>
                        </Link>

                            <Box mx={1} className='cursor' onClick={goLogout}>
                                <Typography variant="h6" style={{color: "#C9184A"}}>
                                    Logout
                                </Typography>
                            </Box>

                    </Box>
                    </ThemeProvider>
                </Toolbar>
            </AppBar>
          
        </>
    );
};

export default Navbar;