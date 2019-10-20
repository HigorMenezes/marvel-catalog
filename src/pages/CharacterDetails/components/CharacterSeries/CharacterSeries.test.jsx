/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles';
import CharacterSeries from './CharacterSeries';

describe('CharacterSeries test', () => {
  const data = {
    title: 'title-test',
    thumbnail: 'thumbnail-test',
    description: 'description-test',
  };

  it('should show a series', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CharacterSeries {...data} />
      </ThemeProvider>
    );
    expect(getByTestId('CharacterSeries').innerHTML).toMatch(data.title);
    expect(getByTestId('CharacterSeries').innerHTML).toMatch(data.thumbnail);
    expect(getByTestId('CharacterSeries').innerHTML).toMatch(data.description);
  });
});
