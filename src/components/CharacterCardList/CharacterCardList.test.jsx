/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles';
import CharacterCardList from './CharacterCardList';

describe('CharacterCardList test', () => {
  const data = {
    characters: [
      { name: 'name-test1', thumbnail: 'thumbnail-test1', id: '123-test1' },
      { name: 'name-test2', thumbnail: 'thumbnail-test2', id: '123-test2' },
      { name: 'name-test3', thumbnail: 'thumbnail-test3', id: '123-test3' },
    ],
    loading: false,
    thereAreMoreCharacters: false,
    handleClickOnCard: () => {},
    handleFetchMoreCharacters: () => {},
  };

  it('should show a list of character card', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CharacterCardList {...data} />
      </ThemeProvider>
    );

    data.characters.forEach(character => {
      expect(getByTestId('CharacterCardList').innerHTML).toMatch(
        character.name
      );
      expect(getByTestId('CharacterCardList').innerHTML).toMatch(
        character.thumbnail
      );
    });
  });
});
