/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles';
import SearchInput from './SearchInput';

describe('SearchInput test', () => {
  const data = {
    value: 'value-test',
    onChange: jest.fn(),
    onSubmit: jest.fn(),
  };

  it('should render SearchInput component', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <SearchInput {...data} />
      </ThemeProvider>
    );

    expect(
      getByTestId('SearchInput')
        .getElementsByTagName('form')
        .item(0)
    ).not.toBeNull();
    expect(
      getByTestId('SearchInput')
        .getElementsByTagName('input')
        .item(0)
    ).not.toBeNull();
    expect(
      getByTestId('SearchInput')
        .getElementsByTagName('button')
        .item(0)
    ).not.toBeNull();
    expect(getByTestId('SearchInput').innerHTML).toMatch(data.value);
  });

  it('should click on submit button', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <SearchInput {...data} />
      </ThemeProvider>
    );

    fireEvent.submit(
      getByTestId('SearchInput')
        .getElementsByTagName('form')
        .item(0)
    );
    expect(data.onSubmit).toHaveBeenCalledTimes(1);
  });
});
