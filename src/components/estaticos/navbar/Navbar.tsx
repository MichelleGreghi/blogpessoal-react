import React from 'react';
import { AppBar, Toolbar, Typography, Box, createTheme, ThemeProvider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css'

const theme = createTheme({  
    typography: {
      fontFamily: 
      '"Indie Flower", cursive',
    },
  });

function Navbar(){
    return(
        <>
            <AppBar position="static" style={{background: "#DDA0DD"}}  >
                <Toolbar variant="dense">
                <ThemeProvider theme={theme}>
                    <Box style={{cursor: "pointer"}}>
                        <Typography variant="h5" style={{color: "#800F2F", fontSize: 50}}>
                            BlogPessoal
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="start">
                        <Link to='/home' className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer"}}>
                                <Typography variant="h6" style={{color: "#590D22"}}>
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Box mx={1} style={{ cursor: "pointer"}}>
                            <Typography variant="h6" style={{color: "#590D22"}}>
                                Criar Postagem
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer"}}>
                            <Typography variant="h6" style={{color: "#590D22"}}>
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer"}}>
                            <Typography variant="h6" style={{color: "#590D22"}}>
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer"}}>
                            <Typography variant="h6" style={{color: "#590D22"}}>
                                Cadastrar Temas
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer"}}>
                                <Typography variant="h6" style={{color: "#590D22"}}>
                                    Logout
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                    </ThemeProvider>
                </Toolbar>
            </AppBar>
          
        </>
    );
};

export default Navbar;