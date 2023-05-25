import React from "react";
import { Typography, Box, Grid } from "@material-ui/core";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "./Footer.css";
import { useSelector } from "react-redux";
import { UserState } from "../../../store/token/Reducer";

function Footer() {

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
      );

  var footerComponent;

  if(token !== "") {
  footerComponent = (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" item xs={12}>
        <Box className="box1">
          <Box
            paddingTop={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              className="textos"
            >
              Siga-nos nas redes sociais
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <a href="https://github.com/MichelleGreghi" target="_blank">
              <GitHubIcon className="redes" />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/michellegreghi/"
              target="_blank"
            >
              <LinkedInIcon className="redes" />{" "}
            </a>
            <a href="michelle.neves23@gmail.com" target="_blank">
              <MailOutlineIcon className="redes" />{" "}
            </a>
          </Box>
        </Box>
        <Box className="box2">
          <Box paddingTop={1}>
            <Typography
              variant="subtitle2"
              align="center"
              gutterBottom
              className="textos"
            >
              © 2023 Copyright
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
  }
  return <>{footerComponent}</>;
}

export default Footer;
