import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import TextField from '@mui/material/TextField';
import MenuAdmin from "../../../components/menu-admin"

import LogoAtc from '../../../assets/img/logo.png';
import '../../../assets/css/logo.css';
import InputMarcas from '../../../components/inputMarcas';
import InputTipo from '../../../components/inputTipo';


const mdTheme = createTheme();

export default function CadastrarProduto() {
  return(
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex', }}>
        <CssBaseline />
              <MenuAdmin />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4, }}>
              
            <Typography variant="h6" gutterBottom>
        Cadastrar produto
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputMarcas />
        </Grid>
        <Grid item xs={12} sm={6}>
        <InputTipo />
        </Grid>
        <Grid item xs={12}>
        <InputLabel id="modelo">Foto do produto</InputLabel>
        <input type="file" name="file" />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            id="produto"
            name="produto"
            label="Nome Produto"
            fullWidth
            autoComplete="oroduto"
            variant="standard"
          />
          <TextField
            required
            id="preco"
            name="preco"
            label="Preço - Sempre colocar o R$ antes do valor"
            fullWidth
            autoComplete="R$00.00"
            variant="standard"
          />
        </Grid>
      </Grid>
          </Container>
          <button id='salvar'>Salvar</button>
          <button id='editar'>Editar</button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
