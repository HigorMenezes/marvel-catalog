/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles';
import ThumbnailPreview from './ThumbnailPreview';

describe('ThumbnailPreview test', () => {
  const data = {
    thumbnailUrl: 'thumbnailUrl-test',
    alt: 'alt-test',
    className: 'className-test',
  };

  it('should show render ThumbnailPreview component', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ThumbnailPreview {...data} />
      </ThemeProvider>
    );

    expect(getByTestId('ThumbnailPreview').innerHTML).toMatch(
      data.thumbnailUrl
    );
    expect(getByTestId('ThumbnailPreview').innerHTML).toMatch(data.alt);
    expect(getByTestId('ThumbnailPreview').outerHTML).toMatch(data.className);
  });
});
