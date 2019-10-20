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
import CharacterDetailsLoader from './CharacterDetailsLoader';

describe('Verify CharacterDetailsLoader layout', () => {
  const config = {
    loading: false,
    character: {
      id: '123',
      name: 'name-test',
      description: 'description-test',
      thumbnail: 'thumbnail-test',
    },
    series: [
      {
        id: '321',
        title: 'title-test',
        thumbnail: 'thumbnail-test',
        description: 'description-test',
      },
    ],
    handleEditCharacter: () => {},
    thereAreMoreSeries: true,
    handleFetchMoreSeries: () => {},
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
});
