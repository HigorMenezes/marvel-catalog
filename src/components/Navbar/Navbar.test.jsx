/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { theme } from '../../styles';
import Navbar from './Navbar';

describe('Navbar test', () => {
  const data = {
    loading: true,
  };

  it('should show render navbar component', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/']}>
          <Navbar {...data} />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(getByTestId('Navbar')).not.toBeNull();
    expect(getByTestId('NavbarLink')).not.toBeNull();
    expect(getByTestId('SearchInput')).not.toBeNull();
  });

  it('should change value of input and submit', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/']}>
          <Navbar {...data} />
        </MemoryRouter>
      </ThemeProvider>
    );

    const input = getByTestId('SearchInput')
      .getElementsByTagName('input')
      .item(0);
    fireEvent.change(input, { target: { value: 'hulk' } });
    const form = getByTestId('SearchInput')
      .getElementsByTagName('form')
      .item(0);
    fireEvent.submit(form);
    expect(input.value).toBe('hulk');
  });
});
