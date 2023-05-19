import React from 'react'
import './ListaTema.css'
import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

function ListaTema(){

    return(
        <>
            <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Tema
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Minha descrição
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="center" mb={1.5}>

                            <Link to="" className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant="contained" className="marginLeft" size='small' style={{ backgroundColor: "#FFB3C1", color:"#FFFFFF"}}>
                                        Atualizar
                                    </Button>
                                </Box>
                            </Link>
                            <Link to="" className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant="contained" size='small' color="secondary">
                                        Deletar
                                    </Button>
                                </Box>
                            </Link>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}

export default ListaTema;