import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import BatteryCharging80Icon from '@mui/icons-material/BatteryCharging80';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import MemoryIcon from '@mui/icons-material/Memory';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <AppSettingsAltIcon />
      </ListItemIcon>
      <ListItemText primary="Touch & Display" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BatteryCharging80Icon />
      </ListItemIcon>
      <ListItemText primary="Baterias" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PhotoCameraIcon />
      </ListItemIcon>
      <ListItemText primary="Câmeras" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MemoryIcon />
      </ListItemIcon>
      <ListItemText primary="Flex e Conectores" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
   
   
    <ListItemButton>
      <ListItemIcon>
        <DoDisturbOnIcon />
      </ListItemIcon>
      <ListItemText primary="Acesso Restrito" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Sair" />
    </ListItemButton>
  </React.Fragment>
);
