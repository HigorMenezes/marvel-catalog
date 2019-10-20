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
import CharacterCatalogLoader from './CharacterCatalogLoader';

import { GET_ALL_CHARACTERS } from './queries';

const charactersMock = [
  {
    request: {
      query: GET_ALL_CHARACTERS,
      variables: { offset: 1, limit: 0 },
    },
    result: () => {
      return {
        data: {
          characters: [
            {
              id: '1011334',
              thumbnail:
                'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
              name: '3-D Man',
              __typename: 'Character',
            },
          ],
        },
      };
    },
  },
];

describe('Verify CharacterCatalogLoader layout', () => {
  const config = {
    offset: 1,
  };

  it('should render CharacterCardList layout', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ApolloProvider client={marvelql}>
          <MemoryRouter initialEntries={['/characters']}>
            <ThemeProvider theme={theme}>
              <CharacterCatalogLoader {...config} />
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
              <CharacterCatalogLoader {...config} />
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
