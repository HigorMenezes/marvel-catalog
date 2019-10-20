/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles';
import CharacterCard from './CharacterCard';

describe('CharacterCard test', () => {
  const data = {
    name: 'name-test',
    thumbnail: 'thumbnail-test',
    handleClickOnCard: () => {},
  };

  it('should show a character card', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CharacterCard {...data} />
      </ThemeProvider>
    );
    expect(getByTestId('CharacterCard').innerHTML).toMatch(data.name);
    expect(getByTestId('CharacterCard').innerHTML).toMatch(data.thumbnail);
  });
});
