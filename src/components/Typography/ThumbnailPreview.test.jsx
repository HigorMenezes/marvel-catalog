/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles';
import Typography from './Typography';

describe('Typography test', () => {
  const data = {
    variant: 'h1',
    children: 'children-test',
  };

  it('should show render Typography(h1) component', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Typography {...data} />
      </ThemeProvider>
    );

    expect(
      getByTestId('Typography')
        .getElementsByTagName('h1')
        .item(0)
    ).not.toBeNull();
    expect(getByTestId('Typography').innerHTML).toMatch(data.children);
  });

  it('should show render Typography(h2) component', () => {
    const newData = { ...data, variant: 'h2' };
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Typography {...newData} />
      </ThemeProvider>
    );

    expect(
      getByTestId('Typography')
        .getElementsByTagName('h2')
        .item(0)
    ).not.toBeNull();
    expect(getByTestId('Typography').innerHTML).toMatch(data.children);
  });

  it('should show render Typography(h2) component', () => {
    const newData = { ...data, variant: 'h3' };
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Typography {...newData} />
      </ThemeProvider>
    );

    expect(
      getByTestId('Typography')
        .getElementsByTagName('h3')
        .item(0)
    ).not.toBeNull();
    expect(getByTestId('Typography').innerHTML).toMatch(data.children);
  });

  it('should show render Typography(h4) component', () => {
    const newData = { ...data, variant: 'h4' };
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Typography {...newData} />
      </ThemeProvider>
    );

    expect(
      getByTestId('Typography')
        .getElementsByTagName('h4')
        .item(0)
    ).not.toBeNull();
    expect(getByTestId('Typography').innerHTML).toMatch(data.children);
  });

  it('should show render Typography(p) component', () => {
    const newData = { ...data, variant: 'p1' };
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Typography {...newData} />
      </ThemeProvider>
    );

    expect(
      getByTestId('Typography')
        .getElementsByTagName('p')
        .item(0)
    ).not.toBeNull();
    expect(getByTestId('Typography').innerHTML).toMatch(data.children);
  });
});
