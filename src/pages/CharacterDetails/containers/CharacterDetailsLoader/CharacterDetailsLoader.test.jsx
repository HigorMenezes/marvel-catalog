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
import CharacterDetailsLoader from './CharacterDetailsLoader';

import { GET_CHARACTER_BY_ID, GET_SERIES_BY_CHARACTER_ID } from './queries';

const charactersMock = [
  {
    request: {
      query: GET_CHARACTER_BY_ID,
      variables: { where: { id: 1017100 } },
    },
    result: () => {
      return {
        data: {
          characters: [
            {
              id: '1017100',
              name: 'A-Bomb (HAS)',
              thumbnail:
                'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg',
              description:
                "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
              __typename: 'Character',
            },
          ],
        },
      };
    },
  },
  {
    request: {
      query: GET_SERIES_BY_CHARACTER_ID,
      variables: { offset: 3, limit: 0, where: { characters: [1017100] } },
    },
    result: () => {
      return {
        data: {
          series: [
            {
              id: '17765',
              title: 'FREE COMIC BOOK DAY 2013 1 (2013)',
              thumbnail:
                'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
              description: null,
              __typename: 'Series',
            },
          ],
        },
      };
    },
  },
];

describe('Verify CharacterDetailsLoader layout', () => {
  const config = {
    characterId: 1017100,
  };

  it('should render CharacterDetailsRender', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ApolloProvider client={marvelql}>
          <MemoryRouter initialEntries={['/details?character_id=123']}>
            <ThemeProvider theme={theme}>
              <CharacterDetailsLoader {...config} />
            </ThemeProvider>
          </MemoryRouter>
        </ApolloProvider>
      </Provider>
    );
    expect(getByTestId('CharacterDetailsRender')).not.toBeNull();
  });

  it('should click on EditCharacter button', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MockedProvider mocks={charactersMock} addTypename={false}>
          <MemoryRouter initialEntries={['/details?character_id=1017100']}>
            <ThemeProvider theme={theme}>
              <CharacterDetailsLoader {...config} />
            </ThemeProvider>
          </MemoryRouter>
        </MockedProvider>
      </Provider>
    );
    const button = await waitForElement(() =>
      getByTestId('CharacterEditButton')
        .getElementsByTagName('button')
        .item(0)
    );
    fireEvent.click(button);
  });
});
