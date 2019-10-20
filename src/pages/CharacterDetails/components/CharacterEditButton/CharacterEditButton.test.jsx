/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles';
import CharacterEditButton from './CharacterEditButton';

describe('CharacterEditButton test', () => {
  const data = {
    handleEditCharacter: () => {},
  };

  it('should show a button to edit character', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CharacterEditButton {...data} />
      </ThemeProvider>
    );
    expect(
      getByTestId('CharacterEditButton').getElementsByTagName('button')
    ).not.toBeNull();
  });
});
