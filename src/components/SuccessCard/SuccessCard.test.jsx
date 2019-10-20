/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles';
import SuccessCard from './SuccessCard';

describe('SuccessCard test', () => {
  const data = {
    children: 'children-test',
  };

  it('should show render SuccessCard component', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <SuccessCard {...data} />
      </ThemeProvider>
    );

    expect(getByTestId('SuccessCard').innerHTML).toMatch(data.children);
  });
});
