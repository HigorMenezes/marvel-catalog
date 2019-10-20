/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles';
import Loading from './Loading';

describe('Loading test', () => {
  const data = {
    loading: true,
  };

  it('should show render loading component', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Loading {...data} />
      </ThemeProvider>
    );

    expect(getByTestId('Loading')).not.toBeNull();
  });
});
