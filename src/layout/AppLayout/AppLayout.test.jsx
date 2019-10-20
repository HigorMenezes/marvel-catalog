import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
import { theme } from '../../styles';
import { marvelql } from '../../api';
import { store } from '../../store';
import AppLayout from './AppLayout';

describe('Layout', () => {
  it('should render the application layout', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ApolloProvider client={marvelql}>
            <AppLayout />
          </ApolloProvider>
        </Provider>
      </ThemeProvider>
    );
    expect(getByTestId('navbar')).not.toBeNull();
    expect(getByTestId('main-content')).not.toBeNull();
  });
});
