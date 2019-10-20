/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles';
import PageTitle from './PageTitle';

describe('PageTitle test', () => {
  const data = {
    children: 'children-test',
  };

  it('should show render PageTitle component', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <PageTitle {...data} />
      </ThemeProvider>
    );

    expect(getByTestId('PageTitle').innerHTML).toMatch(data.children);
  });
});
