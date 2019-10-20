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
import CharacterEditLoader from './CharacterEditLoader';

describe('Verify CharacterEditLoader layout', () => {
  const params = {
    loading: false,
    character: {
      id: '123',
      name: 'name-test',
      description: 'description-test',
      thumbnail: 'thumbnail-test',
    },
    submitWithSuccess: () => {},
    handleSubmitCharacter: () => {},
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
});
