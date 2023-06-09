import React, { useEffect, useState } from 'react'
import {Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import {Box} from '@mui/material';
import './DeletarPostagem.css';
import {useNavigate, useParams } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../service/Service';
import { toast } from 'react-toastify';
import { UserState } from '../../../store/token/Reducer';
import { useSelector } from 'react-redux';

function DeletarPostagem() {
    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    // const [token, setToken] = useLocalStorage('token');
    const [post, setPosts] = useState<Postagem>()

  const token = useSelector<UserState, UserState["tokens"]>(
      (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
          toast.error('Você precisa estar logado!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable:false,
            theme:"colored",
            progress: undefined,
          });
            navigate("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/postagens/${id}`, setPosts, {
            headers: {
              'Authorization': token
            }
          })
        }

        function sim() {
          navigate('/postagens')
            deleteId(`/postagens/${id}`, {
              headers: {
                'Authorization': token
              }
            });
            toast.success('Postagem deletada com sucesso!', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable:false,
              theme:"colored",
              progress: undefined,
            });
          }
        
          function nao() {
            navigate('/postagens')
          }
  return (
    <>
      <Box m={2} >
        <Card variant="outlined" >
          <CardContent style={{backgroundColor:"#fff0f3"}} >
            <Box justifyContent="center">
              <Typography style={{color: "#C9184A"}} gutterBottom>
                Deseja deletar a Postagem?
              </Typography>
              <Typography style={{color: "#C9184A"}} >
              {post?.titulo}
              </Typography>
            </Box>

          </CardContent>
          <CardActions style={{backgroundColor:"#fff0f3"}}>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={sim} variant="contained" size='large' className='btnSim'>
                Sim
              </Button>
              </Box>
              <Box>
              <Button  onClick={nao} variant="contained" size='large' className='btnNao'>
                Não
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

export default DeletarPostagem;