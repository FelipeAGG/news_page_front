// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div">
          Mi Aplicación de Noticias
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
