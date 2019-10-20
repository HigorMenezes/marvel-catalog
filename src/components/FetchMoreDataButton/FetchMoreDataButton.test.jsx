/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles';
import FetchMoreDataButton from './FetchMoreDataButton';

describe('FetchMoreDataButton test', () => {
  const data = {
    children: 'children-test',
    onClick: () => {},
    type: 'button',
  };

  it('should show a button with children text', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <FetchMoreDataButton {...data} />
      </ThemeProvider>
    );

    expect(
      getByTestId('FetchMoreDataButton').getElementsByTagName('button')
    ).not.toBeNull();
    expect(getByTestId('FetchMoreDataButton').innerHTML).toMatch(data.children);
  });
});
