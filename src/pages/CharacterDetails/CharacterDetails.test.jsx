import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { theme } from '../../styles';
import { marvelql } from '../../api';
import { store } from '../../store';
import CharacterDetails from './CharacterDetails';

describe('Character Detail Page Layout', () => {
  it('should render page title and card list', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ApolloProvider client={marvelql}>
            <MemoryRouter initialEntries={['/details?character_id=1017098']}>
              <CharacterDetails />
            </MemoryRouter>
          </ApolloProvider>
        </Provider>
      </ThemeProvider>
    );
    expect(getByTestId('PageTitle').textContent).toEqual('Character Details');
    expect(getByTestId('CharacterDetailsLoader')).not.toBeNull();
  });
});
