/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles';
import CharacterHeader from './CharacterHeader';

describe('CharacterHeader test', () => {
  const data = {
    handleEditCharacter: () => {},
    children: 'header-test',
  };

  it('should show the header', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CharacterHeader {...data} />
      </ThemeProvider>
    );
    expect(getByTestId('CharacterHeader').innerHTML).toMatch(data.children);
  });
});
