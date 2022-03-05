import * as React from 'react';
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

import MenuAdmin from "../../../components/menu-admin"

import LogoAtc from '../../../assets/img/logo.png';
import '../../../assets/css/logo.css';


const mdTheme = createTheme();

export default function Dashboard() {
  return(
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
            <Grid container spacing={3}>
              
            
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
