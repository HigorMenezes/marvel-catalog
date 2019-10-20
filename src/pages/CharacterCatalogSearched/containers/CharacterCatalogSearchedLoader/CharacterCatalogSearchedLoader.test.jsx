/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import { MockedProvider } from '@apollo/react-testing';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { theme } from '../../../../styles';
import { marvelql } from '../../../../api';
import { store } from '../../../../store';
import CharacterCatalogSearchedLoader from './CharacterCatalogSearchedLoader';

import { GET_ALL_CHARACTERS_BY_START_NAME } from './queries';

const charactersMock = [
  {
    request: {
      query: GET_ALL_CHARACTERS_BY_START_NAME,
      variables: { offset: 10, limit: 0, where: { nameStartsWith: 'hulk' } },
    },
    result: () => {
      return {
        data: {
          characters: [
            {
              id: '1009351',
              thumbnail:
                'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0.jpg',
              name: 'Hulk',
              __typename: 'Character',
            },
          ],
        },
      };
    },
  },
];

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

  it('should click on card', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MockedProvider mocks={charactersMock} addTypename={false}>
          <MemoryRouter initialEntries={['/characters']}>
            <ThemeProvider theme={theme}>
              <CharacterCatalogSearchedLoader {...config} />
            </ThemeProvider>
          </MemoryRouter>
        </MockedProvider>
      </Provider>
    );

    const button = await waitForElement(() =>
      getByTestId('CharacterCard')
        .getElementsByClassName('card')
        .item(0)
    );
    fireEvent.click(button);
  });
});
