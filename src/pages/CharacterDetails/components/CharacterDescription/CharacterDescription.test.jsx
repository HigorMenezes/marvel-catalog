/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles';
import CharacterDescription from './CharacterDescription';

describe('CharacterDescription test', () => {
  const data = {
    description: 'description teste',
  };

  it('should show description of data', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CharacterDescription {...data} />
      </ThemeProvider>
    );
    expect(getByTestId('CharacterDescription').innerHTML).toMatch(
      data.description
    );
  });
});
