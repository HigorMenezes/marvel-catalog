import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { theme } from './styles';
import { marvelql } from './api';
import { store } from './store';
import Routes from './routes';

describe('Routes', () => {
  it('should render Character Catalog Page by / endpoint ', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ApolloProvider client={marvelql}>
            <MemoryRouter initialEntries={['/']}>
              <Routes />
            </MemoryRouter>
          </ApolloProvider>
        </Provider>
      </ThemeProvider>
    );
    expect(getByTestId('CharacterCatalog')).not.toBeNull();
  });

  it('should render Character Catalog Page by /characters endpoint ', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ApolloProvider client={marvelql}>
            <MemoryRouter initialEntries={['/characters']}>
              <Routes />
            </MemoryRouter>
          </ApolloProvider>
        </Provider>
      </ThemeProvider>
    );
    expect(getByTestId('CharacterCatalog')).not.toBeNull();
  });

  it('should render Character Catalog Searched Page by /results endpoint ', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ApolloProvider client={marvelql}>
            <MemoryRouter initialEntries={['/results?search_query=hulk']}>
              <Routes />
            </MemoryRouter>
          </ApolloProvider>
        </Provider>
      </ThemeProvider>
    );
    expect(getByTestId('CharacterCatalogSearched')).not.toBeNull();
  });

  it('should render Character Details Page by /details endpoint ', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ApolloProvider client={marvelql}>
            <MemoryRouter initialEntries={['/details?character_id=1017098']}>
              <Routes />
            </MemoryRouter>
          </ApolloProvider>
        </Provider>
      </ThemeProvider>
    );
    expect(getByTestId('CharacterDetail')).not.toBeNull();
  });

  it('should render Character Editing Page by /edit endpoint ', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ApolloProvider client={marvelql}>
            <MemoryRouter initialEntries={['/edit?character_id=1017098']}>
              <Routes />
            </MemoryRouter>
          </ApolloProvider>
        </Provider>
      </ThemeProvider>
    );
    expect(getByTestId('CharacterEdit')).not.toBeNull();
  });
});
