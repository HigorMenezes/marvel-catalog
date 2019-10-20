/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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
    handleClickOnCard: jest.fn(),
    handleFetchMoreCharacters: jest.fn(),
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

  it('should click on card', () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <CharacterCardList {...data} />
      </ThemeProvider>
    );

    fireEvent.click(
      getAllByTestId('CharacterCard')[0]
        .getElementsByClassName('card')
        .item(0)
    );

    expect(data.handleClickOnCard).toHaveBeenCalledTimes(1);
  });

  it('should display empty card list message', () => {
    const newData = { ...data, characters: [] };
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <CharacterCardList {...newData} />
      </ThemeProvider>
    );

    expect(getByText('No data found')).not.toBeNull();
  });

  it('should call handleFetchMoreCharacters function', () => {
    const newData = { ...data, thereAreMoreCharacters: true };
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <CharacterCardList {...newData} />
      </ThemeProvider>
    );

    fireEvent.click(getByText('Fetch more characters'));

    expect(data.handleFetchMoreCharacters).toHaveBeenCalledTimes(1);
  });
});
