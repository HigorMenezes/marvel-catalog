import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { theme } from '../../styles';
import { marvelql } from '../../api';
import { store } from '../../store';
import CharacterCatalog from './CharacterCatalog';

describe('Character Catalog Page Layout', () => {
  it('should render page title and card list', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ApolloProvider client={marvelql}>
            <MemoryRouter initialEntries={['/characters']}>
              <CharacterCatalog />
            </MemoryRouter>
          </ApolloProvider>
        </Provider>
      </ThemeProvider>
    );
    expect(getByTestId('PageTitle').textContent).toEqual('Character Catalog');
    expect(getByTestId('CharacterCatalogLoader')).not.toBeNull();
  });
});
