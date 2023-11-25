// App.js
import React, { useEffect } from 'react';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import ReactGA from 'react-ga';
import Header from './components/Header.js';
import ArticleList from './components/ArticleList.js';
import Footer from './components/Footer.js';
import Video from './components/Video.js';

const theme = createTheme();

function App() {
  useEffect(() => {
    // Inicializar Google Analytics con tu ID de seguimiento
    ReactGA.initialize('G-N5QCM1BHT7');
    // Enviar una página vista inicial
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container sx={{ overflowY: 'auto', height: '100%', marginTop: '20px' }}>
        <Video />
        <ArticleList />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
