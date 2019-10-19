import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
import { marvelql } from './api';
import store from './store';
import { GlobalStyle, theme } from './styles';
import { AppLayout } from './layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <ApolloProvider client={marvelql}>
          <AppLayout />
        </ApolloProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
