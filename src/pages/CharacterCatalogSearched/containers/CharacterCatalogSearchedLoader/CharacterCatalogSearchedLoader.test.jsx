/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { theme } from '../../../../styles';
import { marvelql } from '../../../../api';
import { store } from '../../../../store';
import CharacterCatalogSearchedLoader from './CharacterCatalogSearchedLoader';

describe('Verify CharacterCatalogSearchedLoader layout', () => {
  const config = {
    offset: 10,
    search: 'hulk',
  };

  it('should render CharacterCardList layout', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ApolloProvider client={marvelql}>
          <MemoryRouter initialEntries={['/characters']}>
            <ThemeProvider theme={theme}>
              <CharacterCatalogSearchedLoader {...config} />
            </ThemeProvider>
          </MemoryRouter>
        </ApolloProvider>
      </Provider>
    );
    expect(getByTestId('CharacterCardList')).not.toBeNull();
  });
});
