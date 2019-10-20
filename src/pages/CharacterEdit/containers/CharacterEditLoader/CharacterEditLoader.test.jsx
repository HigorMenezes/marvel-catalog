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
import CharacterEditLoader from './CharacterEditLoader';

import { GET_CHARACTER_BY_ID } from './queries';

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
];

describe('Verify CharacterEditLoader layout', () => {
  const params = {
    characterId: 1017100,
  };

  it('should render CharacterEditRender', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ApolloProvider client={marvelql}>
          <MemoryRouter initialEntries={['/edit?character_id=123']}>
            <ThemeProvider theme={theme}>
              <CharacterEditLoader {...params} />
            </ThemeProvider>
          </MemoryRouter>
        </ApolloProvider>
      </Provider>
    );
    expect(getByTestId('CharacterEditRender')).not.toBeNull();
  });

  it('should submit form', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MockedProvider mocks={charactersMock} addTypename={false}>
          <MemoryRouter initialEntries={['/edit?character_id=123']}>
            <ThemeProvider theme={theme}>
              <CharacterEditLoader {...params} />
            </ThemeProvider>
          </MemoryRouter>
        </MockedProvider>
      </Provider>
    );

    const form = await waitForElement(() =>
      getByTestId('CharacterEditForm')
        .getElementsByTagName('form')
        .item(0)
    );
    fireEvent.submit(form);
  });

  it('should submit form twice', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MockedProvider mocks={charactersMock} addTypename={false}>
          <MemoryRouter initialEntries={['/edit?character_id=123']}>
            <ThemeProvider theme={theme}>
              <CharacterEditLoader {...params} />
            </ThemeProvider>
          </MemoryRouter>
        </MockedProvider>
      </Provider>
    );

    const form = await waitForElement(() =>
      getByTestId('CharacterEditForm')
        .getElementsByTagName('form')
        .item(0)
    );
    fireEvent.submit(form);
    fireEvent.submit(form);
  });
});
