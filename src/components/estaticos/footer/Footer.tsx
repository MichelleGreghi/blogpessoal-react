import React from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Footer(){
    return(
        <>
           <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{backgroundColor: "#DDA0DD", height: "120px"}}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{color:"white"}}>Siga-nos nas redes sociais</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/MichelleGreghi" target="_blank"><GitHubIcon style={{fontSize: 60, color: "white"}}/> </a>
                            <a href="https://www.linkedin.com/in/michellegreghi/" target="_blank"><LinkedInIcon style={{fontSize: 60, color: "white"}}/> </a>
                            <a href="michelle.neves23@gmail.com" target="_blank"><MailOutlineIcon style={{fontSize: 60, color: "white"}}/> </a>
                        </Box>
                    </Box>
                    <Box style={{backgroundColor:"#DDA0DD", height:"60px"}}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{color:"white"}}>© 2023 Copyright</Typography>
                        </Box>

                    </Box>
                </Grid>

           </Grid>
        </>
    )
}

export default Footer;
