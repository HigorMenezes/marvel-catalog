/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
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
});
