import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import { marvelql } from './api';
import { GlobalStyle, theme } from './styles';
import { AppLayout } from './layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ApolloProvider client={marvelql}>
        <AppLayout />
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
