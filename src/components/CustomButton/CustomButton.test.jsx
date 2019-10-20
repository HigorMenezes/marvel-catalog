/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles';
import CustomButton from './CustomButton';

describe('CustomButton test', () => {
  const data = {
    children: 'children-test',
    handleClick: () => {},
    buttonType: 'button',
    buttonDisabled: false,
    className: 'class-test',
  };

  it('should show a button with children text', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CustomButton {...data} />
      </ThemeProvider>
    );

    expect(
      getByTestId('CustomButton').getElementsByTagName('button')
    ).not.toBeNull();
    expect(getByTestId('CustomButton').innerHTML).toMatch(data.children);
  });
});
