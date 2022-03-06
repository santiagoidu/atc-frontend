import React from "react";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';

import '../../../assets/css/card.css'
import MenuAdmin from "../../../components/menu-admin"

import Asus from '../../../assets/img/asus.png'
import Apple from '../../../assets/img/apple.png'
import LG from '../../../assets/img/lg.png'
import Lenovo from '../../../assets/img/lenovo.png'
import Motorola from '../../../assets/img/motorola.png'
import Samsung from '../../../assets/img/samsung.png'
import Sony from '../../../assets/img/sony.png'
import Xiaomi from '../../../assets/img/xiaomi.png'

export default function Baterias() {
  
const mdTheme = createTheme();
  return (
    <ThemeProvider theme={mdTheme}>
    <Box sx={{ display: 'flex', backgroundColor: '#068D54', }}>
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
          <Grid container spacing={1}>
         <h1 class="titulo">Baterias</h1>
            {/* card apple */}
            <div class="card">
            <img src={Apple} />
            </div>
            {/* card asus */}
            <div class="card">
            <img src={Asus} />
            </div>
            {/* card LG */}
            <div class="card">
            <img src={LG} />
            </div>
            {/* card Lenovo */}
            <div class="card">
            <img src={Lenovo} />
            </div>
            {/* card Motorola */}
            <div class="card">
            <img src={Motorola} />
            </div>   
            {/* card Samsung */}
            <div class="card">
            <img src={Samsung} />
            </div>          
            {/* card Sony */}
            <div class="card">
            <img src={Sony} />
            </div>
            {/* card Xiaomi */}
            <div class="card">
            <img src={Xiaomi} />
            </div>          
          </Grid>
        </Container>
      </Box>
    </Box>
  </ThemeProvider>
  );
}


