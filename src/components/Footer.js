// Footer.js
import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Container
      component="footer"
      textAlign="center"
      mt={2}
      sx={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        width: '100%',
        textAlign: 'right',
        padding: '10px',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © 2023 Mi Aplicación de Noticias
      </Typography>
    </Container>
  );
};

export default Footer;
