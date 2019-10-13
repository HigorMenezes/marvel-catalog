import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import { AppLayout } from './layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppLayout />
    </ThemeProvider>
  );
}

export default App;
