/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles';
import CharacterDetailsRender from './CharacterDetailsRender';

describe('Verify Character Details Render', () => {
  const characterDetails = {
    loading: false,
    character: {
      id: '123',
      name: 'name-test',
      description: 'description-test',
      thumbnail: 'thumbnail-test',
    },
    series: [
      {
        id: '321',
        title: 'title-test',
        thumbnail: 'thumbnail-test',
        description: 'description-test',
      },
    ],
    handleEditCharacter: () => {},
    thereAreMoreSeries: true,
    handleFetchMoreSeries: () => {},
  };

  it('should render character layout', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CharacterDetailsRender {...characterDetails} />
      </ThemeProvider>
    );

    expect(getByTestId('CharacterHeader')).not.toBeNull();
    expect(getByTestId('CharacterDescription')).not.toBeNull();
    expect(getByTestId('CharacterSeries')).not.toBeNull();
    expect(getByTestId('FetchMoreDataButton')).not.toBeNull();
  });
});
