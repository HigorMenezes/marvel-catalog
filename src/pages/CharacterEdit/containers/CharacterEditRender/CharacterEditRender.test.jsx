/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles';
import CharacterEditRender from './CharacterEditRender';

describe('Verify Character Details Render', () => {
  const characterDetails = {
    loading: false,
    character: {
      id: '123',
      name: 'name-test',
      description: 'description-test',
      thumbnail: 'thumbnail-test',
    },
    handleSubmitCharacter: () => {},
    submitWithSuccess: () => {},
  };

  it('should render character layout', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CharacterEditRender {...characterDetails} />
      </ThemeProvider>
    );

    expect(getByTestId('CharacterEditForm')).not.toBeNull();
  });
});
